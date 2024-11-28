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

    background: var(--background-color);
    color: var(--font-color);

    padding: 0 50px;
    margin-bottom: 75px;

    position: ${props => props.anim === "activated" ? "relative" : "static"};
    top: -60px;

    animation: ${props => props.anim === "activated" ? css`${below} 0.5s linear forwards` : "none"};
    animation-delay: 0.5s;

    img{
        height: 32px;
        width: 32px;
        margin-top: -15px;
    }

    a{
        text-decoration: none;
        color: var(--font-color);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }


`



export const NavigationItemsContainer = styled.nav`
    width: 35%;
    min-height: 12px;

    display: flex;
    justify-content: space-between;

    font-size: 1.3rem;
    font-family: "Poppins", "Sans-serif";

    span{
        color: var(--font-color);
    }

    span:hover{
        cursor: pointer;
    }

`

