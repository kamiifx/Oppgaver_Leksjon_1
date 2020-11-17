import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {login} from "../utils/authService";
import {useAuthContex} from "../contex/authProvider";
import styled from "styled-components";
import {Container, FormControl, Input,FormLabel,Button,Flex,Box, Form} from "@chakra-ui/react";

function LoginForm(){
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const {setUser} = useAuthContex();
    const history = useHistory();
    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})

    const onSubmit = async(creds) => {
        console.log("submit")
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
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <Container  borderWidth="1px" borderRadius="lg" mt="130px" maxW="430px" h="160px" centerContent>
                <Box>
                    <FormControl>
                        <FormLabel mt="10px">Email</FormLabel>
                        <Flex direction="column">
                            <Input w="400px" type="text" id="email" placeholder="Email" name="email"  ref={register({required:true,})}/>
                            <Button type="submit" w="400px" mt="20px" bg="green.200">Login</Button>
                        </Flex>
                    </FormControl>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginForm;