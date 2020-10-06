import React from "react";
import style from "../scss/CompletedItem.module.scss"

function CompletedItem({title,description,author,date}){

    return(
        <div className={style.items}>
            <p>{title}</p>
            <p>{description}</p>
            <p>{author}</p>
            <p>{date}</p>
        </div>
    )
}

export default CompletedItem;