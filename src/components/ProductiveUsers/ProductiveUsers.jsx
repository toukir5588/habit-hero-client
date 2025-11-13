import React from "react";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";

const ProductiveUsers = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e4e4"} size={16} />
      );
    }
    return stars;
  };
  return (
    <div className="w-11/12 mx-auto  ">
      <h1 className="text-3xl font-bold my-10 text-center">Productive Users</h1>
      <div>

  <div className="bg-indigo-100 rounded-lg p-6 text-center shadow-lg my-10  ">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Joined Thousands of Productive Users</h2>
    <div className="flex justify-center text-center md:justify-around flex-col space-y-7 md:space-y-0 md:flex-row  items-center ">
      <div className="text-center">
       <div className="text-5xl font-bold text-[#059669]"> <CountUp end={90} duration={3}  enableScrollSpy separator="," />K+</div>
        <p className="text-xl mt-5 text-gray-600">Active Users</p>
      </div>
      <div className="text-center">
        <div className="text-5xl font-bold text-[#059669]"> <CountUp end={22} duration={3}  enableScrollSpy separator="," />M+</div>
        <p className="text-xl mt-5 text-gray-600">Total User</p>
      </div>
      <div className="text-center">
        <div className="text-5xl font-bold text-[#059669]"><CountUp end={99} duration={3}  enableScrollSpy separator="," />%</div>
        <p className="text-xl mt-5 text-gray-600">Satisfaction Rate</p>
      </div>
    </div>
  </div>

      </div>
    </div>
  );
};

export default ProductiveUsers;
