import React from 'react';
import {
    HomeItemLiStyle, HomeItemImgWrapStyle, HomeItemTitleStyle,
    HomeItemParagraphStyle, HomeItemImgStyle
} from "../styles/HomeItem.styled"
import logo from "../images/logo.ico";

function HomeItem() {
    return (
        <HomeItemLiStyle>
            <HomeItemImgWrapStyle>
                <HomeItemImgStyle src={logo} alt="dwelling image"/>
            </HomeItemImgWrapStyle>
            <HomeItemTitleStyle>title</HomeItemTitleStyle>
            <HomeItemParagraphStyle>
                On sait depuis longtemps que travailler avec du texte lisible et contenant du sens
                est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
            </HomeItemParagraphStyle>
            <HomeItemParagraphStyle>
                L'avantage du
                Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une
                distribution de lettres plus ou moins normale, et en tout cas
            </HomeItemParagraphStyle>
        </HomeItemLiStyle>
    );
}

export default HomeItem;