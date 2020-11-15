import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header"
import LoginForm from "./LoginForm";
import AuthProvider from '../contex/authProvider.js';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
                  <AuthProvider>
                      <Header/>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/login' component={LoginForm}/>
                  </AuthProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
