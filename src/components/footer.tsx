import React from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 40vh;
  margin-top: 10vh;
  background-color: #fafbfc;
  width: 100%;
`;

const Footer: React.FunctionComponent<IPage> = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;
