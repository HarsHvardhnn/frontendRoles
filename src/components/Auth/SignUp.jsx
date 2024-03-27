import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import openEye from "./open.png";
import closedEye from "./close.png";
import bgImage from "./bg2.jpg";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200 ">
      <div className="flex bg-white justify-center items-center w-3/5 shadow-xl rounded-xl">
        {/* Left section with form */}
        <div
          className="flex-1 bg-white p-8 rounded-s-xl w-full sm:w-96"
        >
          <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
          {/* Login link */}
          <div className="m-4 ml-0">
            <span>Already a member?</span>
            <Link to="/login" className="ml-1 text-blue-500 hover:underline">
              Log In Now
            </Link>
          </div>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form>
                {/* Form fields here */}
                <div className="flex justify-between ">
                  <div className="mb-4">
                    {/* First Name */}
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : " focus:border-black"
                      }`}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {/* Other form fields */}
                  <div className="mb-4">
                    {/* Last Name */}
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : " focus:border-black"
                      }`}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  {/* Email */}
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : " focus:border-black"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  {/* Phone Number */}
                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                      errors.phoneNumber && touched.phoneNumber
                        ? "border-red-500"
                        : " focus:border-black"
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4 relative">
                  {/* Password */}
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : " focus:border-black"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  >
                    <img
                      src={showPassword ? openEye : closedEye}
                      alt="Toggle Password Visibility"
                      className="h-6 w-6"
                    />
                  </button>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4 relative">
                  {/* Confirm Password */}
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`w-full px-2.5 py-1.5 border rounded-md focus:outline-none ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : " focus:border-black"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                  >
                    <img
                      src={showConfirmPassword ? openEye : closedEye}
                      alt="Toggle Confirm Password Visibility"
                      className="h-6 w-6"
                    />
                  </button>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-7">
            <div className="flex items-center mb-7">
              <div className="border-t border-black flex-grow"></div>
              <span className="mx-4  text-sm text-gray-500">Social Signup</span>
              <div className="border-t border-black flex-grow"></div>
            </div>
            <div>
              {/* Google sign up button */}
              <button
                //onClick={handleGoogleSignUp}
                className="flex items-center justify-center py-2 px-4 rounded-full mb-2 border w-full"
              >
                <img
                  //src={googleLogo}
                  alt="Google Logo"
                  className="w-6 h-6 mr-2"
                />
                Sign Up with Google
              </button>

              {/* Facebook sign up button */}
              <button
                //onClick={handleFacebookSignUp}
                className="flex items-center justify-center py-2 px-4 rounded-full border w-full"
              >
                <img
                  //src={facebookLogo}
                  alt="Facebook Logo"
                  className="w-6 h-6 mr-2"
                />
                Sign Up with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Right section with background image */}
        <div
          className="flex-1 "
        >
          {/* Background image here */}
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
