
import * as sdk from "ordamo-v3-sdk";

export const SCHEMA = {
  curiosityImage: sdk.image({doc: "Image of a cat", minWidth: 3}),
  birthdayImage: sdk.image({doc: "Image of a party", minWidth: 3})
};
