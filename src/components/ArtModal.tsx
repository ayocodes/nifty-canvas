import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "./Text";

interface IModal {
  modal: boolean;
  image: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
  backdrop-filter: blur(15px);
`;

const Simg = styled.img`
  height: calc(100vh - 3rem);
`;

const SModalContent = styled.div`
  display: grid;
  width: 50vw;
  background-color: white;
  place-items: center;
  border-radius: 1rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  position: relative;
`;

const ArtModal: React.FC<IModal> = ({ modal, setModal, image }) => {
  if (!modal) {
    return null;
  }

  // Create loading component
  return (
    <SModal onClick={() => setModal(false)}>
      <SModalContent onClick={(e) => e.stopPropagation()}>
        <Simg src={image} alt="" />
      </SModalContent>
    </SModal>
  );
};

export default ArtModal;
