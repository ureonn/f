import React from "react";
import Hero from "../Components/Hero";
import PopularItems from "../Components/PopularItems";
import Recomendation from "../Components/recomendation";
import OurPolicy from "../Components/OurPolicy";
import NewsLetterBox from "../Components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularItems />
      <Recomendation />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
