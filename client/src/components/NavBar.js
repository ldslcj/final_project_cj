import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Nav, Container, Navbar } from 'react-bootstrap'
import logo from './image/yin-yang.svg'
import styled from "styled-components";

// For Basic setup only please change

// if not logged in I want register/login links

// if logged in I want logout link, also ProtectRoutes Rendered
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const getRightNav = () => {
    if (user) {
      return (
        <>
          <NavLink href="/admin_page">Admin Page</NavLink>
          <NavLink
            onClick={() => handleLogout(history)}
          >
            Logout
          </NavLink>

        </>
      );
    } else {
      return (
        <>
            <NavLink href="/register">Register</NavLink>
            <NavLink href="/login">login</NavLink>
        </>
      );
    }
  };

  return (
      <CustomNavBar variant="light">
        <Container>
          <NavBarBrand href="/">
            <LogoImg 
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-middle" /> {' '} Balanced
          </NavBarBrand>
          <Nav className="me-auto">
          <Nav.Item as="li">
              <NavLink href="/add_player">Players</NavLink>
            </Nav.Item>
            <NavItem as="li">
              <NavLink href="/gen_team">Teams</NavLink>
            </NavItem>

            </Nav>
            <Nav>
        <Navbar.Collapse className="justify-content-end">{getRightNav()}</Navbar.Collapse>
        </Nav>
        
        </Container>

      </CustomNavBar>
  );
};


export default NavBar;

const CustomNavBar = styled(Navbar)`
  background-color: #F8F9FA;
  height: 100px;
  position: sticky;
  top: 0;
`

const NavBarBrand = styled(Navbar.Brand)`
  font-size: 3em;
  font-weight: bold;
  color: #2d2d2d !important;
`
const LogoImg = styled.img`
  margin-bottom: 10px;
`

const NavLink = styled(Nav.Link)`
  font-size: 1.3em;
  font-weight: 600;
  color: #2d2d2d !important;
  margin-right: 5px;
  margin-left: 15px;
  text-transform: uppercase;
`
const NavItem = styled(Nav.Item)`
  color: #2d2d2d;
`
