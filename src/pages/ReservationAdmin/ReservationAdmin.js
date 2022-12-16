import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import { UpdateReservationPopUp } from "../../components/Popup/UpdateReservationPopUp";

export function ReservationAdmin({ data, setData }) {
  //si es admin se muestra esta parte

  return (
    <>
      <h3>Admin</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Reservation id</th>

            <th scope="col">Parking id</th>
            <th scope="col">User name</th>
            <th scope="col">Date</th>
            <th scope="col">Hour</th>
            <th scope="col">Plate</th>
            <th scope="col">Status</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                {item.id_parking == null ? (
                  <td>null</td>
                ) : (
                  <td>{item.id_parking}</td>
                )}
                {item.id_user == null ? <td>null</td> : <td>{item.id_user}</td>}
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.plate}</td>
                <td>{item.status}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
                <td>
                  <DeletePopUp title="reservation" id={item.id} />
                </td>
                <td>
                  <UpdateReservationPopUp userType="admin" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
