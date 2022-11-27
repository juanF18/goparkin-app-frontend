import React from "react";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import "./PopupContent.css";

export function PopupContent() {
  return (
    <div className="popup_container">
      <div className="popup_name_open">
        <h4>Nombre (abierto)</h4>
        <strong>Dias abiertos</strong> Lunes-Martes-Miercoles <br />
        <strong>Horas de servicio</strong> 7am - 7pm
      </div>
      <hr />
      <div className="popup_price_places">
        <div className="car">
          <FaCarSide size={30} />
          Places: <br />
          Price :
        </div>
        <div className="motorcycle">
          <FaMotorcycle size={30} />
          Places: <br />
          Prices
        </div>
      </div>
      <hr />
      <div className="popup_rating">Rating</div>
      <hr />
      <div className="popup_comments">Comentarios</div>
      <hr />
      <div className="popup_buttons">Botones</div>
    </div>
  );
}
