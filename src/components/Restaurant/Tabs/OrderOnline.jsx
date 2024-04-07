import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNav from "./SideNav";
import { FaRegCompass, FaRegClock } from "react-icons/fa";

import SmallSearchBar from "./SmallSearchBar";
import { Link } from "react-router-dom";

const offerTrackData = [
  {
    txt1: "0% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback",
    txt2: "use code PAYTMBASH",
  },
  { txt1: "Flat ₹125 OFF", txt2: "use code ICICINB" },
];

const OrderOnline = () => {
  const [foodItems, setFoodItems] = useState([]);

  const [activeSideNav, setActiveSideNav] = useState("");
  // const [offerTrackDataData, setofferTrackDataData] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/food`
        );
        setFoodItems(response.data);
        // setCategories(response.data.map(item=>item.categoryName))
        if (response.data.length > 0) {
          setActiveSideNav(response.data[0].categoryName);

        }
        // Optionally, fetch and set offer track data here if it's part of the response or if you need to fetch it separately
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <div className="flex justify-between gap-6">
      <SideNav
        foodItems={foodItems}
        activeSideNav={activeSideNav}
        setActiveSideNav={setActiveSideNav}
      />
      <div className="right-side w-10/12">
        <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-semibold text-gray-900">
            Order Online
          </div>
          <SmallSearchBar placeholder="Search within menu" />
        </div>
        <div className="flex flex-col">
          {/* Live Track and Time sections can be components if they are more complex */}
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
            <FaRegClock />
            <span className="ml-2 text-base font-normal text-gray-600">
              30 min
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-4 p-4">
          {foodItems
            .filter((item) => item.categoryName === activeSideNav)
            .flatMap((category) => category.items)
            .map((item, index) => (
              <Link to={`/foodItem/${item._id}`}
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
                  <p className="text-gray-800 font-bold">
                    Price: ₹{item.price}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">
                      {item.votes} Votes
                    </span>
                    <span
                      className={`text-sm ${
                        item.foodType === "veg"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.foodType.toUpperCase()}
                    </span>
                  </div>
               
              </Link>
            ))}
        </div>
        <div className="w-full flex ">
          {offerTrackData.map((val, id) => {
            return <offerTrackData key={id} txt1={val.txt1} txt2={val.txt2} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
