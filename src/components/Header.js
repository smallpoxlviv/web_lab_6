import React from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {HeaderFilterButtonStyle} from "../styles/General.styled"
import logo from "../images/logo.ico";


function Header(props) {

    const availableSearch = props.search;
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
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/catalog"> Catalog </Nav.Link>
                        <Nav.Link href="/cart"> Cart </Nav.Link>
                    </Nav>
                    {availableSearch &&
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <HeaderFilterButtonStyle variant="outline-info">Search</HeaderFilterButtonStyle>
                    </Form>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;