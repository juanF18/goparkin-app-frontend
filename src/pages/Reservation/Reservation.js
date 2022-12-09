/**
 * Contiene los elementos de la sección reserva
 * @returns
 */
export function Reservation() {
  const data = [
    { parking_id: 1, date: new Date().getDate(), car: "CAD120" },
    { parking_id: 2, date: new Date().getDate(), car: "CAD110" },
  ];
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">parking_id</th>
            <th scope="col">Plate</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.parking_id}>
                <td>{item.parking_id}</td>
                <td>{item.car}</td>
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
