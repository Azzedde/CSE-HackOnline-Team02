import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// import Logo from '../images/Wejahni-Logo.svg'
import Logo from "../images/Logo.png";

const Nav = () => {
  let Links = [
    { name: "ACCEUIL", link: "/" },
    { name: "DÉCOUVREZ-NOUS", link: "/about" },
    { name: "UNIVERSITÉS", link: "/universities" },
    { name: "CLUBS", link: "/clubs" },
    // { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-lg shadow-wejahni-cyan w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <Link to={"/"}>
          <img className="w-[130px] h-12 pb-1" src={Logo} />
        </Link>

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
            <li key={link.name} className="md:mx-16 text-base md:my-0 my-3">
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
