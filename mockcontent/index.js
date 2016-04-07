"use strict";

/**
 * This is a mock content module. It exports one function that returns an object.
 * This object is JSON encoded and saved to build/mockcontent.json when you
 * run `npm run mockcontent`.
 */

var urify = require("urify");

module.exports = function() {
  return {
    "files": [
      {
        "id": "curiosity",
        "content": urify(__dirname + '/curiosity.jpg')
      },
      {
        "id": "birthday",
        "content": urify(__dirname + '/birthday.jpg')
      }
    ]
  };
}
