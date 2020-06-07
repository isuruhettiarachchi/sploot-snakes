import React, {Fragment} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {Autocomplete} from './geocoder';
import { useSelector } from 'react-redux';

import { selectMapBound } from '../../redux/slices/clientSlice';

const position = [51.505, -0.09]

export default function MapComponent() {
  
  const boundingBox = useSelector(selectMapBound);
  console.log(boundingBox)

  return <Fragment>
    <Map 

        className="leaflet-map-landing-page"
        center={position} 
        zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        <Marker 
        position={position}
        draggable={true}
        >
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
          <Autocomplete/>
        </Fragment>

}
