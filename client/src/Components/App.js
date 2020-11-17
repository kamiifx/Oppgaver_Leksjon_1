import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header"
import LoginForm from "./LoginForm";
import AuthProvider, {useAuthContex} from '../contex/authProvider.js';
import CreatePoll from "./CreatePoll";
import Poll from "./Poll";
import SignupForm from "./SignupForm";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <BrowserRouter>
                    <AuthProvider>
                        <Header/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={LoginForm}/>
                        <Route exact path='/polls/create/' component={CreatePoll}/>
                        <Route exact path='/poll/:id' component={Poll}/>
                        <Route exact path='/signup' component={SignupForm}/>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </ChakraProvider>
  );
}

export default App;
