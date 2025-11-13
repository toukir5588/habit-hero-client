import React, { useContext, useEffect, useState } from "react";
import AllHabitCard from "./AllHabitCard";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingSpin from "../LoadingSpinar/LoadingSpin";
import useAxiosSecure from "../../useAxiosSecure/useAxiosSecure";

const AllHabits = () => {
  const { loading } = useContext(AuthContext);

  const axiosIntens = useAxiosSecure();

  const [habitsData, setHabitData] = useState([]);
  console.log(habitsData);

  useEffect(() => {
    axiosIntens
      .get("/habits")
      .then((res) => {
        console.log(res.data);
        setHabitData(res.data);
      })
      .catch((error) => {
        console.log("error facing habits", error);
      });
  }, [axiosIntens]);
  return (
    <div className="max-w-11/12 mx-auto min-h-[400px] my-20">
      <title>All-Habits-Page</title>
      <h1 className="text-4xl text-center mb-5 font-semibold ">
        Latest Habits
      </h1>
      {loading ? (
        <LoadingSpin></LoadingSpin>
      ) : (
        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-4 items-center justify-center ">
          {habitsData.map((habit) => (
            <AllHabitCard key={habit._id} habit={habit}></AllHabitCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllHabits;
