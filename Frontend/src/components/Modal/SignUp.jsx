import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const SignUp = ({ setIsSignUpModalOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 pt-6 rounded-lg shadow-xl  w-10/12 md:w-6/12 lg:w-4/12 text-black">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Signup</h1>
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => setIsSignUpModalOpen(false)}
          />
        </div>
        <div className="w-full flex flex-col mt-3 gap-3 *:w-full *:border *:rounded-md *:p-2">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="email" />
          <label
            htmlFor="condition"
            className="border-none gap-1 leading-tight text-sm"
          >
            <input type="checkbox" name="" id="condition" className="mr-1 " />I
            agree to Zomato's{" "}
            <span className="text-[#ef4f5f]">
              Terms of Service, Privacy Policy
            </span>{" "}
            and
            <span className="text-[#ef4f5f]">Content Policies</span>
          </label>
        </div>
        <button
          className="mt-4 w-full border  py-2 rounded-md disabled:bg-gray-300 disabled:text-gray-500"
          disabled
        >
          Create Account
        </button>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256"
            alt=""
            srcSet=""
            className="w-6 h-6"
          />
          <span>Continue with Google</span>
        </button>
        <div className="flex gap-1 mt-2 text-sm">
          <p>Already have an account?</p> <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
