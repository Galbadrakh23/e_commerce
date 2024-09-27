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
      <div className="bg-[#F7F7F8] flex items-center justify-center min-h-screen">
        <div className="p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Нэвтрэх</h2>

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

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2"></label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Нууц үг"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>

          <button
            onClick={logIn}
            className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200"
          >
            Нэвтрэх
          </button>
          <div className="mt-4 text-center">
            <a
              href="forget/email"
              className="text-sm text-gray-400 hover:underline underline"
            >
              Нууц үг мартсан
            </a>
          </div>
          <Link href="/signup" className="flex justify-center items-center">
            <button className="w-full border border-blue-600 rounded-full py-2 text-[#2563EB] mt-6 text-center">
              Бүртгүүлэх
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
