import React from "react";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "bg-yellow-100",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "bg-teal-100",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "bg-blue-100",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full md:w-10/12  mx-auto">
      <div className="w-full md:w-1/2 flex justify-between items-center p-4">
        {tabs.map((tab) => (
          <div
            className={`flex  items-center justify-center cursor-pointer gap-1.5 pb-3 ${
              activeTab === tab.name ? "border-b-2 border-red-400" : ""
            } `}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              key={tab.id}
              className={`rounded-full  ${
                activeTab === tab.name ? tab.backdrop : "bg-gray-100"
              }`}
            >
              <img
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
                className="w-8 h-8 m-3 "
                alt={tab.name}
              />
            </div>
            <div
              className={` text-lg font-medium ${
                activeTab === tab.name ? "text-red-400" : "text-gray-500"
              }`}
            >
              {tab.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
