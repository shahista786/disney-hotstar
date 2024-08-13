// src/components/TVShowsByLanguage.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTVShowsByLanguage } from '../tmdbService';
import './TVShowsByLanguage.css';

const TVShowsByLanguage = () => {
  const [tvShows, setTVShows] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const language = query.get('language');

  useEffect(() => {
    if (language) {
      fetchTVShowsByLanguage(language).then(setTVShows);
    }
  }, [language]);

  const getLanguageName = () => {
    switch (language) {
      case 'mr':
        return 'Marathi';
      case 'hi':
        return 'Hindi';
      case 'en':
        return 'English';
      default:
        return 'TV Shows';
    }
  };

  return (
    <div className="tvshows-container">
      <h1>{getLanguageName()} TV Shows</h1>
      <div className="tvshows-grid">
        {tvShows.map(show => (
          <div key={show.id} className="tvshow-card">
            <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={show.name} />
            <h2>{show.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsByLanguage;
