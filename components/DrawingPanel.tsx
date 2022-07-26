import { useRef, useEffect } from "react";
import Row from "./Row";
import styled from "styled-components";

interface IDrawingPanelProps {
  width: number;
  height: number;
  selectedColor: string;
  scale: number;
  setDrawingRef: any;
}

interface ISDrawingPanel {
    scale: number;
}

const SDrawingPanel = styled.div<ISDrawingPanel>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) => "scale(" + props.scale + ")"};
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.08);
`;

const DrawingPanel: React.FC<IDrawingPanelProps> = ({
  width,
  height,
  selectedColor,
  scale,
  setDrawingRef,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = panelRef.current;
    element && element.scrollIntoView();
  }, []);

  useEffect(() => {
    setDrawingRef(panelRef);
  }, []);

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <SDrawingPanel scale={scale}>
      <div ref={panelRef}>{rows}</div>
    </SDrawingPanel>
  );
};

export default DrawingPanel;
