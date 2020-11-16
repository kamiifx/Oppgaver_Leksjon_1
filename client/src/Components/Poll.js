import React,{useEffect,useState} from 'react';
import {get} from "../utils/pollService";
import { useParams } from 'react-router-dom';
import {Box, Container, Progress, SimpleGrid} from "@chakra-ui/react";


function Poll() {
    const [polls, setPolls] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const { data } = await get(id);
                setPolls(data);
                console.log(data)
            };
            fetchData();
        }
    }, [id]);
    return(
        <div>
            <Container mt="50px" maxW="xl" centerContent>
                <Box  color="gray.500"
                     fontWeight="semibold"
                     letterSpacing="wide"
                     fontSize="35px"
                     textTransform="uppercase"
                     ml="2" p="3">
                    <h3>{polls.questionName}</h3>
                    <Box mt="10px" fontSize="20px" color="blue.400">
                        <p>{polls.answerOne}</p>
                        <Progress value={0} />
                    </Box>
                    <Box mt="10px" fontSize="20px" color="blue.400">
                        <p>{polls.answerTwo}</p>
                        <Progress value={0} />
                    </Box>

                    <Box color="green.400" mt="15px" fontSize="10px">
                        <p>Created by : {polls.user.email}</p>
                        <p>Created : {polls.createdAt}</p>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
export default Poll;