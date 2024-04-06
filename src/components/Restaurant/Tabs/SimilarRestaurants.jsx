import React from 'react'
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevArrow from "../../common/carousel/prevArrow";
import NextArrow from "../../common/carousel/nextArrow";
import ExploreCard from '../../Home/ExploreCard';

const settings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SimilarRestaurants = ({restaurants}) => {
    return (
      
    <Slider {...settings}>
      {restaurants.map((restaurant, i) => (
        <ExploreCard key={i} restaurant={restaurant} i={i} />
      ))}
    </Slider>
  );
}

export default SimilarRestaurants