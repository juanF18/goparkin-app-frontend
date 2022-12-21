import * as Yup from "yup";
export function initialValuesRegister(type) {
  return type
    ? {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
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
          adress: "",
          city: "",
          department: "",
          latitude: "",
          longitude: "",
        },
        parkingSpace: {
          spaces_car: "",
          spaces_motorcycle: "",
          available_spaces_car: "",
          available_spaces_motorcycle: "",
        },
      }
    : {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
        vehicle: {
          id_people: "",
          type: "",
          plate: "",
        },
      };
}

export function validationRegister(type) {
  return type
    ? Yup.object({
        name: Yup.string().required("Is required"),
        last_name: Yup.string().required("Is required"),
        phone: Yup.number().required("Is required").min(10).positive("Only positive numbers"),
        email: Yup.string()
          .required("Is required")
          .email("Invalid format Email"),
        password: Yup.string().required("Is required").min(6),
        confirm_password: Yup.string().required("Is required").oneOf([Yup.ref("password"), null], "Passwords must match"),

        parking: Yup.object().shape({
          parking_name: Yup.string().required("Is required"),
          hour_price_car: Yup.number().required("Is required").positive("Only positive numbers"),
          hour_price_motorcycle: Yup.number().required("Is required").positive("Only positive numbers"),
          opening_hour: Yup.string().required("Is required"),
          closing_hour: Yup.string().required("Is required"),
        }),

        parkingSpace: Yup.object().shape({
          spaces_car: Yup.number().required("Is required").positive("Only positive numbers"),
          spaces_motorcycle: Yup.number().required("Is required").positive("Only positive numbers"),
          available_spaces_car: Yup.number(),
          available_spaces_motorcycle: Yup.number(),
        }),

        address: Yup.object().shape({
          adress: Yup.string(),
          city: Yup.string(),
          department: Yup.string(),
          latitude: Yup.string(),
          longitude: Yup.string(),
        }),
      })
    : Yup.object({
        name: Yup.string().required("Is required"),
        last_name: Yup.string().required("Is required"),
        phone: Yup.number().required("Is required").min(10).positive("Only positive numbers"),
        email: Yup.string()
          .required("Is required")
          .email("Invalid format Email"),
        password: Yup.string().required("Is required").min(6),
        confirm_password: Yup.string().required("Is required").oneOf([Yup.ref("password"), null], "Passwords must match"),

        vehicle: Yup.object().shape({
          type: Yup.string().required("Is required"),
          plate: Yup.string().required("Is required"),
        }),
      });
}
