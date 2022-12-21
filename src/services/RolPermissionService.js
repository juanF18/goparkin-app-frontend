import axios from "axios";

/*
export async function rolPermissionGetByRoleId(rol_id) {
  await axios
    .get(`${process.env.REACT_APP_BACKENDURL}/rol_permission/${rol_id}`)
    .then((res) => {
      console.log(res);
      call(res);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
*/
export const rolPermissionGetByRoleId = (call) => {
     const response = axios
    .get(`${process.env.REACT_APP_BACKENDURL}/rol_permission/${1}`)
     call(response);
   }

export async function storeRolePermission(id_rol, id_permission) {
  await axios
  .post(`${process.env.REACT_APP_BACKENDURL}/rol_permission`, {
      id_rol,
      id_permission
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

export function deleteRolePermission(id) {
  return new Promise((resolve, reject) => {
    resolve(
      axios.delete(`${process.env.REACT_APP_BACKENDURL}/rol_permission/${id}`)
    );
  });
}

export function deleteRolePermission2(id) {
  return new Promise((resolve, reject) => {
    resolve(
      axios.delete(`${process.env.REACT_APP_BACKENDURL}/rol_permission/${id}`)
    );
  });
}


