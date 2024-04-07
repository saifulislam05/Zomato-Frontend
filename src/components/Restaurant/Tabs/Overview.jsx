import React from "react";
import MenuCard from "./MenuCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CuisineOptions from "./CuisineOptions";
import SimilarRestaurants from "./SimilarRestaurants";
import { restaurants } from "../../../data/restaurants";

const Overview = ({data}) => {

  const menuData = [
    {
      title: "Food Menu",
      imgSrc:
        "https://b.zmtcdn.com/data/menus/650/19555650/fb2718a8276d826749f718df8ed9e1cc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      pages: "23",
    },
    {
      title: "Food Menu Card",
      imgSrc:
        "https://b.zmtcdn.com/data/menus/650/19555650/391e84a6be61f344418433c70e72232b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      pages: "30",
    },
  ];



  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-7/12  pr-4">
          <h2 className="text-2xl font-semibold my-4">About this place</h2>

          {/* Menu Section */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Menu</h3>
            <Link
              to={`/kolkata/ablak/menu`}
              className="flex items-center text-red-600"
            >
              See all menus <FaArrowRightLong />
            </Link>
          </div>
          <div className="flex flex-wrap mb-4 gap-6">
            {menuData.map((menu, index) => (
              <MenuCard
                key={index}
                title={menu.title}
                imgSrc={menu.imgSrc}
                pages={menu.pages}
              />
            ))}
          </div>

          {/* Cuisines Section */}
          <div className="my-6">
            <h3 className="text-xl font-semibold mb-2">Cuisines</h3>
            <div className="flex flex-wrap gap-3">
              {data?.info?.cuisine?.map((item) => (
                <CuisineOptions
                  key={item._id}
                  link={item.url}
                  title={item.name}
                />
              ))}
            </div>
          </div>

          {/* Similar Restaurants */}
          <h3 className="text-xl font-semibold mb-2">Similar Restaurants</h3>
          <div className=" w-full ">
            <SimilarRestaurants restaurants={restaurants} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
