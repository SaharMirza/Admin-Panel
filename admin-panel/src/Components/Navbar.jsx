import React from 'react'
import { Navbar, Container, Nav, Form, Offcanvas, Button } from 'react-bootstrap'

export const NavbarComp = () => {
    return (
        <Navbar bg="dark" variant="dark" expand={false} className="mb-3"id='navstyle' >
            <Container fluid>
                <Navbar.Brand href="/">
                    Resturant's Name</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                        Resturant's Name
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form className="d-flex" style={{ marginBottom: 10 }}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link id='Navlink' href="/">Dashboard</Nav.Link>
                            <Nav.Link id='Navlink' href="/Users">Users</Nav.Link>
                            <Nav.Link id='Navlink' href="/Orders">Orders</Nav.Link>
                            <Nav.Link id='Navlink' href="/Products">Products</Nav.Link>
                            <Nav.Link id='Navlink' href="/Categories">Categories</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
