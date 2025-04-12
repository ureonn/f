import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col mb-3">
      <p className="text-gray-700 text-xl font-bold ">
        {text1} <span>{text2}</span>
      </p>
    </div>
  );
};

export default Title;
