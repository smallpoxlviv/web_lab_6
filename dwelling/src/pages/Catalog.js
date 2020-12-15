import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard"
import {ContainerStyle, MarginTopFromHeaderStyle, SpinnerBlockStyle, SpinnerStyle} from "../styles/General.styled"
import {CatalogListStyle} from "../styles/Catalog.styled"
import {getDwellings} from "../api/api";


function Catalog() {

    const [dwellings, setDwellings] = useState([]);
    const [dwellingsToShow, setDwellingsToShow] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getDwellings().then(dwellings => {
            setDwellings([...dwellings.dwellings]);
            setDwellingsToShow([...dwellings.dwellings]);
            setSpinner(false);
        })
    }, []);

    return (
        <>
            <Header search={true} dwellings={dwellings} setDwellingsToShow={setDwellingsToShow}/>
            <MarginTopFromHeaderStyle>
                <Filter setDwellingsToShow={setDwellingsToShow} setSpinner={setSpinner}/>
                {spinner ?
                    <SpinnerBlockStyle>
                        <SpinnerStyle animation="border"/>
                    </SpinnerBlockStyle>
                    :
                    (<ContainerStyle>
                        <CatalogListStyle>
                            {dwellingsToShow.map((item) => (
                                <ItemCard key={item.id} item={item}/>
                            ))}
                        </CatalogListStyle>
                    </ContainerStyle>)
                }
            </MarginTopFromHeaderStyle>
        </>
    );
}

;

export default Catalog;