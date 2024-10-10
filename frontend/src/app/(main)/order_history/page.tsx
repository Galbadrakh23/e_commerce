import React from "react";

const OrderHistory = () => {
  return (
    <div className="w-3/4 h-[calc(100vh-290px)] m-auto pt-16">
      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="py-2 pl-4 pr-30 rounded-full bg-[#F1F1F1]">
            Хэрэглэгчийн хэсэг
          </h3>
          <h3 className="py-2 pl-4 pr-28 rounded-full bg-[#F1F1F1]">
            Захиалгын түүх
          </h3>
        </div>
        <div className="flex flex-col w-2/3">
          <h1 className="text-xl font-bold mb-4">Захиалгын түүх</h1>
          <span className="border-b w-full "></span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
