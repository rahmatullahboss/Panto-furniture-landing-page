import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 cursor-pointer hover:bg-amber-600 transition w-[64px] h-[64px] flex justify-center items-center"
      onClick={onClick}
    >
      <FaArrowRight className="text-black text-lg" />
    </div>
  );
};

export default NextArrow;