import React from "react";

const MenuCard = ({ imgSrc, title, pages }) => {
  return (
    <div className="w-56 h-72 my-2 cursor-pointer flex flex-col">
      <div className="flex-grow flex flex-col justify-between">
        {/* Simulating the card style with two divs */}
        <div className="flex flex-col items-center py-2">
          <div className="w-40 h-1.5 bg-gray-300 rounded-t"></div>
          <div className="w-48 h-1.5 mt-1 bg-gray-300 rounded-t"></div>
        </div>
        <div className="flex-grow bg-white rounded overflow-hidden border border-gray-200">
          <img
            src={imgSrc}
            alt="menu card"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="text-lg font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{pages} Pages</div>
      </div>
    </div>
  );
};

export default MenuCard;
