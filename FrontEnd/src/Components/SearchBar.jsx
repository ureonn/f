import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("shop")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className=" text-center  pt-14 bg-[url(PI.jpeg)]">
      <div className="inline-flex items-center justify-center border-2 border-r-gray-400 px-2 py-1 mx-4 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="Search on hyperon"
        />
        <button className="font-medium">Search</button>
      </div>
      <p
        onClick={() => setShowSearch(false)}
        className="inline cursor-pointer font-mono"
      >
        cancel
      </p>
    </div>
  ) : null;
};

export default SearchBar;
