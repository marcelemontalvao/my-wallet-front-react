import { RegisterPageStyle, FormRegisterPage } from "./RegisterPageStyles.js"
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner"
import { api } from "../../../services/api.js"
import Button1 from "../../Button1/Button1.jsx";
import Input from "../../Input/Input.jsx";
import registerSchema from "./RegisterSchema.js";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const navigate = useNavigate()
    const { register, unregister, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema),
    })
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const submitFormFunction = async (data) => {
        setLoading(true)
        setDisabled(true)
        try {
            const response = await api.post("/sign-up", data)
            if (response.statusText === "Created") {
                unregister("passwordConfirm")
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

                <FormRegisterPage method="POST" onSubmit={handleSubmit(submitFormFunction)} noValidate>

                    <Input type="text" register={register("name")} name="name" id="name" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input type="email" register={register("email")} name="email" id="email" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input type="password" register={register("password")} name="password" id="password" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input type="password" register={register("passwordConfirm")} name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />

                    <Button1 type="submit" disabled={disabled} text={
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
                    />

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

                <FormRegisterPage method="POST" onSubmit={handleSubmit(submitFormFunction)} noValidate>

                    <Input type="text" register={register("name")} name="name" id="name" placeholder="Nome" disabled={disabled} errors={errors.name?.message && <p aria-label="error">{errors.name.message}</p>} />

                    <Input type="email" register={register("email")} name="email" id="email" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />

                    <Input type="password" register={register("password")} name="password" id="password" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />

                    <Input type="password" register={register("passwordConfirm")} name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" disabled={disabled} errors={errors.passwordConfirm?.message && <p aria-label="error">{errors.passwordConfirm.message}</p>} />
                    <Button1 type={"submit"} text="Cadastrar" disabled={disabled} />

                </FormRegisterPage>

                <Link to={"/"}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>

            </RegisterPageStyle>
        )
    }
}

export default RegisterPage;
