import React from "react";
import { StyledButton, StyledButtonParagraph } from "./button.styles";
import { text } from "../../text";

function Button() {
  return (
    <>
      <StyledButton>
        <StyledButtonParagraph>
          {text.Button.createMessage}
        </StyledButtonParagraph>
      </StyledButton>
    </>
  );
}
export default Button;
