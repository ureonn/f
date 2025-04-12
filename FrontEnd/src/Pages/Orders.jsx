import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="  pt-16 px-[5vh] md:px-[16vh] bg-[url(PI.jpeg)] bg-center bg-cover    h-full">
      <div className="text-2xl">
        <Title text1={"Your"} text2={"Orders"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name} </p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-700">25, Jul,2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-600"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border bg-black first: px-4 py-2 text-white text-sm font-medium rounded-sm">
                Track Orders
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
