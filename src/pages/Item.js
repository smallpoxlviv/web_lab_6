import React from 'react';
import {MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";

function Item() {
    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                Item
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Item;