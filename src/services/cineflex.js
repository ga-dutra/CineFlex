import axios from "axios";

const base_url = "https://mock-api.driven.com.br/api/v7/cineflex";

function getMovies() {
  const promise = axios.get(`${base_url}/movies`);
  return promise;
}
function getMovieSessions(movieId) {
  const promise = axios.get(`${base_url}/movies/${movieId}/showtimes`);
  return promise;
}
function getMovieSits(sessionId) {
  const promise = axios.get(`${base_url}/showtimes/${sessionId}/seats`);
  return promise;
}
function bookSits(body) {
  const promise = axios.post(`${base_url}/seats/book-many`);
  return promise;
}

export { getMovies, getMovieSessions, getMovieSits, bookSits };
