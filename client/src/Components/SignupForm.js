import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {createUser} from "../utils/authService";
import {useAuthContex} from "../contex/authProvider";


function SignupForm(){
    const [error,setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})
    const onSubmit = async (cred) => {
        const data = await createUser(cred);
        setSuccess(true);
        history.push('/');

    };

    return(
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="email" placeholder="Your email" name="email" ref={register({required:true})} />
                <button type="submit">Create user</button>
            </form>
        </div>
    )
}
export default SignupForm;