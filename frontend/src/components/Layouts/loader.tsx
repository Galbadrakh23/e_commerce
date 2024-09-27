import React from "react";
import css from "@/app/styles/loader.module.css";

const Loader = () => {
  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-64">
      <div className={css.loader}></div>
      <h4 className="mt-6">И-мэйл илгээгдэж байгаа тул түр хүлээнэ үү.</h4>
    </div>
  );
};

export default Loader;
