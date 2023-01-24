import * as yup from "yup"

const outputSchema = yup.object().shape({
    value: yup
        .string()
        .required("O valor é obrigatório"),
    description: yup
        .string()
        .required("A descrição é obrigatória.")
        .max(10)
})

export default outputSchema;