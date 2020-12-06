import React from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard"
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import {CatalogListStyle} from "../styles/Catalog.styled"

import logo from "../images/logo.ico";

function Catalog() {

    const dwellings = [
        {
            img: logo,
            title: "title",
            area: 145,
            price: 123,
            location: "location",
            floors: 0,
            pool: false
        },
        {
            img: logo,
            title: "title",
            area: 145,
            price: 123,
            location: "location",
            floors: 0,
            pool: true
        },
        {
            img: logo,
            title: "title",
            area: 145,
            price: 123,
            location: "location",
            floors: 2,
            pool: true
        },
        {
            img: logo,
            title: "title",
            area: 145,
            price: 123,
            location: "location",
            floors: 1,
            pool: true
        },
        {
            img: logo,
            title: "title",
            area: 145,
            price: 123,
            location: "location",
            floors: 2,
            pool: false
        }]

    return (
        <>
            <Header search={true}/>
            <MarginTopFromHeaderStyle>
                <Filter/>
                <ContainerStyle>
                    <CatalogListStyle>
                        {dwellings.map((item, index) => (
                            <ItemCard key={index} item={item}/>
                        ))}
                    </CatalogListStyle>
                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Catalog;