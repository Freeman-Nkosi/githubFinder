import React, { Fragment,useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
import axios from "axios";
import Search from "./components/users/search";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import User from "./components/users/User";
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import Four from './components/layout/Four';
const App =()=> {
 
//API calls

  

  
 
  
  
  
    return (
      <GithubState>     
        <AlertState>
        <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      
       
                    />
                    <Users
                     
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:username"
                render={(props) => (
                  <User
                    {...props}
                  
                  />
                )}
              />
              <Route component={Four}/>
            </Switch>
          </div>
        </div>

      </Router>
      </AlertState>
      </GithubState>
     );
  }


export default App;
