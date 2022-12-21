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
  ///////////////////////////////////////////////////////
  const IDUSER = 8; //este valor se modifica segun el id de cada usuario
  const IDROL = 3; //este valor se modifica segun el id_rol de cada usuario
  const IDPARK = 1; //si es owner necesitamos saber el id de su parqueadero

  let userT = "";

  if (IDROL == 1) {
    userT = "user";
  } else if (IDROL == 2) {
    userT = "owner";
  } else if (IDROL == 3) {
    userT = "admin";
  }

  ///////////////////////////////////////////////////////

  const [userType, setUserType] = useState(userT);
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);

  function userFilter(data) {
    function check(item) {
      return item.id_people == IDUSER;
    }
    return data.filter(check);
  }

  function ownerFilter(data) {
    function check(item) {
      return item.id_parking == IDPARK;
    }
    return data.filter(check);
  }

  /**
   * si es usuario se muestran solo los resultados del id de ese usuario
   * si es owner se muestran solo los resultados donde el id es igual al id del parqueadero del dueño
   * si es admin se muestra todo
   */

  //Cuando carga la primera vez
  useEffect(() => {
    getRequestReservations((response) => {
      if (IDROL == 1) {
        response.then((value) => setData(userFilter(value.data)));
      } else if (IDROL == 2) {
        response.then((value) => setData(ownerFilter(value.data)));
      } else if (IDROL == 3) {
        response.then((value) => setData(value.data));
      }
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
        {/* <select
          //esta parte se va a quitar, es para pruebas y en general este select
          onChange={(e) => {
            setUserType(e.target.value.toLowerCase());
          }}
        >
          <option value=""></option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="owner">Owner</option>
        </select> */}
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
          <ReservationUser data={data} setData={setData} IDUSER={IDUSER} />
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
