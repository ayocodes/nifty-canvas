import { NextPage } from "next";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import DrawingPanel from "../components/DrawingPanel";
import Button from "../components/Button";
import ResetButton from "../components/ResetButton";
import ScaleSlider from "../components/ScaleSlider";
// import UserContext from "../context/userContext";

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
  position: relative;
`;

const SControls = styled.div<IScontrolsProps>`
  width: 80vw;
  height: 90vh;
  position: relative;
  filter: ${(props) => (props.blur ? "blur(20px)" : "")};
`;

const Editor: NextPage<IEditorProps> = ({ blur }) => {
  const [modalType, setModalType] = useState("");
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState("#f44336");
  const [scale, setScale] = useState(20);
  const [drawingRef, setDrawingRef] = useState("");
  const [showModal, setShowModal] = useState(true);

  // const [user] = useContext(UserContext);

  function changeColor(color: { hex: SetStateAction<string> }) {
    setColor(color.hex);
  }

  return (
    <SContent>
      <SControls blur={blur}>
        <ResetButton showModal={showModal} setShowModal={setShowModal} setShowNav={()=>{}} />
        <ScaleSlider min={1} max={100} value={scale} setValue={setScale} />
        <SketchPicker color={selectedColor} onChangeComplete={changeColor} />
        <Button>Export</Button>
      </SControls>
    </SContent>
  );
};

export default Editor;
