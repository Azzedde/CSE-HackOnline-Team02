import React from 'react'
import chapeau from "../images/chapeau.svg";
import school from "../images/School.svg";
import institut from "../images/institut.svg";
export default function Features() {
  return (
<div>
<div className="relative w-full mt-36 bg-wejahni-blue py-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white underline decoration-wejahni-cyan">
          ÊTES-VOUS A LA RECHERCHE DE VOTRE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-2 pb-3 px-2 text-center">
          
          <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
            <img className="ml-[145px] mb-3" src={institut} />
            <p className="text-6xl font-bold text-indigo-600">UNIVERSITES</p>
            <p className="text-3xl text-wejahni-cyan  mt-2"></p>
          </div>
          <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
            <img className="ml-[140px] mb-8" src={chapeau} />
            <p className="text-6xl font-bold text-indigo-600">CLUB</p>
            <p className="text-3xl text-wejahni-cyan  mt-2"></p>
          </div>
        </div>
      </div>
    </div>
</div>

    )
}
