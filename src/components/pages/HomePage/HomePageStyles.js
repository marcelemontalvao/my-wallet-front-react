import styled from "styled-components";

export const HomePageStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    height: 100vh;

    .first-div {
        max-width: 325px;
        width: 100%;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
    }

    .second-div {
        max-width: 325px;
        width: 100%;
        max-height: 446px;
        height: 100%;
        display: flex;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        color: #868686;
        border-radius: 5px;
    }

    .third-div {
        max-width: 325px;
        width: 100%;
        max-height: 114px;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    .third-div button {
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        width: 156px;
        max-height: 114px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .third-div button span {
        width: 40px;
        margin-left: 5px;      
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }

    .another-div {
        max-width: 310px;
        width: 100%;
        max-height: 440px;
        height: 100%;
        display: flex;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        color: #868686;
        border-radius: 5px;
        padding: 15px;
    }

    .transaction {
        width: 310px;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    .date {
        color: #C6C6C6;
    }

    .input {
        color: #03AC00;
    }

    .output {
        color: #C70000;
    }

    .bold {
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }
`