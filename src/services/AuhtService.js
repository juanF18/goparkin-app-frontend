import axios from "axios";

export async function LoginRequest(email, password) {
  await axios
    .post(`${process.env.REACT_APP_BACKENDURL}/login`, {
      email,
      password,
      "Content-Type": "application/json",
    })
    .then((res) => {
      console.log("Info que me llega");
      console.log(res);
      //console.log("el rol que me llega");
      //console.log(res.data.rol.name);
      return;
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}
