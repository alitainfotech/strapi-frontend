import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";

import faLg from "../../assets/images/logo/logo-big.png";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Nav className="fixed-top">
          <NavLink to="/" className="navbar-brand">
            <img src={faLg} alt="" height="24" />
          </NavLink>

          <NavItem>
            <NavLink to="/restaurants/list" className="nav-link">
              Restaurant
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/logout" className="nav-link">
              Logout
            </NavLink>
          </NavItem>
        </Nav>

        <div className="mt-5">
          <Outlet />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
