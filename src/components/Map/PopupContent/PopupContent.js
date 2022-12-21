import React, { useEffect, useState } from "react";
import { NameOpenDay, Spaces, RatingStars, Comment } from "../../Popup";
import { Button, Form, Modal } from "react-bootstrap";
import "./PopupContent.css";
import { postRequestReservation } from "../../../services";

function ReservaButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [plate, setPlate] = useState("");

  useEffect(() => {
    console.log(hour);
  }, [hour]);

  async function sendRequest() {
    handleClose();
    postRequestReservation(date, hour, plate);
  }

  return (
    <>
      <Button
        className="btn-reservation"
        variant="success"
        onClick={handleShow}
      >
        Make reservation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>parking name: Name</p>
          <p>Vehicle plate</p>
          <Form.Select
            onChange={(e) => {
              setPlate(e.target.value);
            }}
          >
            <option>Choose your vehicle</option>
            <option value="CAD123">CAD 123</option>
            <option value="VEH512">VEH 512</option>
            <option value="ABC567">ABC 567</option>
          </Form.Select>
          <br></br>
          <p>Date</p>
          <Form.Control
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date"
          />
          <br></br> <br></br>
          <p>Time</p>
          <Form.Control
            type="time"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
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
export function PopupContent(props) {
  const { parkingInfo } = props;
  return (
    <div className="popup_container">
      {/*Espacio para nombre del parqueadero, dias abiertos y hora de servicio */}
      <NameOpenDay
        name={parkingInfo.parking_name}
        openDays={parkingInfo.open_days}
        openHour={parkingInfo.opening_hour}
        closeHour={parkingInfo.closing_hour}
      />
      <hr />
      <Spaces
        priceCar={parkingInfo.hour_price_car}
        priceMotorcycle={parkingInfo.hour_price_motorcycle}
        spaceCar={parkingInfo.parkingSpace.spaces_car}
        spaceMotorcycle={parkingInfo.parkingSpace.spaces_motorcycle}
        availableCar={parkingInfo.parkingSpace.available_spaces_car}
        availableMotorcycle={
          parkingInfo.parkingSpace.available_spaces_motorcycle
        }
      />
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
