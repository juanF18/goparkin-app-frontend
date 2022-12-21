import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { LocationMarker } from "../LocationMarker";
import { Markers } from "../Markers";
import "./RegisterMapView.css";

import "leaflet/dist/leaflet.css";
import "./RegisterMapView.css";
import axios from "axios";

/**
 * Funcion que nos retorna el mapa y donde configuramos
 * el zoom inicial y del centro donde va empezar el mapa,
 * tambien se configura el Title layer que es el que nos permite
 * darle un estilo al mapa hay que darle una tribucion al layout del mapa
 * @returns Retorna la vista del mapa
 */
export function RegisterMapView({
  setCity,
  setDepartment,
  setAddress,
  setCoordinates,
  parkingName,
}) {
  const [centerMap, setCenterMap] = useState([
    5.06814396941135, -75.5173278840628,
  ]);
  function ClickLatLong() {
    const map = useMapEvents({
      click: (e) => {
        //console.log("lat", e.latlng.lat);
        //console.log("long", e.latlng.lng);
        setCoordinates([e.latlng.lat, e.latlng.lng]);
        setCenterMap([e.latlng.lat, e.latlng.lng]);
        getAddress(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  }
  function getAddress(lat, long) {
    let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=18&addressdetails=1`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        response.data.address.city ? setCity(response.data.address.city) : null;
        response.data.address.county
          ? setCity(response.data.address.county)
          : null;
        setDepartment(response.data.address.state);
        setAddress(response.data.address.neighbourhood);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return;
      });
  }
  return (
    <MapContainer style={{ height: "300px" }} zoom={16} center={centerMap}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickLatLong />
      <LocationMarker />
      <Markers coords={centerMap} registroOwner={true} />
    </MapContainer>
  );
}
