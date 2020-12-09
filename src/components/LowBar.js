import React from 'react';
import {LowBarButtonsStyle, LowBarButtonStyle, LowBarStyle, LowBarTextStyle} from "../styles/LowBar.styled";
import {Link} from "react-router-dom";

function LowBar({price}) {

    const onGoBackClick = () => {

    }

    return (
        <LowBarStyle>
            <LowBarTextStyle>Price: {price} USD</LowBarTextStyle>
            <LowBarButtonsStyle>
                <Link to="/catalog">
                    <LowBarButtonStyle onClick={onGoBackClick} variant="outline-info">Go back</LowBarButtonStyle>
                </Link>
                <LowBarButtonStyle variant="outline-info">Add to cart</LowBarButtonStyle>
            </LowBarButtonsStyle>
        </LowBarStyle>
    );
}

export default LowBar;