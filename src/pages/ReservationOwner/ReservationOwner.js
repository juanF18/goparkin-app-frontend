import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DeletePopUp } from "../../components/Popup/DeletePopUp";
import "./ReservationOwner.css";

export function ReservationOwner({ data, setData }) {
  function StatusButton(props) {
    const [content, setContent] = useState(props.status);
    console.log("status", content);

    function handle(content) {
      let content1 = "";
      if (content == "Pending") {
        content1 = "Approved";
        setContent(content1);
      } else {
        content1 = "Pending";
        setContent(content1);
      }
      const month = props.date[5] + props.date[6];
      const day = props.date[8] + props.date[9];
      const year =
        props.date[0] + props.date[1] + props.date[2] + props.date[3];
      const formatoDate = `${year}/${month}/${day}`; //para poner en el campo date, ya que si no tiene este formato genera error
      //en otra iteración pasar esta función a ReservationService
      axios
        .put(`${process.env.REACT_APP_BACKENDURL}/reservation/${props.id}`, {
          plate: props.plate,
          hour: props.hour,
          date: formatoDate,
          status: content1,
        })
        .then(function (response) {
          return;
        })
        .catch(function (error) {
          return;
        });
    }
    if (content === "Pending") {
      return (
        <Button
          variant="warning"
          onClick={() => handle(content)}
          style={{ width: "100px" }}
        >
          {content}
        </Button>
      );
    } else {
      return (
        <Button
          variant="success"
          onClick={() => handle(content)}
          style={{ width: "100px" }}
        >
          {content}
        </Button>
      );
    }
  }

  return (
    <>
      <table
        style={{ marginTop: "20px", textAlign: "center" }}
        className="table table-striped table-bordered"
      >
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
                {item.id_user == null ? <td>null</td> : <td>{item.id_user}</td>}
                <td>{item.date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</td>
                <td>{item.hour}</td>
                <td>{item.plate}</td>

                <td>
                  <DeletePopUp
                    title="reservation"
                    id={item.id}
                    data={data}
                    setData={setData}
                  />
                </td>
                <td>
                  <StatusButton
                    status={item.status}
                    date={item.date}
                    hour={item.hour}
                    plate={item.plate}
                    id={item.id}
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
