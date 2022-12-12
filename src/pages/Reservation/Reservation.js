import { useState } from "react";
import { ReservationAdmin } from "../ReservationAdmin";
import { ReservationOwner } from "../ReservationOwner";
import { ReservationUser } from "../ReservationUser";

/**
 * Contiene los elementos de la sección reserva
 * @returns
 */
export function Reservation() {
  const [userType, setUserType] = useState("owner"); //modificar para visualizar

  const data = [
    {
      parking_id: 1,
      date: "2022-10-10",
      hour: "20:10",
      car: "CAD120",
      userName: "Pedro Martinez",
      status: "Pending",
    },
    {
      parking_id: 2,
      date: "2022-10-15",
      hour: "15:03",
      car: "CAD110",
      userName: "Laura Perez",
      status: "Approved",
    },
  ];

  function SelectUser(props) {
    return (
      <>
        <select
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

  if (userType === "admin") {
    return (
      <>
        <SelectUser />
        <br></br>
        <ReservationAdmin data={data} />
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
        <ReservationOwner data={data} />
      </>
    );
  }
}
