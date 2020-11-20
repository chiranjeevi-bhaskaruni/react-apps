import React from 'react'
import './SearchClient.css'
const SearchClient = ({ searchHandler , placeholder}) => {
  return (
    <div
      style={{
        marginTop: 10,
      }}
    >
      <input
        type="search"
        placeholder={placeholder}
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchClient
