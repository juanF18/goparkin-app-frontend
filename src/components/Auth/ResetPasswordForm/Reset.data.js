import * as Yup from "yup";

export function intialValuesResetPassword() {
  return {
    email: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("It is no a valid email")
      .required("Emails required"),
  });
}
