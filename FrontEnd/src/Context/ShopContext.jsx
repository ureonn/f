import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const addToWishlist = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const wishlistData = { ...wishlistItems };
    if (!wishlistData[itemId]) {
      wishlistData[itemId] = {};
    }

    wishlistData[itemId][size] = (wishlistData[itemId][size] || 0) + 1;
    setWishlistItems(wishlistData);
  };

  const getWishlistCount = () => {
    return Object.entries(wishlistItems).reduce((count, [itemId, sizes]) => {
      return (
        count + Object.values(sizes).reduce((total, qty) => total + qty, 0)
      );
    }, 0);
  };

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = { ...cartItems };
    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.entries(cartItems).reduce((count, [itemId, sizes]) => {
      return (
        count + Object.values(sizes).reduce((total, qty) => total + qty, 0)
      );
    }, 0);
  };

  const updateCartQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      toast.error("items not found");
      return;
    }

    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    // Calculate total price
    let total = 0;
    for (const item in cartData) {
      for (const size in cartData[item]) {
        const product = products.find((p) => p._id === item);
        if (product) {
          total += product.price * cartData[item][size];
        }
      }
    }

    total += delivery_fee;

    setCartItems(cartData);
    setTotalPrice(total);
  };

  const updateWishlistQuantity = async (itemId, size, quantity) => {
    let wishlistDataClone = structuredClone(wishlistItems);
    if (quantity <= 0) {
      delete wishlistDataClone[itemId][size];
      if (Object.keys(wishlistDataClone[itemId]).length === 0) {
        delete wishlistDataClone[itemId];
      }
    } else {
      wishlistDataClone[itemId][size] = quantity;
    }
    setWishlistItems(wishlistDataClone);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    wishlistItems,
    addToWishlist,
    getWishlistCount,
    updateCartQuantity,
    updateWishlistQuantity,
    totalPrice,
    setTotalPrice,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
