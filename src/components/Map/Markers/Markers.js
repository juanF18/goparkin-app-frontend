import React from "react";
import { Marker } from "react-leaflet";

export function Markers(props) {
  const { coords } = props;
  return coords === null ? null : <Marker position={coords}></Marker>;
}
