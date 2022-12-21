import React, { useEffect, useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { FaAlignJustify, FaEye } from "react-icons/fa";
import { getParkingDocuments, getOnePerson } from "../../../services";
import { ModalViewDocuments } from "../ModaViewDocuments";
import "./ListDocuments.css";

export function ListDocuments() {
  const [showModal, setShowModal] = useState(false);
  const [parkingsData, setParkingsData] = useState([]);

  const getDataDocuments = async () => {
    let users = await getParkingDocuments()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    //let person = await getOnePerson(docs.id_people);
    console.log(users);
    setParkingsData(users);
    //console.log(person);
  };

  const colorStatus = (status) => {
    if (status == "Pending") {
      return "warning";
    } else if (status == "Approved") {
      return "success";
    } else {
      return "danger";
    }
  };

  const onClickShow = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getDataDocuments();
    return () => {};
  }, []);

  return (
    <>
      <div className="list-document">
        <h3>Documents</h3>
        <Table style={{ textAlign: "center" }} striped bordered hover>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Parking</th>
              <th>Status</th>
              <th>Comment</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {parkingsData.map((data) => (
              <tr>
                <td key={data.person.id}>{data.person.name}</td>
                <td key={data.id}>{data.parking_name}</td>
                <td key={data.document.id}>
                  <h5>
                    <Badge bg={colorStatus(data.document.status)} text="dark">
                      {data.document.status}
                    </Badge>
                  </h5>
                </td>
                <td key={data.document.id}>{data.document.comment}</td>
                <td>
                  <span className="show_doc" onClick={onClickShow}>
                    <FaEye style={{ fontSize: "25px" }} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ModalViewDocuments
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}
