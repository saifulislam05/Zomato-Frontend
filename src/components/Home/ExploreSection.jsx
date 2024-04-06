import React from "react";
import ExploreCard from "./ExploreCard";


const ExploreSection = ({ restaurants, collectionName }) => {
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
