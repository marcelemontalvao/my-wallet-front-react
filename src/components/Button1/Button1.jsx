import { Button1Style } from "./Button1Styles";

const Button1 = ({type, text, disabled}) => {
    return <Button1Style type={type} disabled={disabled}>{text}</Button1Style>
}

export default Button1;
