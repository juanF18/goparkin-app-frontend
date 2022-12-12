import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
export function UpdateReservationPopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function sendRequest() {
    handleClose();
    alert("Enviando formulario");
  }

  return (
    <>
      {props.userType === "admin" ? (
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
          <Form.Select aria-label="Default select example">
            <option>Choose your vehicle</option>
            <option value="1">CAD 123</option>
            <option value="2">VEH 512</option>
            <option value="3">ABC 567</option>
          </Form.Select>
          <br></br>
          <p>Date</p>
          <Form.Control type="date" placeholder="Enter date" /> <br></br>
          <p>Time</p>
          <Form.Control type="time" placeholder="Enter time" />
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
