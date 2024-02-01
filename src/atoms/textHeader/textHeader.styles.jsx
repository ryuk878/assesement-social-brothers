import styled from "styled-components";

const StyledHeader = styled.h1.attrs((props) => ({
  children: props.text,
}))`
  height: 29px;
  width: 403px;
  color: #2b2b2b;
  font-family: Inter Bold;
  font-size: 24px;
`;

export default StyledHeader;
