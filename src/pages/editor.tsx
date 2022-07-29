import { NextPage } from "next";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import DrawingPanel from "../components/DrawingPanel";
import ExportButton from "../components/ExportButton";
import ResetButton from "../components/ResetButton";
import ScaleSlider from "../components/ScaleSlider";
import Modal from "../components/Modal";

interface IEditorProps {
  blur: boolean;
}

interface IScontrolsProps {
  blur: boolean;
}

const SContent = styled.div`
  display: grid;
  place-items: center;
  background: #ccc6d6;
  height: 100vh;
  width: 100vw;
  /* position: relative; */
`;

const SSketchPicker = styled(SketchPicker)`
  right: -90px;
  top: 150px;
  position: absolute;
  z-index: 1000;
`;

const SCanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 35px;
  overflow: auto;
  background-color: #f4f3fc;
  box-shadow: 0px 4px 51px 22px rgba(0, 0, 0, 0.16);
  /* place-items: center; */
`;

const SCanvas = styled.div`
  display: grid;
  height: 1000rem;
  width: 1000rem;
  place-items: center;
`;

const SControls = styled.div<IScontrolsProps>`
  width: 80vw;
  height: 90vh;
  position: relative;
  filter: ${(props) => (props.blur ? "blur(20px)" : "")};
`;

const Editor: NextPage<IEditorProps> = ({ blur }) => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState("#f44336");
  const [scale, setScale] = useState(20);
  const [drawingRef, setDrawingRef] = useState("");
  const [showModal, setShowModal] = useState(true);

  function changeColor(color: { hex: SetStateAction<string> }) {
    setColor(color.hex);
  }

  return (
    <SContent>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        panelWidth={panelWidth}
        setPanelWidth={setPanelWidth}
        panelHeight={panelHeight}
        setPanelHeight={setPanelHeight}
      />
      <SControls blur={showModal}>
        <ResetButton showModal={showModal} setShowModal={setShowModal} />
        <ScaleSlider min={10} max={100} value={scale} setValue={setScale} />
        <SSketchPicker color={selectedColor} onChangeComplete={changeColor} />
        <ExportButton drawingRef={drawingRef} />

        <SCanvasContainer>
          <SCanvas>
            <DrawingPanel
              scale={scale / 20}
              width={panelWidth}
              height={panelHeight}
              selectedColor={selectedColor}
              setDrawingRef={setDrawingRef}
            />
          </SCanvas>
        </SCanvasContainer>

      </SControls>
    </SContent>
  );
};

export default Editor;
