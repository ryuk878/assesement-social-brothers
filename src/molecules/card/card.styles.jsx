import styled from "styled-components";
import StyledHeaderImage from "../../atoms/image/image.styles";
import StyledParagraph from "../../atoms/paragraph/paragraph.styles";
import StyledHeader from "../../atoms/textHeader/textHeader.styles";

const StyledCard = styled.div`
  height: 217px;
  width: 285px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const StyledImageCard = styled(StyledHeaderImage)`
  height: 62px;
  width: 285px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  position: relative;
`;

const StyledCardParagraph = styled(StyledParagraph)`
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 12px;
  color: #868686;
`;

const StyledCardTextHeader = styled(StyledHeader)`
  margin-left: 16px;
  margin-top: 10px;
`;

const StyledImageContainer = styled.div`
  height: 62px;
  width: 285px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StyledTextOnLeft = styled.p`
  position: absolute;
  bottom: 0;
  left: 16px;
  margin: 0;
  font-size: 10px;
  font-style: italic;
  color: white;
`;

const StyledTextOnRight = styled.p`
  position: absolute;
  bottom: 0;
  right: 16px;
  margin: 0;
  font-size: 10px;
  font-style: italic;
  color: white;
`;

const StyledTextContainer = styled.div`
  height: auto;
  width: 253px;
  position: relative;
`;
export {
  StyledCard,
  StyledImageCard,
  StyledCardParagraph,
  StyledCardTextHeader,
  StyledImageContainer,
  StyledTextContainer,
  StyledTextOnRight,
  StyledTextOnLeft,
};
