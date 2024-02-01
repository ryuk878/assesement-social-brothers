import React from "react";
import StyledLink from "./link.styles";

const Link = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
