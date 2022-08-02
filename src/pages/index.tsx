import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ArtModal from "../components/ArtModal";
import ShowcaseArt from "../components/ShowcaseArt";
import Text from "../components/Text";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import { getDocument } from "../utils/helper";

interface IGalleryProps {
  artCid: string;
  createdAt: string;
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
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 0 4.2rem 0.5rem;
`;

const Home: NextPage = () => {
  const [art, setArt] = useState<IGalleryProps[]>();
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;

  useEffect(() => {
    const did = "did:key:z6MkmCyfE4gnNiBYQY7oofXiC2xe1qqfC3itXQ9QES8sDhDw";
    const family =
      "kjzl6cwe1jw14b4nq86onfgwdsypg7hqxz1h65tckf1xjpe0y4u7e61tz0zqhjm";

    (async () => {
      const doc = await getDocument({ did, family });
      const data = (doc?.content as any).data as IGalleryProps[];
      setArt(data.reverse());
    })();
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
              key={art.artCid}
              artCid={art.artCid}
              createdAt={art.createdAt}
              did={art.did}
            />
          ))}
        </SBox>
      </SShowcase>
    </div>
  );
};

export default Home;
