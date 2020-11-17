import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {create} from "../utils/pollService";
import styled from "styled-components";
function CreatePoll(){
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const history = useHistory();
    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})

    const onSubmit = async (formData) => {
        const {data} = await create(formData);
        if (!data.success){
            setError(data.message)
        }else {
            setSuccess(true)
            history.push(`/poll/${data.data.id}`);
        }
    };

    const Input = styled.input`
        background-color:#EDF2F7;
        width:300px;
        height:50px;
        border-radius:10px;
    `;
    const Button = styled.button`
        background-color:#9AE6B4;
        height:50px;
        width:120px;
        border-radius:10px;
    `

    return(
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <p>Poll name</p>
                <Input type="text" id="questionName" placeholder="Poll name" name="questionName" ref={register({required:true,})}/>
                <p>Poll Option 1</p>
                <input type="text" id="answerOne" placeholder="Option 1 text" name="answerOne" ref={register({required:true,})}/>
                <p>Poll Option 2</p>
                <input type="text" id="answerTwo" placeholder="Option 2 text" name="answerTwo" ref={register({required:true,})}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreatePoll;