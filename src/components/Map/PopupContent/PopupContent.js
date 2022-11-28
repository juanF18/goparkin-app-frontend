import React, { useState } from "react";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import "./PopupContent.css";

export function PopupContent() {
  const [valueRating, setValueRating] = useState(0);

  const ratingValue = (rate) => {
    setValueRating(rate);
  };

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
          <div>
            Lugares: ? <br />
            Precio : ?
          </div>
        </div>
        <div className="motorcycle">
          <FaMotorcycle size={30} />
          <div>
            Lugares: ?<br />
            Precio: ?
          </div>
        </div>
      </div>
      <hr />
      <div className="popup_rating">
        <p>Calificanos</p>
        <Rating onClick={ratingValue} initialValue={valueRating} /> <br />
      </div>
      <hr />
      <div className="popup_comments">Comentarios</div>
      <hr />
      <div className="popup_buttons">Botones</div>
    </div>
  );
}
