import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieContext } from "../contexts/MovieContext";
import { getMovieSessions } from "../services/cineflex";
import Footer from "./Footer";

let sessions = [];
export default function SessionsPage() {
  const { playingMovies, movieSelected, sessionSelected, setSessionSelected } =
    useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = getMovieSessions(movieSelected[0].id);
    promise.then((res) => {
      console.log(`movieSessions: ${res.data.days}`);
      sessions = res.data.days;
      console.log(`sessions: ${JSON.stringify(sessions)}`);
      console.log(`movieSessions: ${JSON.stringify(res.data.days)}`);
      setSessionSelected({ ...sessionSelected });
    });
    promise.catch(console.log("erro na requisição"));
  }, []);

  return (
    <Wrapper>
      <MovieContainer>
        <img
          src={movieSelected[0].posterURL}
          alt={`${movieSelected[0].title} Poster`}
        />
      </MovieContainer>
      <h1>{movieSelected[0].title}</h1>
      <h2>{movieSelected[0].overview}</h2>
      <h3>Selecione o horário</h3>
      {sessions[0]
        ? sessions.map((value) => (
            <>
              <p key={value.id}>
                {value.weekday} - {value.date}
              </p>
              <SessionsContainer>
                {value.showtimes.map((item) => (
                  <div
                    onClick={() => {
                      setSessionSelected(value);
                      navigate(`/sessao/${item.id}`);
                    }}
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
              </SessionsContainer>
            </>
          ))
        : ""}
      <Footer
        poster={movieSelected[0].posterURL}
        title={movieSelected[0].title}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100vw - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  h2 {
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    font-style: italic;
    margin-bottom: 30px;
  }
  h3 {
    color: #293845;
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    margin-top: 10px;
  }
`;

const MovieContainer = styled.div`
  width: 146px;
  height: 210px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;

  img {
    width: 128px;
    height: 192px;
    cursor: pointer;
  }
`;

const SessionsContainer = styled.div`
  display: flex;
  margin: 10px 0;

  div {
    cursor: pointer;
    width: 84px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8833a;
    border-radius: 3px;
    margin: 0 10px;
    color: #ffffff;
    font-weight: 700;
  }
`;
