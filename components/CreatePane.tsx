import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Text from "./Text";
import PixelSlider from "./PixelSlider";

const SBox = styled.div`
  padding: 40px;
`;

const SText = styled(Text)`
  color: #585858;
  font-size: 0.8rem;
`;

const SLabel = styled(Text)`
  color: #585858;
  font-size: 1rem;
  font-weight: 500;
  /* padding-bottom: 5px; */
`;

const STitle = styled(Text)`
  color: #585858;
  font-weight: 600;
`;
const STextArea = styled.textarea`
  border: 1px solid #585858;
  width: 12rem;
  font-size: .9rem;
  border-radius: 0.3rem;
  padding: 8px 5px 0;
  color: #585858;
  background-color: transparent;
  resize: none;
  z-index: 1;
  outline: none;
  line-height: 0.7;
  margin-bottom: 1.2rem;
`;

const CreatePane = () => {
  return (
    <SBox>
      <STitle type="h5">Make Your Dream Art!</STitle>
      <SText>give a title and choose your pixel canvas size</SText>
      <br />
      <SLabel>Title</SLabel>
      <STextArea></STextArea>
      {/* <br /> */}
      <SLabel>Width</SLabel>
      <PixelSlider
          max={100}
          min={16}
          value={0}
          setValue={0}
        />
      <br />
      <SLabel>Height</SLabel>
      <PixelSlider
          max={100}
          min={16}
          value={99}
          setValue={0}
        />
        <br />
      <Button>Create</Button>
    </SBox>
  );
};

export default CreatePane;
