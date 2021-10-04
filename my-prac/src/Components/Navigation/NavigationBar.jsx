import React from "react";
import {Navbar,Container,Nav,NavLink} from "react-bootstrap";
export const NavigationBar=()=>{
    return(
        <Navbar bg="lg" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink path="/Services">Home</NavLink>
        <NavLink path="/About">About</NavLink>
        <NavLink path="/Contact">Contact</NavLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};