import React from 'react'
import RatingUtil from '../Home/RatingUtil';

const RestaurantInfo = ({ data }) => {
  
  const {
    name = "no name",
    locality: { name: place = "", address = "" } = {}, 
    timing: { text: timingText = "", color: timingColor = "" } = {}, 
    ratingNew: {
      ratings: {
        DINING: {
          rating: diningRating = "",
          reviewCount: diningReviewCount = "",
        } = {}, 
        DELIVERY: {
          rating: deliveryRating = "",
          reviewCount: deliveryReviewCount = "",
        } = {}, 
      } = {},
    } = {}, 
  } = data?.info || {}; 

  return (
    <div className="w-full h-full my-5">
      <div className="w-full h-full flex justify-between">
        <div className="w-1/2 h-full">
          <div className="text-4xl font-medium text-gray-900">{name}</div>
          <div className="text-base font-light text-gray-500">{address}</div>
          <div className="my-1 text-base font-light text-gray-700">{place}</div>
          <div className="flex text-base">
            <span className={`text-[${timingColor}]`}>Open now -</span>
            <span className="text-gray-700"> {timingText}</span>
            <span className="relative cursor-pointer ml-2 w-3 h-3">
              {/* <img src={infoIcon} alt="info" className="w-full h-full" /> */}
              {/* Tooltip functionality requires additional implementation */}
            </span>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end gap-4">
          <RatingUtil
            rating={diningRating}
            count={diningReviewCount}
            txt="Dining Reviews"
          />
          <RatingUtil
            rating={deliveryRating}
            count={deliveryReviewCount}
            txt="Delivery Reviews"
          />
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo