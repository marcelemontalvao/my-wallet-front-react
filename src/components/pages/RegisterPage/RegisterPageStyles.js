import styled from "styled-components";

export const RegisterPageStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 15px;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }

    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
    }
`

export const FormRegisterPage = styled.form`
    max-width: 375px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
`