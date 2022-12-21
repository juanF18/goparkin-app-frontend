import axios from "axios";

export const getRequestRols = (call) => {
  const response = axios.get(`${process.env.REACT_APP_BACKENDURL}/people`);
  call(response);
};

// export const getRequestRols = (call) => {
//   setTimeout(() => {
//     const response = axios.get(`${process.env.REACT_APP_BACKENDURL}/people`);
//     call(response);
//   }, 200);
// };
