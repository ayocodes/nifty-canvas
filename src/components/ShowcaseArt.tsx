import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface IShowcaseArtProps {
  artUrl: string;
  avatar: string;
  artTitle: string;
  did: string;
  func?: React.MouseEventHandler;

}

const SArt = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
  border: 1px solid;
  background: white;
  border-radius: 10px;
`;

const Simg = styled.img`
  height: calc(23rem - 16px);
  width: calc(19rem - 16px);
  object-fit: cover;
  background-clip: padding-box;
  position: relative;
  border-radius: 8px;
  margin: 8px;
`;

const SUserD = styled.div`
  background: linear-gradient(
    rgba(153, 153, 153, 0.084),
    rgba(0, 0, 0, 0.658),
    rgb(0, 0, 0)
  );
  height: 5.7rem;
  width: 19rem;
  border-radius: 0px 0px 9px 9px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -1px;
`;

const SAvatar = styled.img`
  width: 3.13rem;
  height: 3.13rem;
  margin-left: 1rem;
  border-radius: 50%;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 1.75rem;
`;

const ShowcaseArt: React.FC<IShowcaseArtProps> = ({
  artUrl,
  artTitle,
  avatar,
  did,
  func
}) => {
  return (
    <SArt               
    >
      <Simg src={artUrl} alt="" onClick={func} />
      <SUserD>
        <SAvatar src={avatar} />
        <SBox>
          <Text>{artTitle}</Text>
          <Text type="h6">{did}</Text>
        </SBox>
      </SUserD>
    </SArt>
  );
};

export default ShowcaseArt;
