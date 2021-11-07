import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IPage from "../../interfaces/page";
import CreateNew from "../createNew";

const CollectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 1vh;
`;
const Collection = styled(Link)`
  margin-top: 10vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const CollectionThumbnail = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
`;
const CollectionCaption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;
const CollectionHeader = styled.h1`
  font-size: large;
  font-weight: 600;
  color: black;
`;
const CollectionDescription = styled.h2`
  font-size: medium;
  color: rgba(0, 0, 0, 0.5);
`;
const Collections: React.FunctionComponent<IPage> = () => {
  const [user, setUser] = useState(true);

  return (
    <>
      <CollectionContainer>
        <Collection to={"/collection"}>
          <CollectionThumbnail
            src={"https://i.ytimg.com/vi/ZNZcqHUUIr4/maxresdefault.jpg"}
          />
          <CollectionCaption>
            <CollectionHeader>Tips to get Ready Quickly</CollectionHeader>
            <CollectionDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              or.
            </CollectionDescription>
          </CollectionCaption>
        </Collection>
        <Collection to={"/collection"}>
          <CollectionThumbnail
            src={"https://i.ytimg.com/vi/ZNZcqHUUIr4/maxresdefault.jpg"}
          />
          <CollectionCaption>
            <CollectionHeader>Tips to get Ready Quickly</CollectionHeader>
            <CollectionDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              or.
            </CollectionDescription>
          </CollectionCaption>
        </Collection>
      </CollectionContainer>
      {user ? (
        <CreateNew link={"/collection/create"} type={"Create Collection"} />
      ) : null}
    </>
  );
};

export default Collections;
