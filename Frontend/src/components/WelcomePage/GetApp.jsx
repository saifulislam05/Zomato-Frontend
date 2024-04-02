import React, { useState } from "react";

const GetApp = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");

  return (
    <div className="bg-[#fffbf7] py-14 my-10">
      <div className="w-full md:w-8/12 lg:w-6/12 mx-auto flex flex-wrap justify-between">
        <div className="app-image w-4/12">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            alt=""
          />
        </div>
        <div className="w-7/12">
          <h1 className="text-3xl font-semibold">Get the Zomato app</h1>
          <p className="font-light my-2">
            We will send you a link, open it on your phone to download the app
          </p>
          <form className="flex flex-col gap-3">
            <div className="flex gap-4">
              {/* Email Radio Button */}
              <div className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sendOn"
                  id="email"
                  className="sr-only peer"
                  onChange={() => setSelectedMethod("email")}
                  checked={selectedMethod === "email"}
                />
                <label
                  htmlFor="email"
                  className="flex items-center px-4 py-1 bg-white border-2 border-gray-300 rounded-full cursor-pointer peer-checked:border-[#ef4f5f] peer-checked:text-[#ef4f5f]"
                >
                  Email
                </label>
              </div>
              {/* Phone Radio Button */}
              <div className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="sendOn"
                  id="phone"
                  className="sr-only peer"
                  onChange={() => setSelectedMethod("phone")}
                  checked={selectedMethod === "phone"}
                />
                <label
                  htmlFor="phone"
                  className="flex items-center px-4 py-1 bg-white border-2 border-gray-300 rounded-full cursor-pointer peer-checked:border-[#ef4f5f] peer-checked:text-[#ef4f5f]"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="inputBox flex justify-between">
              <input
                type={selectedMethod === "email" ? "email" : "tel"}
                placeholder={
                  selectedMethod === "email" ? "Email" : "Enter Phone Number"
                }
                className="p-3 border bg-white w-7/12 rounded-xl outline-none"
              />
              <button
                type="submit"
                className="w-4/12 p-3 rounded-xl text-white duration-200 bg-[#e03556] hover:bg-[#e03536]"
              >
                Share App Link
              </button>
            </div>
          </form>
          <div className="app-link my-5 w-4/12 flex gap-3">
            <img
              src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              alt="Google Play"
            />
            <img
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
