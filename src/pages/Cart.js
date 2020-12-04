import React from 'react';
import {MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";

function Cart() {
    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                Cart
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Cart;