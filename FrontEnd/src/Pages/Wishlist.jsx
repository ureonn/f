import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const Wishlist = () => {
  const { products, currency, wishlistItems, updateWishlistQuantity } =
    useContext(ShopContext);
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in wishlistItems) {
      for (const item in wishlistItems[items]) {
        if (wishlistItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: wishlistItems[items][item],
          });
        }
      }
    }

    setWishlistData(tempData);
  }, [wishlistItems]);

  return (
    <div className="h-full bg-[url(PI.jpeg)] bg-center bg-cover pt-14 px-[13vh] pb-20">
      <div className="text-2xl">
        <Title text1={"Shopping"} text2={"Wishlist"} />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {wishlistData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="  py-4  hover:scale-x-105 rounded-xl  transition ease-in-out p-9 gap-4  bg-gray-50    flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div className="items-center">
                  <p className="font-bold text-black">{productData.name} </p>
                  <div className="flex items-center gap-4 ">
                    <p className="font-medium">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="font-medium"> {item.size} </p>
                  </div>
                </div>
              </div>

              <img
                onClick={() => updateWishlistQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
