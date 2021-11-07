import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IPage from "../../interfaces/page";
import CreateNew from "../createNew";

const OutfitsContainer = styled.div`
  margin-top: 5vh;
  width: 100%;
  display: flexbox;
  column-gap: 5%;
  min-height: 1vh;
  flex-wrap: wrap;
  row-gap: 5vh;
`;
const Outfit = styled(Link)`
  text-decoration: none;
  width: 30%;
  min-height: 1vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const OutfitThumbnailContainer = styled.div`
  height: 30vh;
  width: 100%;
  position: relative;
`;
const OutfitThumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
`;
const OutfitDescription = styled.h2`
  color: rgba(0, 0, 0, 0.5);
  font-size: medium;
`;
const CardClicks = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.57) 0%,
    rgba(0, 0, 0, 0) 77.03%
  );
  height: 50%;
  width: 100%;
  z-index: 1;
`;

const Outfits: React.FunctionComponent<IPage> = () => {
  const [user, setUser] = useState(true);
  return (
    <>
      <OutfitsContainer>
        <Outfit to={""}>
          <OutfitThumbnailContainer>
            <OutfitThumbnail
              src={
                "https://steemitimages.com/DQmNQgN9qNv6zXzmbAXYRpMX4vNNdRpCrTf2RxXJPJaYvv1/marcel.jpg"
              }
            />
            <CardClicks></CardClicks>
          </OutfitThumbnailContainer>

          <OutfitDescription>
            In publishing and graphic design, Lorem ipsum is a placeholder text.
          </OutfitDescription>
        </Outfit>
      </OutfitsContainer>
      {user ? (
        <CreateNew link={"/outfit/create"} type={"Create Outfit"} />
      ) : null}
    </>
  );
};

export default Outfits;
