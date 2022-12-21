import React from "react";
import "./NameOpenDays.css";

export function NameOpenDay(props) {
  const { name, openDays, openHour, closeHour } = props;
  return (
    <div className="popup_name_open">
      <h4>{name} (Abierto)</h4>
      <strong>Dias abiertos: </strong>
      {openDays}
      <br />
      <strong>Hora de servicio: </strong> {openHour} - {closeHour}
    </div>
  );
}
