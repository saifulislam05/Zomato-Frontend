import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import CollectionCard from "./CollectionCard";

const Collection = ({collectionData}) => {
  return (
    <div className="w-10/12 mx-auto ">
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
        {collectionData.map(({ id, title, content, imageUrl }) => (
          <CollectionCard
            key={id}
            title={title}
            content={content}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
