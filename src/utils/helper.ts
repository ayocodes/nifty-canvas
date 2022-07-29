import { CeramicClient } from "@ceramicnetwork/http-client";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { randomBytes } from "crypto";
import { API_URL } from "./constants";

export const getDocument = async ({
  did,
  family,
}: {
  did: string;
  family: string;
}) => {
  const ceramic = new CeramicClient(API_URL);

  const doc = await TileDocument.deterministic(ceramic, {
    // Did of the tile controller.
    controllers: [did],

    // Deployed model aliases definition.
    family,
  });

  return doc;
};

// Generates a random did.
export const generateDidKey = () => {
  return randomBytes(16).toString("hex");
};
