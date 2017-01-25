
import * as sdk from "ordamo-v3-sdk";

const SCHEMA = {
  image: sdk.image({
    title: "Single image",
    helpText: "An image with width and height between 50 and 250 pixels",
    minWidth: 50,
    maxWidth: 250,
    minHeight: 50,
    maxHeight: 250
  }),
  imageList: sdk.imageList({
    title: "List of images",
    helpText: "A list of 0-10 images in which each image's must be 2:1 aspect and between 100x200 and 400x800 pixels",
    minCount: 0,
    maxCount: 10,
    items: {
      minWidth: 100,
      maxWidth: 400,
      minHeight: 200,
      maxHeight: 800,
      aspectRatio: 2
    }
  }),
  video: sdk.image({
    title: "Single video",
    helpText: "A video with width and height between 50 and 250 pixels",
    minWidth: 50,
    maxWidth: 250,
    minHeight: 50,
    maxHeight: 250,
    isVideo: true
  }),
  videoList: sdk.imageList({
    title: "List of videos",
    helpText: "A list of videos, each with width and height between 50 and 250 pixels",
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
    helpText: "A round integer between -10 and 10 inclusive",
    integer: true,
    minValue: -10,
    maxValue: 10
  }),
  numberList: sdk.numberList({
    title: "A list of numbers",
    helpText: "A list of up to 20 numbers with no constraints on value",
    minCount: 0,
    maxCount: 20,
    items: {
      integer: false
    }
  }),
  text: sdk.text({
    title: "Bit of text",
    helpText: "A text string between 1 and 50 characters long",
    minLength: 0,
    maxLength: 50,
    multiline: false
  }),
  textList: sdk.textList({
    title: "List of text blocks",
    helpText: "A list of 0-10 text blocks between 1 and 2000 characters long",
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
