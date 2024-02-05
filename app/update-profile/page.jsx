"use client"
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import {profileValidationSchema}  from '../../validation/validation'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import axios  from 'axios'
import { useAuth } from '../../context/AuthContext';



const UpdateProfilePage = () => {
    const router = useRouter();
    const { user } = useAuth(); // Assuming useAuth provides user information
  
    const onSubmitHandler = async (e) => {
        try {
          // Assuming 'api/update-profile' is the correct endpoint for updating the profile
          const response = await axios.put('api/update-profile', e);
          const data = response.data;
      
          // Display a success message
          toast.success(data.message);
      
          // Reset the form and navigate to the login page
        
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
        }
      };

  if(!user){
    return<div>loading</div>
  }
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
   <Formik validationSchema={profileValidationSchema } initialValues={user} onSubmit={onSubmitHandler}>
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Profile Updation</h2>
        
          <Form className="flex flex-col gap-4  mt-8">
          <Field className="p-2 rounded-xl border" id="name" type="text" name="name" placeholder="Enter Your name" autoComplete="current-name" />
            <ErrorMessage name='name' component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" id="email" type="text" name="email" placeholder="Enter Your Email" autoComplete="current-Email" />
            <ErrorMessage name='email' component={"p"} className='text-red-500'/>
          
            <Field className="p-2 rounded-xl border" id="mobile" type="tel" name="mobile" placeholder="Enter Your mobile number" autoComplete="current-mobile" />
            <ErrorMessage name='mobile' component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" id="empid" type="text" name="empid" placeholder="Enter the id of the employee" autoComplete="current-name" />
            <ErrorMessage name='empid' component={"p"} className='text-red-500'/>

            <Field className="p-2 rounded-xl border" as="select" id="position"name="position" required>
              <option value="">Select Position</option>
              <option value="employee">Employee</option>
              <option value="mentor">Mentor</option>
              <option value="ceo">CEO</option>
            </Field>
            <Field className="p-2 rounded-xl border" as="select" id="branch"name="branch" required>
              <option value="">Select branch</option>
              <option value="chennai">chennai</option>
              <option value="bangalore">bangalore</option>
            </Field>
            
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              update
            </button>
          </Form> 

          {/* <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div> */}
            {/* <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>If you are already a member, easily log in</p>
            <Link href={"/profile"}>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">update</button>
            </Link>
          </div> */}
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

export default UpdateProfilePage;
