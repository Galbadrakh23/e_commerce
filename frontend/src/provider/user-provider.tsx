"use client";
import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

interface IUser {
  firstname: string;
  email: string;
}

interface IContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<IContext>({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/auth/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
