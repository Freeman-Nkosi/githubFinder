import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Users from "./components/users/users";
import axios from "axios";
import Search from "./components/users/search";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import User from "./components/users/User";
class App extends React.Component {
  state = {
    users: [],
    user:{},
    loading: false,
    alert: null,
  };
//Get a single github user
getUser= async username =>{
  console.log("username is: ",username)
  this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/users/${username}?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&
client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({ user: res.data, loading: false });
    console.log("search: ", this.state.users);
} 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 1000);
  };
  searchUsers = async (search) => {
    
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&
client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
    console.log("search: ", this.state.users);
  };
  async componentDidMount() {
    this.setState({ loading: true });

    let res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //console.log(res)
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About}/>
              <Route exact patch='/user/:username' render={
              props=>(
                <User {...props} getUser={this.getUser}  user={this.state.user} loading={this.state.loading}/>
              )
              }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
