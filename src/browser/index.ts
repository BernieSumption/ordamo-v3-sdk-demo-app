/// <reference path="../../typings/main.d.ts" />
"use strict";

// This is the typed require syntax for external modules. It provides type checking, so
// using fs.badFunctionName() will fail at compile time. `fs` works because we've added the
// node typings, see https://github.com/typings/typings. Use `npm install -g typings`
// then `typings search packagename` and `typings install packagename`.
import fs = require("fs");

// you can also import individual items from modules. Note how the module is imported
// as "./lib" NOT "./lib.ts" this is important!
import {SCHEMA} from "./content-schema";
import {myFunction} from "./lib";
import {OrdamoSDK} from "ordamo-v3-sdk";


// This is the untyped import syntax. You can use it when there is no available typing
// for a package you want to use. You can also use it to import your own JS files
// allowing you to write your app in JS with no type checking if you like
let urify = require("urify");


if (process.env.NODE_ENV === "development") {
  console.log("This mesage is only printed in development mode.",
    "In fact, it is removed entirely from the release build to decrease file size");
}


// Example of embedding a text file. The "brfs" browserify transform compiles this
// into a string declaration containing the file contents
let EMBEDDED_TEXT_CONTENT = fs.readFileSync(__dirname + "/assets/embedded-text.txt", "utf8");


// Example of embedding an image as a data: URI string.
let EMBEDDED_IMAGE_CONTENT = urify(__dirname + "/assets/husky.jpg");


// Example of a Jade template file. The jadeify browserify transform compiles the template
// offline and creates a function that renders it to a string. 
let renderIndexPage = require("./templates/index.jade");


let sdkInstance = new OrdamoSDK(SCHEMA, startApp);

function startApp() {
  let content = sdkInstance.getContent();
  document.body.innerHTML = renderIndexPage({
    embeddedText: EMBEDDED_TEXT_CONTENT,
    embeddedImageSrc: EMBEDDED_IMAGE_CONTENT,
    sdkFiles: [content.birthdayImage, content.curiosityImage]
  });
  sdkInstance.notifyAppIsReady();
}

console.log("Result of myFunction():", myFunction());
