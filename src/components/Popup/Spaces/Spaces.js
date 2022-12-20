import React from "react";
import "./Spaces.css";
import { FaCarSide, FaMotorcycle } from "react-icons/fa";

export function Spaces(props) {
  const {
    priceCar,
    priceMotorcycle,
    spaceCar,
    spaceMotorcycle,
    availableCar,
    availableMotorcycle,
  } = props;
  return (
    <div className="popup_price_places">
      <div className="car">
        <FaCarSide size={30} />
        <div>
          Lugares: {spaceCar} <br />
          Precio: {priceCar} <br />
          Disponibles: {availableCar}
        </div>
      </div>
      <div className="motorcycle">
        <FaMotorcycle size={30} />
        <div>
          Lugares: {spaceMotorcycle} <br />
          Precio: {priceMotorcycle} <br />
          Disponibles: {availableMotorcycle}
        </div>
      </div>
    </div>
  );
}
