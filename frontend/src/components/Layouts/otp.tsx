"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import Loader from "@/components/Layouts/loader";
import NewPass from "@/app/(auth)/forget/newpass/page";

const Otp = ({ email }: { email: string }) => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(60);
  const [otpValue, setOtpValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const handleResendOtp = () => {
    setCountDown(60);
  };

  const handleSendOtp = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/v1/auth/forget-password`, {
        email,
      });
      if (res.status === 200) {
        toast.success("И-мэйл амжилттай илгээлээ");
      }
    } catch (error) {
      toast.error("И-мэйл буруу байна");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      setIsLoading(true);
      try {
        const res = await axios.post(`${apiUrl}/api/v1/auth/verify-otp`, {
          email,
          otpValue: value,
        });
        console.log("email", email);
        if (res.status === 200) {
          toast.success("Нууц үг сэргээх холбоосыг таны и-мэйл хаягт илгээлээ");
          router.push("/login");
        }
      } catch (error) {
        toast.error("Нууц үг сэргээх и-мэйл илгээхэд алдаа гарлаа");
        console.log("Алдаа", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="h-[calc(100vh-350px)]">
      {step === 1 && (
        <div className="flex flex-col items-center mt-24">
          <img src="/assets/email.svg" alt="" />
          <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
          <p className="mt-2 mb-6 text-text-primary">{`"${email}"хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}</p>
          <div className="flex flex-col gap-4 text-sm">
            <InputOTP
              maxLength={4}
              value={otpValue}
              onChange={handleConfirmOtp}
            >
              <InputOTPGroup className="bg-[#FFFFFF]">
                <InputOTPSlot className="w-14 h-14" index={0} />
                <InputOTPSlot className="w-14 h-14" index={1} />
                <InputOTPSlot className="w-14 h-14" index={2} />
                <InputOTPSlot className="w-14 h-14" index={3} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
              onClick={handleResendOtp}
              variant="link"
            >
              Дахин илгээх ({countDown})
            </Button>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Otp;
