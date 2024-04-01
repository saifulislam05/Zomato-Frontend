import React from "react";
import ServeTypeCard from "./ServeTypeCard";

const ServeType = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-3 gap-5 my-10">
      <ServeTypeCard
        title="Online Order"
        description="Stay home and order ot your doorstep"
        image="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
      />
      <ServeTypeCard
        title="Dining"
        description="View the city's favorite dinin venues"
        image="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
      />
      <ServeTypeCard
        title="Nightlife and Clubs"
        description="Explore the city's top nightlife outlets"
        image="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
      />
    </div>
  );
};

export default ServeType;
