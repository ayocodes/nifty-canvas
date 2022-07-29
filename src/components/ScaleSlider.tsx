import styled from "styled-components";

interface IScaleSliderProps {
  max: number;
  min: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const SSlider = styled.div`
  position: absolute;
  transform-origin: 0 0;
  background: #fef9ed;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  transform: translateY(200px) translateX(-24px) rotate(270deg);
  top: 200px;
  z-index: 1000;
  display: grid;
  place-items: center;
`;

const SInput = styled.input`
  margin: 20px;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 10rem;
  outline: none;
  background-color: #bb8bab;
  border-radius: 10px;
  height: 0.5rem;

  & :-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
`;

const ScaleSlider: React.FC<IScaleSliderProps> = ({
  max,
  min,
  value,
  setValue,
}) => {
  return (
    <SSlider>
      <SInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={({ target: { value } }) => {
          setValue(parseInt(value));
        }}
      />
    </SSlider>
  );
};

export default ScaleSlider;
