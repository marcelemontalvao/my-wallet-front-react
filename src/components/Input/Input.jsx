import { InputStyle, Inputs } from "./InputStyles";

const Input = ({ register, errors, placeholder, disabled, ...rest }) => {
    return (
        <InputStyle>
            <Inputs {...register} disabled={disabled} placeholder={placeholder} {...rest} />
            {errors}
        </InputStyle>
    )
}

export default Input;