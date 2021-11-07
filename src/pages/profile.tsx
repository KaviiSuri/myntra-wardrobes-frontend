import React, { useState } from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CollectionTab from "../components/collectionTabs";

const ProfileContainer = styled.div`
  margin-top: 10vh;
  padding: 0 10vw;
  display: flex;
  justify-content: space-between;
  min-height: 1vh;
  width: 100%;
  /* align-items: center; */
`;
const ProfileImg = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`;
const ProfileAbout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding-left: 5vw;
`;
const ProfileName = styled.div`
  font-weight: bold;
  font-size: large;
  display: flex;
`;
const ProfileCaption = styled.h2`
  font-size: medium;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 5vh;
  text-align: justify;
`;
const ProfileFollow = styled.button`
  border: none;
  background-color: #f13ab1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 5vw;
  min-width: 10vw;
  cursor: pointer;
`;
const ProfileEdit = styled(Link)`
  border: none;
  background-color: #f13ab1;
  text-decoration: none;
  display: flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 5vw;
  min-width: 10vw;
  cursor: pointer;
`;
const Profile: React.FunctionComponent<IPage> = () => {
  const [ownProfile, setownProfile] = useState(true);
  return (
    <div>
      <NavBar />
      <ProfileContainer>
        <ProfileImg
          src={
            "https://3.bp.blogspot.com/-NuwRgVUA0as/UXdR2IgmQPI/AAAAAAAABrg/y3N4ZJ-v25E/s1600/OOTD_130416_0311.jpg_effected.jpg"
          }
        />
        <ProfileAbout>
          <ProfileName>
            OneStreetDapper{" "}
            {ownProfile ? (
              <ProfileEdit to={"/edit"}>Edit</ProfileEdit>
            ) : (
              <ProfileFollow>Follow</ProfileFollow>
            )}{" "}
          </ProfileName>
          <ProfileCaption>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or.In
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or.
          </ProfileCaption>
          {/* <ProfileRating></ProfileRating> */}
        </ProfileAbout>
      </ProfileContainer>
      <CollectionTab />
      <Footer />
    </div>
  );
};

export default Profile;
