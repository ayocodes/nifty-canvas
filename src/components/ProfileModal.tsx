import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import Button from "./Button";
import Text from "./Text";

interface IModal {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 3000;
`;

const SBacground = styled.div`
  width: 100%;
  height: 13rem;
  background: #1a2138;
  position: absolute;
`;

const SPadding = styled.div`
  padding: 0 2rem 2rem;
`;

const SModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  background: ${({ theme }) => `${theme.modal}`};
  border-radius: 1rem;
  height: 100%;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  position: relative;
`;

const SDid = styled(Text)`
  padding: 0.5rem 2rem;
  font-weight: 600;
  position: relative;
  padding-left: 3rem;
`;

const SHeader = styled(Text)`
  font-weight: 600;
  margin: 1rem 0;
  user-select: none;
`;

const SHeader1 = styled(Text)`
  font-weight: 500;
  margin: 2.5rem 0 1rem;
  user-select: none;
`;

const Simg = styled.img`
  width: 1rem;
  height: 1rem;
`;

const STitle = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const SProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SAvatar = styled.img`
  position: relative;
  z-index: 1;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

const SPost = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
`;

const Post = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 1rem;
`;

const SButton = styled(Button)`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #000;
`;

const SBoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`;

const Modal: React.FC<IModal> = ({ modal, setModal }) => {
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;

  const getModalType = useCallback(() => {
    if (ceramicContext?.ceramic) {
      return <Connected setModal={setModal} />;
    } else {
      return <NotConnected />;
    }
  }, [ceramicContext?.ceramic, setModal]);

  if (!modal) {
    return null;
  }

  return (
    <SModal onClick={() => setModal(false)}>
      <SModalContent onClick={(e) => e.stopPropagation()}>
        {getModalType()}
      </SModalContent>
    </SModal>
  );
};

export default Modal;

const Connected = ({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [avatar, setAvatar] = useState<string>();
  const [did, setDid] = useState<string>();
  const [userPosts, setUserPosts] = useState<string[]>();

  useEffect(() => {
    const data = {
      did: "0xc0ff.....979",
      avatar: "/1 (1).jpg",
      userPosts: [
        "/1 (1).jpg",
        "/1 (2).jpg",
        "/1 (3).jpg",
        "/1 (4).jpg",
        "/1 (6).jpg",
        "/1 (5).jpg",
      ],
    };

    setDid(data.did);
    setAvatar(data.avatar);
    setUserPosts(data.userPosts);
  }, []);

  return (
    <>
      <SBacground />
      <SPadding>
        <STitle>
          <SHeader type="h4">Profile</SHeader>
          <Simg onClick={() => setModal(false)} src="/close.svg" alt="" />
        </STitle>

        <SProfile>
          <SAvatar src={avatar} />

          <SDid>{did}</SDid>
        </SProfile>

        <SHeader1 type="h5">Post</SHeader1>
        <SPost>
          {userPosts?.map((post) => (
            <Post src={post}></Post>
          ))}
        </SPost>
      </SPadding>
    </>
  );
};

const NotConnected = () => {
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;
  const [loading, setLoading] = useState<boolean>();

  return (
    <SBoxCenter>
      <h1>please connect your metamask</h1>
      <SButton
        color="#000000"
        func={() => {
          setLoading(true);
          ceramicContext?.init();
        }}
      >
        {loading ? "loading..." : " Connect wallet"}
      </SButton>
      )
    </SBoxCenter>
  );
};
