import React from "react";

const DeliveryCollectionItem = ({ item }) => {
  return (
    <div>
      <div className="h-44 w-44 flex flex-col items-center gap-2">
        <div className="h-36 w-36 ">
          <img
            src={item.cover}
            className="object-cover h-full w-full rounded-full"
            alt={item.title}
          />
        </div>
      <p className="text-2xl leading-8 font-medium ">
        {item.title}
      </p>
      </div>
    </div>
  );
};

export default DeliveryCollectionItem;
