import React from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TitleHolder from "../components/titleHolder";

const ViewAllRecent: React.FunctionComponent<IPage> = () => {
  return (
    <div>
      <NavBar />
      <TitleHolder
        name={"RECENT"}
        quote={`"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street. Fashion has to do with ideas, the way we live, what is happening." — Coco Chanel`}
      />

      <Footer />
    </div>
  );
};

export default ViewAllRecent;
