import React from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/WelcomePage/Footer';
import { useState } from 'react';
import TabOptions from '../components/Home/TabOptions';

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {getCorrectScreen(activeTab)} */}
      <Footer />
    </div>
  );
}

// const getCorrectScreen = (tab) => {
//   switch (tab) {
//     case "Delivery":
//       return <Delivery />;

//     case "Dining Out":
//       return <DiningOut />;

//     case "Nightlife":
//       return <Nightlife />;

//     default:
//       return <Delivery />;
//   }
// };

export default Home