import React from 'react';
import {
    ItemLiStyle, ItemImgWrapStyle, ItemTitleStyle,
    ItemParagraphStyle, ItemButtonsBlockStyle, ItemImgStyle, ItemButtonStyle
} from "../styles/Item.styled"
import logo from "../images/logo.ico";

function HomeItem() {
    return (
        <ItemLiStyle>
            <ItemImgWrapStyle>
                <ItemImgStyle src={logo} alt="dwelling image"/>
            </ItemImgWrapStyle>
            <ItemTitleStyle>title</ItemTitleStyle>
            <ItemParagraphStyle>Area: areaInSquareMeters m^2</ItemParagraphStyle>
            <ItemParagraphStyle>Price: priceInUSD USD</ItemParagraphStyle>
            <ItemParagraphStyle>Location: location</ItemParagraphStyle>
            <ItemParagraphStyle>Has floors floors</ItemParagraphStyle>
            <ItemParagraphStyle>Has no swimming pool</ItemParagraphStyle>
            <ItemButtonsBlockStyle>
                <ItemButtonStyle variant="outline-info" href="/item">Show more</ItemButtonStyle>
            </ItemButtonsBlockStyle>
        </ItemLiStyle>
    );
}

export default HomeItem;