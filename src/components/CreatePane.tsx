import styled from "styled-components";
import Button from "./Button";
import PixelSlider from "./PixelSlider";
import Text from "./Text";

interface ICreatePaneProps {
  setShowNav: any;
  setShowModal: any;
  panelWidth: any;
  setPanelWidth: any;
  panelHeight: any;
  setPanelHeight: any;
}

const SButton = styled(Button)`
  font-size: 1.5rem;
  margin-top: 2rem;
  color: #bb8bab;
`;

const SContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.h1`
  margin: 0;
  font-size: 25px;
  color: #585858;
`;

const SText1 = styled(Text)`
  color: #6b6b6b;
  font-size: .9rem;
`;
const SText = styled(Text)`
  color: #6b6b6b;
  margin-top: 1rem;
`;

const CreatePane: React.FC<ICreatePaneProps> = ({
  setShowNav,
  setShowModal,
  panelWidth,
  setPanelWidth,
  panelHeight,
  setPanelHeight,
}) => {
  return (
    <SContainer>
      <STitle>Make Your Dream Art!</STitle>
      <SText1>choose your pixel canvas size</SText1>
      <SText>Width</SText>
      <PixelSlider
        max={100}
        min={16}
        value={panelWidth}
        setValue={setPanelWidth}
      />

      <SText>Height</SText>
      <PixelSlider
        max={100}
        min={16}
        value={panelHeight}
        setValue={setPanelHeight}
      />

      <SButton
        func={() => {
          setShowModal(false);
          setShowNav(false);
        }}
      >
        Create
      </SButton>
    </SContainer>
  );
};

export default CreatePane;
