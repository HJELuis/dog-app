
import React, { Fragment, useEffect, useState } from "react";
import useFetchDogs from "../../hooks/useFetchDogs";

const DogsList = () => {

    const {dogs, error} = useFetchDogs();

    return(
        <Fragment>
            

        </Fragment>
    )  
}

export default DogsList;