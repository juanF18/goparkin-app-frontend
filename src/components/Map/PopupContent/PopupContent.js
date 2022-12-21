import React, { useEffect, useState } from "react";
import { NameOpenDay, Spaces, RatingStars, Comment } from "../../Popup";
import { Button, Form, Modal } from "react-bootstrap";
import "./PopupContent.css";
import { postRequestReservation } from "../../../services";
import axios from "axios";

function ReservaButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [plate, setPlate] = useState("");

  // useEffect(() => {
  //   console.log(hour);
  // }, [hour]);

  async function sendRequest() {
    handleClose();
    postRequestReservation(date, hour, plate);
  }

  const [vehiclesPlates, setVehiclesPlates] = useState([]);
  const IDUSER = 8; //este valor se asigna

  function getVehicles() {
    axios
      .get(`${process.env.REACT_APP_BACKENDURL}/vehicle`)
      .then(function (response) {
        function check(item) {
          return item.id_people == IDUSER;
        }
        // console.log(response);
        let temp = [...response.data];
        temp = temp.filter(check);
        setVehiclesPlates(temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getVehicles();
  }, []);

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
            {vehiclesPlates.map((item) => {
              return (
                <option key={item.plate} value={item.plate}>
                  {item.plate}
                </option>
              );
            })}
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
          {date && hour && plate ? (
            <Button variant="success" onClick={sendRequest}>
              Make reservation
            </Button>
          ) : (
            <Button disabled variant="success" onClick={sendRequest}>
              Make reservation
            </Button>
          )}
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
