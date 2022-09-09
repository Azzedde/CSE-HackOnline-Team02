import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={`${props.link}`}>
      <button
        className="bg-wejahni-cyan text-white font-[Poppins] py-2 px-9 rounded-3xl  hover:bg-wejahni-purple 
    duration-500"
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
