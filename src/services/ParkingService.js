import axios from "axios";

export async function storeParking(parking, address, parkingSpace, document) {
  return await axios.post(`${process.env.REACT_APP_BACKENDURL}/parking`, {
    parking,
    address,
    parkingSpace,
    document
  });
}
