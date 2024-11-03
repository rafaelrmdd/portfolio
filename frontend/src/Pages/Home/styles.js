import styled from "styled-components";
import "@fontsource/poppins";

export const HomeContainer = styled.body`
    height: 100vh;
    width: 100%;

    background: #FFFFFF;
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    font-size: 2rem;

    h1{
        font-weight: 900;
        font-family: "Poppins", "Sans-serif";
    }

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column

`

export const VerticalLine = styled.div`
    height: 250px;
    border-left: 2px solid #D1D5DB;

    margin-left: 50px;
    margin-right: 25px;
`