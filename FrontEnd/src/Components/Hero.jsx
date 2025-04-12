import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[url(Hero.jpg)] bg-center bg-cover h-screen justify-center flex  ">
      <div className=" h-screen justify-center flex flex-col gap-3">
        <h1 className="text-start text-md lg:text-xl font-medium text-gray-100 lg:tracking-[2rem] tracking-[1rem] ">
          from $69
        </h1>
        <p className="md:text-5xl lg:text-7xl font-bold flex text-white text-4xl lg:tracking-[2rem] tracking-[1rem]">
          <span className="hidden lg:flex ">hyperon</span> collections
        </p>
        <Link
          to="/shop"
          className="text-gray-100 font-medium flex flex-col  text-xm  "
        >
          <p className="tracking-[5px] text-[18px] ">shop now</p>
          <hr className="w-6 border-none h-[2px]  bg-white " />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
