import React, { useState, useEffect } from "react";
import User from "./User";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("JokerHin");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search by username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mr-2 border-2 px-4 py-2"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 cursor-pointer rounded-sm bg-green-500 p-2 text-white transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
        >
          Search
        </button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
