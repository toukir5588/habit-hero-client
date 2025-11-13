import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../useAxios Secure/useAxios Secure";
import { useLoaderData } from "react-router";
import { FaClock, FaUser, FaTag } from "react-icons/fa";
import StreakProgressCard from "./StreakProgressCard/StreakProgressCard";
import { toast } from "react-toastify";

const HabitDetails = () => {
  const axiosIntens = useAxiosSecure();
  const { _id } = useLoaderData();
  const [habitData, setHabitData] = useState([]);
  const [habitDetails, setHabitDetails] = useState(null);

  // Fetch all habits
  const fetchHabits = () => {
    axiosIntens
      .get("/habits")
      .then((res) => setHabitData(res.data))
      .catch((err) => console.log("Error fetching habits:", err));
  };

  useEffect(() => {
    fetchHabits();
  }, [axiosIntens]);

  // Find current habit
  useEffect(() => {
    if (habitData.length > 0) {
      const current = habitData.find(
        (habit) => habit._id.toString() === _id.toString()
      );
      setHabitDetails(current);
    }
  }, [habitData, _id]);

  // Complete habit
  const handleCompleteHabit = () => {
  const today = new Date().toISOString().split("T")[0];

  if (habitDetails.completionHistory?.includes(today)) {
    toast.info("Oops! Already marked complete for today!");
    return; 
  }

  axiosIntens
    .patch(`/habits/complete/${_id}`)
    .then((res) => {
      setHabitDetails((prev) => ({
        ...prev,
        completionHistory: [...prev.completionHistory, today],
      }));
      toast.success("Done!", "Habit marked complete for today 🎉", "success");
    })
    .catch((err) => console.log(err));
};

  if (!habitDetails) {
    return (
      <p className="text-center text-lg py-10 font-semibold text-gray-500">
        Data is loading...
      </p>
    );
  }

  const {
    title,
    description,
    category,
    reminderTime,
    image,
    userName,
    email,
    completionHistory,
  } = habitDetails;

  const streakCount = completionHistory?.length || 0;
  const progressPercent = Math.min((streakCount / 30) * 100, 100);

  return (
    <div className="max-w-6xl mx-auto my-20 border-2 border-solid border-[#059669] rounded-2xl overflow-hidden shadow-md">
     
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-3 text-center text-white">
        <h1 className="text-2xl font-semibold">Habit Details</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 items-center bg-white">
       
        <div className="flex flex-col">
          <img
            className="w-full h-72 object-cover rounded-xl shadow-md"
            src={image || "/default-image.png"}
            alt={title || "Habit Image"}
          />
          <h2 className="text-3xl font-bold my-4 text-gray-800">{title}</h2>
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded-full mb-4">
            <FaTag className="inline mr-1" /> Category: {category}
          </span>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {description || "No description provided."}
          </p>

          <div className="mb-4 text-gray-600 space-y-1">
            <p>
              <FaUser className="inline mr-2 text-emerald-600" />
              <strong>Creator:</strong> {userName}
            </p>
            <p>
              <FaClock className="inline mr-2 text-emerald-600" />
              <strong>Reminder:</strong> {reminderTime || "Not set"}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </div>

          <button
            onClick={handleCompleteHabit}
            className="btn btn-neutral w-full mt-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Mark as Completed
          </button>
        </div>

        
        <div className="flex justify-center items-center">
          <StreakProgressCard streak={streakCount} progress={progressPercent} />
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
