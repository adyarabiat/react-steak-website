import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Steaks</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarBtn>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
