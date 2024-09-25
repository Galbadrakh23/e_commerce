"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { IUser, UserContextType } from "@/context/interface";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  user: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
  },
  token: "",
  setUser: () => {},
  setToken: () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [refetch, setRefetch] = useState(false);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser>({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  // const fetchUserData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(`${apiUrl}/api/v1/auth/user`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (response.status === 201) {
  //       const { user } = response.data;
  //       console.log("USER", user);
  //       setUser(user);
  //       setRefetch(!refetch);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  useEffect(() => {
    // fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
