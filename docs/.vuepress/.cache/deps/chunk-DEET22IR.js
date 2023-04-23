import {
  TileImage_default
} from "./chunk-2T4BANHD.js";
import {
  hash
} from "./chunk-4HUDH2X5.js";
import {
  scale,
  toSize
} from "./chunk-CVLUVQGU.js";
import {
  modulo
} from "./chunk-MRQCEQD2.js";
import {
  createEmpty
} from "./chunk-SVEQH656.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/uri.js
function appendParams(uri, params) {
  const keyParams = [];
  Object.keys(params).forEach(function(k) {
    if (params[k] !== null && params[k] !== void 0) {
      keyParams.push(k + "=" + encodeURIComponent(params[k]));
    }
  });
  const qs = keyParams.join("&");
  uri = uri.replace(/[?&]$/, "");
  uri += uri.includes("?") ? "&" : "?";
  return uri + qs;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/source/TileArcGISRest.js
var TileArcGISRest = class extends TileImage_default {
  /**
   * @param {Options} [options] Tile ArcGIS Rest options.
   */
  constructor(options) {
    options = options ? options : {};
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      interpolate: options.interpolate,
      projection: options.projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX !== void 0 ? options.wrapX : true,
      transition: options.transition,
      zDirection: options.zDirection
    });
    this.params_ = options.params || {};
    this.hidpi_ = options.hidpi !== void 0 ? options.hidpi : true;
    this.tmpExtent_ = createEmpty();
    this.setKey(this.getKeyForParams_());
  }
  /**
   * @private
   * @return {string} The key for the current params.
   */
  getKeyForParams_() {
    let i = 0;
    const res = [];
    for (const key in this.params_) {
      res[i++] = key + "-" + this.params_[key];
    }
    return res.join("/");
  }
  /**
   * Get the user-provided params, i.e. those passed to the constructor through
   * the "params" option, and possibly updated using the updateParams method.
   * @return {Object} Params.
   * @api
   */
  getParams() {
    return this.params_;
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
   * @param {import("../size.js").Size} tileSize Tile size.
   * @param {import("../extent.js").Extent} tileExtent Tile extent.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @param {Object} params Params.
   * @return {string|undefined} Request URL.
   * @private
   */
  getRequestUrl_(tileCoord, tileSize, tileExtent, pixelRatio, projection, params) {
    const urls = this.urls;
    if (!urls) {
      return void 0;
    }
    const srid = projection.getCode().split(/:(?=\d+$)/).pop();
    params["SIZE"] = tileSize[0] + "," + tileSize[1];
    params["BBOX"] = tileExtent.join(",");
    params["BBOXSR"] = srid;
    params["IMAGESR"] = srid;
    params["DPI"] = Math.round(
      params["DPI"] ? params["DPI"] * pixelRatio : 90 * pixelRatio
    );
    let url;
    if (urls.length == 1) {
      url = urls[0];
    } else {
      const index = modulo(hash(tileCoord), urls.length);
      url = urls[index];
    }
    const modifiedUrl = url.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
    return appendParams(modifiedUrl, params);
  }
  /**
   * Get the tile pixel ratio for this source.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Tile pixel ratio.
   */
  getTilePixelRatio(pixelRatio) {
    return this.hidpi_ ? pixelRatio : 1;
  }
  /**
   * Update the user-provided params.
   * @param {Object} params Params.
   * @api
   */
  updateParams(params) {
    Object.assign(this.params_, params);
    this.setKey(this.getKeyForParams_());
  }
  /**
   * @param {import("../tilecoord.js").TileCoord} tileCoord The tile coordinate
   * @param {number} pixelRatio The pixel ratio
   * @param {import("../proj/Projection.js").default} projection The projection
   * @return {string|undefined} The tile URL
   * @override
   */
  tileUrlFunction(tileCoord, pixelRatio, projection) {
    let tileGrid = this.getTileGrid();
    if (!tileGrid) {
      tileGrid = this.getTileGridForProjection(projection);
    }
    if (tileGrid.getResolutions().length <= tileCoord[0]) {
      return void 0;
    }
    if (pixelRatio != 1 && !this.hidpi_) {
      pixelRatio = 1;
    }
    const tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent_);
    let tileSize = toSize(tileGrid.getTileSize(tileCoord[0]), this.tmpSize);
    if (pixelRatio != 1) {
      tileSize = scale(tileSize, pixelRatio, this.tmpSize);
    }
    const baseParams = {
      "F": "image",
      "FORMAT": "PNG32",
      "TRANSPARENT": true
    };
    Object.assign(baseParams, this.params_);
    return this.getRequestUrl_(
      tileCoord,
      tileSize,
      tileExtent,
      pixelRatio,
      projection,
      baseParams
    );
  }
};
var TileArcGISRest_default = TileArcGISRest;

export {
  appendParams,
  TileArcGISRest_default
};
//# sourceMappingURL=chunk-DEET22IR.js.map
