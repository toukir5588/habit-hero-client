import React from "react";
import { FaQuoteLeft, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="flex text-yellow-400" title={`${rating.toFixed(1)} / 5.0`}>
      {stars}
    </div>
  );
}

const CustomerReviewCard = ({ data }) => {
  return (
    <div className="max-w-md bg-white border border-gray-200  rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <FaQuoteLeft className="text-2xl text-teal-700 mb-3" />
      <h2 className="text-2xl font-semibold text-teal-900 mb-2">
        {data.title}
      </h2>

      <div className="flex items-center text-gray-600 mb-3">
        <StarRating rating={data.rating} />
        <span className="ml-2 text-sm font-medium">
          {data.rating} | 5.0 Reviews
        </span>
      </div>

      <p className="text-gray-700 mb-5">{data.summary}</p>

      <div className="flex items-center">
        <img
          src={data.reviewer?.avatar || "https://via.placeholder.com/40"}
          alt={data.reviewer?.name}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-teal-900">{data.reviewer?.name}</p>
          <p className="text-sm text-gray-500">
            {data.reviewer?.roles?.join(" • ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
