import axios from "axios";

export async function getParkingDocuments() {
  return await axios.get(
    `${process.env.REACT_APP_BACKENDURL}/parking-document`
  );
}
