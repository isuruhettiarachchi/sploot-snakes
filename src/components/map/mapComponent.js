import React, {Fragment, useState, useEffect} from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import {Autocomplete} from './geocoder';
import { useDispatch, useSelector } from 'react-redux';

import { coordinateUpdate, selectCoords } from '../../redux/slices/clientSlice';

export default function MapComponent({title,components}) {
  
  const [markers,setMarkers] = useState([]);
  const position = useSelector(selectCoords);
  const dispatch = useDispatch()

  const dispatchCoords = (latlng) => {
    dispatch(coordinateUpdate(Object.values(latlng)))
  }

  const handleMarkerDrag = (e) => {
    dispatchCoords(e.target._latlng)
  }
  
  const handleMapClick = (e) => {
    dispatchCoords(e.latlng);
  }
  
// TODO: FIX WARNING
// Line 18:9:  The 'handleMarkerDrag' function makes the dependencies of useEffect Hook (at line 33) change on every render. 
// Move it inside the useEffect callback. Alternatively, wrap the 'handleMarkerDrag' definition into its own useCallback() Hook 
  useEffect(() =>{
    setMarkers(<Marker 
      draggable 
      ondragend = {e => handleMarkerDrag(e)}
      position={position}
      ></Marker>);
  },[position,])
  
    
  return <Fragment>
    <Map
        onclick = {(e)=>handleMapClick(e)} 
        className="leaflet-map-landing-page"
        center={position} 
        zoom={15}
        maxZoom={17}
        minZoom={6}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />  
            {markers}
            {components}
      </Map>
          <Autocomplete title={title}/>
        </Fragment>

}
