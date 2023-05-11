import React, { useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onSubmit, searchQuery}) => {

  const[input, setInput] = useState('');
 

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setInput(inputValue);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (input === searchQuery){
      alert(`You have already selected ${input}, you can change your search or continue browsing`);
      return
    }
    if (input || (event.key === 'Enter')) {
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
      {input === '' && <p className="Sorry">Sorry, you need to write something.<br /> Please choose movie.</p>}
    </>
  );
}

export default SearchBar;