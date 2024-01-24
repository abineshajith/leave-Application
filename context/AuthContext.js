"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const pathName = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile'); // Adjust the API endpoint if needed
        const data = await response.data;
        setUser(data?.user);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setUser(null);
      }
    };

    const isPrivatePath = ['/', '/update-profile', '/profile'];
    if (isPrivatePath.includes(pathName)) {
      fetchData();
    } else {
      setUser(null);
    }
  }, [pathName]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};