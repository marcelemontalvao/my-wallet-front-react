import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageStyle, FormLoginPage } from "./LoginPageStyles.js";
import { ThreeDots } from  "react-loader-spinner"
import { api } from "../../../services/api.js"
import Button1 from "../../Button1/Button1.jsx";
import Input from "../../Input/Input.jsx";

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleInputs = (e) => {
        e.preventDefault();

        async function newUser() {
            setLoading(true)
            setDisabled(true)
            try {
                const response = await api.post("/login", {email, password})
                if(response.status === 200) {
                    setLoading(false)
                    setDisabled(false)
                    navigate("/home")
                }
            } catch (error) {
                alert("Erro: " + error)
                setLoading(false)
                setDisabled(false)
            }
        }
        newUser()
    }

    if(loading) {
        return (
            <LoginPageStyle>
                <h1>My Wallet</h1>
                <FormLoginPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" disabled={disabled} />
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Senha" disabled={disabled} />
                    <Button1 type={"submit"} text={
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
                    disabled={disabled}/>
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
                <FormLoginPage method="POST" onSubmit={(e) => handleInputs(e)}>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-mail" />
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Senha" />
                    <Button1 type={"submit"} text="Entrar" disabled={disabled}/>
                </FormLoginPage>
                <Link to="/cadastro">
                    <p>Primeira Vez? Cadastre-se!</p>
                </Link>
            </LoginPageStyle>
        )
    }
}

export default LoginPage;
