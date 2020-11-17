import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {create} from "../utils/pollService";
import styled from "styled-components";
import {Container,Box,FormControl,Input,Button,Flex,FormLabel} from "@chakra-ui/react";
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

    return(
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <Container  borderWidth="1px" borderRadius="lg" mt="130px" maxW="330px" h="320px" centerContent>
                <Box>
                    <FormControl>
                        <Flex direction="column">
                            <FormLabel mt="10px">Poll name</FormLabel>
                            <Input type="text" id="questionName" placeholder="Poll name" name="questionName" ref={register({required:true,})}/>
                            <FormLabel mt="10px">Poll Option 1</FormLabel>
                            <Input type="text" id="answerOne" placeholder="Option 1 text" name="answerOne" ref={register({required:true,})}/>
                            <FormLabel mt="10px">Poll Option 2</FormLabel>
                            <Input type="text" id="answerTwo" placeholder="Option 2 text" name="answerTwo" ref={register({required:true,})}/>
                            <Button mt="10px" type="submit">Create</Button>
                        </Flex>
                    </FormControl>
                </Box>
            </Container>
        </Box>

    )
}

export default CreatePoll;