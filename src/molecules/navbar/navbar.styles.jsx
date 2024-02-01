import styled from "styled-components";
import StyledHeaderImage from "../../atoms/image/image.styles";
import StyledLink from "../../atoms/link/link.styles";

const StyledNavbar = styled.div`
  width: 100%;
  height: 208px;
  position: relative;
`;

const StyledLogo = styled(StyledHeaderImage)`
  height: 57px;
  width: 240px;
  position: absolute;
  bottom: 119px;
  left: 162px;
`;

const NavbarLinkDiv = styled.div`
  height: 30px;
  width: 123px;
  position: absolute;
  bottom: 150px;
  justify-content: flex-end;
  display: flex;
  gap: 32px;
  right: 162px;

`;

const NavbarLink = styled(StyledLink)`
  text-decoration: none;
  height: 30px;
  width: 52px;
  position: relative;
  color : white;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  &:hover::before,
  &:active::before {
    margin-top : 13px;
    background-color: #e95e30;
  }
`;

export { StyledNavbar, StyledLogo, NavbarLink, NavbarLinkDiv };
