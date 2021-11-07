import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../navbar";
import Select, { SingleValue } from "react-select";

const FormContainer = styled.div`
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-top: 5vh;
`;
const FormDescription = styled.textarea``;

const FormTitle = styled.input``;

const CollectionForm = () => {
  const [selectedOption, setSelectionOption] = useState<any>("");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <NavBar />
      <FormContainer>
        <FormTitle placeholder="Title" type="text" />
        <FormDescription placeholder="Description" />
        <Select
          isMulti={true}
          value={selectedOption}
          onChange={(option) => {
            setSelectionOption(option);
          }}
          options={options}
        />
      </FormContainer>
    </>
  );
};

export default CollectionForm;
