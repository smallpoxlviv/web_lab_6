import {FilterBlock, FilterHr, NavFilterItemStyle} from "../styles/Filter.styled";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {HeaderFilterButtonStyle} from "../styles/General.styled";
import React, {useEffect, useState} from "react";
import {areaConstants, priceConstants, floorsConstants} from "../constants/constants";
import {getFilteredDwellings} from "../api/api";

function Filter({setDwellingsToShow, setSpinner}) {

    const [filter, setFilter] = useState({
        priceFilter: priceConstants.default,
        areaFilter: areaConstants.all,
        floorsFilter: floorsConstants.all
    });

    useEffect(() => {
        getFilteredDwellings(filter.priceFilter, filter.areaFilter, filter.floorsFilter).then(filteredDwellings => {
            setDwellingsToShow([...filteredDwellings.dwellings]);
            setSpinner(false);
        })
        return () => {
            setSpinner(true);
        };
    }, [filter, setDwellingsToShow, setSpinner]);


    const [priceActive, setPriceActive] = useState({
        asc: false,
        desc: false,
        default: true
    });

    const [areaActive, setAreaActive] = useState({
        fiftyLess: false,
        fiftyHundred: false,
        hundredTwoHundreds: false,
        twoHundredsMore: false,
        all: true
    });

    const [floorsActive, setFloorsActive] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        fourMore: false,
        all: true
    });

    const onPriceClick = (e) => {
        const text = e.target.text;
        if (text === priceConstants.asc) {
            if (priceActive.asc === false) {
                setPriceActive({
                    asc: true,
                    desc: false,
                    default: false
                });
                setFilter({...filter, priceFilter: text});
            }
        } else if (text === priceConstants.desc) {
            if (priceActive.desc === false) {
                setPriceActive({
                    asc: false,
                    desc: true,
                    default: false
                });
                setFilter({...filter, priceFilter: text});
            }
        } else if (text === priceConstants.default) {
            if (priceActive.default === false) {
                setPriceActive({
                    asc: false,
                    desc: false,
                    default: true
                });
                setFilter({...filter, priceFilter: text});
            }
        }
    }

    const onAreaClick = (e) => {
        const text = e.target.text;
        if (text === areaConstants.fiftyLess) {
            if (areaActive.fiftyLess === false) {
                setAreaActive({
                    fiftyLess: true,
                    fiftyHundred: false,
                    hundredTwoHundreds: false,
                    twoHundredsMore: false,
                    all: false
                });
                setFilter({...filter, areaFilter: text});
            }
        } else if (text === areaConstants.fiftyHundred) {
            if (areaActive.fiftyHundred === false) {
                setAreaActive({
                    fiftyLess: false,
                    fiftyHundred: true,
                    hundredTwoHundreds: false,
                    twoHundredsMore: false,
                    all: false
                });
                setFilter({...filter, areaFilter: text});
            }
        } else if (text === areaConstants.hundredTwoHundreds) {
            if (areaActive.hundredTwoHundreds === false) {
                setAreaActive({
                    fiftyLess: false,
                    fiftyHundred: false,
                    hundredTwoHundreds: true,
                    twoHundredsMore: false,
                    all: false
                });
                setFilter({...filter, areaFilter: text});
            }
        } else if (text === areaConstants.twoHundredsMore) {
            if (areaActive.twoHundredsMore === false) {
                setAreaActive({
                    fiftyLess: false,
                    fiftyHundred: false,
                    hundredTwoHundreds: false,
                    twoHundredsMore: true,
                    all: false
                });
                setFilter({...filter, areaFilter: text});
            }
        } else if (text === areaConstants.all) {
            if (areaActive.all === false) {
                setAreaActive({
                    fiftyLess: false,
                    fiftyHundred: false,
                    hundredTwoHundreds: false,
                    twoHundredsMore: false,
                    all: true
                });
                setFilter({...filter, areaFilter: text});
            }
        }
    }

    const onFloorsClick = (e) => {
        const text = e.target.text;
        if (text === floorsConstants.one) {
            if (floorsActive.one === false) {
                setFloorsActive({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                    fourMore: false,
                    all: false
                });
                setFilter({...filter, floorsFilter: text});
            }
        } else if (text === floorsConstants.two) {
            if (floorsActive.two === false) {
                setFloorsActive({
                    one: false,
                    two: true,
                    three: false,
                    four: false,
                    fourMore: false,
                    all: false
                });
                setFilter({...filter, floorsFilter: text});
            }
        } else if (text === floorsConstants.three) {
            if (floorsActive.three === false) {
                setFloorsActive({
                    one: false,
                    two: false,
                    three: true,
                    four: false,
                    fourMore: false,
                    all: false
                });
                setFilter({...filter, floorsFilter: text});
            }
        } else if (text === floorsConstants.four) {
            if (floorsActive.four === false) {
                setFloorsActive({
                    one: false,
                    two: false,
                    three: false,
                    four: true,
                    fourMore: false,
                    all: false
                });
                setFilter({...filter, floorsFilter: text});
            }
        } else if (text === floorsConstants.fourMore) {
            if (floorsActive.fourMore === false) {
                setFloorsActive({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    fourMore: true,
                    all: false
                });
                setFilter({...filter, floorsFilter: text});
            }
        } else if (text === floorsConstants.all) {
            if (floorsActive.all === false) {
                setFloorsActive({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    fourMore: false,
                    all: true
                });
                setFilter({...filter, floorsFilter: text});
            }
        }
    }

    const onClearClick = () => {
        setFilter({
            priceFilter: priceConstants.default,
            areaFilter: areaConstants.all,
            floorsFilter: floorsConstants.all
        });
        setPriceActive({
            asc: false,
            desc: false,
            default: true
        });
        setAreaActive({
            fiftyLess: false,
            fiftyHundred: false,
            hundredTwoHundreds: false,
            twoHundredsMore: false,
            all: true
        });
        setFloorsActive({
            one: false,
            two: false,
            three: false,
            four: false,
            fourMore: false,
            all: true
        });
    }

    return (
        <>
            <FilterHr/>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <FilterBlock>
                                <NavFilterItemStyle>Price:</NavFilterItemStyle>
                                <NavDropdown title={filter.priceFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={onPriceClick}
                                                      active={priceActive.asc}>{priceConstants.asc}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onPriceClick}
                                                      active={priceActive.desc}>{priceConstants.desc}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onPriceClick}
                                                      active={priceActive.default}>{priceConstants.default}</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>

                            <FilterBlock>
                                <NavFilterItemStyle>Area:</NavFilterItemStyle>
                                <NavDropdown title={filter.areaFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={onAreaClick}
                                                      active={areaActive.fiftyLess}>{areaConstants.fiftyLess}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onAreaClick}
                                                      active={areaActive.fiftyHundred}>{areaConstants.fiftyHundred}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onAreaClick}
                                                      active={areaActive.hundredTwoHundreds}>{areaConstants.hundredTwoHundreds}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onAreaClick}
                                                      active={areaActive.twoHundredsMore}>{areaConstants.twoHundredsMore}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onAreaClick}
                                                      active={areaActive.all}>{areaConstants.all}</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>

                            <FilterBlock>
                                <NavFilterItemStyle>Floors:</NavFilterItemStyle>
                                <NavDropdown title={filter.floorsFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.one}>{floorsConstants.one}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.two}>{floorsConstants.two}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.three}>{floorsConstants.three}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.four}>{floorsConstants.four}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.fourMore}>{floorsConstants.fourMore}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={onFloorsClick}
                                                      active={floorsActive.all}>{floorsConstants.all}</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>
                        </Nav>
                        <HeaderFilterButtonStyle onClick={onClearClick}
                                                 variant="outline-info">Clear</HeaderFilterButtonStyle>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Filter;