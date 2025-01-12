import React, { useState, useEffect } from "react";
import Suggestions from "./suggesstions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilterUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) //check input data inside the query or not
          : [];
      setFilterUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(e) {
    setSearchParam(e.target.innerText);
    setShowDropdown(false);
    setFilterUsers([]);
  }

  async function fetchListOfUers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUers();
  }, []);

  if (error) {
    <div>Error Occur</div>;
  }
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data... Please Wait...</h1>
      ) : (
        <input
          className="rounded-sm border-2 p-2"
          name="search-users"
          placeholder="Search Users here.."
          value={searchParam}
          onChange={handleChange}
        ></input>
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
