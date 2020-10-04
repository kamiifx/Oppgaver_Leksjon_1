import React from "react";
import Title from "./Title";
import style from "../scss/ToDoCard.module.scss"


function ToDoCard({title,desc,auth}){
    return(
        <div className={style.cards}>
            <div className={style.wrapper}>
                <Title title={title}/>
                <p>
                    {desc}
                </p>
                <p>
                    {auth}
                </p>
                <div className={style.buttons}>
                    <button>Complete</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoCard;