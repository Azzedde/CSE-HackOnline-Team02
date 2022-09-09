import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../images/right-arrow-svgrepo-com.svg";
export default function HelpMeButton() {
  return (
    <div className="flex flex-row items-center  gap-3 bg-wejahni-cyan  hover:bg-wejahni-purple duration-500 py-1 px-3  rounded-lg">
      <Link to={"/"}>
        <button
          id="dropdownButton"
          className="text-white  font-medium  text-lg font-Inter "
          type="button"
        >
          M'aider a choisir
        </button>
      </Link>

      <Arrow className="w-4 " />
    </div>
  );
}
