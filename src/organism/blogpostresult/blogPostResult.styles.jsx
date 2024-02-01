import styled from "styled-components";
import { StyledButton } from "../../molecules/button/button.styles";

const StyledPostResultContainer = styled.div`
  height: 659px;
  width: 642px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin-top: 64px;
`;

const StyledPostResultInnerContainer = styled.div`
  height: 508px;
  width: 642px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c5c5c5;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;
const StyledBlogPostLoadMoreButton = styled(StyledButton)`
  position: relative;
  bottom: 30px;
  margin-left: 224px;
  margin-top: 114px;
  font-family: Inter bold;
  color: white;
`;

export {
  StyledPostResultContainer,
  StyledPostResultInnerContainer,
  StyledBlogPostLoadMoreButton,
};
