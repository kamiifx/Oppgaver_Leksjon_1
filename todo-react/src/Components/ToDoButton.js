import React from "react";
import style from "../scss/ToDoButton.module.scss";

function ToDoButton({setToggleModal}){
    return(
        <div>
            <button onClick={() => setToggleModal(true)}  className={style.todoButton}>Todo +</button>
        </div>
    )
}

export default ToDoButton;