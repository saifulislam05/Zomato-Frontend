import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const SmallSearchBar = ({ placeholder }) => {
  return (
    <div className="w-full h-full max-w-xs max-h-14 my-2 border border-gray-300 rounded-md flex items-center">
      <div className="flex items-center px-3 py-2 gap-2">
        <CiSearch />
        <input
          type="search"
          placeholder={placeholder}
          className="flex-1 text-lg text-gray-900 font-normal border-none outline-none"
        />
        <IoMdClose />
      </div>
    </div>
  );
};

export default SmallSearchBar;
