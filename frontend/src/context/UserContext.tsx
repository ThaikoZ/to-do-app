import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/api-client";
import { Outlet, useNavigate } from "react-router-dom";

// Define user data interface
export interface UserData {
  user_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

// Define context type
interface UserContextType {
  user: UserData | null;
  setUser: (userData: UserData | null) => void;
}

// Create context with initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to access UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

// UserProvider component
export const UserProvider = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/auth/users/me/");
        setUser(response.data);
      } catch (error) {
        setUser(null);
        navigate("/auth/login");
      }
    };

    fetchUser();
  }, []); // Fetch user data on component mount

  const contextValue: UserContextType = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <Outlet />
    </UserContext.Provider>
  );
};
