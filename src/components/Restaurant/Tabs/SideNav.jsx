import React from "react";

const SideNav = ({
  categories,
  activeSideNav,
  setActiveSideNav,
  foodItemsData,
}) => {
  return (
    <div className="w-2/12 border-r-2">
      <div className="w-full flex flex-col">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex items-center p-2 cursor-pointer shadow-inner ${
              activeSideNav === category
                ? "border-r-2 border-red-400 bg-gradient-to-l from-red-100"
                : ""
            }`}
            onClick={() => setActiveSideNav(category)}
          >
            <span
              className={`text-lg ${
                activeSideNav === category ? "text-[#ef4f5f]" : ""
              }`}
            >
              {category.replace(/([A-Z])/g, " $1").trim()} (
              {foodItemsData[category].length})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
