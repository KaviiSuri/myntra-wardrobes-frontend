import React from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TitleHolder from "../components/titleHolder";
import styled from "styled-components";
import { Link } from "react-router-dom";
const OutfitContainer = styled.div`
  padding: 0 10vw;
`;
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

const ViewAllRecent: React.FunctionComponent<IPage> = () => {
  return (
    <div>
      <NavBar />
      <TitleHolder
        name={"RECENT"}
        quote={`"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street. Fashion has to do with ideas, the way we live, what is happening." — Coco Chanel`}
      />
      <OutfitContainer>
        <OutfitsContainer>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://i.pinimg.com/originals/7c/a7/37/7ca737c793cfe0ed227f5f468656007c.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              Chelsea Boots vs. Combat Boots | Men's Fall Fashion
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://i1.wp.com/onedapperstreet.com/redesign/wp-content/uploads/2019/04/Snapseed.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              Chelsea Boots vs. Combat Boots | Men's Fall Fashion
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://i.pinimg.com/736x/04/d2/ed/04d2ed4d5062f1487951e77ae7a45815--nyc-streets-mens-clothing.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              Chelsea Boots vs. Combat Boots | Men's Fall Fashion
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://www.out.com/sites/default/files/streetstyle/street-style-one-dapper-street-coach-andrew-villagomez-1.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              Chelsea Boots vs. Combat Boots | Men's Fall Fashion
            </OutfitDescription>
          </Outfit>
        </OutfitsContainer>
      </OutfitContainer>

      <Footer />
    </div>
  );
};

export default ViewAllRecent;
