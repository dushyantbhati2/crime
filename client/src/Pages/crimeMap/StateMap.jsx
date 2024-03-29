import React from 'react'
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Circle } from "react-leaflet";
function MyComponent() {
    const map = useMap();
    console.log("map center:", map.getCenter());
    return null;
  }

const StateMap = () => {
  return (
    <MapContainer center={ [19.7515, 75.7139 ]} zoom={7} className='h-[600px] w-1/2 m-4' >
    <TileLayer 
    attribution='&Copy;<a href="https://www.openstreetmap.org/copyright">openmap</a>contributors'
    url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
    
   />
   <Circle center={[19.7515, 75.7139]} radius={200000} pathOptions={{ color: 'red' }} />
   <MyComponent />
 </MapContainer>
  )
}

export default StateMap
