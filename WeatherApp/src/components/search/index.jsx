import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine w-full flex justify-around items-center mb-[30px] mt-[10px]">
      <input
        type="text"
        className="city-search w-[70%] h-[45px] border rounded-md py-[12px] px-[15px] text-[16px] outline-none bg-white text-gray-600"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button
        className="border-none rounded-md bg-black text-white text-[20px] outline-none cursor-pointer py-[12px] px-[15px]"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
