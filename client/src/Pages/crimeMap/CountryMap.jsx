import React from 'react';
import { MapContainer, TileLayer, GeoJSON,Circle
 } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useFetch } from '../../context/UseFet';



const CountryMap = () => {
  const {data,loading} = useFetch('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib')
   
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} className='h-[600px] w-screen p-0 absolute m-0'>
      <TileLayer 
         url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
      />
     <Circle center={[19.7515, 75.7139]} radius={200000} pathOptions={{ color: 'red' }} />
    
    </MapContainer>
  );
};

export default CountryMap;
