import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import HollywoodMovies from './components/HollywoodMovies';
import BollywoodMovies from './components/BollywoodMovies';
import TollywoodMovies from './components/TollywoodMovies';
import Sports from './components/Sports';
import TVShowsByLanguage from './components/TVShowsByLanguage';
import SearchResult from './components/SearchResult'; // New component for search results
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/hollywood" element={<HollywoodMovies />} />
          <Route path="/movies/bollywood" element={<BollywoodMovies />} />
          <Route path="/movies/tollywood" element={<TollywoodMovies />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/tvshows" element={<TVShowsByLanguage />} />
          <Route path="/search" element={<SearchResult />} /> {/* Route for search results */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
