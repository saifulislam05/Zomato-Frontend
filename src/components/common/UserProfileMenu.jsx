import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";


const UserProfileMenu = ({ menuDisplay, logoutHandler, setMenuDisplay }) => {
  return (
    <div className="relative mr-4 text-lg cursor-pointer ">
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
        <FaCaretDown />
      </div>
      <div
        className={`absolute top-15 w-70 rounded-lg bg-white shadow-md border text-black ${
          menuDisplay === true ? "block" : "hidden"
        }`}
      >
        {/* Profile links */}
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
        {/* Other links */}
        <div
          className="p-2 cursor-pointer text-base hover:bg-gray-200"
          onClick={logoutHandler}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
