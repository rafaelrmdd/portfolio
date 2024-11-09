import styled, { keyframes } from "styled-components";
import "@fontsource/barlow";
import "@fontsource/poppins/600.css"

export const top = keyframes`
    from{
        top: 200px;
    }

    to{
        bottom: 0px;
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
    justify-content: space-between;

    font-size: 2rem;

    h1{
        font-family: "Poppins", "Sans-serif";
        font-weight: 600;
        color: var(--font-color);
        
        position: relative;

        animation: ${right} 1.30s linear forwards;
    }
`

export const ItemsContainer = styled.div`
    width: 50%;
    min-height: 250px;

    margin: 0 0 100px 40px;

    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const Item = styled.div`
    width: 100%;
    height: 280px;

    position: relative;

    &:nth-child(1){
        bottom: -500px;

        animation: ${top} 1.30s linear forwards;
        animation-delay: 0.25s;
    }

    &:nth-child(2){
        bottom: -200px;

        animation: ${top} 1.30s linear forwards;
        animation-delay: 0.5s;
    }

`

export const ImageContainer = styled.div`
    width: 100%;
    height: 90%;

    border: solid 1px var(--border-color);

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