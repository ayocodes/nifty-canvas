import { useCallback, useContext } from "react";
import styled from "styled-components";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import NavContext from "../context/navContext";
import ConnectPane from "./ConnectPane";
import CreatePane from "./CreatePane";

interface IModalProps {
  showModal: any;
  setShowModal: any;
  panelWidth: any;
  setPanelWidth: any;
  panelHeight: any;
  setPanelHeight: any;
}

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

const Modal: React.FC<IModalProps> = ({
  showModal,
  setShowModal,
  panelWidth,
  setPanelWidth,
  panelHeight,
  setPanelHeight,
}) => {
  const [_, setShowNav] = useContext<any>(NavContext);
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;

  const getModalType = useCallback(() => {
    if (ceramicContext?.ceramic) {
      return (
        <CreatePane
          setShowNav={setShowNav}
          setShowModal={setShowModal}
          panelWidth={panelWidth}
          setPanelWidth={setPanelWidth}
          panelHeight={panelHeight}
          setPanelHeight={setPanelHeight}
        />
      );
    } else {
      return <ConnectPane />;
    }
  }, [
    setShowModal,
    panelWidth,
    setPanelWidth,
    panelHeight,
    setPanelHeight,
    setShowNav,
    ceramicContext?.ceramic
  ]);

  if (!showModal) {
    return null;
  }

  return (
    <SModalBackground>
      <SModalContent>
        <SImg src="/flower.svg" alt="" />
        {getModalType()}
      </SModalContent>
    </SModalBackground>
  );
};

export default Modal;
