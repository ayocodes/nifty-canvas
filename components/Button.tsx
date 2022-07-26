import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface IButtonProps {
  children: React.ReactNode;
  func?: React.MouseEventHandler;
}

const SButton = styled.div`
  height: 2.2rem;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;
  width: 9.4rem;

  background: #fef9ed;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.17);
  border-radius: 10rem;
  display: grid;
  cursor: pointer;
  place-items: center;
  transition: all 300ms;

  :hover {
    transition: all 300ms;
    transform: scale(1.1);
  }
`;

const SText = styled(Text)`
    color: #bb8bab;

`

const Button: React.FC<IButtonProps> = ({ children, func }) => {
  return (
    <SButton onClick={func}>
      <SText>{children}</SText>
    </SButton>
  );
};

export default Button;
