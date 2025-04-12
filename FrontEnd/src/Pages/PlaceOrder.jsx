import React, { useState } from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="  justify-center flex    bg-[url(PI.jpeg)] bg-center bg-cover pt-14 px-[13vh] gap-4 min-h-[60vh] md:min-h-[70vh] ">
      {/* Left Side */}
      <div>
        <div className="flex flex-col w-full sm:max-w-[480px] gap-4">
          <div className="text-xl sm:text-2xl mt-2">
            <Title text1={"Your"} text2={"Details"} />
            <p className="text-sm font-medium text-gray-600">
              carry on with your orders by providing your details
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="border border-r-gray-300 rounded outline-none shadow-md py-1.5 px-3.5 w-full "
              type="text"
              placeholder="First name"
            />
            <input
              className="border outline-none shadow-md border-r-gray-300 rounded py-1.5 px-3.5 w-full "
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            className="border outline-none shadow-md border-r-gray-300 rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Email address"
          />
          <input
            className="border border-r-gray-300 outline-none shadow-md rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              className="border border-r-gray-300 rounded outline-none shadow-md py-1.5 px-3.5 w-full "
              type="text"
              placeholder="City"
            />
            <input
              className="border border-r-gray-300 outline-none shadow-md rounded py-1.5 px-3.5 w-full "
              type="text"
              placeholder="State"
            />
          </div>
          <div className="flex gap-3">
            <input
              className="border border-r-gray-300 outline-none shadow-md rounded py-1.5 px-3.5 w-full "
              type="number"
              placeholder="Zipcode"
            />
            <input
              className="border border-r-gray-300 outline-none shadow-md rounded py-1.5 px-3.5 w-full "
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border border-r-gray-300 outline-none shadow-md rounded py-1.5 px-3.5 w-full "
            type="number"
            placeholder="Phone"
          />
        </div>
        <div className="mt-12 ">
          <Title text1={"Payment"} text2={"Method"} />
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("paystack")}
              className="flex items-center gap-3 border bg-white p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-black  rounded-full ${
                  method === "paystack" ? "bg-gray-700" : "bg-white"
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.paystack} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border bg-white p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-black  rounded-full  ${
                  method === "cod" ? "bg-gray-700" : "bg-white"
                }`}
              ></p>
              <p className="font-bold ml-4 text-blue-950 text-xl">
                cash on delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
