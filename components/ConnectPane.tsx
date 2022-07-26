import React from "react";
import Text from "./Text";
import styled from "styled-components";
import Button from "./Button";

const SBox = styled.div`
  padding: 40px;
`;

const SText = styled(Text)`
  color: #585858;
  padding-bottom: 1rem;
  font-size: .9rem;
`;

const STitle = styled(Text)`
  color: #585858;
  padding-bottom: 1rem;
  font-weight: 600;
`;

const ConnectPane = () => {
  const handleOnClick = () => {};

  return (
    <SBox>
      <STitle type="h5">Welcome to Nifty Canvas</STitle>
      <SText>
        Nifty Canvas is an app where you create awesome pixel art and share in
        the community gallery! But first, you'll have to sign up with Metamask
      </SText>
      <SText>Sign up with Metamask by pressing the Connect Wallet button</SText>
      <br />
      <Button  func={handleOnClick} >Connect Wallet</Button>
    </SBox>
  );
};

export default ConnectPane;
