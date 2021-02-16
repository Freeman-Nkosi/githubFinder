import React, { useState,useContext} from "react";
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'
const Search = ({ setAlert }) => {
  const [search,setSearch]=useState('');
  const githubContext=useContext(GithubContext);
  const alertContext=useContext(AlertContext);
 const clearUsers = () => {
    setSearch('');
    githubContext.clearUsers();
  };
 const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
  
     alertContext.setAlert("Please enter a user", "light");
    } else {
      githubContext.searchUsers(search);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="search"
          placeholder="Search users... "
          value={search}
          onChange={onChange}
        />{" "}
        <input
          type="submit"
          value="Search"
          className=" btn btn-dark btn-block"
        />
      </form>{" "}
      {search !== "" && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search