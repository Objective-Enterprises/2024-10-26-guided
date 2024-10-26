import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  const handleSignOut = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        bg="primary"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ECart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {userInfo && (
                <LinkContainer to="/profile">
                  <Nav.Link>
                    <i className="bi bi-person-badge"> Profile</i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {!userInfo && (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Log In</i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && (
                <LinkContainer to="/" onClick={handleSignOut}>
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Sign Out</i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
