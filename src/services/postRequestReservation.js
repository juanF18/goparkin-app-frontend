import axios from "axios";

export async function postRequestReservation(date, hour, plate) {
  await axios
    .post(`${process.env.REACT_APP_BACKENDURL}/reservation`, {
      date,
      hour,
      plate,
    })
    .then(function (response) {
      // console.log(response);
      return;
    })
    .catch(function (error) {
      // console.log(error);
      return;
    });
}
