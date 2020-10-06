import React from "react";
import Title from "./Title";
import style from "../scss/ToDoCard.module.scss"
import {motion} from "framer-motion";



function ToDoCard({title,desc,auth,todo,addTodo,setTodo,completeTodo,setCompleteTodo}){
    const datenow = new Date().toLocaleDateString();
    const deleteHandler = () =>{
        const removeTodo = addTodo.filter((item) => item.id !== todo.id)
        setTodo(removeTodo)
    }
    const completeHandler = () => {
        setCompleteTodo([...completeTodo,{title:todo.title,description:todo.description, author:todo.author, date: datenow ,id: todo.id}])
        deleteHandler()
    }
    return(
        <motion.div animate={{scale:[0,1.2,1]}} transition={{duration:0.3}} className={style.cards}>
            <div className={style.wrapper}>
                <Title title={title}/>
                <p>
                    {desc}
                </p>
                <p>
                    {auth}
                </p>
                <div className={style.buttons}>
                    <button onClick={completeHandler} className={style.completeC}>Complete</button>
                    <button onClick={deleteHandler} className={style.removeC}>Delete</button>
                </div>
            </div>
        </motion.div>
    )
}

export default ToDoCard;