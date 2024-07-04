
import React, { Fragment} from "react";
import useFetchDogs from "../../hooks/useFetchDogs";
import { DogElement, DogInfo, DogPicture, DogsSection } from "./styles";

type Dog = {
    id: number;
    name: string;
    temperament: string;
    reference_image_id: string;
}

type FetchDogs = {
    dogs: Dog[];
    error: boolean;
}


const DogsList = () => {

    const {dogs, error}: FetchDogs = useFetchDogs();

    const displayContent = () => {
        return (error === true ? <p>There was an error</p>:
            <DogsSection>
                {
                    dogs.map(dog => {
                        return (
                            <DogElement key={dog.id}>
                                <DogPicture alt={dog.name} src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}></DogPicture>
                                <DogInfo><span>Breed:</span> {dog.name} </DogInfo>
                                <DogInfo><span>Temperaments:</span> {dog.temperament}</DogInfo>
                            </DogElement>
                        )
                    })
                }                
            </DogsSection>
         )
    }

    return(
        <Fragment>
            {
                displayContent()
            }            
        </Fragment>
    )  
}

export default DogsList;