import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, addToWishlist } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      console.log("Product data set:", product);
    } else {
      console.warn("Product not found for ID:", productId);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className=" transition-opacity ease-in duration-500 opacity-100 bg-[url(PI.jpeg)] bg-cover bg-center  p-10 pt-16 h-full">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="w-full sm:w-[80%] ">
            <img className="w-full -auto" src={image} alt="" />
          </div>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[12.7%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover"
              />
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-gray-700 text-xl font-bold">
            {productData.name}
          </h1>
          <p className="mt-1 font-medium ">
            {currency}
            {productData.price}
          </p>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border  text-xs font-medium py-2 px-4 ${
                    item === size ? "border-none bg-black text-white " : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex  gap-4">
            <button
              onClick={() => addToWishlist(productData._id, size)}
              className="bg-black active:bg-gray-700 text-white font-medium text-xs px-5 py-2"
            >
              Add to Wishlist
            </button>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-black active:bg-gray-700 text-white font-medium text-xs px-5 py-2"
            >
              Add to Cart
            </button>
          </div>
          <hr className="mt-8 sm:w-4/5" />

          <p className="sm:w-4/5 w-full font-medium mt-4 text-gray-700">
            {productData.description}{" "}
          </p>

          <div className="font-mono">
            <p>• 100% Original product.</p>
            <p>• Cash on delivery is available on this product.</p>
            <p>• Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Display Related Product */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
