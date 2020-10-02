import React, {useState} from "react";
import style from "../scss/Modal.module.scss"

function Modal({modalOn, setModalOn}){
    //const[modalVis, setModalVis] = useState(modalOn);

    return(
        <div style={{display:modalOn?"block":"none"}} className={style.backgroundModal}>
            <div className={style.mainModal}>
                <form action="">
                    <div className={style.headerModal}>
                        <h3>New Todo</h3>
                        <span onClick={() => setModalOn(false)}>&#10799;</span>
                    </div>
                    <p>Title</p>
                    <input type="text" placeholder={"Tittel"}/>
                    <p>Description</p>
                    <input type="text" placeholder={"Description"}/>
                    <p>Author</p>
                    <input type="text" placeholder={"Author"}/>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;