import React,{useEffect,useState} from 'react';
import {list} from "../utils/pollService";
import LoginForm from "./LoginForm";
import {useAuthContex} from "../contex/authProvider";

function Home(){
    const [polls, setPolls] = useState(null);
    const [errors, setErrors] = useState(null);
    const {isLoggedIn,setUser} = useAuthContex();

    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list()
            console.log(data,error)

            if (error){
                setErrors(error)
            }else {
                setPolls(data)
            }
        };
        fetchData();
    },[]);

    return(
        <div>
            {isLoggedIn && (
                <button><a href="/poll/create">Create Event</a></button>
            )}
            {!isLoggedIn && (
                <button><a href="/signup">Sign up</a></button>
            )}


                {polls &&
                polls.map((polls)=>(
                    <div key={polls.id}>
                        <p>{polls.questionName}</p>
                        <p>{polls.answerOne}</p>
                        <p>{polls.answerTwo}</p>
                        <p>Created by : {polls.user.email}</p>
                        <p>Created : {polls.createdAt}</p>
                    </div>
                ))}

        </div>
    )
}

export default Home;