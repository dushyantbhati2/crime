import React,{useEffect} from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFetch } from '../../context/UseFet';
import axios from "../../axios/axiosDefaults.js"




 
const StateMap = () => {

  const fetchmap=async()=>{
    try {
      const response = await axios.post('map/', {
        "state": "Andhra Pradesh",
        
      });
      const data =await response.data;
      console.log(data)
      
  
    } catch (error) {
      console.error(error);
    }
  }

  const {data,loading} = useFetch('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib')
   return (
    
    <>
    <button className='z-50' onClick={fetchmap}>Fetch</button>
    <MapContainer center={[19.7515, 75.7139]} zoom={7} className='h-[600px] w-1/2 p-0 absolute m-0'>
      <TileLayer
        url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib' // Example of a different tile provider
      />
      <Circle center={[19.7515, 75.7139]} radius={200000} pathOptions={{ color: 'red' }} />
    </MapContainer></>
  );
};

export default StateMap;

