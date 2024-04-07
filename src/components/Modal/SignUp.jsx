import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useAuth } from "../../Context/AuthContext";


const SignUp = ({ setIsSignUpModalOpen }) => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validate form fields individually
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value ? "" : "Full name is required";
      case "email":
        return value ? "" : "Email is required";
      case "password":
        return value ? "" : "Password is required";
      case "confirmPassword":
        return formData.password === value ? "" : "Passwords do not match";
      case "termsAndConditions":
        return value ? "" : "You must agree to the terms and conditions";
      default:
        return "";
    }
  };

  // Handle change in form inputs and validate
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    // Update form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));

    // Validate and update errors
    const error = validateField(name, fieldValue);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Check form validity based on errors
  useEffect(() => {
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value !== "" && value !== false);
    setIsFormValid(isValid);
  }, [errors, formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    await signup(formData);
    setIsLoading(false);
    setIsSignUpModalOpen(false);
  };

  // Helper function to return input class based on error
  const getInputClass = (name) =>
    `border ${
      errors[name] ? "border-red-500" : "border-gray-300"
    } rounded-md p-2 outline-none w-full`;

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden bg-black bg-opacity-75 flex justify-center items-center">
      {errors.general && (
        <p className="text-red-500 text-center mt-4 ">{errors.general}</p>
      )}
      <div className="bg-white p-8 pt-6 rounded-lg shadow-xl w-10/12 md:w-6/12 lg:w-4/12 text-black">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Signup</h1>
          <IoMdClose
            className="cursor-pointer text-2xl"
            onClick={() => setIsSignUpModalOpen(false)}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col mt-3 gap-3"
        >
          {/* Full name input */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={getInputClass("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          {/* Email input */}
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
          {/* Password input */}
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
          {/* Confirm password input */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={getInputClass("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          {/* Terms and conditions checkbox */}
          <div>
            <label
              htmlFor="termsAndConditions"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                name="termsAndConditions"
                checked={formData.termsAndConditions}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to the Terms of Service, Privacy Policy, and Content
              Policies
            </label>
            {errors.termsAndConditions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.termsAndConditions}
              </p>
            )}
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className={`mt-4 w-full py-2 rounded-md flex justify-center items-center ${
              !isFormValid || isLoading
                ? "bg-gray-300 text-gray-500"
                : "bg-blue-500 text-white"
            }`}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? <div className="spinner w-fit"></div> : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button className="mt-4 w-full border py-2 rounded-md flex justify-center items-center gap-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/google-160-189824.png"
            alt="Google"
            className="w-6 h-6"
          />
          <span>Continue with Google</span>
        </button>
        <div className="flex gap-1 mt-2 text-sm">
          <p>Already have an account?</p>{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
