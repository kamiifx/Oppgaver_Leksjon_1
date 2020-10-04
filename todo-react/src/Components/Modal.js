import React from "react";
import style from "../scss/Modal.module.scss"
import createUID from "create-unique-id"
import {useForm} from "react-hook-form";

function Modal({modalOn, setModalOn,tittleText, setTitleText,descText,setDescText,authText,setAuthText, addTodo,setAddToDo}){
    const titleHandler = (e) =>{setTitleText(e.target.value)}
    const desciptHandler = (e) =>{setDescText(e.target.value)}
    const authHandler = (e) =>{setAuthText(e.target.value)}
    const closeModal = () =>{setModalOn(false)}
    const modalFormHandler = (e) =>{
        e.preventDefault()
        setAddToDo([...addTodo,{title: tittleText, description:descText, author:authText, id: createUID(4) }])
        setAuthText("")
        setDescText("")
        setTitleText("")
    }
    return(
        <div style={{display:modalOn?"block":"none"}} className={style.backgroundModal}>
            <div className={style.mainModal}>
                <form action="" onSubmit={modalFormHandler}>
                    <div className={style.headerModal}>
                        <h3>New Todo</h3>
                        <span onClick={() => setModalOn(false)}>&#10799;</span>
                    </div>
                    <p>Title</p>
                    <input value={tittleText} onChange={titleHandler} name={"title"} type="text" placeholder={"Tittel"}/>
                    <p>Description</p>
                    <input value={descText} onChange={desciptHandler} name={"description"}  type="text" placeholder={"Description"}/>
                    <p>Author</p>
                    <input value={authText} onChange={authHandler} name={"author"}  type="text" placeholder={"Author"}/>
                    <button type={"submit"} onClick={closeModal}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;