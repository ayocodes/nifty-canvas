import React, { useCallback } from "react";
import styled from "styled-components";
import ConnectPane from "./ConnectPane";
import CreatePane from "./CreatePane";

const SModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.678);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SModalContent = styled.div`
  display: flex;
  width: 60vw;
  height: 25rem;
  background: #fef9ed;
  box-shadow: 0px 4px 51px 22px rgba(0, 0, 0, 0.16);
  border-radius: 35px;
`;

const SImg = styled.img`
  max-width: 30vw;
  height: 400px;
`;

const Modal = () => {
  return (
    <SModalBackground>
      <SModalContent>
        <SImg src="/flower.svg" alt="" />
        {/* <CreatePane /> */}
        <ConnectPane />
      </SModalContent>
    </SModalBackground>
  );
};

export default Modal;
