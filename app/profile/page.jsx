"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';


const Profilepage = () => {
  
    const { user } = useAuth();

    if (!user) {
      return <div>Loading....</div>;
    }
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        {user ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
              <p className="text-gray-800">{user.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
              <p className="text-gray-800">{user.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">Mobile</label>
              <p className="text-gray-800">{user.mobile}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">employee id</label>
              <p className="text-gray-800">{user.empid}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium mb-2">branch</label>
              <p className="text-gray-800">{user.branch}</p>
            </div>
            <Link href={"/update-profile"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
              type="button"
            >
              Update Profile
            </button>
            </Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profilepage;