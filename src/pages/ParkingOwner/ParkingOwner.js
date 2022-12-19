import { Button, Col, Container, ListGroup, Row, Table } from "react-bootstrap";
import "./ParkingOwner.css";
import { MdAddCircleOutline } from "react-icons/md";
import { RegisterForm } from "../../components/Auth";

export const ParkingOwner = ({ data = [] }) => {
  //si es admin se muestra esta parte

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
              <Button variant="light">
                Add parking <MdAddCircleOutline />
              </Button>
            </Col>
            <hr />
          </Row>
          <Row className="parkings">
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item onClick={()=>{console.log("olii")}}>ooli</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>

            </ListGroup>
          </Row>
        </Col>
        <Col>
          <RegisterForm />
        </Col>
      </Row>
    </>
  );
};
