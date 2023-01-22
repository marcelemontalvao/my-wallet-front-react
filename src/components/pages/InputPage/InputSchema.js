import * as yup from "yup"

const inputSchema = yup.object().shape({
    value: yup
        .string()
        .required("O valor é obrigatório"),
    description: yup
        .string()
        .required("A descrição é obrigatória.")
})

export default inputSchema;