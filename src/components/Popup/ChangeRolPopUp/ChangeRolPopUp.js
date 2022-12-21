import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export function ChangeRolPopUp({ id_rol, id, data, setData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selected, setSelected] = useState(id_rol);

  function modifyIdInRow(id) {
    let temp = [...data];
    for (let i in temp) {
      if (temp[i].id == id) {
        temp[i].id_rol = selected;
        break;
      }
    }
    setData(temp);
    // console.log("data", temp);
  }

  function handleRequest() {
    handleClose();
    axios
      .put(`${process.env.REACT_APP_BACKENDURL}/people/${id}`, {
        id_rol: selected,
      })
      .then(function (response) {
        // console.log(response.data);
        modifyIdInRow(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select role value</option>
            <option value="1">1 (User)</option>
            <option value="2">2 (Owner) </option>
            <option value="3">3 (Admin)</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selected != "" ? (
            <Button variant="success" onClick={handleRequest}>
              Save Changes
            </Button>
          ) : (
            <Button disabled variant="success">
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
