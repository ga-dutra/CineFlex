import styled from "styled-components";

export default function Header() {
  return <HeaderWrapper>CINEFLEX</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 68px;
  width: 100vw;
  background-color: #c3cfd9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8833a;
  font-size: 34px;
  line-height: 40px;
`;
