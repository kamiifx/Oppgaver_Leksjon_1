import React from 'react';
import {
    BrowserRouter as Router,
    Switch,                             //Testing av router, har det bare her så jeg kan gå tilbake til det.
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
                  <Route>
                      <IndexPage />
                  </Route>
              </Switch>
          </Router>
      </>
  );
}

export default App;
