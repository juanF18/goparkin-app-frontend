import { useEffect, useState } from "react";
import { Alert, Badge, Button, Form, Table } from "react-bootstrap";
import { Loading } from "../../../helpers";
import { getRequestRols } from "../../../services";
import { ChangeRolPopUp } from "../../Popup/ChangeRolPopUp";

export function AdminRolsForm() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const colors = ["primary", "success", "danger"];

  // function BadgeRol(idRol) {
  //   return <Badge></Badge>;
  // }

  //Cuando carga la primera vez
  useEffect(() => {
    getRequestRols((response) => {
      response.then((value) => setData(value.data));
      setLoad(false);
      // console.log("Data", data);
    });
  }, []);

  if (load) {
    return <Loading />;
  } else {
    if (data.length > 0) {
      return (
        <>
          <Table
            style={{ marginTop: "0px", textAlign: "center" }}
            striped
            hover
            bordered
          >
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role Id</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      {/* <Badge bg="primary">{item.id_rol}</Badge> */}
                      <h5>
                        <Badge bg={colors[item.id_rol - 1]}>
                          {item.id_rol}
                        </Badge>

                        {/* <BadgeRol /> */}
                      </h5>
                    </td>
                    <td>
                      <ChangeRolPopUp
                        id_rol={item.id_rol}
                        id={item.id}
                        data={data}
                        setData={setData}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      );
    } else {
      return (
        <>
          <Alert variant={"info"}>There are no users, add one.</Alert>
        </>
      );
    }
  }
}
