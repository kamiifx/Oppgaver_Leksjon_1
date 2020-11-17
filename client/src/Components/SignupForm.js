import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {createUser} from "../utils/authService";
import {useAuthContex} from "../contex/authProvider";
import {Container, FormControl, Input,FormLabel,Button,Flex,Box} from "@chakra-ui/react";



function SignupForm(){
    const [error,setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})
    const onSubmit = async (cred) => {
        const data = await createUser(cred);
        setSuccess(true);
        history.push('/login');

    };

    return(
        <div>
            <Container  borderWidth="1px" borderRadius="lg" mt="130px" maxW="430px" h="160px" centerContent>
                <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <FormLabel mt="15px">Email</FormLabel>
                        <Input w="400px" type="text" id="email" placeholder="Your email" name="email" ref={register({required:true})} />
                        <Button mt="20px" w="400px" bg="green.200" type="submit">Create user</Button>
                    </FormControl>
                </Box>
            </Container>
        </div>
    )
}
export default SignupForm;