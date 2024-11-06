import styled from "styled-components";
import "@fontsource/barlow";

export const AboutContainer = styled.body`
    height: 100vh;
    width: 100%;

    background: #FFFFFF;
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    font-size: 2rem;

    h1{
        font-family: "Poppins", "Sans-serif";
        line-height: 60px;
    }

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    

    .main-text{
        text-align: justify;
        font-family: "Barlow", "Sans-serif";
        font-size: 1.8rem;
    }

    h2{
        margin-top: 40px;

        font-size: 2.3rem;
        font-family: "Poppins", "Sans-serif";
    }

    ul{
        list-style-type: none;

        li{
           margin-right: 100px;

           font-family: "Barlow", "Sans-serif";
           font-size: 1.5rem;
        }
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 40px;
`