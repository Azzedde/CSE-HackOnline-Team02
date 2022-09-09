import React from "react";

export default function Filter() {
  return (
    <div className="flex flex-col">
      <p className="text-wejahni-blue mt-[1px] mb-1">Trier par</p>
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-400 bg-wejahni-blue font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
        type="button"
      >
        Tous
        <svg
          class="ml-32 w-4 h-4"
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
