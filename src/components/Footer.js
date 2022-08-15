import styled from "styled-components";

export default function Footer({ poster, title, session }) {
  return (
    <FooterWrapper>
      <MovieContainer>
        <img src={poster} alt="" />
      </MovieContainer>
      <div>
        <p>{title}</p>
        <p>{session ? { session } : ""}</p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 110px;
  width: 100vw;
  background-color: #c3cfd9;
  box-shadow: 4px 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #293845;
    font-size: 20px;
    line-height: 30px;
    margin-left: 10px;
  }
`;

const MovieContainer = styled.div`
  width: 60px;
  height: 84px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  img {
    width: 48px;
    height: 72px;
  }
`;
