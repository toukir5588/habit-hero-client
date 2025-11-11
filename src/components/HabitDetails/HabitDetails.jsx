import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../useAxios Secure/useAxios Secure';
import { useLoaderData } from 'react-router';
import { FaClock, FaUser, FaTag, FaLock, FaUnlock } from "react-icons/fa";


const HabitDetails = () => {

    const axiosIntens = useAxiosSecure();
 const {_id} = useLoaderData()
 console.log(_id);
    const [habitData , setHabitData] = useState([]);

     useEffect(()=>{
           axiosIntens.get('/habits')
            .then(res => {
                console.log(res.data);
                setHabitData(res.data)
            })
            .catch(error=>{
                console.log('error facing habits',error);
            })
        },[axiosIntens])
  const { title, description, category, reminderTime, startTime, endTime, totalTime, image, userName, createdAt, currentStreak } = habitData;

  
  
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
     
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-700 pt-2">
          <span className="flex items-center gap-1">
            <FaTag className="text-blue-500" /> {category}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-orange-500" /> {startTime} - {endTime}
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="text-purple-500" /> {userName}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Created: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm font-semibold text-blue-700">
            ⏱ Total Time: {totalTime} min
          </p>
        </div>
      </div>
    </div>
  );
};


export default HabitDetails;
