import React from "react";
import IPage from "../interfaces/page";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 65vh;
  margin-top: 10vh;
  background-color: #fafbfc;
  width: 100%;
`;
const FooterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Footer: React.FunctionComponent<IPage> = () => {
  return (
    <FooterContainer>
      <FooterImg src="/footer.png" />
    </FooterContainer>
  );
};

export default Footer;
