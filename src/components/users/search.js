import React, { useState} from "react";

const Search = ({ setAlert, searchUsers }) => {
  const [search,setSearch]=useState('');
 const clearUsers = () => {
    setSearch('');
  };
 const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please enter a user", "light");
    } else {
      searchUsers(search);
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