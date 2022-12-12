import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

/**
 *
 * @param {title} props el title es para que sea dinamico el texto del titulo, si es reservation o vehicle por ej
 * @returns
 */

export function DeletePopUp(props) {
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
        className="btn-reservation btn-c"
        variant="danger"
        onClick={handleShow}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Delete ${props.title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure do you want to delete this record?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={sendRequest}>
            Delete reservation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
