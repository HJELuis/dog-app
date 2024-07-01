import React, {Fragment} from "react";
import { AppHeader, Headlight } from "./styles";

const Header = () => {
    return (
        <Fragment>
            <AppHeader>
                <Headlight>Dogs</Headlight>
            </AppHeader>
        </Fragment>
    )
}

export default Header;