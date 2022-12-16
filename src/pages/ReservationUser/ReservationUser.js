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
                <td>
                  <DeletePopUp title="reservation" id={item.id} />
                </td>
                <td>
                  <UpdateReservationPopUp
                    userType="user"
                    date={item.date}
                    hour={item.hour}
                    plate={item.plate}
                    id={item.id}
                    status={item.status}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
