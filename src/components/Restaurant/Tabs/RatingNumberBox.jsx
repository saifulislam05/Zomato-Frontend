import React from "react";

import { FaStar } from "react-icons/fa";
const RatingNumberBox = (props) => {
  const {
    stars = 1,
    txt = 1,
    iconR = false,
    isActive = true,
    ...restProps
  } = props;

  const determineBackground = () => {
    if (+stars <= 1 && +txt <= +stars) {
      return "bg-red-500"; // Example Tailwind color
    } else if (+stars <= 2 && +txt <= +stars) {
      return "bg-red-300"; // Example Tailwind color
    } else if (+stars <= 3 && +txt <= +stars) {
      return "bg-yellow-400"; // Example Tailwind color
    } else if (+stars <= 4 && +txt <= +stars) {
      return "bg-green-500"; // Example Tailwind color
    } else if (+stars <= 5 && +txt <= +stars) {
      return "bg-green-700"; // Example Tailwind color
    } else {
      return "border"; // Default class for non-active
    }
  };

  return (
    <div
      className={`${determineBackground()} m-1 w-9 h-7 flex justify-center items-center border border-gray-300 rounded cursor-pointer`}
      {...restProps}
    >
      <div
        className={`text-lg font-bold ${
          isActive ? "text-white" : "text-gray-500"
        }`}
      >
        {!iconR ? txt : ""}
      </div>
      {!iconR && (
        <div className="w-3 h-3 ml-1">
          <FaStar 
          className={`w-full h-full ${isActive ? "filter invert" : ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default RatingNumberBox;
