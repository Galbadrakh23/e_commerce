"use client";

import { UserContext } from "@/components/context/user-context";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log("user", user);

  return (
    <div className="w-3/4 h-[calc(100vh-290px)] m-auto pt-16 border">
      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="py-2 pl-4 pr-28 rounded-full bg-[#F1F1F1]">
            Хэрэглэгчийн хэсэг
          </h3>
          <h3 className="py-2 pl-4 pr-28 rounded-full bg-[#F1F1F1]">
            Захиалгын түүх
          </h3>
        </div>
        <div className="flex flex-col w-2/3">
          <h1 className="text-xl font-bold mb-4">Хэрэглэгчийн Хэсэг</h1>
          <span className="border-b w-full "></span>
          <h1>Овог : {user?.lastname} </h1>
          <input className="bg-[#F1F1F1] rounded-full" type="text" />
          <h1>Нэр: {user?.firstname} </h1>
          <input className="bg-[#F1F1F1] rounded-full" type="text" />
          <h1>Утасны дугаар: </h1>
          <input className="bg-[#F1F1F1] rounded-full" type="text" />
          <h1>Имэйл хаяг: {user?.email} </h1>
          <input className="bg-[#F1F1F1] rounded-full" type="text" />
          <h1>Хаяг:</h1>
          <input className="bg-[#F1F1F1] w-full h-60 rounded-xl" type="text" />
        </div>
      </div>
    </div>
  );
}
