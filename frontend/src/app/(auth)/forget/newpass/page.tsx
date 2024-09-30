"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const NewPass = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();

  const handleNewPassword = () => {
    if (!(password === repassword)) {
      console.log("Clicked not match");
      toast.error("Нууц үг хоорондоо таарахгүй байна.");
      return;
    }
    console.log("RT", params.get("resettoken"));
    console.log("Email", params.get("email"));
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      <div className="w-[320px] mt-24">
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Нууц үг сэргээх
        </h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="password"
            placeholder="Шинэ нууц үг"
            className="input-primary rounded-full border-[#E4E4E7] border bg-[#FFFFF] font-medium hover:border-blue-700 transition duration-200"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Шинэ нууц үг давтах"
            className="input-primary rounded-full border-[#E4E4E7] border bg-[#FFFFF] font-medium hover:border-blue-700 transition duration-200"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <ul className="list-disc pl-5 text-muted-foreground text-xs font-light leading-5 flex flex-col gap-0.5">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li className="text-[#E11D48]">Тэмдэгт орсон байх</li>
          </ul>
          <Button
            className="button bg-[#2563EB] text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-200"
            onClick={handleNewPassword}
          >
            Үүсгэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
