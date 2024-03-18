import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Phone from "./Phone";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: {
    countryCode: "",
    number: "",
  },
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.object().shape({
    countryCode: Yup.string().required("Country Code is required"),
    number: Yup.string().matches(/^\d+$/, "Phone Number should only contain numbers").required("Phone Number is required"),
  }),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Please confirm your password"),
  agreeToTerms: Yup.bool().oneOf([true], "You must agree to the terms and conditions"),
});

const countryCodes =[  { label: "+1", value: "1" },
  { label: "+44", value: "44" },
  { label: "+91", value: "91" },
];

const SignUp = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[2]);

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <div className="max-w-[60%]  p-6 bg-white shadow-md flex-col justify-center">
          <div className="md:gap-6 md:flex w-[100%] justify-between">
         <div className="">
         <Input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              handleOnBlur={handleBlur}
              error={errors?.firstName}
              isTouched={touched?.firstName}
              placeholder="First Name"
              className="p-2 border border-[#686666]"
              label={"First Name"}
            />
         </div>
         <div className=" md:w-full  md:gap-6 md:flex ">
            <Input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              handleOnBlur={handleBlur}
              error={errors?.lastName}
              isTouched={touched?.lastName}
              placeholder="Last Name"
              className="p-2 border border-[#686666]"
              label={"Last Name"}
            />
          </div>
          </div>

          <div className="mb-4">
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              handleOnBlur={handleBlur}
              error={errors?.email}
              isTouched={touched?.email}
              placeholder="Email"
              className="p-2 border border-[#686666] md:w-full"
              label={"Email"}
            />
          </div>
          <div>
            <Phone
              countryOptions={countryCodes}
              selectedCountry={selectedCountry}
              handelOnBlur={handleBlur} 
              onCountryChange={(option) => {
                setSelectedCountry(option);
                handleChange({
                  target: {
                    name: "phoneNumber",
                    value: {
                      ...values.phoneNumber,
                      countryCode: option?.value || "",
                    },
                  },
                });
              }}
              phoneNumber={values.phoneNumber.number}
              onPhoneNumberChange={(e) =>
                handleChange({
                  target: {
                    name: "phoneNumber",
                    value: { ...values.phoneNumber, number: e.target.value },
                  },
                })
              }
              errors={errors}
              touched={touched}
            />
          </div>

          <div className="mb-4">
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
              handleOnBlur={handleBlur}
              error={errors?.password}
              isTouched={touched?.password}
              placeholder="Password"
              type="password"
              className="p-2 border border-[#686666] md:w-full"
              label={"Password"}
            />
          </div>

          <div className="mb-4">
            <Input
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              handleOnBlur={handleBlur}
              error={errors?.confirmPassword}
              isTouched={touched?.confirmPassword}
              placeholder="Confirm Password"
              type="password"
              className="p-2 border border-[#686666] md:w-full"
              label={"Confirm Password"}
            />
          </div>
          <div className="flex-col">
            <div className=" flex  md:flex mb-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={values.agreeToTerms}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mr-2 w-6 h-6 mt-2 rounded-none md:mt-0 cursor-pointer" 
              />

              <span className="text-sm">
                I Agree to the
                <span className="text-[#941D39]">
                  &nbsp; <a className="underline cursor-pointer">Terms and Conditions</a>
                </span>
                &nbsp; &
                <span className="text-[#941D39] ">
                  &nbsp; <a className="underline cursor-pointer">Privacy Policy</a>
                </span>
              </span>
            </div>

            <div>
              {touched.agreeToTerms && errors.agreeToTerms && (
                <div className="text-red-500">{errors.agreeToTerms}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-4">

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#941D39] text-white py-2 mb-3 px-4 cursor-pointer focus:outline-none focus:shadow-outline-blue md:w-[45%] w-[100%]"
            >
            Sign Up
          </button>
          <p className='mb-4 sm: '> Already have an account?&nbsp;
            <Link className='text-[#941D39] underline' to='/login'>
               Login now
            </Link>
          </p>
            </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
