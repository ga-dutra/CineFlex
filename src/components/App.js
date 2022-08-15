import GlobalStyle from "../styles/globalstyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./MoviesPage";
import SessionsPage from "./SessionsPage";
import SeatsPage from "./SeatsPage";
import Header from "./Header";
import { MovieStorage } from "../contexts/MovieContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MovieStorage>
        <BrowserRouter>
          <Routes>
            <Route element={<MoviesPage />} path="/" />
            <Route element={<SessionsPage />} path="/filme/:movieId" />
            <Route element={<SeatsPage />} path="/sessao/:sessaoId" />
          </Routes>
        </BrowserRouter>
      </MovieStorage>
    </>
  );
}
