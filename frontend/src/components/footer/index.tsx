import React from "react";
import { Phone, Mail, Copyright } from "lucide-react";
import { PiFacebookLogoFill } from "react-icons/pi";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-black h-[282px] pt-16">
        <div className="mx-[200px]">
          <div className="flex items-center justify-between">
            <div className="w-10">
              <img src="/assets/Vector.svg" alt="" />
            </div>
            <div className="flex gap-10">
              <div className="text-[#FFFFFF] flex gap-2 items-center">
                <span className="rounded-full w-10 h-10 border border-[#FFFFFF] border-opacity-30 flex justify-center items-center">
                  <Phone size={18} />
                </span>
                (976) 7007-1234
              </div>
              <div className="text-[#FFFFFF] flex gap-2 items-center">
                <span className="rounded-full w-10 h-10 border border-[#FFFFFF] border-opacity-30 flex justify-center items-center">
                  <Mail size={18} />
                </span>
                contact@ecommerce.mn
              </div>
            </div>
          </div>
          <div className="w-full bg-white border-b mx-auto mt-[43px] opacity-20"></div>
          <div className="mt-[43px] flex justify-between">
            <span className="text-[#FFFFFF] flex items-center gap-2 ">
              <Copyright size={14} />
              2024 Ecommerce MN
            </span>
            <div className="flex gap-4 text-[#FFFFFF]">
              <PiFacebookLogoFill />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
