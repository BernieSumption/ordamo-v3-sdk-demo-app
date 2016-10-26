/**
 * This is a metadata generation module. It exports one default function that returns an object
 * that tells the apphost how to display your app.
 * 
 * It is compiled by the `ordamo-v3-sdk generate` command line utility, which JSON encodes
 * the result of this function and saves it to metadata.json. This happens in a NodeJS process,
 * so it's fine to use Node-only functionality.
 */

declare function require(path: string): any;

import * as sdk from "ordamo-v3-sdk";

export default function getMetadata(): sdk.AppMetadata {
  return {
    // use of sdk.AUTO_METADATA causes the value to be filled in from the package.json fields
    // of the same name when this file is compiled by the ordamo-v3-sdk command line utility 
    id: sdk.AUTO_METADATA,
    version: sdk.AUTO_METADATA,
    description: sdk.AUTO_METADATA,

    defaultIconSrc: "menu-icons/default-app-icon.png",
    menuNodes: [
      {
        iconSrc: "menu-icons/button-1.png",
        navigateButtonId: "button-1"
      },
      {
        iconSrc: "menu-icons/parent.png",
        children: [
          {
            iconSrc: "menu-icons/button-2.png",
            navigateButtonId: "button-2"
          },
          {
            iconSrc: "menu-icons/button-3.png",
            navigateButtonId: "button-3"
          }
        ]
      },
      {
        iconSrc: "menu-icons/close.png",
        closeMenu: true
      }
    ]
  };
}
