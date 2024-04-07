import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import SearchBox from "../WelcomePage/SearchBox";
import LogIn from "../Modal/LogIn";
import SignUp from "../Modal/SignUp";
import UserProfileMenu from "../common/UserProfileMenu"; // Import the new component

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);

  const logoutHandler = () => {
    logout(); // Use the logout function from useAuth
  };

  return (
    <div className="w-full sticky top-0 border-b bg-white z-[999]">
      <div className="w-10/12 mx-auto flex justify-between items-center py-3 ">
        <h1 className="text-4xl italic font-bold">Zomato</h1>
        {isLogInModalOpen && (
          <LogIn setIsLogInModalOpen={setIsLogInModalOpen} />
        )}
        {isSignUpModalOpen && (
          <SignUp setIsSignUpModalOpen={setIsSignUpModalOpen} />
        )}
        <SearchBox />
        {isLoggedIn ? (
          <UserProfileMenu
            menuDisplay={menuDisplay}
            logoutHandler={logoutHandler}
            setMenuDisplay={setMenuDisplay}
          />
        ) : (
          <ul className="md:w-2/12 flex justify-between text-lg cursor-pointer">
            <li onClick={() => setIsLogInModalOpen(true)}>Log in</li>
            <li onClick={() => setIsSignUpModalOpen(true)}>Sign up</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
