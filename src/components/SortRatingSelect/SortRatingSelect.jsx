import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAscRating, sortDescRating, sortDefaultRating, selectAscRating, selectDescRating, selectDefaultRating } from "../../store/actions";

export default function SortRatingSelect({}){
    const dispatch = useDispatch();
    const selectedSort = useSelector((state) => state.selectSort);

    function handleChange(e){
        const sort = e.target.value;

        if (sort == 'asc'){
            dispatch(sortAscRating());
            dispatch(selectAscRating());
        }
        else if (sort == 'desc'){
            dispatch(sortDescRating());
            dispatch(selectDescRating());
        }
        else{
            dispatch(sortDefaultRating());
            dispatch(selectDefaultRating());
        }
    }

    return(
        <>
            <select name="rating" onChange={handleChange} defaultValue={selectedSort}>
                <option value="default">Без сортировки</option>
                <option value="asc">По возрастанию рейтинга</option>
                <option value="desc">По убыванию рейтинга</option>
            </select>
        </>
    )
}