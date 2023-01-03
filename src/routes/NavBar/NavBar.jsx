import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar class="navbar navbar-light"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/Favorites">Favorites</Nav.Link>
            <Nav.Link href="https://www.google.com/webhp?hl=en&ictx=2&sa=X&ved=0ahUKEwi8_qbC-Iv8AhVyk2oFHdq0BZwQPQgJ">Google</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}

