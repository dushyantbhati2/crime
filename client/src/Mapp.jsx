import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { Circle } from 'react-leaflet';

function MyComponent() {
  const map = useMap();
  console.log('map center:', map.getCenter());
  return null;
}

function Mapp() {
  return (
   
      <Link to="/map" className='flex justify-around'>
       
       {/* <img className='h-96 w-1/4' src="https://c8.alamy.com/comp/M1PH89/india-map-with-federal-states-flat-vector-M1PH89.jpg" alt="" /> */}
       <MapContainer center={ [20.5937, 78.9629 ]} zoom={4} className='h-96 w-1/4' >
          <TileLayer 
           attribution='&Copy;<a href="https://www.openstreetmap.org/copyright">openmap</a>contributors'
           url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
          />
          <MyComponent />
          </MapContainer>
        <MapContainer center={ [19.7515, 75.7139 ]} zoom={7} className='h-96 w-2/3 b-3' >
           <TileLayer 
           attribution='&Copy;<a href="https://www.openstreetmap.org/copyright">openmap</a>contributors'
           url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
           
          />
          <Circle center={[19.7515, 75.7139]} radius={200000} pathOptions={{ color: 'red' }} />
          <MyComponent />
        </MapContainer>
      </Link>
    
  );
}

export default Mapp;
