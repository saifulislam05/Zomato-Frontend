import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import { IoMdMail } from "react-icons/io";

const LogIn = ({ setIsLogInModalOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 pt-6 rounded-lg shadow-xl  w-10/12 md:w-6/12 lg:w-4/12 text-black">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Login</h1>
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => setIsLogInModalOpen(false)}
          />
        </div>
        <div className="w-full flex border border-gray-300 rounded-md p-2 mt-8">
          <div className="w-3/12 flex justify-between items-center ">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
              alt=""
              srcSet=""
              className="w-3/12"
            />
            <select name="" id="" className="w-8/12">
              <option selected value="+91">
                +91
              </option>
              <option value="+91">America 001</option>
              <option value="+91">+91</option>
              <option value="+91">+91</option>
            </select>
          </div>
          |
          <input
            type="text"
            className=" ml-2 outline-none focus:outline-none"
            placeholder="Phone Number"
          />
        </div>
        <button className="mt-4 w-full text-white bg-[#ef4f5f] hover:bg-[#ef4f5f] py-2 rounded-md">
          Send One Time Password
        </button>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <IoMdMail className="text-[#ef4f5f] text-xl" />{" "}
          <span>Continue with Email</span>
        </button>
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256"
            alt=""
            srcSet=""
            className="w-6 h-6"
          />
          <span>Continue with Email</span>
        </button>
        <div className="flex gap-1 mt-2 text-sm">
          <p>Don't have an account?</p> <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
