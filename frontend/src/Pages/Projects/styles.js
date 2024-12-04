import styled, { keyframes } from "styled-components";
import "@fontsource/barlow";
import "@fontsource/poppins/600.css"

export const top = keyframes`
    from{
        top: 100px;
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

export const ProjectsContainer = styled.body`
    height: 100vh;
    width: 100%;
    
    background: var(--background-color);
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 2rem;

    h1{
        font-family: "Poppins", "Sans-serif";
        font-weight: 600;
        color: var(--font-color);
        
        position: relative;
        text-align: center;

        margin-bottom: 20px;

        animation: ${right} 1.30s linear forwards;
    }
`

export const ItemsContainer = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin: 0 0 75px 0;
`

export const Item = styled.div`
    width: 47%;
    height: 280px;

    position: relative;

    animation: ${top} 1.30s linear forwards;
    animation-delay: 0.25s;

    &:not(:last-child):not(:nth-last-child(2)) {
        margin-bottom: 40px;
    }

`

export const ImageContainer = styled.div`
    width: 100%;
    height: 90%;

    border: 1px solid black;
    position: relative;

    #development-advice {
        position: absolute;
        top: 40%;  
        left: 50px;  
        z-index: 10;
        color: red;
        font-weight: bold;
    }

    img{
        height: 100%;
        width: 100%;
    }
`

export const SiteName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: "Barlow", "Sans-serif";
    font-size: 20px;    
    font-weight: 600;
    color: var(--font-color);

`

export const Icons = styled.div`
    height: 30px;

    display: flex;

    gap: 8px;

    a{
        color: var(--font-color);
    }
    
`

export const LowBar = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-top: 5px;
`