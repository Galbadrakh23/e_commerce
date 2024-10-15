import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const sizeList = ["XS", "S", "M", "XL", "2XL", "3XL"];

export const SizeLabel = () => {
  return (
    <aside className="font-bold">
      <h6 className="mb-4">Хэмжээ</h6>
      <div className="flex flex-col gap-3">
        {sizeList?.map((size) => (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-[#09090B] dark:text-white font-medium"
            >
              {size}
            </Label>
          </div>
        ))}

        {/* <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">S</Label>
        </div> */}
      </div>
    </aside>
  );
};
