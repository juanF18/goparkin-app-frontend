import axios from "axios";

export async function storeVehicle(id_people, type, plate) {
  return await axios.post(`${process.env.REACT_APP_BACKENDURL}/vehicle`, {
    id_people,
    type,
    plate,
  });
}
