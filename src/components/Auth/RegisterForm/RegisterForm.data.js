import * as Yup from "yup"

// Inicializa los valores por defecto del formulario
export function initialValuesRegister() {
    return {
        name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
    };
}

// Esquema de validación de los campos en el registro
export function validationSchemaRegister() {
    return Yup.object({
        name: Yup.string()
            .required("Name required"),

        last_name: Yup.string()
            .required("Last name required"),

        phone: Yup.string()
            .required("Phone required"),

        email: Yup.string()
            .required("Email required")
            .email(),

        password: Yup.string()
            .required("Password required"),
    });
}
