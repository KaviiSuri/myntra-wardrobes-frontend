import React from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";

const TrendingContainer = styled.div`
  height: 70vh;
  background-color: #f6f6f6;
  width: 100%;
`;
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
const HomeTrending: React.FunctionComponent<IPage> = () => {
  return (
    <TrendingContainer>
      <Banner>
        <BannerImg
          src={"https://i.ytimg.com/vi/n0zOiBAq5sk/maxresdefault.jpg"}
        />
      </Banner>
    </TrendingContainer>
  );
};

export default HomeTrending;
