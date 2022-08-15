import { useEffect, useContext } from "react";
import styled from "styled-components";
import { getMovies } from "../services/cineflex";
import { MovieContext } from "../contexts/MovieContext";
import { useNavigate } from "react-router-dom";

function Movie({ posterImg, title, overview, movieId }) {
  const navigate = useNavigate();
  return (
    <MovieContainer>
      <img
        onClick={() => navigate(`/filme/${movieId}`)}
        src={posterImg}
        alt={`${title} Poster`}
      />
    </MovieContainer>
  );
}

export default function Movies() {
  const { playingMovies, setPlayingMovies } = useContext(MovieContext);

  useEffect(() => {
    const promise = getMovies();
    promise.then((res) => {
      console.log("requisição com sucesso");
      console.log(res.data);
      setPlayingMovies(res.data);
    });
    promise.catch((err) => {
      console.log("erro na requisição");
    });
  }, []);

  return (
    <Wrapper>
      <h1>Selecione o Filme</h1>
      <div>
        {playingMovies.length
          ? playingMovies.map((value) => (
              <Movie
                key={value.id}
                movieId={value.id}
                posterImg={value.posterURL}
                title={value.title}
                overview={value.overview}
              />
            ))
          : ""}
      </div>
    </Wrapper>
  );
}

const MovieContainer = styled.div`
  width: 146px;
  height: 210px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 10px;

  img {
    width: 128px;
    height: 192px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: calc(100vw - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: #293845;
    font-size: 24px;
    font-weight: 700;
    margin: 30px 0 20px 0;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
