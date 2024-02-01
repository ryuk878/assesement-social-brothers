import styled from "styled-components";

const StyledBlogContainer = styled.div`
  margin-left: 162px;
  margin-right: 162px;
  margin-top: 62px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export { StyledBlogContainer, StyledCardGrid };
