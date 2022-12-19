import { Button, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import "./ParkingOwner.css";
import { MdAddCircleOutline } from "react-icons/md";
import { ParkinOwnerForm } from "../../components/Forms";
import { useState } from 'react';


export const ParkingOwner = ({ data = [] }) => {
  //si es admin se muestra esta part
  const [add, setAdd] = useState(false);
  const [inf, setInf] = useState(false);
  const [info, setInfo] = useState({ name: "holii" })
  const [edit, setEdit] = useState(false);
  const EditParking = () => {
    setEdit(true);
    setAdd(false)
    setInf(false)
  }
  const AddParking = () => {
    setEdit(false);
    setAdd(true)
    setInf(false)
  }
  const InfParking = () => {

    setEdit(false);
    setAdd(false)
    setInf(true)

  }

  return (
    <>
      <Row style={{ width: "100%", height: "100%" }}>
        <Col
          xs={4}
          md={3}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col>
              <h2 className="title">Parking</h2>
            </Col>
            <Col>
              <Button variant="light" onClick={AddParking}>
                Add parking <MdAddCircleOutline />
              </Button>
            </Col>
            <hr />
          </Row>
          <Row className="parkings">
            <ListGroup variant="flush">
              <ListGroup.Item onClick={InfParking}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>ooli</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item onClick={InfParking}>Morbi leo risus</ListGroup.Item>

            </ListGroup>
          </Row>
        </Col>
        <Col>
          {add && !edit && !inf && <ParkinOwnerForm title="Add Parking" />}
          {inf && !add && !edit && <ParkinOwnerForm title="Info Parking"  data={info}/>}
        </Col>
      </Row>
    </>
  );
};
