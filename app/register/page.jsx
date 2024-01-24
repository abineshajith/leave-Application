"use client"
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import {registrationValidationSchema}  from '../../validation/validation'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import axios  from 'axios'



const RegisterPage = () => {
  const router = useRouter();
 
  const initialValue = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    position: "",
  };

  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      const response = await axios.post("api/register", values);
      const data = response.data;
      
      toast.success(data.message); // Assuming your backend sends a 'message' property
  
      resetForm();
      router.push("/login");
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
      }
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
   <Formik validationSchema={registrationValidationSchema } initialValues={initialValue} onSubmit={onSubmitHandler}>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]"> Regestration Page</h2>
        
          <Form className="flex flex-col gap-4  mt-8">
          <Field className="p-2 rounded-xl border" id="name" type="text" name="name" placeholder="Enter Your name" autoComplete="current-name" />
            <ErrorMessage name='name' component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" id="email" type="text" name="email" placeholder="Enter Your Email" autoComplete="current-Email" />
            <ErrorMessage name='email' component={"p"} className='text-red-500'/>
            
            <Field className="p-2  rounded-xl border" id="password" type="password" name="password" placeholder="Enter Your password" autoComplete="current-password" />
            <ErrorMessage name="password" component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" id="mobile" type="tel" name="mobile" placeholder="Enter Your mobile number" autoComplete="current-mobile" />
            <ErrorMessage name='mobile' component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" as="select" id="position"name="position" required>
              <option value="">Select Position</option>
              <option value="employee">Employee</option>
              <option value="mentor">Mentor</option>
              <option value="ceo">CEO</option>
            </Field>
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Register
            </button>
          </Form> 

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>If you are already a member, easily log in</p>
            <Link href={"/login"}>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1474486974195-a9c5aa72c730?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login Image" />
        </div>
      </div>
    </Formik>
  </div>
  )
}

export default RegisterPage
