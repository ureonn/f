import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateCartQuantity,
    delivery_fee,
    navigate,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const tempData = [];
    let totalCartPrice = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
          const productData = products.find((product) => product._id === items);
          if (productData) {
            totalCartPrice += cartItems[items][item] * productData.price;
          }
        }
      }
    }

    totalCartPrice += delivery_fee;
    setCartData(tempData);
    setTotalPrice(totalCartPrice);
  }, [cartItems, products, delivery_fee]);

  const handleQuantityChange = (e, _id, size) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity > 0 && !isNaN(newQuantity)) {
      updateCartQuantity(_id, size, newQuantity);
    } else {
      toast.error("Please enter a valid quantity");
      updateCartQuantity(_id, size, 1);
    }
  };

  const handleIncrement = (_id, size, currentQuantity) => {
    updateCartQuantity(_id, size, currentQuantity + 1); // Increment by 1
  };

  const handleDecrement = (_id, size, currentQuantity) => {
    if (currentQuantity > 1) {
      updateCartQuantity(_id, size, currentQuantity - 1); // Decrement by 1 but not below 1
    }
  };

  const handleDeleteItem = (_id, size) => {
    updateCartQuantity(_id, size, 0); // Set the quantity to 0 to remove the item
  };

  return (
    <div className="h-full bg-[url(PI.jpeg)] bg-center bg-cover pt-14 px-[6vh] pb-20">
      <div className="text-2xl">
        <Title text1={"Shopping"} text2={"Cart"} />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) {
            return <div key={index}>Product not found</div>;
          }
          const itemTotalPrice = item.quantity * productData.price; // Calculate individual item total price
          return (
            <div
              key={index}
              className="py-4 hover:scale-x-105 justify-between shadow-md rounded-xl transition ease-in-out px-4   bg-white md:flex  gap-4 grid items-center"
            >
              <div className="flex items-center gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div className="items-center">
                  <p className="font-bold text-black">{productData.name} </p>
                  <div className="flex items-center gap-4">
                    <p className="font-medium">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="font-medium"> {item.size} </p>
                  </div>
                </div>
              </div>

              {/* Quantity input with Increment/Decrement buttons */}
              <div className="flex items-center gap-6 ">
                <button
                  onClick={() =>
                    handleDecrement(
                      item._id,
                      item.size,
                      item.quantity,
                      productData.price
                    )
                  }
                  className="w-6 h-6 bg-gray-300 text-black rounded-full flex justify-center items-center"
                >
                  -
                </button>

                <input
                  onChange={(e) => handleQuantityChange(e, item._id, item.size)}
                  value={item.quantity} // Controlled input
                  className="max-w-9 font-bold bg-black rounded text-white text-sm outline-none sm:max-w-20 px-1 sm:px-2 py-1 mx-2"
                  type="number"
                  min={1}
                />

                <button
                  onClick={() =>
                    handleIncrement(
                      item._id,
                      item.size,
                      item.quantity,
                      productData.price
                    )
                  }
                  className="w-6 h-6 bg-gray-300 text-black rounded-full flex justify-center items-center"
                >
                  +
                </button>
                <div className="flex flex-col items-center">
                  <p className="font-medium text-lg">
                    {currency}
                    {itemTotalPrice.toFixed(2)} {/* Show item total price */}
                  </p>
                </div>
                <img
                  onClick={() => handleDeleteItem(item._id, item.size)}
                  className="w-3 mr-4 sm:w-4 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Total Price Section */}
      {cartData.length > 0 && (
        <div className="mt-6 flex justify-end">
          <div className="bg-white shadow-md p-4 rounded-xl text-right text-sm font-semibold w-full max-w-md">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>
                {currency}
                {(totalPrice - delivery_fee).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Fee:</span>
              <span>
                {currency}
                {delivery_fee.toFixed(2)}
              </span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-green-600">
                {currency}
                {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end w-full">
        <button
          onClick={() => navigate("/placeorder")}
          className="bg-black text-white active:bg-gray-700 text-sm my-4 px-8 py-3"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
