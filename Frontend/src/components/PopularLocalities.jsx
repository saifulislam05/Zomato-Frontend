import React from "react";
import PopularLocalitiesCard from "./PopularLocalitiesCard";

const PopularLocalities = () => {
  return (
    <div className="w-10/12 mx-auto my-16">
      <h1 className="title text-3xl mb-2 ">
        Popular Localities in and around{" "}
        <span className="font-semibold">Kolkata</span>
      </h1>

      <div className="PopularLocalities-wrapper w-full grid grid-cols-3 gap-4 mt-4">
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
        <PopularLocalitiesCard title="Park Street Area" count="180" />
      </div>
    </div>
  );
};

export default PopularLocalities;
