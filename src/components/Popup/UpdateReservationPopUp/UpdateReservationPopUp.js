import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
export function UpdateReservationPopUp({
  userType,
  date,
  hour,
  plate,
  id,
  status,
  id_people,
  id_parking,
  data,
  setData,
}) {
  //lo utiliza el actor tipo "User"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log("usertype", userType);
  // console.log("id", id);
  // console.log("hour", hour);
  // console.log("plate", plate);
  // console.log("date", date);
  // console.log("id_user", id_people);

  const month = date[5] + date[6];
  const day = date[8] + date[9];
  const year = date[0] + date[1] + date[2] + date[3];
  const formatoDate = `${month}/${day}/${year}`;
  const [dateUser, setDateUser] = useState(formatoDate);
  const [hourUser, setHourUser] = useState(hour);
  const [plateUser, setPlateUser] = useState(plate);
  // const [idUser, setIdUser] = useState(id_people);

  const [statusUser, setStatusUser] = useState(status);

  async function sendRequest() {
    handleClose();
    //en otra iteración pasar esta función a ReservationService
    axios
      .put(`${process.env.REACT_APP_BACKENDURL}/reservation/${id}`, {
        plate: plateUser,
        hour: hourUser,
        date: dateUser,
        status: statusUser,
      })
      .then(function (response) {
        function check(item) {
          return item.id != id;
        }
        const res = data.filter(check);
        response.data.date += "T05:00:00.000Z";
        setData([...res, response.data]);
        // console.log(res);
        // console.log(response);
        // window.location.reload();
        return;
      })
      .catch(function (error) {
        // console.log(error);
        return;
      });

    // alert("Enviando formulario");
  }

  return (
    <>
      {userType === "admin" ? (
        <Button
          className="btn-reservation"
          variant="warning"
          style={{ width: "100px" }}
          onClick={handleShow}
        >
          Edit
        </Button>
      ) : (
        <Button
          className="btn-reservation"
          variant="warning"
          style={{ width: "100px" }}
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
          <Form.Control type="text" value={formatoDate} disabled />
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

          {userType == "admin" ? (
            <>
              <br></br>
              <p>Status</p>
              <Form.Select
                onChange={(e) => {
                  setStatusUser(e.target.value);
                }}
                value={statusUser}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
              </Form.Select>
            </>
          ) : null}
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
