import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiSteak } from "react-icons/gi";

export const Nav = styled.nav`
  background: #ffe4c4;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #010101;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #010101;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(GiSteak)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
