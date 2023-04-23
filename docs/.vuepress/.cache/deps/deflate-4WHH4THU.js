import {
  inflate_1
} from "./chunk-GZEXC5G4.js";
import {
  BaseDecoder
} from "./chunk-RKN7PNB3.js";
import "./chunk-OZI5HTJH.js";

// node_modules/.pnpm/geotiff@2.0.7/node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=deflate-4WHH4THU.js.map
