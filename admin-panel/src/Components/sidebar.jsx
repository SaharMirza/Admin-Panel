import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const sidebar = () => {
  return (<Navbar bg="dark" variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Company's Name</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/Users">Users</Nav.Link>
        <Nav.Link href="/Orders">Orders</Nav.Link>
        <Nav.Link href="/Products">Products</Nav.Link>
        <Nav.Link href="/Categories">Catgeories</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default sidebar