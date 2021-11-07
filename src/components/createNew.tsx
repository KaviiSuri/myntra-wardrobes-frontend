import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CreateNewInterface from "../interfaces/createCard";

const CreateOutfitContainer = styled.div`
  height: 12vh;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const AddButton = styled(Link)`
  min-width: 1vw;
  padding: 0 3vw;
  border: none;
  background-color: #f13ab1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  height: 7vh;
`;
const CreateNew: React.FunctionComponent<CreateNewInterface> = ({
  link,
  type,
}) => {
  return (
    <CreateOutfitContainer>
      <AddButton to={`${link}`}>{type}</AddButton>
    </CreateOutfitContainer>
  );
};

export default CreateNew;
