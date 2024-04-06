import React  from "react";

const Tabs = ({tabs,activeTab,setActiveTab}) => {

  return (
    <div className="w-full mt-6 border-b-2 mb-3">
      <div className="w-fit gap-8 flex justify-between items-center">
        {tabs.map((tab,index) => (
          <div
            key={index}
            className={`flex items-center justify-center cursor-pointer gap-1.5 pb-2 ${
              activeTab === index ? "border-b-2 border-red-400" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            <span className={`font-semibold ${activeTab === index ? "text-[#ef4f5f]" : ""} `}>
              {tab.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
