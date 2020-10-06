import React, {useState} from "react";
import style from "../scss/Modal.module.scss"
import createUID from "create-unique-id"
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";


function Modal({modalOn, setModalOn,tittleText, setTitleText,descText,setDescText,authText,setAuthText, addTodo,setAddToDo}){
    const titleHandler = (e) =>{setTitleText(e.target.value)}
    const desciptHandler = (e) =>{setDescText(e.target.value)}
    const authHandler = (e) =>{setAuthText(e.target.value)}
    const closeModal = () =>{setModalOn(false)}
    const [charsLeft, setCharsLeft] = useState(50);
    const {register,handleSubmit,errors} = useForm();
    const modalFormHandler = (e) =>{
        //e.preventDefault()
        setAddToDo([...addTodo,{title: tittleText, description:descText, author:authText, id: createUID(4) }])
        setAuthText("")
        setDescText("")
        setTitleText("")
        closeModal()
    }
    const keyHandler = (e) =>{
        const textField = e.target.getAttribute("maxLength")
        const textLength = e.target.value.length;
        setCharsLeft(textField - textLength)
    }

    const variants = {
        open: { opacity:1.2},
        closed: { opacity:0}
    }
    return(
        <motion.div animate={modalOn?"open":"closed"} variants={variants}  style={{display:modalOn?"block":"none"}} className={style.backgroundModal}>
            <div className={style.mainModal}>
                <form action="" onSubmit={handleSubmit(modalFormHandler)}>
                    <div className={style.headerModal}>
                        <h3>New Todo</h3>
                        <span onClick={() => setModalOn(false)}>&#10799;</span>
                    </div>
                    <p>Title</p>
                    {errors.title && <p>Every tasks need a title</p>}
                    <input value={tittleText}  onChange={titleHandler} name={"title"} type="text" placeholder={"Tittel"} ref={register({required:true})}/>
                    <p>Description</p>
                    <p>characters left ({charsLeft})</p>
                    {errors.description && <p>Every task need a description</p>}
                    <input value={descText} maxLength={50} onKeyUp={keyHandler} onChange={desciptHandler} name={"description"}  type="text" placeholder={"Description"} ref={register({required:true})}/>
                    <p>Author</p>
                    <input value={authText} onChange={authHandler} name={"author"}  type="text" placeholder={"Author"} ref={register}/>
                    <button type={"submit"}>Create</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Modal;