import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieStorage = ({ children }) => {
  const [playingMovies, setPlayingMovies] = useState({});
  const [movieSelected, setMovieSelected] = useState({});

  const [sessionSelected, setSessionSelected] = useState({});

  return (
    <MovieContext.Provider
      value={{
        playingMovies,
        setPlayingMovies,
        movieSelected,
        setMovieSelected,
        sessionSelected,
        setSessionSelected,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieStorage };
