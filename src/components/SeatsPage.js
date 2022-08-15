import styled from "styled-components";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { getMovieSeats } from "../services/cineflex";
import { useParams } from "react-router-dom";

let seats = [];
export default function SeatsPage() {
  const { movieSelected, sessionSelected, setSessionSelected } =
    useContext(MovieContext);
  const sessionId = useParams().sessaoId;
  console.log(sessionId);
  useEffect(() => {
    const promise = getMovieSeats(sessionId);
    promise.then((res) => {
      console.log("sucesso na requisição de assentos");
      console.log(res.data);
      console.log(JSON.stringify(res.data.seats));
      seats = res.data.seats;
      setSessionSelected({ ...sessionSelected });
    });
    promise.catch((err) => console.log("erro na requisição de assentos"));
  }, []);

  return (
    <>
      <Wrapper>
        <h1>Selecione seu(s) assento(s)</h1>
        <SeatsContainer>
          {!seats[0]
            ? ""
            : seats.map((value) => <div key={value.id}>{value.name}</div>)}
        </SeatsContainer>
      </Wrapper>
      <Footer
        poster={movieSelected[0].posterURL}
        title={movieSelected[0].title}
        session={` ${sessionSelected.weekday} - ${sessionSelected.date}`}
      />
    </>
  );
}

const Wrapper = styled.div`
  width: calc(100vw - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 110px;

  h1 {
    color: #293845;
    font-size: 24px;
    font-weight: 700;
    margin: 30px 0 20px 0;
  }
`;

const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  div {
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    line-height: 13px;
    margin: 4px;
  }
`;
