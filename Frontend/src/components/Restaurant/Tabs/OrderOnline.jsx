import React, { useState } from "react";
import { foodItemsData,offerTrackData } from "../../../data/orderOnline";
import SideNav from "./SideNav"; 
import SmallSearchBar from "./SmallSerachBar";

import { FaRegCompass, FaRegClock} from "react-icons/fa";
import OfferTrack from "./OfferTrack";
const OrderOnline = () => {
  const [activeSideNav, setActiveSideNav] = useState("recommended");
  const categories = Object.keys(foodItemsData);

  return (
    <div className="flex justify-between gap-6">
      <SideNav
        categories={categories}
        activeSideNav={activeSideNav}
        setActiveSideNav={setActiveSideNav}
        foodItemsData={foodItemsData}
      />
      <div className="right-side w-10/12">
        <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-semibold text-gray-900">
            Order Online
          </div>
          <SmallSearchBar placeholder="Search within menu" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <FaRegCompass />
            <span className="ml-2 text-base font-normal text-gray-600">
              Live track your order
            </span>
          </div>
          <div
            className="my-2 border-r border-gray-300"
            style={{ height: "1px" }}
          ></div>
          <div className="flex items-center">
            {/* <img src={clockIcon} className="w-3.5 h-3.5" alt="time" /> */}
            <FaRegClock />
            <span className="ml-2 text-base font-normal text-gray-600">
              30 min
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-4 p-4">
          {foodItemsData[activeSideNav].map((item, index) => (
            <div
              key={index}
              className="max-w-sm w-full p-4 border rounded-lg shadow-md"
            >
              {item.imgSrc && (
                <img
                  src={item.imgSrc}
                  alt="Food"
                  className="w-full h-40 object-cover rounded"
                />
              )}
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <p className="text-gray-800 font-bold">Price: ₹{item.price}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  {item.votes} Votes
                </span>
                <span
                  className={`text-sm ${
                    item.foodType === "veg" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.foodType.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex ">
          {offerTrackData?.map((val, id) => {
            return <OfferTrack key={id} txt1={val.txt1} txt2={val.txt2} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
