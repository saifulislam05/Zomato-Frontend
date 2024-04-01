import React from "react";

const NavBar = () => {
  return (
    <nav className="z-20 w-full flex justify-between py-4 ">
      <a href="#" className="">
        Get the App
      </a>
      <ul className="w-10/12  md:w-4/12 lg:w-3/12 flex justify-between text-lg">
        <li><a href="*">Add restaurant</a></li>
        <li><a href="*">Log in</a></li>
        <li><a href="*">Sign up</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
