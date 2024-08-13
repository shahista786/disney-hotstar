// src/components/Details.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTVShowDetails } from '../tmdbService';
import './Details.css';

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchTVShowDetails(id);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <div className="details">
      {details && details.name ? (
        <>
          <h2>{details.name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.name}
          />
          <p>{details.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
