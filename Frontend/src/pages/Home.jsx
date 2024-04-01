import React from "react";
import Header from "../components/Header";
import ServeType from "../components/ServeType";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <div>
      <Header />
      <ServeType />
      <Collection/>
    </div>
  );
};

export default Home;
