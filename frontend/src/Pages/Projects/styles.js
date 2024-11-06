import styled from "styled-components";
import "@fontsource/barlow";


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