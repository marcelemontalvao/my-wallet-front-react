import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { api } from "../../../services/api";
import Button1 from "../../Button1/Button1";
import Input from "../../Input/Input";
import { InputPageStyle, FormInputPage } from "./InputPageStyles";
import inputSchema from "./InputSchema";

const InputPage = () => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(inputSchema),
    })
    const [loading, setLoading] = useState(false);
    const { token } = useContext(UserContext);
    console.log(token)
    
    const submitFormFunction = async (data) => {
        setLoading(true)
        setDisabled(true)
        const transaction = {
            ...data,
            type: "input"
        }
        try {
            const response = await api.post("/transactions", transaction, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })
            console.log(response)
            if (response.status === 201) {
                setLoading(false)
                setDisabled(false)
                navigate("/home")
            }
        } catch (error) {
            console.error(error)
            setLoading(false)
            setDisabled(false)
        }
    }

    return (
        <InputPageStyle>

            <span>Nova entrada</span>

            <FormInputPage onSubmit={handleSubmit(submitFormFunction)}>

                <Input register={register("value")} type="text" name="value" id="value" disabled={disabled} placeholder="Valor" errors={errors.value?.message && <p aria-label="error">{errors.value.message}</p>}  />

                <Input register={register("description")} type="text" name="description" id="description" disabled={disabled} placeholder="Descrição" errors={errors.description?.message && <p aria-label="error">{errors.description.message}</p>}  />

                <Button1 type="submit" text="Salvar entrada" disabled={disabled} />

            </FormInputPage>

        </InputPageStyle>
    )
}

export default InputPage;
