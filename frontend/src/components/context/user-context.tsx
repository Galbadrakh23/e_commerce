"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { IUser, UserContextType } from "@/interface";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    rePassword: "",
  },
  token: "",
  setUser: () => {},
  setToken: () => {},
  fetchUserData: () => {},
  refetch: false,
  setRefetch: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [refetch, setRefetch] = useState(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      // console.log("Token", token);
      const response = await axios.get(`${apiUrl}/api/v1/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        const { user } = response.data;
        setUser(user);
        setToken(token);
        setRefetch(!refetch);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("Logged User", user);

  useEffect(() => {
    fetchUserData();
  }, [token]);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        fetchUserData,
        refetch,
        setRefetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
