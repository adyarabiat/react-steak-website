import React from "react";

import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Steak Lovers</NavLink>
        <NavIcon onClick={props.toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
