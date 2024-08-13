// src/components/Sports.js

import React, { useEffect, useState } from 'react';
import { searchSportsContent } from '../tmdbService'; // Adjust the import path as needed
import './Sports.css'; // Use a separate CSS file for sports

function Sports() {
  const [sportsMovies, setSportsMovies] = useState([]);
  const [sportsTVShows, setSportsTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportsContent = async () => {
      const { movies, tvShows } = await searchSportsContent();
      setSportsMovies(movies);
      setSportsTVShows(tvShows);
      setLoading(false);
    };

    fetchSportsContent();
  }, []);

  return (
    <div className="sports">
      <h2>Sports Content</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="sports-list">
          <div className="sports-section">
            <h3>Sports Movies</h3>
            <div className="sports-items">
              {sportsMovies.length > 0 ? (
                sportsMovies.map(movie => (
                  <div key={movie.id} className="sports-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="sports-poster"
                    />
                    <p>{movie.title}</p>
                  </div>
                ))
              ) : (
                <p>No sports movies available</p>
              )}
            </div>
          </div>
          <div className="sports-section">
            <h3>Sports TV Shows</h3>
            <div className="sports-items">
              {sportsTVShows.length > 0 ? (
                sportsTVShows.map(tvShow => (
                  <div key={tvShow.id} className="sports-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                      alt={tvShow.name}
                      className="sports-poster"
                    />
                    <p>{tvShow.name}</p>
                  </div>
                ))
              ) : (
                <p>No sports TV shows available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sports;
