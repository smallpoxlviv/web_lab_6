import React from 'react';
import {LowBarButtonsStyle, LowBarButtonStyle, LowBarStyle, LowBarTextStyle} from "../styles/LowBar.styled";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCartAsync} from "../redux/cartSlice";

function LowBar({price, id}) {

    const dispatch = useDispatch();

    function onAddToCartClick() {
        dispatch(addToCartAsync(id))
    }

    return (
        <LowBarStyle>
            <LowBarTextStyle>Price: {price} USD</LowBarTextStyle>
            <LowBarButtonsStyle>
                <Link to="/catalog">
                    <LowBarButtonStyle variant="outline-info">Go back</LowBarButtonStyle>
                </Link>
                <LowBarButtonStyle onClick={onAddToCartClick} variant="outline-info">Add to cart</LowBarButtonStyle>
            </LowBarButtonsStyle>
        </LowBarStyle>
    );
}

export default LowBar;