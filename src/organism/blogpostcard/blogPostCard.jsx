import React from "react";
import {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostInnerContainer,
  BlogParagraphStyle,
  BlogHeaderContainer,
  BlogInputStyle,
  BlogUploadImage,
  BlogUploadImageButton,
  StyledButtonImageParagraph,
  StyledSubmitInputContainer,
  BlogPostInputStyle,
  BlogParagraphTextStyle,
  StyledBlogPostButton,
  StyledBlogInput,
} from "./blogPostCard.styles";
import { text } from "../../text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function BlogPostCard({ placeholder }) {
  const categories = ["Nieuws", "Lokaal", "Tech", "Sport"];

  return (
    <BlogPostContainer>
      <BlogHeaderContainer>
        <BlogPostHeader text={text.BlogPost.createMessage} />
      </BlogHeaderContainer>
      <BlogPostInnerContainer>
        <BlogParagraphStyle>{text.BlogPost.messageName}</BlogParagraphStyle>
        <BlogInputStyle />

        <BlogParagraphStyle>{text.BlogPost.category}</BlogParagraphStyle>
        <StyledBlogInput>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </StyledBlogInput >

        <BlogParagraphStyle>{text.BlogPost.imageHeader}</BlogParagraphStyle>
        <BlogUploadImage>
          <FontAwesomeIcon icon={faCamera} style={{ marginRight: "8px" }} />
          <BlogUploadImageButton>
            <StyledButtonImageParagraph>
              {text.BlogPost.button}
            </StyledButtonImageParagraph>
          </BlogUploadImageButton>
        </BlogUploadImage>
      </BlogPostInnerContainer>
      <StyledSubmitInputContainer>
        <BlogParagraphTextStyle>{text.BlogPost.message}</BlogParagraphTextStyle>
        <BlogPostInputStyle />
      </StyledSubmitInputContainer>

      <StyledBlogPostButton type='submit'>
        {text.Button.createMessage}
      </StyledBlogPostButton>
    </BlogPostContainer>
  );
}

export default BlogPostCard;
