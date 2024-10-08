"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "sonner";

const Signup = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;

    if (password !== repassword) {
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/api/v1/auth/signup`, {
        firstname,
        lastname,
        email,
        password,
      });
      toast.success("Sign up successfully");

      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Бүртгүүлэх алдаа", error);
      toast.error("Internal server error");
    }
  };

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="ыrounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Бүртгүүлэх
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2"></label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Нэр"
              value={userData.firstname}
              onChange={(e) =>
                setUserData({ ...userData, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2"></label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Овог"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2"></label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Имэйл хаяг"
              value={userData.email}
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
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
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
              value={userData.repassword}
              onChange={(e) =>
                setUserData({ ...userData, repassword: e.target.value })
              }
            />
          </div>
          <div className="mx-4 my-4 text-sm opacity-60">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх </li>
            <li>Тоо орсон байх</li>
            <li className="text-red-500">Тэмдэгт орсон байх</li>
          </div>

          <button
            onClick={signUp}
            className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200"
          >
            Үүсгэх
          </button>
          <Link href="/login">
            <button className="w-full mt-12 border border-blue-600 text-[#2563EB] py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200">
              Нэвтрэх
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
