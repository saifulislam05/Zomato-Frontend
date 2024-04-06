import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Home/Header";
import GallaryGrid from "../components/Restaurant/GallaryGrid";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Details from "../components/Restaurant/Details";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:10000/v1/api/restaurant/${restaurantId}`
        );
        setRestaurantData(response.data.data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
        // Handle error, e.g., set error state, show error message, etc.
      }
    };

    if (restaurantId) {
      fetchRestaurantDetails();
    }
    console.log(restaurantData);
  }, [restaurantId]); // Re-run the effect if restaurantId changes

  if (!restaurantData) {
    // Optionally, render a loading spinner or a message here
    return <div>Loading...</div>;
  }

  const imageData = [
  {
    id: 1,
    imageUrl:restaurantData?.info?.image?.url||
      "https://b.zmtcdn.com/data/pictures/0/19555650/b6718afb1079a1311a161454b97f1fbc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    imageUrl:restaurantData?.info?.o2FeaturedImage?.url ||
      "https://b.zmtcdn.com/data/pictures/0/19555650/f8c0b112e9f50d547105a440fbcd54a8.jpg?fit=around|300:273&crop=300:273;*,*",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    imageUrl:
      "https://b.zmtcdn.com/data/pictures/chains/0/19555650/d8a1f8e636a120482946a7a075abf0e6.jpg?fit=around|300:273&crop=300:273;*,*",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    imageUrl:
      "https://b.zmtcdn.com/data/pictures/chains/0/19555650/d2a87306cf9dd854f46736e06fea8d48.jpg?fit=around|300:273&crop=300:273;*,*",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }
  
];

  return (
    <div className="w-full">
      <Header />
      <div className="w-full mt-10 md:w-10/12 mx-auto ">
        <GallaryGrid imageData={imageData} />
        <RestaurantInfo data={restaurantData} />
        <Details data={restaurantData} />
      </div>
    </div>
  );
};

export default RestaurantDetails;
