import React from "react";
import "./Markers.css";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { ParkingPin } from "../../../assets";
import { IconPinCreation } from "../../../helpers";
import { PopupContent } from "../PopupContent";

/**
 * Funcion para crear Marcadores dependiendo las coordenadas que nos llegen
 * @param {coordenadas} props son las cordenadas que llegan
 * @returns Retorna un marcador dado el caso que si llegen una coordenadas
 */

export function Markers(props) {
  const { coords } = props;
  return coords === null ? null : (
    <>
      <Marker
        position={coords}
        icon={IconPinCreation(ParkingPin)}
        autoPan={true}
      >
        <Tooltip>Nombre parquedero</Tooltip>
        <Popup>
          <PopupContent />
        </Popup>
      </Marker>
    </>
  );
}
