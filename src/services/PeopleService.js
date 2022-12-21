import axios from "axios";

export async function getOnePerson(id) {
  await axios
    .get(`process.env.REACT_APP_BACKENDURL/people/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
