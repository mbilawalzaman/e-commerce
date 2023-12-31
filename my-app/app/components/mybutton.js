import React from "react";

const MyBtn = ({ textContent }) => {
  return (
    <div
      className="bg-pink-500 cursor-pointer px-3 text-white font-bold text-center hover:shadow-lg shadow-pink-500 hover:ring-pink-500 hover:ring-offset-2 hover:ring-2 rounded-full p-2 animateBtn"
    >
      {textContent}
    </div>
  );
};

export default MyBtn;