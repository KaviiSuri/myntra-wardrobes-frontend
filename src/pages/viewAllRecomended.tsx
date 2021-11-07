import React from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import TitleHolder from "../components/titleHolder";

const ViewAllRecomended: React.FunctionComponent<IPage> = () => {
  return (
    <div>
      <NavBar />
      <TitleHolder
        name={"Recomended"}
        quote={`"You either know fashion or you don’t." – Anna Wintour`}
      />
      <Footer />
    </div>
  );
};

export default ViewAllRecomended;
