/// <reference path="../../typings/index.d.ts" />
"use strict";
var pkg = require(__dirname + "/../../package.json");
console.log(__dirname);
function getMetadata() {
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
exports.getMetadata = getMetadata;
