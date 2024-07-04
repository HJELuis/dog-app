import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;              
    } 
    header {
        background-color: ${props => props.theme.colors.first};
    }   
`

export default GlobalStyle;