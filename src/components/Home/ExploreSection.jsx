import React from "react";
import ExploreCard from "./ExploreCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ExploreSection = ({  collectionName }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
      // Fetch restaurants data from API
      const fetchRestaurants = async () => {
        try {
          const response = await axios.get(
            "http://localhost:10000/v1/api/restaurant"
          );
          setRestaurants(response.data.data); // Assuming the API response structure matches the expected format
        } catch (error) {
          console.error("Failed to fetch restaurants:", error);
        }
      };

      fetchRestaurants();
    }, []);
  return (
    <div>
      <div className="mt-6 text-3xl">{collectionName}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {restaurants.map((restaurant, index) => (
          <ExploreCard
            key={restaurant._id}
            restaurant={restaurant}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
