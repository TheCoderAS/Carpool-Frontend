import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HelpCircle, Plus, User } from "react-feather";
import { NavLink } from "react-router-dom";

export default function NavbarComp(){
  return(
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-light">Carpool</Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink className="nav-link px-3" to="/create"><Plus/></NavLink>
          <NavLink className="nav-link px-3" to="/working"><HelpCircle/></NavLink>
          <NavLink className="nav-link px-3" to="/login"><User/></NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}