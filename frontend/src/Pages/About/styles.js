import styled , { keyframes } from "styled-components";
import "@fontsource/barlow";

export const left = keyframes`
    from{
        left: 400px;
    }

    to{
        left: 0px;
    }

    0%, 75%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }
`

export const bottom = keyframes`
    from{
        bottom: 500px;
    }

    to{
        bottom: 0px;
    }

    0%, 75%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }
`

export const right = keyframes`
    from{
        right: 500px;
    }

    to{
        right: 0px;
    }

    0%, 75%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }
`

export const AboutContainer = styled.body`
    height: 100vh;
    width: 100%;

    background: #FFFFFF;

    overflow-y: hidden;
    overflow-x: hidden;
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    font-size: 2rem;

    h1{
        font-family: "Poppins", "Sans-serif";
        line-height: 60px;

        position: relative;

        animation: ${left} 1s linear forwards;
    }

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    
    .main-text{
        text-align: justify;
        font-family: "Barlow", "Sans-serif";
        font-size: 1.8rem;

        position: relative;
        right: -1100px;

        animation: ${right} 1s linear forwards;
        animation-delay: 0.5s;
    }

    h2{
        margin-top: 40px;

        font-size: 2.3rem;
        font-family: "Poppins", "Sans-serif";

        position: relative;

        animation: ${right} 1s linear forwards;
        animation-delay: 1s;

        right: 1000px;

    }

    ul{
        list-style-type: none;

        position: relative;

        animation: ${bottom} 1s linear forwards;
        animation-delay: 1s;

        bottom: -500px;
    
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