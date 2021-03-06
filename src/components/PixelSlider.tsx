import { useState, useEffect } from "react";
import styled from "styled-components";

interface ISliderProps {
  max: number;
  min: number;
  value: number;
  setValue: any;
}

const SSlider = styled.div`
  position: relative;
  display: flex;
`;

const SInput = styled.input`
  /********** Range Input Styles **********/
  /*Range Reset*/
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 15rem;
  }

  /* Removes default focus */
  input[type="range"]:focus {
    outline: none;
  }

  /***** Chrome, Safari, Opera and Edge Chromium styles *****/
  /* slider track */
  input[type="range"]::-webkit-slider-runnable-track {
    background-color: #053a5f;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* slider thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -12px; /* Centers thumb on the track */

    /*custom styles*/
    background-color: #053a5f;
    height: 2rem;
    width: 1rem;
  }

  input[type="range"]:focus::-webkit-slider-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
  }

  /******** Firefox styles ********/
  /* slider track */
  input[type="range"]::-moz-range-track {
    background-color: #053a5f;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* slider thumb */
  input[type="range"]::-moz-range-thumb {
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0; /*Removes default border-radius that FF applies*/

    /*custom styles*/
    background-color: #053a5f;
    height: 2rem;
    width: 1rem;
  }

  input[type="range"]:focus::-moz-range-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
  }
`;

const SText = styled.div`
  font-size: 0.9rem;
  padding-left: 5px;
`;

const PixelSlider: React.FC<ISliderProps> = ({ max, min, value, setValue }) => {
  return (
    <SSlider>
      <SInput
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
        }}
      />

      <SText>{value}</SText>
    </SSlider>
  );
};
export default PixelSlider;
