import {
  Graticule_default,
  Kinetic_default,
  MapBrowserEventHandler_default,
  MapBrowserEvent_default,
  MapEventType_default,
  MapEvent_default,
  Map_default
} from "./chunk-FIQOWFCP.js";
import "./chunk-JRQFKBJH.js";
import {
  ImageCanvas_default,
  TileQueue_default,
  VectorRenderTile_default,
  VectorTile_default
} from "./chunk-TG33FKFN.js";
import {
  Collection_default
} from "./chunk-5ZDNWXCQ.js";
import "./chunk-SQVMHEBV.js";
import "./chunk-WCMIUO4X.js";
import "./chunk-W2437R7T.js";
import "./chunk-WL5X6JVJ.js";
import {
  CLASS_SELECTABLE
} from "./chunk-OJPRZ5YB.js";
import {
  View_default,
  circular
} from "./chunk-6ZURMBVA.js";
import "./chunk-2TMUTZK6.js";
import "./chunk-JRWFCR3R.js";
import {
  TileCache_default
} from "./chunk-4HUDH2X5.js";
import "./chunk-PKGI5USR.js";
import {
  ImageTile_default,
  TileRange_default,
  Tile_default
} from "./chunk-3C6LSC5V.js";
import "./chunk-ED3LVK3A.js";
import "./chunk-LPX5UMAH.js";
import {
  ImageBase_default,
  Image_default
} from "./chunk-CVLUVQGU.js";
import {
  outerHeight,
  outerWidth,
  removeChildren,
  removeNode
} from "./chunk-7L63NS2R.js";
import {
  Feature_default
} from "./chunk-D45UB37M.js";
import "./chunk-SAVLA52U.js";
import "./chunk-5QXGCLBM.js";
import "./chunk-ENSXDPMZ.js";
import "./chunk-MSTFIB3N.js";
import "./chunk-LUOILEKQ.js";
import "./chunk-XIKHSCTS.js";
import "./chunk-WZHGFLG3.js";
import {
  get,
  getTransformFromProjections,
  identityTransform
} from "./chunk-5HKLM7RS.js";
import {
  toRadians
} from "./chunk-MRQCEQD2.js";
import {
  Object_default,
  VERSION,
  getUid
} from "./chunk-CVB4T47V.js";
import {
  Disposable_default,
  Event_default,
  Observable_default,
  listen,
  unlistenByKey
} from "./chunk-M7GNM6RX.js";
import "./chunk-SDN6AWWT.js";
import {
  containsExtent
} from "./chunk-SVEQH656.js";
import {
  AssertionError_default
} from "./chunk-EJMS2UXH.js";
import "./chunk-OZI5HTJH.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/Geolocation.js
var Property = {
  ACCURACY: "accuracy",
  ACCURACY_GEOMETRY: "accuracyGeometry",
  ALTITUDE: "altitude",
  ALTITUDE_ACCURACY: "altitudeAccuracy",
  HEADING: "heading",
  POSITION: "position",
  PROJECTION: "projection",
  SPEED: "speed",
  TRACKING: "tracking",
  TRACKING_OPTIONS: "trackingOptions"
};
var GeolocationErrorType = {
  /**
   * Triggered when a `GeolocationPositionError` occurs.
   * @event module:ol/Geolocation.GeolocationError#error
   * @api
   */
  ERROR: "error"
};
var GeolocationError = class extends Event_default {
  /**
   * @param {GeolocationPositionError} error error object.
   */
  constructor(error) {
    super(GeolocationErrorType.ERROR);
    this.code = error.code;
    this.message = error.message;
  }
};
var Geolocation = class extends Object_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    this.on;
    this.once;
    this.un;
    options = options || {};
    this.position_ = null;
    this.transform_ = identityTransform;
    this.watchId_ = void 0;
    this.addChangeListener(Property.PROJECTION, this.handleProjectionChanged_);
    this.addChangeListener(Property.TRACKING, this.handleTrackingChanged_);
    if (options.projection !== void 0) {
      this.setProjection(options.projection);
    }
    if (options.trackingOptions !== void 0) {
      this.setTrackingOptions(options.trackingOptions);
    }
    this.setTracking(options.tracking !== void 0 ? options.tracking : false);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.setTracking(false);
    super.disposeInternal();
  }
  /**
   * @private
   */
  handleProjectionChanged_() {
    const projection = this.getProjection();
    if (projection) {
      this.transform_ = getTransformFromProjections(
        get("EPSG:4326"),
        projection
      );
      if (this.position_) {
        this.set(Property.POSITION, this.transform_(this.position_));
      }
    }
  }
  /**
   * @private
   */
  handleTrackingChanged_() {
    if ("geolocation" in navigator) {
      const tracking = this.getTracking();
      if (tracking && this.watchId_ === void 0) {
        this.watchId_ = navigator.geolocation.watchPosition(
          this.positionChange_.bind(this),
          this.positionError_.bind(this),
          this.getTrackingOptions()
        );
      } else if (!tracking && this.watchId_ !== void 0) {
        navigator.geolocation.clearWatch(this.watchId_);
        this.watchId_ = void 0;
      }
    }
  }
  /**
   * @private
   * @param {GeolocationPosition} position position event.
   */
  positionChange_(position) {
    const coords = position.coords;
    this.set(Property.ACCURACY, coords.accuracy);
    this.set(
      Property.ALTITUDE,
      coords.altitude === null ? void 0 : coords.altitude
    );
    this.set(
      Property.ALTITUDE_ACCURACY,
      coords.altitudeAccuracy === null ? void 0 : coords.altitudeAccuracy
    );
    this.set(
      Property.HEADING,
      coords.heading === null ? void 0 : toRadians(coords.heading)
    );
    if (!this.position_) {
      this.position_ = [coords.longitude, coords.latitude];
    } else {
      this.position_[0] = coords.longitude;
      this.position_[1] = coords.latitude;
    }
    const projectedPosition = this.transform_(this.position_);
    this.set(Property.POSITION, projectedPosition.slice());
    this.set(Property.SPEED, coords.speed === null ? void 0 : coords.speed);
    const geometry = circular(this.position_, coords.accuracy);
    geometry.applyTransform(this.transform_);
    this.set(Property.ACCURACY_GEOMETRY, geometry);
    this.changed();
  }
  /**
   * @private
   * @param {GeolocationPositionError} error error object.
   */
  positionError_(error) {
    this.dispatchEvent(new GeolocationError(error));
  }
  /**
   * Get the accuracy of the position in meters.
   * @return {number|undefined} The accuracy of the position measurement in
   *     meters.
   * @observable
   * @api
   */
  getAccuracy() {
    return (
      /** @type {number|undefined} */
      this.get(Property.ACCURACY)
    );
  }
  /**
   * Get a geometry of the position accuracy.
   * @return {?import("./geom/Polygon.js").default} A geometry of the position accuracy.
   * @observable
   * @api
   */
  getAccuracyGeometry() {
    return (
      /** @type {?import("./geom/Polygon.js").default} */
      this.get(Property.ACCURACY_GEOMETRY) || null
    );
  }
  /**
   * Get the altitude associated with the position.
   * @return {number|undefined} The altitude of the position in meters above mean
   *     sea level.
   * @observable
   * @api
   */
  getAltitude() {
    return (
      /** @type {number|undefined} */
      this.get(Property.ALTITUDE)
    );
  }
  /**
   * Get the altitude accuracy of the position.
   * @return {number|undefined} The accuracy of the altitude measurement in
   *     meters.
   * @observable
   * @api
   */
  getAltitudeAccuracy() {
    return (
      /** @type {number|undefined} */
      this.get(Property.ALTITUDE_ACCURACY)
    );
  }
  /**
   * Get the heading as radians clockwise from North.
   * Note: depending on the browser, the heading is only defined if the `enableHighAccuracy`
   * is set to `true` in the tracking options.
   * @return {number|undefined} The heading of the device in radians from north.
   * @observable
   * @api
   */
  getHeading() {
    return (
      /** @type {number|undefined} */
      this.get(Property.HEADING)
    );
  }
  /**
   * Get the position of the device.
   * @return {import("./coordinate.js").Coordinate|undefined} The current position of the device reported
   *     in the current projection.
   * @observable
   * @api
   */
  getPosition() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Property.POSITION)
    );
  }
  /**
   * Get the projection associated with the position.
   * @return {import("./proj/Projection.js").default|undefined} The projection the position is
   *     reported in.
   * @observable
   * @api
   */
  getProjection() {
    return (
      /** @type {import("./proj/Projection.js").default|undefined} */
      this.get(Property.PROJECTION)
    );
  }
  /**
   * Get the speed in meters per second.
   * @return {number|undefined} The instantaneous speed of the device in meters
   *     per second.
   * @observable
   * @api
   */
  getSpeed() {
    return (
      /** @type {number|undefined} */
      this.get(Property.SPEED)
    );
  }
  /**
   * Determine if the device location is being tracked.
   * @return {boolean} The device location is being tracked.
   * @observable
   * @api
   */
  getTracking() {
    return (
      /** @type {boolean} */
      this.get(Property.TRACKING)
    );
  }
  /**
   * Get the tracking options.
   * See https://www.w3.org/TR/geolocation-API/#position-options.
   * @return {PositionOptions|undefined} PositionOptions as defined by
   *     the [HTML5 Geolocation spec
   *     ](https://www.w3.org/TR/geolocation-API/#position_options_interface).
   * @observable
   * @api
   */
  getTrackingOptions() {
    return (
      /** @type {PositionOptions|undefined} */
      this.get(Property.TRACKING_OPTIONS)
    );
  }
  /**
   * Set the projection to use for transforming the coordinates.
   * @param {import("./proj.js").ProjectionLike} projection The projection the position is
   *     reported in.
   * @observable
   * @api
   */
  setProjection(projection) {
    this.set(Property.PROJECTION, get(projection));
  }
  /**
   * Enable or disable tracking.
   * @param {boolean} tracking Enable tracking.
   * @observable
   * @api
   */
  setTracking(tracking) {
    this.set(Property.TRACKING, tracking);
  }
  /**
   * Set the tracking options.
   * See http://www.w3.org/TR/geolocation-API/#position-options.
   * @param {PositionOptions} options PositionOptions as defined by the
   *     [HTML5 Geolocation spec
   *     ](http://www.w3.org/TR/geolocation-API/#position_options_interface).
   * @observable
   * @api
   */
  setTrackingOptions(options) {
    this.set(Property.TRACKING_OPTIONS, options);
  }
};
var Geolocation_default = Geolocation;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/Overlay.js
var Property2 = {
  ELEMENT: "element",
  MAP: "map",
  OFFSET: "offset",
  POSITION: "position",
  POSITIONING: "positioning"
};
var Overlay = class extends Object_default {
  /**
   * @param {Options} options Overlay options.
   */
  constructor(options) {
    super();
    this.on;
    this.once;
    this.un;
    this.options = options;
    this.id = options.id;
    this.insertFirst = options.insertFirst !== void 0 ? options.insertFirst : true;
    this.stopEvent = options.stopEvent !== void 0 ? options.stopEvent : true;
    this.element = document.createElement("div");
    this.element.className = options.className !== void 0 ? options.className : "ol-overlay-container " + CLASS_SELECTABLE;
    this.element.style.position = "absolute";
    this.element.style.pointerEvents = "auto";
    this.autoPan = options.autoPan === true ? {} : options.autoPan || void 0;
    this.rendered = {
      transform_: "",
      visible: true
    };
    this.mapPostrenderListenerKey = null;
    this.addChangeListener(Property2.ELEMENT, this.handleElementChanged);
    this.addChangeListener(Property2.MAP, this.handleMapChanged);
    this.addChangeListener(Property2.OFFSET, this.handleOffsetChanged);
    this.addChangeListener(Property2.POSITION, this.handlePositionChanged);
    this.addChangeListener(Property2.POSITIONING, this.handlePositioningChanged);
    if (options.element !== void 0) {
      this.setElement(options.element);
    }
    this.setOffset(options.offset !== void 0 ? options.offset : [0, 0]);
    this.setPositioning(options.positioning || "top-left");
    if (options.position !== void 0) {
      this.setPosition(options.position);
    }
  }
  /**
   * Get the DOM element of this overlay.
   * @return {HTMLElement|undefined} The Element containing the overlay.
   * @observable
   * @api
   */
  getElement() {
    return (
      /** @type {HTMLElement|undefined} */
      this.get(Property2.ELEMENT)
    );
  }
  /**
   * Get the overlay identifier which is set on constructor.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id;
  }
  /**
   * Get the map associated with this overlay.
   * @return {import("./Map.js").default|null} The map that the
   * overlay is part of.
   * @observable
   * @api
   */
  getMap() {
    return (
      /** @type {import("./Map.js").default|null} */
      this.get(Property2.MAP) || null
    );
  }
  /**
   * Get the offset of this overlay.
   * @return {Array<number>} The offset.
   * @observable
   * @api
   */
  getOffset() {
    return (
      /** @type {Array<number>} */
      this.get(Property2.OFFSET)
    );
  }
  /**
   * Get the current position of this overlay.
   * @return {import("./coordinate.js").Coordinate|undefined} The spatial point that the overlay is
   *     anchored at.
   * @observable
   * @api
   */
  getPosition() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Property2.POSITION)
    );
  }
  /**
   * Get the current positioning of this overlay.
   * @return {Positioning} How the overlay is positioned
   *     relative to its point on the map.
   * @observable
   * @api
   */
  getPositioning() {
    return (
      /** @type {Positioning} */
      this.get(Property2.POSITIONING)
    );
  }
  /**
   * @protected
   */
  handleElementChanged() {
    removeChildren(this.element);
    const element = this.getElement();
    if (element) {
      this.element.appendChild(element);
    }
  }
  /**
   * @protected
   */
  handleMapChanged() {
    if (this.mapPostrenderListenerKey) {
      removeNode(this.element);
      unlistenByKey(this.mapPostrenderListenerKey);
      this.mapPostrenderListenerKey = null;
    }
    const map = this.getMap();
    if (map) {
      this.mapPostrenderListenerKey = listen(
        map,
        MapEventType_default.POSTRENDER,
        this.render,
        this
      );
      this.updatePixelPosition();
      const container = this.stopEvent ? map.getOverlayContainerStopEvent() : map.getOverlayContainer();
      if (this.insertFirst) {
        container.insertBefore(this.element, container.childNodes[0] || null);
      } else {
        container.appendChild(this.element);
      }
      this.performAutoPan();
    }
  }
  /**
   * @protected
   */
  render() {
    this.updatePixelPosition();
  }
  /**
   * @protected
   */
  handleOffsetChanged() {
    this.updatePixelPosition();
  }
  /**
   * @protected
   */
  handlePositionChanged() {
    this.updatePixelPosition();
    this.performAutoPan();
  }
  /**
   * @protected
   */
  handlePositioningChanged() {
    this.updatePixelPosition();
  }
  /**
   * Set the DOM element to be associated with this overlay.
   * @param {HTMLElement|undefined} element The Element containing the overlay.
   * @observable
   * @api
   */
  setElement(element) {
    this.set(Property2.ELEMENT, element);
  }
  /**
   * Set the map to be associated with this overlay.
   * @param {import("./Map.js").default|null} map The map that the
   * overlay is part of. Pass `null` to just remove the overlay from the current map.
   * @observable
   * @api
   */
  setMap(map) {
    this.set(Property2.MAP, map);
  }
  /**
   * Set the offset for this overlay.
   * @param {Array<number>} offset Offset.
   * @observable
   * @api
   */
  setOffset(offset) {
    this.set(Property2.OFFSET, offset);
  }
  /**
   * Set the position for this overlay. If the position is `undefined` the
   * overlay is hidden.
   * @param {import("./coordinate.js").Coordinate|undefined} position The spatial point that the overlay
   *     is anchored at.
   * @observable
   * @api
   */
  setPosition(position) {
    this.set(Property2.POSITION, position);
  }
  /**
   * Pan the map so that the overlay is entirely visible in the current viewport
   * (if necessary) using the configured autoPan parameters
   * @protected
   */
  performAutoPan() {
    if (this.autoPan) {
      this.panIntoView(this.autoPan);
    }
  }
  /**
   * Pan the map so that the overlay is entirely visible in the current viewport
   * (if necessary).
   * @param {PanIntoViewOptions} [panIntoViewOptions] Options for the pan action
   * @api
   */
  panIntoView(panIntoViewOptions) {
    const map = this.getMap();
    if (!map || !map.getTargetElement() || !this.get(Property2.POSITION)) {
      return;
    }
    const mapRect = this.getRect(map.getTargetElement(), map.getSize());
    const element = this.getElement();
    const overlayRect = this.getRect(element, [
      outerWidth(element),
      outerHeight(element)
    ]);
    panIntoViewOptions = panIntoViewOptions || {};
    const myMargin = panIntoViewOptions.margin === void 0 ? 20 : panIntoViewOptions.margin;
    if (!containsExtent(mapRect, overlayRect)) {
      const offsetLeft = overlayRect[0] - mapRect[0];
      const offsetRight = mapRect[2] - overlayRect[2];
      const offsetTop = overlayRect[1] - mapRect[1];
      const offsetBottom = mapRect[3] - overlayRect[3];
      const delta = [0, 0];
      if (offsetLeft < 0) {
        delta[0] = offsetLeft - myMargin;
      } else if (offsetRight < 0) {
        delta[0] = Math.abs(offsetRight) + myMargin;
      }
      if (offsetTop < 0) {
        delta[1] = offsetTop - myMargin;
      } else if (offsetBottom < 0) {
        delta[1] = Math.abs(offsetBottom) + myMargin;
      }
      if (delta[0] !== 0 || delta[1] !== 0) {
        const center = (
          /** @type {import("./coordinate.js").Coordinate} */
          map.getView().getCenterInternal()
        );
        const centerPx = map.getPixelFromCoordinateInternal(center);
        if (!centerPx) {
          return;
        }
        const newCenterPx = [centerPx[0] + delta[0], centerPx[1] + delta[1]];
        const panOptions = panIntoViewOptions.animation || {};
        map.getView().animateInternal({
          center: map.getCoordinateFromPixelInternal(newCenterPx),
          duration: panOptions.duration,
          easing: panOptions.easing
        });
      }
    }
  }
  /**
   * Get the extent of an element relative to the document
   * @param {HTMLElement} element The element.
   * @param {import("./size.js").Size} size The size of the element.
   * @return {import("./extent.js").Extent} The extent.
   * @protected
   */
  getRect(element, size) {
    const box = element.getBoundingClientRect();
    const offsetX = box.left + window.pageXOffset;
    const offsetY = box.top + window.pageYOffset;
    return [offsetX, offsetY, offsetX + size[0], offsetY + size[1]];
  }
  /**
   * Set the positioning for this overlay.
   * @param {Positioning} positioning how the overlay is
   *     positioned relative to its point on the map.
   * @observable
   * @api
   */
  setPositioning(positioning) {
    this.set(Property2.POSITIONING, positioning);
  }
  /**
   * Modify the visibility of the element.
   * @param {boolean} visible Element visibility.
   * @protected
   */
  setVisible(visible) {
    if (this.rendered.visible !== visible) {
      this.element.style.display = visible ? "" : "none";
      this.rendered.visible = visible;
    }
  }
  /**
   * Update pixel position.
   * @protected
   */
  updatePixelPosition() {
    const map = this.getMap();
    const position = this.getPosition();
    if (!map || !map.isRendered() || !position) {
      this.setVisible(false);
      return;
    }
    const pixel = map.getPixelFromCoordinate(position);
    const mapSize = map.getSize();
    this.updateRenderedPosition(pixel, mapSize);
  }
  /**
   * @param {import("./pixel.js").Pixel} pixel The pixel location.
   * @param {import("./size.js").Size|undefined} mapSize The map size.
   * @protected
   */
  updateRenderedPosition(pixel, mapSize) {
    const style = this.element.style;
    const offset = this.getOffset();
    const positioning = this.getPositioning();
    this.setVisible(true);
    const x = Math.round(pixel[0] + offset[0]) + "px";
    const y = Math.round(pixel[1] + offset[1]) + "px";
    let posX = "0%";
    let posY = "0%";
    if (positioning == "bottom-right" || positioning == "center-right" || positioning == "top-right") {
      posX = "-100%";
    } else if (positioning == "bottom-center" || positioning == "center-center" || positioning == "top-center") {
      posX = "-50%";
    }
    if (positioning == "bottom-left" || positioning == "bottom-center" || positioning == "bottom-right") {
      posY = "-100%";
    } else if (positioning == "center-left" || positioning == "center-center" || positioning == "center-right") {
      posY = "-50%";
    }
    const transform = `translate(${posX}, ${posY}) translate(${x}, ${y})`;
    if (this.rendered.transform_ != transform) {
      this.rendered.transform_ = transform;
      style.transform = transform;
    }
  }
  /**
   * returns the options this Overlay has been created with
   * @return {Options} overlay options
   */
  getOptions() {
    return this.options;
  }
};
var Overlay_default = Overlay;
export {
  AssertionError_default as AssertionError,
  Collection_default as Collection,
  Disposable_default as Disposable,
  Feature_default as Feature,
  Geolocation_default as Geolocation,
  Graticule_default as Graticule,
  Image_default as Image,
  ImageBase_default as ImageBase,
  ImageCanvas_default as ImageCanvas,
  ImageTile_default as ImageTile,
  Kinetic_default as Kinetic,
  Map_default as Map,
  MapBrowserEvent_default as MapBrowserEvent,
  MapBrowserEventHandler_default as MapBrowserEventHandler,
  MapEvent_default as MapEvent,
  Object_default as Object,
  Observable_default as Observable,
  Overlay_default as Overlay,
  Tile_default as Tile,
  TileCache_default as TileCache,
  TileQueue_default as TileQueue,
  TileRange_default as TileRange,
  VERSION,
  VectorRenderTile_default as VectorRenderTile,
  VectorTile_default as VectorTile,
  View_default as View,
  getUid
};
//# sourceMappingURL=ol.js.map
