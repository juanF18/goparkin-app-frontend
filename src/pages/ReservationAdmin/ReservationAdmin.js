export function ReservationAdmin({ data }) {
  //si es admin se muestra esta parte
  return (
    <>
      <h3>Admin</h3>

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
              <tr key={item.parking_id}>
                <td>{item.parking_id}</td>
                <td>{item.userName}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.car}</td>
                <td>{item.status}</td>

                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
