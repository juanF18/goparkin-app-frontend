import React, { useState } from "react";
import { Form, Button, InputGroup, Table, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
//import { initalValuesLogin, validationSchemaLogin } from "./LoginForm.data";
import { deleteRolePermission, rolPermissionGetByRoleId, storeRolePermission } from "../../../services";
import "./PermissionsAdminForm.css";
import { useEffect } from "react";
import axios from "axios";

export function PermissionsAdminForm() {
  const navigate = useNavigate();
  let mapa;
  let permissions;
  let rolesPermsIds;

  //Estados de los checkboxes
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);
  const [isChecked13, setIsChecked13] = useState(false);
  const [isChecked14, setIsChecked14] = useState(false);
  const [isChecked15, setIsChecked15] = useState(false);
  const [isChecked16, setIsChecked16] = useState(false);

  const [role, setRole] = useState(1);
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);

  /**
   * Función que realiza el llamado al endpoint de le obtener los roles_permision
   * por rol y finalmente setea los estados correspondientes a cada id_permission
   * @param {*} rol_id 
   */
  const getData = async (rol_id) => {


    //const data = await servo.getpersosd(rol_id);
    const data = await axios
      .get(`${process.env.REACT_APP_BACKENDURL}/rol_permission/${role}`)
      .then(function (response) {
        // handle success
        return response.data;
        //setData(response.data)
      })
      console.log(data)
     
      mapa = [...data]
      console.log("mapa: ")
      console.log(mapa)

      mapa.forEach(element => {
        console.log("----------")
        console.log(element.id_permission)
        //permissions.push(element.id_permission)
        //rolesPermsIds.push(element.id)

        switch (element.id_permission) {
            case 1:
                setIsChecked1((prev)=> !prev)
                break;
            case 2:
                setIsChecked2((prev)=> !prev)
                break;

            case 3:
                setIsChecked3((prev)=> !prev)
                break;

            case 4:
                setIsChecked4((prev)=> !prev)
                break;

            case 5:
                setIsChecked5((prev)=> !prev)
                break;

            case 6:
                setIsChecked6((prev)=> !prev)
                break;

            case 7:
                setIsChecked7((prev)=> !prev)
                break;

            case 8:
                setIsChecked8((prev)=> !prev)
                break;

            case 9:
                setIsChecked9((prev)=> !prev)
                break;

            case 10:
                setIsChecked10((prev)=> !prev)
                break;

            case 11:
                setIsChecked11((prev)=> !prev)
                break;

            case 12:
                setIsChecked12((prev)=> !prev)
                break;

            case 13:
                setIsChecked13((prev)=> !prev)
                break;

            case 14:
                setIsChecked14((prev)=> !prev)
                break;

            case 15:
                setIsChecked15((prev)=> !prev)
                break;

            case 16:
                setIsChecked16((prev)=> !prev)
                break;
        
        
            default:
                break;
        }
        
    });

   
    

      //setDAta
    
      
  };
  //Se ejecuta cuando carga por primera vez y cuando se cambia el rol en el select
  useEffect(() => {
    // Hace una solicitud para un rolPermission con un rol_id dado
   getData(role);
    
  }, [role]);

  /**
   * Función que realiza el deschequeo de todas las casillas cuando
   * se cambia el rol en el select
   */
  function uncheckAll()
  {
    setIsChecked1(false)
    setIsChecked2(false)
    setIsChecked3(false)
    setIsChecked4(false)
    setIsChecked5(false)
    setIsChecked6(false)
    setIsChecked7(false)
    setIsChecked8(false)
    setIsChecked9(false)
    setIsChecked10(false)
    setIsChecked11(false)
    setIsChecked12(false)
    setIsChecked13(false)
    setIsChecked14(false)
    setIsChecked15(false)
    setIsChecked16(false)
  }

  function deleteAllRolesPerms()
  {
    rolesPermsIds.forEach(element => {
        deleteRolePermission(element)
    });
  }

  function postRolePermission(role) {

    //deleteAllRolesPerms()

     
    if(isChecked1==true)
    {
        storeRolePermission(role, 1)
    }

    if(isChecked2==true)
    {
        storeRolePermission(role, 2)
    }

    if(isChecked3==true)
    {
        storeRolePermission(role, 3)
    }
    
    if(isChecked4==true)
    {
        storeRolePermission(role, 4)
    }

    if(isChecked5==true)
    {
        storeRolePermission(role, 5)
    }

    if(isChecked6==true)
    {
        storeRolePermission(role, 6)
    }

    if(isChecked7==true)
    {
        storeRolePermission(role, 7)
    }

    
    if(isChecked8==true)
    {
        storeRolePermission(role, 8)
    }
    

    if(isChecked9==true)
    {
        storeRolePermission(role, 9)
    }

    if(isChecked10==true)
    {
        storeRolePermission(role, 10)
    }

    if(isChecked11==true)
    {
        storeRolePermission(role, 11)
    }

    if(isChecked12==true)
    {
        storeRolePermission(role, 12)
    }

    if(isChecked13==true)
    {
        storeRolePermission(role, 13)
    }

    if(isChecked14==true)
    {
        storeRolePermission(role, 14)
    }

    if(isChecked15==true)
    {
        storeRolePermission(role, 15)
    }

    if(isChecked16==true)
    {
        storeRolePermission(role, 16)
    }
    
  }

  /*
    console.log("role: ")
    console.log(role)
    console.log("data: ")
    console.log(data)
*/
  /*
    map = [...data]
    console.log("map: ")
    console.log(map)

    map.forEach(element => {
        console.log("----------")
        console.log(element.id_permission)
        permissions.push(element.id_permission)
        
    });

    console.log("permissions: ");
    console.log(permissions)
    */

  /*
    const onChangeRole = (e) => {
        setRole(e.target.value)
        //console.log("Funciona cambio de roles")
        //console.log(role)
        console.log("Target value")
        console.log(e.target.value)
        console.log("--------------")
        console.log("Role value")
        console.log(role)
        
        
        //map = rolPermissionGetByRoleId(e.target.value);
        //console.log(map)

    };
    */

  /*
    const onChangeType = () => {
        setOwnerOrUser((prevState) => !prevState);
      };

    */

  /*
    const onLoadDropD = (e) => {
        
        console.log("Funciona la carga del dropD")
        //console.log(role)
        
        
        rolPermissionGetByRoleId(role);

    };
    */

  //rolPermissionGetByRoleId(role);

  /*
    const formik = useFormik({
        initialValues: initalValuesLogin(),
        validationSchema: validationSchemaLogin(),
        validateOnChange: false,
        onSubmit: async (formValues) => {
          try {
            await LoginRequest(formValues.email, formValues.password);
            navigate("/");
          } catch (error) {
            alert(error + "Error al iniciar sesion");
          }
        },
      });
      */

  return (
    <Form>
      <h2 className="title-PermissionsAdmin">Permissions Management</h2>

      <Form.Group as={Col}>
        <Form.Label>Select Role</Form.Label>
        <Form.Select value={role} onChange={(e) => {setRole(e.target.value)
        uncheckAll()
        }}>
          <option value="1">Client</option>
          <option value="2">Owner</option>
          <option value="3">Admin</option>
        </Form.Select>
      </Form.Group>

      <div className="list-permission">
        <Table style={{ textAlign: "center" }} striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Create</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Client</td>
              <td>
                <Form.Check
                  inline
                  name="Permission1"
                  label=""
                  value={"1"}
                  type="checkbox"
                  checked = {isChecked1}
                  onChange={() => setIsChecked1((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission2"
                  label=""
                  value={"2"}
                  type="checkbox"
                  checked = {isChecked2}
                  onChange={() => setIsChecked2((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission3"
                  label=""
                  value={"3"}
                  type="checkbox"
                  checked = {isChecked3}
                  onChange={() => setIsChecked3((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission4"
                  label=""
                  value={"4"}
                  type="checkbox"
                  checked = {isChecked4}
                  onChange={() => setIsChecked4((prev) => !prev)}
                />
              </td>
            </tr>
            <tr>
              <td>Vehicle</td>
              <td>
                <Form.Check
                  inline
                  name="Permission5"
                  label=""
                  value={"5"}
                  type="checkbox"
                  checked = {isChecked5}
                  onChange={() => setIsChecked5((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission6"
                  label=""
                  value={"6"}
                  type="checkbox"
                  checked = {isChecked6}
                  onChange={() => setIsChecked6((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission7"
                  label=""
                  value={"7"}
                  type="checkbox"
                  checked = {isChecked7}
                  onChange={() => setIsChecked7((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission8"
                  label=""
                  value={"8"}
                  type="checkbox"
                  checked = {isChecked8}
                  onChange={() => setIsChecked8((prev) => !prev)}
                />
              </td>
            </tr>
            <tr>
              <td>Parking</td>
              <td>
                <Form.Check
                  inline
                  name="Permission9"
                  label=""
                  value={"9"}
                  type="checkbox"
                  checked = {isChecked9}
                  onChange={() => setIsChecked9((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission10"
                  label=""
                  value={"10"}
                  type="checkbox"
                  checked = {isChecked10}
                  onChange={() => setIsChecked10((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission11"
                  label=""
                  value={"11"}
                  type="checkbox"
                  checked = {isChecked11}
                  onChange={() => setIsChecked11((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission12"
                  label=""
                  value={"12"}
                  type="checkbox"
                  checked = {isChecked12}
                  onChange={() => setIsChecked12((prev) => !prev)}
                />
              </td>
            </tr>
            <tr>
              <td>Reservation</td>
              <td>
                <Form.Check
                  inline
                  name="Permission13"
                  label=""
                  value={"13"}
                  type="checkbox"
                  checked = {isChecked13}
                  onChange={() => setIsChecked13((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission14"
                  label=""
                  value={"14"}
                  type="checkbox"
                  checked = {isChecked14}
                  onChange={() => setIsChecked14((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission15"
                  label=""
                  value={"15"}
                  type="checkbox"
                  checked = {isChecked15}
                  onChange={() => setIsChecked15((prev) => !prev)}
                />
              </td>
              <td>
                <Form.Check
                  inline
                  name="Permission16"
                  label=""
                  value={"16"}
                  type="checkbox"
                  checked = {isChecked16}
                  onChange={() => setIsChecked16((prev) => !prev)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Button className="btn-PermissionsAdmin" variant="success" type="submit">
        Save
      </Button>

      <Button className="btn-PermissionsAdmin" variant="danger" type="submit">
        Cancel
      </Button>
    </Form>
  );
}
