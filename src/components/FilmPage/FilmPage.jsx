import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import movies from "../../movies-2020s";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";
import { addToFavourites, addToWatchLater, removeFromFavourites, removeFromWatchLater } from "../../store/actions";

export default function FilmPage(){
    const { href } = useParams();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourites);
    const watchLater = useSelector((state) => state.watchLater);

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

    function addComment(e){
        e.preventDefault();
        setComments([...comments, {
            id: comments.length + 1,
            text: comment
        }]);
        setComment('');
    }

    const film = movies.find(movie => {
        return movie.href == href;
    });

    const isFavourite = favourites.includes(film.id) ? true : false;
    const isWatchLater = watchLater.includes(film.id) ? true : false;

    return(
        <>
            <div className="film">
                <div className="film__title">
                    {film.title}
                </div>
                <button className={isFavourite ? "film__favourite favourite" : "film__favourite"} onClick={() => toggleFavourite(film.id)}>
                    F
                </button>
                <button className={isWatchLater ? "film__watch-later watch-later" : "film__watch-later"} onClick={() => toggleWatchLater(film.id)}>
                    W
                </button>
                <div className="film__year">
                    {film.year}
                </div>
                <div className="film__img">
                    <img src={film.thumbnail}/>
                </div>
                <div className="film__cast">
                    Актеры:
                    <ul>
                        {film.cast.map((actor, i) => 
                            <li key={i}>{actor}</li>
                        )}
                    </ul>
                </div>
                <div className="film__genres">
                    Жанры:
                    <ul>
                        {film.genres.map((genre, i) => 
                            <li key={i}>{genre}</li>
                        )}
                    </ul>
                </div>
                <div className="film__description">
                    {film.description}
                </div>
            </div>
            <div className="add-comment">
                <AddComment comment={comment} setComment={setComment} addComment={addComment}/>
            </div>
            <div className="comments">
                {comments && comments.map((c, i) => {
                    return(
                        <Comment key={i} text={c.text}/>
                    )
                })}
            </div>
        </>
    )
}