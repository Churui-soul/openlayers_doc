import {
  RBush
} from "./chunk-SQVMHEBV.js";
import {
  Immediate_default,
  VectorContext_default,
  defaultOrder,
  getSquaredTolerance,
  getTolerance,
  renderFeature
} from "./chunk-W2437R7T.js";
import {
  Circle_default,
  Fill_default,
  Icon_default,
  RegularShape_default,
  Stroke_default,
  Style_default,
  Text_default,
  createDefaultStyle,
  toFunction
} from "./chunk-WL5X6JVJ.js";
import {
  asColorLike,
  defaultFillStyle,
  defaultFont,
  defaultLineCap,
  defaultLineDash,
  defaultLineDashOffset,
  defaultLineJoin,
  defaultLineWidth,
  defaultMiterLimit,
  defaultPadding,
  defaultStrokeStyle,
  defaultTextAlign,
  defaultTextBaseline,
  drawImageOrLabel,
  getTextDimensions,
  measureAndCacheTextWidth,
  registerFont
} from "./chunk-OJPRZ5YB.js";
import {
  Layer_default,
  Layer_default3 as Layer_default2,
  ViewHint_default,
  canvasPool
} from "./chunk-6ZURMBVA.js";
import {
  createCanvasContext2D,
  releaseCanvas
} from "./chunk-7L63NS2R.js";
import {
  lineStringLength
} from "./chunk-5QXGCLBM.js";
import {
  inflateCoordinates,
  inflateCoordinatesArray,
  inflateMultiCoordinatesArray,
  snap
} from "./chunk-ENSXDPMZ.js";
import {
  apply,
  compose,
  create,
  makeInverse,
  makeScale,
  rotate2 as rotate,
  setFromArray,
  toString,
  transform2D
} from "./chunk-LUOILEKQ.js";
import {
  fromUserExtent,
  getTransformFromProjections,
  getUserProjection,
  toUserExtent,
  toUserResolution,
  wrapX as wrapX2
} from "./chunk-5HKLM7RS.js";
import {
  clamp,
  lerp
} from "./chunk-MRQCEQD2.js";
import {
  getUid
} from "./chunk-CVB4T47V.js";
import {
  ascending,
  equals,
  reverseSubArray
} from "./chunk-M7GNM6RX.js";
import {
  isEmpty
} from "./chunk-SDN6AWWT.js";
import {
  Relationship_default,
  buffer,
  clone,
  containsCoordinate,
  containsExtent,
  coordinateRelationship,
  createEmpty,
  createOrUpdate,
  extendCoordinate,
  getWidth,
  intersects,
  wrapX
} from "./chunk-SVEQH656.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/flat.js
function toStyle(flatStyle) {
  const style = new Style_default({
    fill: getFill(flatStyle, ""),
    stroke: getStroke(flatStyle, ""),
    text: getText(flatStyle),
    image: getImage(flatStyle)
  });
  return style;
}
function getFill(flatStyle, prefix) {
  const color = flatStyle[prefix + "fill-color"];
  if (!color) {
    return;
  }
  return new Fill_default({ color });
}
function getStroke(flatStyle, prefix) {
  const width = flatStyle[prefix + "stroke-width"];
  const color = flatStyle[prefix + "stroke-color"];
  if (!width && !color) {
    return;
  }
  return new Stroke_default({
    width,
    color,
    lineCap: flatStyle[prefix + "stroke-line-cap"],
    lineJoin: flatStyle[prefix + "stroke-line-join"],
    lineDash: flatStyle[prefix + "stroke-line-dash"],
    lineDashOffset: flatStyle[prefix + "stroke-line-dash-offset"],
    miterLimit: flatStyle[prefix + "stroke-miter-limit"]
  });
}
function getText(flatStyle) {
  const value = flatStyle["text-value"];
  if (!value) {
    return;
  }
  const text = new Text_default({
    text: value,
    font: flatStyle["text-font"],
    maxAngle: flatStyle["text-max-angle"],
    offsetX: flatStyle["text-offset-x"],
    offsetY: flatStyle["text-offset-y"],
    overflow: flatStyle["text-overflow"],
    placement: flatStyle["text-placement"],
    repeat: flatStyle["text-repeat"],
    scale: flatStyle["text-scale"],
    rotateWithView: flatStyle["text-rotate-with-view"],
    rotation: flatStyle["text-rotation"],
    textAlign: flatStyle["text-align"],
    justify: flatStyle["text-justify"],
    textBaseline: flatStyle["text-baseline"],
    padding: flatStyle["text-padding"],
    fill: getFill(flatStyle, "text-"),
    backgroundFill: getFill(flatStyle, "text-background-"),
    stroke: getStroke(flatStyle, "text-"),
    backgroundStroke: getStroke(flatStyle, "text-background-")
  });
  return text;
}
function getImage(flatStyle) {
  const iconSrc = flatStyle["icon-src"];
  const iconImg = flatStyle["icon-img"];
  if (iconSrc || iconImg) {
    const icon = new Icon_default({
      src: iconSrc,
      img: iconImg,
      imgSize: flatStyle["icon-img-size"],
      anchor: flatStyle["icon-anchor"],
      anchorOrigin: flatStyle["icon-anchor-origin"],
      anchorXUnits: flatStyle["icon-anchor-x-units"],
      anchorYUnits: flatStyle["icon-anchor-y-units"],
      color: flatStyle["icon-color"],
      crossOrigin: flatStyle["icon-cross-origin"],
      offset: flatStyle["icon-offset"],
      displacement: flatStyle["icon-displacement"],
      opacity: flatStyle["icon-opacity"],
      scale: flatStyle["icon-scale"],
      rotation: flatStyle["icon-rotation"],
      rotateWithView: flatStyle["icon-rotate-with-view"],
      size: flatStyle["icon-size"],
      declutterMode: flatStyle["icon-declutter-mode"]
    });
    return icon;
  }
  const shapePoints = flatStyle["shape-points"];
  if (shapePoints) {
    const prefix = "shape-";
    const shape = new RegularShape_default({
      points: shapePoints,
      fill: getFill(flatStyle, prefix),
      stroke: getStroke(flatStyle, prefix),
      radius: flatStyle["shape-radius"],
      radius1: flatStyle["shape-radius1"],
      radius2: flatStyle["shape-radius2"],
      angle: flatStyle["shape-angle"],
      displacement: flatStyle["shape-displacement"],
      rotation: flatStyle["shape-rotation"],
      rotateWithView: flatStyle["shape-rotate-with-view"],
      scale: flatStyle["shape-scale"],
      declutterMode: flatStyle["shape-declutter-mode"]
    });
    return shape;
  }
  const circleRadius = flatStyle["circle-radius"];
  if (circleRadius) {
    const prefix = "circle-";
    const circle = new Circle_default({
      radius: circleRadius,
      fill: getFill(flatStyle, prefix),
      stroke: getStroke(flatStyle, prefix),
      displacement: flatStyle["circle-displacement"],
      scale: flatStyle["circle-scale"],
      rotation: flatStyle["circle-rotation"],
      rotateWithView: flatStyle["circle-rotate-with-view"],
      declutterMode: flatStyle["circle-declutter-mode"]
    });
    return circle;
  }
  return;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/BaseVector.js
var Property = {
  RENDER_ORDER: "renderOrder"
};
var BaseVectorLayer = class extends Layer_default {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.style;
    delete baseOptions.renderBuffer;
    delete baseOptions.updateWhileAnimating;
    delete baseOptions.updateWhileInteracting;
    super(baseOptions);
    this.declutter_ = options.declutter !== void 0 ? options.declutter : false;
    this.renderBuffer_ = options.renderBuffer !== void 0 ? options.renderBuffer : 100;
    this.style_ = null;
    this.styleFunction_ = void 0;
    this.setStyle(options.style);
    this.updateWhileAnimating_ = options.updateWhileAnimating !== void 0 ? options.updateWhileAnimating : false;
    this.updateWhileInteracting_ = options.updateWhileInteracting !== void 0 ? options.updateWhileInteracting : false;
  }
  /**
   * @return {boolean} Declutter.
   */
  getDeclutter() {
    return this.declutter_;
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   */
  getFeatures(pixel) {
    return super.getFeatures(pixel);
  }
  /**
   * @return {number|undefined} Render buffer.
   */
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  /**
   * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
   *     order.
   */
  getRenderOrder() {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(Property.RENDER_ORDER)
    );
  }
  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  /**
   * Render declutter items for this layer
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    if (!frameState.declutterTree) {
      frameState.declutterTree = new RBush(9);
    }
    this.getRenderer().renderDeclutter(frameState);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(renderOrder) {
    this.set(Property.RENDER_ORDER, renderOrder);
  }
  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
   *
   * If your layer has a static style, you can use "flat" style object literals instead of
   * using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.).  See the documentation
   * for the [flat style types]{@link module:ol/style/flat~FlatStyle} to see what properties are supported.
   *
   * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
   * @api
   */
  setStyle(style) {
    let styleLike;
    if (style === void 0) {
      styleLike = createDefaultStyle;
    } else if (style === null) {
      styleLike = null;
    } else if (typeof style === "function") {
      styleLike = style;
    } else if (style instanceof Style_default) {
      styleLike = style;
    } else if (Array.isArray(style)) {
      const len = style.length;
      const styles = new Array(len);
      for (let i = 0; i < len; ++i) {
        const s = style[i];
        if (s instanceof Style_default) {
          styles[i] = s;
        } else {
          styles[i] = toStyle(s);
        }
      }
      styleLike = styles;
    } else {
      styleLike = toStyle(style);
    }
    this.style_ = styleLike;
    this.styleFunction_ = style === null ? void 0 : toFunction(this.style_);
    this.changed();
  }
};
var BaseVector_default = BaseVectorLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/Instruction.js
var Instruction = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
};
var fillInstruction = [Instruction.FILL];
var strokeInstruction = [Instruction.STROKE];
var beginPathInstruction = [Instruction.BEGIN_PATH];
var closePathInstruction = [Instruction.CLOSE_PATH];
var Instruction_default = Instruction;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/Builder.js
var CanvasBuilder = class extends VectorContext_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super();
    this.tolerance = tolerance;
    this.maxExtent = maxExtent;
    this.pixelRatio = pixelRatio;
    this.maxLineWidth = 0;
    this.resolution = resolution;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_ = null;
    this.bufferedMaxExtent_ = null;
    this.instructions = [];
    this.coordinates = [];
    this.tmpCoordinate_ = [];
    this.hitDetectionInstructions = [];
    this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(dashArray) {
    const pixelRatio = this.pixelRatio;
    return pixelRatio == 1 ? dashArray : dashArray.map(function(dash) {
      return dash * pixelRatio;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(flatCoordinates, stride) {
    const extent = this.getBufferedMaxExtent();
    const tmpCoord = this.tmpCoordinate_;
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      tmpCoord[0] = flatCoordinates[i];
      tmpCoord[1] = flatCoordinates[i + 1];
      if (containsCoordinate(extent, tmpCoord)) {
        coordinates[myEnd++] = tmpCoord[0];
        coordinates[myEnd++] = tmpCoord[1];
      }
    }
    return myEnd;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(flatCoordinates, offset, end, stride, closed, skipFirst) {
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    const extent = this.getBufferedMaxExtent();
    if (skipFirst) {
      offset += stride;
    }
    let lastXCoord = flatCoordinates[offset];
    let lastYCoord = flatCoordinates[offset + 1];
    const nextCoord = this.tmpCoordinate_;
    let skipped = true;
    let i, lastRel, nextRel;
    for (i = offset + stride; i < end; i += stride) {
      nextCoord[0] = flatCoordinates[i];
      nextCoord[1] = flatCoordinates[i + 1];
      nextRel = coordinateRelationship(extent, nextCoord);
      if (nextRel !== lastRel) {
        if (skipped) {
          coordinates[myEnd++] = lastXCoord;
          coordinates[myEnd++] = lastYCoord;
          skipped = false;
        }
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
      } else if (nextRel === Relationship_default.INTERSECTING) {
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
        skipped = false;
      } else {
        skipped = true;
      }
      lastXCoord = nextCoord[0];
      lastYCoord = nextCoord[1];
      lastRel = nextRel;
    }
    if (closed && skipped || i === offset + stride) {
      coordinates[myEnd++] = lastXCoord;
      coordinates[myEnd++] = lastYCoord;
    }
    return myEnd;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(flatCoordinates, offset, ends, stride, builderEnds) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const builderEnd = this.appendFlatLineCoordinates(
        flatCoordinates,
        offset,
        end,
        stride,
        false,
        false
      );
      builderEnds.push(builderEnd);
      offset = end;
    }
    return offset;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(geometry, feature, renderer, hitDetectionRenderer) {
    this.beginGeometry(geometry, feature);
    const type = geometry.getType();
    const stride = geometry.getStride();
    const builderBegin = this.coordinates.length;
    let flatCoordinates, builderEnd, builderEnds, builderEndss;
    let offset;
    switch (type) {
      case "MultiPolygon":
        flatCoordinates = /** @type {import("../../geom/MultiPolygon.js").default} */
        geometry.getOrientedFlatCoordinates();
        builderEndss = [];
        const endss = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.getEndss()
        );
        offset = 0;
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          const myEnds = [];
          offset = this.drawCustomCoordinates_(
            flatCoordinates,
            offset,
            endss[i],
            stride,
            myEnds
          );
          builderEndss.push(myEnds);
        }
        this.instructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEndss,
          geometry,
          renderer,
          inflateMultiCoordinatesArray
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEndss,
          geometry,
          hitDetectionRenderer || renderer,
          inflateMultiCoordinatesArray
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        builderEnds = [];
        flatCoordinates = type == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          geometry.getOrientedFlatCoordinates()
        ) : geometry.getFlatCoordinates();
        offset = this.drawCustomCoordinates_(
          flatCoordinates,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          geometry.getEnds(),
          stride,
          builderEnds
        );
        this.instructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnds,
          geometry,
          renderer,
          inflateCoordinatesArray
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnds,
          geometry,
          hitDetectionRenderer || renderer,
          inflateCoordinatesArray
        ]);
        break;
      case "LineString":
      case "Circle":
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatLineCoordinates(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          false,
          false
        );
        this.instructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnd,
          geometry,
          renderer,
          inflateCoordinates
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnd,
          geometry,
          hitDetectionRenderer || renderer,
          inflateCoordinates
        ]);
        break;
      case "MultiPoint":
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        if (builderEnd > builderBegin) {
          this.instructions.push([
            Instruction_default.CUSTOM,
            builderBegin,
            builderEnd,
            geometry,
            renderer,
            inflateCoordinates
          ]);
          this.hitDetectionInstructions.push([
            Instruction_default.CUSTOM,
            builderBegin,
            builderEnd,
            geometry,
            hitDetectionRenderer || renderer,
            inflateCoordinates
          ]);
        }
        break;
      case "Point":
        flatCoordinates = geometry.getFlatCoordinates();
        this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
        builderEnd = this.coordinates.length;
        this.instructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnd,
          geometry,
          renderer
        ]);
        this.hitDetectionInstructions.push([
          Instruction_default.CUSTOM,
          builderBegin,
          builderEnd,
          geometry,
          hitDetectionRenderer || renderer
        ]);
        break;
      default:
    }
    this.endGeometry(feature);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  beginGeometry(geometry, feature) {
    this.beginGeometryInstruction1_ = [
      Instruction_default.BEGIN_GEOMETRY,
      feature,
      0,
      geometry
    ];
    this.instructions.push(this.beginGeometryInstruction1_);
    this.beginGeometryInstruction2_ = [
      Instruction_default.BEGIN_GEOMETRY,
      feature,
      0,
      geometry
    ];
    this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const hitDetectionInstructions = this.hitDetectionInstructions;
    hitDetectionInstructions.reverse();
    let i;
    const n = hitDetectionInstructions.length;
    let instruction;
    let type;
    let begin = -1;
    for (i = 0; i < n; ++i) {
      instruction = hitDetectionInstructions[i];
      type = /** @type {import("./Instruction.js").default} */
      instruction[0];
      if (type == Instruction_default.END_GEOMETRY) {
        begin = i;
      } else if (type == Instruction_default.BEGIN_GEOMETRY) {
        instruction[2] = i;
        reverseSubArray(this.hitDetectionInstructions, begin, i);
        begin = -1;
      }
    }
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
    const state = this.state;
    if (fillStyle) {
      const fillStyleColor = fillStyle.getColor();
      state.fillStyle = asColorLike(
        fillStyleColor ? fillStyleColor : defaultFillStyle
      );
    } else {
      state.fillStyle = void 0;
    }
    if (strokeStyle) {
      const strokeStyleColor = strokeStyle.getColor();
      state.strokeStyle = asColorLike(
        strokeStyleColor ? strokeStyleColor : defaultStrokeStyle
      );
      const strokeStyleLineCap = strokeStyle.getLineCap();
      state.lineCap = strokeStyleLineCap !== void 0 ? strokeStyleLineCap : defaultLineCap;
      const strokeStyleLineDash = strokeStyle.getLineDash();
      state.lineDash = strokeStyleLineDash ? strokeStyleLineDash.slice() : defaultLineDash;
      const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      state.lineDashOffset = strokeStyleLineDashOffset ? strokeStyleLineDashOffset : defaultLineDashOffset;
      const strokeStyleLineJoin = strokeStyle.getLineJoin();
      state.lineJoin = strokeStyleLineJoin !== void 0 ? strokeStyleLineJoin : defaultLineJoin;
      const strokeStyleWidth = strokeStyle.getWidth();
      state.lineWidth = strokeStyleWidth !== void 0 ? strokeStyleWidth : defaultLineWidth;
      const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      state.miterLimit = strokeStyleMiterLimit !== void 0 ? strokeStyleMiterLimit : defaultMiterLimit;
      if (state.lineWidth > this.maxLineWidth) {
        this.maxLineWidth = state.lineWidth;
        this.bufferedMaxExtent_ = null;
      }
    } else {
      state.strokeStyle = void 0;
      state.lineCap = void 0;
      state.lineDash = null;
      state.lineDashOffset = void 0;
      state.lineJoin = void 0;
      state.lineWidth = void 0;
      state.miterLimit = void 0;
    }
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(state) {
    const fillStyle = state.fillStyle;
    const fillInstruction2 = [Instruction_default.SET_FILL_STYLE, fillStyle];
    if (typeof fillStyle !== "string") {
      fillInstruction2.push(true);
    }
    return fillInstruction2;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(state) {
    this.instructions.push(this.createStroke(state));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(state) {
    return [
      Instruction_default.SET_STROKE_STYLE,
      state.strokeStyle,
      state.lineWidth * this.pixelRatio,
      state.lineCap,
      state.lineJoin,
      state.miterLimit,
      this.applyPixelRatio(state.lineDash),
      state.lineDashOffset * this.pixelRatio
    ];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(state, createFill) {
    const fillStyle = state.fillStyle;
    if (typeof fillStyle !== "string" || state.currentFillStyle != fillStyle) {
      if (fillStyle !== void 0) {
        this.instructions.push(createFill.call(this, state));
      }
      state.currentFillStyle = fillStyle;
    }
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(state, applyStroke) {
    const strokeStyle = state.strokeStyle;
    const lineCap = state.lineCap;
    const lineDash = state.lineDash;
    const lineDashOffset = state.lineDashOffset;
    const lineJoin = state.lineJoin;
    const lineWidth = state.lineWidth;
    const miterLimit = state.miterLimit;
    if (state.currentStrokeStyle != strokeStyle || state.currentLineCap != lineCap || lineDash != state.currentLineDash && !equals(state.currentLineDash, lineDash) || state.currentLineDashOffset != lineDashOffset || state.currentLineJoin != lineJoin || state.currentLineWidth != lineWidth || state.currentMiterLimit != miterLimit) {
      if (strokeStyle !== void 0) {
        applyStroke.call(this, state);
      }
      state.currentStrokeStyle = strokeStyle;
      state.currentLineCap = lineCap;
      state.currentLineDash = lineDash;
      state.currentLineDashOffset = lineDashOffset;
      state.currentLineJoin = lineJoin;
      state.currentLineWidth = lineWidth;
      state.currentMiterLimit = miterLimit;
    }
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(feature) {
    this.beginGeometryInstruction1_[2] = this.instructions.length;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
    this.beginGeometryInstruction2_ = null;
    const endGeometryInstruction = [Instruction_default.END_GEOMETRY, feature];
    this.instructions.push(endGeometryInstruction);
    this.hitDetectionInstructions.push(endGeometryInstruction);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_) {
      this.bufferedMaxExtent_ = clone(this.maxExtent);
      if (this.maxLineWidth > 0) {
        const width = this.resolution * (this.maxLineWidth + 1) / 2;
        buffer(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
      }
    }
    return this.bufferedMaxExtent_;
  }
};
var Builder_default = CanvasBuilder;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/ImageBuilder.js
var CanvasImageBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = void 0;
    this.anchorX_ = void 0;
    this.anchorY_ = void 0;
    this.height_ = void 0;
    this.opacity_ = void 0;
    this.originX_ = void 0;
    this.originY_ = void 0;
    this.rotateWithView_ = void 0;
    this.rotation_ = void 0;
    this.scale_ = void 0;
    this.width_ = void 0;
    this.declutterMode_ = void 0;
    this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(pointGeometry, feature) {
    if (!this.image_) {
      return;
    }
    this.beginGeometry(pointGeometry, feature);
    const flatCoordinates = pointGeometry.getFlatCoordinates();
    const stride = pointGeometry.getStride();
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
    this.instructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.hitDetectionInstructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      this.opacity_,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPoint(multiPointGeometry, feature) {
    if (!this.image_) {
      return;
    }
    this.beginGeometry(multiPointGeometry, feature);
    const flatCoordinates = multiPointGeometry.getFlatCoordinates();
    const stride = multiPointGeometry.getStride();
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
    this.instructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.hitDetectionInstructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      this.opacity_,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions();
    this.anchorX_ = void 0;
    this.anchorY_ = void 0;
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = void 0;
    this.height_ = void 0;
    this.scale_ = void 0;
    this.opacity_ = void 0;
    this.originX_ = void 0;
    this.originY_ = void 0;
    this.rotateWithView_ = void 0;
    this.rotation_ = void 0;
    this.width_ = void 0;
    return super.finish();
  }
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   */
  setImageStyle(imageStyle, sharedData) {
    const anchor = imageStyle.getAnchor();
    const size = imageStyle.getSize();
    const origin = imageStyle.getOrigin();
    this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
    this.anchorX_ = anchor[0];
    this.anchorY_ = anchor[1];
    this.hitDetectionImage_ = imageStyle.getHitDetectionImage();
    this.image_ = imageStyle.getImage(this.pixelRatio);
    this.height_ = size[1];
    this.opacity_ = imageStyle.getOpacity();
    this.originX_ = origin[0];
    this.originY_ = origin[1];
    this.rotateWithView_ = imageStyle.getRotateWithView();
    this.rotation_ = imageStyle.getRotation();
    this.scale_ = imageStyle.getScaleArray();
    this.width_ = size[0];
    this.declutterMode_ = imageStyle.getDeclutterMode();
    this.declutterImageWithText_ = sharedData;
  }
};
var ImageBuilder_default = CanvasImageBuilder;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/LineStringBuilder.js
var CanvasLineStringBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(flatCoordinates, offset, end, stride) {
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatLineCoordinates(
      flatCoordinates,
      offset,
      end,
      stride,
      false,
      false
    );
    const moveToLineToInstruction = [
      Instruction_default.MOVE_TO_LINE_TO,
      myBegin,
      myEnd
    ];
    this.instructions.push(moveToLineToInstruction);
    this.hitDetectionInstructions.push(moveToLineToInstruction);
    return end;
  }
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawLineString(lineStringGeometry, feature) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === void 0 || lineWidth === void 0) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(lineStringGeometry, feature);
    this.hitDetectionInstructions.push(
      [
        Instruction_default.SET_STROKE_STYLE,
        state.strokeStyle,
        state.lineWidth,
        state.lineCap,
        state.lineJoin,
        state.miterLimit,
        defaultLineDash,
        defaultLineDashOffset
      ],
      beginPathInstruction
    );
    const flatCoordinates = lineStringGeometry.getFlatCoordinates();
    const stride = lineStringGeometry.getStride();
    this.drawFlatCoordinates_(
      flatCoordinates,
      0,
      flatCoordinates.length,
      stride
    );
    this.hitDetectionInstructions.push(strokeInstruction);
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(multiLineStringGeometry, feature) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === void 0 || lineWidth === void 0) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(multiLineStringGeometry, feature);
    this.hitDetectionInstructions.push(
      [
        Instruction_default.SET_STROKE_STYLE,
        state.strokeStyle,
        state.lineWidth,
        state.lineCap,
        state.lineJoin,
        state.miterLimit,
        state.lineDash,
        state.lineDashOffset
      ],
      beginPathInstruction
    );
    const ends = multiLineStringGeometry.getEnds();
    const flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
    const stride = multiLineStringGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.drawFlatCoordinates_(
        flatCoordinates,
        offset,
        /** @type {number} */
        ends[i],
        stride
      );
    }
    this.hitDetectionInstructions.push(strokeInstruction);
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const state = this.state;
    if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
      this.instructions.push(strokeInstruction);
    }
    this.reverseHitDetectionInstructions();
    this.state = null;
    return super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(state) {
    if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
      this.instructions.push(strokeInstruction);
      state.lastStroke = this.coordinates.length;
    }
    state.lastStroke = 0;
    super.applyStroke(state);
    this.instructions.push(beginPathInstruction);
  }
};
var LineStringBuilder_default = CanvasLineStringBuilder;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/PolygonBuilder.js
var CanvasPolygonBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(flatCoordinates, offset, ends, stride) {
    const state = this.state;
    const fill = state.fillStyle !== void 0;
    const stroke = state.strokeStyle !== void 0;
    const numEnds = ends.length;
    this.instructions.push(beginPathInstruction);
    this.hitDetectionInstructions.push(beginPathInstruction);
    for (let i = 0; i < numEnds; ++i) {
      const end = ends[i];
      const myBegin = this.coordinates.length;
      const myEnd = this.appendFlatLineCoordinates(
        flatCoordinates,
        offset,
        end,
        stride,
        true,
        !stroke
      );
      const moveToLineToInstruction = [
        Instruction_default.MOVE_TO_LINE_TO,
        myBegin,
        myEnd
      ];
      this.instructions.push(moveToLineToInstruction);
      this.hitDetectionInstructions.push(moveToLineToInstruction);
      if (stroke) {
        this.instructions.push(closePathInstruction);
        this.hitDetectionInstructions.push(closePathInstruction);
      }
      offset = end;
    }
    if (fill) {
      this.instructions.push(fillInstruction);
      this.hitDetectionInstructions.push(fillInstruction);
    }
    if (stroke) {
      this.instructions.push(strokeInstruction);
      this.hitDetectionInstructions.push(strokeInstruction);
    }
    return offset;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   */
  drawCircle(circleGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(circleGeometry, feature);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_FILL_STYLE,
        defaultFillStyle
      ]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_STROKE_STYLE,
        state.strokeStyle,
        state.lineWidth,
        state.lineCap,
        state.lineJoin,
        state.miterLimit,
        state.lineDash,
        state.lineDashOffset
      ]);
    }
    const flatCoordinates = circleGeometry.getFlatCoordinates();
    const stride = circleGeometry.getStride();
    const myBegin = this.coordinates.length;
    this.appendFlatLineCoordinates(
      flatCoordinates,
      0,
      flatCoordinates.length,
      stride,
      false,
      false
    );
    const circleInstruction = [Instruction_default.CIRCLE, myBegin];
    this.instructions.push(beginPathInstruction, circleInstruction);
    this.hitDetectionInstructions.push(beginPathInstruction, circleInstruction);
    if (state.fillStyle !== void 0) {
      this.instructions.push(fillInstruction);
      this.hitDetectionInstructions.push(fillInstruction);
    }
    if (state.strokeStyle !== void 0) {
      this.instructions.push(strokeInstruction);
      this.hitDetectionInstructions.push(strokeInstruction);
    }
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(polygonGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(polygonGeometry, feature);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_FILL_STYLE,
        defaultFillStyle
      ]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_STROKE_STYLE,
        state.strokeStyle,
        state.lineWidth,
        state.lineCap,
        state.lineJoin,
        state.miterLimit,
        state.lineDash,
        state.lineDashOffset
      ]);
    }
    const ends = polygonGeometry.getEnds();
    const flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
    const stride = polygonGeometry.getStride();
    this.drawFlatCoordinatess_(
      flatCoordinates,
      0,
      /** @type {Array<number>} */
      ends,
      stride
    );
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPolygon(multiPolygonGeometry, feature) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(multiPolygonGeometry, feature);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_FILL_STYLE,
        defaultFillStyle
      ]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([
        Instruction_default.SET_STROKE_STYLE,
        state.strokeStyle,
        state.lineWidth,
        state.lineCap,
        state.lineJoin,
        state.miterLimit,
        state.lineDash,
        state.lineDashOffset
      ]);
    }
    const endss = multiPolygonGeometry.getEndss();
    const flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
    const stride = multiPolygonGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = endss.length; i < ii; ++i) {
      offset = this.drawFlatCoordinatess_(
        flatCoordinates,
        offset,
        endss[i],
        stride
      );
    }
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions();
    this.state = null;
    const tolerance = this.tolerance;
    if (tolerance !== 0) {
      const coordinates = this.coordinates;
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = snap(coordinates[i], tolerance);
      }
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const state = this.state;
    const fillStyle = state.fillStyle;
    if (fillStyle !== void 0) {
      this.updateFillStyle(state, this.createFill);
    }
    if (state.strokeStyle !== void 0) {
      this.updateStrokeStyle(state, this.applyStroke);
    }
  }
};
var PolygonBuilder_default = CanvasPolygonBuilder;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/flat/linechunk.js
function lineChunk(chunkLength, flatCoordinates, offset, end, stride) {
  const chunks = [];
  let cursor = offset;
  let chunkM = 0;
  let currentChunk = flatCoordinates.slice(offset, 2);
  while (chunkM < chunkLength && cursor + stride < end) {
    const [x1, y1] = currentChunk.slice(-2);
    const x2 = flatCoordinates[cursor + stride];
    const y2 = flatCoordinates[cursor + stride + 1];
    const segmentLength = Math.sqrt(
      (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
    );
    chunkM += segmentLength;
    if (chunkM >= chunkLength) {
      const m = (chunkLength - chunkM + segmentLength) / segmentLength;
      const x = lerp(x1, x2, m);
      const y = lerp(y1, y2, m);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      if (chunkM == chunkLength) {
        cursor += stride;
      }
      chunkM = 0;
    } else if (chunkM < chunkLength) {
      currentChunk.push(
        flatCoordinates[cursor + stride],
        flatCoordinates[cursor + stride + 1]
      );
      cursor += stride;
    } else {
      const missing = segmentLength - chunkM;
      const x = lerp(x1, x2, missing / segmentLength);
      const y = lerp(y1, y2, missing / segmentLength);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      chunkM = 0;
      cursor += stride;
    }
  }
  if (chunkM > 0) {
    chunks.push(currentChunk);
  }
  return chunks;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/flat/straightchunk.js
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
  let chunkStart = offset;
  let chunkEnd = offset;
  let chunkM = 0;
  let m = 0;
  let start = offset;
  let acos, i, m12, m23, x1, y1, x12, y12, x23, y23;
  for (i = offset; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    if (x1 !== void 0) {
      x23 = x2 - x1;
      y23 = y2 - y1;
      m23 = Math.sqrt(x23 * x23 + y23 * y23);
      if (x12 !== void 0) {
        m += m12;
        acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));
        if (acos > maxAngle) {
          if (m > chunkM) {
            chunkM = m;
            chunkStart = start;
            chunkEnd = i;
          }
          m = 0;
          start = i - stride;
        }
      }
      m12 = m23;
      x12 = x23;
      y12 = y23;
    }
    x1 = x2;
    y1 = y2;
  }
  m += m23;
  return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/TextBuilder.js
