import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import Button from "./Button";
import Text from "./Text";

const SButton = styled(Button)`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #bb8bab;
`;

const SContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const SSubTitle = styled.h4`
  color: #6b6b6b;
  margin-bottom: 0.9rem;
  font-size: 0.9rem;
`;

const STitle = styled(Text)`
  color: #585858;
  padding-bottom: 1rem;
  font-weight: 600;
`;

const ConnectPane: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;

  return (
    <SContainer>
      <STitle style={{ fontSize: "20px", paddingBottom: "20px" }}>
        WELCOME TO NIFTY CANVAS
      </STitle>
      <SSubTitle>
        Nifty Canvas is an app where you create your awesome art work and share
        with the community!
      </SSubTitle>
      <SSubTitle>
        Sign up with Metamask by pressing the connect wallet button
      </SSubTitle>
      <SButton
        func={() => {
          setLoading(true);
          ceramicContext?.init();
        }}
      >
        {loading ? "loading..." : " Connect wallet"}
      </SButton>
    </SContainer>
  );
};

export default ConnectPane;
