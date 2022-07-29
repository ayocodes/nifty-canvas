import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";
import { getResolver } from "@ceramicnetwork/3id-did-resolver";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../constant/theme";
import { CeramicContext } from "./ceramic";
import NavContext from "./navContext";

export default function Context({ children }: { children: React.ReactNode }) {
  const [showNav, setShowNav] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [ceramic, setCeramic] = useState<CeramicClient>();
  const [loading, setLoading] = useState(false);

  const ceramicInit = useCallback(
    ({ ethereum, ethAddress }: { ethereum: any; ethAddress: string }) => {
      try {
        setLoading(true);
        (async () => {
          const threeID = new ThreeIdConnect();

          // Create an EthereumAuthProvider and connect to ceramic node.
          const authProvider = new EthereumAuthProvider(ethereum, ethAddress);
          await threeID.connect(authProvider);
          const ceramic = new CeramicClient(
            process.env.NEXT_PUBLIC_CERAMIC_API_URL
          );

          const did = new DID({
            provider: threeID.getDidProvider(),
            resolver: {
              ...getResolver(ceramic),
            },
          });

          // Authenticate the DID using the 3ID provider from 3ID Connect.
          did
            .authenticate()
            .then(() => {
              ceramic.did = did;
              setCeramic(ceramic);
              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
              alert("something went wrong please connect again 1");
              console.log(e);
            });
        })();
      } catch (e) {
        setLoading(false);
        setCeramic(undefined);
        alert("something went wrong please connect again");
        console.log(e);
      }
    },
    []
  );

  // Initializes app with Etheruem.
  const init = useCallback(() => {
    if ((window as any).ethereum) {
      const ethereum = (window as any).ethereum;

      (async () => {
        try {
          const addresses = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });

          ceramicInit({ ethereum, ethAddress: addresses[0] });
        } catch (e) {
          alert(e);
        }
      })();
    } else {
      alert("Browser doesn't have Metamask");
    }
  }, []);

  // Disconnects from Ethereum.
  const disconnect = () => {
    alert("Disconnected");
  };

  return (
    <CeramicContext.Provider value={{ init, disconnect, ceramic }}>
      <NavContext.Provider value={[showNav, setShowNav]}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </NavContext.Provider>
    </CeramicContext.Provider>
  );
}
