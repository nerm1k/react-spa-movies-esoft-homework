import React, { useState, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialMovies } from "../../store/reducers";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";
import ButtonCategory from "../ButtonCategory/ButtonCategory";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater, addComment, ADD_COMMENT } from "../../store/actions";
import styles from './FilmPage.module.scss';

export default function FilmPage(){
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);
    const comments = useSelector((state) => state.comments);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [id]);

    function toggleFavourite(id){
        if (favourites.includes(id)){
            dispatch(removeFromFavourites(id));
        }
        else{
            dispatch(addToFavourites(id));
        }
    }

    function toggleWatchLater(id){
        if (watchLater.includes(id)){
            dispatch(removeFromWatchLater(id));
        }
        else{
            dispatch(addToWatchLater(id));
        }
    }

    const film = initialMovies.find(movie => {
        return movie.id == id;
    });

    const genres = film.genres;
    const similarGenresArray = [];

    if (genres.length > 1){
        similarGenresArray[0] = genres[Math.floor(Math.random() * genres.length)];
        similarGenresArray[1] = similarGenresArray[0];
        while (similarGenresArray[1] == similarGenresArray[0]){
            similarGenresArray[1] = genres[Math.floor(Math.random() * genres.length)];
        }
    } else{
        similarGenresArray[0] = genres[Math.floor(Math.random() * genres.length)];
    }
    
    const similarFilms = initialMovies.filter(movie => similarGenresArray.every(genre => movie.genres.includes(genre)) && movie.href != film.href);
    
    function handleSubmit(e){
        e.preventDefault();
        if (comment != ''){
            dispatch(addComment(film.id, comment));
            setComment('');
        }
    }

    const isFavourite = favourites.includes(film.id) ? true : false;
    const isWatchLater = watchLater.includes(film.id) ? true : false;
    const commentsMovie = comments.filter(movie => movie.id == film.id);

    return(
        <>
            <div className={styles.film}>
                <div className={styles.film__title}>
                    {film.title}
                </div>
                <div className={styles.film__rating}>
                    Рейтинг: {film.rating}
                </div>
                <div className={styles.film__year}>
                    Год выпуска: {film.year}
                </div>
                <div className={styles.film__img}>
                    <img src={film.thumbnail}/>
                    <div className={styles.film__category}>
                        <ButtonCategory isActive={isFavourite} onClick={() => toggleFavourite(film.id)}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </ButtonCategory>
                        <ButtonCategory isActive={isWatchLater} onClick={() => toggleWatchLater(film.id)}>
                            <i className="fa-solid fa-bookmark"></i>
                            <i className="fa-regular fa-bookmark"></i>
                        </ButtonCategory>
                    </div>
                </div>
                <div className={styles['film__cast-and-genres-wrapper']}>
                    <div className={styles['film__cast-and-genres-wrapper__cast']}>
                        Актеры:
                        <ul>
                            {film.cast.map((actor, i) => 
                                <li key={i}>{actor}</li>
                            )}
                        </ul>
                    </div>
                    <div className={styles['film__cast-and-genres-wrapper__genres']}>
                        Жанры:
                        <ul>
                            {film.genres.map((genre, i) => 
                                <li key={i}>{genre}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={styles.film__description}>
                    {film.description}
                </div>
                <div className={styles['add-comment']}>
                    <AddComment id={film.id} comment={comment} setComment={setComment} handleSubmit={handleSubmit}/>
                </div>
            </div>

            <div className="comments">
                {commentsMovie.length > 0 && commentsMovie[0].comments.map((c, i) => {
                    return(
                        <Comment key={i} text={c}/>
                    )
                })}
            </div>
            <div className="similar-films">
                <h3 className="similar-films__title">Фильмы с похожими категориями</h3>
                {similarFilms.map(movie => (
                    <div key={movie.id} className="similar-film">
                        <Link to={`../../films/${movie.id}`}>
                            <div className="similar-film__title">
                                {movie.title}
                            </div>
                        </Link>
                        <div className="similar-film__thumbnail" style={{width: '60px'}}>
                            <img src={movie.thumbnail} alt=""/>
                        </div>
                        <div className="similar-film__rating">
                            {movie.rating}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}