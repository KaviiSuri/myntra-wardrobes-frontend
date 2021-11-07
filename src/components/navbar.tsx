import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logging from "../config/logging";
import { useAuth } from "../context/authContext";
import IPage from "../interfaces/page";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  padding: 0 10vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
`;

const NavLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
const NavLink = styled.div`
  color: black;
  font-size: large;
  cursor: pointer;
`;
const NavButton = styled.button`
  color: black;
  border: none;
  background-color: transparent;
  font-weight: normal;
  font-size: large;
  cursor: pointer;
`;
const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
`;

const NavBar: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  const { signIn, signOut } = useAuth();
  return (
    <NavContainer>
      <Link to="/">
        {" "}
        <NavLogo
          src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
          alt="myntra"
        />
      </Link>
      <NavLinkContainer>
        <Link style={{ textDecoration: "none" }} to="/">
          <NavLink>WARDROBE</NavLink>
        </Link>
        {props.name === undefined ? (
          <>
            <NavButton onClick={signIn}>SIGN IN</NavButton>
          </>
        ) : (
          <>
            <NavButton onClick={signOut}>SIGN OUT</NavButton>
          </>
        )}
      </NavLinkContainer>
    </NavContainer>
  );
};

export default NavBar;
