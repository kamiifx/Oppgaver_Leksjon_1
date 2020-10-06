import React,{useState} from "react";
import style from "../scss/SearchModal.module.scss"
import {motion} from "framer-motion";

function SearchModal({searchOn,searchText,completeTodo,description,author,date,setDescript,setAuthor,setDate, searchValid}){
    const variants = {
        open:{scale:[0,1.1,1]},
        close:{scale:[1,1.1,1,0]}
    }
    const variants2 = {
        open:{opacity:1},
        close:{opacity:0}
    }

    return(
        <motion.div animate={searchOn?"open":"close"} variants={variants} className={style.modalBox}>
            <div className={style.infobox}>
                <div className={style.header}>
                    <h3 style={{textTransform: 'capitalize'}}>{searchText}</h3>
                    <motion.span animate={searchValid ? "open" : "close"} variants={variants}>&#9989;</motion.span>
                </div>

                <motion.div animate={searchValid ? "open" : "close"} variants={variants2} className={style.completedInfo}>
                    <p>{description}</p>
                    <p><i>By: {author}</i></p>
                </motion.div>
                {completeTodo.length === 0 && <h3>No completed todos &#128064;</h3>}
                {searchOn === false && setDescript("")}
                {searchOn === false && setAuthor("")}
                {searchOn === false && setDate("")}
            </div>
        </motion.div>
    )
}

export default SearchModal;