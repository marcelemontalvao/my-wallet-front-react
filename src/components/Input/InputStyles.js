import styled from "styled-components";


export const InputStyle = styled.div`
    max-width: 326px;
    width: 100%;
    max-height: 80px; 
    border-radius: 5px;

    p {
        padding-top: 8px;
        color: #fff;
    }
`

export const Inputs = styled.input`
    max-width: 350px;
    width: 100%;
    height: 58px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-weight: 300;
    border: none;

    ::placeholder {
        font-weight: 300;
        padding-left: 15px;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`