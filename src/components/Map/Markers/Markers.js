import React from "react";
import { Marker } from "react-leaflet";
import { IconPin } from "../../../assets";
import { IconPinCreation } from "../../../helpers";

/**
 * Funcion para crear Marcadores dependiendo las coordenadas que nos llegen
 * @param {coordenadas} props son las cordenadas que llegan
 * @returns Retorna un marcador dado el caso que si llegen una coordenadas
 */

export function Markers(props) {
  const { coords } = props;
  return coords === null ? null : (
    <Marker position={coords} icon={IconPinCreation(IconPin)}></Marker>
  );
}
