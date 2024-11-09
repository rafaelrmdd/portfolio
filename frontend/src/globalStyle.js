import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: #FFF;
        --title: #000;
        --primary: blue;
    }

    [data-theme='light']{
        --background-color: #FFF;
        --font-color: #000;
        --title: #000;
        --border-color: #000;
        --button-background: #D1D5DB;
    }

    [data-theme='dark']{
        --background-color: #1B1F22;
        --font-color: #FFF;
        --title: #FFF;
        --border-color: #00ffff;
        --box-shadow: none;
        --button-background: #D1D5DB;
    }

    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }
`

export default GlobalStyle;