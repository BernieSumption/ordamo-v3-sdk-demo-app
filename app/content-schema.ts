
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
    minCount: 0,
    maxCount: 10,
    items: {
      minWidth: 50,
      maxWidth: 250,
      minHeight: 50,
      maxHeight: 250
    }
  }),
  video: sdk.image({
    title: "Single video",
    minWidth: 50,
    maxWidth: 250,
    minHeight: 50,
    maxHeight: 250,
    isVideo: true
  }),
  videoList: sdk.imageList({
    title: "List of videos",
    minCount: 0,
    maxCount: 10,
    items: {
      minWidth: 50,
      maxWidth: 250,
      minHeight: 50,
      maxHeight: 250,
      isVideo: true
    }
  }),
  number: sdk.number({
    title: "A number",
    integer: true
  }),
  numberList: sdk.numberList({
    title: "A list of numbers",
    minCount: 0,
    maxCount: 100,
    items: {
      integer: false,
      minValue: 10,
      maxValue: 100
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
    minCount: 0,
    maxCount: 10,
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
