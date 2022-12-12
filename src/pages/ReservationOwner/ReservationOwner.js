export function ReservationOwner({ data }) {
  return (
    <>
      <h3>Owner</h3>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">parking_id</th> */}
            <th scope="col">User name</th>
            <th scope="col">Date</th>
            <th scope="col">Hour</th>
            <th scope="col">Plate</th>

            <th scope="col">Delete</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.parking_id}>
                <td>{item.userName}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.car}</td>

                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>

                {item.status === "Pending" ? (
                  <td>
                    <button className="btn btn-warning">{item.status}</button>
                  </td>
                ) : (
                  <td>
                    <button className="btn btn-success">{item.status}</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
