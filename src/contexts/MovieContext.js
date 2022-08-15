import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieStorage = ({ children }) => {
  const [playingMovies, setPlayingMovies] = useState({});
  const [movieSelected, setMovieSelected] = useState({});
  const [sessionSelected, setSessionSelected] = useState({});
  const [seats, setSeats] = useState({});

  return (
    <MovieContext.Provider
      value={{
        playingMovies,
        setPlayingMovies,
        movieSelected,
        setMovieSelected,
        sessionSelected,
        setSessionSelected,
        seats,
        setSeats,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieStorage };
