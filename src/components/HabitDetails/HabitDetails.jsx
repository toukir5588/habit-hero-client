import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../useAxios Secure/useAxios Secure';
import { useLoaderData } from 'react-router';
import { FaClock, FaUser, FaTag, FaLock, FaUnlock } from "react-icons/fa";


const HabitDetails = () => {

    const axiosIntens = useAxiosSecure();
 const {_id} = useLoaderData()
//  console.log(_id);
    const [habitData , setHabitData] = useState([]);

    const [habitDetails,setHabitDetails] = useState([])

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

       useEffect(()=>{
         const newHabit = habitData.find((singleHabit) => singleHabit._id == _id)
        setHabitDetails(newHabit)
        
       },[habitData, _id]);
       console.log(habitDetails);

//   const { title, description, category, reminderTime, startTime, endTime, totalTime, image, userName, createdAt, currentStreak } =;

//   console.log(habitDetails.title);
  
  return (
   <div className='max-w-11/12 mx-auto mt-20'>




   </div>
  );
};


export default HabitDetails;
