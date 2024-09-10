import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Header.css'; 

const Header = ({ searchQuery, setSearchQuery, toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      <div className="container">
        <h1>Aconews</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <button
          className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          {isDarkMode ? ' ' : ' '}
        </button>
      </div>
    </header>
  );
};

export default Header;
