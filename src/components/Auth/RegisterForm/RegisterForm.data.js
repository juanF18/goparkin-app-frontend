import * as Yup from "yup";
export function initialValuesRegister(type) {
  return !type
    ? {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        vehicle: {
          id_people: "",
          type: "",
          plate: "",
        },
      }
    : {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        parking: {
          id_people: "",
          parking_name: "",
          hour_price_car: "",
          hour_price_motorcycle: "",
          opening_hour: "",
          closing_hour: "",
          open_days: "",
        },
        address: {
          address: "",
          city: "",
          department: "",
          latitude: "",
          longitude: "",
        },
        parkingSpace: {
          spaces_car: "",
          spaces_motorcycle: "",
        },
      };
}

export function validationRegister(type) {
  return !type
    ? Yup.object({
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
      })
    : Yup.object({
        name: Yup.string().required("Es requerido"),
        last_name: Yup.string().required("Es requerido"),
        phone: Yup.number(),
        email: Yup.string()
          .required("Es requerido")
          .email("Tiene que se un email valido"),
        password: Yup.string().required("Es requerida").min(6),
        parking: Yup.object().shape({
          parking_name: Yup.string().required("Es requerido"),
          hour_price_car: Yup.number().required("Es requerido"),
          hour_price_motorcycle: Yup.number().required("Es requerido"),
          opening_hour: Yup.number().required("Es requerido"),
          closing_hour: Yup.number().required("Es requerido"),
          open_days: Yup.number().required("Es requerido"),
        }),
        address: Yup.object().shape({
          adress: Yup.string().required("Es requerido"),
          city: Yup.string().required("Es requerido"),
          department: Yup.string().required("Es requerido"),
          latitude: Yup.string().required("Es requerido"),
          longitude: Yup.string().required("Es requerido"),
        }),
        parkingSpace: Yup.object().shape({
          spaces_car: Yup.number().required("Es requerido"),
          spaces_motorcycle: Yup.number().required("Es requerido"),
        }),
      });
}
