import React from 'react';
import {MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";

function Catalog() {
    return (
        <>
            <Header search={true}/>
            <MarginTopFromHeaderStyle>
                Catalog
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Catalog;