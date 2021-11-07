import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer";
import VideoPlayer from "../components/ReactPlayer/ReactPlayer";
import IPage from "../interfaces/page";

const OutfitPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OutfitReel = styled.div`
  width: 100%;
  height: 80vh;
`;
const OutfitProducts = styled.div`
  width: 100%;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;
const OutfitCaption = styled.h3`
  font-size: medium;
  color: rgba(0, 0, 0, 0.5);
  /* margin-top: 5vh; */
`;
const OutfitTitle = styled.h1`
  font-size: medium;
  margin-top: 5vh;
`;
const Profile = styled(Link)`
  display: flex;
  flex-direction: row;

  /* margin-top: 5vh; */

  text-decoration: none;
`;
const ProfileImg = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 100%;
  width: 5vw;
  height: 5vw;
`;
const ProfileName = styled.h1`
  font-size: medium;
  color: black;
`;
const ProfileAbout = styled.div`
  height: 100%;
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
`;
const ProfileFollow = styled.button`
  width: 5vw;
  color: white;
  border: none;
  height: 4vh;
  background-color: #e72744;
`;
const OutfitProductsContainer = styled.div`
  margin-top: 10vh;
`;
const OutfitSectionHeader = styled.h1`
  color: black;
  font-size: larger;
`;
const Product = styled.div`
  border: 0.5px solid rgba(0, 0, 0, 0.09);
  border-radius: 5px;
  width: 100%;
  padding: 3vh;
  height: 40vh;
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 30%;
  height: 100%;
`;
const ProductDescriptions = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3vw;
  justify-content: space-between;
`;
const Company = styled.h1`
  font-size: medium;
  font-weight: 600;
`;
const Description = styled.h2`
  font-size: medium;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.62);
`;
const Price = styled.h2`
  font-size: medium;
`;
const AddButton = styled.button`
  height: 5vh;
  border: none;
  width: 20vw;
  background-color: #e72744;
  padding: 0 3vw;
  color: white;
  cursor: pointer;
`;
const OutfitPage: React.FunctionComponent<IPage> = () => {
  const [added, setAdded] = useState(false);
  const [added2, setAdded2] = useState(false);

  return (
    <>
      <OutfitPageContainer>
        <OutfitReel>
          <VideoPlayer
            vid_url={"https://www.youtube.com/watch?v=c02mIpldHmo"}
          />
        </OutfitReel>
        <OutfitProducts>
          <Profile to={"/profile"}>
            <ProfileImg
              src={
                "https://i.pinimg.com/originals/7c/a7/37/7ca737c793cfe0ed227f5f468656007c.jpg"
              }
            />
            <ProfileAbout>
              <ProfileName>OneStreetDapper</ProfileName>
              <ProfileFollow>Follow</ProfileFollow>
            </ProfileAbout>
          </Profile>
          <OutfitTitle>
            Chelsea Boots vs. Combat Boots | Men's Fall Fashion
          </OutfitTitle>
          <OutfitCaption>
            4 alternatives to classic converse, that are better suited for your
            Fall/ Winter 2021 wardrobe! #mensFashion #mensStyle #oneDapperStreet
            ————————————————————————————————————— Find me other places:
            www.instagram.com/marcelfloruss www.onedapperstreet.com
            —————————————————————————————————————
          </OutfitCaption>
          <OutfitProductsContainer>
            <OutfitSectionHeader>Products Used</OutfitSectionHeader>
            <Product>
              <ProductImg
                src={
                  "https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/n/anushka_sharma_lehenga_1_.jpg"
                }
              />
              <ProductDescriptions>
                <Company>Roadster</Company>
                <Description>
                  Men Black & White Casual Shirt || Solid by : Company | Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Repellat
                  nisi molestias laboriosam velit cum, error esse in! Reiciendis
                  libero nam perspiciatis, hic aliquid cupiditate repellat
                  beatae aspernatur soluta ipsum ad?
                </Description>
                <Price>₹ 824 </Price>
                {added ? (
                  <AddButton onClick={() => setAdded(false)}>REMOVE</AddButton>
                ) : (
                  <AddButton onClick={() => setAdded(true)}>
                    ADD TO CART
                  </AddButton>
                )}
              </ProductDescriptions>
            </Product>
            <Product>
              <ProductImg
                src={
                  "https://sugermint.com/wp-content/uploads/2021/05/Mukesh-Bansal-Myntra.jpg"
                }
              />
              <ProductDescriptions>
                <Company>Roadster</Company>
                <Description>
                  Men Black & White Casual Shirt || Solid by : Company | Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Repellat
                  nisi molestias laboriosam velit cum, error esse in! Reiciendis
                  libero nam perspiciatis, hic aliquid cupiditate repellat
                  beatae aspernatur soluta ipsum ad?
                </Description>
                <Price>₹ 824 </Price>
                {added2 ? (
                  <AddButton onClick={() => setAdded2(false)}>REMOVE</AddButton>
                ) : (
                  <AddButton onClick={() => setAdded2(true)}>
                    ADD TO CART
                  </AddButton>
                )}
              </ProductDescriptions>
            </Product>
          </OutfitProductsContainer>
        </OutfitProducts>
      </OutfitPageContainer>
      <Footer />
    </>
  );
};

export default OutfitPage;
