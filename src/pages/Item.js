import React, {useContext, useMemo} from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";
import {
    ItemImgStyle,
    ItemMainBlockStyle,
    ItemMainTextBlockStyle,
    ItemMainTextParagraphStyle,
    ItemMainTextTitleStyle, ItemTextParagraphStyle, ItemDivToDownStyle
} from "../styles/Item.styled";
import LowBar from "../components/LowBar";
import {DwellingContext} from "../context/DwellingContext";


function Item({match}) {
    const {params: {id}} = match;
    const dwellings = useContext(DwellingContext);

    const dwellingToShow = useMemo(() => {
            const dwellingToShowArray = dwellings.filter(dwelling => {
                return dwelling.id.toString() === id
            });
            if (dwellingToShowArray.length === 1) {
                return dwellingToShowArray[0];
            } else {
                return false;
            }
        }, [dwellings, id])
    ;

    let floorParagraph;
    if (dwellingToShow.floors === 1) {
        floorParagraph = <ItemMainTextParagraphStyle>Has 1 floor</ItemMainTextParagraphStyle>;
    } else {
        floorParagraph = <ItemMainTextParagraphStyle>Has {dwellingToShow.floors} floors</ItemMainTextParagraphStyle>;
    }

    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                <ContainerStyle>
                    {dwellingToShow ?
                        <>
                            <ItemMainBlockStyle>
                                <ItemImgStyle src={dwellingToShow.img} alt="Logo"/>
                                <ItemMainTextBlockStyle>
                                    <ItemMainTextTitleStyle>
                                        {dwellingToShow.title}
                                    </ItemMainTextTitleStyle>
                                    <ItemMainTextParagraphStyle>
                                        Area: {dwellingToShow.area} m^2
                                    </ItemMainTextParagraphStyle>
                                    <ItemMainTextParagraphStyle>
                                        Price: {dwellingToShow.price} USD
                                    </ItemMainTextParagraphStyle>
                                    <ItemMainTextParagraphStyle>
                                        Location: {dwellingToShow.location}
                                    </ItemMainTextParagraphStyle>
                                    {floorParagraph}
                                    <ItemMainTextParagraphStyle>
                                        Has {dwellingToShow.pool ? '' : 'no '}swimming pool
                                    </ItemMainTextParagraphStyle>
                                    <ItemTextParagraphStyle>
                                        {dwellingToShow.description}
                                    </ItemTextParagraphStyle>
                                </ItemMainTextBlockStyle>
                            </ItemMainBlockStyle>

                            <LowBar price={dwellingToShow.price}/>
                        </>
                        : "404"}

                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Item;