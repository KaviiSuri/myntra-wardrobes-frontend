import React from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import Outfits from "../components/Outfits";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const Banner = styled.div`
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
`;
const BannerImg = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
`;
const CollectionCaption = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 0 10vw;
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
const CollectionOutfits = styled.div`
  /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  margin-top: 5vh;
  padding: 0 10vw;
`;

const OutfitsContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 5vh;
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
const CollectionPage: React.FunctionComponent<IPage> = () => {
  return (
    <>
      <NavBar />
      <Banner>
        <BannerImg
          src={"https://i.ytimg.com/vi/auSXD0wht10/maxresdefault.jpg"}
        />
      </Banner>
      <CollectionCaption>
        <CollectionHeader>Tips to get Ready Quickly</CollectionHeader>
        <CollectionDescription>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or.
        </CollectionDescription>
      </CollectionCaption>
      <CollectionOutfits>
        <OutfitsContainer>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://steemitimages.com/DQmNQgN9qNv6zXzmbAXYRpMX4vNNdRpCrTf2RxXJPJaYvv1/marcel.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text.
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://steemitimages.com/DQmNQgN9qNv6zXzmbAXYRpMX4vNNdRpCrTf2RxXJPJaYvv1/marcel.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text.
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://steemitimages.com/DQmNQgN9qNv6zXzmbAXYRpMX4vNNdRpCrTf2RxXJPJaYvv1/marcel.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text.
            </OutfitDescription>
          </Outfit>
          <Outfit to={"/outfit"}>
            <OutfitThumbnailContainer>
              <OutfitThumbnail
                src={
                  "https://steemitimages.com/DQmNQgN9qNv6zXzmbAXYRpMX4vNNdRpCrTf2RxXJPJaYvv1/marcel.jpg"
                }
              />
              <CardClicks></CardClicks>
            </OutfitThumbnailContainer>

            <OutfitDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text.
            </OutfitDescription>
          </Outfit>
        </OutfitsContainer>
      </CollectionOutfits>
      <CommentSection />
    </>
  );
};

export default CollectionPage;
