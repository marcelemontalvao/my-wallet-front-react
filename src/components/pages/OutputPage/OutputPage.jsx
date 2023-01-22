import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react"
import Button1 from "../../Button1/Button1"
import Input from "../../Input/Input"
import { OutputPageStyle, FormOutputPage } from "./OutputPageStyles";
import outputSchema from "./OutputSchema";

const OutputPage = () => {
    const [disabled, setDisabled] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(outputSchema),
    })

    const submitFormFunction = async (data) => {
        
    }

    return (
        <OutputPageStyle>
            <FormOutputPage onSubmit={handleSubmit(submitFormFunction)} noValidate>

                <span>Nova saída</span>

                <Input register={register("value")} type="text" name="value" id="value" disabled={disabled} placeholder="Valor" />

                <Input register={register("description")} type="text" name="description" id="description" disabled={disabled} placeholder="Descrição" />

                <Button1 type="submit" text="Salvar saída" disabled={disabled} />

            </FormOutputPage>
        </OutputPageStyle>
    )
}

export default OutputPage;
