import * as yup from "yup"

const outputSchema = yup.object().shape({
    value: yup
        .number()
        .required("O valor é obrigatório"),
    description: yup
        .string()
        .required("A descrição é obrigatória.")
        .max(12)
})

export default outputSchema;