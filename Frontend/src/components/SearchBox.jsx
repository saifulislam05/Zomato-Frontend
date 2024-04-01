import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
const SearchBox = () => {
  return (
    <div className="w-full md:w-10/12 lg:w-8/12 bg-white text-[#8a8a8a] rounded-xl flex justify-between p-4 gap-2">
      <div className="selectBox w-4/12 flex justify-between items-center gap-2 border-r-2 pr-1">
        <div className="locationIcon w-1 ">
          <FaLocationDot color="#ff7e8b" />
        </div>
        <select name="" id="" className="w-11/12">
          <option value="kolkata">Kolkata</option>
          <option value="dumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
          <option value="kolkata">Kolkata</option>
        </select>
      </div>
      <div className="inputBox w-8/12 flex items-center gap-2">
        <div className="searchIcon w-fit">
          <IoSearchOutline />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for restaurant, cuisune or a dish"
          className="w-11/12 outline-none focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBox