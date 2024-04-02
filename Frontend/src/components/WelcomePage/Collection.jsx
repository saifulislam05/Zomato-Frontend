import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <div className="w-10/12 mx-auto my-16">
      <h1 className="title text-3xl mb-2 font-semibold">Collections</h1>
      <div className="w-full flex justify-between items-center">
        <p className="font-light">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Kolkata, based on trends
        </p>
        <a
          href="#"
          className="flex justify-between items-center text-[#ff7e8b]"
        >
          All collection in Kolkata <IoMdArrowDropright />
        </a>
      </div>

      <div className="collection-wrapper w-full grid grid-cols-4 gap-4 mt-4">
        <CollectionCard
          title="New In Town"
          content="9 Places"
          imageUrl="https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811168.png?output-format=webp"
        />
        <CollectionCard
          title="Best of live screenings"
          content="26 Places"
          imageUrl="https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp"
        />
        <CollectionCard
          title="What A View"
          content="16 Places"
          imageUrl="https://b.zmtcdn.com/data/collections/1abd83e8e4dfd12c6f5f10e2372a31b7_1709810540.png?output-format=webp"
        />
        <CollectionCard
          title="K-Cuisine Hangouts"
          content="9 Places"
          imageUrl="https://b.zmtcdn.com/data/collections/52f34e70dc354041b6b869018b150e9d_1709813345.png?output-format=webp"
        />
      </div>
    </div>
  );
};

export default Collection;
