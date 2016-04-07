/// <reference path="../typings/main.d.ts" />
"use strict";

// This is the official Typescript require syntax, providing type checking, so using
// fs.badFunctionName() will fail at compile time. It works because we've added the
// node typings, see https://github.com/typings/typings. Use `npm install -g typings`
// then `typings search packagename` and `typings install packagename`.
import fs = require("fs");

import {OrdamoSDK} from "ordamo-v3-sdk";

if (process.env.NODE_ENV === "development") {
  console.log("This mesage is only printed in development mode");
}

// you can import your own functions. Note how the module is imported as "./lib",
// NOT "./lib.ts" this is important!
import {myFunction} from "./lib";

// This is the untyped import syntax. You can use it when there is no available typing
// for a package you want to use.
let urify = require("urify");

// Example of including a LESS stylesheet. The "lessify browserify transform will handle
// compiling this to CSS and automatically inserting it into the document head
require("./style/app.less");

// Example of embedding a text file. The "brfs" browserify transform compiles this
// into a string declaration containing the file contents
let EMBEDDED_TEXT_CONTENT = fs.readFileSync(__dirname + "/assets/embedded-text.txt", "utf8");

// Example of embedding an image as a data: URI string.
let EMBEDDED_IMAGE_CONTENT = urify(__dirname + "/assets/husky.jpg");

// Example of a Jade template file. The jadeify browserify transform compiles the template
// offline and creates a function that renders it to a string. 
let renderIndexPage = require("./templates/index.jade");

let sdkInstance = new OrdamoSDK(startApp);

function startApp() {
  document.body.innerHTML = renderIndexPage({
    embeddedText: EMBEDDED_TEXT_CONTENT,
    embeddedImageSrc: EMBEDDED_IMAGE_CONTENT,
    sdkFiles: sdkInstance.getFiles(),
    myFunctionResult: myFunction()
  });
  sdkInstance.notifyAppIsReady();
}