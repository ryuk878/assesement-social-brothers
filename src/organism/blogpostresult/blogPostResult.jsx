import React, { useState } from "react";
import {
  StyledPostResultContainer,
  StyledPostResultInnerContainer,
  StyledBlogPostLoadMoreButton,
} from "./blogPostResult.styles";
import Card from "../../molecules/card/card";
import { text } from "../../text";

function BlogPostResult() {
  const cardData = [
    { id: 1, src: "image1.jpg", alt: "Image 1" },
    { id: 2, src: "image2.jpg", alt: "Image 2" },
    { id: 3, src: "image3.jpg", alt: "Image 3" },
    { id: 4, src: "image4.jpg", alt: "Image 4" },
    { id: 5, src: "image5.jpg", alt: "Image 5" },
    { id: 6, src: "image6.jpg", alt: "Image 6" },
    { id: 7, src: "image7.jpg", alt: "Image 7" },
    { id: 8, src: "image8.jpg", alt: "Image 8" },
  ];

  const [visibleCards, setVisibleCards] = useState(4);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const displayedCards = cardData.slice(0, visibleCards);

  return (
    <StyledPostResultContainer>
      <StyledPostResultInnerContainer>
        {displayedCards.map((card) => (
          <Card key={card.id} src={card.src} alt={card.alt} />
        ))}
      </StyledPostResultInnerContainer>
      <StyledBlogPostLoadMoreButton onClick={loadMoreCards}>
        {text.Button.loadMore}
      </StyledBlogPostLoadMoreButton>
    </StyledPostResultContainer>
  );
}

export default BlogPostResult;
