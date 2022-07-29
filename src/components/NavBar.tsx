import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import NavContext from "../context/navContext";

interface INavBar {
  // showNav: any;
  show: any;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ISNavBar {
  // showNav: any;
  show: any;
}

const SNavbar = styled.div<ISNavBar>`
  display: flex;
  position: fixed;
  bottom: 25px;
  border-radius: 50px;
  background: #333333;
  z-index: 2000;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.17);

  ${(props) => (props.show ? "" : "display: none")}
`;

const SItem = styled.div`
  width: 100px;
  height: 50px;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SDiv = styled.div`
  &:hover {
    background: #656565;
    height: 35px;
    width: 75px;
    border-radius: 50px;
    transition: all 200ms;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

const NavBar: React.FC<INavBar> = ({ show, setModal }) => {
  const [showNav, _] = useContext<any>(NavContext);

  return (
    <SNavbar show={showNav}>
      <SItem style={{ borderRadius: "50px" }}>
        <Link href="/">
          <a>
            <SDiv>
              <img
                src="/showcase.svg"
                alt="SHOWCASE"
                style={{ width: "20px", height: "20px" }}
              />
            </SDiv>
          </a>
        </Link>
      </SItem>
      <SItem>
        <Link href="/editor">
          <a>
            <SDiv>
              <img
                src="/canvas.svg"
                alt="CANVAS"
                style={{ width: "20px", height: "20px" }}
              />
            </SDiv>
          </a>
        </Link>
      </SItem>
      <SItem style={{ borderRadius: "50px" }}>
        <SDiv onClick={() => setModal(true)}>
          <img
            src="/profile.svg"
            alt="PROFILE"
            style={{ width: "20px", height: "20px" }}
          />
        </SDiv>
      </SItem>
    </SNavbar>
  );
};

export default NavBar;
