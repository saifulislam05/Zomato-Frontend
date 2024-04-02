import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const CollectionCard = ({ title, content, imageUrl }) => {
  return (
    <div
      className="grid-cols-1 rounded-lg overflow-hidden shadow-lg h-96 flex flex-col justify-end cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 text-white">
        <p className="font-bold text-xl">{title}</p>
        <p className="flex items-center justify-start space-x-2">
          {content} <IoMdArrowDropright />
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
