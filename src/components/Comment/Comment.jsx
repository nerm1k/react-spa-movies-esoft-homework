import React from "react";
import styles from './Comments.module.scss';

export default function Comment({text}){
    return(
        <div className={styles.comment}>
            <div className={styles.comment__author}>
                От кого: Анонимный пользователь
            </div>
            <div className={styles.comment__text}>
                {text}
            </div>
        </div>
    )
}