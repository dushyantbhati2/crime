import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const CountryMap = () => {
  // GeoJSON data for Rajasthan
  const rajasthanBorder = {
    type: 'Feature',
    properties: { name: 'Rajasthan' },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [74.0, 27.0],
          [74.0, 28.0],
          [75.0, 28.0],
          [75.0, 27.0],
          [74.0, 27.0],
        ],
      ],
    },
  };

  return (
    <MapContainer center={[27.0, 74.0]} zoom={7} className='h-[650px] w-1/2 m-4'>
      <TileLayer 
        attribution='&Copy;<a href="https://www.openstreetmap.org/copyright">openmap</a>contributors'
        url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=X0q7ZCwcKkbiC3AtTDO9lho83ADOkKHx2HCDcFZ2Pphx3IXNWDIn372Chn8L5qib'
      />
      {/* Render GeoJSON data for Rajasthan border */}
      <GeoJSON data={rajasthanBorder} />
    </MapContainer>
  );
};

export default CountryMap;
