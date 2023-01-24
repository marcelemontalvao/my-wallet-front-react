import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageStyle, FormLoginPage } from "./LoginPageStyles.js";
import { ThreeDots } from "react-loader-spinner"
import { api } from "../../../services/api.js"
import Button1 from "../../Button1/Button1.jsx";
import Input from "../../Input/Input.jsx";
import loginSchema from "./LoginSchema.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../contexts/UserContext.jsx";

const LoginPage = () => {
    const { submitFormFunction, disabled, loading } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
    })

    if (loading) {
        return (
            <LoginPageStyle>
                <h1>My Wallet</h1>
                <FormLoginPage method="POST" onSubmit={handleSubmit(submitFormFunction)}>
                    <Input register={register("email")} type="email" name="email" id="email" placeholder="E-mail" disabled={disabled} errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />
                    <Input register={register("password")} type="password" name="password" id="password" placeholder="Senha" disabled={disabled} errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />
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
                </FormLoginPage>
                <Link to="/cadastro">
                    <p>Primeira Vez? Cadastre-se!</p>
                </Link>
            </LoginPageStyle>
        )
    } else {
        return (
            <LoginPageStyle>
                <h1>My Wallet</h1>
                <FormLoginPage method="POST" onSubmit={handleSubmit(submitFormFunction)}>
                    <Input register={register("email")} type="email" name="email" id="email" placeholder="E-mail" errors={errors.email?.message && <p aria-label="error">{errors.email.message}</p>} />
                    <Input register={register("password")} type="password" name="password" id="password" placeholder="Senha" errors={errors.password?.message && <p aria-label="error">{errors.password.message}</p>} />
                    <Button1 type="submit" text="Entrar" disabled={disabled} />
                </FormLoginPage>
                <Link to="/cadastro">
                    <p>Primeira Vez? Cadastre-se!</p>
                </Link>
            </LoginPageStyle>
        )
    }
}
export default LoginPage;