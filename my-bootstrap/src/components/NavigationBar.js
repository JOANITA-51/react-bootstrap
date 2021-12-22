import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';



function NavigationBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Code Bar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>   
        </>
    )
}

export default NavigationBar
