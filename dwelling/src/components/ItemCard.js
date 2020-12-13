import React from 'react';
import {
    ItemLiStyle, ItemImgWrapStyle, ItemTitleStyle,
    ItemParagraphStyle, ItemButtonsBlockStyle, ItemImgStyle, ItemButtonStyle, ItemButtonLinkStyle
} from "../styles/ItemCard.styled"


function ItemCard({item}) {
    let floorParagraph;
    if (item.floors === 1) {
        floorParagraph = <ItemParagraphStyle>Has 1 floor</ItemParagraphStyle>;
    } else {
        floorParagraph = <ItemParagraphStyle>Has {item.floors} floors</ItemParagraphStyle>;
    }
    return (
        <ItemLiStyle>
            <ItemImgWrapStyle>
                <ItemImgStyle src={item.img} alt="dwelling image"/>
            </ItemImgWrapStyle>
            <ItemTitleStyle>{item.title}</ItemTitleStyle>
            <ItemParagraphStyle>Area: {item.area} m^2</ItemParagraphStyle>
            <ItemParagraphStyle>Price: {item.price} USD</ItemParagraphStyle>
            <ItemParagraphStyle>Location: {item.location}</ItemParagraphStyle>
            {floorParagraph}
            <ItemParagraphStyle>Has {item.pool ? '' : 'no '}swimming pool</ItemParagraphStyle>
            <ItemButtonsBlockStyle>
                <ItemButtonLinkStyle to={"/catalog" + item.id}>
                    <ItemButtonStyle variant="outline-info"> Show more </ItemButtonStyle>
                </ItemButtonLinkStyle>
            </ItemButtonsBlockStyle>
        </ItemLiStyle>
    );
}

export default ItemCard;