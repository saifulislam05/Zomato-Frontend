import React from "react";
import { useAuth } from "../../Context/AuthContext";
import UserProfileMenu from "../common/UserProfileMenu"; 
import SignUp from "../Modal/SignUp";
import LogIn from "../Modal/LogIn";
import { useState } from "react";

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);

  const logoutHandler = () => {
    logout(); // Use the logout function from useAuth
  };
  return (
    <>
      <nav className="z-20 w-full flex justify-between py-4 ">
        <a href="#" className="">
          Get the App
        </a>
        {isLogInModalOpen && (
          <LogIn setIsLogInModalOpen={setIsLogInModalOpen} />
        )}
        {isSignUpModalOpen && (
          <SignUp setIsSignUpModalOpen={setIsSignUpModalOpen} />
        )}
        <ul className="w-10/12 md:w-4/12 lg:w-3/12 flex justify-between text-lg cursor-pointer items-center">
          <li>
            <a href="#">Add restaurant</a>
          </li>
          {isLoggedIn ? (
            <UserProfileMenu
              menuDisplay={menuDisplay}
              logoutHandler={logoutHandler}
              setMenuDisplay={setMenuDisplay}
            />
          ) : (
            <>
              <li onClick={() => setIsLogInModalOpen(true)}>Log in</li>
              <li onClick={() => setIsSignUpModalOpen(true)}>Sign up</li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
