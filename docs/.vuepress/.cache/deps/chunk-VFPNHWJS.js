import {
  ImageCanvas_default,
  TileQueue_default,
  VectorRenderTile_default,
  VectorTile_default
} from "./chunk-TG33FKFN.js";
import {
  loadFeaturesXhr
} from "./chunk-5ZDNWXCQ.js";
import {
  Tile_default as Tile_default3
} from "./chunk-DYUNGP2M.js";
import {
  Layer_default,
  Layer_default3 as Layer_default2,
  ViewHint_default
} from "./chunk-6ZURMBVA.js";
import {
  TileGrid_default,
  TileImage_default,
  Tile_default as Tile_default2,
  UrlTile_default,
  createFromTemplates,
  createXYZ,
  extentFromProjection
} from "./chunk-2T4BANHD.js";
import {
  TileCache_default,
  fromKey,
  getCacheKeyForTileKey,
  getKeyZXY
} from "./chunk-4HUDH2X5.js";
import {
  Source_default
} from "./chunk-PKGI5USR.js";
import {
  ERROR_THRESHOLD,
  Triangulation_default,
  calculateSourceExtentResolution,
  calculateSourceResolution,
  canvasPool,
  render
} from "./chunk-OF5H6CRM.js";
import {
  TileState_default,
  Tile_default
} from "./chunk-3C6LSC5V.js";
import {
  DEFAULT_MAX_ZOOM
} from "./chunk-ED3LVK3A.js";
import {
  ImageBase_default,
  toSize
} from "./chunk-CVLUVQGU.js";
import {
  ImageState_default,
  createCanvasContext2D,
  releaseCanvas
} from "./chunk-7L63NS2R.js";
import {
  apply,
  compose,
  create,
  makeInverse,
  toString
} from "./chunk-LUOILEKQ.js";
import {
  equivalent,
  fromUserExtent,
  get,
  getTransformFromProjections
} from "./chunk-5HKLM7RS.js";
import {
  clamp
} from "./chunk-MRQCEQD2.js";
import {
  abstract,
  getUid
} from "./chunk-CVB4T47V.js";
import {
  Disposable_default,
  EventType_default,
  Event_default,
  linearFindNearest,
  listen,
  unlistenByKey
} from "./chunk-M7GNM6RX.js";
import {
  isEmpty
} from "./chunk-SDN6AWWT.js";
import {
  applyTransform,
  buffer,
  containsCoordinate,
  containsExtent,
  equals,
  getArea,
  getCenter,
  getHeight,
  getIntersection,
  getWidth,
  intersects,
  isEmpty as isEmpty2
} from "./chunk-SVEQH656.js";
import {
  assert
} from "./chunk-EJMS2UXH.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/reproj/Image.js
var ReprojImage = class extends ImageBase_default {
  /**
   * @param {import("../proj/Projection.js").default} sourceProj Source projection (of the data).
   * @param {import("../proj/Projection.js").default} targetProj Target projection.
   * @param {import("../extent.js").Extent} targetExtent Target extent.
   * @param {number} targetResolution Target resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {FunctionType} getImageFunction
   *     Function returning source images (extent, resolution, pixelRatio).
   * @param {boolean} interpolate Use linear interpolation when resampling.
   */
  constructor(sourceProj, targetProj, targetExtent, targetResolution, pixelRatio, getImageFunction, interpolate) {
    const maxSourceExtent = sourceProj.getExtent();
    const maxTargetExtent = targetProj.getExtent();
    const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
    const targetCenter = getCenter(limitedTargetExtent);
    const sourceResolution = calculateSourceResolution(
      sourceProj,
      targetProj,
      targetCenter,
      targetResolution
    );
    const errorThresholdInPixels = ERROR_THRESHOLD;
    const triangulation = new Triangulation_default(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      maxSourceExtent,
      sourceResolution * errorThresholdInPixels,
      targetResolution
    );
    const sourceExtent = triangulation.calculateSourceExtent();
    const sourceImage = getImageFunction(
      sourceExtent,
      sourceResolution,
      pixelRatio
    );
    const state = sourceImage ? ImageState_default.IDLE : ImageState_default.EMPTY;
    const sourcePixelRatio = sourceImage ? sourceImage.getPixelRatio() : 1;
    super(targetExtent, targetResolution, sourcePixelRatio, state);
    this.targetProj_ = targetProj;
    this.maxSourceExtent_ = maxSourceExtent;
    this.triangulation_ = triangulation;
    this.targetResolution_ = targetResolution;
    this.targetExtent_ = targetExtent;
    this.sourceImage_ = sourceImage;
    this.sourcePixelRatio_ = sourcePixelRatio;
    this.interpolate_ = interpolate;
    this.canvas_ = null;
    this.sourceListenerKey_ = null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    if (this.state == ImageState_default.LOADING) {
      this.unlistenSource_();
    }
    super.disposeInternal();
  }
  /**
   * @return {HTMLCanvasElement} Image.
   */
  getImage() {
    return this.canvas_;
  }
  /**
   * @return {import("../proj/Projection.js").default} Projection.
   */
  getProjection() {
    return this.targetProj_;
  }
  /**
   * @private
   */
  reproject_() {
    const sourceState = this.sourceImage_.getState();
    if (sourceState == ImageState_default.LOADED) {
      const width = getWidth(this.targetExtent_) / this.targetResolution_;
      const height = getHeight(this.targetExtent_) / this.targetResolution_;
      this.canvas_ = render(
        width,
        height,
        this.sourcePixelRatio_,
        this.sourceImage_.getResolution(),
        this.maxSourceExtent_,
        this.targetResolution_,
        this.targetExtent_,
        this.triangulation_,
        [
          {
            extent: this.sourceImage_.getExtent(),
            image: this.sourceImage_.getImage()
          }
        ],
        0,
        void 0,
        this.interpolate_
      );
    }
    this.state = sourceState;
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state == ImageState_default.IDLE) {
      this.state = ImageState_default.LOADING;
      this.changed();
      const sourceState = this.sourceImage_.getState();
      if (sourceState == ImageState_default.LOADED || sourceState == ImageState_default.ERROR) {
        this.reproject_();
      } else {
        this.sourceListenerKey_ = listen(
          this.sourceImage_,
          EventType_default.CHANGE,
          function(e) {
            const sourceState2 = this.sourceImage_.getState();
            if (sourceState2 == ImageState_default.LOADED || sourceState2 == ImageState_default.ERROR) {
              this.unlistenSource_();
              this.reproject_();
            }
          },
          this
        );
        this.sourceImage_.load();
      }
    }
  }
  /**
   * @private
   */
  unlistenSource_() {
    unlistenByKey(
      /** @type {!import("../events.js").EventsKey} */
      this.sourceListenerKey_
    );
    this.sourceListenerKey_ = null;
  }
};
var Image_default = ReprojImage;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/source/Image.js
var ImageSourceEventType = {
  /**
   * Triggered when an image starts loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadstart
   * @api
   */
  IMAGELOADSTART: "imageloadstart",
  /**
   * Triggered when an image finishes loading.
   * @event module:ol/source/Image.ImageSourceEvent#imageloadend
   * @api
   */
  IMAGELOADEND: "imageloadend",
  /**
   * Triggered if image loading results in an error.
   * @event module:ol/source/Image.ImageSourceEvent#imageloaderror
   * @api
   */
  IMAGELOADERROR: "imageloaderror"
};
var ImageSourceEvent = class extends Event_default {
  /**
   * @param {string} type Type.
   * @param {import("../Image.js").default} image The image.
   */
  constructor(type, image) {
    super(type);
    this.image = image;
  }
};
var ImageSource = class extends Source_default {
  /**
   * @param {Options} options Single image source options.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      projection: options.projection,
      state: options.state,
      interpolate: options.interpolate !== void 0 ? options.interpolate : true
    });
    this.on;
    this.once;
    this.un;
    this.resolutions_ = options.resolutions !== void 0 ? options.resolutions : null;
    this.reprojectedImage_ = null;
    this.reprojectedRevision_ = 0;
  }
  /**
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * @param {Array<number>|null} resolutions Resolutions.
   */
  setResolutions(resolutions) {
    this.resolutions_ = resolutions;
  }
  /**
   * @protected
   * @param {number} resolution Resolution.
   * @return {number} Resolution.
   */
  findNearestResolution(resolution) {
    const resolutions = this.getResolutions();
    if (resolutions) {
      const idx = linearFindNearest(resolutions, resolution, 0);
      resolution = resolutions[idx];
    }
    return resolution;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../ImageBase.js").default} Single image.
   */
  getImage(extent, resolution, pixelRatio, projection) {
    const sourceProjection = this.getProjection();
    if (!sourceProjection || !projection || equivalent(sourceProjection, projection)) {
      if (sourceProjection) {
        projection = sourceProjection;
      }
      return this.getImageInternal(extent, resolution, pixelRatio, projection);
    }
    if (this.reprojectedImage_) {
      if (this.reprojectedRevision_ == this.getRevision() && equivalent(this.reprojectedImage_.getProjection(), projection) && this.reprojectedImage_.getResolution() == resolution && equals(this.reprojectedImage_.getExtent(), extent)) {
        return this.reprojectedImage_;
      }
      this.reprojectedImage_.dispose();
      this.reprojectedImage_ = null;
    }
    this.reprojectedImage_ = new Image_default(
      sourceProjection,
      projection,
      extent,
      resolution,
      pixelRatio,
      (extent2, resolution2, pixelRatio2) => this.getImageInternal(extent2, resolution2, pixelRatio2, sourceProjection),
      this.getInterpolate()
    );
    this.reprojectedRevision_ = this.getRevision();
    return this.reprojectedImage_;
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../ImageBase.js").default} Single image.
   * @protected
   */
  getImageInternal(extent, resolution, pixelRatio, projection) {
    return abstract();
  }
  /**
   * Handle image change events.
   * @param {import("../events/Event.js").default} event Event.
   * @protected
   */
  handleImageChange(event) {
    const image = (
      /** @type {import("../Image.js").default} */
      event.target
    );
    let type;
    switch (image.getState()) {
      case ImageState_default.LOADING:
        this.loading = true;
        type = ImageSourceEventType.IMAGELOADSTART;
        break;
      case ImageState_default.LOADED:
        this.loading = false;
        type = ImageSourceEventType.IMAGELOADEND;
        break;
      case ImageState_default.ERROR:
        this.loading = false;
        type = ImageSourceEventType.IMAGELOADERROR;
        break;
      default:
        return;
    }
    if (this.hasListener(type)) {
      this.dispatchEvent(new ImageSourceEvent(type, image));
    }
  }
};
function defaultImageLoadFunction(image, src) {
  image.getImage().src = src;
}
var Image_default2 = ImageSource;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/BaseImage.js
var BaseImageLayer = class extends Layer_default {
  /**
   * @param {Options<ImageSourceType>} [options] Layer options.
   */
  constructor(options) {
    options = options ? options : {};
    super(options);
  }
};
var BaseImage_default = BaseImageLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/canvas/ImageLayer.js
var CanvasImageLayerRenderer = class extends Layer_default2 {
  /**
   * @param {import("../../layer/Image.js").default} imageLayer Image layer.
   */
  constructor(imageLayer) {
    super(imageLayer);
    this.image_ = null;
  }
  /**
   * @return {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} Image.
   */
  getImage() {
    return this.image_ ? this.image_.getImage() : null;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewResolution = viewState.resolution;
    const imageSource = this.getLayer().getSource();
    const hints = frameState.viewHints;
    let renderedExtent = frameState.extent;
    if (layerState.extent !== void 0) {
      renderedExtent = getIntersection(
        renderedExtent,
        fromUserExtent(layerState.extent, viewState.projection)
      );
    }
    if (!hints[ViewHint_default.ANIMATING] && !hints[ViewHint_default.INTERACTING] && !isEmpty2(renderedExtent)) {
      if (imageSource) {
        const projection = viewState.projection;
        const image = imageSource.getImage(
          renderedExtent,
          viewResolution,
          pixelRatio,
          projection
        );
        if (image) {
          if (this.loadImage(image)) {
            this.image_ = image;
          } else if (image.getState() === ImageState_default.EMPTY) {
            this.image_ = null;
          }
        }
      } else {
        this.image_ = null;
      }
    }
    return !!this.image_;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   */
  getData(pixel) {
    const frameState = this.frameState;
    if (!frameState) {
      return null;
    }
    const layer = this.getLayer();
    const coordinate = apply(
      frameState.pixelToCoordinateTransform,
      pixel.slice()
    );
    const layerExtent = layer.getExtent();
    if (layerExtent) {
      if (!containsCoordinate(layerExtent, coordinate)) {
        return null;
      }
    }
    const imageExtent = this.image_.getExtent();
    const img = this.getImage();
    const imageMapWidth = getWidth(imageExtent);
    const col = Math.floor(
      img.width * ((coordinate[0] - imageExtent[0]) / imageMapWidth)
    );
    if (col < 0 || col >= img.width) {
      return null;
    }
    const imageMapHeight = getHeight(imageExtent);
    const row = Math.floor(
      img.height * ((imageExtent[3] - coordinate[1]) / imageMapHeight)
    );
    if (row < 0 || row >= img.height) {
      return null;
    }
    return this.getImageData(img, col, row);
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(frameState, target) {
    const image = this.image_;
    const imageExtent = image.getExtent();
    const imageResolution = image.getResolution();
    const imagePixelRatio = image.getPixelRatio();
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewCenter = viewState.center;
    const viewResolution = viewState.resolution;
    const scale = pixelRatio * imageResolution / (viewResolution * imagePixelRatio);
    const extent = frameState.extent;
    const resolution = viewState.resolution;
    const rotation = viewState.rotation;
    const width = Math.round(getWidth(extent) / resolution * pixelRatio);
    const height = Math.round(getHeight(extent) / resolution * pixelRatio);
    compose(
      this.pixelTransform,
      frameState.size[0] / 2,
      frameState.size[1] / 2,
      1 / pixelRatio,
      1 / pixelRatio,
      rotation,
      -width / 2,
      -height / 2
    );
    makeInverse(this.inversePixelTransform, this.pixelTransform);
    const canvasTransform = toString(this.pixelTransform);
    this.useContainer(target, canvasTransform, this.getBackground(frameState));
    const context2 = this.context;
    const canvas = context2.canvas;
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
    } else if (!this.containerReused) {
      context2.clearRect(0, 0, width, height);
    }
    let clipped = false;
    let render2 = true;
    if (layerState.extent) {
      const layerExtent = fromUserExtent(
        layerState.extent,
        viewState.projection
      );
      render2 = intersects(layerExtent, frameState.extent);
      clipped = render2 && !containsExtent(layerExtent, frameState.extent);
      if (clipped) {
        this.clipUnrotated(context2, frameState, layerExtent);
      }
    }
    const img = this.getImage();
    const transform = compose(
      this.tempTransform,
      width / 2,
      height / 2,
      scale,
      scale,
      0,
      imagePixelRatio * (imageExtent[0] - viewCenter[0]) / imageResolution,
      imagePixelRatio * (viewCenter[1] - imageExtent[3]) / imageResolution
    );
    this.renderedResolution = imageResolution * pixelRatio / imagePixelRatio;
    const dw = img.width * transform[0];
    const dh = img.height * transform[3];
    if (!this.getLayer().getSource().getInterpolate()) {
      context2.imageSmoothingEnabled = false;
    }
    this.preRender(context2, frameState);
    if (render2 && dw >= 0.5 && dh >= 0.5) {
      const dx = transform[4];
      const dy = transform[5];
      const opacity = layerState.opacity;
      let previousAlpha;
      if (opacity !== 1) {
        previousAlpha = context2.globalAlpha;
        context2.globalAlpha = opacity;
      }
      context2.drawImage(img, 0, 0, +img.width, +img.height, dx, dy, dw, dh);
      if (opacity !== 1) {
        context2.globalAlpha = previousAlpha;
      }
    }
    this.postRender(context2, frameState);
    if (clipped) {
      context2.restore();
    }
    context2.imageSmoothingEnabled = true;
    if (canvasTransform !== canvas.style.transform) {
      canvas.style.transform = canvasTransform;
    }
    return this.container;
  }
};
var ImageLayer_default = CanvasImageLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/Image.js
var ImageLayer = class extends BaseImage_default {
  /**
   * @param {import("./BaseImage.js").Options<ImageSourceType>} [options] Layer options.
   */
  constructor(options) {
    super(options);
  }
  createRenderer() {
    return new ImageLayer_default(this);
  }
  /**
   * Get data for a pixel location.  A four element RGBA array will be returned.  For requests outside the
   * layer extent, `null` will be returned.  Data for an image can only be retrieved if the
   * source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   */
  getData(pixel) {
    return super.getData(pixel);
  }
};
var Image_default3 = ImageLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/source/Raster.js
var hasImageData = true;
try {
  new ImageData(10, 10);
} catch (_) {
  hasImageData = false;
}
var context;
function newImageData(data, width, height) {
  if (hasImageData) {
    return new ImageData(data, width, height);
  }
  if (!context) {
    context = document.createElement("canvas").getContext("2d");
  }
  const imageData = context.createImageData(width, height);
  imageData.data.set(data);
  return imageData;
}
function createMinion(operation) {
  let workerHasImageData = true;
  try {
    new ImageData(10, 10);
  } catch (_) {
    workerHasImageData = false;
  }
  function newWorkerImageData(data, width, height) {
    if (workerHasImageData) {
      return new ImageData(data, width, height);
    }
    return { data, width, height };
  }
  return function(data) {
    const buffers = data["buffers"];
    const meta = data["meta"];
    const imageOps = data["imageOps"];
    const width = data["width"];
    const height = data["height"];
    const numBuffers = buffers.length;
    const numBytes = buffers[0].byteLength;
    if (imageOps) {
      const images = new Array(numBuffers);
      for (let b = 0; b < numBuffers; ++b) {
        images[b] = newWorkerImageData(
          new Uint8ClampedArray(buffers[b]),
          width,
          height
        );
      }
      const output2 = operation(images, meta).data;
      return output2.buffer;
    }
    const output = new Uint8ClampedArray(numBytes);
    const arrays = new Array(numBuffers);
    const pixels = new Array(numBuffers);
    for (let b = 0; b < numBuffers; ++b) {
      arrays[b] = new Uint8ClampedArray(buffers[b]);
      pixels[b] = [0, 0, 0, 0];
    }
    for (let i = 0; i < numBytes; i += 4) {
      for (let j = 0; j < numBuffers; ++j) {
        const array = arrays[j];
        pixels[j][0] = array[i];
        pixels[j][1] = array[i + 1];
        pixels[j][2] = array[i + 2];
        pixels[j][3] = array[i + 3];
      }
      const pixel = operation(pixels, meta);
      output[i] = pixel[0];
      output[i + 1] = pixel[1];
      output[i + 2] = pixel[2];
      output[i + 3] = pixel[3];
    }
    return output.buffer;
  };
}
function createWorker(config, onMessage) {
  const lib = Object.keys(config.lib || {}).map(function(name) {
    return "const " + name + " = " + config.lib[name].toString() + ";";
  });
  const lines = lib.concat([
    "const __minion__ = (" + createMinion.toString() + ")(",
    config.operation.toString(),
    ");",
    'self.addEventListener("message", function(event) {',
    "  const buffer = __minion__(event.data);",
    "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);",
    "});"
  ]);
  const worker = new Worker(
    typeof Blob === "undefined" ? "data:text/javascript;base64," + Buffer.from(lines.join("\n"), "binary").toString("base64") : URL.createObjectURL(new Blob(lines, { type: "text/javascript" }))
  );
  worker.addEventListener("message", onMessage);
  return worker;
}
function createFauxWorker(config, onMessage) {
  const minion = createMinion(config.operation);
  let terminated = false;
  return {
    postMessage: function(data) {
      setTimeout(function() {
        if (terminated) {
          return;
        }
        onMessage({ data: { buffer: minion(data), meta: data["meta"] } });
      }, 0);
    },
    terminate: function() {
      terminated = true;
    }
  };
}
var Processor = class extends Disposable_default {
  /**
   * @param {ProcessorOptions} config Configuration.
   */
  constructor(config) {
    super();
    this._imageOps = !!config.imageOps;
    let threads;
    if (config.threads === 0) {
      threads = 0;
    } else if (this._imageOps) {
      threads = 1;
    } else {
      threads = config.threads || 1;
    }
    const workers = new Array(threads);
    if (threads) {
      for (let i = 0; i < threads; ++i) {
        workers[i] = createWorker(config, this._onWorkerMessage.bind(this, i));
      }
    } else {
      workers[0] = createFauxWorker(
        config,
        this._onWorkerMessage.bind(this, 0)
      );
    }
    this._workers = workers;
    this._queue = [];
    this._maxQueueLength = config.queue || Infinity;
    this._running = 0;
    this._dataLookup = {};
    this._job = null;
  }
  /**
   * Run operation on input data.
   * @param {Array<ImageData>} inputs Array of image data.
   * @param {Object} meta A user data object.  This is passed to all operations
   *     and must be serializable.
   * @param {function(Error, ImageData, Object): void} callback Called when work
   *     completes.  The first argument is any error.  The second is the ImageData
   *     generated by operations.  The third is the user data object.
   */
  process(inputs, meta, callback) {
    this._enqueue({
      inputs,
      meta,
      callback
    });
    this._dispatch();
  }
  /**
   * Add a job to the queue.
   * @param {Job} job The job.
   */
  _enqueue(job) {
    this._queue.push(job);
    while (this._queue.length > this._maxQueueLength) {
      this._queue.shift().callback(null, null);
    }
  }
  /**
   * Dispatch a job.
   */
  _dispatch() {
    if (this._running || this._queue.length === 0) {
      return;
    }
    const job = this._queue.shift();
    this._job = job;
    const width = job.inputs[0].width;
    const height = job.inputs[0].height;
    const buffers = job.inputs.map(function(input) {
      return input.data.buffer;
    });
    const threads = this._workers.length;
    this._running = threads;
    if (threads === 1) {
      this._workers[0].postMessage(
        {
          buffers,
          meta: job.meta,
          imageOps: this._imageOps,
          width,
          height
        },
        buffers
      );
      return;
    }
    const length = job.inputs[0].data.length;
    const segmentLength = 4 * Math.ceil(length / 4 / threads);
    for (let i = 0; i < threads; ++i) {
      const offset = i * segmentLength;
      const slices = [];
      for (let j = 0, jj = buffers.length; j < jj; ++j) {
        slices.push(buffers[j].slice(offset, offset + segmentLength));
      }
      this._workers[i].postMessage(
        {
          buffers: slices,
          meta: job.meta,
          imageOps: this._imageOps,
          width,
          height
        },
        slices
      );
    }
  }
  /**
   * Handle messages from the worker.
   * @param {number} index The worker index.
   * @param {MessageEvent} event The message event.
   */
  _onWorkerMessage(index, event) {
    if (this.disposed) {
      return;
    }
    this._dataLookup[index] = event.data;
    --this._running;
    if (this._running === 0) {
      this._resolveJob();
    }
  }
  /**
   * Resolve a job.  If there are no more worker threads, the processor callback
   * will be called.
   */
  _resolveJob() {
    const job = this._job;
    const threads = this._workers.length;
    let data, meta;
    if (threads === 1) {
      data = new Uint8ClampedArray(this._dataLookup[0]["buffer"]);
      meta = this._dataLookup[0]["meta"];
    } else {
      const length = job.inputs[0].data.length;
      data = new Uint8ClampedArray(length);
      meta = new Array(threads);
      const segmentLength = 4 * Math.ceil(length / 4 / threads);
      for (let i = 0; i < threads; ++i) {
        const buffer2 = this._dataLookup[i]["buffer"];
        const offset = i * segmentLength;
        data.set(new Uint8ClampedArray(buffer2), offset);
        meta[i] = this._dataLookup[i]["meta"];
      }
    }
    this._job = null;
    this._dataLookup = {};
    job.callback(
      null,
      newImageData(data, job.inputs[0].width, job.inputs[0].height),
      meta
    );
    this._dispatch();
  }
  /**
   * Terminate all workers associated with the processor.
   */
  disposeInternal() {
    for (let i = 0; i < this._workers.length; ++i) {
      this._workers[i].terminate();
    }
    this._workers.length = 0;
  }
};
var RasterEventType = {
  /**
   * Triggered before operations are run.  Listeners will receive an event object with
   * a `data` property that can be used to make data available to operations.
   * @event module:ol/source/Raster.RasterSourceEvent#beforeoperations
   * @api
   */
  BEFOREOPERATIONS: "beforeoperations",
  /**
   * Triggered after operations are run.  Listeners will receive an event object with
   * a `data` property.  If more than one thread is used, `data` will be an array of
   * objects.  If a single thread is used, `data` will be a single object.
   * @event module:ol/source/Raster.RasterSourceEvent#afteroperations
   * @api
   */
  AFTEROPERATIONS: "afteroperations"
};
var RasterSourceEvent = class extends Event_default {
  /**
   * @param {string} type Type.
   * @param {import("../Map.js").FrameState} frameState The frame state.
   * @param {Object|Array<Object>} data An object made available to operations.  For "afteroperations" evenets
   * this will be an array of objects if more than one thread is used.
   */
  constructor(type, frameState, data) {
    super(type);
    this.extent = frameState.extent;
    this.resolution = frameState.viewState.resolution / frameState.pixelRatio;
    this.data = data;
  }
};
var RasterSource = class extends Image_default2 {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    super({
      projection: null
    });
    this.on;
    this.once;
    this.un;
    this.processor_ = null;
    this.operationType_ = options.operationType !== void 0 ? options.operationType : "pixel";
    this.threads_ = options.threads !== void 0 ? options.threads : 1;
    this.layers_ = createLayers(options.sources);
    const changed = this.changed.bind(this);
    for (let i = 0, ii = this.layers_.length; i < ii; ++i) {
      this.layers_[i].addEventListener(EventType_default.CHANGE, changed);
    }
    this.useResolutions_ = options.resolutions !== null;
    this.tileQueue_ = new TileQueue_default(function() {
      return 1;
    }, this.changed.bind(this));
    this.requestedFrameState_;
    this.renderedImageCanvas_ = null;
    this.renderedRevision_;
    this.frameState_ = {
      animate: false,
      coordinateToPixelTransform: create(),
      declutterTree: null,
      extent: null,
      index: 0,
      layerIndex: 0,
      layerStatesArray: getLayerStatesArray(this.layers_),
      pixelRatio: 1,
      pixelToCoordinateTransform: create(),
      postRenderFunctions: [],
      size: [0, 0],
      tileQueue: this.tileQueue_,
      time: Date.now(),
      usedTiles: {},
      viewState: (
        /** @type {import("../View.js").State} */
        {
          rotation: 0
        }
      ),
      viewHints: [],
      wantedTiles: {},
      mapId: getUid(this),
      renderTargets: {}
    };
    this.setAttributions(function(frameState) {
      const attributions = [];
      for (let index = 0, iMax = options.sources.length; index < iMax; ++index) {
        const sourceOrLayer = options.sources[index];
        const source = sourceOrLayer instanceof Source_default ? sourceOrLayer : sourceOrLayer.getSource();
        if (!source) {
          continue;
        }
        const attributionGetter = source.getAttributions();
        if (typeof attributionGetter === "function") {
          const sourceAttribution = attributionGetter(frameState);
          attributions.push.apply(attributions, sourceAttribution);
        }
      }
      return attributions.length !== 0 ? attributions : null;
    });
    if (options.operation !== void 0) {
      this.setOperation(options.operation, options.lib);
    }
  }
  /**
   * Set the operation.
   * @param {Operation} operation New operation.
   * @param {Object} [lib] Functions that will be available to operations run
   *     in a worker.
   * @api
   */
  setOperation(operation, lib) {
    if (this.processor_) {
      this.processor_.dispose();
    }
    this.processor_ = new Processor({
      operation,
      imageOps: this.operationType_ === "image",
      queue: 1,
      lib,
      threads: this.threads_
    });
    this.changed();
  }
  /**
   * Update the stored frame state.
   * @param {import("../extent.js").Extent} extent The view extent (in map units).
   * @param {number} resolution The view resolution.
   * @param {import("../proj/Projection.js").default} projection The view projection.
   * @return {import("../Map.js").FrameState} The updated frame state.
   * @private
   */
  updateFrameState_(extent, resolution, projection) {
    const frameState = (
      /** @type {import("../Map.js").FrameState} */
      Object.assign({}, this.frameState_)
    );
    frameState.viewState = /** @type {import("../View.js").State} */
    Object.assign({}, frameState.viewState);
    const center = getCenter(extent);
    frameState.size[0] = Math.ceil(getWidth(extent) / resolution);
    frameState.size[1] = Math.ceil(getHeight(extent) / resolution);
    frameState.extent = [
      center[0] - frameState.size[0] * resolution / 2,
      center[1] - frameState.size[1] * resolution / 2,
      center[0] + frameState.size[0] * resolution / 2,
      center[1] + frameState.size[1] * resolution / 2
    ];
    frameState.time = Date.now();
    const viewState = frameState.viewState;
    viewState.center = center;
    viewState.projection = projection;
    viewState.resolution = resolution;
    return frameState;
  }
  /**
   * Determine if all sources are ready.
   * @return {boolean} All sources are ready.
   * @private
   */
  allSourcesReady_() {
    let ready = true;
    let source;
    for (let i = 0, ii = this.layers_.length; i < ii; ++i) {
      source = this.layers_[i].getSource();
      if (!source || source.getState() !== "ready") {
        ready = false;
        break;
      }
    }
    return ready;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../ImageCanvas.js").default} Single image.
   */
  getImage(extent, resolution, pixelRatio, projection) {
    if (!this.allSourcesReady_()) {
      return null;
    }
    resolution = this.findNearestResolution(resolution);
    const frameState = this.updateFrameState_(extent, resolution, projection);
    this.requestedFrameState_ = frameState;
    if (this.renderedImageCanvas_) {
      const renderedResolution = this.renderedImageCanvas_.getResolution();
      const renderedExtent = this.renderedImageCanvas_.getExtent();
      if (resolution !== renderedResolution || !equals(frameState.extent, renderedExtent)) {
        this.renderedImageCanvas_ = null;
      }
    }
    if (!this.renderedImageCanvas_ || this.getRevision() !== this.renderedRevision_) {
      this.processSources_();
    }
    frameState.tileQueue.loadMoreTiles(16, 16);
    if (frameState.animate) {
      requestAnimationFrame(this.changed.bind(this));
    }
    return this.renderedImageCanvas_;
  }
  /**
   * Start processing source data.
   * @private
   */
  processSources_() {
    const frameState = this.requestedFrameState_;
    const len = this.layers_.length;
    const imageDatas = new Array(len);
    for (let i = 0; i < len; ++i) {
      frameState.layerIndex = i;
      frameState.renderTargets = {};
      const imageData = getImageData(this.layers_[i], frameState);
      if (imageData) {
        imageDatas[i] = imageData;
      } else {
        return;
      }
    }
    const data = {};
    this.dispatchEvent(
      new RasterSourceEvent(RasterEventType.BEFOREOPERATIONS, frameState, data)
    );
    this.processor_.process(
      imageDatas,
      data,
      this.onWorkerComplete_.bind(this, frameState)
    );
  }
  /**
   * Called when pixel processing is complete.
   * @param {import("../Map.js").FrameState} frameState The frame state.
   * @param {Error} err Any error during processing.
   * @param {ImageData} output The output image data.
   * @param {Object|Array<Object>} data The user data (or an array if more than one thread).
   * @private
   */
  onWorkerComplete_(frameState, err, output, data) {
    if (err || !output) {
      return;
    }
    const extent = frameState.extent;
    const resolution = frameState.viewState.resolution;
    if (resolution !== this.requestedFrameState_.viewState.resolution || !equals(extent, this.requestedFrameState_.extent)) {
      return;
    }
    let context2;
    if (this.renderedImageCanvas_) {
      context2 = this.renderedImageCanvas_.getImage().getContext("2d");
    } else {
      const width = Math.round(getWidth(extent) / resolution);
      const height = Math.round(getHeight(extent) / resolution);
      context2 = createCanvasContext2D(width, height);
      this.renderedImageCanvas_ = new ImageCanvas_default(
        extent,
        resolution,
        1,
        context2.canvas
      );
    }
    context2.putImageData(output, 0, 0);
    this.changed();
    this.renderedRevision_ = this.getRevision();
    this.dispatchEvent(
      new RasterSourceEvent(RasterEventType.AFTEROPERATIONS, frameState, data)
    );
    if (frameState.animate) {
      requestAnimationFrame(this.changed.bind(this));
    }
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(projection) {
    if (!this.useResolutions_) {
      return null;
    }
    let resolutions = super.getResolutions();
    if (!resolutions) {
      for (let i = 0, ii = this.layers_.length; i < ii; ++i) {
        const source = this.layers_[i].getSource();
        resolutions = source.getResolutions(projection);
        if (resolutions) {
          break;
        }
      }
    }
    return resolutions;
  }
  disposeInternal() {
    if (this.processor_) {
      this.processor_.dispose();
    }
    super.disposeInternal();
  }
};
RasterSource.prototype.dispose;
var sharedContext = null;
function getImageData(layer, frameState) {
  const renderer = layer.getRenderer();
  if (!renderer) {
    throw new Error("Unsupported layer type: " + layer);
  }
  if (!renderer.prepareFrame(frameState)) {
    return null;
  }
  const width = frameState.size[0];
  const height = frameState.size[1];
  if (width === 0 || height === 0) {
    return null;
  }
  const container = renderer.renderFrame(frameState, null);
  let element;
  if (container instanceof HTMLCanvasElement) {
    element = container;
  } else {
    if (container) {
      element = container.firstElementChild;
    }
    if (!(element instanceof HTMLCanvasElement)) {
      throw new Error("Unsupported rendered element: " + element);
    }
    if (element.width === width && element.height === height) {
      const context2 = element.getContext("2d");
      return context2.getImageData(0, 0, width, height);
    }
  }
  if (!sharedContext) {
    sharedContext = createCanvasContext2D(width, height, void 0, {
      willReadFrequently: true
    });
  } else {
    const canvas = sharedContext.canvas;
    if (canvas.width !== width || canvas.height !== height) {
      sharedContext = createCanvasContext2D(width, height, void 0, {
        willReadFrequently: true
      });
    } else {
      sharedContext.clearRect(0, 0, width, height);
    }
  }
  sharedContext.drawImage(element, 0, 0, width, height);
  return sharedContext.getImageData(0, 0, width, height);
}
function getLayerStatesArray(layers) {
  return layers.map(function(layer) {
    return layer.getLayerState();
  });
}
function createLayers(sources) {
  const len = sources.length;
  const layers = new Array(len);
  for (let i = 0; i < len; ++i) {
    layers[i] = createLayer(sources[i]);
  }
  return layers;
}
function createLayer(layerOrSource) {
  let layer;
  if (layerOrSource instanceof Source_default) {
    if (layerOrSource instanceof Tile_default2) {
      layer = new Tile_default3({ source: layerOrSource });
    } else if (layerOrSource instanceof Image_default2) {
      layer = new Image_default3({ source: layerOrSource });
    }
  } else {
    layer = layerOrSource;
  }
  return layer;
}
var Raster_default = RasterSource;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/net.js
function jsonp(url, callback, errback, callbackParam) {
  const script = document.createElement("script");
  const key = "olc_" + getUid(callback);
  function cleanup() {
    delete window[key];
    script.parentNode.removeChild(script);
  }
  script.async = true;
  script.src = url + (url.includes("?") ? "&" : "?") + (callbackParam || "callback") + "=" + key;
  const timer = setTimeout(function() {
    cleanup();
    if (errback) {
      errback();
    }
  }, 1e4);
  window[key] = function(data) {
    clearTimeout(timer);
    cleanup();
    callback(data);
  };
  document.head.appendChild(script);
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/source/TileJSON.js
var TileJSON = class extends TileImage_default {
  /**
   * @param {Options} options TileJSON options.
   */
  constructor(options) {
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      interpolate: options.interpolate,
      projection: get("EPSG:3857"),
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      state: "loading",
      tileLoadFunction: options.tileLoadFunction,
      wrapX: options.wrapX !== void 0 ? options.wrapX : true,
      transition: options.transition,
      zDirection: options.zDirection
    });
    this.tileJSON_ = null;
    this.tileSize_ = options.tileSize;
    if (options.url) {
      if (options.jsonp) {
        jsonp(
          options.url,
          this.handleTileJSONResponse.bind(this),
          this.handleTileJSONError.bind(this)
        );
      } else {
        const client = new XMLHttpRequest();
        client.addEventListener("load", this.onXHRLoad_.bind(this));
        client.addEventListener("error", this.onXHRError_.bind(this));
        client.open("GET", options.url);
        client.send();
      }
    } else if (options.tileJSON) {
      this.handleTileJSONResponse(options.tileJSON);
    } else {
      assert(false, 51);
    }
  }
  /**
   * @private
   * @param {Event} event The load event.
   */
  onXHRLoad_(event) {
    const client = (
      /** @type {XMLHttpRequest} */
      event.target
    );
    if (!client.status || client.status >= 200 && client.status < 300) {
      let response;
      try {
        response = /** @type {Config} */
        JSON.parse(client.responseText);
      } catch (err) {
        this.handleTileJSONError();
        return;
      }
      this.handleTileJSONResponse(response);
    } else {
      this.handleTileJSONError();
    }
  }
  /**
   * @private
   * @param {Event} event The error event.
   */
  onXHRError_(event) {
    this.handleTileJSONError();
  }
  /**
   * @return {Config} The tilejson object.
   * @api
   */
  getTileJSON() {
    return this.tileJSON_;
  }
  /**
   * @protected
   * @param {Config} tileJSON Tile JSON.
   */
  handleTileJSONResponse(tileJSON) {
    const epsg4326Projection = get("EPSG:4326");
    const sourceProjection = this.getProjection();
    let extent;
    if (tileJSON["bounds"] !== void 0) {
      const transform = getTransformFromProjections(
        epsg4326Projection,
        sourceProjection
      );
      extent = applyTransform(tileJSON["bounds"], transform);
    }
    const gridExtent = extentFromProjection(sourceProjection);
    const minZoom = tileJSON["minzoom"] || 0;
    const maxZoom = tileJSON["maxzoom"] || 22;
    const tileGrid = createXYZ({
      extent: gridExtent,
      maxZoom,
      minZoom,
      tileSize: this.tileSize_
    });
    this.tileGrid = tileGrid;
    this.tileUrlFunction = createFromTemplates(tileJSON["tiles"], tileGrid);
    if (tileJSON["attribution"] && !this.getAttributions()) {
      const attributionExtent = extent !== void 0 ? extent : gridExtent;
      this.setAttributions(function(frameState) {
        if (intersects(attributionExtent, frameState.extent)) {
          return [tileJSON["attribution"]];
        }
        return null;
      });
    }
    this.tileJSON_ = tileJSON;
    this.setState("ready");
  }
  /**
   * @protected
   */
  handleTileJSONError() {
    this.setState("error");
  }
};
var TileJSON_default = TileJSON;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/source/VectorTile.js
var VectorTile = class extends UrlTile_default {
  /**
   * @param {!Options} options Vector tile options.
   */
  constructor(options) {
    const projection = options.projection || "EPSG:3857";
    const extent = options.extent || extentFromProjection(projection);
    const tileGrid = options.tileGrid || createXYZ({
      extent,
      maxResolution: options.maxResolution,
      maxZoom: options.maxZoom !== void 0 ? options.maxZoom : 22,
      minZoom: options.minZoom,
      tileSize: options.tileSize || 512
    });
    super({
      attributions: options.attributions,
      attributionsCollapsible: options.attributionsCollapsible,
      cacheSize: options.cacheSize,
      interpolate: true,
      opaque: false,
      projection,
      state: options.state,
      tileGrid,
      tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultLoadFunction,
      tileUrlFunction: options.tileUrlFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX === void 0 ? true : options.wrapX,
      transition: options.transition,
      zDirection: options.zDirection === void 0 ? 1 : options.zDirection
    });
    this.format_ = options.format ? options.format : null;
    this.sourceTileCache = new TileCache_default(this.tileCache.highWaterMark);
    this.overlaps_ = options.overlaps == void 0 ? true : options.overlaps;
    this.tileClass = options.tileClass ? options.tileClass : VectorTile_default;
    this.tileGrids_ = {};
  }
  /**
   * Get features whose bounding box intersects the provided extent. Only features for cached
   * tiles for the last rendered zoom level are available in the source. So this method is only
   * suitable for requesting tiles for extents that are currently rendered.
   *
   * Features are returned in random tile order and as they are included in the tiles. This means
   * they can be clipped, duplicated across tiles, and simplified to the render resolution.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<import("../Feature.js").FeatureLike>} Features.
   * @api
   */
  getFeaturesInExtent(extent) {
    const features = [];
    const tileCache = this.tileCache;
    if (tileCache.getCount() === 0) {
      return features;
    }
    const z = fromKey(tileCache.peekFirstKey())[0];
    const tileGrid = this.tileGrid;
    tileCache.forEach(function(tile) {
      if (tile.tileCoord[0] !== z || tile.getState() !== TileState_default.LOADED) {
        return;
      }
      const sourceTiles = tile.getSourceTiles();
      for (let i = 0, ii = sourceTiles.length; i < ii; ++i) {
        const sourceTile = sourceTiles[i];
        const tileCoord = sourceTile.tileCoord;
        if (intersects(extent, tileGrid.getTileCoordExtent(tileCoord))) {
          const tileFeatures = sourceTile.getFeatures();
          if (tileFeatures) {
            for (let j = 0, jj = tileFeatures.length; j < jj; ++j) {
              const candidate = tileFeatures[j];
              const geometry = candidate.getGeometry();
              if (intersects(extent, geometry.getExtent())) {
                features.push(candidate);
              }
            }
          }
        }
      }
    });
    return features;
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * clear {@link module:ol/TileCache~TileCache} and delete all source tiles
   * @api
   */
  clear() {
    this.tileCache.clear();
    this.sourceTileCache.clear();
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {!Object<string, boolean>} usedTiles Used tiles.
   */
  expireCache(projection, usedTiles) {
    const tileCache = this.getTileCacheForProjection(projection);
    const usedSourceTiles = Object.keys(usedTiles).reduce((acc, key) => {
      const cacheKey = getCacheKeyForTileKey(key);
      const tile = tileCache.peek(cacheKey);
      if (tile) {
        const sourceTiles = tile.sourceTiles;
        for (let i = 0, ii = sourceTiles.length; i < ii; ++i) {
          acc[sourceTiles[i].getKey()] = true;
        }
      }
      return acc;
    }, {});
    super.expireCache(projection, usedTiles);
    this.sourceTileCache.expireCache(usedSourceTiles);
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection").default} projection Projection.
   * @param {VectorRenderTile} tile Vector image tile.
   * @return {Array<import("../VectorTile").default>} Tile keys.
   */
  getSourceTiles(pixelRatio, projection, tile) {
    if (tile.getState() === TileState_default.IDLE) {
      tile.setState(TileState_default.LOADING);
      const urlTileCoord = tile.wrappedTileCoord;
      const tileGrid = this.getTileGridForProjection(projection);
      const extent = tileGrid.getTileCoordExtent(urlTileCoord);
      const z = urlTileCoord[0];
      const resolution = tileGrid.getResolution(z);
      buffer(extent, -resolution, extent);
      const sourceTileGrid = this.tileGrid;
      const sourceExtent = sourceTileGrid.getExtent();
      if (sourceExtent) {
        getIntersection(extent, sourceExtent, extent);
      }
      const sourceZ = sourceTileGrid.getZForResolution(
        resolution,
        this.zDirection
      );
      sourceTileGrid.forEachTileCoord(extent, sourceZ, (sourceTileCoord) => {
        const tileUrl = this.tileUrlFunction(
          sourceTileCoord,
          pixelRatio,
          projection
        );
        const sourceTile = this.sourceTileCache.containsKey(tileUrl) ? this.sourceTileCache.get(tileUrl) : new this.tileClass(
          sourceTileCoord,
          tileUrl ? TileState_default.IDLE : TileState_default.EMPTY,
          tileUrl,
          this.format_,
          this.tileLoadFunction
        );
        tile.sourceTiles.push(sourceTile);
        const sourceTileState = sourceTile.getState();
        if (sourceTileState < TileState_default.LOADED) {
          const listenChange = (event) => {
            this.handleTileChange(event);
            const state = sourceTile.getState();
            if (state === TileState_default.LOADED || state === TileState_default.ERROR) {
              const sourceTileKey = sourceTile.getKey();
              if (sourceTileKey in tile.errorTileKeys) {
                if (sourceTile.getState() === TileState_default.LOADED) {
                  delete tile.errorTileKeys[sourceTileKey];
                }
              } else {
                tile.loadingSourceTiles--;
              }
              if (state === TileState_default.ERROR) {
                tile.errorTileKeys[sourceTileKey] = true;
              } else {
                sourceTile.removeEventListener(EventType_default.CHANGE, listenChange);
              }
              if (tile.loadingSourceTiles === 0) {
                tile.setState(
                  isEmpty(tile.errorTileKeys) ? TileState_default.LOADED : TileState_default.ERROR
                );
              }
            }
          };
          sourceTile.addEventListener(EventType_default.CHANGE, listenChange);
          tile.loadingSourceTiles++;
        }
        if (sourceTileState === TileState_default.IDLE) {
          sourceTile.extent = sourceTileGrid.getTileCoordExtent(sourceTileCoord);
          sourceTile.projection = projection;
          sourceTile.resolution = sourceTileGrid.getResolution(
            sourceTileCoord[0]
          );
          this.sourceTileCache.set(tileUrl, sourceTile);
          sourceTile.load();
        }
      });
      if (!tile.loadingSourceTiles) {
        tile.setState(
          tile.sourceTiles.some(
            (sourceTile) => sourceTile.getState() === TileState_default.ERROR
          ) ? TileState_default.ERROR : TileState_default.LOADED
        );
      }
    }
    return tile.sourceTiles;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!VectorRenderTile} Tile.
   */
  getTile(z, x, y, pixelRatio, projection) {
    const coordKey = getKeyZXY(z, x, y);
    const key = this.getKey();
    let tile;
    if (this.tileCache.containsKey(coordKey)) {
      tile = this.tileCache.get(coordKey);
      if (tile.key === key) {
        return tile;
      }
    }
    const tileCoord = [z, x, y];
    let urlTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord,
      projection
    );
    const sourceExtent = this.getTileGrid().getExtent();
    const tileGrid = this.getTileGridForProjection(projection);
    if (urlTileCoord && sourceExtent) {
      const tileExtent = tileGrid.getTileCoordExtent(urlTileCoord);
      buffer(tileExtent, -tileGrid.getResolution(z), tileExtent);
      if (!intersects(sourceExtent, tileExtent)) {
        urlTileCoord = null;
      }
    }
    let empty = true;
    if (urlTileCoord !== null) {
      const sourceTileGrid = this.tileGrid;
      const resolution = tileGrid.getResolution(z);
      const sourceZ = sourceTileGrid.getZForResolution(resolution, 1);
      const extent = tileGrid.getTileCoordExtent(urlTileCoord);
      buffer(extent, -resolution, extent);
      sourceTileGrid.forEachTileCoord(extent, sourceZ, (sourceTileCoord) => {
        empty = empty && !this.tileUrlFunction(sourceTileCoord, pixelRatio, projection);
      });
    }
    const newTile = new VectorRenderTile_default(
      tileCoord,
      empty ? TileState_default.EMPTY : TileState_default.IDLE,
      urlTileCoord,
      this.getSourceTiles.bind(this, pixelRatio, projection)
    );
    newTile.key = key;
    if (tile) {
      newTile.interimTile = tile;
      newTile.refreshInterimChain();
      this.tileCache.replace(coordKey, newTile);
    } else {
      this.tileCache.set(coordKey, newTile);
    }
    return newTile;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   */
  getTileGridForProjection(projection) {
    const code = projection.getCode();
    let tileGrid = this.tileGrids_[code];
    if (!tileGrid) {
      const sourceTileGrid = this.tileGrid;
      const resolutions = sourceTileGrid.getResolutions().slice();
      const origins = resolutions.map(function(resolution, z) {
        return sourceTileGrid.getOrigin(z);
      });
      const tileSizes = resolutions.map(function(resolution, z) {
        return sourceTileGrid.getTileSize(z);
      });
      const length = DEFAULT_MAX_ZOOM + 1;
      for (let z = resolutions.length; z < length; ++z) {
        resolutions.push(resolutions[z - 1] / 2);
        origins.push(origins[z - 1]);
        tileSizes.push(tileSizes[z - 1]);
      }
      tileGrid = new TileGrid_default({
        extent: sourceTileGrid.getExtent(),
        origins,
        resolutions,
        tileSizes
      });
      this.tileGrids_[code] = tileGrid;
    }
    return tileGrid;
  }
  /**
   * Get the tile pixel ratio for this source.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(pixelRatio) {
    return pixelRatio;
  }
  /**
   * @param {number} z Z.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {import("../size.js").Size} Tile size.
   */
  getTilePixelSize(z, pixelRatio, projection) {
    const tileGrid = this.getTileGridForProjection(projection);
    const tileSize = toSize(tileGrid.getTileSize(z), this.tmpSize);
    return [
      Math.round(tileSize[0] * pixelRatio),
      Math.round(tileSize[1] * pixelRatio)
    ];
  }
  /**
   * Increases the cache size if needed
   * @param {number} tileCount Minimum number of tiles needed.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  updateCacheSize(tileCount, projection) {
    super.updateCacheSize(tileCount * 2, projection);
    this.sourceTileCache.highWaterMark = this.getTileCacheForProjection(projection).highWaterMark;
  }
};
var VectorTile_default2 = VectorTile;
function defaultLoadFunction(tile, url) {
  tile.setLoader(
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} resolution Resolution.
     * @param {import("../proj/Projection.js").default} projection Projection.
     */
    function(extent, resolution, projection) {
      loadFeaturesXhr(
        url,
        tile.getFormat(),
        extent,
        resolution,
        projection,
        tile.onLoad.bind(tile),
        tile.onError.bind(tile)
      );
    }
  );
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/DataTile.js
function asImageLike(data) {
  return data instanceof Image || data instanceof HTMLCanvasElement || data instanceof HTMLVideoElement ? data : null;
}
function asArrayLike(data) {
  return data instanceof Uint8Array || data instanceof Uint8ClampedArray || data instanceof Float32Array || data instanceof DataView ? data : null;
}
var sharedContext2 = null;
function toArray(image) {
  if (!sharedContext2) {
    sharedContext2 = createCanvasContext2D(
      image.width,
      image.height,
      void 0,
      { willReadFrequently: true }
    );
  }
  const canvas = sharedContext2.canvas;
  const width = image.width;
  if (canvas.width !== width) {
    canvas.width = width;
  }
  const height = image.height;
  if (canvas.height !== height) {
    canvas.height = height;
  }
  sharedContext2.drawImage(image, width, height);
  return sharedContext2.getImageData(0, 0, width, height).data;
}
var defaultSize = [256, 256];
var DataTile = class extends Tile_default {
  /**
   * @param {Options} options Tile options.
   */
  constructor(options) {
    const state = TileState_default.IDLE;
    super(options.tileCoord, state, {
      transition: options.transition,
      interpolate: options.interpolate
    });
    this.loader_ = options.loader;
    this.data_ = null;
    this.error_ = null;
    this.size_ = options.size || null;
  }
  /**
   * Get the tile size.
   * @return {import('./size.js').Size} Tile size.
   */
  getSize() {
    if (this.size_) {
      return this.size_;
    }
    const imageData = asImageLike(this.data_);
    if (imageData) {
      return [imageData.width, imageData.height];
    }
    return defaultSize;
  }
  /**
   * Get the data for the tile.
   * @return {Data} Tile data.
   * @api
   */
  getData() {
    return this.data_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   * @api
   */
  getError() {
    return this.error_;
  }
  /**
   * Load not yet loaded URI.
   * @api
   */
  load() {
    if (this.state !== TileState_default.IDLE && this.state !== TileState_default.ERROR) {
      return;
    }
    this.state = TileState_default.LOADING;
    this.changed();
    const self = this;
    this.loader_().then(function(data) {
      self.data_ = data;
      self.state = TileState_default.LOADED;
      self.changed();
    }).catch(function(error) {
      self.error_ = error;
      self.state = TileState_default.ERROR;
      self.changed();
    });
  }
};
var DataTile_default = DataTile;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/reproj/DataTile.js
var ReprojDataTile = class extends DataTile_default {
  /**
   * @param {Options} options Tile options.
   */
  constructor(options) {
    super({
      tileCoord: options.tileCoord,
      loader: () => Promise.resolve(new Uint8Array(4)),
      interpolate: options.interpolate,
      transition: options.transition
    });
    this.pixelRatio_ = options.pixelRatio;
    this.gutter_ = options.gutter;
    this.reprojData_ = null;
    this.reprojError_ = null;
    this.reprojSize_ = void 0;
    this.sourceTileGrid_ = options.sourceTileGrid;
    this.targetTileGrid_ = options.targetTileGrid;
    this.wrappedTileCoord_ = options.wrappedTileCoord || options.tileCoord;
    this.sourceTiles_ = [];
    this.sourcesListenerKeys_ = null;
    this.sourceZ_ = 0;
    const targetExtent = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_
    );
    const maxTargetExtent = this.targetTileGrid_.getExtent();
    let maxSourceExtent = this.sourceTileGrid_.getExtent();
    const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
    if (getArea(limitedTargetExtent) === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    const sourceProj = options.sourceProj;
    const sourceProjExtent = sourceProj.getExtent();
    if (sourceProjExtent) {
      if (!maxSourceExtent) {
        maxSourceExtent = sourceProjExtent;
      } else {
        maxSourceExtent = getIntersection(maxSourceExtent, sourceProjExtent);
      }
    }
    const targetResolution = this.targetTileGrid_.getResolution(
      this.wrappedTileCoord_[0]
    );
    const targetProj = options.targetProj;
    const sourceResolution = calculateSourceExtentResolution(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      targetResolution
    );
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    const errorThresholdInPixels = options.errorThreshold !== void 0 ? options.errorThreshold : ERROR_THRESHOLD;
    this.triangulation_ = new Triangulation_default(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      maxSourceExtent,
      sourceResolution * errorThresholdInPixels,
      targetResolution
    );
    if (this.triangulation_.getTriangles().length === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    this.sourceZ_ = this.sourceTileGrid_.getZForResolution(sourceResolution);
    let sourceExtent = this.triangulation_.calculateSourceExtent();
    if (maxSourceExtent) {
      if (sourceProj.canWrapX()) {
        sourceExtent[1] = clamp(
          sourceExtent[1],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
        sourceExtent[3] = clamp(
          sourceExtent[3],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
      } else {
        sourceExtent = getIntersection(sourceExtent, maxSourceExtent);
      }
    }
    if (!getArea(sourceExtent)) {
      this.state = TileState_default.EMPTY;
    } else {
      const sourceRange = this.sourceTileGrid_.getTileRangeForExtentAndZ(
        sourceExtent,
        this.sourceZ_
      );
      const getTile = options.getTileFunction;
      for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
        for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
          const tile = getTile(this.sourceZ_, srcX, srcY, this.pixelRatio_);
          if (tile) {
            this.sourceTiles_.push(tile);
          }
        }
      }
      if (this.sourceTiles_.length === 0) {
        this.state = TileState_default.EMPTY;
      }
    }
  }
  /**
   * Get the tile size.
   * @return {import('../size.js').Size} Tile size.
   */
  getSize() {
    return this.reprojSize_;
  }
  /**
   * Get the data for the tile.
   * @return {import("../DataTile.js").Data} Tile data.
   */
  getData() {
    return this.reprojData_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   */
  getError() {
    return this.reprojError_;
  }
  /**
   * @private
   */
  reproject_() {
    const dataSources = [];
    this.sourceTiles_.forEach((tile) => {
      if (!tile || tile.getState() !== TileState_default.LOADED) {
        return;
      }
      const size = tile.getSize();
      const gutter = this.gutter_;
      let tileData;
      const arrayData = asArrayLike(tile.getData());
      if (arrayData) {
        tileData = arrayData;
      } else {
        tileData = toArray(asImageLike(tile.getData()));
      }
      const pixelSize = [size[0] + 2 * gutter, size[1] + 2 * gutter];
      const isFloat = tileData instanceof Float32Array;
      const pixelCount = pixelSize[0] * pixelSize[1];
      const DataType = isFloat ? Float32Array : Uint8Array;
      const tileDataR = new DataType(tileData.buffer);
      const bytesPerElement = DataType.BYTES_PER_ELEMENT;
      const bytesPerPixel = bytesPerElement * tileDataR.length / pixelCount;
      const bytesPerRow = tileDataR.byteLength / pixelSize[1];
      const bandCount = Math.floor(
        bytesPerRow / bytesPerElement / pixelSize[0]
      );
      const packedLength = pixelCount * bandCount;
      let packedData = tileDataR;
      if (tileDataR.length !== packedLength) {
        packedData = new DataType(packedLength);
        let dataIndex = 0;
        let rowOffset = 0;
        const colCount = pixelSize[0] * bandCount;
        for (let rowIndex = 0; rowIndex < pixelSize[1]; ++rowIndex) {
          for (let colIndex = 0; colIndex < colCount; ++colIndex) {
            packedData[dataIndex++] = tileDataR[rowOffset + colIndex];
          }
          rowOffset += bytesPerRow / bytesPerElement;
        }
      }
      dataSources.push({
        extent: this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord),
        data: new Uint8Array(packedData.buffer),
        dataType: DataType,
        bytesPerPixel,
        pixelSize
      });
    });
    this.sourceTiles_.length = 0;
    if (dataSources.length === 0) {
      this.state = TileState_default.ERROR;
    } else {
      const z = this.wrappedTileCoord_[0];
      const size = this.targetTileGrid_.getTileSize(z);
      const targetWidth = typeof size === "number" ? size : size[0];
      const targetHeight = typeof size === "number" ? size : size[1];
      const targetResolution = this.targetTileGrid_.getResolution(z);
      const sourceResolution = this.sourceTileGrid_.getResolution(
        this.sourceZ_
      );
      const targetExtent = this.targetTileGrid_.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      let dataR, dataU;
      const bytesPerPixel = dataSources[0].bytesPerPixel;
      const reprojs = Math.ceil(bytesPerPixel / 3);
      for (let reproj = reprojs - 1; reproj >= 0; --reproj) {
        const sources = [];
        for (let i = 0, len = dataSources.length; i < len; ++i) {
          const dataSource = dataSources[i];
          const buffer2 = dataSource.data;
          const pixelSize = dataSource.pixelSize;
          const width = pixelSize[0];
          const height = pixelSize[1];
          const context3 = createCanvasContext2D(width, height, canvasPool);
          const imageData2 = context3.createImageData(width, height);
          const data2 = imageData2.data;
          let offset2 = reproj * 3;
          for (let j = 0, len2 = data2.length; j < len2; j += 4) {
            data2[j] = buffer2[offset2];
            data2[j + 1] = buffer2[offset2 + 1];
            data2[j + 2] = buffer2[offset2 + 2];
            data2[j + 3] = 255;
            offset2 += bytesPerPixel;
          }
          context3.putImageData(imageData2, 0, 0);
          sources.push({
            extent: dataSource.extent,
            image: context3.canvas
          });
        }
        const canvas = render(
          targetWidth,
          targetHeight,
          this.pixelRatio_,
          sourceResolution,
          this.sourceTileGrid_.getExtent(),
          targetResolution,
          targetExtent,
          this.triangulation_,
          sources,
          this.gutter_,
          false,
          false
        );
        for (let i = 0, len = sources.length; i < len; ++i) {
          const canvas2 = sources[i].image;
          const context3 = canvas2.getContext("2d");
          releaseCanvas(context3);
          canvasPool.push(context3.canvas);
        }
        const context2 = canvas.getContext("2d");
        const imageData = context2.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        releaseCanvas(context2);
        canvasPool.push(canvas);
        if (!dataR) {
          dataU = new Uint8Array(
            bytesPerPixel * imageData.width * imageData.height
          );
          dataR = new dataSources[0].dataType(dataU.buffer);
        }
        const data = imageData.data;
        let offset = reproj * 3;
        for (let i = 0, len = data.length; i < len; i += 4) {
          if (data[i + 3] === 255) {
            dataU[offset] = data[i];
            dataU[offset + 1] = data[i + 1];
            dataU[offset + 2] = data[i + 2];
          } else {
            dataU[offset] = 0;
            dataU[offset + 1] = 0;
            dataU[offset + 2] = 0;
          }
          offset += bytesPerPixel;
        }
      }
      this.reprojData_ = dataR;
      this.reprojSize_ = [
        Math.round(targetWidth * this.pixelRatio_),
        Math.round(targetHeight * this.pixelRatio_)
      ];
      this.state = TileState_default.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.state !== TileState_default.IDLE && this.state !== TileState_default.ERROR) {
      return;
    }
    this.state = TileState_default.LOADING;
    this.changed();
    let leftToLoad = 0;
    this.sourcesListenerKeys_ = [];
    this.sourceTiles_.forEach((tile) => {
      const state = tile.getState();
      if (state !== TileState_default.IDLE && state !== TileState_default.LOADING) {
        return;
      }
      leftToLoad++;
      const sourceListenKey = listen(
        tile,
        EventType_default.CHANGE,
        function() {
          const state2 = tile.getState();
          if (state2 == TileState_default.LOADED || state2 == TileState_default.ERROR || state2 == TileState_default.EMPTY) {
            unlistenByKey(sourceListenKey);
            leftToLoad--;
            if (leftToLoad === 0) {
              this.unlistenSources_();
              this.reproject_();
            }
          }
        },
        this
      );
      this.sourcesListenerKeys_.push(sourceListenKey);
    });
    if (leftToLoad === 0) {
      setTimeout(this.reproject_.bind(this), 0);
    } else {
      this.sourceTiles_.forEach(function(tile) {
        const state = tile.getState();
        if (state == TileState_default.IDLE) {
          tile.load();
        }
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(unlistenByKey);
    this.sourcesListenerKeys_ = null;
  }
};
var DataTile_default2 = ReprojDataTile;

export {
  asImageLike,
  asArrayLike,
  DataTile_default,
  DataTile_default2,
  defaultImageLoadFunction,
  Image_default2 as Image_default,
  ImageLayer_default,
  Image_default3 as Image_default2,
  Raster_default,
  jsonp,
  TileJSON_default,
  VectorTile_default2 as VectorTile_default,
  defaultLoadFunction
};
//# sourceMappingURL=chunk-VFPNHWJS.js.map
