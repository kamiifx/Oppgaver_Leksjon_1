import React, {useState} from "react";
import Title from "./Title";
import style from "../scss/ToDoCard.module.scss"
import {motion} from "framer-motion";



function ToDoCard({title,desc,auth,todo,addTodo,setTodo,completeTodo,setCompleteTodo}){
    const datenow = new Date().toLocaleDateString();
    const [opac, setOpacity] = useState(2)
    const deleteHandler = () =>{
        setOpacity(0)
        setTimeout(()=>{ const removeTodo = addTodo.filter((item) => item.id !== todo.id)
            setTodo(removeTodo)},400)
    }
    const completeHandler = () => {
        setOpacity(0)
        setTimeout(()=>{
        setCompleteTodo([...completeTodo,{title:todo.title,description:todo.description, author:todo.author, date: datenow ,id: todo.id}])
        deleteHandler()},400)
    }
    return(
        <motion.div animate={{scale:[0,1.2,1],opacity:opac}} transition={{duration:0.3}} className={style.cards}>
            <div className={style.wrapper}>
                <Title title={title}/>
                <p>
                    {desc}
                </p>
                <p>
                    {auth}
                </p>
                <div style={{marginTop:desc.length>=42?"5px":"25px"}} className={style.buttons}>
                    <button onClick={completeHandler} className={style.completeC}>Complete</button>
                    <button onClick={deleteHandler} className={style.removeC}>Delete</button>
                </div>
            </div>
        </motion.div>
    )
}

export default ToDoCard;