import React, { useState } from "react";

const Search = ({handleSearch}) => {
  const [word, setWord] = useState("");
  const onSearch = (e) =>{
    e.preventDefault();
    handleSearch(word);
  }
  return (
    <header>
      <form className="search-container card" onSubmit={onSearch}>
        <input
          type="text"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          placeholder="Type your word..."
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>
    </header>
  );
};

export default Search;
