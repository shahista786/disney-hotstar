// src/components/TollywoodMovies.js

import React, { useState, useEffect } from 'react';
import { fetchTollywoodMovies } from '../tmdbService';
import './Movies.css';

function TollywoodMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTollywoodMovies()
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching Tollywood movies:', error));
  }, []);

  return (
    <div className="movies">
      <h2>Tollywood Movies</h2>
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
          <p>No Tollywood movies available</p>
        )}
      </div>
    </div>
  );
}

export default TollywoodMovies;
