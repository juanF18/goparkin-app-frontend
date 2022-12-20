import axios from "axios";

export async function getParkins() {
  console.log(process.env.REACT_APP_BACKENDURL);
  return await axios.get(`http://127.0.0.1:3333/parking`);
}
