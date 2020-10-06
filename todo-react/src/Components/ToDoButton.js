import React from "react";
import style from "../scss/ToDoButton.module.scss";
import { motion } from "framer-motion";


function ToDoButton({setToggleModal}){
    return(
        <div>
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.8}} onClick={() => setToggleModal(true)}  className={style.todoButton}>Todo +</motion.button>
        </div>
    )
}

export default ToDoButton;