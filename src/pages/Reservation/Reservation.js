import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Loading } from "../../helpers";
import { getRequestReservations } from "../../services";
import { ReservationAdmin } from "../ReservationAdmin";
import { ReservationOwner } from "../ReservationOwner";
import { ReservationUser } from "../ReservationUser";

/**
 * Contiene los elementos de la sección reserva
 * @returns
 */
export function Reservation() {
  const [userType, setUserType] = useState("admin");
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);

  //Cuando carga la primera vez
  useEffect(() => {
    getRequestReservations((response) => {
      response.then((value) => setData(value.data));
      setLoad(false);
    });
  }, []);

  //Cuando se va cambiando los valores con delete, update
  // useEffect(() => {
  //   getRequestReservations((response) => {
  //     response.then((value) => setData(value.data));
  //     setLoad(false);
  //   });
  // }, [data]);

  function SelectUser(props) {
    return (
      <>
        <select
          //esta parte se va a quitar, es para pruebas y en general este select
          onChange={(e) => {
            setUserType(e.target.value.toLowerCase());
          }}
        >
          <option value=""></option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="owner">Owner</option>
        </select>
      </>
    );
  }

  if (!load) {
    if (data.length == 0) {
      return (
        <Alert variant={"info"}>There are no reservations, add one.</Alert>
      );
    } else if (userType === "admin") {
      return (
        <>
          <br></br>
          <SelectUser />

          <ReservationAdmin data={data} setData={setData} />
        </>
      );
    } else if (userType === "user") {
      return (
        <>
          <SelectUser />
          <br></br>
          <ReservationUser data={data} setData={setData} />
        </>
      );
    } else if (userType === "owner") {
      return (
        <>
          <SelectUser />
          <br></br>
          <ReservationOwner data={data} setData={setData} />
        </>
      );
    }
  } else {
    return <Loading />;
  }
}
