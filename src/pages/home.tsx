import React from "react";
import IPage from "../interfaces/page";
import NavBar from "../components/navbar";
import HomeTrending from "../components/homeTrending";
import CardsContainerRecent from "../components/cardsContainerRecent";
import CardsContainerRecomended from "../components/cardsContainerRecomended";
import CardsVloggers from "../components/cardsVlogger";
import Footer from "../components/footer";

const HomePage: React.FunctionComponent<IPage> = () => {
  return (
    <div>
      <NavBar />
      <HomeTrending />
      <CardsContainerRecent link={"/recent"} />
      {/* <CardsContainerRecomended link={"/recomended"} /> */}
      <CardsVloggers />
      <Footer />
    </div>
  );
};

export default HomePage;
