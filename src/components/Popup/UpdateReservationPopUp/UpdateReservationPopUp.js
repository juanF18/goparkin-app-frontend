import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateRequestReservation } from "../../../services";
export function UpdateReservationPopUp({
  userType,
  date,
  hour,
  plate,
  id,
  status,
}) {
  //lo utiliza el actor tipo "User"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dateUser, setDateUser] = useState(date);
  const [hourUser, setHourUser] = useState(hour);
  const [plateUser, setPlateUser] = useState(plate);

  async function sendRequest() {
    handleClose();
    // updateRequestReservation(date, hour, plate, id);
    // updateRequestReservation(date, hour, plate, id, status);
    alert("Enviando formulario");
  }

  return (
    <>
      {userType === "admin" ? (
        <Button
          className="btn-reservation"
          variant="warning"
          style={{ width: "100px" }}
          onClick={handleShow}
          disabled
        >
          Edit
        </Button>
      ) : (
        <Button
          className="btn-reservation"
          variant="warning"
          onClick={handleShow}
        >
          Edit
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>parking name: Name</p>
          <p>Vehicle plate</p>
          <Form.Select
            onChange={(e) => {
              setPlateUser(e.target.value);
            }}
            value={plateUser}
          >
            <option>Choose your vehicle</option>
            <option value="CAD123">CAD 123</option>
            <option value="VEH512">VEH 512</option>
            <option value="ABC567">ABC 567</option>
          </Form.Select>
          <br></br>
          <p>Date</p>
          <Form.Control
            type="date"
            placeholder="Enter date"
            value={dateUser}
            onChange={(e) => {
              setDateUser(e.target.value);
            }}
          />
          <br></br>
          <p>Time</p>
          <Form.Control
            type="time"
            placeholder="Enter time"
            value={hourUser}
            onChange={(e) => {
              setHourUser(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={sendRequest}>
            Update reservation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
