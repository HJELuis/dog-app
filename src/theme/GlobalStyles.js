import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;              
    } 
    header {
        background-color: ${props => props.theme.colors.fourth};
    }   
`

export default GlobalStyle;