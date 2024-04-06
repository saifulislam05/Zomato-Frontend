import React from "react";
import Header from "../components/WelcomePage/Header";
import ServeType from "../components/WelcomePage/ServeType";
import Collection from "../components/WelcomePage/Collection";
import PopularLocalities from "../components/WelcomePage/PopularLocalities";
import GetApp from "../components/WelcomePage/GetApp";
import ExploreOptions from "../components/WelcomePage/ExploreOptions";
import Footer from "../components/WelcomePage/Footer";

const WelcomePage = () => {
  return (
    <div className="">
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

export default WelcomePage;