var TEXT_ALIGN = {
  "left": 0,
  "end": 0,
  "center": 0.5,
  "right": 1,
  "start": 1,
  "top": 0,
  "middle": 0.5,
  "hanging": 0.2,
  "alphabetic": 0.8,
  "ideographic": 0.8,
  "bottom": 1
};
var CanvasTextBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
    this.labels_ = null;
    this.text_ = "";
    this.textOffsetX_ = 0;
    this.textOffsetY_ = 0;
    this.textRotateWithView_ = void 0;
    this.textRotation_ = 0;
    this.textFillState_ = null;
    this.fillStates = {};
    this.textStrokeState_ = null;
    this.strokeStates = {};
    this.textState_ = /** @type {import("../canvas.js").TextState} */
    {};
    this.textStates = {};
    this.textKey_ = "";
    this.fillKey_ = "";
    this.strokeKey_ = "";
    this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const instructions = super.finish();
    instructions.textStates = this.textStates;
    instructions.fillStates = this.fillStates;
    instructions.strokeStates = this.strokeStates;
    return instructions;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawText(geometry, feature) {
    const fillState = this.textFillState_;
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    if (this.text_ === "" || !textState || !fillState && !strokeState) {
      return;
    }
    const coordinates = this.coordinates;
    let begin = coordinates.length;
    const geometryType = geometry.getType();
    let flatCoordinates = null;
    let stride = geometry.getStride();
    if (textState.placement === "line" && (geometryType == "LineString" || geometryType == "MultiLineString" || geometryType == "Polygon" || geometryType == "MultiPolygon")) {
      if (!intersects(this.getBufferedMaxExtent(), geometry.getExtent())) {
        return;
      }
      let ends;
      flatCoordinates = geometry.getFlatCoordinates();
      if (geometryType == "LineString") {
        ends = [flatCoordinates.length];
      } else if (geometryType == "MultiLineString") {
        ends = /** @type {import("../../geom/MultiLineString.js").default} */
        geometry.getEnds();
      } else if (geometryType == "Polygon") {
        ends = /** @type {import("../../geom/Polygon.js").default} */
        geometry.getEnds().slice(0, 1);
      } else if (geometryType == "MultiPolygon") {
        const endss = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.getEndss()
        );
        ends = [];
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          ends.push(endss[i][0]);
        }
      }
      this.beginGeometry(geometry, feature);
      const repeat = textState.repeat;
      const textAlign = repeat ? void 0 : textState.textAlign;
      let flatOffset = 0;
      for (let o = 0, oo = ends.length; o < oo; ++o) {
        let chunks;
        if (repeat) {
          chunks = lineChunk(
            repeat * this.resolution,
            flatCoordinates,
            flatOffset,
            ends[o],
            stride
          );
        } else {
          chunks = [flatCoordinates.slice(flatOffset, ends[o])];
        }
        for (let c = 0, cc = chunks.length; c < cc; ++c) {
          const chunk = chunks[c];
          let chunkBegin = 0;
          let chunkEnd = chunk.length;
          if (textAlign == void 0) {
            const range = matchingChunk(
              textState.maxAngle,
              chunk,
              0,
              chunk.length,
              2
            );
            chunkBegin = range[0];
            chunkEnd = range[1];
          }
          for (let i = chunkBegin; i < chunkEnd; i += stride) {
            coordinates.push(chunk[i], chunk[i + 1]);
          }
          const end = coordinates.length;
          flatOffset = ends[o];
          this.drawChars_(begin, end);
          begin = end;
        }
      }
      this.endGeometry(feature);
    } else {
      let geometryWidths = textState.overflow ? null : [];
      switch (geometryType) {
        case "Point":
        case "MultiPoint":
          flatCoordinates = /** @type {import("../../geom/MultiPoint.js").default} */
          geometry.getFlatCoordinates();
          break;
        case "LineString":
          flatCoordinates = /** @type {import("../../geom/LineString.js").default} */
          geometry.getFlatMidpoint();
          break;
        case "Circle":
          flatCoordinates = /** @type {import("../../geom/Circle.js").default} */
          geometry.getCenter();
          break;
        case "MultiLineString":
          flatCoordinates = /** @type {import("../../geom/MultiLineString.js").default} */
          geometry.getFlatMidpoints();
          stride = 2;
          break;
        case "Polygon":
          flatCoordinates = /** @type {import("../../geom/Polygon.js").default} */
          geometry.getFlatInteriorPoint();
          if (!textState.overflow) {
            geometryWidths.push(flatCoordinates[2] / this.resolution);
          }
          stride = 3;
          break;
        case "MultiPolygon":
          const interiorPoints = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            geometry.getFlatInteriorPoints()
          );
          flatCoordinates = [];
          for (let i = 0, ii = interiorPoints.length; i < ii; i += 3) {
            if (!textState.overflow) {
              geometryWidths.push(interiorPoints[i + 2] / this.resolution);
            }
            flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
          }
          if (flatCoordinates.length === 0) {
            return;
          }
          stride = 2;
          break;
        default:
      }
      const end = this.appendFlatPointCoordinates(flatCoordinates, stride);
      if (end === begin) {
        return;
      }
      if (geometryWidths && (end - begin) / 2 !== flatCoordinates.length / stride) {
        let beg = begin / 2;
        geometryWidths = geometryWidths.filter((w, i) => {
          const keep = coordinates[(beg + i) * 2] === flatCoordinates[i * stride] && coordinates[(beg + i) * 2 + 1] === flatCoordinates[i * stride + 1];
          if (!keep) {
            --beg;
          }
          return keep;
        });
      }
      this.saveTextStates_();
      if (textState.backgroundFill || textState.backgroundStroke) {
        this.setFillStrokeStyle(
          textState.backgroundFill,
          textState.backgroundStroke
        );
        if (textState.backgroundFill) {
          this.updateFillStyle(this.state, this.createFill);
          this.hitDetectionInstructions.push(this.createFill(this.state));
        }
        if (textState.backgroundStroke) {
          this.updateStrokeStyle(this.state, this.applyStroke);
          this.hitDetectionInstructions.push(this.createStroke(this.state));
        }
      }
      this.beginGeometry(geometry, feature);
      let padding = textState.padding;
      if (padding != defaultPadding && (textState.scale[0] < 0 || textState.scale[1] < 0)) {
        let p0 = textState.padding[0];
        let p12 = textState.padding[1];
        let p22 = textState.padding[2];
        let p32 = textState.padding[3];
        if (textState.scale[0] < 0) {
          p12 = -p12;
          p32 = -p32;
        }
        if (textState.scale[1] < 0) {
          p0 = -p0;
          p22 = -p22;
        }
        padding = [p0, p12, p22, p32];
      }
      const pixelRatio = this.pixelRatio;
      this.instructions.push([
        Instruction_default.DRAW_IMAGE,
        begin,
        end,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        padding == defaultPadding ? defaultPadding : padding.map(function(p) {
          return p * pixelRatio;
        }),
        !!textState.backgroundFill,
        !!textState.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        geometryWidths
      ]);
      const scale = 1 / pixelRatio;
      this.hitDetectionInstructions.push([
        Instruction_default.DRAW_IMAGE,
        begin,
        end,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [scale, scale],
        NaN,
        void 0,
        this.declutterImageWithText_,
        padding,
        !!textState.backgroundFill,
        !!textState.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        geometryWidths
      ]);
      this.endGeometry(feature);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const fillState = this.textFillState_;
    const strokeKey = this.strokeKey_;
    if (strokeState) {
      if (!(strokeKey in this.strokeStates)) {
        this.strokeStates[strokeKey] = {
          strokeStyle: strokeState.strokeStyle,
          lineCap: strokeState.lineCap,
          lineDashOffset: strokeState.lineDashOffset,
          lineWidth: strokeState.lineWidth,
          lineJoin: strokeState.lineJoin,
          miterLimit: strokeState.miterLimit,
          lineDash: strokeState.lineDash
        };
      }
    }
    const textKey = this.textKey_;
    if (!(textKey in this.textStates)) {
      this.textStates[textKey] = {
        font: textState.font,
        textAlign: textState.textAlign || defaultTextAlign,
        justify: textState.justify,
        textBaseline: textState.textBaseline || defaultTextBaseline,
        scale: textState.scale
      };
    }
    const fillKey = this.fillKey_;
    if (fillState) {
      if (!(fillKey in this.fillStates)) {
        this.fillStates[fillKey] = {
          fillStyle: fillState.fillStyle
        };
      }
    }
  }
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(begin, end) {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const strokeKey = this.strokeKey_;
    const textKey = this.textKey_;
    const fillKey = this.fillKey_;
    this.saveTextStates_();
    const pixelRatio = this.pixelRatio;
    const baseline = TEXT_ALIGN[textState.textBaseline];
    const offsetY = this.textOffsetY_ * pixelRatio;
    const text = this.text_;
    const strokeWidth = strokeState ? strokeState.lineWidth * Math.abs(textState.scale[0]) / 2 : 0;
    this.instructions.push([
      Instruction_default.DRAW_CHARS,
      begin,
      end,
      baseline,
      textState.overflow,
      fillKey,
      textState.maxAngle,
      pixelRatio,
      offsetY,
      strokeKey,
      strokeWidth * pixelRatio,
      text,
      textKey,
      1
    ]);
    this.hitDetectionInstructions.push([
      Instruction_default.DRAW_CHARS,
      begin,
      end,
      baseline,
      textState.overflow,
      fillKey,
      textState.maxAngle,
      1,
      offsetY,
      strokeKey,
      strokeWidth,
      text,
      textKey,
      1 / pixelRatio
    ]);
  }
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   */
  setTextStyle(textStyle, sharedData) {
    let textState, fillState, strokeState;
    if (!textStyle) {
      this.text_ = "";
    } else {
      const textFillStyle = textStyle.getFill();
      if (!textFillStyle) {
        fillState = null;
        this.textFillState_ = fillState;
      } else {
        fillState = this.textFillState_;
        if (!fillState) {
          fillState = /** @type {import("../canvas.js").FillState} */
          {};
          this.textFillState_ = fillState;
        }
        fillState.fillStyle = asColorLike(
          textFillStyle.getColor() || defaultFillStyle
        );
      }
      const textStrokeStyle = textStyle.getStroke();
      if (!textStrokeStyle) {
        strokeState = null;
        this.textStrokeState_ = strokeState;
      } else {
        strokeState = this.textStrokeState_;
        if (!strokeState) {
          strokeState = /** @type {import("../canvas.js").StrokeState} */
          {};
          this.textStrokeState_ = strokeState;
        }
        const lineDash = textStrokeStyle.getLineDash();
        const lineDashOffset = textStrokeStyle.getLineDashOffset();
        const lineWidth = textStrokeStyle.getWidth();
        const miterLimit = textStrokeStyle.getMiterLimit();
        strokeState.lineCap = textStrokeStyle.getLineCap() || defaultLineCap;
        strokeState.lineDash = lineDash ? lineDash.slice() : defaultLineDash;
        strokeState.lineDashOffset = lineDashOffset === void 0 ? defaultLineDashOffset : lineDashOffset;
        strokeState.lineJoin = textStrokeStyle.getLineJoin() || defaultLineJoin;
        strokeState.lineWidth = lineWidth === void 0 ? defaultLineWidth : lineWidth;
        strokeState.miterLimit = miterLimit === void 0 ? defaultMiterLimit : miterLimit;
        strokeState.strokeStyle = asColorLike(
          textStrokeStyle.getColor() || defaultStrokeStyle
        );
      }
      textState = this.textState_;
      const font = textStyle.getFont() || defaultFont;
      registerFont(font);
      const textScale = textStyle.getScaleArray();
      textState.overflow = textStyle.getOverflow();
      textState.font = font;
      textState.maxAngle = textStyle.getMaxAngle();
      textState.placement = textStyle.getPlacement();
      textState.textAlign = textStyle.getTextAlign();
      textState.repeat = textStyle.getRepeat();
      textState.justify = textStyle.getJustify();
      textState.textBaseline = textStyle.getTextBaseline() || defaultTextBaseline;
      textState.backgroundFill = textStyle.getBackgroundFill();
      textState.backgroundStroke = textStyle.getBackgroundStroke();
      textState.padding = textStyle.getPadding() || defaultPadding;
      textState.scale = textScale === void 0 ? [1, 1] : textScale;
      const textOffsetX = textStyle.getOffsetX();
      const textOffsetY = textStyle.getOffsetY();
      const textRotateWithView = textStyle.getRotateWithView();
      const textRotation = textStyle.getRotation();
      this.text_ = textStyle.getText() || "";
      this.textOffsetX_ = textOffsetX === void 0 ? 0 : textOffsetX;
      this.textOffsetY_ = textOffsetY === void 0 ? 0 : textOffsetY;
      this.textRotateWithView_ = textRotateWithView === void 0 ? false : textRotateWithView;
      this.textRotation_ = textRotation === void 0 ? 0 : textRotation;
      this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle == "string" ? strokeState.strokeStyle : getUid(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + "|" + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + "[" + strokeState.lineDash.join() + "]" : "";
      this.textKey_ = textState.font + textState.scale + (textState.textAlign || "?") + (textState.repeat || "?") + (textState.justify || "?") + (textState.textBaseline || "?");
      this.fillKey_ = fillState ? typeof fillState.fillStyle == "string" ? fillState.fillStyle : "|" + getUid(fillState.fillStyle) : "";
    }
    this.declutterImageWithText_ = sharedData;
  }
};
var TextBuilder_default = CanvasTextBuilder;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/BuilderGroup.js
var BATCH_CONSTRUCTORS = {
  "Circle": PolygonBuilder_default,
  "Default": Builder_default,
  "Image": ImageBuilder_default,
  "LineString": LineStringBuilder_default,
  "Polygon": PolygonBuilder_default,
  "Text": TextBuilder_default
};
var BuilderGroup = class {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    this.tolerance_ = tolerance;
    this.maxExtent_ = maxExtent;
    this.pixelRatio_ = pixelRatio;
    this.resolution_ = resolution;
    this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const builderInstructions = {};
    for (const zKey in this.buildersByZIndex_) {
      builderInstructions[zKey] = builderInstructions[zKey] || {};
      const builders = this.buildersByZIndex_[zKey];
      for (const builderKey in builders) {
        const builderInstruction = builders[builderKey].finish();
        builderInstructions[zKey][builderKey] = builderInstruction;
      }
    }
    return builderInstructions;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(zIndex, builderType) {
    const zIndexKey = zIndex !== void 0 ? zIndex.toString() : "0";
    let replays = this.buildersByZIndex_[zIndexKey];
    if (replays === void 0) {
      replays = {};
      this.buildersByZIndex_[zIndexKey] = replays;
    }
    let replay = replays[builderType];
    if (replay === void 0) {
      const Constructor = BATCH_CONSTRUCTORS[builderType];
      replay = new Constructor(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      );
      replays[builderType] = replay;
    }
    return replay;
  }
};
var BuilderGroup_default = BuilderGroup;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/flat/textpath.js
function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale, measureAndCacheTextWidth2, font, cache, rotation) {
  let x2 = flatCoordinates[offset];
  let y2 = flatCoordinates[offset + 1];
  let x1 = 0;
  let y1 = 0;
  let segmentLength = 0;
  let segmentM = 0;
  function advance() {
    x1 = x2;
    y1 = y2;
    offset += stride;
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    segmentM += segmentLength;
    segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  do {
    advance();
  } while (offset < end - stride && segmentM + segmentLength < startM);
  let interpolate = segmentLength === 0 ? 0 : (startM - segmentM) / segmentLength;
  const beginX = lerp(x1, x2, interpolate);
  const beginY = lerp(y1, y2, interpolate);
  const startOffset = offset - stride;
  const startLength = segmentM;
  const endM = startM + scale * measureAndCacheTextWidth2(font, text, cache);
  while (offset < end - stride && segmentM + segmentLength < endM) {
    advance();
  }
  interpolate = segmentLength === 0 ? 0 : (endM - segmentM) / segmentLength;
  const endX = lerp(x1, x2, interpolate);
  const endY = lerp(y1, y2, interpolate);
  let reverse;
  if (rotation) {
    const flat = [beginX, beginY, endX, endY];
    rotate(flat, 0, 4, 2, rotation, flat, flat);
    reverse = flat[0] > flat[2];
  } else {
    reverse = beginX > endX;
  }
  const PI = Math.PI;
  const result = [];
  const singleSegment = startOffset + stride === offset;
  offset = startOffset;
  segmentLength = 0;
  segmentM = startLength;
  x2 = flatCoordinates[offset];
  y2 = flatCoordinates[offset + 1];
  let previousAngle;
  if (singleSegment) {
    advance();
    previousAngle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      previousAngle += previousAngle > 0 ? -PI : PI;
    }
    const x = (endX + beginX) / 2;
    const y = (endY + beginY) / 2;
    result[0] = [x, y, (endM - startM) / 2, previousAngle, text];
    return result;
  }
  text = text.replace(/\n/g, " ");
  for (let i = 0, ii = text.length; i < ii; ) {
    advance();
    let angle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      angle += angle > 0 ? -PI : PI;
    }
    if (previousAngle !== void 0) {
      let delta = angle - previousAngle;
      delta += delta > PI ? -2 * PI : delta < -PI ? 2 * PI : 0;
      if (Math.abs(delta) > maxAngle) {
        return null;
      }
    }
    previousAngle = angle;
    const iStart = i;
    let charLength = 0;
    for (; i < ii; ++i) {
      const index = reverse ? ii - i - 1 : i;
      const len = scale * measureAndCacheTextWidth2(font, text[index], cache);
      if (offset + stride < end && segmentM + segmentLength < startM + charLength + len / 2) {
        break;
      }
      charLength += len;
    }
    if (i === iStart) {
      continue;
    }
    const chars = reverse ? text.substring(ii - iStart, ii - i) : text.substring(iStart, i);
    interpolate = segmentLength === 0 ? 0 : (startM + charLength / 2 - segmentM) / segmentLength;
    const x = lerp(x1, x2, interpolate);
    const y = lerp(y1, y2, interpolate);
    result.push([x, y, charLength / 2, angle, chars]);
    startM += charLength;
  }
  return result;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/Executor.js
