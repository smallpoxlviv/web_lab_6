import React, {useEffect, useState} from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle, SpinnerBlockStyle, SpinnerStyle} from "../styles/General.styled"
import Header from "../components/Header";
import {
    ItemImgStyle,
    ItemMainBlockStyle,
    ItemMainTextBlockStyle,
    ItemMainTextParagraphStyle,
    ItemMainTextTitleStyle,
    ItemTextParagraphStyle
} from "../styles/Item.styled";
import LowBar from "../components/LowBar";
import {getDwellingById} from "../api/api";


function Item({match}) {
    const {params: {id}} = match;
    const [dwelling, setDwelling] = useState(false);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getDwellingById(id).then(dwelling => {
            setDwelling(dwelling);
            setSpinner(false)
        })
    }, []);

    let floorParagraph;
    if (dwelling.floors_count === 1) {
        floorParagraph = <ItemMainTextParagraphStyle>Has 1 floor</ItemMainTextParagraphStyle>;
    } else {
        floorParagraph = <ItemMainTextParagraphStyle>Has {dwelling.floors_count} floors</ItemMainTextParagraphStyle>;
    }

    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                {spinner ?
                    <SpinnerBlockStyle>
                        <SpinnerStyle animation="border"/>
                    </SpinnerBlockStyle>
                    : (<ContainerStyle>
                        {dwelling ?
                            <>
                                <ItemMainBlockStyle>
                                    <ItemImgStyle src={dwelling.img} alt="Logo"/>
                                    <ItemMainTextBlockStyle>
                                        <ItemMainTextTitleStyle>
                                            {dwelling.title}
                                        </ItemMainTextTitleStyle>
                                        <ItemMainTextParagraphStyle>
                                            Area: {dwelling.area_in_square_meters} m^2
                                        </ItemMainTextParagraphStyle>
                                        <ItemMainTextParagraphStyle>
                                            Price: {dwelling.price_in_USD} USD
                                        </ItemMainTextParagraphStyle>
                                        <ItemMainTextParagraphStyle>
                                            Location: {dwelling.location}
                                        </ItemMainTextParagraphStyle>
                                        {floorParagraph}
                                        <ItemMainTextParagraphStyle>
                                            Has {dwelling.swimming_pool ? '' : 'no '}swimming pool
                                        </ItemMainTextParagraphStyle>
                                        <ItemTextParagraphStyle>
                                            {dwelling.description}
                                        </ItemTextParagraphStyle>
                                    </ItemMainTextBlockStyle>
                                </ItemMainBlockStyle>

                                <LowBar price={dwelling.price_in_USD}/>
                            </>
                            : "404"}

                    </ContainerStyle>)
                }

            </MarginTopFromHeaderStyle>
        </>
    );
};

export default Item;