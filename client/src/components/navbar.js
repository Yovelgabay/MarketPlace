import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Header from "../components/header";

export const MyNavbar = ({ title }) => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="header-wrapper">
      <div className="background-image">
        <Container>
          <Navbar bg="transparent" expand="lg">
            <Container style={{ padding: 0 }}>
              <Navbar.Brand as={Link} to="/">
                Home
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/create-item">
                  Create Item
                </Nav.Link>
                <Nav.Link as={Link} to="/saved-items">
                  Saved Items
                </Nav.Link>
                <Nav.Link as={Link} to="/created-items">
                  My Items
                </Nav.Link>
                {!cookies.access_token ? (
                  <Nav.Link as={Link} to="/auth">
                    Login/Register
                  </Nav.Link>
                ) : (
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                )}
              </Nav>
            </Container>
          </Navbar>
          <Header title={title} />
        </Container>
      </div>{" "}
    </div>
  );
};
