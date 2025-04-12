import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { GiTrousers } from "react-icons/gi";
import { GrRestroomMen } from "react-icons/gr";
import { GrRestroomWomen } from "react-icons/gr";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { PiHoodieDuotone } from "react-icons/pi";
import Title from "../Components/Title";
import ProductItems from "../Components/ProductItems";

const Shop = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showCategory, setShowCategory] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("related");

  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (value) => {
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const sortProduct = () => {
    let fpCopy = categoryProducts.slice();
    switch (sortType) {
      case "low-high":
        setCategoryProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setCategoryProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let filtered = products.slice();

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting inside filte
    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setCategoryProducts(filtered);
  };

  const clearAllFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSortType("related");
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch, sortType]);

  return (
    <div className="p-10 pt-14 flex flex-col sm:flex-row gap-2 sm:gap-10 bg-[url(PI.jpeg)] bg-cover   h-full ">
      <div className="min-w-60  ">
        <p
          className="my-2 text-xl font-medium text-gray-800 flex items-center cursor-pointer gap-2"
          onClick={() => setShowCategory(!showCategory)}
        >
          CATEGORIES
          <IoIosArrowForward
            className={`text-black sm:hidden ${
              showCategory ? "rotate-90" : ""
            }`}
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border pr-3 bg-gray-50 rounded-xl  pl-5 py-3 mt-6 ${
            showCategory ? "" : "hidden"
          } sm:block`}
        >
          {/* Filter Options */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border outline-none mb-3 w-full border-r-gray-900 text-sm  bg-[url(PI.jpeg)] rounded-xl"
          >
            <option className="text-xs" value="related">
              Sort by: Related
            </option>
            <option className="text-xs" value="low-high">
              Sort by: Low to High
            </option>
            <option className="text-xs" value="high-low">
              Sort by: High to Low
            </option>
          </select>
          <p className="mb-3  font-medium text-[15px] ">Wears</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                category.includes("Men") ? "text-gray-400" : "text-black"
              }`}
              onClick={() => toggleCategory("Men")}
            >
              <GrRestroomMen className="text-black" size={30} />
              Men
            </div>
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                category.includes("Women") ? "text-gray-400" : "text-black"
              }`}
              onClick={() => toggleCategory("Women")}
            >
              <GrRestroomWomen className="text-black" size={30} />
              Women
            </div>
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                category.includes("Intermediate")
                  ? "text-gray-400"
                  : "text-black"
              }`}
              onClick={() => toggleCategory("Intermediate")}
            >
              <FaChild className="text-black" size={23} />
              Intermediate
            </div>
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                category.includes("Babies") ? "text-gray-400" : "text-black"
              }`}
              onClick={() => toggleCategory("Babies")}
            >
              <MdChildFriendly className="text-black" size={24} />
              Babies
            </div>
          </div>
          {/* SubCategory Filters */}
          <div className="flex flex-col gap-2 mt-6 text-sm font-light text-gray-700">
            <h1 className="font-medium text-[15px] mb-3">Type</h1>

            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                subCategory.includes("Topwear") ? "text-gray-400" : "text-black"
              }`}
              onClick={() => toggleSubCategory("Topwear")}
            >
              <IoShirt className="text-black" size={24} />
              Topwear
            </div>
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                subCategory.includes("Bottomwear")
                  ? "text-gray-400"
                  : "text-black"
              }`}
              onClick={() => toggleSubCategory("Bottomwear")}
            >
              <GiTrousers className="text-black" size={24} />
              Bottomwear
            </div>
            <div
              className={`flex gap-2 items-center font-medium cursor-pointer ${
                subCategory.includes("Winterwear")
                  ? "text-gray-400"
                  : "text-black"
              }`}
              onClick={() => toggleSubCategory("Winterwear")}
            >
              <PiHoodieDuotone className="text-black" size={24} />
              Winterwear
            </div>
          </div>
          <button
            className="text-[12px] mt-4 font-mono border bg-black text-white px-6 rounded"
            onClick={clearAllFilters}
          >
            Clear All Filters
          </button>
        </div>
      </div>
      {/* Riĝht Side */}
      <div className="flex-1 mt-3">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"Our"} text2={"Catalogue"} />
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {categoryProducts.length === 0 ? (
            <p className="text-gray-600 col-span-full text-center text-xl font-medium">
              No products found.
            </p>
          ) : (
            categoryProducts.map((item, index) => (
              <ProductItems
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
