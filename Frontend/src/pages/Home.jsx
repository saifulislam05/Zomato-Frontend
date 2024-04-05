import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/WelcomePage/Footer";
import { useState } from "react";
import TabOptions from "../components/Home/TabOptions";
import Delivery from "../components/Home/Tabs/Delivery";
import DiningOut from "../components/Home/Tabs/DiningOut";
import NightLife from "../components/Home/Tabs/NightLife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Dining Out":
      return <DiningOut />;
      
    case "Delivery":
      return <Delivery />;

    case "Nightlife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};

export default Home;
