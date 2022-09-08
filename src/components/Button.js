import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-wejahni-cyan text-white font-[Poppins] py-2 px-9 rounded-3xl  hover:bg-wejahni-purple 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
