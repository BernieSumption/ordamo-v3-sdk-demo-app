"use strict";

/**
 * This is a content generation module. It exports one function that returns an object.
 * This object is JSON encoded and saved to build/content.json when you
 * run `npm run content`. All this happens in a NodeJS process, so it's fine to use
 * Node-only functionality.
 */

import {SCHEMA} from "../browser/content-schema";

const urify = require("urify");

export = function generateContent(): typeof SCHEMA {
  return {
    curiosityImage: urify(__dirname + "/assets/curiosity.jpg"),
    birthdayImage: urify(__dirname + "/assets/birthday.jpg")
  };
}
