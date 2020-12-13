import {FilterBlock, FilterHr, NavFilterItemStyle} from "../styles/Filter.styled";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {HeaderFilterButtonStyle} from "../styles/General.styled";
import React, {useEffect, useState} from "react";
import {areaConstants, priceConstants, floorsConstants} from "../constants/constants";

function Filter({dwellings, setDwellingsToShow}) {

    const [filter, setFilter] = useState({
        priceFilter: priceConstants.default,
        areaFilter: areaConstants.all,
        floorsFilter: floorsConstants.all
    });

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

    useEffect(() => {
        changeItemsToShow();
    }, [filter]);

    const changeItemsToShow = () => {
        let sortedDwellings = [...dwellings];

        // price filter
        if (filter.priceFilter === priceConstants.asc) {
            sortedDwellings.sort(priceComparatorAsc);
        } else if (filter.priceFilter === priceConstants.desc) {
            sortedDwellings.sort(priceComparatorDesc);
        }

        function priceComparatorAsc(first, second) {
            let priceFirst = first.price;
            let priceSecond = second.price;
            return (priceFirst - priceSecond);
        }

        function priceComparatorDesc(first, second) {
            let priceFirst = first.price;
            let priceSecond = second.price;
            return (priceSecond - priceFirst);
        }

        // area filter
        if (filter.areaFilter === areaConstants.fiftyLess) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.area <= 50;
            });
        } else if (filter.areaFilter === areaConstants.fiftyHundred) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.area >= 50 && dwelling.area <= 100;
            });
        } else if (filter.areaFilter === areaConstants.hundredTwoHundreds) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.area >= 100 && dwelling.area <= 200;
            });
        } else if (filter.areaFilter === areaConstants.twoHundredsMore) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.area >= 200;
            });
        }

        // floors filter
        if (filter.floorsFilter === floorsConstants.one) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.floors === 1;
            });
        } else if (filter.floorsFilter === floorsConstants.two) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.floors === 2;
            });
        } else if (filter.floorsFilter === floorsConstants.three) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.floors === 3;
            });
        } else if (filter.floorsFilter === floorsConstants.four) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.floors === 4;
            });
        } else if (filter.floorsFilter === floorsConstants.fourMore) {
            sortedDwellings = sortedDwellings.filter(dwelling => {
                return dwelling.floors > 4;
            });
        }

        setDwellingsToShow([...sortedDwellings]);
    }

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
                        <HeaderFilterButtonStyle onClick={onClearClick} variant="outline-info">Clear</HeaderFilterButtonStyle>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Filter;