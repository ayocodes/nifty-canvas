import React, { useState } from "react";
import styled from "styled-components";

interface IPixelProps {
  selectedColor: string;
}

const SPixel = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Pixel: React.FC<IPixelProps> = ({ selectedColor }) => {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }

  return (
    <SPixel
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></SPixel>
  );
};

export default Pixel;
