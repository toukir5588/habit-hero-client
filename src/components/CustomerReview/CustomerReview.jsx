import React, { useState } from 'react';
import CustomerReviewCard from './CustomerReviewCard';
import Marquee from "react-fast-marquee";

const CustomerReview = () => {
    const [reviewData , setReviewData] = useState([]);
    // console.log(reviewData);
    const CustomerReviewDataPromise = fetch('/Review.json')
    .then(res => res.json())
    .then(data =>{
        
        setReviewData(data)
    })
    return (
        <div className='my-20'>
            <h1 className='text-4xl mb-10 font-semibold text-center'>Customer Review</h1>
           <Marquee pauseOnHover="true" speed={50} autoFill="true" >
             <div className='flex gap-4 justify-between'>
                {
                    reviewData.map(data=> <CustomerReviewCard key={data.id} data={data}/>)
                }
            </div>
           </Marquee>

            
        </div>
    );
};

export default CustomerReview;