import React from "react";
import Header from "../components/Header";
import ServeType from "../components/ServeType";
import Collection from "../components/Collection";
import PopularLocalities from "../components/PopularLocalities";

const Home = () => {
  return (
    <div>
      <Header />
      <ServeType />
      <Collection />
      <PopularLocalities/>
    </div>
  );
};

export default Home;
