import React from 'react'
import RatingUtil from '../Home/RatingUtil';

const RestaurantInfo = () => {
  return (
    <div className="w-full h-full my-5">
      <div className="w-full h-full flex justify-between">
        <div className="w-1/2 h-full">
          <div className="text-4xl font-medium text-gray-900">
            Krupa Mess & Tiffins
          </div>
          <div className="text-base font-light text-gray-500">
            South Indian, Chinese, North Indian, Sichuan, Pizza
          </div>
          <div className="my-1 text-base font-light text-gray-700">
            Abids, Hyderabad
          </div>
          <div className="flex text-base">
            <span className="text-orange-500">Open now -</span>
            <span className="text-gray-700">10am - 11pm (Today)</span>
            <span className="relative cursor-pointer ml-2 w-3 h-3">
              {/* <img src={infoIcon} alt="info" className="w-full h-full" /> */}
              {/* Tooltip functionality requires additional implementation */}
            </span>
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end gap-4">
          <RatingUtil rating="4.1" count="601" txt="Dining Reviews" />
          <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo