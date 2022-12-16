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
//---------------------------------------
//peticion Get

//pruebas
export const getRequestReservations = (call) => {
  setTimeout(() => {
    const response = axios.get(
      `${process.env.REACT_APP_BACKENDURL}/reservation`
    );
    call(response);
  }, 200);
};

//produccion
// export const getRequestReservations = (call) => {
//   const response = axios.get(`${process.env.REACT_APP_BACKENDURL}/reservation`);
//   call(response);
// };
//---------------------------------------

export async function deleteRequestReservation(idReservation) {
  await axios
    .delete(`${process.env.REACT_APP_BACKENDURL}/reservation/${idReservation}`)
    .then(function (response) {
      // console.log(response);
      window.location.reload();
      return;
    })
    .catch(function (error) {
      // console.log(error);
      return;
    });
}

// export async function updateRequestReservation(date, hour, plate, id, status) {
//   await axios
//     .put(`${process.env.REACT_APP_BACKENDURL}/reservation/${id}`, {
//       date,
//       hour,
//       plate,
//       status,
//     })
//     .then(function (response) {
//       // console.log(response);
//       window.location.reload();
//       return;
//     })
//     .catch(function (error) {
//       // console.log(error);
//       return;
//     });
// }
