import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Circle } from "react-leaflet";
import StateMap from "./StateMap";
import CountryMap from "./CountryMap";

function CrimeMap() {
  const [selectedOption, setSelectedOption] = useState("state"); 

  return (
    <div className="w-full h-screen font-Poppins">
      <div className="flex text-xl gap-10 font-semibold justify-center p-4">
        <div
          className={`flex flex-col justify-center items-center cursor-pointer ${
            selectedOption === "state" ? "selected-option" : ""
          }`}
          onClick={() => setSelectedOption("state")}
        >
          <div>State Wise</div>
          {selectedOption === "state" && (
            <div className="h-1 w-28 mt-[2px] rounded bg-indigo-700"></div>
          )}
        </div>
        <div
          className={`flex flex-col justify-center items-center cursor-pointer ${
            selectedOption === "country" ? "selected-option" : ""
          }`}
          onClick={() => setSelectedOption("country")}
        >
          <div> Country Wise</div>
          {selectedOption === "country" && (
            <div className="h-1 w-36 mt-[2px] rounded bg-indigo-700"></div>
          )}
        </div>
      </div>
      <div className="flex justify-around m-10">
        {selectedOption === "state" ? <StateMap /> : <CountryMap />}
      </div>
    </div>
  );
}

export default CrimeMap;
