import React from "react";
import LatestHabits from "../LatestHabits/LatestHabits";
import Hero from "../Hero/Hero";
import MakingLives from "../Makinglives/Makinglives";

const Home = () => {
  return (
    <div>
      <Hero />

      <LatestHabits />
      <MakingLives/>
    </div>
  );
};

export default Home;
