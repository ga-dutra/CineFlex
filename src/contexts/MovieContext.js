import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieStorage = ({ children }) => {
  const [playingMovies, setPlayingMovies] = useState({});

  return (
    <MovieContext.Provider value={{ playingMovies, setPlayingMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieStorage };
