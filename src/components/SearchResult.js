import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies, searchTVShows, searchSportsContent } from '../tmdbService';
import './SearchResult.css';

const SearchResult = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState({ movies: [], tvShows: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const searchResults = await searchSportsContent(query);
      setResults(searchResults);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="results-container">
        {results.movies.length > 0 && (
          <div>
            <h2>Movies</h2>
            <div className="cards-container">
              {results.movies.map(movie => (
                <div key={movie.id} className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h4>{movie.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
        {results.tvShows.length > 0 && (
          <div>
            <h2>TV Shows</h2>
            <div className="cards-container">
              {results.tvShows.map(show => (
                <div key={show.id} className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={show.name} />
                  <h4>{show.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
        {results.movies.length === 0 && results.tvShows.length === 0 && (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
