import React, {useState} from "react";
import TodoCardList from "../Components/TodoCardList";
import Modal from "../Components/Modal";
import ToDoButton from "../Components/ToDoButton";

function IndexPage(){
    const [toggleModal, setToggleModal] = useState(false)
    const [addTodo, setAddTodo] = useState([])

    const [titleText, setTitleText] = useState("")
    const [descText, setDescText] = useState("")
    const [authText, setAuthText] = useState("")

    return(
       <main>
           <Modal modalOn={toggleModal} setModalOn={setToggleModal}
                  tittleText={titleText} setTitleText={setTitleText}
                  descText={descText} setDescText={setDescText}
                  authText={authText} setAuthText={setAuthText}
                  addTodo={addTodo} setAddToDo={setAddTodo}/>
           <ToDoButton setToggleModal={setToggleModal}/>
           <TodoCardList addTodo={addTodo}/>
       </main>
    )
}

export default IndexPage;