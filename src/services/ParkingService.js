import axios from "axios";

export async function storeParking(parking, address, parkingSpace, document) {
  return await axios.post(`${process.env.REACT_APP_BACKENDURL}/parking`, {
    parking,
    address,
    parkingSpace,
    document,
  });
}
export async function getParkins() {
  return await axios.get(`${process.env.REACT_APP_BACKENDURL}/parking`);
}
