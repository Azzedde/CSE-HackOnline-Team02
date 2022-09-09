import React from "react";
import chapeau from "../images/chapeau.svg";
import school from "../images/School.svg";
import institut from "../images/institut.svg";
// import ecole from ''
export default function StatsSection() {
  return (
    <div className="relative w-full mt-36 bg-wejahni-blue py-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white underline decoration-wejahni-cyan">
            Approuvé par les étudiants de toute l'Algérie
          </h2>
          <p className="text-3xl py-6 text-wejahni-gray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 px-2 text-center">
          <div className=" border-wejahni-purple border  py-8 rounded-xl shadow-xl">
            <img className="ml-[135px] mb-3" src={school} />
            <p className="text-6xl font-bold text-indigo-600">50</p>
            <p className="text-3xl text-wejahni-cyan  mt-2">Écoles</p>
          </div>
          <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
            <img className="ml-[145px] mb-3" src={institut} />
            <p className="text-6xl font-bold text-indigo-600">23</p>
            <p className="text-3xl text-wejahni-cyan  mt-2">Instituts</p>
          </div>
          <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
            <img className="ml-[140px] mb-8" src={chapeau} />
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-3xl text-wejahni-cyan  mt-2">Satisfactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
