import React from "react";

const RestaurantsCards = ({ restaurant, i }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg =
    restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div
      className={`p-2.5 border border-transparent rounded-lg cursor-pointer ${
        i < 3 ? "mt-3" : "mt-12 mb-6"
      }`}
    >
      <div className="relative h-62 w-82 rounded-lg">
        <img
          src={coverImg}
          className="h-full w-full object-cover rounded-lg"
          alt={name}
        />
        <div className="absolute right-2.5 bottom-2.5 bg-white bg-opacity-80 backdrop-blur-sm font-semibold text-xs py-0.5 px-1.5 rounded text-black">
          {deliveryTime}
        </div>
        {proOff && (
          <div className="absolute left-0 bottom-10 bg-red-600 text-white text-sm px-1.5 leading-6 font-medium overflow-hidden whitespace-nowrap rounded-r-md">
            {proOff}
          </div>
        )}
        {goldOff && (
          <div className="absolute left-0 bottom-3.5 bg-red-600 text-white text-sm px-1.5 leading-6 font-medium overflow-hidden whitespace-nowrap rounded-r-md">
            {goldOff}
          </div>
        )}
        {discount && (
          <div className="absolute left-0 bottom-3.5 bg-blue-600 text-white text-sm px-1.5 leading-6 font-medium overflow-hidden whitespace-nowrap rounded-r-md">
            {discount}
          </div>
        )}
      </div>
      <div className="flex justify-between py-2">
        <div className="text-lg font-semibold text-gray-900 truncate w-48">
          {name}
        </div>
        {rating && (
          <div className="flex items-center justify-center bg-green-600 text-white text-sm px-2 rounded-full h-6">
            {rating} <i className="fi fi-sr-star" />
          </div>
        )}
      </div>
      <div className="flex justify-between">
        {cuisines.length && (
          <div className="truncate max-w-xs text-sm">
            {cuisines.map((item, i) => (
              <span key={i}>
                {item}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )}
        {approxPrice && (
          <div className="text-sm text-gray-600">{approxPrice}</div>
        )}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="h-px my-2.5 bg-gray-200"></div>
          <div className="flex items-center">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="text-xs text-gray-600 truncate w-48 ml-2">
              {bottomContainers[0]?.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantsCards;
