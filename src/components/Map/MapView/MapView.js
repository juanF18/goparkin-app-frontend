import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "../LocationMarker";
import { Markers } from "../Markers";

import "leaflet/dist/leaflet.css";
import "./MapView.css";

/**
 * Funcion que nos retorna el mapa y donde configuramos
 * el zoom inicial y del centro donde va empezar el mapa,
 * tambien se configura el Title layer que es el que nos permite
 * darle un estilo al mapa hay que darle una tribucion al layout del mapa
 * @returns Retorna la vista del mapa
 */
export function MapView() {
  const centerMap = [5.06814396941135, -75.5173278840628];

  return (
    <MapContainer zoom={16} center={centerMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <Markers coords={centerMap} />
    </MapContainer>
  );
}
