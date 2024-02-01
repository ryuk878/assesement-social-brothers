import React from "react";
import {
  StyledCard,
  StyledImageCard,
  StyledCardParagraph,
  StyledCardTextHeader,
  StyledImageContainer,
  StyledTextContainer,
  StyledTextOnRight,
  StyledTextOnLeft,
} from "./card.styles";
import { text } from "../../text";
import TitleImage from '../../assets/images/Mask.png'

function Card( {src, alt}) {
  return (
    <StyledCard>
      <StyledImageContainer>
        <StyledImageCard src={TitleImage} alt={'Titel Afbeelding'} />
        <StyledTextOnLeft>{text.BlogText.date}</StyledTextOnLeft>
        <StyledTextOnRight>nieuws</StyledTextOnRight>
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTextHeader  />
        <StyledCardParagraph> {text.BlogText.dummyText}</StyledCardParagraph>
      </StyledTextContainer>
    </StyledCard>
  );
}

export default Card;
