import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./Home";
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Header/>
            <Route exact path='/' component={Home}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
