import React from "react";
import { Images } from "../assets";

const Navbar = () => {
  return (
    <div className="flex justify-between px-12 bg-slate-700 sticky top-0">
      <div className="p-6">
        <img src={Images.profile} alt="" className="rounded-full h-32" />
      </div>
      <div className="flex justify-center items-center text-2xl gap-x-8 text-white font-serif">
        <span className=" cursor-pointer">Home</span>
        <span className=" cursor-pointer">Project</span>
        <span className=" cursor-pointer">Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
