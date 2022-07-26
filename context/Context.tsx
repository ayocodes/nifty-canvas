import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../constant/theme";
import { CeramicContext } from "./ceramic";
import ThemeContext from "./theme";

const API_URL = "https://ceramic-clay.3boxlabs.com";

export default function Context({ children }: { children: any }) {
  const [theme, setTheme] = useState("dark");

  const [ethereum, setEthereum] = useState();
  const [ethAddress, setEthAddress] = useState();
  const [ceramic, setCeramic] = useState<CeramicClient>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      if (ethereum && ethAddress) {
        setLoading(true);
        (async () => {
          const threeID = new ThreeIdConnect();

          // Create an EthereumAuthProvider using the Ethereum provider and requested account
          const authProvider = new EthereumAuthProvider(ethereum, ethAddress);

          // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
          // generate the authentication secret
          await threeID.connect(authProvider);

          // Connect to a Ceramic node
          const ceramic = new CeramicClient(API_URL);

          const did = new DID({
            provider: threeID.getDidProvider(),
            resolver: {
              ...getResolver(ceramic),
            },
          });

          // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
          // authentication flow using 3ID Connect and the Ethereum provider
          did
            .authenticate()
            .then(() => {
              // The Ceramic client can create and update streams using the authenticated DID
              ceramic.did = did;

              setCeramic(ceramic);

              setLoading(false);
            })
            .catch((e) => {
              setLoading(false);
              alert("something went wrong please connect again");
              console.log(e);
            });
        })();
      }
    } catch (e) {
      setLoading(false);
      alert("something went wrong please connect again");
      console.log(e);
    }
  }, [ethereum, ethAddress]);

  // Initializes the app with etheruem.
  const init = useCallback(() => {
    if ((window as any).ethereum) {
      setEthereum((window as any).ethereum);
      (async () => {
        try {
          const addresses = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
          });
          setEthAddress(addresses[0]);
        } catch (e) {
          alert(e);
        }
      })();
    } else {
      alert("Browser doesn't have Metamask");
    }
  }, []);

  // Disconnects from ethereum.
  const disconnect = () => {
    alert("Disconnected");
  };

  return (
    <CeramicContext.Provider value={{ init, disconnect, ceramic }}>
      <ThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </CeramicContext.Provider>
  );
}
