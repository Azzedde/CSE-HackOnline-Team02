import React from "react";
import StatsSection from "../components/StatsSection";
import Logo from "../images/Logo.png";

export default function About() {
  return (
    <>
      <div className=" pt-[100px] flex  flex-col ">
        <div className=" flex flex-col items-center gap-7  ">
          <div className="flex flex-row items-baseline gap-5">
            <h1 className="lg:text-4xl md:text-sm font-Inter text-wejahni-blue font-semibold underline decoration-wejahni-cyan">
              CONCERNANT
            </h1>
            <img
              className="md:w-64 h-[80px]  xs:w-56 "
              src={Logo}
              alt="Website-Logo"
            />
          </div>
          <div>
            <p className="py-12 px-12 text-center text-lg font-Inter font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euixsod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euixsod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euixsod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>


        <StatsSection/>
      </div>
    </>
  );
}
