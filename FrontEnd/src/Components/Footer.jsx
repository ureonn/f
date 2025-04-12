import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around pt-9 px-[3vh] md:px-[10vh] items-center bg-[url(PI.jpeg)]">
      <div className="flex flex-col space-y-4 sm:grid grid-cols-[3fr_1fr_1fr] lg:gap-14 py-10   text-xm">
        <div className="space-y-4">
          <Link
            to="/"
            className="text-xl font-bold bangers-regular tracking-wider bg-white text-gray-400 text-center px-2 "
          >
            hyperon
          </Link>
          <p className="text-gray-600 w-full md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            modi dolore alias velit natus!
          </p>
        </div>
        <div className="flex items-center gap-14 text-gray-700">
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
          <Link to="/blog">blog</Link>
          <a href="">www.hyperon.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
