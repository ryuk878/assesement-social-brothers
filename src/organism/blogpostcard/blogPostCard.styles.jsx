import styled from "styled-components";
import StyledHeader from "../../atoms/textHeader/textHeader.styles";
import StyledParagraph from "../../atoms/paragraph/paragraph.styles";
import StyledInputForm from "../../atoms/form/form.styles";
import {
  StyledButton,
  StyledButtonParagraph,
} from "../../molecules/button/button.styles.jsx";

const BlogPostContainer = styled.div`
  height: 659px;
  width: 451px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  margin-left: 162px;
  margin-top: 64px;
`;

const BlogPostHeader = styled(StyledHeader)`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`;

const BlogHeaderContainer = styled.div`
  height: 29px;
  width: 403px;
`;
const BlogPostInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 24px;
  padding-right: 24px;
`;

const BlogMessageContainer = styled.div`
  height: 62px;
  width: 403px;
  margin-top: 24px;
`;

const BlogParagraphStyle = styled(StyledParagraph)`
  color: #404040;
  margin-top: 24px;
`;

const BlogInputStyle = styled(StyledInputForm)`
  margin-top: 13px;
  color: #272525;
  border: none;

  &::placeholder {
    color: #999;
    font-family: italic;
  }
  &:focus {
    outline: none;
    color: #c5c5c5;
  }
`;

const BlogUploadImage = styled.div`
  height: 39px;
  width: 146px;
  display: flex;
  margin-top: 29px;
  background-color: #fafafa;
  justify-content: center;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  padding-top: 10px;
`;

const BlogUploadImageButton = styled(StyledButton)`
  height: 20px;
  width: 86px;
  border-radius: 10px;
  background-color: #7d7d7d;
`;

const StyledButtonImageParagraph = styled(StyledButtonParagraph)`
  font-size: 10px;
  font-weight: normal;
`;

const StyledSubmitInputContainer = styled.div`
  height: 237px;
  width: 403px;
  padding-left: 24px;
`;

const BlogPostInputStyle = styled.textarea`
  margin-top: 13px;
  display: flex;
  justify-content: flex-start;
  border: none;
  height: 214px;
  width: 403px;
  background-color: #fafafa;

  &::placeholder {
    color: #999;
    font-family: italic;
  }
  &:focus {
    outline: none;
    color: #c5c5c5;
  }
`;
const BlogParagraphTextStyle = styled(StyledParagraph)`
  color: #404040;
  margin-top: 0px;
`;

const StyledBlogPostButton = styled(StyledButton)`
  margin-left: 124px;
  margin-top: 22px;
  font-family: Inter bold;
  color: white;
`;

const StyledBlogInput = styled.select`
  border: none;
  background-color: #fafafa;
`;

export {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostInnerContainer,
  BlogMessageContainer,
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
};
