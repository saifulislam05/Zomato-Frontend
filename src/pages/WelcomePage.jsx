import React from "react";
import Header from "../components/WelcomePage/Header";
import ServeType from "../components/WelcomePage/ServeType";
import Collection from "../components/WelcomePage/Collection";
import PopularLocalities from "../components/WelcomePage/PopularLocalities";
import GetApp from "../components/WelcomePage/GetApp";
import ExploreOptions from "../components/WelcomePage/ExploreOptions";
import Footer from "../components/WelcomePage/Footer";
const collectionData = [
  {
    id: 1,
    title: "New In Town",
    content: "9 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709811168.png?output-format=webp",
  },
  {
    id: 2,
    title: "Best of live screenings",
    content: "26 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp",
  },
  {
    id: 3,
    title: "What A View",
    content: "16 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/1abd83e8e4dfd12c6f5f10e2372a31b7_1709810540.png?output-format=webp",
  },
  {
    id: 4,
    title: "K-Cuisine Hangouts",
    content: "9 Places",
    imageUrl:
      "https://b.zmtcdn.com/data/collections/52f34e70dc354041b6b869018b150e9d_1709813345.png?output-format=webp",
  },
];
const WelcomePage = () => {
  return (
    <div className="">
      <Header />
      <ServeType />
      <Collection collectionData={collectionData} />
      <PopularLocalities />
      <GetApp />
      <ExploreOptions />
      <Footer />
    </div>
  );
};

export default WelcomePage;
