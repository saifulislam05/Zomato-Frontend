import React from "react";
import { restaurants } from "../data/restaurants";
import Filter from "../components/Home/Filter";
import ExploreSection from "../components/Home/ExploreSection";
import ExploreOptions from "../components/WelcomePage/ExploreOptions";
import DeliveryCollections from "../components/Home/DeliveryCollection";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const Delivery = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-6">
        <Filter filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <div className="w-10/12 mx-auto my-6">
        <ExploreSection
          restaurants={restaurants}
          collectionName="Deliver Restaurants in Kolkata"
        />
      </div>
      <ExploreOptions />
    </>
  );
};

export default Delivery;
