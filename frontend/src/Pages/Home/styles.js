import styled, { keyframes } from "styled-components";
import "@fontsource/poppins";
import "@fontsource/barlow";


export const right = keyframes`
    from{
        right: 400px;
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

    100%{  
        opacity: 1;
    }
`

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

export const top = keyframes`
    from{
        top: 800px
    }

    to{
        bottom: 0px;
    }

`

export const HomeContainer = styled.body`
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
        font-weight: 900;
        font-family: "Poppins", "Sans-serif";

        position: relative;

        animation: ${left} 1.5s linear forwards; 
    }

    p{
        font-family: "Barlow", "Sans-serif";
        font-size: 1.8rem;  

        position: relative;
        animation: ${right} 1.5s linear forwards; 
    }

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: column
`

export const VerticalLine = styled.div`
    height: 250px;
    border-left: 2px solid #D1D5DB;

    margin-left: 50px;
    margin-right: 50px;

    position: relative;
    bottom: -800px;

    animation: ${top} 0.75s linear forwards;
    animation-delay: 1s;
`

