// src/components/BollywoodMovies.js

import React, { useState, useEffect } from 'react';
import { fetchBollywoodMovies } from '../tmdbService';
import './Movies.css';

function BollywoodMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchBollywoodMovies()
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching Bollywood movies:', error));
  }, []);

  return (
    <div className="movies">
      <h2>Bollywood Movies</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <p>{movie.title}</p>
            </div>
          ))
        ) : (
          <p>No Bollywood movies available</p>
        )}
      </div>
    </div>
  );
}

export default BollywoodMovies;
