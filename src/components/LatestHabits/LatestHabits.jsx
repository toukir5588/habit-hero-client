import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../useAxios Secure/useAxios Secure';
import Card from './Card';

const LatestHabits = () => {
    const axiosIntens = useAxiosSecure();
    const [habitsData,setHabitData] = useState([])
    console.log(habitsData);
    
    useEffect(()=>{
       axiosIntens.get('/latest-habits')
        .then(res => {
            console.log(res.data);
            setHabitData(res.data)
        })
        .catch(error=>{
            console.log('error facing habits',error);
        })
    },[axiosIntens])
    return (
      <div className='max-w-11/12 mx-auto my-20'>
        <h1 className='text-4xl text-center mb-5 font-semibold '>Latest Habits</h1>
          <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-4 items-center justify-center '>
            {
                habitsData.map((habit)=><Card
                key={habit._id}
                 habit={habit}
                 
                 ></Card>)
            }
        </div>
      </div>
    );
};

export default LatestHabits;