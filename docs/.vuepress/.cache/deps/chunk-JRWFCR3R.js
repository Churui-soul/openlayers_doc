import {
  clamp
} from "./chunk-MRQCEQD2.js";
import {
  assert
} from "./chunk-EJMS2UXH.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/color.js
var HEX_COLOR_RE_ = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;
var NAMED_COLOR_RE_ = /^([a-z]*)$|^hsla?\(.*\)$/i;
function asString(color) {
  if (typeof color === "string") {
    return color;
  }
  return toString(color);
}
function fromNamed(color) {
  const el = document.createElement("div");
  el.style.color = color;
  if (el.style.color !== "") {
    document.body.appendChild(el);
    const rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    return rgb;
  }
  return "";
}
var fromString = function() {
  const MAX_CACHE_SIZE = 1024;
  const cache = {};
  let cacheSize = 0;
  return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function(s) {
      let color;
      if (cache.hasOwnProperty(s)) {
        color = cache[s];
      } else {
        if (cacheSize >= MAX_CACHE_SIZE) {
          let i = 0;
          for (const key in cache) {
            if ((i++ & 3) === 0) {
              delete cache[key];
              --cacheSize;
            }
          }
        }
        color = fromStringInternal_(s);
        cache[s] = color;
        ++cacheSize;
      }
      return color;
    }
  );
}();
function asArray(color) {
  if (Array.isArray(color)) {
    return color;
  }
  return fromString(color);
}
function fromStringInternal_(s) {
  let r, g, b, a, color;
  if (NAMED_COLOR_RE_.exec(s)) {
    s = fromNamed(s);
  }
  if (HEX_COLOR_RE_.exec(s)) {
    const n = s.length - 1;
    let d;
    if (n <= 4) {
      d = 1;
    } else {
      d = 2;
    }
    const hasAlpha = n === 4 || n === 8;
    r = parseInt(s.substr(1 + 0 * d, d), 16);
    g = parseInt(s.substr(1 + 1 * d, d), 16);
    b = parseInt(s.substr(1 + 2 * d, d), 16);
    if (hasAlpha) {
      a = parseInt(s.substr(1 + 3 * d, d), 16);
    } else {
      a = 255;
    }
    if (d == 1) {
      r = (r << 4) + r;
      g = (g << 4) + g;
      b = (b << 4) + b;
      if (hasAlpha) {
        a = (a << 4) + a;
      }
    }
    color = [r, g, b, a / 255];
  } else if (s.startsWith("rgba(")) {
    color = s.slice(5, -1).split(",").map(Number);
    normalize(color);
  } else if (s.startsWith("rgb(")) {
    color = s.slice(4, -1).split(",").map(Number);
    color.push(1);
    normalize(color);
  } else {
    assert(false, 14);
  }
  return color;
}
function normalize(color) {
  color[0] = clamp(color[0] + 0.5 | 0, 0, 255);
  color[1] = clamp(color[1] + 0.5 | 0, 0, 255);
  color[2] = clamp(color[2] + 0.5 | 0, 0, 255);
  color[3] = clamp(color[3], 0, 1);
  return color;
}
function toString(color) {
  let r = color[0];
  if (r != (r | 0)) {
    r = r + 0.5 | 0;
  }
  let g = color[1];
  if (g != (g | 0)) {
    g = g + 0.5 | 0;
  }
  let b = color[2];
  if (b != (b | 0)) {
    b = b + 0.5 | 0;
  }
  const a = color[3] === void 0 ? 1 : Math.round(color[3] * 100) / 100;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
function isStringColor(s) {
  if (NAMED_COLOR_RE_.test(s)) {
    s = fromNamed(s);
  }
  return HEX_COLOR_RE_.test(s) || s.startsWith("rgba(") || s.startsWith("rgb(");
}

export {
  asString,
  fromString,
  asArray,
  toString,
  isStringColor
};
//# sourceMappingURL=chunk-JRWFCR3R.js.map
