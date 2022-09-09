import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  let Links = [
    { name: "ACCEUIL", link: "/" },
    { name: "SUR-NOUS", link: "/about" },
    { name: "UNIVERSITÉS", link: "/" },
    { name: "CLUBS", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-lg shadow-wejahni-cyan w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-transparent"
        >
          WEJAHNI
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:mx-16 text-xl md:my-0 my-7">
              
              <Link
                to={link.link}
                className="hover:decoration-wejahni-cyan hover:underline hover:decoration-double hover:text-wejahni-purple  text-wejahni-blue duration-500 font-Inter font-[400] "
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button link="/login" text="SE CONNECTER" />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
