import {
  ImageState_default
} from "./chunk-7L63NS2R.js";
import {
  IMAGE_DECODE
} from "./chunk-WZHGFLG3.js";
import {
  abstract
} from "./chunk-CVB4T47V.js";
import {
  EventType_default,
  Target_default,
  listenOnce,
  unlistenByKey
} from "./chunk-M7GNM6RX.js";
import {
  getHeight
} from "./chunk-SVEQH656.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/ImageBase.js
var ImageBase = class extends Target_default {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("./ImageState.js").default} state State.
   */
  constructor(extent, resolution, pixelRatio, state) {
    super();
    this.extent = extent;
    this.pixelRatio_ = pixelRatio;
    this.resolution = resolution;
    this.state = state;
  }
  /**
   * @protected
   */
  changed() {
    this.dispatchEvent(EventType_default.CHANGE);
  }
  /**
   * @return {import("./extent.js").Extent} Extent.
   */
  getExtent() {
    return this.extent;
  }
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   */
  getImage() {
    return abstract();
  }
  /**
   * @return {number} PixelRatio.
   */
  getPixelRatio() {
    return this.pixelRatio_;
  }
  /**
   * @return {number} Resolution.
   */
  getResolution() {
    return (
      /** @type {number} */
      this.resolution
    );
  }
  /**
   * @return {import("./ImageState.js").default} State.
   */
  getState() {
    return this.state;
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    abstract();
  }
};
var ImageBase_default = ImageBase;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/Image.js
var ImageWrapper = class extends ImageBase_default {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number|undefined} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {string} src Image source URI.
   * @param {?string} crossOrigin Cross origin.
   * @param {LoadFunction} imageLoadFunction Image load function.
   * @param {CanvasRenderingContext2D} [context] Canvas context. When provided, the image will be
   *    drawn into the context's canvas, and `getImage()` will return the canvas once the image
   *    has finished loading.
   */
  constructor(extent, resolution, pixelRatio, src, crossOrigin, imageLoadFunction, context) {
    super(extent, resolution, pixelRatio, ImageState_default.IDLE);
    this.src_ = src;
    this.image_ = new Image();
    if (crossOrigin !== null) {
      this.image_.crossOrigin = crossOrigin;
    }
    this.context_ = context;
    this.unlisten_ = null;
    this.state = ImageState_default.IDLE;
    this.imageLoadFunction_ = imageLoadFunction;
  }
  /**
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   * @api
   */
  getImage() {
    if (this.state == ImageState_default.LOADED && this.context_ && !(this.image_ instanceof HTMLCanvasElement)) {
      const canvas = this.context_.canvas;
      canvas.width = this.image_.width;
      canvas.height = this.image_.height;
      this.context_.drawImage(this.image_, 0, 0);
      this.image_ = this.context_.canvas;
    }
    return this.image_;
  }
  /**
   * Tracks loading or read errors.
   *
   * @private
   */
  handleImageError_() {
    this.state = ImageState_default.ERROR;
    this.unlistenImage_();
    this.changed();
  }
  /**
   * Tracks successful image load.
   *
   * @private
   */
  handleImageLoad_() {
    if (this.resolution === void 0) {
      this.resolution = getHeight(this.extent) / this.image_.height;
    }
    this.state = ImageState_default.LOADED;
    this.unlistenImage_();
    this.changed();
  }
  /**
   * Load the image or retry if loading previously failed.
   * Loading is taken care of by the tile queue, and calling this method is
   * only needed for preloading or for reloading in case of an error.
   * @api
   */
  load() {
    if (this.state == ImageState_default.IDLE || this.state == ImageState_default.ERROR) {
      this.state = ImageState_default.LOADING;
      this.changed();
      this.imageLoadFunction_(this, this.src_);
      this.unlisten_ = listenImage(
        this.image_,
        this.handleImageLoad_.bind(this),
        this.handleImageError_.bind(this)
      );
    }
  }
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   */
  setImage(image) {
    this.image_ = image;
    this.resolution = getHeight(this.extent) / this.image_.height;
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    if (this.unlisten_) {
      this.unlisten_();
      this.unlisten_ = null;
    }
  }
};
function listenImage(image, loadHandler, errorHandler) {
  const img = (
    /** @type {HTMLImageElement} */
    image
  );
  let listening = true;
  let decoding = false;
  let loaded = false;
  const listenerKeys = [
    listenOnce(img, EventType_default.LOAD, function() {
      loaded = true;
      if (!decoding) {
        loadHandler();
      }
    })
  ];
  if (img.src && IMAGE_DECODE) {
    decoding = true;
    img.decode().then(function() {
      if (listening) {
        loadHandler();
      }
    }).catch(function(error) {
      if (listening) {
        if (loaded) {
          loadHandler();
        } else {
          errorHandler();
        }
      }
    });
  } else {
    listenerKeys.push(listenOnce(img, EventType_default.ERROR, errorHandler));
  }
  return function unlisten() {
    listening = false;
    listenerKeys.forEach(unlistenByKey);
  };
}
var Image_default = ImageWrapper;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/size.js
function buffer(size, num, dest) {
  if (dest === void 0) {
    dest = [0, 0];
  }
  dest[0] = size[0] + 2 * num;
  dest[1] = size[1] + 2 * num;
  return dest;
}
function hasArea(size) {
  return size[0] > 0 && size[1] > 0;
}
function scale(size, ratio, dest) {
  if (dest === void 0) {
    dest = [0, 0];
  }
  dest[0] = size[0] * ratio + 0.5 | 0;
  dest[1] = size[1] * ratio + 0.5 | 0;
  return dest;
}
function toSize(size, dest) {
  if (Array.isArray(size)) {
    return size;
  }
  if (dest === void 0) {
    dest = [size, size];
  } else {
    dest[0] = size;
    dest[1] = size;
  }
  return dest;
}

export {
  ImageBase_default,
  listenImage,
  Image_default,
  buffer,
  hasArea,
  scale,
  toSize
};
//# sourceMappingURL=chunk-CVLUVQGU.js.map
