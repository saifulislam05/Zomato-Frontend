import React from "react";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="w-full h-[500px] bg-home-bg ">
      <div className="z-40 container w-10/12 mx-auto text-white flex flex-col justify-between min-h-full">
        <NavBar />
   
        <div className="w-full  py-24">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl font-bold italic">Zomato</h1>
            <p className=" text-3xl">
              Discover the best food & drinks in Kolkata
            </p>

            <SearchBox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
