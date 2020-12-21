import React from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {HeaderFilterButtonStyle, HeaderLogOutButtonStyle} from "../styles/General.styled"
import logo from "../images/logo.ico";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAccess} from "../redux/accessSlice";


function Header({search, dwellings, setDwellingsToShow}) {

    const dispatch = useDispatch();

    function logOut() {
        localStorage.clear();
        dispatch(setAccess(false));
    }

    const searchItems = () => {
        let dwellingsToShow = []
        const inputString = document.getElementById('searchInput').value.toLowerCase();

        dwellingsToShow = dwellings.filter(dwelling => {
            const title = dwelling.title.toLowerCase().includes(inputString);
            const area = dwelling.area_in_square_meters.toString().toLowerCase().includes(inputString);
            const price = dwelling.price_in_USD.toString().toLowerCase().includes(inputString);
            const location = dwelling.location.toLowerCase().includes(inputString);
            const floors = dwelling.floors_count.toString().toLowerCase().includes(inputString);
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
                            <Nav.Link href="/" as="span"> Home </Nav.Link>
                        </Link>
                        <Link to="catalog">
                            <Nav.Link href="/catalog" as="span"> Catalog </Nav.Link>
                        </Link>
                        <Link to="cart">
                            <Nav.Link href="/cart" as="span"> Cart </Nav.Link>
                        </Link>
                        <HeaderLogOutButtonStyle onClick={logOut}
                                                 variant="outline-info">Log Out</HeaderLogOutButtonStyle>
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