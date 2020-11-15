import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {login} from "../utils/authService";
import {useAuthContex} from "../contex/authProvider";

function LoginForm(){
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const {setUser} = useAuthContex();
    const history = useHistory();
    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})

    const onSubmit = async(creds) => {
        const {data} = await login(creds);
        if (!data.success){
            setError(data.message);
        } else {
            const user = data?.user;
            const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
            setUser({...user,expire})
            setSuccess(true);
            history.push('/');
        }
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" id="email" placeholder="Epost" name="email" type="email" ref={register({required:true,})}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;