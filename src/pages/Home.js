import React from "react";
import Button from "../components/Button";
import Logo from "../images/Logo.png";
import HomePageShape from "../images/HomePageShape.svg";
export default function () {
  return (
    <div className="bg-white h-screen w-full pt-[100px] md:pl-40 ">
      <div className="flex md:flex-row md:gap-[350px] xs:flex-col xs:items-center xs:gap-9 ">
        <div className="flex flex-col gap-5 items-center ">
          <img className="md:w-96  xs:w-56 " src={Logo} alt="Website-Logo" />

          <h1 className="text-wejahni-cyan text-3xl font-bold  ">
            POUR UN MEILLEUR{" "}
            <span className="text-wejahni-purple"> AVENIR !  </span> 
          </h1>

          <p className=" md:w-80 xs:w-full  md:text-start xs:text-center text-wejahni-blue  md:text-md font-medium xs:px-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euixsod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>

          <Button text="VOIR PLUS" link="/about" />
        </div>

        <img
          className="  md:w-[700px] xs:w-96 md:h-[600px] md:pr-12"
          src={HomePageShape}
          alt="Wejahni-Image"
        />
      </div>
    </div>
  );
}
