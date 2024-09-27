"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import Otp from "@/components/Layouts/otp";

const Email = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/forget-password`, {
        email,
      });
      if (res.status === 200) {
        setStep(step + 1);
        toast.success("И-мэйл илгээлээ");
      }
    } catch (error) {
      toast.error("И-мэйл буруу байна");
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      {step === 1 && (
        <div>
          <div className="bg-[#F7F7F8] flex items-start justify-center">
            <div className="p-8 max-w-md w-full">
              <h2 className="text-2xl font-semibold text-center mt-64">
                Нууц үг сэргээх
              </h2>

              <div className="mb-4 mt-10">
                <label className="block text-gray-700 text-sm font-medium mb-2"></label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Имэйл хаяг оруулах"
                  onChange={handleEmail}
                />
              </div>
              <div className="mt-4 text-center">
                <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200">
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <>
          <Otp />
        </>
      )}
    </div>
  );
};

export default Email;
