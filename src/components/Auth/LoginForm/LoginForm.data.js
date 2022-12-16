import * as Yup from "yup";

export function initalValuesLogin() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchemaLogin() {
  return Yup.object({
    email: Yup.string()
      .email("It is a not a valid email")
      .required("Email required"),
    password: Yup.string().required("Password Required"),
  });
}
