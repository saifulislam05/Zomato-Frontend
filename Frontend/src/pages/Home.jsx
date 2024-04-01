import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[500px] border relative">
        <div className="z-40">
          <NavBar />
        </div>
        <div className="w-full max-h-full  absolute top-0 bottom-0 left-0 right-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
