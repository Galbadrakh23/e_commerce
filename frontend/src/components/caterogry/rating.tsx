import React from "react";
import Comments from "./comment";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingSection = () => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className="">
      <Comments />
      <div className="mt-6">
        <Card className="w-[510px] p-6 bg-[#F4F4F5]">
          <div>
            <span className="text-sm font-semibold mb-4">Одоор үнэлэх:</span>
            {/* <FaStar className="text-[#FDE047] text-xl" /> */}
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                className="text-[#FDE047]"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
          <div className="my-6">
            <span className="text-sm font-semibold">Сэтгэгдэл үлдээх:</span>
            <Textarea className="mt-2" placeholder="Энд бичнэ үү" />
          </div>

          <Button className="bg-[#2563EB]" size="sm">
            Үнэлэх
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default RatingSection;
