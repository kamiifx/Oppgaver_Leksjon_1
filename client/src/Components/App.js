import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header"
import LoginForm from "./LoginForm";
import AuthProvider, {useAuthContex} from '../contex/authProvider.js';
import CreatePoll from "./CreatePoll";
import EventGet from "./EventGet";
import SignupForm from "./SignupForm";

function App() {
    return (
      <div className="App">
          <BrowserRouter>
                  <AuthProvider>
                      <Header/>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/login' component={LoginForm}/>
                      <Route exact path='/poll/create/' component={CreatePoll}/>
                      <Route exact path='/poll/:id' component={EventGet}/>
                      <Route exact path='/signup' component={SignupForm}/>
                  </AuthProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
