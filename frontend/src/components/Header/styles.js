import styled, { css, keyframes } from "styled-components";
import "@fontsource/poppins";

export const below = keyframes`
    from{
        top: -60px;

    }
        
    to{
        top: 0px;
    }

`

export const HeaderContainer = styled.header`
    width: 100%;
    height: 88px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: transparent;

    padding: 0 50px;
    margin-bottom: 75px;

    position: ${props => props.anim === "activated" ? "relative" : "static"};
    top: -60px;

    animation: ${props => props.anim === "activated" ? css`${below} 0.5s linear forwards` : "none"};
    animation-delay: 1s;
`



export const NavigationItemsContainer = styled.nav`
    width: 28%;
    min-height: 12px;

    display: flex;
    justify-content: space-between;

    font-size: 1.3rem;
    font-family: "Poppins", "Sans-serif";

    a{
        text-decoration: none;
        color: #000000;
        
    }


`

