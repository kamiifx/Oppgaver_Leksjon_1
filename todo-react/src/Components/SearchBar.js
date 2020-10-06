import React, {useState} from "react"
import style from "../scss/Search.module.scss"
import SearchModal from "./SearchModal";

function SearchBar({addTodo,completeTodo}){
    const [searchOn, setSearchOn] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [description,setDescription] = useState("")
    const [author,setAuthor] = useState("")
    const [date,setDate] = useState("")
    const [searchValid, setSearchValid] = useState(false)

    const modalInfoHandler = () =>{
        completeTodo.filter((item) => {
            if (item.title === searchText){
                setSearchValid(true)
                setDescription(item.description)
                setAuthor(item.author)
                setDate(item.date)
            }else {
                setSearchValid(false)
            }
        })
    }

    const searchHandler = (e) =>{
        if (e.target.value.length>0){
            setSearchOn(true)

        }else {
            setSearchOn(false)
        }
        setSearchText(e.target.value)
    }

    return(
        <div style={{top:addTodo.length>0?"10px":"30px"}} className={style.searchBar}>
            <SearchModal description={description} author={author} date={date} setDescript={setDescription} setAuthor={setAuthor} setDate={setDate}
                         completeTodo={completeTodo} searchText={searchText} searchOn={searchOn}
            searchValid={searchValid}/>
            <input type="text" onKeyUp={modalInfoHandler} onChange={searchHandler} placeholder={"Search based on title"}/>
        </div>
    )
}

export default SearchBar;