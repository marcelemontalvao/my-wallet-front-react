import { InputStyle } from "./InputStyles";

const Input = ({onChange, type, name, id, placeholder, disabled}) => {
    return <InputStyle onChange={onChange} name={name} id={id} type={type} disabled={disabled} placeholder={placeholder} required/>
}

export default Input;
