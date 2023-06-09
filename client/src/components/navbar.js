import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MyNavbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  const renderAuthenticatedLinks = () => {
    return (
      <>
        <Nav.Link as={Link} to="/create-item">
          Create Item
        </Nav.Link>
        <Nav.Link as={Link} to="/saved-items">
          Saved Items
        </Nav.Link>
        <Nav.Link as={Link} to="/created-items">
          My Items
        </Nav.Link>
      </>
    );
  };

  return (
    <div className="header-wrapper">
      <div className="background-image">
        <Container>
          <Navbar
            expand="lg"
            variant="dark"
            className="nav-style"
            bg="transparent"
            expanded={expanded}
          >
            <Container style={{ padding: 0 }}>
              <Navbar.Brand as={Link} to="/">
                Home
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setExpanded(!expanded)}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/search-items">
                    Search Items
                  </Nav.Link>
                  {cookies.access_token && renderAuthenticatedLinks()}
                </Nav>
                <Nav>
                  {!cookies.access_token ? (
                    <Nav.Link as={Link} to="/auth">
                      Login/Register
                    </Nav.Link>
                  ) : (
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
