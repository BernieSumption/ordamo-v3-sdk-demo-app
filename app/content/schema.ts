
import * as sdk from "ordamo-v3-sdk";

const SCHEMA = {
  image: sdk.image({
    title: "Single image",
    minWidth: 50,
    maxWidth: 250,
    minHeight: 50,
    maxHeight: 250
  }),
  imageList: sdk.imageList({
    title: "List of images",
    min: 0,
    max: 10,
    items: {
      minWidth: 50,
      maxWidth: 250,
      minHeight: 50,
      maxHeight: 250
    }
  }),
  text: sdk.text({
    title: "Bit of text",
    minLength: 0,
    maxLength: 200,
    multiline: false
  }),
  textList: sdk.textList({
    title: "List of text blocks",
    min: 0,
    max: 10,
    items: {
      minLength: 1,
      maxLength: 2000,
      multiline: true
    }
  }),
};

export type DemoAppContent = typeof SCHEMA;

export default function getSchema(): DemoAppContent {
  return SCHEMA;
}
