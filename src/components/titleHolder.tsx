import React from "react";
import styled from "styled-components";
import IPage from "../interfaces/page";

const TitleContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #f6f6f6;
  font-weight: 600;
  font-size: x-large;
`;
const QuoteContainer = styled.div`
  width: 100%;
  padding: 0 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30vh;
  font-family: "Dancing Script";
  font-size: larger;
`;
const TitleHolder: React.FunctionComponent<IPage> = ({ name, quote }) => {
  return (
    <>
      <TitleContainer>{name}</TitleContainer>
      <QuoteContainer>{quote}</QuoteContainer>
    </>
  );
};

export default TitleHolder;
