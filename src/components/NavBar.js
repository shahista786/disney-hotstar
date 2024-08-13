import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import './Modal.css';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [showTVDropdown, setShowTVDropdown] = useState(false);
  const [showMovieDropdown, setShowMovieDropdown] = useState(false);
  const navigate = useNavigate(); // Add this line

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`); // Redirect to search results page
    }
  };

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDropdownToggle = (dropdown) => {
    if (dropdown === 'tv') {
      setShowTVDropdown((prev) => !prev);
    } else if (dropdown === 'movies') {
      setShowMovieDropdown((prev) => !prev);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
          src={'/hotstar.png'} 
          alt="Logo" 
          className="navbar-logo-img"
        />
        <Link to="/">Disney+ Hotstar</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li 
          className="dropdown" 
          onMouseEnter={() => handleDropdownToggle('tv')} 
          onMouseLeave={() => handleDropdownToggle('tv')}
        >
          <Link to="/">TV Shows</Link>
          {showTVDropdown && (
            <div className="dropdown-content">
              <Link to="/tvshows?language=mr">Marathi</Link>
              <Link to="/tvshows?language=hi">Hindi</Link>
              <Link to="/tvshows?language=en">English</Link>
            </div>
          )}
        </li>
        <li 
          className="dropdown" 
          onMouseEnter={() => handleDropdownToggle('movies')} 
          onMouseLeave={() => handleDropdownToggle('movies')}
        >
          <Link to="/">Movies</Link>
          {showMovieDropdown && (
            <div className="dropdown-content">
              <Link to="/movies/bollywood">Bollywood</Link>
              <Link to="/movies/hollywood">Hollywood</Link>
              <Link to="/movies/tollywood">Tollywood</Link>
            </div>
          )}
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch(); // Allow Enter key to trigger search
          }}
        />
        <button 
          type="button" 
          className="search-button" 
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="navbar-login">
        <button type="button" onClick={handleLoginClick}>Login</button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <div className="modal-header">
              <button 
                className={`tab-button ${activeTab === 'login' ? 'active' : ''}`} 
                onClick={() => handleTabClick('login')}
              >
                Login
              </button>
              <button 
                className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`} 
                onClick={() => handleTabClick('signup')}
              >
                Signup
              </button>
            </div>
            {activeTab === 'login' && (
              <div className="login-form">
                <p>Already have an account? Please login.</p>
                <form>
                  <div className="form-group">
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <button type="submit" className="submit-button">Submit</button>
                </form>
              </div>
            )}
            {activeTab === 'signup' && (
              <div className="signup-form">
                <p>Don't have an account? Please create one.</p>
                <form>
                  <div className="form-group">
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <button type="submit" className="submit-button">Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
