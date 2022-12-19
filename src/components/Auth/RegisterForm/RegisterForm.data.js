import * as Yup from "yup";
import { string } from "yup/lib/locale";
export function initialValuesRegister() {
  return {
    name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    vehicle: {
      type: "",
      plate: "",
    },
  };
}

export function validationRegister() {
  return Yup.object({
    name: Yup.string().required("Es requerido"),
    last_name: Yup.string().required("Es requerido"),
    phone: Yup.number(),
    email: Yup.string()
      .required("Es requerido")
      .email("Tiene que se un email valido"),
    password: Yup.string().required("Es requerida").min(6),
    vehicle: Yup.object().shape({
      type: Yup.string().required("Es requerido"),
      plate: Yup.string().required("Es requerido"),
    }),
  });
}
