import React from "react";
import CompletedItem from "./CompletedItem";
import SearchBar from "./SearchBar";
import style from "../scss/CompletedList.module.scss"

function CompletedList({completeTodo, addTodo}){
    return (
        <div style={{position:addTodo.length>0?"sticky":"absolute",marginTop:addTodo.length>0?"75px":"20px"}} className={style.completedTodos}>
            {addTodo.length === 0 && <h3 className={style.noTodo}> Jippi! Ingen todos i dag &#127881;</h3>}
            <SearchBar completeTodo={completeTodo} addTodo={addTodo}/>
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