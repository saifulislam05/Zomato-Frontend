import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PopularLocalitiesCard = ({ title, count }) => {
  return (
    <div className="grid-cols-1 rounded-lg hover:shadow-md duration-200 p-4 flex justify-between items-center border-2 cursor-pointer">
      <div className="">
        <p className=" text-xl">{title}</p>
        <p className="flex items-center justify-start space-x-2">
          {count} Places
        </p>
      </div>
      <IoMdArrowDropright />
    </div>
  );
};

export default PopularLocalitiesCard;
