import React from 'react'
import './Home.css'
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, Button } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Dashboard</Nav.Link>
                                <Nav.Link href="#action1">Users</Nav.Link>
                                <Nav.Link href="#action1">Orders</Nav.Link>
                                <Nav.Link href="#action2">Products</Nav.Link>
                                <Nav.Link href="#action1">Categories</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Home