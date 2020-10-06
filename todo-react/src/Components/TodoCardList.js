import React from "react";
import ToDoCard from "./ToDoCard";
import style from "../scss/TodoCardList.module.scss"
function TodoCardList({addTodo,setTodo,completeTodo,setCompleteTodo}){

    return(
        <div>
            <ul className={style.todoCard}>
                {addTodo.map((todo) => (
                    <ToDoCard setCompleteTodo={setCompleteTodo} completeTodo={completeTodo}
                              setTodo={setTodo} addTodo={addTodo}
                              todo={todo} key={todo.id}
                              title={todo.title} desc={todo.description} auth={todo.author}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoCardList;