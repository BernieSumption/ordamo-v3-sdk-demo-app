

import * as sdk from "ordamo-v3-sdk";
import getSchema from "./content-schema";

let sdkInstance = new sdk.OrdamoSDK({
    initCallback: handleSDKInit,
    contentSchema: getSchema(),
    fullscreen: true
});

function handleSDKInit() {
    let content = sdkInstance.getContent();

    showFieldTitle(content.image.title, "content-image-title");
    showSpecJSON(content.image, "content-image-spec");
    showValue(image, content.image.value, "content-image", true);

    showFieldTitle(content.imageList.title, "content-image-list-title");
    showSpecJSON(content.imageList, "content-image-list-spec");
    showListValue(image, content.imageList.value, "content-image-list", true);

    showFieldTitle(content.text.title, "content-text-title");
    showSpecJSON(content.text, "content-text-spec");
    showValue(text, content.text.value, "content-text");

    showFieldTitle(content.textList.title, "content-text-list-title");
    showSpecJSON(content.textList, "content-text-list-spec");
    showListValue(text, content.textList.value, "content-text-list");

    showFieldTitle(content.video.title, "content-video-title");
    showSpecJSON(content.video, "content-video-spec");
    showValue(video, content.video.value, "content-video", true);

    showFieldTitle(content.videoList.title, "content-video-list-title");
    showSpecJSON(content.videoList, "content-video-list-spec");
    showListValue(video, content.videoList.value, "content-video-list", true);

    showFieldTitle(content.number.title, "content-number-title");
    showSpecJSON(content.number, "content-number-spec");
    showValue(text, content.number.value, "content-number");

    showFieldTitle(content.numberList.title, "content-number-list-title");
    showSpecJSON(content.numberList, "content-number-list-spec");
    showListValue(text, content.numberList.value, "content-number-list");

    setupClickableLinks();

    drawPlateSpotLocations();

    sdkInstance.notifyAppIsReady();
}

function image(path: string) {
    let img = new Image();
    img.src = path;
    return img;
}

function video(path: string) {
    let video = document.createElement("video");
    video.src = path;
    video.controls = true;
    return video;
}

function text(text: any, className = "text-content") {
    let span = document.createElement("span");
    span.textContent = text;
    span.className = className;
    return span;
}

function showValue<T>(template: (content: T) => HTMLElement, content: T, containerId: string, copyValueToLabel = false) {
    document.getElementById(containerId).appendChild(text("Content from default-content.json:"));
    if (copyValueToLabel) {
        document.getElementById(containerId).appendChild(text(String(content), "label"));
    }
    document.getElementById(containerId).appendChild(template(content));
}

function showListValue<T>(template: (content: T) => HTMLElement, content: T[], containerId: string, copyValueToLabel = false) {
    document.getElementById(containerId).appendChild(text("Content from default-content.json:"));
    let container = document.getElementById(containerId);
    content.forEach(v => {
        if (copyValueToLabel) {
            container.appendChild(text(String(v), "label"));
        }
        container.appendChild(template(v));
    });
}

function showFieldTitle(title: string, containerId: string) {
    document.getElementById(containerId).appendChild(text(title));
}

function showSpecJSON(content: any, containerId: string) {
    showFieldTitle("Field spec in content-schema.json:", containerId);
    document.getElementById(containerId).appendChild(text(JSON.stringify((Object as any).assign({}, content, { value: undefined }), null, "    ")));
}

function drawPlateSpotLocations() {
    let layout = sdkInstance.getLayout();
    let canvas = document.getElementById("plate-spot-canvas") as HTMLCanvasElement;
    canvas.width = layout.widthPx;
    canvas.height = layout.heightPx;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#F9B";
    for (let plate of layout.plateSpots) {
        ctx.beginPath();
        ctx.ellipse(plate.x, plate.y, plate.radius, plate.radius, 0, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.fillStyle = "#9BF";
    for (let area of layout.contentAreas) {
        ctx.save();
        ctx.translate(area.x, area.y);
        ctx.rotate(area.rotationDegrees / 180 * Math.PI);
        ctx.fillRect(-area.width / 2, -area.height / 2, area.width, area.height);
        ctx.restore();
    }
}

function setupClickableLinks() {
    document.getElementById("plate-spot-link").addEventListener("touchstart", e => {
        document.location.href = (e.currentTarget as HTMLAnchorElement).href;
    });
    document.getElementById("request-app-close-button").addEventListener("touchstart", e => {
        sdkInstance.requestAppClose();
    });
}