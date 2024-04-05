import React from "react";
import { FaStar } from "react-icons/fa";

const RatingUtil = ({ rating, count, txt }) => {
  return (
    <div className="min-w-[150px] w-max h-12 overflow-hidden">
      <div className="w-full h-full flex flex-wrap flex-col justify-center items-center">
        <div className="w-3/10 h-full flex justify-center items-center mr-1">
          <div className="flex justify-center items-center bg-green-500 text-white rounded p-1">
            <span className="text-lg font-semibold mr-2">{rating}</span>
            <FaStar />
          </div>
        </div>
        <div className="w-7/10 h-full">
          <div className="font-bold">{count}</div>
          <div className="text-sm">{txt}</div>
        </div>
      </div>
    </div>
  );
};

export default RatingUtil;
