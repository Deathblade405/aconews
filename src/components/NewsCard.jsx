import React from 'react';
import './NewsCard.css';
const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.image && (
        <img src={article.image} alt={article.title} />
      )}
      <div className="content">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
