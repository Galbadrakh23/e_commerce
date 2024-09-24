"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "sonner";

const Login = () => {
  console.log("API_URL", apiUrl);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 2000)
      );

    try {
      const response = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        toast.promise(promise, {
          loading: "Loading...",
          success: () => {
            return ` Login success`;
          },
          error: "Error",
        });
        router.push("/profile");
      }
    } catch (error) {
      console.error("Нэвтрэх алдаа гарлаа:", error);
      toast.error("Нэвтрэх алдаа");
    }
  };

  return (
    <div>
      <div className="bg-[#F7F7F8] flex items-start justify-center min-h-screen">
        <div className="p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mt-64">
            Нууц үг сэргээх
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2"></label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Имэйл хаяг"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-gray-400 hover:underline underline"
            >
              Нууц үг мартсан
            </a>
          </div>
          <Link
            href="/signup"
            className="flex justify-center items-center"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
