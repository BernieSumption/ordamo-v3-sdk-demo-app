"use strict";
var sdk = require("ordamo-v3-sdk");
var SCHEMA = {
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
function getSchema() {
    return SCHEMA;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getSchema;
