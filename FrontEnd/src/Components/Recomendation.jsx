import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItems from "./ProductItems";
const Recomendation = () => {
  const { products } = useContext(ShopContext);
  const [recomendation, setRecomendation] = useState([]);

  useEffect(() => {
    const recomendationProduct = products.filter((item) => item.recomendation);
    setRecomendation(recomendationProduct.slice(0, 10));
  }, []);

  return (
    <div className="bg-[url(PI.jpeg)] px-[5vh] py-10">
      <div className="flex flex-col text-start text-3xl py-8">
        <Title text1={"explore our"} text2={"recomendations"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
        {recomendation.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Recomendation;
