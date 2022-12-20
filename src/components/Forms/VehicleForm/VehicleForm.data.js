import * as Yup from "yup"

// Inicializa los valores por defecto del formulario
export function initialValuesVehicle() {
    return {
        plate: "",
    };
}

// Esquema de validación de los campos del vehículo
export function validationSchemaVehicle() {
    return Yup.object({

        plate: Yup.string()
            .required("Plate required"),
    });
}
