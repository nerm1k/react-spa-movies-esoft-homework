import React from "react";

export default function Comment({text}){
    return(
        <div className="comment">
            <div className="comment__author">
                Анонимный пользователь
            </div>
            <div className="comment__text">
                {text}
            </div>
        </div>
    )
}