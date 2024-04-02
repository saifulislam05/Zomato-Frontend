import React from "react";
const NavBar = ({ setIsLogInModalOpen, setIsSignUpModalOpen }) => {
  return (
    <>
      <nav className="z-20 w-full flex justify-between py-4 ">
        <a href="#" className="">
          Get the App
        </a>
        <ul className="w-10/12  md:w-4/12 lg:w-3/12 flex justify-between text-lg *:cursor-pointer">
          <li>
            <a href="*">Add restaurant</a>
          </li>
          <li onClick={() => setIsLogInModalOpen(true)}>Log in</li>
          <li onClick={() => setIsSignUpModalOpen(true)}>Sign up</li>
        </ul>
      </nav>
      {/* <SignUp /> */}
    </>
  );
};

export default NavBar;
