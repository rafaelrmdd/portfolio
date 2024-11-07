import styled, { keyframes } from "styled-components";
import "@fontsource/barlow";

export const top = keyframes`
    from{
        top: 500px;
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

export const left = keyframes`
    from{
        left: 500px;
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

export const ProjectsContainer = styled.body`
    height: 100vh;
    width: 100%;
    
    background: #FFFFFF;
`

export const MainContentContainer = styled.main`
    margin: 0 150px;

    display: flex;
    justify-content: space-between;

    font-size: 2rem;

    h1{
        font-family: "Poppins", "Sans-serif";
        
        position: relative;

        animation: ${left} 1s linear forwards;
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
    background: red;

    position: relative;

    &:nth-child(1){
        bottom: -500px;

        animation: ${top} 1s linear forwards;
        animation-delay: 0.5s;
    }

    &:nth-child(2){
        bottom: -200px;

        animation: ${top} 1.5s linear forwards;
        animation-delay: 0.75s;
    }

`

export const ImageContainer = styled.div`
    width: 100%;
    height: 90%;

    border: solid 1px black;

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

`

export const Icons = styled.div`
    display: flex;

    gap: 8px;
`

export const LowBar = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-top: 5px;

`