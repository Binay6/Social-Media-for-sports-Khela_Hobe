import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './trending.css' ;

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '58d2240b591e47c381e00b6b46a431d1'; // Replace with your NewsAPI key
  const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading sports news...</p>;
  if (error) return <p>Error fetching news: {error.message}</p>;

  return (
    <div>
      <h1>Latest Sports News</h1>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
