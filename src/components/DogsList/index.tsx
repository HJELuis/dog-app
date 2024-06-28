
import React, { Fragment} from "react";
import useFetchDogs from "../../hooks/useFetchDogs";

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
            dogs.map(dog => {
                return (
                    <article key={dog.id}>
                        <img alt={dog.name} src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}></img>
                        <p>Breed:{dog.name} </p>
                        <p>Temperaments: {dog.temperament}</p>
                    </article>
                )
            })
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