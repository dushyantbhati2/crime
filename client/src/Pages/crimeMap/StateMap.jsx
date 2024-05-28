import React,{useEffect,useState} from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from "../../axios/axiosDefaults.js"




 
const StateMap = () => {
  const [mapData, setMapData] = useState([]);
  const [mapZoom, setMapZoom] = useState(7);
  const handleZoomEnd = (event) => {
    setMapZoom(event.target._zoom); // Update mapZoom state with the current zoom level
  };

  const fetchMapData=async()=>{
    try {
      const response = await axios.post('map/', {
        "state": "Andhra Pradesh",
        
      });
      const data =await response.data
      console.log(typeof data)
      console.log(data)
      console.log(typeof data.data)
      console.log(data.data)

      setMapData(data.data)
      
      
  
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
      {/* <div>
      <h1>Data from Backend API</h1>
      {mapData.map(item => (
        <div key={item.district}>
          <p>District: {item.district}</p>
          <p>Total: {item.total}</p>
          <p>Color: {item.color}</p>
          <p>Latitude: {item.lat}</p>
          <p>Longitude: {item.lon}</p>
        </div>
      ))}
    </div> */}
      <MapContainer center={[19.7515, 75.7139]} zoom={7} className='h-[600px] w-screen p-0 absolute m-0'>
        <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=4qF7jNT2GrtuZtRr3scK'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        
        {mapData.map((item, index) => (
          <Circle
            key={index}
            center={[parseFloat(item.lat), parseFloat(item.lon)]}
            radius={20000 / Math.pow(2, 13 - mapZoom)} // Adjust the formula based on your desired radius at zoom level 7
            pathOptions={{ color: item.color }} // Use the color from the fetched data
          />
        ))}
        
      </MapContainer>
    </>
  );
};

export default StateMap;

