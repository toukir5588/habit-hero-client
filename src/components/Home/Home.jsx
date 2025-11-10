import React from "react";
import LatestHabits from "../LatestHabits/LatestHabits";
import Hero from "../Hero/Hero";
import MakingLives from "../Makinglives/Makinglives";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Hero />

      <LatestHabits />
      <MakingLives/>
      <CustomerReview/>
    </div>
  );
};

export default Home;
