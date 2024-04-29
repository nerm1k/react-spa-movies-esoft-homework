import React from "react";
import styles from "./ButtonCategory.module.scss";

export default function ButtonCategory({isActive, onClick, children}){
    return(
        <button className={styles.btn_category} onClick={onClick}>
            {isActive ? children[0] : children[1]}
        </button>
    )
}