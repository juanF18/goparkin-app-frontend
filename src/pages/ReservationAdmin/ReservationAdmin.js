import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import { UpdateReservationPopUp } from "../../components/Popup/UpdateReservationPopUp";
import { Badge } from "react-bootstrap";

export function ReservationAdmin({ data, setData }) {
  //si es admin se muestra esta parte

  return (
    <>
      <h3>Admin</h3>

      <table
        style={{ marginTop: "20px", textAlign: "center" }}
        className="table table-striped table-bordered"
      >
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
                {item.id_people == null ? (
                  <td>null</td>
                ) : (
                  <td>{item.id_people}</td>
                )}
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
                <td>{item.created_at.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</td>
                <td>{item.updated_at.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</td>
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
                    userType="admin"
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
