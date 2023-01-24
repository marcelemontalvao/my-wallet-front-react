import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterPageStyle, FormRegisterPage } from "./RegisterPageStyles.js"
import { ThreeDots } from "react-loader-spinner"
import { api } from "../../../services/api.js"
import Button1 from "../../Button1/Button1.jsx";
import Input from "../../Input/Input.jsx";
import registerSchema from "./RegisterSchema.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

const RegisterPage = () => {
    const navigate = useNavigate()
    const { register, unregister, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema),
    })
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const onInvalid = (errors) => console.error(errors)

    const submitFormFunctionSignup = async (data) => {
        setLoading(true)
        setDisabled(true)
        try {
            unregister("passwordConfirm")
            const response = await api.post("/signup", data)
            if (response.status === 201) {
                setLoading(false)
                setDisabled(false)
                navigate("/")
            }
        } catch (error) {
            alert("Erro: " + error)
            setLoading(false)
            setDisabled(false)
        }
    }
    
    if (loading) {
        return (
            <RegisterPageStyle>
                <h1>My Wallet</h1>
                <FormRegisterPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignup, onInvalid)}>

                    <Input register={register("name")} type="text"  name="name" id="nameSignup" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input register={register("email")} type="email" name="email" id="emailSignup" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="password" name="password" id="passwordSignup" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input register={register("passwordConfirm")} type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />

                    <Button1 type="submit" text={
                        <ThreeDots
                            height="60"
                            width="60"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />}
                    disabled={disabled} />
                </FormRegisterPage>
                <Link to={"/"}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </RegisterPageStyle>
        )
    } else {
        return (
            <RegisterPageStyle>
                <h1>My Wallet</h1>
                <FormRegisterPage method="POST" onSubmit={handleSubmit(submitFormFunctionSignup, onInvalid)}>
                    <Input register={register("name")} type="text" name="name" id="nameSignup" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input register={register("email")} type="email"  name="email" id="emailSignup" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input register={register("password")} type="password"  name="password" id="passwordSignup" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input register={register("passwordConfirm")} type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />
                    
                    <Button1 type="submit" text="Cadastrar" disabled={disabled} />
                </FormRegisterPage>

                <Link to={"/"}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>
            </RegisterPageStyle>
        )
    }
}

export default RegisterPage;
