import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('latest');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        <span className="toggle-text">
          {isDarkMode ? ' Light Mode' : ' Dark Mode'}
        </span>
      </button>
      <HomePage searchQuery={searchQuery} />
    </div>
  );
}

export default App;
