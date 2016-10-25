/// <reference path="../../typings/index.d.ts" />


/**
 * This is a content generation module. It exports one function that returns an object.
 * This object is JSON encoded and saved to default-content.json when you
 * run `npm run build:content`. All this happens in a NodeJS process, so it's fine to use
 * Node-only functionality.
 */

import * as sdk from "ordamo-v3-sdk";
const pkg = require(__dirname + "/../../package.json");
console.log(__dirname);

export function getMetadata(): sdk.AppMetadata {
  return {
    // it's suggested to use the pkginfo package to generate these 3 fields so
    // that they can't get out of sync with your app's package.json
    id: pkg.name,
    version: pkg.version,
    description: pkg.description,

    defaultIconSrc: "/menu-icons/default-app-icon.png",
    menuNodes: [
      {
        iconSrc: "/menu-icons/button-1.png",
        navigateButtonId: "button-1"
      },
      {
        iconSrc: "/menu-icons/parent.png",
        children: [
          {
            iconSrc: "/menu-icons/button-2.png",
            navigateButtonId: "button-2"
          },
          {
            iconSrc: "/menu-icons/button-3.png",
            navigateButtonId: "button-3"
          }
        ]
      },
      {
        iconSrc: "/menu-icons/close.png",
        closeMenu: true
      }
    ]
  };
}
