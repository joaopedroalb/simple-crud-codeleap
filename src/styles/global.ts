import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --black:#000
        --white:#FFF
        --gray:#DDD
    }
    html,
    body {
        font-family: 'Poppins', sans-serif; 
        background: var(--white);
        color: var(--black);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 0;
    }
` 

export default GlobalStyle 