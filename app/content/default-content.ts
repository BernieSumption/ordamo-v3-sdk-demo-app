"use strict";

/**
 * This is a content generation module. It exports one function that returns an object.
 * This object is JSON encoded and saved to default-content.json when you
 * run `npm run build:content`. All this happens in a NodeJS process, so it's fine to use
 * Node-only functionality.
 */

import {DemoAppContent, getSchema} from "./schema";
const urify = require("urify");
import * as sdk from "ordamo-v3-sdk";

export function getContent(): DemoAppContent {
  return sdk.validateContent(getSchema(), {
    image: "image content?",
    imageList: [
      "image 1",
      "image 2"
    ],
    text: "Here's a message!",
    textList: ["Here's a message!", "and another!"]
  });
}
