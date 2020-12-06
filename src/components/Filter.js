import {FilterBlock, FilterHr, NavFilterItemStyle} from "../styles/Filter.styled";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {HeaderFilterButtonStyle} from "../styles/General.styled";
import React, {useState} from "react";

function Filter() {
    let state = useState({
        priceFilter: "default",
        areaFilter: "default",
        locationFilter: "default",
    })[0];

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
                                <NavDropdown title={state.priceFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#priceAsc">ascending</NavDropdown.Item>
                                    <NavDropdown.Item href="#priceDesc">descending</NavDropdown.Item>
                                    <NavDropdown.Item href="#priceDefault">default</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>

                            <FilterBlock>
                                <NavFilterItemStyle>Area:</NavFilterItemStyle>
                                <NavDropdown title={state.areaFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#areaAsc">ascending</NavDropdown.Item>
                                    <NavDropdown.Item href="#areaDesc">descending</NavDropdown.Item>
                                    <NavDropdown.Item href="#areaDefault">default</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>

                            <FilterBlock>
                                <NavFilterItemStyle>Location:</NavFilterItemStyle>
                                <NavDropdown title={state.locationFilter} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#locationLviv">Lviv</NavDropdown.Item>
                                    <NavDropdown.Item href="#locationKyiv">Kyiv</NavDropdown.Item>
                                    <NavDropdown.Item href="#locationOdesa">Odesa</NavDropdown.Item>
                                    <NavDropdown.Item href="#priceDefault">default</NavDropdown.Item>
                                </NavDropdown>
                            </FilterBlock>
                        </Nav>
                        <HeaderFilterButtonStyle variant="outline-info">Apply</HeaderFilterButtonStyle>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Filter;