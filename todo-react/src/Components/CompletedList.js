import React from "react";
import CompletedItem from "./CompletedItem";
import style from "../scss/CompletedList.module.scss"

function CompletedList({completeTodo, addTodo}){

    return (
        <div className={style.completedTodos}>
            {addTodo.length === 0 && <h3 className={style.noTodo}> Jippi! Ingen todos i dag &#127881;</h3>}
            <h2>Completed todos</h2>
            <div className={style.info}>
                <h3>Title</h3>
                <h3>Description</h3>
                <h3>Author</h3>
                <h3>Date</h3>
            </div>

            <ul className={style.todoItems}>
                {completeTodo.map((todo) => (
                    <CompletedItem  title={todo.title} description={todo.description} author={todo.author} date={todo.date}/>
                ))}
            </ul>
        </div>
    )
}

export default CompletedList;