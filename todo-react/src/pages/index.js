import React, {useState} from "react";
import TodoCardList from "../Components/TodoCardList";
import Modal from "../Components/Modal";
import ToDoButton from "../Components/ToDoButton";
import CompletedList from "../Components/CompletedList";

function IndexPage(){
    const [toggleModal, setToggleModal] = useState(false)
    const [addTodo, setAddTodo] = useState([])
    const [completedTodo, setCompletedTodo] = useState([])
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
           <TodoCardList setCompleteTodo={setCompletedTodo} completeTodo={completedTodo}
                         setTodo={setAddTodo} addTodo={addTodo}/>
           <CompletedList addTodo={addTodo} completeTodo={completedTodo}/>
       </main>
    )
}

export default IndexPage;