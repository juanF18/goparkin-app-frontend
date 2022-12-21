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
  const { coords, parkingInfo } = props;
  return coords.length === 0 ? (
    <>
      <Marker
        position={[5.06814396941135, -75.5173278840628]}
        icon={IconPinCreation(ParkingPin)}
        autoPan={true}
      ></Marker>
    </>
  ) : (
    <>
      <Marker
        position={coords ? coords : []}
        icon={IconPinCreation(ParkingPin)}
        autoPan={true}
      >
        <Tooltip>Nombre parquedero</Tooltip>
        {props.registroOwner == true ? null : (
          <Popup>
            <PopupContent parkingInfo={parkingInfo} />
          </Popup>
        )}
      </Marker>
    </>
  );
}
