import { useEffect, useState } from "react";
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
  //   {
  //     id: 1,
  //     parking_id: 1,
  //     date: "2022-10-10",
  //     hour: "20:10",
  //     car: "CAD120",
  //     userName: "Pedro Martinez",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2,
  //     parking_id: 2,
  //     date: "2022-10-15",
  //     hour: "15:03",
  //     car: "CAD110",
  //     userName: "Laura Perez",
  //     status: "Approved",
  //   },
  //   {
  //     id: 3,
  //     parking_id: 5,
  //     date: "2022-12-20",
  //     hour: "10:3",
  //     car: "ABC456",
  //     userName: "Sara Torres",
  //     status: "Approved",
  //   },
  // ]);

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
          style={{ position: "absolute" }} //esta parte se va a quitar, es para pruebas y en general este select
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
    if (userType === "admin") {
      return (
        <>
          <SelectUser />
          <br></br>
          <ReservationAdmin data={data} setData={setData} />
        </>
      );
    } else if (userType === "user") {
      return (
        <>
          <SelectUser />
          <br></br>
          <ReservationUser data={data} />
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
