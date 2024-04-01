import React from "react";

const ServeTypeCard = ({ title, description, image }) => {
  return (
    <div className="row-span-1 pb-4 bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 duration-300 cursor-pointer">

      <div
        className={`image h-52 bg-center bg-cover`}
        style={{ backgroundImage: `url(${image})` }} 
      ></div>
      <div className="content px-4 py-2">
        <p className="font-bold text-lg">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServeTypeCard;
