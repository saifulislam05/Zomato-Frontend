import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
// import CryptoJS from "crypto-js";
import SearchBox from "../WelcomePage/SearchBox";
import LogIn from "../Modal/LogIn";
import SignUp from "../Modal/SignUp";

const Header = () => {
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [menuDisplay, setMenuDisplay] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      const decoded = jwtDecode(token);
      setIsLoggedIn(true);
      setUserDetails(decoded);
      // Assuming 'email' is a decoded property
    }
  }, []);

  // Generate Gravatar URL
  // const getGravatarUrl = (email="saiful.bijulia@gmail.com") => {
  //   const trimmedEmail = email.trim().toLowerCase();
  //   const hash = CryptoJS.MD5(trimmedEmail).toString();
  //   return `https://www.gravatar.com/avatar/${hash}?d=mp`; // 'mp' for mystery-person default image
  // };

  const logoutHandler = () => {
    // Implementation may vary based on backend
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    // Optionally redirect user or force a component refresh
  };

  // Using the user's email from userDetails to generate Gravatar URL or default if email is not present
  // const profilePic = userDetails.email
  //   ? getGravatarUrl(userDetails.email)
  //   : "https://www.gravatar.com/avatar?d=mp";

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
          <div className="relative  mr-4 text-lg cursor-pointer">
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setMenuDisplay((val) => !val)}
            >
              <img
                src={`https://www.gravatar.com/avatar?d=mp`}
                alt="profile pic"
                className="w-9 h-9 rounded-full"
              />
              <div className="mx-2">Profile</div>
              {/* <img src={downArrow} alt="arrow" className="filter invert" /> */}
              <FaCaretDown />
            </div>
            <div
              className={`absolute top-15 w-70 rounded-lg bg-white shadow-md border  ${
                menuDisplay ? "block" : "hidden"
              }`}
            >
              <Link to="/user/reviews" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Profile
                </div>
              </Link>
              <Link to="/user/notifications" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Notifications
                </div>
              </Link>
              <Link to="/user/bookmarks" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Bookmarks
                </div>
              </Link>
              <Link to="/user/reviews" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Reviews
                </div>
              </Link>
              <Link to="/user/network" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Network
                </div>
              </Link>
              <Link to="/user/find-friends" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Find Friends
                </div>
              </Link>
              <Link to="/user/settings" className="block">
                <div className="p-2 cursor-pointer text-base hover:bg-gray-200">
                  Settings
                </div>
              </Link>
              <div
                className="p-2 cursor-pointer text-base hover:bg-gray-200"
                onClick={logoutHandler}
              >
                Logout
              </div>
            </div>
          </div>
        ) : (
          <ul className="md:w-2/12  flex justify-between text-lg cursor-pointer">
            <li onClick={() => setIsLogInModalOpen(true)}>Log in</li>
            <li onClick={() => setIsSignUpModalOpen(true)}>Sign up</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
