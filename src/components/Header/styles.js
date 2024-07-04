import styled from "styled-components";

const AppHeader = styled.header`    
    font-size: 1.5em;
    color: ${props => props.theme.colors.third};   
`

const Headlight = styled.h1`
    margin: 0;
`

export {
    AppHeader,
    Headlight
}