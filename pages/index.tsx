import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ShowcaseArt from "../components/ShowcaseArt";
import Text from "../components/Text";

interface IGalleryProps {
  artUrl: string;
  avatar: string;
  artTitle: string;
  did: string;
}

const SShowcase = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.3rem 4.2rem;
`;

const SBox = styled.div`
  display: grid;
  grid-row-gap: 3rem;
  grid-column-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  place-items: center;
`;

const STitle = styled(Text)`
  font-size: 4rem;
  font-weight: bold;
  width: min-content;
  line-height: 1.3;
  background: linear-gradient(90deg, #ffafaf -1.57%, #ff2990 127.46%);
  background-clip: text;
  color: transparent;
  margin: 0 0 4.2rem .5rem;
`;

const data = [
  {
    artUrl: "/1 (1).jpg",
    avatar: "/1 (1).jpg",
    artTitle: "daemon",
    did: "eth87....8ury",
  },
  {
    artUrl: "/1 (1).jpg",
    avatar: "/1 (1).jpg",
    artTitle: "daemon",
    did: "eth87....8ury",
  },
  {
    artUrl: "/1 (1).jpg",
    avatar: "/1 (1).jpg",
    artTitle: "daemon",
    did: "eth87....8ury",
  },
];

const Home: NextPage = () => {
  const [art, setArt] = useState<IGalleryProps[]>();

  useEffect(() => {
    setArt(data);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nifty canvas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SShowcase>
        <STitle type="h1">Gallery</STitle>
        <SBox>
          {art?.map((art) => (
            <ShowcaseArt
              artUrl={art.artUrl}
              avatar={art.avatar}
              artTitle={art.artTitle}
              did={art.did}
            />
          ))}
        </SBox>
      </SShowcase>
    </div>
  );
};

export default Home;
