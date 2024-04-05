import React, { useState } from "react";
import Tabs from "./Tabs";
import Overview from "./Tabs/Overview";
import OrderOnline from "./Tabs/OrderOnline";
import Reviews from "./Tabs/Reviews";
// Assume other components are imported similarly

const tabs = [
  { title: "Overview", component: <Overview /> },
  // Assuming other tabs have their components similarly set up
  { title: "Order Online", component: <OrderOnline/>},
  { title: "Reviews", component: <Reviews/> },
  { title: "Photos", component: <div>Photos Content</div> },
  { title: "Menu", component: <div>Menu Content</div> },
  { title: "Book A Table", component: <div>Book A Table Content</div> },
];

const Details = () => {
  const [activeTab, setActiveTab] = useState(0); // Initialized with the index of the first tab

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {tabs[activeTab].component}
    </div>
  );
};

export default Details;
