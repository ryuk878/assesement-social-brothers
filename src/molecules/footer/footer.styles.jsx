import styled from "styled-components";
import StyledParagraph from "../../atoms/paragraph/paragraph.styles";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  background-color: #262626;
  gap: 10px;
`;

const StyledFooterParagrah = styled(StyledParagraph)`
  width: 207px;
  color: white;
  bottom: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

export { StyledFooter, StyledFooterParagrah };
