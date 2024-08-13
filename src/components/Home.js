import React, { useState, useEffect } from 'react';
import { fetchDisneyOriginals, fetchPopularShows } from '../tmdbService'; // Import the service functions
import './Home.css'; // Ensure you have this CSS file for styling

function Home() {
  const [disneyOriginals, setDisneyOriginals] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch Disney+ Originals
    fetchDisneyOriginals()
      .then(data => setDisneyOriginals(data))
      .catch(error => console.error('Error fetching Disney originals:', error));

    // Fetch popular TV shows
    fetchPopularShows()
      .then(data => setPopularShows(data))
      .catch(error => console.error('Error fetching popular TV shows:', error));
  }, []);

  const itemsPerPage = 4;
  const totalSlides = Math.ceil(popularShows.length / itemsPerPage);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="home">
      <section className="section">
        <h2>Popular Shows</h2>
        <div className="slider">
          <button 
            className="nav-button left" 
            onClick={handlePrevSlide} 
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {popularShows.length > 0 ? (
              popularShows.map((show, index) => (
                <div key={show.id} className="slider-item">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                    alt={show.name} 
                    className="poster-image" 
                  />
                  <p>{show.name}</p>
                </div>
              ))
            ) : (
              <p>No popular shows available</p>
            )}
          </div>
          <button 
            className="nav-button right" 
            onClick={handleNextSlide} 
            disabled={currentSlide === totalSlides - 1}
          >
            ›
          </button>
        </div>
      </section>

      {/* Other sections can be added here */}
      <section className="section">
        <h2>Disney+ Originals</h2>
        <div className="content">
          {disneyOriginals.length > 0 ? (
            disneyOriginals.map(show => (
              <div key={show.id} className="item">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                  alt={show.name} 
                  className="poster-image" 
                />
                <p>{show.name}</p>
              </div>
            ))
          ) : (
            <p>No Disney+ Originals available</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
