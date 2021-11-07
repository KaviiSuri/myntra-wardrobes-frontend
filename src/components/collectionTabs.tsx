import React, { useState } from "react";
import styled from "styled-components";
import IPage from "../interfaces/page";
import Collections from "./Collections";
import Outfits from "./Outfits";

const TabContainer = styled.div`
  width: 100%;
  padding: 0 10vw;
  min-height: 1vh;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;
const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Tab = styled.button`
  border: none;
  width: 10vw;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  font-size: larger;
  font-weight: 600;
  padding: 5vh 0;
`;

const CollectionTab: React.FunctionComponent<IPage> = () => {
  const [collection, setCollection] = useState(true);
  return (
    <TabContainer>
      <Tabs>
        <Tab onClick={() => setCollection(true)}>Collections</Tab>
        <Tab onClick={() => setCollection(false)}>Outfits</Tab>
      </Tabs>
      {collection ? <Collections /> : <Outfits />}
    </TabContainer>
  );
};

export default CollectionTab;
