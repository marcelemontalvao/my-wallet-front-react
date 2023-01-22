import { useState } from "react";
import Button1 from "../../Button1/Button1";
import Input from "../../Input/Input";

const InputPage = () => {
    const [value, setValue] = useState(undefined)
    const [description, setDescription] = useState(undefined)
    const [disabled, setDisabled] = useState(false)

    return (
        <>
            <span>Nova entrada</span>
            <Input onChange={(e) => setValue(e.target.value)} type="text" name="value" id="value" disabled={disabled} placeholder="Valor" />
            <Input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" disabled={disabled} placeholder="Descrição" />
            <Button1 type="submit" text="Salvar entrada" disabled={disabled} />
        </>
    )
}

export default InputPage;
