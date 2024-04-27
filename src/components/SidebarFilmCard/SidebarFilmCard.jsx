import React from "react";
import { Link } from "react-router-dom";

export default function SidebarFilmCard({id, title, href, thumbnail, toggleFavourite, toggleWatchLater, isFavourite, isWatchLater}){
    return(
        <div className="sidebar__film">
            <div className="sidebar__film__image" style={{width: '50px'}}>
                <img src={thumbnail} alt="" />
            </div>
            <div className="sidebar__film__title">
                <Link to={`films/${href}`}>
                    {title}
                </Link>
            </div>
            {isFavourite && (
                <button onClick={() => toggleFavourite(id)}>
                    -F
                </button>
            )}
            {isWatchLater && (
                <button onClick={() => toggleWatchLater(id)}>
                    -W
                </button>
            )}
        </div>
    )
}