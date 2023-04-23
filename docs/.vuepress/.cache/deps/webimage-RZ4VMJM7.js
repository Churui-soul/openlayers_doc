import {
  BaseDecoder
} from "./chunk-RKN7PNB3.js";
import "./chunk-OZI5HTJH.js";

// node_modules/.pnpm/geotiff@2.0.7/node_modules/geotiff/dist-module/compression/webimage.js
var WebImageDecoder = class extends BaseDecoder {
  constructor() {
    super();
    if (typeof createImageBitmap === "undefined") {
      throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
    } else if (typeof document === "undefined" && typeof OffscreenCanvas === "undefined") {
      throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
    }
  }
  async decode(fileDirectory, buffer) {
    const blob = new Blob([buffer]);
    const imageBitmap = await createImageBitmap(blob);
    let canvas;
    if (typeof document !== "undefined") {
      canvas = document.createElement("canvas");
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
    } else {
      canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    }
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageBitmap, 0, 0);
    return ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height).data.buffer;
  }
};
export {
  WebImageDecoder as default
};
//# sourceMappingURL=webimage-RZ4VMJM7.js.map
