import React from "react";
import {
  StyledNavbar,
  StyledLogo,
  NavbarLinkDiv,
  NavbarLink,
} from "./navbar.styles";
import StyledHeaderImage from "../../atoms/image/image.styles";

import backgroundImage from "../../assets/images/header.png";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <StyledNavbar>
      <StyledHeaderImage src={backgroundImage} alt='Navbar Header' />
      <StyledLogo src={Logo} alt='Social Brothers Logo' />
      <NavbarLinkDiv>
        <NavbarLink to='/' >
          Home
        </NavbarLink>
        <NavbarLink to='/blog'>Blog</NavbarLink>
      </NavbarLinkDiv>
    </StyledNavbar>
  );
}

export default Navbar;
