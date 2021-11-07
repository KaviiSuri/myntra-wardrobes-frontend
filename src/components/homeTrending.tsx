import React from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";
import BannerSlider from "./Swipper";

const TrendingContainer = styled.div`
  height: 70vh;
  background-color: #f6f6f6;
  width: 100%;
`;

const HomeTrending: React.FunctionComponent<IPage> = () => {
  return <TrendingContainer>{/* <BannerSlider /> */}</TrendingContainer>;
};

export default HomeTrending;
