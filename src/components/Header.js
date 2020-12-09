import React from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {HeaderFilterButtonStyle} from "../styles/General.styled"
import logo from "../images/logo.ico";
import {Link} from "react-router-dom";


function Header({search, dwellings, setDwellingsToShow}) {

    const searchItems = () => {
        let dwellingsToShow = []
        const inputString = document.getElementById('searchInput').value.toLowerCase();

        dwellingsToShow = dwellings.filter(dwelling => {
            const title = dwelling.title.toLowerCase().includes(inputString);
            const area = dwelling.area.toString().toLowerCase().includes(inputString);
            const price = dwelling.price.toString().toLowerCase().includes(inputString);
            const location = dwelling.location.toLowerCase().includes(inputString);
            const floors = dwelling.floors.toString().toLowerCase().includes(inputString);
            return title || area || price || location || floors;
        });
        setDwellingsToShow([...dwellingsToShow]);
    }

    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <Nav.Link href="/"> Home </Nav.Link>
                        </Link>
                        <Link to="catalog">
                            <Nav.Link as="a" href="/catalog"> Catalog </Nav.Link>
                        </Link>
                        <Link to="cart">
                            <Nav.Link href="/cart"> Cart </Nav.Link>
                        </Link>
                    </Nav>
                    {search &&
                    <Form inline>
                        <FormControl onChange={searchItems}
                            id="searchInput"
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <HeaderFilterButtonStyle onClick={searchItems}
                                                 variant="outline-info">Search</HeaderFilterButtonStyle>
                    </Form>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;