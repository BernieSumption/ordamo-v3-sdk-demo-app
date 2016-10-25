/**
 * This is a content generation module. It exports one function that returns an object.
 * This object is JSON encoded and saved to default-content.json when you
 * run `npm run build:content`. All this happens in a NodeJS process, so it's fine to use
 * Node-only functionality.
 */
"use strict";
var schema_1 = require("./schema");
var sdk = require("ordamo-v3-sdk");
function getContent() {
    return sdk.validateContent(schema_1.default(), {
        image: "image content?",
        imageList: [
            "image 1",
            "image 2"
        ],
        text: "Here's a message!",
        textList: ["Here's a message!", "and another!"]
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getContent;
