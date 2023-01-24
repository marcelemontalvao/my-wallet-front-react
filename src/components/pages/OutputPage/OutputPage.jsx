import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react"
import Button1 from "../../Button1/Button1"
import Input from "../../Input/Input"
import { OutputPageStyle, FormOutputPage } from "./OutputPageStyles";
import outputSchema from "./OutputSchema";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

const OutputPage = () => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(outputSchema),
    })
    const [loading, setLoading] = useState(false)
    const { token } = useContext(UserContext);

    const submitFormFunction = async (data) => {
        setLoading(true)
        setDisabled(true)
        const transaction = {
            ...data,
            type: "output"
        }
        try {
            const response = await api.post("/transactions", transaction, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            if (response.status === 201) {
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

    return (
        <OutputPageStyle>
            <FormOutputPage onSubmit={handleSubmit(submitFormFunction)}>

                <span>Nova saída</span>

                <Input register={register("value")} type="text" name="value" id="value" disabled={disabled} placeholder="Valor" />

                <Input register={register("description")} type="text" name="description" id="description" disabled={disabled} placeholder="Descrição" />

                <Button1 type="submit" text="Salvar saída" disabled={disabled} />

            </FormOutputPage>
        </OutputPageStyle>
    )
}

export default OutputPage;
