import React, { useState} from 'react';
import Logo from "../Logo/Logo";
import './SearchBar.css';

const SearchBar = ({onSubmit, searchQuery}) => {

  const[input, setInput] = useState('');
  const[searched, setSearched] = useState(false);
 

  const handleInputChange = (event) => {
    const inputValue = event.target.value.trim();
    setInput(inputValue);
    setSearched(false);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (input === searchQuery){
      alert(`You have already selected ${input}, you can change your search or continue browsing`);
      return
    }
    if (input || (event.key === 'Enter' && !searched)) {
      onSubmit(input);
      setSearched(true);
    }
  };

  const isDisabled = !input || searched;
  return (
    <>
      <header className="Searchbar">

      <Logo />
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
      </header>
      {input === '' && <p className="Sorry">Sorry, you need to write something.<br /> Please choose movie.</p>}
    </>
  );
}

export default SearchBar;