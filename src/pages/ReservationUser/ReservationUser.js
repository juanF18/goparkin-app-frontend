import { Badge } from "react-bootstrap";
import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import { UpdateReservationPopUp } from "../../components/Popup/UpdateReservationPopUp";

export function ReservationUser({ data, setData }) {
  return (
    <>
      <h3>User</h3>
      <table
        style={{ marginTop: "20px", textAlign: "center" }}
        className="table table-striped table-bordered"
      >
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
                <td>{item.date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</td>
                <td>{item.hour}</td>
                <td>{item.plate}</td>
                {item.status.toLowerCase() == "pending" ? (
                  <td>
                    <Badge style={{ width: "80px" }} bg="warning" text="dark">
                      {item.status}
                    </Badge>
                  </td>
                ) : (
                  <td>
                    <Badge style={{ width: "80px" }} bg="success">
                      {item.status}
                    </Badge>
                  </td>
                )}
                <td>
                  <DeletePopUp
                    title="reservation"
                    id={item.id}
                    data={data}
                    setData={setData}
                  />
                </td>
                <td>
                  <UpdateReservationPopUp
                    userType="user"
                    date={item.date}
                    hour={item.hour}
                    plate={item.plate}
                    id={item.id}
                    status={item.status}
                    id_people={item.id_people}
                    id_parking={item.id_parking}
                    data={data}
                    setData={setData}
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
