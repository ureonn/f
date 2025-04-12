import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, getWishlistCount } =
    useContext(ShopContext);
  return (
    <div className="flex justify-between items-center px-3 gap-2 sm:px-[3vw] py-4 bg-transparent fixed top-0 left-0 right-0 z-40  ">
      {/* Navv rigt side */}
      <div className="flex items-start gap-14">
        {/* Nav Logo */}
        <Link
          to="/"
          className="text-xl font-bold bangers-regular tracking-wider bg-white text-gray-400 text-center px-2 "
        >
          hyperon
        </Link>
        <ul className="hidden lg:flex gap-6 ">
          <NavLink
            to="/"
            className="flex flex-col items-center  text-xm font-medium text-white"
          >
            <p>home</p>
            <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/shop"
            className="flex flex-col items-center  text-xm font-medium text-white"
          >
            <p>shop</p>
            <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/blog"
            className="flex flex-col items-center text-xm font-medium text-white "
          >
            <p>blog</p>
            <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/about"
            className="flex flex-col items-center text-xm font-medium text-white"
          >
            <p>about</p>
            <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
      {/* ----------------------------- */}
      {/* Left Side */}
      <div className="flex gap-6">
        <h1
          onClick={() => setShowSearch(true)}
          className="relative text-xm font-medium text-white flex gap-1 cursor-pointer"
        >
          search
        </h1>
        <Link
          to="/wishList"
          className="relative text-xm font-medium text-white  flex gap-1"
        >
          <p>wishList</p>
          <p>({getWishlistCount()})</p>
        </Link>

        <Link
          to="/cart"
          className="relative   text-xm font-medium text-white flex gap-1"
        >
          <p>cart</p>
          <p>({getCartCount()})</p>
        </Link>
        <div className="group relative">
          <p className="cursor-pointer  text-xm font-medium text-white">
            profile
          </p>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className=" w-32 p-2 font-medium text-[13px] rounded-3xl bg-[url(Hero.jpg)] bg-cover text-white text-center">
              <p className="cursor-pointer hover:text-gray-300">My Profile</p>
              <p className="cursor-pointer hover:text-gray-300">Orders</p>
              <p className="cursor-pointer hover:text-gray-300">Logout</p>
            </div>
          </div>
        </div>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="h-4 cursor-pointer lg:hidden"
          alt=""
        />
      </div>
      {/* Side Bar Menu for small screen */}
      <div
        className={`absolute  top-0 right-0 bottom-0 overflow-hidden bg-white h-[100vh] transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="m-4 ">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer flex items-center gap-1"
          >
            <img src={assets.dropdown_icon} className="rotate-180 h-4" alt="" />
            <p className="font-medium text-gray-700">back</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="font-medium text-gray-600"
            >
              home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/shop"
              className="font-medium text-gray-600"
            >
              shop
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/blog"
              className="font-medium text-gray-600"
            >
              blog
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="font-medium text-gray-600"
            >
              about
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
