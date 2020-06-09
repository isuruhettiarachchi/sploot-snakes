import React, {Fragment, useState} from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import {Autocomplete} from './geocoder';
import { useDispatch, useSelector } from 'react-redux';

import { coordinateUpdate, selectCoords } from '../../redux/slices/clientSlice';

export default function MapComponent() {
  
  const [markers,setMarkers] = useState([]);
  const position = useSelector(selectCoords);
  const dispatch = useDispatch()

  const handleMarkerDrag = (e) => {
    dispatchCoords(e.target._latlng)
  }
  
  const handleMapClick = (e) => {
    setMarkers(<Marker 
      draggable 
      ondragend = {e => handleMarkerDrag(e)}
      position={e.latlng}
      ></Marker>);
      dispatchCoords(e.latlng)
      
  }

  const dispatchCoords = (latlng) => {
    dispatch(coordinateUpdate(Object.values(latlng)))
  }
  
    
  return <Fragment>
    <Map
        onclick = {(e)=>handleMapClick(e)} 
        className="leaflet-map-landing-page"
        center={position} 
        zoom={15}
        maxZoom={17}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />  
            {markers}

      </Map>
          <Autocomplete/>
        </Fragment>

}
