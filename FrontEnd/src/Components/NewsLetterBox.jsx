import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-[url(su.jpeg)] bg-center h-[70vh] gap-4 flex items-center justify-center  bg-cover">
      <p className="text-white text-3xl font-medium">subscribe</p>
      <form onSubmit={onSubmitHandler} className="flex text-white">
        <input
          type="email"
          className="bg-transparent border-2 border-gray-300 outline-none w-80"
          required
        />
        <button type="submit" className="bg-black px-6 py-0.5">
          subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