var tmpExtent = createEmpty();
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
function getDeclutterBox(replayImageOrLabelArgs) {
  return replayImageOrLabelArgs[3].declutterBox;
}
var rtlRegEx = new RegExp(
  /* eslint-disable prettier/prettier */
  "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
  /* eslint-enable prettier/prettier */
);
function horizontalTextAlign(text, align) {
  if ((align === "start" || align === "end") && !rtlRegEx.test(text)) {
    align = align === "start" ? "left" : "right";
  }
  return TEXT_ALIGN[align];
}
function createTextChunks(acc, line, i) {
  if (i > 0) {
    acc.push("\n", "");
  }
  acc.push(line, "");
  return acc;
}
var Executor = class {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(resolution, pixelRatio, overlaps, instructions) {
    this.overlaps = overlaps;
    this.pixelRatio = pixelRatio;
    this.resolution = resolution;
    this.alignFill_;
    this.instructions = instructions.instructions;
    this.coordinates = instructions.coordinates;
    this.coordinateCache_ = {};
    this.renderedTransform_ = create();
    this.hitDetectionInstructions = instructions.hitDetectionInstructions;
    this.pixelCoordinates_ = null;
    this.viewRotation_ = 0;
    this.fillStates = instructions.fillStates || {};
    this.strokeStates = instructions.strokeStates || {};
    this.textStates = instructions.textStates || {};
    this.widths_ = {};
    this.labels_ = {};
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(text, textKey, fillKey, strokeKey) {
    const key = text + textKey + fillKey + strokeKey;
    if (this.labels_[key]) {
      return this.labels_[key];
    }
    const strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
    const fillState = fillKey ? this.fillStates[fillKey] : null;
    const textState = this.textStates[textKey];
    const pixelRatio = this.pixelRatio;
    const scale = [
      textState.scale[0] * pixelRatio,
      textState.scale[1] * pixelRatio
    ];
    const textIsArray = Array.isArray(text);
    const align = textState.justify ? TEXT_ALIGN[textState.justify] : horizontalTextAlign(
      Array.isArray(text) ? text[0] : text,
      textState.textAlign || defaultTextAlign
    );
    const strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
    const chunks = textIsArray ? text : text.split("\n").reduce(createTextChunks, []);
    const { width, height, widths, heights, lineWidths } = getTextDimensions(
      textState,
      chunks
    );
    const renderWidth = width + strokeWidth;
    const contextInstructions = [];
    const w = (renderWidth + 2) * scale[0];
    const h = (height + strokeWidth) * scale[1];
    const label = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: h < 0 ? Math.floor(h) : Math.ceil(h),
      contextInstructions
    };
    if (scale[0] != 1 || scale[1] != 1) {
      contextInstructions.push("scale", scale);
    }
    if (strokeKey) {
      contextInstructions.push("strokeStyle", strokeState.strokeStyle);
      contextInstructions.push("lineWidth", strokeWidth);
      contextInstructions.push("lineCap", strokeState.lineCap);
      contextInstructions.push("lineJoin", strokeState.lineJoin);
      contextInstructions.push("miterLimit", strokeState.miterLimit);
      contextInstructions.push("setLineDash", [strokeState.lineDash]);
      contextInstructions.push("lineDashOffset", strokeState.lineDashOffset);
    }
    if (fillKey) {
      contextInstructions.push("fillStyle", fillState.fillStyle);
    }
    contextInstructions.push("textBaseline", "middle");
    contextInstructions.push("textAlign", "center");
    const leftRight = 0.5 - align;
    let x = align * renderWidth + leftRight * strokeWidth;
    const strokeInstructions = [];
    const fillInstructions = [];
    let lineHeight = 0;
    let lineOffset = 0;
    let widthHeightIndex = 0;
    let lineWidthIndex = 0;
    let previousFont;
    for (let i = 0, ii = chunks.length; i < ii; i += 2) {
      const text2 = chunks[i];
      if (text2 === "\n") {
        lineOffset += lineHeight;
        lineHeight = 0;
        x = align * renderWidth + leftRight * strokeWidth;
        ++lineWidthIndex;
        continue;
      }
      const font = chunks[i + 1] || textState.font;
      if (font !== previousFont) {
        if (strokeKey) {
          strokeInstructions.push("font", font);
        }
        if (fillKey) {
          fillInstructions.push("font", font);
        }
        previousFont = font;
      }
      lineHeight = Math.max(lineHeight, heights[widthHeightIndex]);
      const fillStrokeArgs = [
        text2,
        x + leftRight * widths[widthHeightIndex] + align * (widths[widthHeightIndex] - lineWidths[lineWidthIndex]),
        0.5 * (strokeWidth + lineHeight) + lineOffset
      ];
      x += widths[widthHeightIndex];
      if (strokeKey) {
        strokeInstructions.push("strokeText", fillStrokeArgs);
      }
      if (fillKey) {
        fillInstructions.push("fillText", fillStrokeArgs);
      }
      ++widthHeightIndex;
    }
    Array.prototype.push.apply(contextInstructions, strokeInstructions);
    Array.prototype.push.apply(contextInstructions, fillInstructions);
    this.labels_[key] = label;
    return label;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(context, p12, p22, p32, p42, fillInstruction2, strokeInstruction2) {
    context.beginPath();
    context.moveTo.apply(context, p12);
    context.lineTo.apply(context, p22);
    context.lineTo.apply(context, p32);
    context.lineTo.apply(context, p42);
    context.lineTo.apply(context, p12);
    if (fillInstruction2) {
      this.alignFill_ = /** @type {boolean} */
      fillInstruction2[2];
      this.fill_(context);
    }
    if (strokeInstruction2) {
      this.setStrokeStyle_(
        context,
        /** @type {Array<*>} */
        strokeInstruction2
      );
      context.stroke();
    }
  }
  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(sheetWidth, sheetHeight, centerX, centerY, width, height, anchorX, anchorY, originX, originY, rotation, scale, snapToPixel, padding, fillStroke, feature) {
    anchorX *= scale[0];
    anchorY *= scale[1];
    let x = centerX - anchorX;
    let y = centerY - anchorY;
    const w = width + originX > sheetWidth ? sheetWidth - originX : width;
    const h = height + originY > sheetHeight ? sheetHeight - originY : height;
    const boxW = padding[3] + w * scale[0] + padding[1];
    const boxH = padding[0] + h * scale[1] + padding[2];
    const boxX = x - padding[3];
    const boxY = y - padding[0];
    if (fillStroke || rotation !== 0) {
      p1[0] = boxX;
      p4[0] = boxX;
      p1[1] = boxY;
      p2[1] = boxY;
      p2[0] = boxX + boxW;
      p3[0] = p2[0];
      p3[1] = boxY + boxH;
      p4[1] = p3[1];
    }
    let transform;
    if (rotation !== 0) {
      transform = compose(
        create(),
        centerX,
        centerY,
        1,
        1,
        rotation,
        -centerX,
        -centerY
      );
      apply(transform, p1);
      apply(transform, p2);
      apply(transform, p3);
      apply(transform, p4);
      createOrUpdate(
        Math.min(p1[0], p2[0], p3[0], p4[0]),
        Math.min(p1[1], p2[1], p3[1], p4[1]),
        Math.max(p1[0], p2[0], p3[0], p4[0]),
        Math.max(p1[1], p2[1], p3[1], p4[1]),
        tmpExtent
      );
    } else {
      createOrUpdate(
        Math.min(boxX, boxX + boxW),
        Math.min(boxY, boxY + boxH),
        Math.max(boxX, boxX + boxW),
        Math.max(boxY, boxY + boxH),
        tmpExtent
      );
    }
    if (snapToPixel) {
      x = Math.round(x);
      y = Math.round(y);
    }
    return {
      drawImageX: x,
      drawImageY: y,
      drawImageW: w,
      drawImageH: h,
      originX,
      originY,
      declutterBox: {
        minX: tmpExtent[0],
        minY: tmpExtent[1],
        maxX: tmpExtent[2],
        maxY: tmpExtent[3],
        value: feature
      },
      canvasTransform: transform,
      scale
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(context, contextScale, imageOrLabel, dimensions, opacity, fillInstruction2, strokeInstruction2) {
    const fillStroke = !!(fillInstruction2 || strokeInstruction2);
    const box = dimensions.declutterBox;
    const canvas = context.canvas;
    const strokePadding = strokeInstruction2 ? strokeInstruction2[2] * dimensions.scale[0] / 2 : 0;
    const intersects2 = box.minX - strokePadding <= canvas.width / contextScale && box.maxX + strokePadding >= 0 && box.minY - strokePadding <= canvas.height / contextScale && box.maxY + strokePadding >= 0;
    if (intersects2) {
      if (fillStroke) {
        this.replayTextBackground_(
          context,
          p1,
          p2,
          p3,
          p4,
          /** @type {Array<*>} */
          fillInstruction2,
          /** @type {Array<*>} */
          strokeInstruction2
        );
      }
      drawImageOrLabel(
        context,
        dimensions.canvasTransform,
        opacity,
        imageOrLabel,
        dimensions.originX,
        dimensions.originY,
        dimensions.drawImageW,
        dimensions.drawImageH,
        dimensions.drawImageX,
        dimensions.drawImageY,
        dimensions.scale
      );
    }
    return true;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(context) {
    if (this.alignFill_) {
      const origin = apply(this.renderedTransform_, [0, 0]);
      const repeatSize = 512 * this.pixelRatio;
      context.save();
      context.translate(origin[0] % repeatSize, origin[1] % repeatSize);
      context.rotate(this.viewRotation_);
    }
    context.fill();
    if (this.alignFill_) {
      context.restore();
    }
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(context, instruction) {
    context["strokeStyle"] = /** @type {import("../../colorlike.js").ColorLike} */
    instruction[1];
    context.lineWidth = /** @type {number} */
    instruction[2];
    context.lineCap = /** @type {CanvasLineCap} */
    instruction[3];
    context.lineJoin = /** @type {CanvasLineJoin} */
    instruction[4];
    context.miterLimit = /** @type {number} */
    instruction[5];
    context.lineDashOffset = /** @type {number} */
    instruction[7];
    context.setLineDash(
      /** @type {Array<number>} */
      instruction[6]
    );
  }
  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey) {
    const textState = this.textStates[textKey];
    const label = this.createLabel(text, textKey, fillKey, strokeKey);
    const strokeState = this.strokeStates[strokeKey];
    const pixelRatio = this.pixelRatio;
    const align = horizontalTextAlign(
      Array.isArray(text) ? text[0] : text,
      textState.textAlign || defaultTextAlign
    );
    const baseline = TEXT_ALIGN[textState.textBaseline || defaultTextBaseline];
    const strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0;
    const width = label.width / pixelRatio - 2 * textState.scale[0];
    const anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
    const anchorY = baseline * label.height / pixelRatio + 2 * (0.5 - baseline) * strokeWidth;
    return {
      label,
      anchorX,
      anchorY
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(context, contextScale, transform, instructions, snapToPixel, featureCallback, hitExtent, declutterTree) {
    let pixelCoordinates;
    if (this.pixelCoordinates_ && equals(transform, this.renderedTransform_)) {
      pixelCoordinates = this.pixelCoordinates_;
    } else {
      if (!this.pixelCoordinates_) {
        this.pixelCoordinates_ = [];
      }
      pixelCoordinates = transform2D(
        this.coordinates,
        0,
        this.coordinates.length,
        2,
        transform,
        this.pixelCoordinates_
      );
      setFromArray(this.renderedTransform_, transform);
    }
    let i = 0;
    const ii = instructions.length;
    let d = 0;
    let dd;
    let anchorX, anchorY, prevX, prevY, roundX, roundY, image, text, textKey, strokeKey, fillKey;
    let pendingFill = 0;
    let pendingStroke = 0;
    let lastFillInstruction = null;
    let lastStrokeInstruction = null;
    const coordinateCache = this.coordinateCache_;
    const viewRotation = this.viewRotation_;
    const viewRotationFromTransform = Math.round(Math.atan2(-transform[1], transform[0]) * 1e12) / 1e12;
    const state = (
      /** @type {import("../../render.js").State} */
      {
        context,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: viewRotation
      }
    );
    const batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
    let feature;
    let x, y, currentGeometry;
    while (i < ii) {
      const instruction = instructions[i];
      const type = (
        /** @type {import("./Instruction.js").default} */
        instruction[0]
      );
      switch (type) {
        case Instruction_default.BEGIN_GEOMETRY:
          feature = /** @type {import("../../Feature.js").FeatureLike} */
          instruction[1];
          currentGeometry = instruction[3];
          if (!feature.getGeometry()) {
            i = /** @type {number} */
            instruction[2];
          } else if (hitExtent !== void 0 && !intersects(hitExtent, currentGeometry.getExtent())) {
            i = /** @type {number} */
            instruction[2] + 1;
          } else {
            ++i;
          }
          break;
        case Instruction_default.BEGIN_PATH:
          if (pendingFill > batchSize) {
            this.fill_(context);
            pendingFill = 0;
          }
          if (pendingStroke > batchSize) {
            context.stroke();
            pendingStroke = 0;
          }
          if (!pendingFill && !pendingStroke) {
            context.beginPath();
            prevX = NaN;
            prevY = NaN;
          }
          ++i;
          break;
        case Instruction_default.CIRCLE:
          d = /** @type {number} */
          instruction[1];
          const x1 = pixelCoordinates[d];
          const y1 = pixelCoordinates[d + 1];
          const x2 = pixelCoordinates[d + 2];
          const y2 = pixelCoordinates[d + 3];
          const dx = x2 - x1;
          const dy = y2 - y1;
          const r = Math.sqrt(dx * dx + dy * dy);
          context.moveTo(x1 + r, y1);
          context.arc(x1, y1, r, 0, 2 * Math.PI, true);
          ++i;
          break;
        case Instruction_default.CLOSE_PATH:
          context.closePath();
          ++i;
          break;
        case Instruction_default.CUSTOM:
          d = /** @type {number} */
          instruction[1];
          dd = instruction[2];
          const geometry = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            instruction[3]
          );
          const renderer = instruction[4];
          const fn = instruction.length == 6 ? instruction[5] : void 0;
          state.geometry = geometry;
          state.feature = feature;
          if (!(i in coordinateCache)) {
            coordinateCache[i] = [];
          }
          const coords = coordinateCache[i];
          if (fn) {
            fn(pixelCoordinates, d, dd, 2, coords);
          } else {
            coords[0] = pixelCoordinates[d];
            coords[1] = pixelCoordinates[d + 1];
            coords.length = 2;
          }
          renderer(coords, state);
          ++i;
          break;
        case Instruction_default.DRAW_IMAGE:
          d = /** @type {number} */
          instruction[1];
          dd = /** @type {number} */
          instruction[2];
          image = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          instruction[3];
          anchorX = /** @type {number} */
          instruction[4];
          anchorY = /** @type {number} */
          instruction[5];
          let height = (
            /** @type {number} */
            instruction[6]
          );
          const opacity = (
            /** @type {number} */
            instruction[7]
          );
          const originX = (
            /** @type {number} */
            instruction[8]
          );
          const originY = (
            /** @type {number} */
            instruction[9]
          );
          const rotateWithView = (
            /** @type {boolean} */
            instruction[10]
          );
          let rotation = (
            /** @type {number} */
            instruction[11]
          );
          const scale = (
            /** @type {import("../../size.js").Size} */
            instruction[12]
          );
          let width = (
            /** @type {number} */
            instruction[13]
          );
          const declutterMode = (
            /** @type {"declutter"|"obstacle"|"none"|undefined} */
            instruction[14]
          );
          const declutterImageWithText = (
            /** @type {import("../canvas.js").DeclutterImageWithText} */
            instruction[15]
          );
          if (!image && instruction.length >= 20) {
            text = /** @type {string} */
            instruction[19];
            textKey = /** @type {string} */
            instruction[20];
            strokeKey = /** @type {string} */
            instruction[21];
            fillKey = /** @type {string} */
            instruction[22];
            const labelWithAnchor = this.drawLabelWithPointPlacement_(
              text,
              textKey,
              strokeKey,
              fillKey
            );
            image = labelWithAnchor.label;
            instruction[3] = image;
            const textOffsetX = (
              /** @type {number} */
              instruction[23]
            );
            anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
            instruction[4] = anchorX;
            const textOffsetY = (
              /** @type {number} */
              instruction[24]
            );
            anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
            instruction[5] = anchorY;
            height = image.height;
            instruction[6] = height;
            width = image.width;
            instruction[13] = width;
          }
          let geometryWidths;
          if (instruction.length > 25) {
            geometryWidths = /** @type {number} */
            instruction[25];
          }
          let padding, backgroundFill, backgroundStroke;
          if (instruction.length > 17) {
            padding = /** @type {Array<number>} */
            instruction[16];
            backgroundFill = /** @type {boolean} */
            instruction[17];
            backgroundStroke = /** @type {boolean} */
            instruction[18];
          } else {
            padding = defaultPadding;
            backgroundFill = false;
            backgroundStroke = false;
          }
          if (rotateWithView && viewRotationFromTransform) {
            rotation += viewRotation;
          } else if (!rotateWithView && !viewRotationFromTransform) {
            rotation -= viewRotation;
          }
          let widthIndex = 0;
          for (; d < dd; d += 2) {
            if (geometryWidths && geometryWidths[widthIndex++] < width / this.pixelRatio) {
              continue;
            }
            const dimensions = this.calculateImageOrLabelDimensions_(
              image.width,
              image.height,
              pixelCoordinates[d],
              pixelCoordinates[d + 1],
              width,
              height,
              anchorX,
              anchorY,
              originX,
              originY,
              rotation,
              scale,
              snapToPixel,
              padding,
              backgroundFill || backgroundStroke,
              feature
            );
            const args = [
              context,
              contextScale,
              image,
              dimensions,
              opacity,
              backgroundFill ? (
                /** @type {Array<*>} */
                lastFillInstruction
              ) : null,
              backgroundStroke ? (
                /** @type {Array<*>} */
                lastStrokeInstruction
              ) : null
            ];
            if (declutterTree) {
              if (declutterMode === "none") {
                continue;
              } else if (declutterMode === "obstacle") {
                declutterTree.insert(dimensions.declutterBox);
                continue;
              } else {
                let imageArgs;
                let imageDeclutterBox;
                if (declutterImageWithText) {
                  const index = dd - d;
                  if (!declutterImageWithText[index]) {
                    declutterImageWithText[index] = args;
                    continue;
                  }
                  imageArgs = declutterImageWithText[index];
                  delete declutterImageWithText[index];
                  imageDeclutterBox = getDeclutterBox(imageArgs);
                  if (declutterTree.collides(imageDeclutterBox)) {
                    continue;
                  }
                }
                if (declutterTree.collides(dimensions.declutterBox)) {
                  continue;
                }
                if (imageArgs) {
                  declutterTree.insert(imageDeclutterBox);
                  this.replayImageOrLabel_.apply(this, imageArgs);
                }
                declutterTree.insert(dimensions.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, args);
          }
          ++i;
          break;
        case Instruction_default.DRAW_CHARS:
          const begin = (
            /** @type {number} */
            instruction[1]
          );
          const end = (
            /** @type {number} */
            instruction[2]
          );
          const baseline = (
            /** @type {number} */
            instruction[3]
          );
          const overflow = (
            /** @type {number} */
            instruction[4]
          );
          fillKey = /** @type {string} */
          instruction[5];
          const maxAngle = (
            /** @type {number} */
            instruction[6]
          );
          const measurePixelRatio = (
            /** @type {number} */
            instruction[7]
          );
          const offsetY = (
            /** @type {number} */
            instruction[8]
          );
          strokeKey = /** @type {string} */
          instruction[9];
          const strokeWidth = (
            /** @type {number} */
            instruction[10]
          );
          text = /** @type {string} */
          instruction[11];
          textKey = /** @type {string} */
          instruction[12];
          const pixelRatioScale = [
            /** @type {number} */
            instruction[13],
            /** @type {number} */
            instruction[13]
          ];
          const textState = this.textStates[textKey];
          const font = textState.font;
          const textScale = [
            textState.scale[0] * measurePixelRatio,
            textState.scale[1] * measurePixelRatio
          ];
          let cachedWidths;
          if (font in this.widths_) {
            cachedWidths = this.widths_[font];
          } else {
            cachedWidths = {};
            this.widths_[font] = cachedWidths;
          }
          const pathLength = lineStringLength(pixelCoordinates, begin, end, 2);
          const textLength = Math.abs(textScale[0]) * measureAndCacheTextWidth(font, text, cachedWidths);
          if (overflow || textLength <= pathLength) {
            const textAlign = this.textStates[textKey].textAlign;
            const startM = (pathLength - textLength) * TEXT_ALIGN[textAlign];
            const parts = drawTextOnPath(
              pixelCoordinates,
              begin,
              end,
              2,
              text,
              startM,
              maxAngle,
              Math.abs(textScale[0]),
              measureAndCacheTextWidth,
              font,
              cachedWidths,
              viewRotationFromTransform ? 0 : this.viewRotation_
            );
            drawChars:
              if (parts) {
                const replayImageOrLabelArgs = [];
                let c, cc, chars, label, part;
                if (strokeKey) {
                  for (c = 0, cc = parts.length; c < cc; ++c) {
                    part = parts[c];
                    chars = /** @type {string} */
                    part[4];
                    label = this.createLabel(chars, textKey, "", strokeKey);
                    anchorX = /** @type {number} */
                    part[2] + (textScale[0] < 0 ? -strokeWidth : strokeWidth);
                    anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth * textScale[1] / textScale[0] - offsetY;
                    const dimensions = this.calculateImageOrLabelDimensions_(
                      label.width,
                      label.height,
                      part[0],
                      part[1],
                      label.width,
                      label.height,
                      anchorX,
                      anchorY,
                      0,
                      0,
                      part[3],
                      pixelRatioScale,
                      false,
                      defaultPadding,
                      false,
                      feature
                    );
                    if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                      break drawChars;
                    }
                    replayImageOrLabelArgs.push([
                      context,
                      contextScale,
                      label,
                      dimensions,
                      1,
                      null,
                      null
                    ]);
                  }
                }
                if (fillKey) {
                  for (c = 0, cc = parts.length; c < cc; ++c) {
                    part = parts[c];
                    chars = /** @type {string} */
                    part[4];
                    label = this.createLabel(chars, textKey, fillKey, "");
                    anchorX = /** @type {number} */
                    part[2];
                    anchorY = baseline * label.height - offsetY;
                    const dimensions = this.calculateImageOrLabelDimensions_(
                      label.width,
                      label.height,
                      part[0],
                      part[1],
                      label.width,
                      label.height,
                      anchorX,
                      anchorY,
                      0,
                      0,
                      part[3],
                      pixelRatioScale,
                      false,
                      defaultPadding,
                      false,
                      feature
                    );
                    if (declutterTree && declutterTree.collides(dimensions.declutterBox)) {
                      break drawChars;
                    }
                    replayImageOrLabelArgs.push([
                      context,
                      contextScale,
                      label,
                      dimensions,
                      1,
                      null,
                      null
                    ]);
                  }
                }
                if (declutterTree) {
                  declutterTree.load(replayImageOrLabelArgs.map(getDeclutterBox));
                }
                for (let i2 = 0, ii2 = replayImageOrLabelArgs.length; i2 < ii2; ++i2) {
                  this.replayImageOrLabel_.apply(this, replayImageOrLabelArgs[i2]);
                }
              }
          }
          ++i;
          break;
        case Instruction_default.END_GEOMETRY:
          if (featureCallback !== void 0) {
            feature = /** @type {import("../../Feature.js").FeatureLike} */
            instruction[1];
            const result = featureCallback(feature, currentGeometry);
            if (result) {
              return result;
            }
          }
          ++i;
          break;
        case Instruction_default.FILL:
          if (batchSize) {
            pendingFill++;
          } else {
            this.fill_(context);
          }
          ++i;
          break;
        case Instruction_default.MOVE_TO_LINE_TO:
          d = /** @type {number} */
          instruction[1];
          dd = /** @type {number} */
          instruction[2];
          x = pixelCoordinates[d];
          y = pixelCoordinates[d + 1];
          roundX = x + 0.5 | 0;
          roundY = y + 0.5 | 0;
          if (roundX !== prevX || roundY !== prevY) {
            context.moveTo(x, y);
            prevX = roundX;
            prevY = roundY;
          }
          for (d += 2; d < dd; d += 2) {
            x = pixelCoordinates[d];
            y = pixelCoordinates[d + 1];
            roundX = x + 0.5 | 0;
            roundY = y + 0.5 | 0;
            if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
              context.lineTo(x, y);
              prevX = roundX;
              prevY = roundY;
            }
          }
          ++i;
          break;
        case Instruction_default.SET_FILL_STYLE:
          lastFillInstruction = instruction;
          this.alignFill_ = instruction[2];
          if (pendingFill) {
            this.fill_(context);
            pendingFill = 0;
            if (pendingStroke) {
              context.stroke();
              pendingStroke = 0;
            }
          }
          context.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          instruction[1];
          ++i;
          break;
        case Instruction_default.SET_STROKE_STYLE:
          lastStrokeInstruction = instruction;
          if (pendingStroke) {
            context.stroke();
            pendingStroke = 0;
          }
          this.setStrokeStyle_(
            context,
            /** @type {Array<*>} */
            instruction
          );
          ++i;
          break;
        case Instruction_default.STROKE:
          if (batchSize) {
            pendingStroke++;
          } else {
            context.stroke();
          }
          ++i;
          break;
        default:
          ++i;
          break;
      }
    }
    if (pendingFill) {
      this.fill_(context);
    }
    if (pendingStroke) {
      context.stroke();
    }
    return void 0;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(context, contextScale, transform, viewRotation, snapToPixel, declutterTree) {
    this.viewRotation_ = viewRotation;
    this.execute_(
      context,
      contextScale,
      transform,
      this.instructions,
      snapToPixel,
      void 0,
      void 0,
      declutterTree
    );
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(context, transform, viewRotation, featureCallback, hitExtent) {
    this.viewRotation_ = viewRotation;
    return this.execute_(
      context,
      1,
      transform,
      this.hitDetectionInstructions,
      true,
      featureCallback,
      hitExtent
    );
  }
};
var Executor_default = Executor;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/ExecutorGroup.js
var ORDER = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
var ExecutorGroup = class {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   */
  constructor(maxExtent, resolution, pixelRatio, overlaps, allInstructions, renderBuffer) {
    this.maxExtent_ = maxExtent;
    this.overlaps_ = overlaps;
    this.pixelRatio_ = pixelRatio;
    this.resolution_ = resolution;
    this.renderBuffer_ = renderBuffer;
    this.executorsByZIndex_ = {};
    this.hitDetectionContext_ = null;
    this.hitDetectionTransform_ = create();
    this.createExecutors_(allInstructions);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(context, transform) {
    const flatClipCoords = this.getClipCoords(transform);
    context.beginPath();
    context.moveTo(flatClipCoords[0], flatClipCoords[1]);
    context.lineTo(flatClipCoords[2], flatClipCoords[3]);
    context.lineTo(flatClipCoords[4], flatClipCoords[5]);
    context.lineTo(flatClipCoords[6], flatClipCoords[7]);
    context.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   */
  createExecutors_(allInstructions) {
    for (const zIndex in allInstructions) {
      let executors = this.executorsByZIndex_[zIndex];
      if (executors === void 0) {
        executors = {};
        this.executorsByZIndex_[zIndex] = executors;
      }
      const instructionByZindex = allInstructions[zIndex];
      for (const builderType in instructionByZindex) {
        const instructions = instructionByZindex[builderType];
        executors[builderType] = new Executor_default(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          instructions
        );
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(executors) {
    for (const zIndex in this.executorsByZIndex_) {
      const candidates = this.executorsByZIndex_[zIndex];
      for (let i = 0, ii = executors.length; i < ii; ++i) {
        if (executors[i] in candidates) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
    hitTolerance = Math.round(hitTolerance);
    const contextSize = hitTolerance * 2 + 1;
    const transform = compose(
      this.hitDetectionTransform_,
      hitTolerance + 0.5,
      hitTolerance + 0.5,
      1 / resolution,
      -1 / resolution,
      -rotation,
      -coordinate[0],
      -coordinate[1]
    );
    const newContext = !this.hitDetectionContext_;
    if (newContext) {
      this.hitDetectionContext_ = createCanvasContext2D(
        contextSize,
        contextSize,
        void 0,
        { willReadFrequently: true }
      );
    }
    const context = this.hitDetectionContext_;
    if (context.canvas.width !== contextSize || context.canvas.height !== contextSize) {
      context.canvas.width = contextSize;
      context.canvas.height = contextSize;
    } else if (!newContext) {
      context.clearRect(0, 0, contextSize, contextSize);
    }
    let hitExtent;
    if (this.renderBuffer_ !== void 0) {
      hitExtent = createEmpty();
      extendCoordinate(hitExtent, coordinate);
      buffer(
        hitExtent,
        resolution * (this.renderBuffer_ + hitTolerance),
        hitExtent
      );
    }
    const indexes = getPixelIndexArray(hitTolerance);
    let builderType;
    function featureCallback(feature, geometry) {
      const imageData = context.getImageData(
        0,
        0,
        contextSize,
        contextSize
      ).data;
      for (let i2 = 0, ii = indexes.length; i2 < ii; i2++) {
        if (imageData[indexes[i2]] > 0) {
          if (!declutteredFeatures || builderType !== "Image" && builderType !== "Text" || declutteredFeatures.includes(feature)) {
            const idx = (indexes[i2] - 3) / 4;
            const x = hitTolerance - idx % contextSize;
            const y = hitTolerance - (idx / contextSize | 0);
            const result2 = callback(feature, geometry, x * x + y * y);
            if (result2) {
              return result2;
            }
          }
          context.clearRect(0, 0, contextSize, contextSize);
          break;
        }
      }
      return void 0;
    }
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(ascending);
    let i, j, executors, executor, result;
    for (i = zs.length - 1; i >= 0; --i) {
      const zIndexKey = zs[i].toString();
      executors = this.executorsByZIndex_[zIndexKey];
      for (j = ORDER.length - 1; j >= 0; --j) {
        builderType = ORDER[j];
        executor = executors[builderType];
        if (executor !== void 0) {
          result = executor.executeHitDetection(
            context,
            transform,
            rotation,
            featureCallback,
            hitExtent
          );
          if (result) {
            return result;
          }
        }
      }
    }
    return void 0;
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(transform) {
    const maxExtent = this.maxExtent_;
    if (!maxExtent) {
      return null;
    }
    const minX = maxExtent[0];
    const minY = maxExtent[1];
    const maxX = maxExtent[2];
    const maxY = maxExtent[3];
    const flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
    transform2D(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
    return flatClipCoords;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return isEmpty(this.executorsByZIndex_);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ORDER}
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(context, contextScale, transform, viewRotation, snapToPixel, builderTypes, declutterTree) {
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(ascending);
    if (this.maxExtent_) {
      context.save();
      this.clip(context, transform);
    }
    builderTypes = builderTypes ? builderTypes : ORDER;
    let i, ii, j, jj, replays, replay;
    if (declutterTree) {
      zs.reverse();
    }
    for (i = 0, ii = zs.length; i < ii; ++i) {
      const zIndexKey = zs[i].toString();
      replays = this.executorsByZIndex_[zIndexKey];
      for (j = 0, jj = builderTypes.length; j < jj; ++j) {
        const builderType = builderTypes[j];
        replay = replays[builderType];
        if (replay !== void 0) {
          replay.execute(
            context,
            contextScale,
            transform,
            viewRotation,
            snapToPixel,
            declutterTree
          );
        }
      }
    }
    if (this.maxExtent_) {
      context.restore();
    }
  }
};
var circlePixelIndexArrayCache = {};
function getPixelIndexArray(radius) {
  if (circlePixelIndexArrayCache[radius] !== void 0) {
    return circlePixelIndexArrayCache[radius];
  }
  const size = radius * 2 + 1;
  const maxDistanceSq = radius * radius;
  const distances = new Array(maxDistanceSq + 1);
  for (let i = 0; i <= radius; ++i) {
    for (let j = 0; j <= radius; ++j) {
      const distanceSq = i * i + j * j;
      if (distanceSq > maxDistanceSq) {
        break;
      }
      let distance = distances[distanceSq];
      if (!distance) {
        distance = [];
        distances[distanceSq] = distance;
      }
      distance.push(((radius + i) * size + (radius + j)) * 4 + 3);
      if (i > 0) {
        distance.push(((radius - i) * size + (radius + j)) * 4 + 3);
      }
      if (j > 0) {
        distance.push(((radius + i) * size + (radius - j)) * 4 + 3);
        if (i > 0) {
          distance.push(((radius - i) * size + (radius - j)) * 4 + 3);
        }
      }
    }
  }
  const pixelIndex = [];
  for (let i = 0, ii = distances.length; i < ii; ++i) {
    if (distances[i]) {
      pixelIndex.push(...distances[i]);
    }
  }
  circlePixelIndexArrayCache[radius] = pixelIndex;
  return pixelIndex;
}
var ExecutorGroup_default = ExecutorGroup;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/canvas/hitdetect.js
var HIT_DETECT_RESOLUTION = 0.5;
function createHitDetectionImageData(size, transforms, features, styleFunction, extent, resolution, rotation) {
  const width = size[0] * HIT_DETECT_RESOLUTION;
  const height = size[1] * HIT_DETECT_RESOLUTION;
  const context = createCanvasContext2D(width, height);
  context.imageSmoothingEnabled = false;
  const canvas = context.canvas;
  const renderer = new Immediate_default(
    context,
    HIT_DETECT_RESOLUTION,
    extent,
    null,
    rotation
  );
  const featureCount = features.length;
  const indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
  const featuresByZIndex = {};
  for (let i = 1; i <= featureCount; ++i) {
    const feature = features[i - 1];
    const featureStyleFunction = feature.getStyleFunction() || styleFunction;
    if (!styleFunction) {
      continue;
    }
    let styles = featureStyleFunction(feature, resolution);
    if (!styles) {
      continue;
    }
    if (!Array.isArray(styles)) {
      styles = [styles];
    }
    const index = i * indexFactor;
    const color = index.toString(16).padStart(7, "#00000");
    for (let j = 0, jj = styles.length; j < jj; ++j) {
      const originalStyle = styles[j];
      const geometry = originalStyle.getGeometryFunction()(feature);
      if (!geometry || !intersects(extent, geometry.getExtent())) {
        continue;
      }
      const style = originalStyle.clone();
      const fill = style.getFill();
      if (fill) {
        fill.setColor(color);
      }
      const stroke = style.getStroke();
      if (stroke) {
        stroke.setColor(color);
        stroke.setLineDash(null);
      }
      style.setText(void 0);
      const image = originalStyle.getImage();
      if (image && image.getOpacity() !== 0) {
        const imgSize = image.getImageSize();
        if (!imgSize) {
          continue;
        }
        const imgContext = createCanvasContext2D(
          imgSize[0],
          imgSize[1],
          void 0,
          { alpha: false }
        );
        const img = imgContext.canvas;
        imgContext.fillStyle = color;
        imgContext.fillRect(0, 0, img.width, img.height);
        style.setImage(
          new Icon_default({
            img,
            imgSize,
            anchor: image.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: image.getOrigin(),
            opacity: 1,
            size: image.getSize(),
            scale: image.getScale(),
            rotation: image.getRotation(),
            rotateWithView: image.getRotateWithView()
          })
        );
      }
      const zIndex = style.getZIndex() || 0;
      let byGeometryType = featuresByZIndex[zIndex];
      if (!byGeometryType) {
        byGeometryType = {};
        featuresByZIndex[zIndex] = byGeometryType;
        byGeometryType["Polygon"] = [];
        byGeometryType["Circle"] = [];
        byGeometryType["LineString"] = [];
        byGeometryType["Point"] = [];
      }
      const type = geometry.getType();
      if (type === "GeometryCollection") {
        const geometries = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          geometry.getGeometriesArrayRecursive()
        );
        for (let i2 = 0, ii = geometries.length; i2 < ii; ++i2) {
          const geometry2 = geometries[i2];
          byGeometryType[geometry2.getType().replace("Multi", "")].push(
            geometry2,
            style
          );
        }
      } else {
        byGeometryType[type.replace("Multi", "")].push(geometry, style);
      }
    }
  }
  const zIndexKeys = Object.keys(featuresByZIndex).map(Number).sort(ascending);
  for (let i = 0, ii = zIndexKeys.length; i < ii; ++i) {
    const byGeometryType = featuresByZIndex[zIndexKeys[i]];
    for (const type in byGeometryType) {
      const geomAndStyle = byGeometryType[type];
      for (let j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
        renderer.setStyle(geomAndStyle[j + 1]);
        for (let k = 0, kk = transforms.length; k < kk; ++k) {
          renderer.setTransform(transforms[k]);
          renderer.drawGeometry(geomAndStyle[j]);
        }
      }
    }
  }
  return context.getImageData(0, 0, canvas.width, canvas.height);
}
function hitDetect(pixel, features, imageData) {
  const resultFeatures = [];
  if (imageData) {
    const x = Math.floor(Math.round(pixel[0]) * HIT_DETECT_RESOLUTION);
    const y = Math.floor(Math.round(pixel[1]) * HIT_DETECT_RESOLUTION);
    const index = (clamp(x, 0, imageData.width - 1) + clamp(y, 0, imageData.height - 1) * imageData.width) * 4;
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const i = b + 256 * (g + 256 * r);
    const indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);
    if (i && i % indexFactor === 0) {
      resultFeatures.push(features[i / indexFactor - 1]);
    }
  }
  return resultFeatures;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/canvas/VectorLayer.js
var CanvasVectorLayerRenderer = class extends Layer_default2 {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(vectorLayer) {
    super(vectorLayer);
    this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);
    this.animatingOrInteracting_;
    this.hitDetectionImageData_ = null;
    this.renderedFeatures_ = null;
    this.renderedRevision_ = -1;
    this.renderedResolution_ = NaN;
    this.renderedExtent_ = createEmpty();
    this.wrappedRenderedExtent_ = createEmpty();
    this.renderedRotation_;
    this.renderedCenter_ = null;
    this.renderedProjection_ = null;
    this.renderedRenderOrder_ = null;
    this.replayGroup_ = null;
    this.replayGroupChanged = true;
    this.declutterExecutorGroup = null;
    this.clipping = true;
    this.compositionContext_ = null;
    this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(executorGroup, frameState, declutterTree) {
    const extent = frameState.extent;
    const viewState = frameState.viewState;
    const center = viewState.center;
    const resolution = viewState.resolution;
    const projection = viewState.projection;
    const rotation = viewState.rotation;
    const projectionExtent = projection.getExtent();
    const vectorSource = this.getLayer().getSource();
    const pixelRatio = frameState.pixelRatio;
    const viewHints = frameState.viewHints;
    const snapToPixel = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    const context = this.compositionContext_;
    const width = Math.round(frameState.size[0] * pixelRatio);
    const height = Math.round(frameState.size[1] * pixelRatio);
    const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
    const worldWidth = multiWorld ? getWidth(projectionExtent) : null;
    const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
    let world = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
    do {
      const transform = this.getRenderTransform(
        center,
        resolution,
        rotation,
        pixelRatio,
        width,
        height,
        world * worldWidth
      );
      executorGroup.execute(
        context,
        1,
        transform,
        rotation,
        snapToPixel,
        void 0,
        declutterTree
      );
    } while (++world < endWorld);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const compositionContext = createCanvasContext2D(
        this.context.canvas.width,
        this.context.canvas.height,
        canvasPool
      );
      this.compositionContext_ = compositionContext;
    } else {
      this.compositionContext_ = this.context;
    }
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const alpha = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_;
      this.context.drawImage(this.compositionContext_.canvas, 0, 0);
      this.context.globalAlpha = alpha;
      releaseCanvas(this.compositionContext_);
      canvasPool.push(this.compositionContext_.canvas);
      this.compositionContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    if (this.declutterExecutorGroup) {
      this.setupCompositionContext_();
      this.renderWorlds(
        this.declutterExecutorGroup,
        frameState,
        frameState.declutterTree
      );
      this.releaseCompositionContext_();
    }
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(frameState, target) {
    const pixelRatio = frameState.pixelRatio;
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    makeScale(this.pixelTransform, 1 / pixelRatio, 1 / pixelRatio);
    makeInverse(this.inversePixelTransform, this.pixelTransform);
    const canvasTransform = toString(this.pixelTransform);
    this.useContainer(target, canvasTransform, this.getBackground(frameState));
    const context = this.context;
    const canvas = context.canvas;
    const replayGroup = this.replayGroup_;
    const declutterExecutorGroup = this.declutterExecutorGroup;
    if ((!replayGroup || replayGroup.isEmpty()) && (!declutterExecutorGroup || declutterExecutorGroup.isEmpty())) {
      return null;
    }
    const width = Math.round(frameState.size[0] * pixelRatio);
    const height = Math.round(frameState.size[1] * pixelRatio);
    if (canvas.width != width || canvas.height != height) {
      canvas.width = width;
      canvas.height = height;
      if (canvas.style.transform !== canvasTransform) {
        canvas.style.transform = canvasTransform;
      }
    } else if (!this.containerReused) {
      context.clearRect(0, 0, width, height);
    }
    this.preRender(context, frameState);
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    this.opacity_ = layerState.opacity;
    this.setupCompositionContext_();
    let clipped = false;
    let render = true;
    if (layerState.extent && this.clipping) {
      const layerExtent = fromUserExtent(layerState.extent, projection);
      render = intersects(layerExtent, frameState.extent);
      clipped = render && !containsExtent(layerExtent, frameState.extent);
      if (clipped) {
        this.clipUnrotated(this.compositionContext_, frameState, layerExtent);
      }
    }
    if (render) {
      this.renderWorlds(replayGroup, frameState);
    }
    if (clipped) {
      this.compositionContext_.restore();
    }
    this.releaseCompositionContext_();
    this.postRender(context, frameState);
    if (this.renderedRotation_ !== viewState.rotation) {
      this.renderedRotation_ = viewState.rotation;
      this.hitDetectionImageData_ = null;
    }
    return this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   */
  getFeatures(pixel) {
    return new Promise((resolve) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const size = [this.context.canvas.width, this.context.canvas.height];
        apply(this.pixelTransform, size);
        const center = this.renderedCenter_;
        const resolution = this.renderedResolution_;
        const rotation = this.renderedRotation_;
        const projection = this.renderedProjection_;
        const extent = this.wrappedRenderedExtent_;
        const layer = this.getLayer();
        const transforms = [];
        const width = size[0] * HIT_DETECT_RESOLUTION;
        const height = size[1] * HIT_DETECT_RESOLUTION;
        transforms.push(
          this.getRenderTransform(
            center,
            resolution,
            rotation,
            HIT_DETECT_RESOLUTION,
            width,
            height,
            0
          ).slice()
        );
        const source = layer.getSource();
        const projectionExtent = projection.getExtent();
        if (source.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, extent)) {
          let startX = extent[0];
          const worldWidth = getWidth(projectionExtent);
          let world = 0;
          let offsetX;
          while (startX < projectionExtent[0]) {
            --world;
            offsetX = worldWidth * world;
            transforms.push(
              this.getRenderTransform(
                center,
                resolution,
                rotation,
                HIT_DETECT_RESOLUTION,
                width,
                height,
                offsetX
              ).slice()
            );
            startX += worldWidth;
          }
          world = 0;
          startX = extent[2];
          while (startX > projectionExtent[2]) {
            ++world;
            offsetX = worldWidth * world;
            transforms.push(
              this.getRenderTransform(
                center,
                resolution,
                rotation,
                HIT_DETECT_RESOLUTION,
                width,
                height,
                offsetX
              ).slice()
            );
            startX -= worldWidth;
          }
        }
        this.hitDetectionImageData_ = createHitDetectionImageData(
          size,
          transforms,
          this.renderedFeatures_,
          layer.getStyleFunction(),
          extent,
          resolution,
          rotation
        );
      }
      resolve(
        hitDetect(pixel, this.renderedFeatures_, this.hitDetectionImageData_)
      );
    });
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    if (!this.replayGroup_) {
      return void 0;
    }
    const resolution = frameState.viewState.resolution;
    const rotation = frameState.viewState.rotation;
    const layer = this.getLayer();
    const features = {};
    const featureCallback = function(feature, geometry, distanceSq) {
      const key = getUid(feature);
      const match = features[key];
      if (!match) {
        if (distanceSq === 0) {
          features[key] = true;
          return callback(feature, layer, geometry);
        }
        matches.push(
          features[key] = {
            feature,
            layer,
            geometry,
            distanceSq,
            callback
          }
        );
      } else if (match !== true && distanceSq < match.distanceSq) {
        if (distanceSq === 0) {
          features[key] = true;
          matches.splice(matches.lastIndexOf(match), 1);
          return callback(feature, layer, geometry);
        }
        match.geometry = geometry;
        match.distanceSq = distanceSq;
      }
      return void 0;
    };
    let result;
    const executorGroups = [this.replayGroup_];
    if (this.declutterExecutorGroup) {
      executorGroups.push(this.declutterExecutorGroup);
    }
    executorGroups.some((executorGroup) => {
      return result = executorGroup.forEachFeatureAtCoordinate(
        coordinate,
        resolution,
        rotation,
        hitTolerance,
        featureCallback,
        executorGroup === this.declutterExecutorGroup && frameState.declutterTree ? frameState.declutterTree.all().map((item) => item.value) : null
      );
    });
    return result;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const layer = this.getLayer();
    if (layer.getVisible() && this.replayGroup_) {
      layer.changed();
    }
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(event) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    const vectorLayer = this.getLayer();
    const vectorSource = vectorLayer.getSource();
    if (!vectorSource) {
      return false;
    }
    const animating = frameState.viewHints[ViewHint_default.ANIMATING];
    const interacting = frameState.viewHints[ViewHint_default.INTERACTING];
    const updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
    const updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();
    if (this.ready && !updateWhileAnimating && animating || !updateWhileInteracting && interacting) {
      this.animatingOrInteracting_ = true;
      return true;
    }
    this.animatingOrInteracting_ = false;
    const frameStateExtent = frameState.extent;
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const resolution = viewState.resolution;
    const pixelRatio = frameState.pixelRatio;
    const vectorLayerRevision = vectorLayer.getRevision();
    const vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
    let vectorLayerRenderOrder = vectorLayer.getRenderOrder();
    if (vectorLayerRenderOrder === void 0) {
      vectorLayerRenderOrder = defaultOrder;
    }
    const center = viewState.center.slice();
    const extent = buffer(
      frameStateExtent,
      vectorLayerRenderBuffer * resolution
    );
    const renderedExtent = extent.slice();
    const loadExtents = [extent.slice()];
    const projectionExtent = projection.getExtent();
    if (vectorSource.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, frameState.extent)) {
      const worldWidth = getWidth(projectionExtent);
      const gutter = Math.max(getWidth(extent) / 2, worldWidth);
      extent[0] = projectionExtent[0] - gutter;
      extent[2] = projectionExtent[2] + gutter;
      wrapX2(center, projection);
      const loadExtent = wrapX(loadExtents[0], projection);
      if (loadExtent[0] < projectionExtent[0] && loadExtent[2] < projectionExtent[2]) {
        loadExtents.push([
          loadExtent[0] + worldWidth,
          loadExtent[1],
          loadExtent[2] + worldWidth,
          loadExtent[3]
        ]);
      } else if (loadExtent[0] > projectionExtent[0] && loadExtent[2] > projectionExtent[2]) {
        loadExtents.push([
          loadExtent[0] - worldWidth,
          loadExtent[1],
          loadExtent[2] - worldWidth,
          loadExtent[3]
        ]);
      }
    }
    if (this.ready && this.renderedResolution_ == resolution && this.renderedRevision_ == vectorLayerRevision && this.renderedRenderOrder_ == vectorLayerRenderOrder && containsExtent(this.wrappedRenderedExtent_, extent)) {
      if (!equals(this.renderedExtent_, renderedExtent)) {
        this.hitDetectionImageData_ = null;
        this.renderedExtent_ = renderedExtent;
      }
      this.renderedCenter_ = center;
      this.replayGroupChanged = false;
      return true;
    }
    this.replayGroup_ = null;
    const replayGroup = new BuilderGroup_default(
      getTolerance(resolution, pixelRatio),
      extent,
      resolution,
      pixelRatio
    );
    let declutterBuilderGroup;
    if (this.getLayer().getDeclutter()) {
      declutterBuilderGroup = new BuilderGroup_default(
        getTolerance(resolution, pixelRatio),
        extent,
        resolution,
        pixelRatio
      );
    }
    const userProjection = getUserProjection();
    let userTransform;
    if (userProjection) {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        const extent2 = loadExtents[i];
        const userExtent2 = toUserExtent(extent2, projection);
        vectorSource.loadFeatures(
          userExtent2,
          toUserResolution(resolution, projection),
          userProjection
        );
      }
      userTransform = getTransformFromProjections(userProjection, projection);
    } else {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        vectorSource.loadFeatures(loadExtents[i], resolution, projection);
      }
    }
    const squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
    let ready = true;
    const render = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       */
      (feature) => {
        let styles;
        const styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();
        if (styleFunction) {
          styles = styleFunction(feature, resolution);
        }
        if (styles) {
          const dirty = this.renderFeature(
            feature,
            squaredTolerance,
            styles,
            replayGroup,
            userTransform,
            declutterBuilderGroup
          );
          ready = ready && !dirty;
        }
      }
    );
    const userExtent = toUserExtent(extent, projection);
    const features = vectorSource.getFeaturesInExtent(userExtent);
    if (vectorLayerRenderOrder) {
      features.sort(vectorLayerRenderOrder);
    }
    for (let i = 0, ii = features.length; i < ii; ++i) {
      render(features[i]);
    }
    this.renderedFeatures_ = features;
    this.ready = ready;
    const replayGroupInstructions = replayGroup.finish();
    const executorGroup = new ExecutorGroup_default(
      extent,
      resolution,
      pixelRatio,
      vectorSource.getOverlaps(),
      replayGroupInstructions,
      vectorLayer.getRenderBuffer()
    );
    if (declutterBuilderGroup) {
      this.declutterExecutorGroup = new ExecutorGroup_default(
        extent,
        resolution,
        pixelRatio,
        vectorSource.getOverlaps(),
        declutterBuilderGroup.finish(),
        vectorLayer.getRenderBuffer()
      );
    }
    this.renderedResolution_ = resolution;
    this.renderedRevision_ = vectorLayerRevision;
    this.renderedRenderOrder_ = vectorLayerRenderOrder;
    this.renderedExtent_ = renderedExtent;
    this.wrappedRenderedExtent_ = extent;
    this.renderedCenter_ = center;
    this.renderedProjection_ = projection;
    this.replayGroup_ = executorGroup;
    this.hitDetectionImageData_ = null;
    this.replayGroupChanged = true;
    return true;
  }
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {import("../../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(feature, squaredTolerance, styles, builderGroup, transform, declutterBuilderGroup) {
    if (!styles) {
      return false;
    }
    let loading = false;
    if (Array.isArray(styles)) {
      for (let i = 0, ii = styles.length; i < ii; ++i) {
        loading = renderFeature(
          builderGroup,
          feature,
          styles[i],
          squaredTolerance,
          this.boundHandleStyleImageChange_,
          transform,
          declutterBuilderGroup
        ) || loading;
      }
    } else {
      loading = renderFeature(
        builderGroup,
        feature,
        styles,
        squaredTolerance,
        this.boundHandleStyleImageChange_,
        transform,
        declutterBuilderGroup
      );
    }
    return loading;
  }
};
var VectorLayer_default = CanvasVectorLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/Vector.js
var VectorLayer = class extends BaseVector_default {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(options) {
    super(options);
  }
  createRenderer() {
    return new VectorLayer_default(this);
  }
};
var Vector_default = VectorLayer;

export {
  BaseVector_default,
  BuilderGroup_default,
  ExecutorGroup_default,
  HIT_DETECT_RESOLUTION,
  createHitDetectionImageData,
  hitDetect,
  VectorLayer_default,
  Vector_default
};
//# sourceMappingURL=chunk-JRQFKBJH.js.map
