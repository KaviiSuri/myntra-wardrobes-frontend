import React from "react";
import CardInterface from "../interfaces/cardComponent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  height: 50vh;
  margin-top: 10vh;
  padding: 0 10vw;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
`;
const Header = styled.h1`
  font-size: large;
`;
const ViewAll = styled.h1`
  margin-left: 5vw;
  color: #f13ab1;
  font-size: large;
`;
const CardBody = styled.div`
  height: 40vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardDescription = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: medium;
  height: 15%;
`;
const CardThumbnailContainer = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
`;
const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardsContainerRecomended: React.FunctionComponent<CardInterface> = ({
  link,
}) => {
  return (
    <CardContainer>
      <Head>
        <Header>RECOMENDED</Header>
        <Link style={{ color: "#f13ab1" }} to={`${link}`}>
          <ViewAll>view all</ViewAll>
        </Link>
      </Head>
      <Cards>
        <CardBody>
          <CardThumbnailContainer>
            <Link to={"/"}>
              <CardThumbnail
                src={
                  "https://i0.wp.com/onedapperstreet.com/wp-content/uploads/2014/01/OOTD_140119_3387Edit-copy.jpg"
                }
              />
              <CardClicks></CardClicks>
            </Link>
          </CardThumbnailContainer>

          <CardDescription>
            One Dapper Street Apartment Tour 2.0 | New York Penthouse | Interior
            Design Ideas
          </CardDescription>
        </CardBody>
        <CardBody>
          <CardThumbnailContainer>
            <Link to={"/"}>
              <CardThumbnail
                src={
                  "https://www.timothyoulton.com/pub/media/magefan_blog/timothy-oulton-marcel-floruss-one-dapper-street-chesterfield-brown-leather-sofa-westminster-button_6_.jpg"
                }
              />
              <CardClicks></CardClicks>
            </Link>
          </CardThumbnailContainer>

          <CardDescription>
            How Stylish Are You? | Reviewing Your Men's Outfits on IG | Style
            Tips for Men
          </CardDescription>
        </CardBody>
        <CardBody>
          <CardThumbnailContainer>
            <Link to={"/"}>
              <CardThumbnail
                src={"http://picture-cdn.wheretoget.it/w738ni-i.jpg"}
              />
              <CardClicks></CardClicks>
            </Link>
          </CardThumbnailContainer>

          <CardDescription>
            Thrift Store Style-Off Challenge | Second-Hand Shopping at
            Crossroads Trading with Nathan McCallum
          </CardDescription>
        </CardBody>
      </Cards>
    </CardContainer>
  );
};

export default CardsContainerRecomended;
