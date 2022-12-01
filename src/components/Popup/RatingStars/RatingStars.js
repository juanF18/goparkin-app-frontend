import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./RatingStars.css";

export function RatingStars() {
  // Estado que alamace el valor que seleccionamos de las estrellas
  const [valueRating, setValueRating] = useState(0);

  // Si se modifica el estado de las estrellas modifica el valor
  const ratingValue = (rate) => {
    setValueRating(rate);
  };
  return (
    <div className="popup_rating">
      <p>Calificanos</p>
      <Rating onClick={ratingValue} initialValue={valueRating} />
    </div>
  );
}
