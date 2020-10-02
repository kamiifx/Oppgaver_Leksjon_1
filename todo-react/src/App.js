import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import IndexPage from "./pages";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  return (
      <>
        <NavBar name={"User user"}/>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <IndexPage />
                  </Route>
              </Switch>
          </Router>
      </>
  );
}

export default App;
