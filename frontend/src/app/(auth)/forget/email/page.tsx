"use client";

import axios from "axios";
import { apiUrl } from "@/utils/util";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import Otp from "@/components/Layouts/otp";
import Loader from "@/components/Layouts/loader";
import NewPass from "@/components/Layouts/newpass";

const Email = ({}) => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/forget-password`, {
        email,
      });
      if (res.status === 200) {
        setStep(step + 1);
        toast.success("И-мэйл амжилттай илгээлээ");
      }
    } catch (error) {
      toast.error("И-мэйл буруу байна");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      {step === 1 && !isLoading && (
        <div>
          <div className="flex items-start justify-center">
            <div className="max-w-md w-full">
              <h2 className="text-2xl font-semibold text-center mt-28">
                Нууц үг сэргээх
              </h2>

              <div className="mb-4 mt-10">
                <label className="block text-gray-700 text-sm font-medium mb-2"></label>
                <input
                  type="email"
                  id="email"
                  className="w-[334px] px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  placeholder="Имэйл хаяг оруулах"
                  onChange={handleEmail}
                />
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200"
                >
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && <Loader />}

      {step === 2 && (
        <>
          <Otp email={email} />
        </>
      )}
    </div>
  );
};

export default Email;
