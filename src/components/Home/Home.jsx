import React from "react";
import LatestHabits from "../LatestHabits/LatestHabits";
import Hero from "../Hero/Hero";
import MakingLives from "../Makinglives/Makinglives";
import CustomerReview from "../CustomerReview/CustomerReview";
import ProductiveUsers from "../ProductiveUsers/ProductiveUsers";

const Home = () => {
  return (
    <div>
      <Hero />

      <LatestHabits />
      <MakingLives/>
      <ProductiveUsers/>
      <CustomerReview/>
    </div>
  );
};

export default Home;
