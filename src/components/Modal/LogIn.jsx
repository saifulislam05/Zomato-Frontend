import React, { useState, useEffect } from "react";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { useAuth } from "../../Context/AuthContext";


const LogIn = ({ setIsLogInModalOpen }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      formData.email &&
      formData.password;
    setIsFormValid(isValid);
  }, [errors, formData]);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return value ? "" : "Email is required";
      case "password":
        return value ? "" : "Password is required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    await login(formData); 
    setIsLoading(false);
    setIsLogInModalOpen(false);
  };
  const getInputClass = (name) =>
    `border ${
      errors[name] ? "border-red-500" : "border-gray-300"
    } rounded-md p-2 outline-none w-full`;

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 pt-6 rounded-lg shadow-xl w-10/12 md:w-6/12 lg:w-4/12 text-black">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Login</h1>
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => setIsLogInModalOpen(false)}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col mt-3 gap-3"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClass("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={getInputClass("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className={`mt-4 w-full py-2 rounded-md flex justify-center items-center ${
              !isFormValid || isLoading
                ? "bg-gray-300 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? <div className="spinner w-fit"></div> : "Log In"}
          </button>
        </form>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <IoMdMail className="text-[#ef4f5f] text-xl" />
          <span>Continue with Email</span>
        </button>
        {/* Place the correct Google icon and label */}
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/google-160-189824.png"
            alt="Google"
            className="w-6 h-6"
          />
          <span>Continue with Google</span>
        </button>
        <div className="flex gap-1 mt-2 text-sm">
          <p>Don't have an account?</p>{" "}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
