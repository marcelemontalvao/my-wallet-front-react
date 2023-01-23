import * as yup from "yup"

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório.")
        .min(3, "O nome deve ter pelo menos 3 caracteres!")
        .max(200, "O nome deve ter no máximo 200 caracteres!"),
    email: yup
        .string()
        .required("O email é obrigatório")
        .email("É necessário fornecer um email correto"),
    password: yup
        .string()
        .required("A senha é obrigatória.")
        .matches(/.{8,}/, "A senha deve ter no mínimo 8 caracteres")
        .matches(/(?=.*?[A-Z])/, "A senha deve ter no mínimo 1 letra maiúscula")
        .matches(/(?=.*?[a-z])/, "A senha deve ter no mínimo 1 letra minúscula")
        .matches(/(?=.*?[0-9])/, "A senha deve ter no mínimo 1 número")
        .matches(/(?=.*?[#?!@$%^&*-])/, "A senha deve ter no mínimo um símbolo"),
    passwordConfirm: yup
        .string()
        .required("Você deve confirmar sua senha.")
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
})

export default registerSchema;