import React, { useState } from "react";
import styles from './AddComment.module.scss';

export default function AddComment({id, comment, setComment, handleSubmit}){
    return(
        <form className={styles['form-comment']} onSubmit={handleSubmit}>
            <label htmlFor="id">Добавить комментарий</label>
            <textarea className={styles.comment} id="comment" name="comment" cols="30" rows="10" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <button className={styles.button} type="submit">Написать комментарий</button>
        </form>
    )
}