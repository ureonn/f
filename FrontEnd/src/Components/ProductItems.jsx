import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-800  cursor-pointer flex flex-col items-center"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 rounded-xl  transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="text-xm font-medium py-3">{name}</p>
      <p className="bg-black px-2 py-1 font-medium text-white text-[14px] ">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItems;
