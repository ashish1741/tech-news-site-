import React from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <div className="search_section">
      <h1 className="title">Tech News Site</h1>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => searchPost(e.target.value)}
      />
    </div>
  );
};

export default Search;
