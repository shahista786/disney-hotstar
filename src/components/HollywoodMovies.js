// src/components/HollywoodMovies.js

import React, { useState, useEffect } from 'react';
import { fetchHollywoodMovies } from '../tmdbService';
import './Movies.css';

function HollywoodMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchHollywoodMovies()
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching Hollywood movies:', error));
  }, []);

  return (
    <div className="movies">
      <h2>Hollywood Movies</h2>
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
          <p>No Hollywood movies available</p>
        )}
      </div>
    </div>
  );
}

export default HollywoodMovies;
