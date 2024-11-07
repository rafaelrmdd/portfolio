import styled, { keyframes } from "styled-components";
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
`

export const top = keyframes`
    from{
        top: 200px;
    }

    to{
        top: 0px;
    }

    0%, 75%{
        opacity: 0;
    }

    100%{  
        opacity: 1;
    }
`

export const ContactContainer = styled.body`
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

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    input{
        margin-bottom: 10px;
    
        height: 60px;
        width: 450px;

        font-family: "Barlow", "Sans-serif";

        padding: 8px 16px;

        outline: none;
        border: none;

        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &::placeholder{
            font-size: 16px;
        }

    }

    textarea{
        padding: 8px 16px;

        width: 450px;
        height: 160px;

        font-family: "Barlow", "Sans-serif";

        outline: none;
        border: none;
    
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &::placeholder{
            font-size: 16px;
        }
    }

`

export const InputsContainer = styled.form`
    margin: 0 20px 0 40px;

    max-width: 450px;
    min-height: 308px;

    position: relative;

    animation: ${right} 1.25s linear forwards;

    button{
        width: 100px;
        height: 40px;

        margin-top: 10px;

        background: #00ffff;

        border: none; 
        border-radius: 3px;

        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        position: relative;
        animation: ${top} 1.50s linear forwards;

        &:hover{
            cursor: pointer;
            
        }
    }
    


`

export const InformationsContainer = styled.div`
    width: 300px;

    position: relative;

    animation: ${left} 1.50s linear forwards;

    h2{
        font-family: "Barlow", "Sans-serif";
        font-size: 1.8rem;
        line-height: 25px;
        
        margin-bottom: 15px;
    }

    p{
        font-size: 20px;
    }
`
export const InformationsNavItem = styled.div`
    display: flex;

    &:nth-child(3){
        margin: 2px 0 25px 0;
    }

    &:last-child{
        gap: 10px;

        a{
            text-decoration: none;
            color: #000000;
        }

        .linkedin-icon:hover{
            cursor: pointer;
            color: #ADD8E6;
        }

        .github-icon:hover{
            cursor: pointer;
            color: #ADD8E6;
        }
    }
    
`