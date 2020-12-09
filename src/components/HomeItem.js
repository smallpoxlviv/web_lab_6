import React from 'react';
import {
    HomeItemLiStyle, HomeItemImgWrapStyle, HomeItemTitleStyle,
    HomeItemParagraphStyle, HomeItemImgStyle
} from "../styles/HomeItem.styled"

function HomeItem({item}) {
    return (
        <HomeItemLiStyle>
            <HomeItemImgWrapStyle>
                <HomeItemImgStyle src={item.img} alt="dwelling image"/>
            </HomeItemImgWrapStyle>
            <HomeItemTitleStyle>{item.title}</HomeItemTitleStyle>
            {item.itemParagraphs.map((paragraph, idx) => (
                <HomeItemParagraphStyle key={item.id.toString() + idx.toString()}>{paragraph}</HomeItemParagraphStyle>
            ))}
        </HomeItemLiStyle>
    );
}

export default HomeItem;