

import * as sdk from "ordamo-v3-sdk";
import {DemoAppContent, default as getSchema} from "./content/schema";

let sdkInstance = new sdk.OrdamoSDK({
    initCallback: handleSDKInit,
    contentSchema: getSchema()
});

function handleSDKInit() {
    let content = sdkInstance.getContent();
    showImage("content-image", content.image.value);
    content.imageList.value.forEach(v => showImage("content-image-list", v));

    sdkInstance.notifyAppIsReady();
}

function showImage(container: string, path: string) {
    let img = new Image();
    img.src = path;
    document.getElementById(container).appendChild(img);
}
