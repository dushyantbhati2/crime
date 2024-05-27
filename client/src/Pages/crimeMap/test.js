import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from "../../axios/axiosDefaults.js";

const StateMap = () => {
  const [mapData, setMapData] = useState([]);

  const fetchMapData = async () => {
    try {
      const response = await axios.post('map/', {
        "state": "Andhra Pradesh",
      });
      const data = await response.data;
      // Convert list format data to array
      const dataArray = Object.keys(data).map(key => data[key]);
      setMapData(dataArray); // Update state with converted array data
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button
        className='z-50 bg-zinc-800 py-2 px-6 text-lg rounded fixed top-20 left-4 text-white'
        onClick={fetchMapData}
      >
        Fetch
      </button>
      <MapContainer center={[19.7515, 75.7139]} zoom={7} className='h-[600px] w-screen p-0 absolute m-0'>
        <TileLayer
          url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
        />
        {Object.values(mapData).map((item, index) => (
          <Circle
            key={index}
            center={[parseFloat(item.lat), parseFloat(item.lon)]}
            radius={20000} // Set your desired radius here
            pathOptions={{ color: item.color }} // Use the color from the fetched data
          />
        ))}
      </MapContainer>
    </>
  );
};

export default StateMap;
