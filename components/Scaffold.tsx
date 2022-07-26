import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import NavBar from "./NavBar";

interface IScaffoldProp {
  children: React.ReactNode;
}

const SScaffold = styled.div`
  /* display: flex; */
`;


const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <SScaffold>
      {children}
      {/* <Modal /> */}
      <NavBar />
    </SScaffold>
  );
};

export default Scaffold;
