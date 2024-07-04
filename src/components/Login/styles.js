import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 0;
    background-color: #f0f0f0;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    font-size: 1.2em;
`;

const Button = styled.button`
    font-size: 0.8em;
    width: 300px;
    background-color: #78ABA8;
    color: #ffffff;
    border: none;
    padding: 10px 20px;    
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
`;

const Input = styled.input`
    box-sizing: border-box;
    border-radius: 8px;
    border-width: 0.1px; 
    border-color: unset;   
    width: 300px;

`;

export {
    Container,
    Form,
    Button,
    Input,
}