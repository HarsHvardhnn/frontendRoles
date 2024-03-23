import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import openEye from "./open.png";
import closedEye from "./close.png";
import bgImage from "./bg2.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200 ">
      <div className="flex bg-white justify-center items-center w-3/5 shadow-xl rounded-xl">
        {/* Left section with form */}
        <div
          className="flex-1 bg-white p-8 rounded-s-xl w-full sm:w-96"
        >
          <h2 className="text-2xl font-bold mb-2">Log In</h2>
          {/* Signup link */}
          <div className="m-4 ml-0">
            <span>Don't have an account?</span>
            <Link to="/signup" className="ml-1 text-blue-500 hover:underline">
              Create a New Account
            </Link>
          </div>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form>
                {/* Form fields here */}
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
                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-600"
                >
                  Log In
                </button>
                {/* OTP login link */}
                <div className="mt-2 text-center">
                  <Link to="/login-otp" className="text-blue-500 hover:underline">
                    Log In with OTP
                  </Link>
                </div>
                {/* Social login buttons */}
                <div className="mt-4">
                  {/* Google sign in button */}
                  <button
                    // onClick={handleGoogleSignIn}
                    className="flex items-center justify-center py-2 px-4 rounded-full mb-2 border w-full bg-red-500 text-white"
                  >
                    {/* <img
                      src={googleLogo}
                      alt="Google Logo"
                      className="w-6 h-6 mr-2"
                    /> */}
                    Sign In with Google
                  </button>
                  {/* Facebook sign in button */}
                  <button
                    // onClick={handleFacebookSignIn}
                    className="flex items-center justify-center py-2 px-4 rounded-full border w-full bg-blue-500 text-white"
                  >
                    {/* <img
                      src={facebookLogo}
                      alt="Facebook Logo"
                      className="w-6 h-6 mr-2"
                    /> */}
                    Sign In with Facebook
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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

export default LoginPage;
