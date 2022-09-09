import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-col">
      <p className="text-wejahni-blue mb-1">Rechercher un etablissement</p>
      <div className=" flex relative container rounded-md bg-wejahni-blue xs:w-[500px] lg:w-[745px] h-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute h-5 w-5 ml-3 mt-2 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div>
          <input
            className="bg-transparent focus:outline-none w-[100%] h-9 ml-14 lg:text-lg xs:text-xs xs:font-medium text-wejahni-gray font-semibold font-Inter"
            placeholder=""
          />
        </div>
        <view
          className="lg:ml-[40%]"
          style={{
            borderLeftWidth: 1,
            borderLeftColor: "gray",
          }}
        ></view>

        <DropDownMenu />
      </div>
    </div>
  );
}

function DropDownMenu() {
  return (
    <div className="absolute lg:ml-[80%] xs:ml-[70%]">
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-400 bg-transparent font-medium rounded-lg  lg:text-xs xs:text-[5px]  lg:px-4 lg:py-2.5 xs:pt-2 text-center inline-flex items-center"
        type="button"
      >
        Selon Nom
        <svg
          class="lg:ml-8 xs:ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  );
}
