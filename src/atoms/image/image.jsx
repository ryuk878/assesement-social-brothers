import React from "react";
import StyledHeaderImage from "./image.styles";


function Image({src, altText}) {
  return (
   
      <StyledHeaderImage src={src} alt={altText} />
   
  );
}

export default Image;
