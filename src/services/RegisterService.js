import axios from "axios";

export async function storeRegister(id_rol, name, last_name, phone, email, password) {
    await axios
    .post(`${process.env.REACT_APP_BACKENDURL}/people`, {
        id_rol,
        name,
        last_name,
        phone,
        email,
        password,
    })
    .then(function(response){
        console.log(response.data.id);
        return response.data.id;
    })
    .catch(function(error){
        console.log(error);
        return;
    });
}
