import React from "react";
import { Images } from "../assets";

const Body = () => {
  return (
    <div className="flex">
      <div className="flex px-9 py-6 text-white w-[2/3]">
        <div className="h-[300px] w-2 border-solid bg-sky-600 rounded"></div>
        <div className="pl-3 pr-24 space-y-7">
          <p className="mt-4 text-4xl text-amber-200">
            I love to build amazing web apps.
          </p>
          <p className="text-2xl">
            I am a positive, enthusiastic and competent Web Developer who, over
            the months, has built up a diverse range of skills, qualities and
            attributes.
          </p>
          <p className="text-4xl text-blue-400">
            A Passoniate Front-End Developer
          </p>
        </div>
      </div>
      <div className="w-[1/3]">
        <img src={Images.code} alt="" />
      </div>
    </div>
  );
};

export default Body;
