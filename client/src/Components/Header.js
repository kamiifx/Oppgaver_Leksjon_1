import React from 'react';
import {useAuthContex} from "../contex/authProvider";
import {logout} from "../utils/authService";
import { Flex, Spacer,Box,Button } from "@chakra-ui/react"
import {Heading} from "@chakra-ui/layout";

function Header(){
    const {isLoggedIn,setUser} = useAuthContex();
    const handleLogout = async() => {
        await logout();
        setUser(null);
    }
    return(
        <Box boxShadow="base" borderWidth="1px" borderRadius="lg"  width="100%">
            <Flex>
                <Box mt="5px" color="gray.700" fontFamily="Menlo, monospace" p="2">
                    <Heading size="md"><a href="/">Polly</a></Heading>
                </Box>
                <Spacer />
                <Box p="2">
                    {!isLoggedIn &&(
                        <Button bg="green.200" mr="4"><a href="/login">Login with Email</a></Button>
                    )}
                    {!isLoggedIn &&(
                        <Button bg="green.200"><a href="/signup">Sign Up</a></Button>
                    )}
                    {isLoggedIn &&(
                        <Button bg="red.200" onClick={handleLogout}><a href="/">Logout</a></Button>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export default Header;
