import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../LocationMarker";

import "leaflet/dist/leaflet.css";
import "./MapView.css";

export function MapView() {
  const centerMap = [5.06814396941135, -75.5173278840628];

  return (
    <MapContainer zoom={16} center={centerMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
}
