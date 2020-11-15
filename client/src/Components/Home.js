import React,{useEffect,useState} from 'react';
import {list} from "../utils/pollService";
import LoginForm from "./LoginForm";

function Home(){
    const [polls, setPolls] = useState(null);
    const [errors, setErrors] = useState(null);

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