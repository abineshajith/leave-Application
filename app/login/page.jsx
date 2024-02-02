"use client"
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { loginValidationSchema } from '../../validation/validation';
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import axios from 'axios';



const LoginPage = () => {

  const router=useRouter()

  const [loading,setLoading]=React.useState(false)

  const initialValue ={
    email:"",
    password:""
  }

  const onSubmitHandler = async (values, { resetForm }) => {

    setLoading(true);
    try {
      const response = await axios.post("api/login", values);
      const data = response.data;
      
      toast.success(data.message); // Assuming your backend sends a 'message' property
  
      resetForm();
      router.push("/profile");
      setLoading(false);
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
      setLoading(false);
    }
  };


  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
   <Formik validationSchema={loginValidationSchema} initialValues={initialValue} onSubmit={onSubmitHandler}>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>
          
          <Form className="flex flex-col gap-4 mt-8">
            <Field className="p-2  rounded-xl border" id="email" type="text" name="email" placeholder="Enter Your Email" autoComplete="current-Email" />
            <ErrorMessage name='email' component={"p"} className='text-red-500'/>
            
            <Field className="p-2  rounded-xl border" id="password" type="password" name="password" placeholder="Enter Your password" autoComplete="current-password" />
            <ErrorMessage name="password" component={"p"} className='text-red-500'/>
            <button type="submit" disabled={loading} className="bg-[#002D74] rounded-xl disabled:bg-green-200 text-white py-2 hover:scale-105 duration-300">
              {loading?"loading":"login"}
            </button>
          </Form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

         

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <Link href="/forgot-password">Forgot your password?</Link>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don{"'"}t have an account?</p>
            <Link href={"/register"}>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1445962125599-30f582ac21f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNzA4Mjc2fHxlbnwwfHx8fHw%3D" alt="Login Image" />
        </div>
      </div>
    </Formik>
  </div>
  )
}

export default LoginPage
