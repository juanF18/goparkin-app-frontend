import React, { useState } from "react";
import { NameOpenDay, Spaces, RatingStars, Comment } from "../../Popup";
import { Button, Form, Modal } from "react-bootstrap";
import "./PopupContent.css";
function ReservaButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function sendRequest() {
    handleClose();
    alert("Enviando formulario");
  }

  return (
    <>
      <Button
        className="btn-reservation"
        variant="success"
        onClick={handleShow}
      >
        Reservar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>parking name: Name</p>
          <p>Vehicle plate</p>
          <Form.Select aria-label="Default select example">
            <option>Choose your vehicle</option>
            <option value="1">CAD 123</option>
            <option value="2">VEH 512</option>
            <option value="3">ABC 567</option>
          </Form.Select>
          <br></br>
          <p>Date</p>
          <input type="date" />
          <br></br> <br></br>
          <p>Time</p>
          <input type="time" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={sendRequest}>
            Make reservation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
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
        {/* Botones para  resevar*/}
        <ReservaButton />
      </div>
    </div>
  );
}
