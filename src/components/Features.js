import React from "react";
import chapeau from "../images/chapeau.svg";
import school from "../images/School.svg";
import institut from "../images/institut.svg";
import { Link } from "react-router-dom";
export default function Features() {
  return (
    <div>
      <div className="relative w-full mt-36 bg-wejahni-blue py-10">
        <div className="max-w-[890px] mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white underline decoration-wejahni-cyan">
              ÊTES-VOUS A LA RECHERCHE DE VOTRE
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 py-9 px-2 text-center">
            <Link to={"/universities"}>
              <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
                <img className="ml-[145px] mb-3" src={institut} />
                <p className="text-6xl font-bold text-indigo-600">UNIVERSITE</p>
                <p className="text-3xl text-wejahni-cyan  mt-2"></p>
              </div>
            </Link>
            <Link to={"/clubs"}>
              <div className="border-wejahni-purple border py-8 rounded-xl shadow-xl">
                <img className="ml-[140px] mb-8" src={chapeau} />
                <p className="text-6xl font-bold text-indigo-600">CLUB</p>
                <p className="text-3xl text-wejahni-cyan  mt-2"></p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
