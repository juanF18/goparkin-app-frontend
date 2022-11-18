import React from "react";
import { Marker } from "react-leaflet";
import { IconPin } from "../../../assets";
import { IconPinCreation } from "../../../helpers";

export function Markers(props) {
  const { coords } = props;
  return coords === null ? null : (
    <Marker position={coords} icon={IconPinCreation(IconPin)}></Marker>
  );
}
