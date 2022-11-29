import React from "react";
import "./Spaces.css";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";

export function Spaces() {
  return (
    <div className="popup_price_places">
      <div className="car">
        <FaCarSide size={30} />
        <div>
          Lugares: ? <br />
          Precio: ?
        </div>
      </div>
      <div className="motorcycle">
        <FaMotorcycle size={30} />
        <div>
          Lugares: ? <br />
          Precio: ?
        </div>
      </div>
    </div>
  );
}
