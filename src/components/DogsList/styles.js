import styled from "styled-components";

const DogsSection = styled.section`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    box-sizing:border-box;    

`;

const DogElement = styled.article`
    background: #F0F0F0;
    border-radius: 8px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;    
`

const DogPicture = styled.img`
    width: 200px;
    box-sizing: border-box;
    border-radius: 8px;
`

const DogInfo = styled.p`
    text-align:center;
    span {
        font-weight: 600;
    }
`


export {
    DogsSection,
    DogElement,
    DogPicture,
    DogInfo,
}