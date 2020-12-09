import React, {useContext, useState} from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard"
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import {CatalogListStyle} from "../styles/Catalog.styled"
import {DwellingContext} from "../context/DwellingContext";


function Catalog() {
    const dwellings = useContext(DwellingContext);
    const [dwellingsToShow, setDwellingsToShow] = useState([...dwellings]);

    return (
        <>
            <Header search={true} dwellings={dwellings} setDwellingsToShow={setDwellingsToShow}/>
            <MarginTopFromHeaderStyle>
                <Filter dwellings={dwellings} setDwellingsToShow={setDwellingsToShow}/>
                <ContainerStyle>
                    <CatalogListStyle>
                        {dwellingsToShow.map((item) => (
                            <ItemCard key={item.id} item={item}/>
                        ))}
                    </CatalogListStyle>
                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Catalog;