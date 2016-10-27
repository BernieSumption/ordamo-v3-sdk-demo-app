

/**
 * This is a content generation module. It exports one function that returns an object.
 * This object is JSON encoded and saved to default-content.json when you
 * run `npm run build:content`. All this happens in a NodeJS process, so it's fine to use
 * Node-only functionality.
 */


export default function getContent() {
  return {
    image: "default-content/husky.jpg",
    imageList: [
      "default-content/birthday.jpg",
      "default-content/curiosity.jpg"
    ],
    text: "Here's a message!",
    textList: [
      "I'm a little teapot\nshort and stout",
      "here's my handle\nhere's my spout",
      "When I get all steamed up\nI just shout",
      "Tip me over and pour me out"
    ],
    video: "default-content/video.mp4",
    videoList: [
      "default-content/video.ogv",
      "default-content/video.webm"
    ],
    number: 3,
    numberList: [
      4,
      5,
      42,
      65537,
      Math.pow(2, 16),
      2.685452
    ]
  };
}
