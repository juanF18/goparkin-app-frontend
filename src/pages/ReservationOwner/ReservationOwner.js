import { useState } from "react";
import { Button } from "react-bootstrap";
import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import "./ReservationOwner.css";

export function ReservationOwner({ data, setData }) {
  function StatusButton(props) {
    const [content, setContent] = useState(props.content);
    function handle() {
      content === "Pending" ? setContent("Approved") : setContent("Pending");
    }
    if (content === "Pending") {
      return (
        <Button variant="warning" onClick={handle}>
          {content}
        </Button>
      );
    } else {
      return (
        <Button variant="success" onClick={handle}>
          {content}
        </Button>
      );
    }
  }

  return (
    <>
      <h3>Owner</h3>
      <table className="table">
        <thead>
          <tr>
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
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.date}</td>
                <td>{item.hour}</td>
                <td>{item.car}</td>

                <td>
                  <DeletePopUp title="reservation" />
                </td>
                <td>
                  <StatusButton content={item.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
