import axios from "axios";

export async function LoginRequest(email, password) {
  await axios
    .post(`${process.env.REACT_APP_BACKENDURL}/login`, {
      email,
      password,
      "Content-Type": "application/json",
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token.token);
      localStorage.setItem("typeUser", res.data.user.rol.name);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
export async function LogoutRequest() {
  await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKENDURL}/logout`,
    data: "",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      localStorage.removeItem("token");
      localStorage.removeItem("typeUser");
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export async function ForgotPasswordRequest(email) {
  return await axios.post(`${process.env.REACT_APP_BACKENDURL}/forgot`, {
    email,
  });
}
