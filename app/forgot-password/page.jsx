"use client"
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { forgotPassword } from '@/validation/validation'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link';



const ForgotPassword = () => {

  const router=useRouter()

  const initialValue ={
    email:"",
    password:"",
    Cpassword:""

  }

  const onSubmitHandler=(e,{resetForm})=>{
    try {
      toast.success("Recovered Successfully");
      resetForm()
      router.push("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
   <Formik validationSchema={forgotPassword} initialValues={initialValue} onSubmit={onSubmitHandler}>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]"> Forgot Password</h2>
        
          <Form className="flex flex-col gap-4  mt-8">
       

            <Field className="p-2 rounded-xl border" id="email" type="text" name="email" placeholder="Enter Your Email" autoComplete="current-Email" />
            <ErrorMessage name='email' component={"p"} className='text-red-500'/>
            
            <Field className="p-2  rounded-xl border" id="password" type="password" name="password" placeholder="Enter Your password" autoComplete="current-password" />
            <ErrorMessage name="password" component={"p"} className='text-red-500'/>

            <Field className="p-2  rounded-xl border" id="Cpassword" type="password" name="Cpassword" placeholder="Confirm Your password" autoComplete="current-password" />
            <ErrorMessage name="Cpassword" component={"p"} className='text-red-500'/>

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
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1502739391963-eda719c24cd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHN1bnJpc2V8ZW58MHx8MHx8fDA%3D" alt="Login Image" />
        </div>
      </div>
    </Formik>
  </div>
  )
}

export default ForgotPassword;
