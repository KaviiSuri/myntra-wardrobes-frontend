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

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90%;
`;
const Card = styled(Link)`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const CardImg = styled.img`
  object-fit: cover;
  width: 15vw;
  border-radius: 100%;
  height: 15vw;
`;
const CardDescription = styled.div`
  height: 10%;
  width: 100%;
  text-align: center;
`;
const CardImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardsVloggers: React.FunctionComponent<CardInterface> = ({ link }) => {
  return (
    <CardContainer>
      <Head>
        <Header>VLOGGERS YOU MAY LIKE</Header>
        <Link style={{ color: "#f13ab1" }} to={`${link}`}>
          <ViewAll>view all</ViewAll>
        </Link>
      </Head>
      <Cards>
        <Card to={"/profile"}>
          <CardImgContainer>
            <CardImg
              src={
                "https://3.bp.blogspot.com/-NuwRgVUA0as/UXdR2IgmQPI/AAAAAAAABrg/y3N4ZJ-v25E/s1600/OOTD_130416_0311.jpg_effected.jpg"
              }
            ></CardImg>
          </CardImgContainer>

          <CardDescription>One Street Dapper</CardDescription>
        </Card>
        <Card to={"/profile"}>
          <CardImgContainer>
            <CardImg
              src={
                "https://www.amexessentials.com/wp-content/uploads/2017/12/opener-style-vloggers.jpg"
              }
            ></CardImg>
          </CardImgContainer>

          <CardDescription>Artist 2</CardDescription>
        </Card>
        <Card to={"/profile"}>
          <CardImgContainer>
            <CardImg
              src={
                "https://www.collegefashion.net/wp-content/uploads/2019/01/img_5795.jpg"
              }
            ></CardImg>
          </CardImgContainer>

          <CardDescription>Artist 3</CardDescription>
        </Card>
        <Card to={"/profile"}>
          <CardImgContainer>
            <CardImg
              src={
                "https://cdn.cliqueinc.com/posts/230021/fashion-youtuber-230021-1500511432439-image.700x0c.jpg"
              }
            ></CardImg>
          </CardImgContainer>

          <CardDescription>Artist 4</CardDescription>
        </Card>
      </Cards>
    </CardContainer>
  );
};

export default CardsVloggers;
