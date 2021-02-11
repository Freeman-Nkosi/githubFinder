import React, { Component } from "react";

export default class search extends Component {
  state = {
    search: "",
  };
  clearUsers = () => {
    this.setState({ search: "" });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === "") {
      this.props.setAlert( "Please enter a user",  "light" );
    } else {
      this.props.searchUsers(this.state.search);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="search"
            placeholder="Search users... "
            value={this.state.search}
            onChange={this.onChange}
          />{" "}
        < input
            type="submit"
            value="Search"
            className=" btn btn-dark btn-block"
          />
        </form>{" "}
        {this.state.search !== "" && (
          <button className="btn btn-light btn-block" onClick={this.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
