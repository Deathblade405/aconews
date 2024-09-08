import React, { useState, useEffect } from 'react';
import { fetchNews } from '../hooks/useFetchNews';
import './HomePage.css';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchNews(page, searchQuery);
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]); // Optionally handle the error by clearing the news data
      }
    };

    fetchData();
  }, [page, searchQuery]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className="news-container">
        {news.length > 0 ? (
          news.map(article => (
            <NewsCard key={article.url} article={article} />
          ))
        ) : (
          <p className="no-news">No news available</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
