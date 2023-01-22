import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button1 from "../../Button1/Button1";
import Input from "../../Input/Input";
import { InputPageStyle, FormInputPage } from "./InputPageStyles";
import inputSchema from "./InputSchema";

const InputPage = () => {
    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(inputSchema),
    })

    const submitFormFunction = async (data) => {
        
    }

    return (
        <InputPageStyle>

            <span>Nova entrada</span>

            <FormInputPage onSubmit={handleSubmit(submitFormFunction)} noValidate>

                <Input register={register("value")} type="text" name="value" id="value" disabled={disabled} placeholder="Valor" errors={errors.value?.message && <p aria-label="error">{errors.value.message}</p>}  />

                <Input register={register("description")} type="text" name="description" id="description" disabled={disabled} placeholder="Descrição" errors={errors.description?.message && <p aria-label="error">{errors.description.message}</p>}  />

                <Button1 type="submit" text="Salvar entrada" disabled={disabled} />

            </FormInputPage>

        </InputPageStyle>
    )
}

export default InputPage;
