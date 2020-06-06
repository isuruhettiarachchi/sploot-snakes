import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function MapComponent(){
    // Creates div element right before the app in the DOM tree
    const container = document.createElement("div");
    container.id = "map-container";
    document.getElementById("root").appendChild(container);
    
    const position = [7.490390,80.363068]

    //Leaflet Map Component
    const map = (
    <Map center={position} zoom={13}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </Map>
    )
    
    return ReactDOM.render(map,container);
}
