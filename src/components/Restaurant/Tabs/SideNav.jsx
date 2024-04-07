import React from "react";

const SideNav = ({ foodItems, activeSideNav, setActiveSideNav }) => {
  return (
    <div className="w-2/12 border-r-2">
      <div className="w-full flex flex-col">
        {foodItems.map((category) => (
          <div
            key={category._id}
            className={`flex items-center p-2 cursor-pointer shadow-inner ${
              activeSideNav === category.categoryName
                ? "border-r-2 border-red-400 bg-gradient-to-l from-red-100"
                : ""
            }`}
            onClick={() => setActiveSideNav(category.categoryName)}
          >
            <span
              className={`text-lg ${
                activeSideNav === category.categoryName ? "text-[#ef4f5f]" : ""
              }`}
            >
              {category.categoryName} ({category.items.length})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
