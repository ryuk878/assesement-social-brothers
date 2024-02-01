import React from "react";
import {
  StyledFooter,
  StyledFooterParagrah,
} from "./footer.styles";
import { text } from "../../text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterParagrah>
        <FontAwesomeIcon icon={faCopyright} style={{ marginRight: "8px" }} />
        {text.Footer.footerText}
      </StyledFooterParagrah>
    </StyledFooter>
  );
}

export default Footer;
