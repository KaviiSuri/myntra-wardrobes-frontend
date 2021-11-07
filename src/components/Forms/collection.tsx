import { useState } from "react";
import styled from "styled-components";
import NavBar from "../navbar";
import Select from "react-select";
import UploadImage from "./uploadImage";

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
  const [title, setTitle] = useState<any>("");
  const [description, setDescription] = useState<any>("");
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
        <FormTitle
          placeholder="Title"
          type="text"
          value={title}
          onChange={(val) => setTitle(val)}
        />
        <FormDescription
          placeholder="Description"
          value={description}
          onChange={(val) => setDescription(val)}
        />
        <Select
          isMulti={true}
          value={selectedOption}
          onChange={(option) => {
            setSelectionOption(option);
          }}
          options={options}
        />
        <UploadImage />
      </FormContainer>
    </>
  );
};

export default CollectionForm;
