import React from "react";
import { FaStar } from "react-icons/fa";
import { Separator } from "../ui/separator";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const Comments = () => {
  const value = 3.5;
  return (
    <div className="">
      <div className="w-[510px] mt-5">
        <div className="flex gap-2 mb-1">
          <span className="text-sm font-semibold">Saraa</span>
          <span className="flex">
            {/* <FaStar className="text-[#FDE047] " />
            <FaStar className="text-[#FDE047] " /> */}
            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                className="text-[#FDE047]"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0 }} fontSize="inherit" />
                }
              />
              {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
            </Box>
          </span>
        </div>
        <p className="text-sm text-[#71717A] mb-5">
          Ваав материал ёстой гоё байна 😍
        </p>
        <Separator className=" border-dashed" />
      </div>
      <div className="w-[510px] mt-5">
        <div className="flex gap-2 mb-1">
          <span className="text-sm font-semibold">Saraa</span>
          <span className="flex">
            {/* <FaStar className="text-[#FDE047] " />
            <FaStar className="text-[#FDE047] " /> */}
            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                className="text-[#FDE047]"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0 }} fontSize="inherit" />
                }
              />
            </Box>
          </span>
        </div>
        <p className="text-sm text-[#71717A] mb-5">
          Ваав материал ёстой гоё байна 😍
        </p>
        <Separator className=" border-dashed" />
      </div>
    </div>
  );
};

export default Comments;
