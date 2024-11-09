import styled, { keyframes } from "styled-components";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/barlow";


export const right = keyframes`
    from{
        right: 200px;
    }

    to{
        right: 0px;
    }

    0%, 60%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }

`

export const left = keyframes`
    from{
        left: 200px;
    }

    to{
        left: 0px;
    }

    0%, 60%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }
`

export const top = keyframes`
    from{
        top: 300px
    }

    to{
        top: 0px;
    }

    0%, 60%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }

`

export const HomeContainer = styled.body`
    height: 100vh;
    width: 100%;

    background: var(--background-color);

    overflow-y: hidden;
    overflow-x: hidden;
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    font-size: 2rem;

    h1{
        font-weight: 800;
        font-family: "Poppins", "Sans-serif";
        color: var(--font-color);

        position: relative;

        animation: ${left} 1s linear forwards; 
    }

    p{
        font-family: "Barlow", "Sans-serif";
        font-size: 1.8rem;  
        font-weight: 400;
        color: var(--font-color);

        position: relative;
        animation: ${right} 1s linear forwards; 
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
    top: 200px;

    animation: ${top} 1.25s linear forwards;
    
`

