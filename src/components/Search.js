import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
