import styled from "styled-components";
import Pixel from "./Pixel";

interface IRowProps {
  width: number;
  selectedColor: string;
}

const SRow = styled.div`
  display: flex;
  width: fit-content;
`;

const Row: React.FC<IRowProps> = ({ width, selectedColor }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <SRow>{pixels}</SRow>;
};

export default Row;
