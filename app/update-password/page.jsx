"use client"
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import { Updatepassword } from '@/validation/validation'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import axios from 'axios';



const UpdatePassword = (params) => {
// console.log(params)
  const router=useRouter()
  const [loading, setLoading] =React. useState(false);
  const initialValue ={
    email:"",
    password:"",
    Cpassword:""

  }
  
  const onSubmitHandler = async (e) => {
    try {
      // Set loading to true while waiting for the response
      setLoading(true);

      // Assuming 'api/updatepassword' is the correct endpoint for updating the password
      const response = await axios.put('api/updatepassword', { ...e, token: params.searchParams.token });
      const data = response.data;

      // Display a success message
      toast.success(data.message);

      // Reset the form and navigate to the login page
      router.push('/login');
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error status
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else if (error.request) {
        // The request was made, but no response was received
        toast.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error during request setup:', error.message);
      }
    } finally {
      // Set loading back to false regardless of success or failure
      setLoading(false);
    }
  };


      if(!params.searchParams.token){
        router.replace("/")
        return<>
        
        </>
      }


  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
   <Formik validationSchema={Updatepassword} initialValues={initialValue} onSubmit={onSubmitHandler}>
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
            <button onClick={onSubmitHandler} disabled={loading}>
        {loading ? 'Updating...' : 'Update Password'}
      </button>
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

export default UpdatePassword;
