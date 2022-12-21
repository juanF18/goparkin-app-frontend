import * as Yup from "yup"

// Inicializa los valores por defecto del formulario
export function initialValuesVehicle() {
    return {
        parking_name: "",
        address: "",
        department: "",
        city: "",
        car_places: "",
        motorcycle_places: "",
        opening_hour: "",
        closing_hour: "",
        open_days: "",
    };
}

// Esquema de validación de los campos del parqueadero
export function validationSchemaVehicle() {
    return Yup.object({

        parking_name: Yup.string()
            .required("Parking name required"),

        address: Yup.string()
            .required("Address required"),

        department: Yup.string()
            .required("Department required"),

        city: Yup.string()
            .required("City required"),

        car_places: Yup.number()
            .required("Car places required"),

        motorcycle_places: Yup.number()
            .required("Motorcycle places required"),

        opening_hour: Yup.number()
            .required("Opening hour required"),

        closing_hour: Yup.number()
            .required("Closing hour required"),

        open_days: Yup.string()
            .required("Open days required"),
    });
}
