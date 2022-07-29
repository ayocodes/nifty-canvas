import html2canvas from "html2canvas";
import { create } from "ipfs-http-client";
import { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { Buffer } from "buffer";
import { CeramicContext, CeramicContextValue } from "../context/ceramic";
import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";
import { aliases } from "../utils/constants";

interface IExportButtonProps {
  drawingRef: any;
}

const SExportButton = styled.div`
  right: 49%;
  cursor: pointer;
  bottom: 65px;
  position: absolute;
  z-index: 1000;
  width: 150px;
  height: 35px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  background: #fef9ed;
  color: #bb8bab;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.17);
  border-radius: 15px;
  display: grid;
  place-items: center;
  transition: all 200ms;

  /* center absolute button */
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: 1;

  &:hover {
    background: #fff;
    transform: translate(-50%, 0) scale(1.1);
  }
`;

const SImg = styled.img`
  width: 10px;
`;

const SDiv = styled.div`
  display: flex;
`;

const Div = styled.div`
  width: 8px;
`;
const ExportButton: React.FC<IExportButtonProps> = ({ drawingRef }) => {
  const [buttonText, setButtonText] = useState("EXPORT");
  const ceramicContext = useContext(CeramicContext) as CeramicContextValue;
  const did = ceramicContext?.ceramic?.did?.id;

  const saveToIPFS = async (image: string) => {
    try {
      const projectId = "29XJwoAMJFLgsKPuOTCf9iMl8eI";
      const projectSecret = "1a04ba53dde38b6ea7b97ae46721c0db";
      const auth =
        "Basic " +
        Buffer.from(projectId + ":" + projectSecret).toString("base64");

      const client = create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
        url: "https://ipfs.infura.io:5001/api/v0",
        headers: {
          authorization: auth,
        },
      });

      // Save to IPFS
      const created = await client.add(image);

      // Pin file to infura
      const pinned = await client.pin.add(created.path);
      console.log("this is:", pinned);
      console.log(created);

      // Save cid to firebase db
      const docData = {
        [created.path]: created.path,
      };

      return created.path;
    } catch (error) {
      alert("Could not save to IPFS try again");
      console.error(error);
    }
  };

  const saveToGallery = async ({ artCid }: { artCid: string }) => {
    setButtonText("Almost...");
    fetch("https://us-central1-nifty-canvas-3d5ed.cloudfunctions.net/gallery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artCid,
        did,
      }),
    });
  };

  const saveToProfile = async ({ artCid }: { artCid: string }) => {
    const userModel = new DataModel({
      ceramic: ceramicContext?.ceramic,
      aliases,
    });

    const userProfile = new DIDDataStore({
      ceramic: ceramicContext?.ceramic!,
      model: userModel,
    });

    const doc = await userProfile.get("niftyCanvasUser");

    const createdAt = Date.now();

    if (!doc) {
      const data = {
        did,
        post: [
          {
            artCid,
            createdAt,
          },
        ],
      };

      return await userProfile.set("niftyCanvasUser", { ...data });
    } else {
      const docPost = (doc as any).post;
      const post = [...docPost];

      post.push({
        artCid,
        createdAt,
      });

      const data = {
        did,
        post,
      };

      return await userProfile.set("niftyCanvasUser", { ...data });
    }
  };

  const captureImage = useCallback(async () => {
    setButtonText("Loading...");
    const canvas = await html2canvas(drawingRef.current);
    const image = canvas.toDataURL("image/png", 1.0);
    const artCid = await saveToIPFS(image);
    if (artCid) {
      await saveToGallery({ artCid });
      await saveToProfile({ artCid });
    }
    setButtonText("Done!");
    setTimeout(() => {
      alert("saved to IPFS");
    }, 100);
  }, [saveToIPFS, drawingRef, saveToGallery, saveToProfile]);

  return (
    <SExportButton onClick={async () => await captureImage()}>
      <SDiv>
        {buttonText}
        <Div></Div>
        <SImg src="/Vector.svg" alt="now" />
      </SDiv>
    </SExportButton>
  );
};

export default ExportButton;
