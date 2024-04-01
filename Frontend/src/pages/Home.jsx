import React from "react";
import Header from "../components/Header";
import ServeType from "../components/ServeType";
import Collection from "../components/Collection";
import PopularLocalities from "../components/PopularLocalities";
import GetApp from "../components/GetApp";

const Home = () => {
  return (
    <div>
      <Header />
      <ServeType />
      <Collection />
      <PopularLocalities />
      <GetApp/>
    </div>
  );
};

export default Home;
