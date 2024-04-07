import React from "react";
import Collection from "../../WelcomePage/Collection";
import Filter from "../Filter";
import ExploreSection from "../ExploreSection";
import ExploreOptions from "../../WelcomePage/ExploreOptions";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    // icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 5,
    title: "Online Bookings",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 6,
    title: "Rating: 4.0+",
  },
  {
    id: 7,
    title: "Cuisines",
    // icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 8,
    title: "Cafes",
  },
  {
    id: 9,
    title: "Open Now",
  },
];

const collectionData = [
  {
    id: 1,
    title: "New In Town",
    content: "9 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811168.png?output-format=webp",
  },
  {
    id: 2,
    title: "Best of live screenings",
    content: "26 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp",
  },
  {
    id: 3,
    title: "What A View",
    content: "16 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/1abd83e8e4dfd12c6f5f10e2372a31b7_1709810540.png?output-format=webp",
  },
  {
    id: 4,
    title: "K-Cuisine Hangouts",
    content: "9 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/52f34e70dc354041b6b869018b150e9d_1709813345.png?output-format=webp",
  },
];

const DiningOut = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurants data from API
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/restaurant`
        );
        setRestaurants(response.data.data); // Assuming the API response structure matches the expected format
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    };


    fetchRestaurants();
    
  }, []);
  return (
    <>
      <div className="bg-[#f8f8f8] py-7">
        <Collection collectionData={collectionData} />
      </div>
      <div className="w-10/12 mx-auto my-6">
        <Filter filterList={diningFilters} />
        <div className="my-5">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
            alt=""
            srcSet=""
          />
        </div>
        
          <ExploreSection
            
            collectionName="Trending dining Restaurants in Kolkata"
          />
     
      </div>
      <ExploreOptions />
    </>
  );
};

export default DiningOut;
