import axios from "axios";

export async function storeRegister(
  id_rol,
  name,
  last_name,
  phone,
  email,
  password
) {
  return await axios.post(`${process.env.REACT_APP_BACKENDURL}/people`, {
    id_rol,
    name,
    last_name,
    phone,
    email,
    password,
  });
}
