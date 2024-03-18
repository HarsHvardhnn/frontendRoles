import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Enter correct email').required('email is required'),
  password: Yup.string().required('Password is required'),
});

const onSubmit = (values, { setSubmitting }) => {
  console.log(values);
};

const Login = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
        <div className="min-w-[40%] mx-auto p-6 bg-white shadow-md  flex flex-col gap-2">
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            handleOnBlur={handleBlur}
            error={errors?.email}
            isTouched={touched?.email}
            placeholder="Enter your Email"
            className="mt-1 p-2 border-[#686666] border   w-full"
            label={"Email"}
          />

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
          <p className='underline text-[#941D39]'>Verify with OTP</p>
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 bg-[#941D39] hover:bg-[#862d42] text-white py-2 px-4  focus:outline-none focus:shadow-outline-blue md:w-[50%] w-[100%] "
          >
            Login
          </button>
          <p className='mb-4 sm: '> Dont have details? <Link to='/' className='text-[#941D39] underline'>Create an account</Link></p>
        </div>
      )}
    </Formik>
  );
};

export default Login;
