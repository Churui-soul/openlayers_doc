import {
  asColorLike,
  defaultFillStyle,
  defaultLineJoin,
  defaultLineWidth,
  defaultMiterLimit,
  defaultStrokeStyle
} from "./chunk-OJPRZ5YB.js";
import {
  asArray,
  asString
} from "./chunk-JRWFCR3R.js";
import {
  listenImage,
  toSize
} from "./chunk-CVLUVQGU.js";
import {
  ImageState_default,
  createCanvasContext2D
} from "./chunk-7L63NS2R.js";
import {
  abstract,
  getUid
} from "./chunk-CVB4T47V.js";
import {
  EventType_default,
  Target_default
} from "./chunk-M7GNM6RX.js";
import {
  assert
} from "./chunk-EJMS2UXH.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Image.js
var ImageStyle = class {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    this.opacity_ = options.opacity;
    this.rotateWithView_ = options.rotateWithView;
    this.rotation_ = options.rotation;
    this.scale_ = options.scale;
    this.scaleArray_ = toSize(options.scale);
    this.displacement_ = options.displacement;
    this.declutterMode_ = options.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    return new ImageStyle({
      opacity: this.getOpacity(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */
  getOpacity() {
    return this.opacity_;
  }
  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */
  getDisplacement() {
    return this.displacement_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {"declutter"|"obstacle"|"none"|undefined} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */
  getAnchor() {
    return abstract();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getImage(pixelRatio) {
    return abstract();
  }
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getHitDetectionImage() {
    return abstract();
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(pixelRatio) {
    return 1;
  }
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return abstract();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return abstract();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return abstract();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return abstract();
  }
  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(displacement) {
    this.displacement_ = displacement;
  }
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(opacity) {
    this.opacity_ = opacity;
  }
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  }
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(rotation) {
    this.rotation_ = rotation;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(scale) {
    this.scale_ = scale;
    this.scaleArray_ = toSize(scale);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {
    abstract();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    abstract();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {
    abstract();
  }
};
var Image_default = ImageStyle;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/RegularShape.js
var RegularShape = class extends Image_default {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
    super({
      opacity: 1,
      rotateWithView,
      rotation: options.rotation !== void 0 ? options.rotation : 0,
      scale: options.scale !== void 0 ? options.scale : 1,
      displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
      declutterMode: options.declutterMode
    });
    this.canvas_ = void 0;
    this.hitDetectionCanvas_ = null;
    this.fill_ = options.fill !== void 0 ? options.fill : null;
    this.origin_ = [0, 0];
    this.points_ = options.points;
    this.radius_ = options.radius !== void 0 ? options.radius : options.radius1;
    this.radius2_ = options.radius2;
    this.angle_ = options.angle !== void 0 ? options.angle : 0;
    this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
    this.size_ = null;
    this.renderOptions_ = null;
    this.render();
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    const style = new RegularShape({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    style.setOpacity(this.getOpacity());
    return style;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    const size = this.size_;
    if (!size) {
      return null;
    }
    const displacement = this.getDisplacement();
    const scale = this.getScaleArray();
    return [
      size[0] / 2 - displacement[0] / scale[0],
      size[1] / 2 + displacement[1] / scale[1]
    ];
  }
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */
  getAngle() {
    return this.angle_;
  }
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
    this.render();
  }
  /**
   * @return {HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    if (!this.hitDetectionCanvas_) {
      this.createHitDetectionCanvas_(this.renderOptions_);
    }
    return this.hitDetectionCanvas_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(pixelRatio) {
    let image = this.canvas_[pixelRatio];
    if (!image) {
      const renderOptions = this.renderOptions_;
      const context = createCanvasContext2D(
        renderOptions.size * pixelRatio,
        renderOptions.size * pixelRatio
      );
      this.draw_(renderOptions, context, pixelRatio);
      image = context.canvas;
      this.canvas_[pixelRatio] = image;
    }
    return image;
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(pixelRatio) {
    return pixelRatio;
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.size_;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return ImageState_default.LOADED;
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    return this.origin_;
  }
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */
  getPoints() {
    return this.points_;
  }
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return this.radius_;
  }
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */
  getRadius2() {
    return this.radius2_;
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   */
  getSize() {
    return this.size_;
  }
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
    this.render();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {
  }
  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit) {
    if (strokeWidth === 0 || this.points_ === Infinity || lineJoin !== "bevel" && lineJoin !== "miter") {
      return strokeWidth;
    }
    let r1 = this.radius_;
    let r2 = this.radius2_ === void 0 ? r1 : this.radius2_;
    if (r1 < r2) {
      const tmp = r1;
      r1 = r2;
      r2 = tmp;
    }
    const points = this.radius2_ === void 0 ? this.points_ : this.points_ * 2;
    const alpha = 2 * Math.PI / points;
    const a = r2 * Math.sin(alpha);
    const b = Math.sqrt(r2 * r2 - a * a);
    const d = r1 - b;
    const e = Math.sqrt(a * a + d * d);
    const miterRatio = e / a;
    if (lineJoin === "miter" && miterRatio <= miterLimit) {
      return miterRatio * strokeWidth;
    }
    const k = strokeWidth / 2 / miterRatio;
    const l = strokeWidth / 2 * (d / e);
    const maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
    const bevelAdd = maxr - r1;
    if (this.radius2_ === void 0 || lineJoin === "bevel") {
      return bevelAdd * 2;
    }
    const aa = r1 * Math.sin(alpha);
    const bb = Math.sqrt(r1 * r1 - aa * aa);
    const dd = r2 - bb;
    const ee = Math.sqrt(aa * aa + dd * dd);
    const innerMiterRatio = ee / aa;
    if (innerMiterRatio <= miterLimit) {
      const innerLength = innerMiterRatio * strokeWidth / 2 - r2 - r1;
      return 2 * Math.max(bevelAdd, innerLength);
    }
    return bevelAdd * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let lineJoin = defaultLineJoin;
    let miterLimit = 0;
    let lineDash = null;
    let lineDashOffset = 0;
    let strokeStyle;
    let strokeWidth = 0;
    if (this.stroke_) {
      strokeStyle = this.stroke_.getColor();
      if (strokeStyle === null) {
        strokeStyle = defaultStrokeStyle;
      }
      strokeStyle = asColorLike(strokeStyle);
      strokeWidth = this.stroke_.getWidth();
      if (strokeWidth === void 0) {
        strokeWidth = defaultLineWidth;
      }
      lineDash = this.stroke_.getLineDash();
      lineDashOffset = this.stroke_.getLineDashOffset();
      lineJoin = this.stroke_.getLineJoin();
      if (lineJoin === void 0) {
        lineJoin = defaultLineJoin;
      }
      miterLimit = this.stroke_.getMiterLimit();
      if (miterLimit === void 0) {
        miterLimit = defaultMiterLimit;
      }
    }
    const add = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
    const maxRadius = Math.max(this.radius_, this.radius2_ || 0);
    const size = Math.ceil(2 * maxRadius + add);
    return {
      strokeStyle,
      strokeWidth,
      size,
      lineDash,
      lineDashOffset,
      lineJoin,
      miterLimit
    };
  }
  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const size = this.renderOptions_.size;
    this.canvas_ = {};
    this.size_ = [size, size];
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(renderOptions, context, pixelRatio) {
    context.scale(pixelRatio, pixelRatio);
    context.translate(renderOptions.size / 2, renderOptions.size / 2);
    this.createPath_(context);
    if (this.fill_) {
      let color = this.fill_.getColor();
      if (color === null) {
        color = defaultFillStyle;
      }
      context.fillStyle = asColorLike(color);
      context.fill();
    }
    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;
      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }
      context.lineJoin = renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   */
  createHitDetectionCanvas_(renderOptions) {
    if (this.fill_) {
      let color = this.fill_.getColor();
      let opacity = 0;
      if (typeof color === "string") {
        color = asArray(color);
      }
      if (color === null) {
        opacity = 1;
      } else if (Array.isArray(color)) {
        opacity = color.length === 4 ? color[3] : 1;
      }
      if (opacity === 0) {
        const context = createCanvasContext2D(
          renderOptions.size,
          renderOptions.size
        );
        this.hitDetectionCanvas_ = context.canvas;
        this.drawHitDetectionCanvas_(renderOptions, context);
      }
    }
    if (!this.hitDetectionCanvas_) {
      this.hitDetectionCanvas_ = this.getImage(1);
    }
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(context) {
    let points = this.points_;
    const radius = this.radius_;
    if (points === Infinity) {
      context.arc(0, 0, radius, 0, 2 * Math.PI);
    } else {
      const radius2 = this.radius2_ === void 0 ? radius : this.radius2_;
      if (this.radius2_ !== void 0) {
        points *= 2;
      }
      const startAngle = this.angle_ - Math.PI / 2;
      const step = 2 * Math.PI / points;
      for (let i = 0; i < points; i++) {
        const angle0 = startAngle + i * step;
        const radiusC = i % 2 === 0 ? radius : radius2;
        context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
      }
      context.closePath();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(renderOptions, context) {
    context.translate(renderOptions.size / 2, renderOptions.size / 2);
    this.createPath_(context);
    context.fillStyle = defaultFillStyle;
    context.fill();
    if (this.stroke_) {
      context.strokeStyle = renderOptions.strokeStyle;
      context.lineWidth = renderOptions.strokeWidth;
      if (renderOptions.lineDash) {
        context.setLineDash(renderOptions.lineDash);
        context.lineDashOffset = renderOptions.lineDashOffset;
      }
      context.lineJoin = renderOptions.lineJoin;
      context.miterLimit = renderOptions.miterLimit;
      context.stroke();
    }
  }
};
var RegularShape_default = RegularShape;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Circle.js
var CircleStyle = class extends RegularShape_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : { radius: 5 };
    super({
      points: Infinity,
      fill: options.fill,
      radius: options.radius,
      stroke: options.stroke,
      scale: options.scale !== void 0 ? options.scale : 1,
      rotation: options.rotation !== void 0 ? options.rotation : 0,
      rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
      displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
      declutterMode: options.declutterMode
    });
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    const style = new CircleStyle({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    style.setOpacity(this.getOpacity());
    return style;
  }
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(radius) {
    this.radius_ = radius;
    this.render();
  }
};
var Circle_default = CircleStyle;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Fill.js
var Fill = class {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};
    this.color_ = options.color !== void 0 ? options.color : null;
  }
  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const color = this.getColor();
    return new Fill({
      color: Array.isArray(color) ? color.slice() : color || void 0
    });
  }
  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|null} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|null} color Color.
   * @api
   */
  setColor(color) {
    this.color_ = color;
  }
};
var Fill_default = Fill;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/IconImageCache.js
var IconImageCache = class {
  constructor() {
    this.cache_ = {};
    this.cacheSize_ = 0;
    this.maxCacheSize_ = 32;
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.cache_ = {};
    this.cacheSize_ = 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  /**
   * FIXME empty description for jsdoc
   */
  expire() {
    if (this.canExpireCache()) {
      let i = 0;
      for (const key in this.cache_) {
        const iconImage = this.cache_[key];
        if ((i++ & 3) === 0 && !iconImage.hasListener()) {
          delete this.cache_[key];
          --this.cacheSize_;
        }
      }
    }
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */
  get(src, crossOrigin, color) {
    const key = getKey(src, crossOrigin, color);
    return key in this.cache_ ? this.cache_[key] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */
  set(src, crossOrigin, color, iconImage) {
    const key = getKey(src, crossOrigin, color);
    this.cache_[key] = iconImage;
    ++this.cacheSize_;
  }
  /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */
  setSize(maxCacheSize) {
    this.maxCacheSize_ = maxCacheSize;
    this.expire();
  }
};
function getKey(src, crossOrigin, color) {
  const colorString = color ? asString(color) : "null";
  return crossOrigin + ":" + src + ":" + colorString;
}
var shared = new IconImageCache();

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/IconImage.js
var taintedTestContext = null;
var IconImage = class extends Target_default {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement} image Image.
   * @param {string|undefined} src Src.
   * @param {import("../size.js").Size} size Size.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default} imageState Image state.
   * @param {import("../color.js").Color} color Color.
   */
  constructor(image, src, size, crossOrigin, imageState, color) {
    super();
    this.hitDetectionImage_ = null;
    this.image_ = image;
    this.crossOrigin_ = crossOrigin;
    this.canvas_ = {};
    this.color_ = color;
    this.unlisten_ = null;
    this.imageState_ = imageState;
    this.size_ = size;
    this.src_ = src;
    this.tainted_;
  }
  /**
   * @private
   */
  initializeImage_() {
    this.image_ = new Image();
    if (this.crossOrigin_ !== null) {
      this.image_.crossOrigin = this.crossOrigin_;
    }
  }
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === ImageState_default.LOADED) {
      if (!taintedTestContext) {
        taintedTestContext = createCanvasContext2D(1, 1, void 0, {
          willReadFrequently: true
        });
      }
      taintedTestContext.drawImage(this.image_, 0, 0);
      try {
        taintedTestContext.getImageData(0, 0, 1, 1);
        this.tainted_ = false;
      } catch (e) {
        taintedTestContext = null;
        this.tainted_ = true;
      }
    }
    return this.tainted_ === true;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(EventType_default.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = ImageState_default.ERROR;
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = ImageState_default.LOADED;
    if (this.size_) {
      this.image_.width = this.size_[0];
      this.image_.height = this.size_[1];
    } else {
      this.size_ = [this.image_.width, this.image_.height];
    }
    this.unlistenImage_();
    this.dispatchChangeEvent_();
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   */
  getImage(pixelRatio) {
    if (!this.image_) {
      this.initializeImage_();
    }
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(pixelRatio) {
    this.replaceColor_(pixelRatio);
    return this.canvas_[pixelRatio] ? pixelRatio : 1;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    if (!this.image_) {
      this.initializeImage_();
    }
    if (!this.hitDetectionImage_) {
      if (this.isTainted_()) {
        const width = this.size_[0];
        const height = this.size_[1];
        const context = createCanvasContext2D(width, height);
        context.fillRect(0, 0, width, height);
        this.hitDetectionImage_ = context.canvas;
      } else {
        this.hitDetectionImage_ = this.image_;
      }
    }
    return this.hitDetectionImage_;
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */
  getSize() {
    return this.size_;
  }
  /**
   * @return {string|undefined} Image src.
   */
  getSrc() {
    return this.src_;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.imageState_ !== ImageState_default.IDLE) {
      return;
    }
    if (!this.image_) {
      this.initializeImage_();
    }
    this.imageState_ = ImageState_default.LOADING;
    try {
      this.image_.src = this.src_;
    } catch (e) {
      this.handleImageError_();
    }
    this.unlisten_ = listenImage(
      this.image_,
      this.handleImageLoad_.bind(this),
      this.handleImageError_.bind(this)
    );
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(pixelRatio) {
    if (!this.color_ || this.canvas_[pixelRatio] || this.imageState_ !== ImageState_default.LOADED) {
      return;
    }
    const image = this.image_;
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(image.width * pixelRatio);
    canvas.height = Math.ceil(image.height * pixelRatio);
    const ctx = canvas.getContext("2d");
    ctx.scale(pixelRatio, pixelRatio);
    ctx.drawImage(image, 0, 0);
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = asString(this.color_);
    ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(image, 0, 0);
    this.canvas_[pixelRatio] = canvas;
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
function get(image, src, size, crossOrigin, imageState, color) {
  let iconImage = shared.get(src, crossOrigin, color);
  if (!iconImage) {
    iconImage = new IconImage(image, src, size, crossOrigin, imageState, color);
    shared.set(src, crossOrigin, color, iconImage);
  }
  return iconImage;
}
var IconImage_default = IconImage;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Icon.js
var Icon = class extends Image_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};
    const opacity = options.opacity !== void 0 ? options.opacity : 1;
    const rotation = options.rotation !== void 0 ? options.rotation : 0;
    const scale = options.scale !== void 0 ? options.scale : 1;
    const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
    super({
      opacity,
      rotation,
      scale,
      displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
      rotateWithView,
      declutterMode: options.declutterMode
    });
    this.anchor_ = options.anchor !== void 0 ? options.anchor : [0.5, 0.5];
    this.normalizedAnchor_ = null;
    this.anchorOrigin_ = options.anchorOrigin !== void 0 ? options.anchorOrigin : "top-left";
    this.anchorXUnits_ = options.anchorXUnits !== void 0 ? options.anchorXUnits : "fraction";
    this.anchorYUnits_ = options.anchorYUnits !== void 0 ? options.anchorYUnits : "fraction";
    this.crossOrigin_ = options.crossOrigin !== void 0 ? options.crossOrigin : null;
    const image = options.img !== void 0 ? options.img : null;
    this.imgSize_ = options.imgSize;
    let src = options.src;
    assert(!(src !== void 0 && image), 4);
    assert(!image || image && this.imgSize_, 5);
    if ((src === void 0 || src.length === 0) && image) {
      src = /** @type {HTMLImageElement} */
      image.src || getUid(image);
    }
    assert(src !== void 0 && src.length > 0, 6);
    assert(
      !((options.width !== void 0 || options.height !== void 0) && options.scale !== void 0),
      69
    );
    const imageState = options.src !== void 0 ? ImageState_default.IDLE : ImageState_default.LOADED;
    this.color_ = options.color !== void 0 ? asArray(options.color) : null;
    this.iconImage_ = get(
      image,
      /** @type {string} */
      src,
      this.imgSize_ !== void 0 ? this.imgSize_ : null,
      this.crossOrigin_,
      imageState,
      this.color_
    );
    this.offset_ = options.offset !== void 0 ? options.offset : [0, 0];
    this.offsetOrigin_ = options.offsetOrigin !== void 0 ? options.offsetOrigin : "top-left";
    this.origin_ = null;
    this.size_ = options.size !== void 0 ? options.size : null;
    this.width_ = options.width;
    this.height_ = options.height;
    if (this.width_ !== void 0 || this.height_ !== void 0) {
      const image2 = this.getImage(1);
      const setScale = () => {
        this.updateScaleFromWidthAndHeight(this.width_, this.height_);
      };
      if (image2.width > 0) {
        this.updateScaleFromWidthAndHeight(this.width_, this.height_);
      } else {
        image2.addEventListener("load", setScale);
      }
    }
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */
  clone() {
    let scale = this.getScale();
    scale = Array.isArray(scale) ? scale.slice() : scale;
    if (this.width_ !== void 0 || this.height_ !== void 0) {
      scale = void 0;
    }
    return new Icon({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
      crossOrigin: this.crossOrigin_,
      imgSize: this.imgSize_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale,
      size: this.size_ !== null ? this.size_.slice() : void 0,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
      width: this.width_,
      height: this.height_
    });
  }
  /**
   * Set the scale of the Icon by calculating it from given width and height and the
   * width and height of the image.
   *
   * @private
   * @param {number} width The width.
   * @param {number} height The height.
   */
  updateScaleFromWidthAndHeight(width, height) {
    const image = this.getImage(1);
    if (width !== void 0 && height !== void 0) {
      super.setScale([width / image.width, height / image.height]);
    } else if (width !== void 0) {
      super.setScale([width / image.width, width / image.width]);
    } else if (height !== void 0) {
      super.setScale([height / image.height, height / image.height]);
    } else {
      super.setScale([1, 1]);
    }
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    let anchor = this.normalizedAnchor_;
    if (!anchor) {
      anchor = this.anchor_;
      const size = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!size) {
          return null;
        }
        anchor = this.anchor_.slice();
        if (this.anchorXUnits_ == "fraction") {
          anchor[0] *= size[0];
        }
        if (this.anchorYUnits_ == "fraction") {
          anchor[1] *= size[1];
        }
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!size) {
          return null;
        }
        if (anchor === this.anchor_) {
          anchor = this.anchor_.slice();
        }
        if (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") {
          anchor[0] = -anchor[0] + size[0];
        }
        if (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") {
          anchor[1] = -anchor[1] + size[1];
        }
      }
      this.normalizedAnchor_ = anchor;
    }
    const displacement = this.getDisplacement();
    const scale = this.getScaleArray();
    return [
      anchor[0] - displacement[0] / scale[0],
      anchor[1] + displacement[1] / scale[1]
    ];
  }
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(anchor) {
    this.anchor_ = anchor;
    this.normalizedAnchor_ = null;
  }
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(pixelRatio) {
    return this.iconImage_.getImage(pixelRatio);
  }
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   */
  getPixelRatio(pixelRatio) {
    return this.iconImage_.getPixelRatio(pixelRatio);
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.iconImage_.getSize();
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.iconImage_.getImageState();
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    if (this.origin_) {
      return this.origin_;
    }
    let offset = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const size = this.getSize();
      const iconImageSize = this.iconImage_.getSize();
      if (!size || !iconImageSize) {
        return null;
      }
      offset = offset.slice();
      if (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") {
        offset[0] = iconImageSize[0] - size[0] - offset[0];
      }
      if (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") {
        offset[1] = iconImageSize[1] - size[1] - offset[1];
      }
    }
    this.origin_ = offset;
    return this.origin_;
  }
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */
  getSrc() {
    return this.iconImage_.getSrc();
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   */
  getSize() {
    return !this.size_ ? this.iconImage_.getSize() : this.size_;
  }
  /**
   * Get the width of the icon (in pixels).
   * @return {number} Icon width (in pixels).
   * @api
   */
  getWidth() {
    return this.width_;
  }
  /**
   * Get the height of the icon (in pixels).
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    return this.height_;
  }
  /**
   * Set the width of the icon in pixels.
   *
   * @param {number} width The width to set.
   */
  setWidth(width) {
    this.width_ = width;
    this.updateScaleFromWidthAndHeight(width, this.height_);
  }
  /**
   * Set the height of the icon in pixels.
   *
   * @param {number} height The height to set.
   */
  setHeight(height) {
    this.height_ = height;
    this.updateScaleFromWidthAndHeight(this.width_, height);
  }
  /**
   * Set the scale and updates the width and height correspondingly.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @override
   * @api
   */
  setScale(scale) {
    super.setScale(scale);
    const image = this.getImage(1);
    if (image) {
      const widthScale = Array.isArray(scale) ? scale[0] : scale;
      if (widthScale !== void 0) {
        this.width_ = widthScale * image.width;
      }
      const heightScale = Array.isArray(scale) ? scale[1] : scale;
      if (heightScale !== void 0) {
        this.height_ = heightScale * image.height;
      }
    }
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(listener) {
    this.iconImage_.addEventListener(EventType_default.CHANGE, listener);
  }
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   */
  load() {
    this.iconImage_.load();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(listener) {
    this.iconImage_.removeEventListener(EventType_default.CHANGE, listener);
  }
};
var Icon_default = Icon;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Stroke.js
var Stroke = class {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};
    this.color_ = options.color !== void 0 ? options.color : null;
    this.lineCap_ = options.lineCap;
    this.lineDash_ = options.lineDash !== void 0 ? options.lineDash : null;
    this.lineDashOffset_ = options.lineDashOffset;
    this.lineJoin_ = options.lineJoin;
    this.miterLimit_ = options.miterLimit;
    this.width_ = options.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const color = this.getColor();
    return new Stroke({
      color: Array.isArray(color) ? color.slice() : color || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }
  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */
  getLineCap() {
    return this.lineCap_;
  }
  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>|null} Line dash.
   * @api
   */
  getLineDash() {
    return this.lineDash_;
  }
  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */
  getLineJoin() {
    return this.lineJoin_;
  }
  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */
  getMiterLimit() {
    return this.miterLimit_;
  }
  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */
  getWidth() {
    return this.width_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */
  setColor(color) {
    this.color_ = color;
  }
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(lineCap) {
    this.lineCap_ = lineCap;
  }
  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(lineDash) {
    this.lineDash_ = lineDash;
  }
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(lineDashOffset) {
    this.lineDashOffset_ = lineDashOffset;
  }
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(lineJoin) {
    this.lineJoin_ = lineJoin;
  }
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(miterLimit) {
    this.miterLimit_ = miterLimit;
  }
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(width) {
    this.width_ = width;
  }
};
var Stroke_default = Stroke;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Style.js
var Style = class {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(options) {
    options = options || {};
    this.geometry_ = null;
    this.geometryFunction_ = defaultGeometryFunction;
    if (options.geometry !== void 0) {
      this.setGeometry(options.geometry);
    }
    this.fill_ = options.fill !== void 0 ? options.fill : null;
    this.image_ = options.image !== void 0 ? options.image : null;
    this.renderer_ = options.renderer !== void 0 ? options.renderer : null;
    this.hitDetectionRenderer_ = options.hitDetectionRenderer !== void 0 ? options.hitDetectionRenderer : null;
    this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
    this.text_ = options.text !== void 0 ? options.text : null;
    this.zIndex_ = options.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let geometry = this.getGeometry();
    if (geometry && typeof geometry === "object") {
      geometry = /** @type {import("../geom/Geometry.js").default} */
      geometry.clone();
    }
    return new Style({
      geometry,
      fill: this.getFill() ? this.getFill().clone() : void 0,
      image: this.getImage() ? this.getImage().clone() : void 0,
      renderer: this.getRenderer(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      text: this.getText() ? this.getText().clone() : void 0,
      zIndex: this.getZIndex()
    });
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setRenderer(renderer) {
    this.renderer_ = renderer;
  }
  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(renderer) {
    this.hitDetectionRenderer_ = renderer;
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */
  getGeometry() {
    return this.geometry_;
  }
  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  /**
   * Get the fill style.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
  }
  /**
   * Get the image style.
   * @return {import("./Image.js").default} Image style.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */
  setImage(image) {
    this.image_ = image;
  }
  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
  }
  /**
   * Get the text style.
   * @return {import("./Text.js").default} Text style.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */
  setText(text) {
    this.text_ = text;
  }
  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */
  getZIndex() {
    return this.zIndex_;
  }
  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */
  setGeometry(geometry) {
    if (typeof geometry === "function") {
      this.geometryFunction_ = geometry;
    } else if (typeof geometry === "string") {
      this.geometryFunction_ = function(feature) {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          feature.get(geometry)
        );
      };
    } else if (!geometry) {
      this.geometryFunction_ = defaultGeometryFunction;
    } else if (geometry !== void 0) {
      this.geometryFunction_ = function() {
        return (
          /** @type {import("../geom/Geometry.js").default} */
          geometry
        );
      };
    }
    this.geometry_ = geometry;
  }
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(zIndex) {
    this.zIndex_ = zIndex;
  }
};
function toFunction(obj) {
  let styleFunction;
  if (typeof obj === "function") {
    styleFunction = obj;
  } else {
    let styles;
    if (Array.isArray(obj)) {
      styles = obj;
    } else {
      assert(typeof /** @type {?} */
      obj.getZIndex === "function", 41);
      const style = (
        /** @type {Style} */
        obj
      );
      styles = [style];
    }
    styleFunction = function() {
      return styles;
    };
  }
  return styleFunction;
}
var defaultStyles = null;
function createDefaultStyle(feature, resolution) {
  if (!defaultStyles) {
    const fill = new Fill_default({
      color: "rgba(255,255,255,0.4)"
    });
    const stroke = new Stroke_default({
      color: "#3399CC",
      width: 1.25
    });
    defaultStyles = [
      new Style({
        image: new Circle_default({
          fill,
          stroke,
          radius: 5
        }),
        fill,
        stroke
      })
    ];
  }
  return defaultStyles;
}
function defaultGeometryFunction(feature) {
  return feature.getGeometry();
}
var Style_default = Style;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/Text.js
var DEFAULT_FILL_COLOR = "#333";
var Text = class {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options || {};
    this.font_ = options.font;
    this.rotation_ = options.rotation;
    this.rotateWithView_ = options.rotateWithView;
    this.scale_ = options.scale;
    this.scaleArray_ = toSize(options.scale !== void 0 ? options.scale : 1);
    this.text_ = options.text;
    this.textAlign_ = options.textAlign;
    this.justify_ = options.justify;
    this.repeat_ = options.repeat;
    this.textBaseline_ = options.textBaseline;
    this.fill_ = options.fill !== void 0 ? options.fill : new Fill_default({ color: DEFAULT_FILL_COLOR });
    this.maxAngle_ = options.maxAngle !== void 0 ? options.maxAngle : Math.PI / 4;
    this.placement_ = options.placement !== void 0 ? options.placement : "point";
    this.overflow_ = !!options.overflow;
    this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
    this.offsetX_ = options.offsetX !== void 0 ? options.offsetX : 0;
    this.offsetY_ = options.offsetY !== void 0 ? options.offsetY : 0;
    this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
    this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
    this.padding_ = options.padding === void 0 ? null : options.padding;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const scale = this.getScale();
    return new Text({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(scale) ? scale.slice() : scale,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0
    });
  }
  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */
  getOverflow() {
    return this.overflow_;
  }
  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */
  getFont() {
    return this.font_;
  }
  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */
  getMaxAngle() {
    return this.maxAngle_;
  }
  /**
   * Get the label placement.
   * @return {TextPlacement} Text placement.
   * @api
   */
  getPlacement() {
    return this.placement_;
  }
  /**
   * Get the repeat interval of the text.
   * @return {number|undefined} Repeat interval in pixels.
   * @api
   */
  getRepeat() {
    return this.repeat_;
  }
  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */
  getOffsetX() {
    return this.offsetX_;
  }
  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */
  getOffsetY() {
    return this.offsetY_;
  }
  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Get the text to be rendered.
   * @return {string|Array<string>|undefined} Text.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Get the text alignment.
   * @return {CanvasTextAlign|undefined} Text align.
   * @api
   */
  getTextAlign() {
    return this.textAlign_;
  }
  /**
   * Get the justification.
   * @return {TextJustify|undefined} Justification.
   * @api
   */
  getJustify() {
    return this.justify_;
  }
  /**
   * Get the text baseline.
   * @return {CanvasTextBaseline|undefined} Text baseline.
   * @api
   */
  getTextBaseline() {
    return this.textBaseline_;
  }
  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  /**
   * Get the padding for the text.
   * @return {Array<number>|null} Padding.
   * @api
   */
  getPadding() {
    return this.padding_;
  }
  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */
  setOverflow(overflow) {
    this.overflow_ = overflow;
  }
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(font) {
    this.font_ = font;
  }
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(maxAngle) {
    this.maxAngle_ = maxAngle;
  }
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(offsetX) {
    this.offsetX_ = offsetX;
  }
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(offsetY) {
    this.offsetY_ = offsetY;
  }
  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(placement) {
    this.placement_ = placement;
  }
  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(repeat) {
    this.repeat_ = repeat;
  }
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(rotateWithView) {
    this.rotateWithView_ = rotateWithView;
  }
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(fill) {
    this.fill_ = fill;
  }
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(rotation) {
    this.rotation_ = rotation;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(scale) {
    this.scale_ = scale;
    this.scaleArray_ = toSize(scale !== void 0 ? scale : 1);
  }
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(stroke) {
    this.stroke_ = stroke;
  }
  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(text) {
    this.text_ = text;
  }
  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(textAlign) {
    this.textAlign_ = textAlign;
  }
  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(justify) {
    this.justify_ = justify;
  }
  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(textBaseline) {
    this.textBaseline_ = textBaseline;
  }
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setBackgroundFill(fill) {
    this.backgroundFill_ = fill;
  }
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(stroke) {
    this.backgroundStroke_ = stroke;
  }
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(padding) {
    this.padding_ = padding;
  }
};
var Text_default = Text;

export {
  Fill_default,
  Stroke_default,
  Image_default,
  RegularShape_default,
  Circle_default,
  toFunction,
  createDefaultStyle,
  Style_default,
  Text_default,
  shared,
  IconImage_default,
  Icon_default
};
//# sourceMappingURL=chunk-WL5X6JVJ.js.map
