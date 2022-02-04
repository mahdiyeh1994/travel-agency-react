import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = (props: { bucket?: boolean; resorts?: boolean }): JSX.Element => {
  const { bucket, resorts } = props;

  return (
    <header className="topbar navbarbg" data-navbarbg="skin6">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Travel Agency</Navbar.Brand>
          <Nav className="justify-content-end">
            {bucket && (
              <Nav.Link href="/bucket">
                <i className="fas fa-shopping-basket"></i>
              </Nav.Link>
            )}
              {resorts && (
              <Nav.Link href="/">
              <i className="fas fa-home"></i>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
