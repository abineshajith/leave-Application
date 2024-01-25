"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile');
        const data = response.data;
    
        if (data.error) {
          // Handle server-side errors
          console.error('Error fetching user data:', data.error);
          setUser(null);
        } else {
          // Set user data if available
          setUser(data.user);
        }
      } catch (error) {
        // Handle network errors
        console.error('Network error while fetching user data:', error.message);
        setUser(null);
      }
    };

    const isPrivatePath = [ '/update-profile', '/profile'];

    if (isPrivatePath.includes(pathName)) {
      fetchData();
    } else {
      setUser(null);
    }
  }, [pathName]);

  const logoutHandler = async () => {
    try {
      const response = await axios.post('/api/logout');
      const data = response.data;

      if (data.error) {
        // Handle server-side errors
        toast.error(data.error);
      } else {
        // Display success message to the user
        toast.success(data.message);

        // Redirect the user to the login page
        router.push('/login');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error during logout:', error.message);
      toast.error('Logout failed');
    }
  };

  return <AuthContext.Provider value={{ user, logoutHandler }}>{children}</AuthContext.Provider>;
};