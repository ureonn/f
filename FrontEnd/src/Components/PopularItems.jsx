import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const PopularItems = () => {
  const { products } = useContext(ShopContext);
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    setPopularItems(products.slice(0, 6));
  }, []);

  return (
    <div className="py-10 bg-[url(PI.jpeg)] px-[5vh] items-center text-center flex flex-col">
      <div className="items-center py-8 text-3xl">
        <Title text1={"popular"} text2={"items"} />
        <p className="py-2">-------</p>
        <p className=" m-auto text-xs text-center  sm:text-sm md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          necessitatibus praesentium possimus.
        </p>
      </div>
      {/* Rendering Product */}
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
        {popularItems.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
