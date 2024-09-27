"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
// import { EmailIcon } from "@/icons";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { apiUrl } from "@/utils/util";
import axios from "axios";

const Otp = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);
  const [otpValue, setOtpValue] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const handleResendOtp = () => {
    setCountDown(30);
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      try {
        const res = await axios.post(`${apiUrl}/api/v1/auth/verify-otp`, {
          email,
        });
        if (res.status === 200) {
          toast.success("Нууц үг сэргээх холбоосыг таны и-мэйл хаягт илгээлээ");

          router.push("/login");
        }
      } catch (error) {
        toast.error("И-мэйл илгээхэд алдаа гарлаа");
      }
    }
  };
  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      {/* <EmailIcon /> */}
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">{`"${email}"`}</p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white">
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
  );
};

export default Otp;
