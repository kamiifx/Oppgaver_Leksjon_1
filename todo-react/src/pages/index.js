import React, {useCallback, useState} from "react";
import style from "../scss/Index.module.scss"
import TodoCardList from "../Components/TodoCardList";
import Modal from "../Components/Modal";

function IndexPage(){
    const [toggleModal, setToggleModal] = useState(false)
    return(
       <main>
           <Modal modalOn={toggleModal} setModalOn={setToggleModal}/>
           <button onClick={() => setToggleModal(true)}  className={style.todoButton}>Todo +</button>
           <TodoCardList/>
       </main>
    )
}

export default IndexPage;