import React, { useState } from "react";

export default function AddComment({id, comment, setComment, handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <textarea name="comment" cols="30" rows="10" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <button type="submit">Написать комментарий</button>
        </form>
    )
}