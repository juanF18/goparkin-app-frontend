import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import { UpdateReservationPopUp } from "../../components/Popup/UpdateReservationPopUp";

export function ReservationUser({ data }) {
  return (
    <>
      <h3>User</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">parking_id</th>
            <th scope="col">User name</th>
            <th scope="col">Date</th>
            <th scope="col">Hour</th>
            <th scope="col">Plate</th>
            <th scope="col">Status</th>

            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.parking_id}</td>
                <td>{item.userName}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.car}</td>
                <td>{item.status}</td>

                <td>
                  <DeletePopUp title="reservation" />
                </td>
                <td>
                  <UpdateReservationPopUp userType="user" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
