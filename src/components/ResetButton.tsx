import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "../context/navContext";

interface ResetButtonProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  // setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const SResetButton = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  right: 15px;
  top: 15px;
  border-radius: 50%;
  background: #d9d9d9;
  z-index: 1000;
  display: grid;
  place-items: center;
  transform: scale(0.8);
  transition: all 200ms;

  &:hover {
    background-color: #ff0000;
    transform: scale(1);
  }
`;

const ResetButton: React.FC<ResetButtonProps> = ({
  showModal,
  setShowModal,
}) => {
  const [_, setShowNav] = useContext(NavContext);

  if (showModal) {
    return null;
  }

  return (
    <SResetButton
      onClick={() => {
        setShowModal(true);
        setShowNav(true);
      }}
    >
      <img src="/Delete.svg" alt="reset" />
    </SResetButton>
  );
};

export default ResetButton;
