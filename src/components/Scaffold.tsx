import React, { useState } from "react";
import styled from "styled-components";
import ProfileModal from "./ProfileModal";
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
      <ProfileModal modal={modal} setModal={setModal} />
      <NavBar show={true} setModal={setModal} />
    </SScaffold>
  );
};

export default Scaffold;
