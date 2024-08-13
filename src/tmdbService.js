import axios from 'axios';

const API_KEY = 'bd01db5b1fa77897fcd0e60a3533033a';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularShows() {
  const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchDisneyOriginals() {
  const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=273`);
  const data = await response.json();
  return data.results;
}

export async function fetchBollywoodMovies() {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=hi`);
  const data = await response.json();
  return data.results;
}

export async function fetchHollywoodMovies() {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=en`);
  const data = await response.json();
  return data.results;
}

export async function fetchTollywoodMovies() {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=te`);
  const data = await response.json();
  return data.results;
}

export async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function fetchTVShowDetails(id) {
  const response = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function fetchTVShowsByLanguage(language) {
  const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=${language}`);
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
}

export async function searchTVShows(query) {
  const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
}

export async function searchSportsContent(query) {
  try {
    const [movieResponse, tvResponse] = await Promise.all([
      fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`),
      fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    ]);

    const moviesData = await movieResponse.json();
    const tvShowsData = await tvResponse.json();

    return {
      movies: moviesData.results,
      tvShows: tvShowsData.results
    };
  } catch (error) {
    console.error('Error fetching sports content:', error);
    return { movies: [], tvShows: [] };
  }
}
