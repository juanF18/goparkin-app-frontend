import React from "react";
import { NameOpenDay, Spaces, RatingStars, Comment } from "../../Popup";
import { Button } from "react-bootstrap";
import "./PopupContent.css";

export function PopupContent() {
  return (
    <div className="popup_container">
      {/*Espacio para nombre del parqueadero, dias abiertos y hora de servicio */}
      <NameOpenDay />
      <hr />
      <Spaces />
      <hr />
      <RatingStars />
      <hr />
      <div className="comments">
        <Comment comment={"Me gusto mucho"} />
        <Comment comment={"No me gusto nada muy malo"} />
      </div>
      <hr />
      <div className="popup_buttons">
        {/* Bontones para  resevar*/}
        <Button className="btn-reservation" variant="success">
          Reservar
        </Button>
      </div>
    </div>
  );
}
