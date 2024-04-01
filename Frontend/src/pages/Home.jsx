import React from "react";
import Header from "../components/Header";
import ServeType from "../components/ServeType";
import Collection from "../components/Collection";
import PopularLocalities from "../components/PopularLocalities";
import GetApp from "../components/GetApp";
import ExploreOptions from "../components/ExploreOptions";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <ServeType />
      <Collection />
      <PopularLocalities />
      <GetApp />
      <ExploreOptions />
      <Footer/>
    </div>
  );
};

export default Home;
