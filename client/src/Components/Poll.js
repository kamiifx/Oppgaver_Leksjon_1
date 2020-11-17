import React,{useEffect,useState} from 'react';
import {get} from "../utils/pollService";
import {vote1} from "../utils/pollService";

import { useParams } from 'react-router-dom';
import {Box, Container, Progress,Button,Flex,Spacer} from "@chakra-ui/react";


function Poll() {
    const [poll, setPoll] = useState(null);
    const { id } = useParams();

    useEffect(async () => {
        if (id){
            const { data } = await get(id);
            setPoll(data);
        }
    }, [id]);

    const votePoll = async () => {
        const {data} = await vote1(id)
        console.log(data,poll)
        setPoll(data)
        console.log(poll.answerOneVal)
    }
    return(
        <div>
            <Container mt="50px" maxW="400px" centerContent>
                {poll && (
                    <Box  color="gray.500"
                         fontWeight="semibold"
                         letterSpacing="wide"
                         fontSize="35px"
                         textTransform="uppercase"
                         ml="2" p="3">
                        <h3>{poll.questionName}</h3>
                        <Flex>
                            <Box width="90%" mt="10px" fontSize="20px" color="blue.400">
                                <p>{poll.answerOne}</p>
                                <Progress value={poll.answerOneVal} />
                            </Box>
                                <Spacer/>
                                <Button mt="28px" ml="16px" h="33px" onClick={votePoll}>Vote</Button>
                        </Flex>
                        <Flex>
                            <Box width="90%" mt="10px" fontSize="20px" color="blue.400">
                                <p>{poll.answerTwo}</p>
                                <Progress value={poll.answerTwoVal} />
                            </Box>
                            <Spacer/>
                            <Button mt="28px" ml="16px" h="33px" onClick={votePoll}>Vote</Button>
                        </Flex>

                        <Box color="green.400" mt="15px" fontSize="10px">
                            <p>Created by : {poll.user.email}</p>
                            <p>Created : {poll.createdAt}</p>
                        </Box>
                    </Box>
                )}
            </Container>
        </div>
    )
}
export default Poll;