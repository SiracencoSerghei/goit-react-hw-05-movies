import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setInput(inputValue);
  };

  const onSubmit = (searchQuery) => {
    // Placeholder implementation for the onSubmit function
    console.log('Search query:', searchQuery);
    setSearch(searchQuery);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (input === search) {
      alert(`You have already selected ${input}, you can change your search or continue browsing`);
      return;
    }
    if (input || event.key === 'Enter') {
      onSubmit(input);
    }
  };

  const isDisabled = !input;
  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={onHandleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit" className="SearchForm-button" disabled={isDisabled}>
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;