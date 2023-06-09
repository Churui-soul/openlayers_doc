import {
  MultiLineString_default
} from "./chunk-XLSMZ4DY.js";
import {
  DataTile_default,
  DataTile_default2,
  ImageLayer_default,
  Image_default2 as Image_default,
  TileJSON_default,
  VectorTile_default,
  asArrayLike,
  asImageLike,
  defaultLoadFunction
} from "./chunk-VFPNHWJS.js";
import {
  Graticule_default,
  Group_default,
  Map_default
} from "./chunk-FIQOWFCP.js";
import {
  BaseVector_default,
  BuilderGroup_default,
  ExecutorGroup_default,
  HIT_DETECT_RESOLUTION,
  VectorLayer_default,
  Vector_default as Vector_default2,
  createHitDetectionImageData,
  hitDetect
} from "./chunk-JRQFKBJH.js";
import {
  ImageCanvas_default
} from "./chunk-TG33FKFN.js";
import {
  VectorEventType_default,
  Vector_default,
  bbox
} from "./chunk-5ZDNWXCQ.js";
import {
  RBush
} from "./chunk-SQVMHEBV.js";
import "./chunk-WCMIUO4X.js";
import {
  getSquaredTolerance,
  renderFeature
} from "./chunk-W2437R7T.js";
import {
  Circle_default,
  Fill_default,
  Icon_default,
  Stroke_default,
  Style_default,
  Text_default
} from "./chunk-WL5X6JVJ.js";
import {
  checkedFonts,
  registerFont
} from "./chunk-OJPRZ5YB.js";
import {
  BaseTile_default,
  TileLayer_default,
  TileProperty_default,
  Tile_default as Tile_default2
} from "./chunk-DYUNGP2M.js";
import {
  EventType_default as EventType_default2,
  Event_default as Event_default2,
  Layer_default,
  Layer_default2,
  Polygon_default,
  Property_default,
  ViewHint_default,
  getInteriorPointOfArray,
  getInteriorPointsOfMultiArray,
  inflateEnds,
  linearRingss,
  linearRingssAreOriented,
  orientLinearRingsArray
} from "./chunk-6ZURMBVA.js";
import {
  Point_default
} from "./chunk-2TMUTZK6.js";
import {
  asArray,
  fromString,
  isStringColor
} from "./chunk-JRWFCR3R.js";
import {
  TileGrid_default,
  createXYZ,
  expandUrl
} from "./chunk-2T4BANHD.js";
import {
  LRUCache_default,
  createOrUpdate as createOrUpdate2,
  getKey
} from "./chunk-4HUDH2X5.js";
import {
  Source_default
} from "./chunk-PKGI5USR.js";
import {
  Tile_default
} from "./chunk-OF5H6CRM.js";
import {
  ImageTile_default,
  TileRange_default,
  TileState_default
} from "./chunk-3C6LSC5V.js";
import "./chunk-ED3LVK3A.js";
import "./chunk-LPX5UMAH.js";
import {
  toSize
} from "./chunk-CVLUVQGU.js";
import {
  ImageState_default,
  createCanvasContext2D
} from "./chunk-7L63NS2R.js";
import {
  Feature_default
} from "./chunk-D45UB37M.js";
import {
  LineString_default,
  interpolatePoint
} from "./chunk-SAVLA52U.js";
import "./chunk-5QXGCLBM.js";
import {
  assignClosestMultiArrayPoint,
  inflateCoordinates,
  inflateMultiCoordinatesArray,
  multiArrayMaxSquaredDelta,
  quantizeMultiArray
} from "./chunk-ENSXDPMZ.js";
import {
  deflateCoordinate,
  deflateCoordinates,
  deflateMultiCoordinatesArray
} from "./chunk-MSTFIB3N.js";
import {
  Geometry_default,
  SimpleGeometry_default,
  apply,
  compose,
  create,
  makeInverse,
  multiply,
  reset,
  rotate,
  rotate2,
  scale,
  transform2D,
  translate,
  translate2
} from "./chunk-LUOILEKQ.js";
import {
  intersectsLinearRingMultiArray,
  linearRingssContainsXY
} from "./chunk-XIKHSCTS.js";
import {
  SAFARI_BUG_237906
} from "./chunk-WZHGFLG3.js";
import {
  METERS_PER_UNIT,
  Projection_default,
  equivalent,
  fromLonLat,
  fromUserExtent,
  get,
  getUserProjection,
  wrapX
} from "./chunk-5HKLM7RS.js";
import {
  clamp,
  squaredDistance
} from "./chunk-MRQCEQD2.js";
import {
  abstract,
  getUid
} from "./chunk-CVB4T47V.js";
import {
  Disposable_default,
  EventType_default,
  Event_default,
  Target_default,
  ascending,
  equals,
  extend,
  listen,
  unlistenByKey
} from "./chunk-M7GNM6RX.js";
import {
  clear,
  isEmpty
} from "./chunk-SDN6AWWT.js";
import {
  boundingExtent,
  buffer,
  closestSquaredDistanceXY,
  containsCoordinate,
  containsExtent,
  containsXY,
  createEmpty,
  createOrUpdate,
  createOrUpdateEmpty,
  createOrUpdateFromCoordinate,
  createOrUpdateFromFlatCoordinates,
  equals as equals2,
  extend as extend2,
  forEachCorner,
  getCenter,
  getHeight,
  getIntersection,
  getTopLeft,
  getWidth,
  intersects,
  isEmpty as isEmpty2,
  scaleFromCenter
} from "./chunk-SVEQH656.js";
import {
  assert
} from "./chunk-EJMS2UXH.js";
import {
  __commonJS,
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js
var require_earcut = __commonJS({
  "node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js"(exports, module) {
    "use strict";
    module.exports = earcut2;
    module.exports.default = earcut2;
    function earcut2(data, holeIndices, dim) {
      dim = dim || 2;
      var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
      if (!outerNode || outerNode.next === outerNode.prev)
        return triangles;
      var minX, minY, maxX, maxY, x, y, invSize;
      if (hasHoles)
        outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX)
            minX = x;
          if (y < minY)
            minY = y;
          if (x > maxX)
            maxX = x;
          if (y > maxY)
            maxY = y;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
      return triangles;
    }
    function linkedList(data, start, end, dim, clockwise) {
      var i, last;
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim)
          last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim)
          last = insertNode(i, data[i], data[i + 1], last);
      }
      if (last && equals3(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
      return last;
    }
    function filterPoints(start, end) {
      if (!start)
        return start;
      if (!end)
        end = start;
      var p = start, again;
      do {
        again = false;
        if (!p.steiner && (equals3(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next)
            break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    }
    function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear)
        return;
      if (!pass && invSize)
        indexCurve(ear, minX, minY, invSize);
      var stop = ear, prev, next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          triangles.push(prev.i / dim | 0);
          triangles.push(ear.i / dim | 0);
          triangles.push(next.i / dim | 0);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
          break;
        }
      }
    }
    function isEar(ear) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var p = c.next;
      while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.next;
      }
      return true;
    }
    function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
      var p = ear.prevZ, n = ear.nextZ;
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
      }
      while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      return true;
    }
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev, b = p.next.next;
        if (!equals3(a, b) && intersects2(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim | 0);
          triangles.push(p.i / dim | 0);
          triangles.push(b.i / dim | 0);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return filterPoints(p);
    }
    function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            var c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
            earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [], i, len, start, end, list;
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next)
          list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort(compareX);
      for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
      }
      return outerNode;
    }
    function compareX(a, b) {
      return a.x - b.x;
    }
    function eliminateHole(hole, outerNode) {
      var bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
        return outerNode;
      }
      var bridgeReverse = splitPolygon(bridge, hole);
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
    }
    function findHoleBridge(hole, outerNode) {
      var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            m = p.x < p.next.x ? p : p.next;
            if (x === hx)
              return m;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m)
        return null;
      var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan;
      p = m;
      do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
          tan = Math.abs(hy - p.y) / (hx - p.x);
          if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
            m = p;
            tanMin = tan;
          }
        }
        p = p.next;
      } while (p !== stop);
      return m;
    }
    function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
    }
    function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
        if (p.z === 0)
          p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p);
    }
    function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q)
              break;
          }
          qSize = inSize;
          while (pSize > 0 || qSize > 0 && q) {
            if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail)
              tail.nextZ = e;
            else
              list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    }
    function zOrder(x, y, minX, minY, invSize) {
      x = (x - minX) * invSize | 0;
      y = (y - minY) * invSize | 0;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    }
    function getLeftmost(start) {
      var p = start, leftmost = start;
      do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
          leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    }
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
    }
    function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
      (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
      (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
      equals3(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
    }
    function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
    function equals3(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
    function intersects2(p1, q1, p2, q2) {
      var o1 = sign(area(p1, q1, p2));
      var o2 = sign(area(p1, q1, q2));
      var o3 = sign(area(p2, q2, p1));
      var o4 = sign(area(p2, q2, q1));
      if (o1 !== o2 && o3 !== o4)
        return true;
      if (o1 === 0 && onSegment(p1, p2, q1))
        return true;
      if (o2 === 0 && onSegment(p1, q2, q1))
        return true;
      if (o3 === 0 && onSegment(p2, p1, q2))
        return true;
      if (o4 === 0 && onSegment(p2, q1, q2))
        return true;
      return false;
    }
    function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
    }
    function sign(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
    }
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects2(p, p.next, a, b))
          return true;
        p = p.next;
      } while (p !== a);
      return false;
    }
    function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }
    function middleInside(a, b) {
      var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
      do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
          inside = !inside;
        p = p.next;
      } while (p !== a);
      return inside;
    }
    function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    }
    function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ)
        p.prevZ.nextZ = p.nextZ;
      if (p.nextZ)
        p.nextZ.prevZ = p.prevZ;
    }
    function Node(i, x, y) {
      this.i = i;
      this.x = x;
      this.y = y;
      this.prev = null;
      this.next = null;
      this.z = 0;
      this.prevZ = null;
      this.nextZ = null;
      this.steiner = false;
    }
    earcut2.deviation = function(data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
      }
      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1])
        );
      }
      return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };
    function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum;
    }
    earcut2.flatten = function(data) {
      var dim = data[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++)
            result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
        }
      }
      return result;
    };
  }
});

// node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer2, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer2[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer2[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/.pnpm/pbf@3.2.1/node_modules/pbf/index.js
var require_pbf = __commonJS({
  "node_modules/.pnpm/pbf@3.2.1/node_modules/pbf/index.js"(exports, module) {
    "use strict";
    module.exports = Pbf;
    var ieee754 = require_ieee754();
    function Pbf(buf) {
      this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
      this.pos = 0;
      this.type = 0;
      this.length = this.buf.length;
    }
    Pbf.Varint = 0;
    Pbf.Fixed64 = 1;
    Pbf.Bytes = 2;
    Pbf.Fixed32 = 5;
    var SHIFT_LEFT_32 = (1 << 16) * (1 << 16);
    var SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;
    var TEXT_DECODER_MIN_LENGTH = 12;
    var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf8");
    Pbf.prototype = {
      destroy: function() {
        this.buf = null;
      },
      // === READING =================================================================
      readFields: function(readField, result, end) {
        end = end || this.length;
        while (this.pos < end) {
          var val = this.readVarint(), tag = val >> 3, startPos = this.pos;
          this.type = val & 7;
          readField(tag, result, this);
          if (this.pos === startPos)
            this.skip(val);
        }
        return result;
      },
      readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
      },
      readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
      },
      readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
      },
      // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)
      readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
      },
      readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
      },
      readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
      },
      readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
      },
      readVarint: function(isSigned) {
        var buf = this.buf, val, b;
        b = buf[this.pos++];
        val = b & 127;
        if (b < 128)
          return val;
        b = buf[this.pos++];
        val |= (b & 127) << 7;
        if (b < 128)
          return val;
        b = buf[this.pos++];
        val |= (b & 127) << 14;
        if (b < 128)
          return val;
        b = buf[this.pos++];
        val |= (b & 127) << 21;
        if (b < 128)
          return val;
        b = buf[this.pos];
        val |= (b & 15) << 28;
        return readVarintRemainder(val, isSigned, this);
      },
      readVarint64: function() {
        return this.readVarint(true);
      },
      readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2;
      },
      readBoolean: function() {
        return Boolean(this.readVarint());
      },
      readString: function() {
        var end = this.readVarint() + this.pos;
        var pos = this.pos;
        this.pos = end;
        if (end - pos >= TEXT_DECODER_MIN_LENGTH && utf8TextDecoder) {
          return readUtf8TextDecoder(this.buf, pos, end);
        }
        return readUtf8(this.buf, pos, end);
      },
      readBytes: function() {
        var end = this.readVarint() + this.pos, buffer2 = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer2;
      },
      // verbose for performance reasons; doesn't affect gzipped size
      readPackedVarint: function(arr, isSigned) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readVarint(isSigned));
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readVarint(isSigned));
        return arr;
      },
      readPackedSVarint: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readSVarint());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readSVarint());
        return arr;
      },
      readPackedBoolean: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readBoolean());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readBoolean());
        return arr;
      },
      readPackedFloat: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readFloat());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readFloat());
        return arr;
      },
      readPackedDouble: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readDouble());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readDouble());
        return arr;
      },
      readPackedFixed32: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readFixed32());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readFixed32());
        return arr;
      },
      readPackedSFixed32: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readSFixed32());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readSFixed32());
        return arr;
      },
      readPackedFixed64: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readFixed64());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readFixed64());
        return arr;
      },
      readPackedSFixed64: function(arr) {
        if (this.type !== Pbf.Bytes)
          return arr.push(this.readSFixed64());
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end)
          arr.push(this.readSFixed64());
        return arr;
      },
      skip: function(val) {
        var type = val & 7;
        if (type === Pbf.Varint)
          while (this.buf[this.pos++] > 127) {
          }
        else if (type === Pbf.Bytes)
          this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32)
          this.pos += 4;
        else if (type === Pbf.Fixed64)
          this.pos += 8;
        else
          throw new Error("Unimplemented type: " + type);
      },
      // === WRITING =================================================================
      writeTag: function(tag, type) {
        this.writeVarint(tag << 3 | type);
      },
      realloc: function(min) {
        var length = this.length || 16;
        while (length < this.pos + min)
          length *= 2;
        if (length !== this.length) {
          var buf = new Uint8Array(length);
          buf.set(this.buf);
          this.buf = buf;
          this.length = length;
        }
      },
      finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
      },
      writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
      },
      writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
      },
      writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
      },
      writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
      },
      writeVarint: function(val) {
        val = +val || 0;
        if (val > 268435455 || val < 0) {
          writeBigVarint(val, this);
          return;
        }
        this.realloc(4);
        this.buf[this.pos++] = val & 127 | (val > 127 ? 128 : 0);
        if (val <= 127)
          return;
        this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
        if (val <= 127)
          return;
        this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
        if (val <= 127)
          return;
        this.buf[this.pos++] = val >>> 7 & 127;
      },
      writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
      },
      writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
      },
      writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);
        this.pos++;
        var startPos = this.pos;
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;
        if (len >= 128)
          makeRoomForExtraLength(startPos, len, this);
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
      },
      writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
      },
      writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
      },
      writeBytes: function(buffer2) {
        var len = buffer2.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++)
          this.buf[this.pos++] = buffer2[i];
      },
      writeRawMessage: function(fn, obj) {
        this.pos++;
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;
        if (len >= 128)
          makeRoomForExtraLength(startPos, len, this);
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
      },
      writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
      },
      writePackedVarint: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedVarint, arr);
      },
      writePackedSVarint: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedSVarint, arr);
      },
      writePackedBoolean: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedBoolean, arr);
      },
      writePackedFloat: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedFloat, arr);
      },
      writePackedDouble: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedDouble, arr);
      },
      writePackedFixed32: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedFixed32, arr);
      },
      writePackedSFixed32: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedSFixed32, arr);
      },
      writePackedFixed64: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedFixed64, arr);
      },
      writePackedSFixed64: function(tag, arr) {
        if (arr.length)
          this.writeMessage(tag, writePackedSFixed64, arr);
      },
      writeBytesField: function(tag, buffer2) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer2);
      },
      writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
      },
      writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
      },
      writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
      },
      writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
      },
      writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
      },
      writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
      },
      writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
      },
      writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
      },
      writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
      },
      writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
      }
    };
    function readVarintRemainder(l, s, p) {
      var buf = p.buf, h, b;
      b = buf[p.pos++];
      h = (b & 112) >> 4;
      if (b < 128)
        return toNum(l, h, s);
      b = buf[p.pos++];
      h |= (b & 127) << 3;
      if (b < 128)
        return toNum(l, h, s);
      b = buf[p.pos++];
      h |= (b & 127) << 10;
      if (b < 128)
        return toNum(l, h, s);
      b = buf[p.pos++];
      h |= (b & 127) << 17;
      if (b < 128)
        return toNum(l, h, s);
      b = buf[p.pos++];
      h |= (b & 127) << 24;
      if (b < 128)
        return toNum(l, h, s);
      b = buf[p.pos++];
      h |= (b & 1) << 31;
      if (b < 128)
        return toNum(l, h, s);
      throw new Error("Expected varint not more than 10 bytes");
    }
    function readPackedEnd(pbf) {
      return pbf.type === Pbf.Bytes ? pbf.readVarint() + pbf.pos : pbf.pos + 1;
    }
    function toNum(low, high, isSigned) {
      if (isSigned) {
        return high * 4294967296 + (low >>> 0);
      }
      return (high >>> 0) * 4294967296 + (low >>> 0);
    }
    function writeBigVarint(val, pbf) {
      var low, high;
      if (val >= 0) {
        low = val % 4294967296 | 0;
        high = val / 4294967296 | 0;
      } else {
        low = ~(-val % 4294967296);
        high = ~(-val / 4294967296);
        if (low ^ 4294967295) {
          low = low + 1 | 0;
        } else {
          low = 0;
          high = high + 1 | 0;
        }
      }
      if (val >= 18446744073709552e3 || val < -18446744073709552e3) {
        throw new Error("Given varint doesn't fit into 10 bytes");
      }
      pbf.realloc(10);
      writeBigVarintLow(low, high, pbf);
      writeBigVarintHigh(high, pbf);
    }
    function writeBigVarintLow(low, high, pbf) {
      pbf.buf[pbf.pos++] = low & 127 | 128;
      low >>>= 7;
      pbf.buf[pbf.pos++] = low & 127 | 128;
      low >>>= 7;
      pbf.buf[pbf.pos++] = low & 127 | 128;
      low >>>= 7;
      pbf.buf[pbf.pos++] = low & 127 | 128;
      low >>>= 7;
      pbf.buf[pbf.pos] = low & 127;
    }
    function writeBigVarintHigh(high, pbf) {
      var lsb = (high & 7) << 4;
      pbf.buf[pbf.pos++] |= lsb | ((high >>>= 3) ? 128 : 0);
      if (!high)
        return;
      pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
      if (!high)
        return;
      pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
      if (!high)
        return;
      pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
      if (!high)
        return;
      pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
      if (!high)
        return;
      pbf.buf[pbf.pos++] = high & 127;
    }
    function makeRoomForExtraLength(startPos, len, pbf) {
      var extraLen = len <= 16383 ? 1 : len <= 2097151 ? 2 : len <= 268435455 ? 3 : Math.floor(Math.log(len) / (Math.LN2 * 7));
      pbf.realloc(extraLen);
      for (var i = pbf.pos - 1; i >= startPos; i--)
        pbf.buf[i + extraLen] = pbf.buf[i];
    }
    function writePackedVarint(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeVarint(arr[i]);
    }
    function writePackedSVarint(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeSVarint(arr[i]);
    }
    function writePackedFloat(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeFloat(arr[i]);
    }
    function writePackedDouble(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeDouble(arr[i]);
    }
    function writePackedBoolean(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeBoolean(arr[i]);
    }
    function writePackedFixed32(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeFixed32(arr[i]);
    }
    function writePackedSFixed32(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeSFixed32(arr[i]);
    }
    function writePackedFixed64(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeFixed64(arr[i]);
    }
    function writePackedSFixed64(arr, pbf) {
      for (var i = 0; i < arr.length; i++)
        pbf.writeSFixed64(arr[i]);
    }
    function readUInt32(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + buf[pos + 3] * 16777216;
    }
    function writeInt32(buf, val, pos) {
      buf[pos] = val;
      buf[pos + 1] = val >>> 8;
      buf[pos + 2] = val >>> 16;
      buf[pos + 3] = val >>> 24;
    }
    function readInt32(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + (buf[pos + 3] << 24);
    }
    function readUtf8(buf, pos, end) {
      var str = "";
      var i = pos;
      while (i < end) {
        var b0 = buf[i];
        var c = null;
        var bytesPerSequence = b0 > 239 ? 4 : b0 > 223 ? 3 : b0 > 191 ? 2 : 1;
        if (i + bytesPerSequence > end)
          break;
        var b1, b2, b3;
        if (bytesPerSequence === 1) {
          if (b0 < 128) {
            c = b0;
          }
        } else if (bytesPerSequence === 2) {
          b1 = buf[i + 1];
          if ((b1 & 192) === 128) {
            c = (b0 & 31) << 6 | b1 & 63;
            if (c <= 127) {
              c = null;
            }
          }
        } else if (bytesPerSequence === 3) {
          b1 = buf[i + 1];
          b2 = buf[i + 2];
          if ((b1 & 192) === 128 && (b2 & 192) === 128) {
            c = (b0 & 15) << 12 | (b1 & 63) << 6 | b2 & 63;
            if (c <= 2047 || c >= 55296 && c <= 57343) {
              c = null;
            }
          }
        } else if (bytesPerSequence === 4) {
          b1 = buf[i + 1];
          b2 = buf[i + 2];
          b3 = buf[i + 3];
          if ((b1 & 192) === 128 && (b2 & 192) === 128 && (b3 & 192) === 128) {
            c = (b0 & 15) << 18 | (b1 & 63) << 12 | (b2 & 63) << 6 | b3 & 63;
            if (c <= 65535 || c >= 1114112) {
              c = null;
            }
          }
        }
        if (c === null) {
          c = 65533;
          bytesPerSequence = 1;
        } else if (c > 65535) {
          c -= 65536;
          str += String.fromCharCode(c >>> 10 & 1023 | 55296);
          c = 56320 | c & 1023;
        }
        str += String.fromCharCode(c);
        i += bytesPerSequence;
      }
      return str;
    }
    function readUtf8TextDecoder(buf, pos, end) {
      return utf8TextDecoder.decode(buf.subarray(pos, end));
    }
    function writeUtf8(buf, str, pos) {
      for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i);
        if (c > 55295 && c < 57344) {
          if (lead) {
            if (c < 56320) {
              buf[pos++] = 239;
              buf[pos++] = 191;
              buf[pos++] = 189;
              lead = c;
              continue;
            } else {
              c = lead - 55296 << 10 | c - 56320 | 65536;
              lead = null;
            }
          } else {
            if (c > 56319 || i + 1 === str.length) {
              buf[pos++] = 239;
              buf[pos++] = 191;
              buf[pos++] = 189;
            } else {
              lead = c;
            }
            continue;
          }
        } else if (lead) {
          buf[pos++] = 239;
          buf[pos++] = 191;
          buf[pos++] = 189;
          lead = null;
        }
        if (c < 128) {
          buf[pos++] = c;
        } else {
          if (c < 2048) {
            buf[pos++] = c >> 6 | 192;
          } else {
            if (c < 65536) {
              buf[pos++] = c >> 12 | 224;
            } else {
              buf[pos++] = c >> 18 | 240;
              buf[pos++] = c >> 12 & 63 | 128;
            }
            buf[pos++] = c >> 6 & 63 | 128;
          }
          buf[pos++] = c & 63 | 128;
        }
      }
      return pos;
    }
  }
});

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl.js
var ARRAY_BUFFER = 34962;
var ELEMENT_ARRAY_BUFFER = 34963;
var STREAM_DRAW = 35040;
var STATIC_DRAW = 35044;
var DYNAMIC_DRAW = 35048;
var UNSIGNED_BYTE = 5121;
var UNSIGNED_SHORT = 5123;
var UNSIGNED_INT = 5125;
var FLOAT = 5126;
var CONTEXT_IDS = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function getContext(canvas, attributes) {
  attributes = Object.assign(
    {
      preserveDrawingBuffer: true,
      antialias: SAFARI_BUG_237906 ? false : true
      // https://bugs.webkit.org/show_bug.cgi?id=237906
    },
    attributes
  );
  const ii = CONTEXT_IDS.length;
  for (let i = 0; i < ii; ++i) {
    try {
      const context = canvas.getContext(CONTEXT_IDS[i], attributes);
      if (context) {
        return (
          /** @type {!WebGLRenderingContext} */
          context
        );
      }
    } catch (e) {
    }
  }
  return null;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/Buffer.js
var BufferUsage = {
  STATIC_DRAW,
  STREAM_DRAW,
  DYNAMIC_DRAW
};
var WebGLArrayBuffer = class {
  /**
   * @param {number} type Buffer type, either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
   * @param {number} [usage] Intended usage, either `STATIC_DRAW`, `STREAM_DRAW` or `DYNAMIC_DRAW`.
   * Default is `DYNAMIC_DRAW`.
   */
  constructor(type, usage) {
    this.array = null;
    this.type = type;
    assert(type === ARRAY_BUFFER || type === ELEMENT_ARRAY_BUFFER, 62);
    this.usage = usage !== void 0 ? usage : BufferUsage.STATIC_DRAW;
  }
  /**
   * Populates the buffer with an array of the given size (all values will be zeroes).
   * @param {number} size Array size
   */
  ofSize(size) {
    this.array = new (getArrayClassForType(this.type))(size);
  }
  /**
   * Populates the buffer with an array of the given size.
   * @param {Array<number>} array Numerical array
   */
  fromArray(array2) {
    this.array = getArrayClassForType(this.type).from(array2);
  }
  /**
   * Populates the buffer with a raw binary array buffer.
   * @param {ArrayBuffer} buffer Raw binary buffer to populate the array with. Note that this buffer must have been
   * initialized for the same typed array class.
   */
  fromArrayBuffer(buffer2) {
    this.array = new (getArrayClassForType(this.type))(buffer2);
  }
  /**
   * @return {number} Buffer type.
   */
  getType() {
    return this.type;
  }
  /**
   * Will return null if the buffer was not initialized
   * @return {Float32Array|Uint32Array} Array.
   */
  getArray() {
    return this.array;
  }
  /**
   * @return {number} Usage.
   */
  getUsage() {
    return this.usage;
  }
  /**
   * Will return 0 if the buffer is not initialized
   * @return {number} Array size
   */
  getSize() {
    return this.array ? this.array.length : 0;
  }
};
function getArrayClassForType(type) {
  switch (type) {
    case ARRAY_BUFFER:
      return Float32Array;
    case ELEMENT_ARRAY_BUFFER:
      return Uint32Array;
    default:
      return Float32Array;
  }
}
var Buffer_default = WebGLArrayBuffer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/ContextEventType.js
var ContextEventType_default = {
  LOST: "webglcontextlost",
  RESTORED: "webglcontextrestored"
};

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/PostProcessingPass.js
var DEFAULT_VERTEX_SHADER = `
  precision mediump float;
  
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  varying vec2 v_screenCoord;
  
  uniform vec2 u_screenSize;
   
  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    v_screenCoord = v_texCoord * u_screenSize;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;
var DEFAULT_FRAGMENT_SHADER = `
  precision mediump float;
   
  uniform sampler2D u_image;
  uniform float u_opacity;
   
  varying vec2 v_texCoord;
   
  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;
  }
`;
var WebGLPostProcessingPass = class {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    this.gl_ = options.webGlContext;
    const gl = this.gl_;
    this.scaleRatio_ = options.scaleRatio || 1;
    this.renderTargetTexture_ = gl.createTexture();
    this.renderTargetTextureSize_ = null;
    this.frameBuffer_ = gl.createFramebuffer();
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(
      vertexShader,
      options.vertexShader || DEFAULT_VERTEX_SHADER
    );
    gl.compileShader(vertexShader);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(
      fragmentShader,
      options.fragmentShader || DEFAULT_FRAGMENT_SHADER
    );
    gl.compileShader(fragmentShader);
    this.renderTargetProgram_ = gl.createProgram();
    gl.attachShader(this.renderTargetProgram_, vertexShader);
    gl.attachShader(this.renderTargetProgram_, fragmentShader);
    gl.linkProgram(this.renderTargetProgram_);
    this.renderTargetVerticesBuffer_ = gl.createBuffer();
    const verticesArray = [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1];
    gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(verticesArray),
      gl.STATIC_DRAW
    );
    this.renderTargetAttribLocation_ = gl.getAttribLocation(
      this.renderTargetProgram_,
      "a_position"
    );
    this.renderTargetUniformLocation_ = gl.getUniformLocation(
      this.renderTargetProgram_,
      "u_screenSize"
    );
    this.renderTargetOpacityLocation_ = gl.getUniformLocation(
      this.renderTargetProgram_,
      "u_opacity"
    );
    this.renderTargetTextureLocation_ = gl.getUniformLocation(
      this.renderTargetProgram_,
      "u_image"
    );
    this.uniforms_ = [];
    options.uniforms && Object.keys(options.uniforms).forEach((name) => {
      this.uniforms_.push({
        value: options.uniforms[name],
        location: gl.getUniformLocation(this.renderTargetProgram_, name)
      });
    });
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   * @api
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Initialize the render target texture of the post process, make sure it is at the
   * right size and bind it as a render target for the next draw calls.
   * The last step to be initialized will be the one where the primitives are rendered.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @api
   */
  init(frameState) {
    const gl = this.getGL();
    const textureSize = [
      gl.drawingBufferWidth * this.scaleRatio_,
      gl.drawingBufferHeight * this.scaleRatio_
    ];
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
    gl.viewport(0, 0, textureSize[0], textureSize[1]);
    if (!this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== textureSize[0] || this.renderTargetTextureSize_[1] !== textureSize[1]) {
      this.renderTargetTextureSize_ = textureSize;
      const level = 0;
      const internalFormat = gl.RGBA;
      const border = 0;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;
      const data = null;
      gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        textureSize[0],
        textureSize[1],
        border,
        format,
        type,
        data
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        this.renderTargetTexture_,
        0
      );
    }
  }
  /**
   * Render to the next postprocessing pass (or to the canvas if final pass).
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {WebGLPostProcessingPass} [nextPass] Next pass, optional
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   * @api
   */
  apply(frameState, nextPass, preCompose, postCompose) {
    const gl = this.getGL();
    const size = frameState.size;
    gl.bindFramebuffer(
      gl.FRAMEBUFFER,
      nextPass ? nextPass.getFrameBuffer() : null
    );
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
    if (!nextPass) {
      const canvasId = getUid(gl.canvas);
      if (!frameState.renderTargets[canvasId]) {
        const attributes = gl.getContextAttributes();
        if (attributes && attributes.preserveDrawingBuffer) {
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        frameState.renderTargets[canvasId] = true;
      }
    }
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
    gl.useProgram(this.renderTargetProgram_);
    gl.enableVertexAttribArray(this.renderTargetAttribLocation_);
    gl.vertexAttribPointer(
      this.renderTargetAttribLocation_,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );
    gl.uniform2f(this.renderTargetUniformLocation_, size[0], size[1]);
    gl.uniform1i(this.renderTargetTextureLocation_, 0);
    const opacity = frameState.layerStatesArray[frameState.layerIndex].opacity;
    gl.uniform1f(this.renderTargetOpacityLocation_, opacity);
    this.applyUniforms(frameState);
    if (preCompose) {
      preCompose(gl, frameState);
    }
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (postCompose) {
      postCompose(gl, frameState);
    }
  }
  /**
   * @return {WebGLFramebuffer} Frame buffer
   * @api
   */
  getFrameBuffer() {
    return this.frameBuffer_;
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @private
   */
  applyUniforms(frameState) {
    const gl = this.getGL();
    let value;
    let textureSlot = 1;
    this.uniforms_.forEach(function(uniform) {
      value = typeof uniform.value === "function" ? uniform.value(frameState) : uniform.value;
      if (value instanceof HTMLCanvasElement || value instanceof ImageData) {
        if (!uniform.texture) {
          uniform.texture = gl.createTexture();
        }
        gl.activeTexture(gl[`TEXTURE${textureSlot}`]);
        gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (value instanceof ImageData) {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            value.width,
            value.height,
            0,
            gl.UNSIGNED_BYTE,
            new Uint8Array(value.data)
          );
        } else {
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            value
          );
        }
        gl.uniform1i(uniform.location, textureSlot++);
      } else if (Array.isArray(value)) {
        switch (value.length) {
          case 2:
            gl.uniform2f(uniform.location, value[0], value[1]);
            return;
          case 3:
            gl.uniform3f(uniform.location, value[0], value[1], value[2]);
            return;
          case 4:
            gl.uniform4f(
              uniform.location,
              value[0],
              value[1],
              value[2],
              value[3]
            );
            return;
          default:
            return;
        }
      } else if (typeof value === "number") {
        gl.uniform1f(uniform.location, value);
      }
    });
  }
};
var PostProcessingPass_default = WebGLPostProcessingPass;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/vec/mat4.js
function create2() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function fromTransform(mat4, transform) {
  mat4[0] = transform[0];
  mat4[1] = transform[1];
  mat4[4] = transform[2];
  mat4[5] = transform[3];
  mat4[12] = transform[4];
  mat4[13] = transform[5];
  return mat4;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/Helper.js
var DefaultUniform = {
  PROJECTION_MATRIX: "u_projectionMatrix",
  OFFSET_SCALE_MATRIX: "u_offsetScaleMatrix",
  OFFSET_ROTATION_MATRIX: "u_offsetRotateMatrix",
  TIME: "u_time",
  ZOOM: "u_zoom",
  RESOLUTION: "u_resolution",
  SIZE_PX: "u_sizePx",
  PIXEL_RATIO: "u_pixelRatio"
};
var AttributeType = {
  UNSIGNED_BYTE,
  UNSIGNED_SHORT,
  UNSIGNED_INT,
  FLOAT
};
var canvasCache = {};
function getSharedCanvasCacheKey(key) {
  return "shared/" + key;
}
var uniqueCanvasCacheKeyCount = 0;
function getUniqueCanvasCacheKey() {
  const key = "unique/" + uniqueCanvasCacheKeyCount;
  uniqueCanvasCacheKeyCount += 1;
  return key;
}
function getCanvas(key) {
  let cacheItem = canvasCache[key];
  if (!cacheItem) {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    cacheItem = { users: 0, canvas };
    canvasCache[key] = cacheItem;
  }
  cacheItem.users += 1;
  return cacheItem.canvas;
}
function releaseCanvas(key) {
  const cacheItem = canvasCache[key];
  if (!cacheItem) {
    return;
  }
  cacheItem.users -= 1;
  if (cacheItem.users > 0) {
    return;
  }
  const canvas = cacheItem.canvas;
  const gl = getContext(canvas);
  const extension = gl.getExtension("WEBGL_lose_context");
  if (extension) {
    extension.loseContext();
  }
  delete canvasCache[key];
}
var WebGLHelper = class extends Disposable_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options || {};
    this.boundHandleWebGLContextLost_ = this.handleWebGLContextLost.bind(this);
    this.boundHandleWebGLContextRestored_ = this.handleWebGLContextRestored.bind(this);
    this.canvasCacheKey_ = options.canvasCacheKey ? getSharedCanvasCacheKey(options.canvasCacheKey) : getUniqueCanvasCacheKey();
    this.canvas_ = getCanvas(this.canvasCacheKey_);
    this.gl_ = getContext(this.canvas_);
    this.bufferCache_ = {};
    this.extensionCache_ = {};
    this.currentProgram_ = null;
    this.canvas_.addEventListener(
      ContextEventType_default.LOST,
      this.boundHandleWebGLContextLost_
    );
    this.canvas_.addEventListener(
      ContextEventType_default.RESTORED,
      this.boundHandleWebGLContextRestored_
    );
    this.offsetRotateMatrix_ = create();
    this.offsetScaleMatrix_ = create();
    this.tmpMat4_ = create2();
    this.uniformLocations_ = {};
    this.attribLocations_ = {};
    this.uniforms_ = [];
    if (options.uniforms) {
      this.setUniforms(options.uniforms);
    }
    const gl = this.getGL();
    this.postProcessPasses_ = options.postProcesses ? options.postProcesses.map(function(options2) {
      return new PostProcessingPass_default({
        webGlContext: gl,
        scaleRatio: options2.scaleRatio,
        vertexShader: options2.vertexShader,
        fragmentShader: options2.fragmentShader,
        uniforms: options2.uniforms
      });
    }) : [new PostProcessingPass_default({ webGlContext: gl })];
    this.shaderCompileErrors_ = null;
    this.startTime_ = Date.now();
  }
  /**
   * @param {Object<string, UniformValue>} uniforms Uniform definitions.
   */
  setUniforms(uniforms) {
    this.uniforms_ = [];
    for (const name in uniforms) {
      this.uniforms_.push({
        name,
        value: uniforms[name]
      });
    }
    this.uniformLocations_ = {};
  }
  /**
   * @param {string} canvasCacheKey The canvas cache key.
   * @return {boolean} The provided key matches the one this helper was constructed with.
   */
  canvasCacheKeyMatches(canvasCacheKey) {
    return this.canvasCacheKey_ === getSharedCanvasCacheKey(canvasCacheKey);
  }
  /**
   * Get a WebGL extension.  If the extension is not supported, null is returned.
   * Extensions are cached after they are enabled for the first time.
   * @param {string} name The extension name.
   * @return {Object|null} The extension or null if not supported.
   */
  getExtension(name) {
    if (name in this.extensionCache_) {
      return this.extensionCache_[name];
    }
    const extension = this.gl_.getExtension(name);
    this.extensionCache_[name] = extension;
    return extension;
  }
  /**
   * Just bind the buffer if it's in the cache. Otherwise create
   * the WebGL buffer, bind it, populate it, and add an entry to
   * the cache.
   * @param {import("./Buffer").default} buffer Buffer.
   */
  bindBuffer(buffer2) {
    const gl = this.getGL();
    const bufferKey = getUid(buffer2);
    let bufferCache = this.bufferCache_[bufferKey];
    if (!bufferCache) {
      const webGlBuffer = gl.createBuffer();
      bufferCache = {
        buffer: buffer2,
        webGlBuffer
      };
      this.bufferCache_[bufferKey] = bufferCache;
    }
    gl.bindBuffer(buffer2.getType(), bufferCache.webGlBuffer);
  }
  /**
   * Update the data contained in the buffer array; this is required for the
   * new data to be rendered
   * @param {import("./Buffer").default} buffer Buffer.
   */
  flushBufferData(buffer2) {
    const gl = this.getGL();
    this.bindBuffer(buffer2);
    gl.bufferData(buffer2.getType(), buffer2.getArray(), buffer2.getUsage());
  }
  /**
   * @param {import("./Buffer.js").default} buf Buffer.
   */
  deleteBuffer(buf) {
    const gl = this.getGL();
    const bufferKey = getUid(buf);
    const bufferCacheEntry = this.bufferCache_[bufferKey];
    if (bufferCacheEntry && !gl.isContextLost()) {
      gl.deleteBuffer(bufferCacheEntry.webGlBuffer);
    }
    delete this.bufferCache_[bufferKey];
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.canvas_.removeEventListener(
      ContextEventType_default.LOST,
      this.boundHandleWebGLContextLost_
    );
    this.canvas_.removeEventListener(
      ContextEventType_default.RESTORED,
      this.boundHandleWebGLContextRestored_
    );
    releaseCanvas(this.canvasCacheKey_);
    delete this.gl_;
    delete this.canvas_;
  }
  /**
   * Clear the buffer & set the viewport to draw.
   * Post process passes will be initialized here, the first one being bound as a render target for
   * subsequent draw calls.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   */
  prepareDraw(frameState, disableAlphaBlend) {
    const gl = this.getGL();
    const canvas = this.getCanvas();
    const size = frameState.size;
    const pixelRatio = frameState.pixelRatio;
    canvas.width = size[0] * pixelRatio;
    canvas.height = size[1] * pixelRatio;
    canvas.style.width = size[0] + "px";
    canvas.style.height = size[1] + "px";
    for (let i = this.postProcessPasses_.length - 1; i >= 0; i--) {
      this.postProcessPasses_[i].init(frameState);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
  }
  /**
   * Clear the render target & bind it for future draw operations.
   * This is similar to `prepareDraw`, only post processes will not be applied.
   * Note: the whole viewport will be drawn to the render target, regardless of its size.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {import("./RenderTarget.js").default} renderTarget Render target to draw to
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   */
  prepareDrawToRenderTarget(frameState, renderTarget, disableAlphaBlend) {
    const gl = this.getGL();
    const size = renderTarget.getSize();
    gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.getFramebuffer());
    gl.viewport(0, 0, size[0], size[1]);
    gl.bindTexture(gl.TEXTURE_2D, renderTarget.getTexture());
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
  }
  /**
   * Execute a draw call based on the currently bound program, texture, buffers, attributes.
   * @param {number} start Start index.
   * @param {number} end End index.
   */
  drawElements(start, end) {
    const gl = this.getGL();
    this.getExtension("OES_element_index_uint");
    const elementType = gl.UNSIGNED_INT;
    const elementSize = 4;
    const numItems = end - start;
    const offsetInBytes = start * elementSize;
    gl.drawElements(gl.TRIANGLES, numItems, elementType, offsetInBytes);
  }
  /**
   * Apply the successive post process passes which will eventually render to the actual canvas.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   */
  finalizeDraw(frameState, preCompose, postCompose) {
    for (let i = 0, ii = this.postProcessPasses_.length; i < ii; i++) {
      if (i === ii - 1) {
        this.postProcessPasses_[i].apply(
          frameState,
          null,
          preCompose,
          postCompose
        );
      } else {
        this.postProcessPasses_[i].apply(
          frameState,
          this.postProcessPasses_[i + 1]
        );
      }
    }
  }
  /**
   * @return {HTMLCanvasElement} Canvas.
   */
  getCanvas() {
    return this.canvas_;
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Sets the default matrix uniforms for a given frame state. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyFrameState(frameState) {
    const size = frameState.size;
    const rotation = frameState.viewState.rotation;
    const pixelRatio = frameState.pixelRatio;
    const offsetScaleMatrix = reset(this.offsetScaleMatrix_);
    scale(offsetScaleMatrix, 2 / size[0], 2 / size[1]);
    const offsetRotateMatrix = reset(this.offsetRotateMatrix_);
    if (rotation !== 0) {
      rotate(offsetRotateMatrix, -rotation);
    }
    this.setUniformMatrixValue(
      DefaultUniform.OFFSET_SCALE_MATRIX,
      fromTransform(this.tmpMat4_, offsetScaleMatrix)
    );
    this.setUniformMatrixValue(
      DefaultUniform.OFFSET_ROTATION_MATRIX,
      fromTransform(this.tmpMat4_, offsetRotateMatrix)
    );
    this.setUniformFloatValue(
      DefaultUniform.TIME,
      (Date.now() - this.startTime_) * 1e-3
    );
    this.setUniformFloatValue(DefaultUniform.ZOOM, frameState.viewState.zoom);
    this.setUniformFloatValue(
      DefaultUniform.RESOLUTION,
      frameState.viewState.resolution
    );
    this.setUniformFloatValue(DefaultUniform.PIXEL_RATIO, pixelRatio);
    this.setUniformFloatVec2(DefaultUniform.SIZE_PX, [size[0], size[1]]);
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyUniforms(frameState) {
    const gl = this.getGL();
    let value;
    let textureSlot = 0;
    this.uniforms_.forEach((uniform) => {
      value = typeof uniform.value === "function" ? uniform.value(frameState) : uniform.value;
      if (value instanceof HTMLCanvasElement || value instanceof HTMLImageElement || value instanceof ImageData) {
        if (!uniform.texture) {
          uniform.prevValue = void 0;
          uniform.texture = gl.createTexture();
        }
        gl.activeTexture(gl[`TEXTURE${textureSlot}`]);
        gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const imageReady = !(value instanceof HTMLImageElement) || /** @type {HTMLImageElement} */
        value.complete;
        if (imageReady && uniform.prevValue !== value) {
          uniform.prevValue = value;
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            value
          );
        }
        gl.uniform1i(this.getUniformLocation(uniform.name), textureSlot++);
      } else if (Array.isArray(value) && value.length === 6) {
        this.setUniformMatrixValue(
          uniform.name,
          fromTransform(this.tmpMat4_, value)
        );
      } else if (Array.isArray(value) && value.length <= 4) {
        switch (value.length) {
          case 2:
            gl.uniform2f(
              this.getUniformLocation(uniform.name),
              value[0],
              value[1]
            );
            return;
          case 3:
            gl.uniform3f(
              this.getUniformLocation(uniform.name),
              value[0],
              value[1],
              value[2]
            );
            return;
          case 4:
            gl.uniform4f(
              this.getUniformLocation(uniform.name),
              value[0],
              value[1],
              value[2],
              value[3]
            );
            return;
          default:
            return;
        }
      } else if (typeof value === "number") {
        gl.uniform1f(this.getUniformLocation(uniform.name), value);
      }
    });
  }
  /**
   * Set up a program for use. The program will be set as the current one. Then, the uniforms used
   * in the program will be set based on the current frame state and the helper configuration.
   * @param {WebGLProgram} program Program.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  useProgram(program, frameState) {
    const gl = this.getGL();
    gl.useProgram(program);
    this.currentProgram_ = program;
    this.uniformLocations_ = {};
    this.attribLocations_ = {};
    this.applyFrameState(frameState);
    this.applyUniforms(frameState);
  }
  /**
   * Will attempt to compile a vertex or fragment shader based on source
   * On error, the shader will be returned but
   * `gl.getShaderParameter(shader, gl.COMPILE_STATUS)` will return `true`
   * Use `gl.getShaderInfoLog(shader)` to have details
   * @param {string} source Shader source
   * @param {ShaderType} type VERTEX_SHADER or FRAGMENT_SHADER
   * @return {WebGLShader} Shader object
   */
  compileShader(source, type) {
    const gl = this.getGL();
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }
  /**
   * Create a program for a vertex and fragment shader.  Throws if shader compilation fails.
   * @param {string} fragmentShaderSource Fragment shader source.
   * @param {string} vertexShaderSource Vertex shader source.
   * @return {WebGLProgram} Program
   */
  getProgram(fragmentShaderSource, vertexShaderSource) {
    const gl = this.getGL();
    const fragmentShader = this.compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER
    );
    const vertexShader = this.compileShader(
      vertexShaderSource,
      gl.VERTEX_SHADER
    );
    const program = gl.createProgram();
    gl.attachShader(program, fragmentShader);
    gl.attachShader(program, vertexShader);
    gl.linkProgram(program);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      const message = `Fragment shader compilation failed: ${gl.getShaderInfoLog(
        fragmentShader
      )}`;
      throw new Error(message);
    }
    gl.deleteShader(fragmentShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      const message = `Vertex shader compilation failed: ${gl.getShaderInfoLog(
        vertexShader
      )}`;
      throw new Error(message);
    }
    gl.deleteShader(vertexShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const message = `GL program linking failed: ${gl.getShaderInfoLog(
        vertexShader
      )}`;
      throw new Error(message);
    }
    return program;
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Uniform name
   * @return {WebGLUniformLocation} uniformLocation
   */
  getUniformLocation(name) {
    if (this.uniformLocations_[name] === void 0) {
      this.uniformLocations_[name] = this.getGL().getUniformLocation(
        this.currentProgram_,
        name
      );
    }
    return this.uniformLocations_[name];
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Attribute name
   * @return {number} attribLocation
   */
  getAttributeLocation(name) {
    if (this.attribLocations_[name] === void 0) {
      this.attribLocations_[name] = this.getGL().getAttribLocation(
        this.currentProgram_,
        name
      );
    }
    return this.attribLocations_[name];
  }
  /**
   * Modifies the given transform to apply the rotation/translation/scaling of the given frame state.
   * The resulting transform can be used to convert world space coordinates to view coordinates.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../transform").Transform} transform Transform to update.
   * @return {import("../transform").Transform} The updated transform object.
   */
  makeProjectionTransform(frameState, transform) {
    const size = frameState.size;
    const rotation = frameState.viewState.rotation;
    const resolution = frameState.viewState.resolution;
    const center = frameState.viewState.center;
    reset(transform);
    compose(
      transform,
      0,
      0,
      2 / (resolution * size[0]),
      2 / (resolution * size[1]),
      -rotation,
      -center[0],
      -center[1]
    );
    return transform;
  }
  /**
   * Give a value for a standard float uniform
   * @param {string} uniform Uniform name
   * @param {number} value Value
   */
  setUniformFloatValue(uniform, value) {
    this.getGL().uniform1f(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a vec2 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec2(uniform, value) {
    this.getGL().uniform2fv(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a vec4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec4(uniform, value) {
    this.getGL().uniform4fv(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a standard matrix4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Matrix value
   */
  setUniformMatrixValue(uniform, value) {
    this.getGL().uniformMatrix4fv(
      this.getUniformLocation(uniform),
      false,
      value
    );
  }
  /**
   * Will set the currently bound buffer to an attribute of the shader program. Used by `#enableAttributes`
   * internally.
   * @param {string} attribName Attribute name
   * @param {number} size Number of components per attributes
   * @param {number} type UNSIGNED_INT, UNSIGNED_BYTE, UNSIGNED_SHORT or FLOAT
   * @param {number} stride Stride in bytes (0 means attribs are packed)
   * @param {number} offset Offset in bytes
   * @private
   */
  enableAttributeArray_(attribName, size, type, stride, offset) {
    const location2 = this.getAttributeLocation(attribName);
    if (location2 < 0) {
      return;
    }
    this.getGL().enableVertexAttribArray(location2);
    this.getGL().vertexAttribPointer(
      location2,
      size,
      type,
      false,
      stride,
      offset
    );
  }
  /**
   * Will enable the following attributes to be read from the currently bound buffer,
   * i.e. tell the GPU where to read the different attributes in the buffer. An error in the
   * size/type/order of attributes will most likely break the rendering and throw a WebGL exception.
   * @param {Array<AttributeDescription>} attributes Ordered list of attributes to read from the buffer
   */
  enableAttributes(attributes) {
    const stride = computeAttributesStride(attributes);
    let offset = 0;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      this.enableAttributeArray_(
        attr.name,
        attr.size,
        attr.type || FLOAT,
        stride,
        offset
      );
      offset += attr.size * getByteSizeFromType(attr.type);
    }
  }
  /**
   * WebGL context was lost
   * @private
   */
  handleWebGLContextLost() {
    clear(this.bufferCache_);
    this.currentProgram_ = null;
  }
  /**
   * WebGL context was restored
   * @private
   */
  handleWebGLContextRestored() {
  }
  /**
   * Will create or reuse a given webgl texture and apply the given size. If no image data
   * specified, the texture will be empty, otherwise image data will be used and the `size`
   * parameter will be ignored.
   * Note: wrap parameters are set to clamp to edge, min filter is set to linear.
   * @param {Array<number>} size Expected size of the texture
   * @param {ImageData|HTMLImageElement|HTMLCanvasElement} [data] Image data/object to bind to the texture
   * @param {WebGLTexture} [texture] Existing texture to reuse
   * @return {WebGLTexture} The generated texture
   */
  createTexture(size, data, texture) {
    const gl = this.getGL();
    texture = texture || gl.createTexture();
    const level = 0;
    const internalFormat = gl.RGBA;
    const border = 0;
    const format = gl.RGBA;
    const type = gl.UNSIGNED_BYTE;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    if (data) {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, format, type, data);
    } else {
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        size[0],
        size[1],
        border,
        format,
        type,
        null
      );
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }
};
function computeAttributesStride(attributes) {
  let stride = 0;
  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    stride += attr.size * getByteSizeFromType(attr.type);
  }
  return stride;
}
function getByteSizeFromType(type) {
  switch (type) {
    case AttributeType.UNSIGNED_BYTE:
      return Uint8Array.BYTES_PER_ELEMENT;
    case AttributeType.UNSIGNED_SHORT:
      return Uint16Array.BYTES_PER_ELEMENT;
    case AttributeType.UNSIGNED_INT:
      return Uint32Array.BYTES_PER_ELEMENT;
    case AttributeType.FLOAT:
    default:
      return Float32Array.BYTES_PER_ELEMENT;
  }
}
var Helper_default = WebGLHelper;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/webgl/Layer.js
var WebGLLayerRenderer = class extends Layer_default2 {
  /**
   * @param {LayerType} layer Layer.
   * @param {Options} [options] Options.
   */
  constructor(layer, options) {
    super(layer);
    options = options || {};
    this.inversePixelTransform_ = create();
    this.pixelContext_ = null;
    this.postProcesses_ = options.postProcesses;
    this.uniforms_ = options.uniforms;
    this.helper;
    layer.addChangeListener(Property_default.MAP, this.removeHelper.bind(this));
    this.dispatchPreComposeEvent = this.dispatchPreComposeEvent.bind(this);
    this.dispatchPostComposeEvent = this.dispatchPostComposeEvent.bind(this);
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPreComposeEvent(context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(EventType_default2.PRECOMPOSE)) {
      const event = new Event_default2(
        EventType_default2.PRECOMPOSE,
        void 0,
        frameState,
        context
      );
      layer.dispatchEvent(event);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPostComposeEvent(context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(EventType_default2.POSTCOMPOSE)) {
      const event = new Event_default2(
        EventType_default2.POSTCOMPOSE,
        void 0,
        frameState,
        context
      );
      layer.dispatchEvent(event);
    }
  }
  /**
   * Reset options (only handles uniforms).
   * @param {Options} options Options.
   */
  reset(options) {
    this.uniforms_ = options.uniforms;
    if (this.helper) {
      this.helper.setUniforms(this.uniforms_);
    }
  }
  /**
   * @protected
   */
  removeHelper() {
    if (this.helper) {
      this.helper.dispose();
      delete this.helper;
    }
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    if (this.getLayer().getRenderSource()) {
      let incrementGroup = true;
      let groupNumber = -1;
      let className;
      for (let i = 0, ii = frameState.layerStatesArray.length; i < ii; i++) {
        const layer = frameState.layerStatesArray[i].layer;
        const renderer = layer.getRenderer();
        if (!(renderer instanceof WebGLLayerRenderer)) {
          incrementGroup = true;
          continue;
        }
        const layerClassName = layer.getClassName();
        if (incrementGroup || layerClassName !== className) {
          groupNumber += 1;
          incrementGroup = false;
        }
        className = layerClassName;
        if (renderer === this) {
          break;
        }
      }
      const canvasCacheKey = "map/" + frameState.mapId + "/group/" + groupNumber;
      if (!this.helper || !this.helper.canvasCacheKeyMatches(canvasCacheKey)) {
        this.removeHelper();
        this.helper = new Helper_default({
          postProcesses: this.postProcesses_,
          uniforms: this.uniforms_,
          canvasCacheKey
        });
        if (className) {
          this.helper.getCanvas().className = className;
        }
        this.afterHelperCreated();
      }
    }
    return this.prepareFrameInternal(frameState);
  }
  /**
   * @protected
   */
  afterHelperCreated() {
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @protected
   */
  prepareFrameInternal(frameState) {
    return true;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.removeHelper();
    super.disposeInternal();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(type, context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(type)) {
      compose(
        this.inversePixelTransform_,
        0,
        0,
        frameState.pixelRatio,
        -frameState.pixelRatio,
        0,
        0,
        -frameState.size[1]
      );
      const event = new Event_default2(
        type,
        this.inversePixelTransform_,
        frameState,
        context
      );
      layer.dispatchEvent(event);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(context, frameState) {
    this.dispatchRenderEvent_(EventType_default2.PRERENDER, context, frameState);
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(context, frameState) {
    this.dispatchRenderEvent_(EventType_default2.POSTRENDER, context, frameState);
  }
};
var Layer_default3 = WebGLLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/RenderTarget.js
var tmpArray4 = new Uint8Array(4);
var WebGLRenderTarget = class {
  /**
   * @param {import("./Helper.js").default} helper WebGL helper; mandatory.
   * @param {Array<number>} [size] Expected size of the render target texture; note: this can be changed later on.
   */
  constructor(helper, size) {
    this.helper_ = helper;
    const gl = helper.getGL();
    this.texture_ = gl.createTexture();
    this.framebuffer_ = gl.createFramebuffer();
    this.size_ = size || [1, 1];
    this.data_ = new Uint8Array(0);
    this.dataCacheDirty_ = true;
    this.updateSize_();
  }
  /**
   * Changes the size of the render target texture. Note: will do nothing if the size
   * is already the same.
   * @param {Array<number>} size Expected size of the render target texture
   * @api
   */
  setSize(size) {
    if (equals(size, this.size_)) {
      return;
    }
    this.size_[0] = size[0];
    this.size_[1] = size[1];
    this.updateSize_();
  }
  /**
   * Returns the size of the render target texture
   * @return {Array<number>} Size of the render target texture
   * @api
   */
  getSize() {
    return this.size_;
  }
  /**
   * This will cause following calls to `#readAll` or `#readPixel` to download the content of the
   * render target into memory, which is an expensive operation.
   * This content will be kept in cache but should be cleared after each new render.
   * @api
   */
  clearCachedData() {
    this.dataCacheDirty_ = true;
  }
  /**
   * Returns the full content of the frame buffer as a series of r, g, b, a components
   * in the 0-255 range (unsigned byte).
   * @return {Uint8Array} Integer array of color values
   * @api
   */
  readAll() {
    if (this.dataCacheDirty_) {
      const size = this.size_;
      const gl = this.helper_.getGL();
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
      gl.readPixels(
        0,
        0,
        size[0],
        size[1],
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.data_
      );
      this.dataCacheDirty_ = false;
    }
    return this.data_;
  }
  /**
   * Reads one pixel of the frame buffer as an array of r, g, b, a components
   * in the 0-255 range (unsigned byte).
   * If x and/or y are outside of existing data, an array filled with 0 is returned.
   * @param {number} x Pixel coordinate
   * @param {number} y Pixel coordinate
   * @return {Uint8Array} Integer array with one color value (4 components)
   * @api
   */
  readPixel(x, y) {
    if (x < 0 || y < 0 || x > this.size_[0] || y >= this.size_[1]) {
      tmpArray4[0] = 0;
      tmpArray4[1] = 0;
      tmpArray4[2] = 0;
      tmpArray4[3] = 0;
      return tmpArray4;
    }
    this.readAll();
    const index = Math.floor(x) + (this.size_[1] - Math.floor(y) - 1) * this.size_[0];
    tmpArray4[0] = this.data_[index * 4];
    tmpArray4[1] = this.data_[index * 4 + 1];
    tmpArray4[2] = this.data_[index * 4 + 2];
    tmpArray4[3] = this.data_[index * 4 + 3];
    return tmpArray4;
  }
  /**
   * @return {WebGLTexture} Texture to render to
   */
  getTexture() {
    return this.texture_;
  }
  /**
   * @return {WebGLFramebuffer} Frame buffer of the render target
   */
  getFramebuffer() {
    return this.framebuffer_;
  }
  /**
   * @private
   */
  updateSize_() {
    const size = this.size_;
    const gl = this.helper_.getGL();
    this.texture_ = this.helper_.createTexture(size, null, this.texture_);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
    gl.viewport(0, 0, size[0], size[1]);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      this.texture_,
      0
    );
    this.data_ = new Uint8Array(size[0] * size[1] * 4);
  }
};
var RenderTarget_default = WebGLRenderTarget;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/webgl/constants.js
var WebGLWorkerMessageType = {
  GENERATE_POLYGON_BUFFERS: "GENERATE_POLYGON_BUFFERS",
  GENERATE_POINT_BUFFERS: "GENERATE_POINT_BUFFERS",
  GENERATE_LINE_STRING_BUFFERS: "GENERATE_LINE_STRING_BUFFERS"
};

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/webgl/utils.js
var import_earcut = __toESM(require_earcut(), 1);
function colorEncodeId(id2, array2) {
  array2 = array2 || [];
  const radix = 256;
  const divide = radix - 1;
  array2[0] = Math.floor(id2 / radix / radix / radix) / divide;
  array2[1] = Math.floor(id2 / radix / radix) % radix / divide;
  array2[2] = Math.floor(id2 / radix) % radix / divide;
  array2[3] = id2 % radix / divide;
  return array2;
}
function colorDecodeId(color2) {
  let id2 = 0;
  const radix = 256;
  const mult = radix - 1;
  id2 += Math.round(color2[0] * radix * radix * radix * mult);
  id2 += Math.round(color2[1] * radix * radix * mult);
  id2 += Math.round(color2[2] * radix * mult);
  id2 += Math.round(color2[3] * mult);
  return id2;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/worker/webgl.js
function create3() {
  const source = 'const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS",r={1:"The view center is not defined",2:"The view resolution is not defined",3:"The view rotation is not defined",4:"`image` and `src` cannot be provided at the same time",5:"`imgSize` must be set when `image` is provided",7:"`format` must be set when `url` is set",8:"Unknown `serverType` configured",9:"`url` must be configured or set using `#setUrl()`",10:"The default `geometryFunction` can only handle `Point` geometries",11:"`options.featureTypes` must be an Array",12:"`options.geometryName` must also be provided when `options.bbox` is set",13:"Invalid corner",14:"Invalid color",15:"Tried to get a value for a key that does not exist in the cache",16:"Tried to set a value for a key that is used already",17:"`resolutions` must be sorted in descending order",18:"Either `origin` or `origins` must be configured, never both",19:"Number of `tileSizes` and `resolutions` must be equal",20:"Number of `origins` and `resolutions` must be equal",22:"Either `tileSize` or `tileSizes` must be configured, never both",24:"Invalid extent or geometry provided as `geometry`",25:"Cannot fit empty extent provided as `geometry`",26:"Features must have an id set",27:"Features must have an id set",28:\'`renderMode` must be `"hybrid"` or `"vector"`\',30:"The passed `feature` was already added to the source",31:"Tried to enqueue an `element` that was already added to the queue",32:"Transformation matrix cannot be inverted",33:"Invalid units",34:"Invalid geometry layout",36:"Unknown SRS type",37:"Unknown geometry type found",38:"`styleMapValue` has an unknown type",39:"Unknown geometry type",40:"Expected `feature` to have a geometry",41:"Expected an `ol/style/Style` or an array of `ol/style/Style.js`",42:"Question unknown, the answer is 42",43:"Expected `layers` to be an array or a `Collection`",47:"Expected `controls` to be an array or an `ol/Collection`",48:"Expected `interactions` to be an array or an `ol/Collection`",49:"Expected `overlays` to be an array or an `ol/Collection`",50:"`options.featureTypes` should be an Array",51:"Either `url` or `tileJSON` options must be provided",52:"Unknown `serverType` configured",53:"Unknown `tierSizeCalculation` configured",55:"The {-y} placeholder requires a tile grid with extent",56:"mapBrowserEvent must originate from a pointer event",57:"At least 2 conditions are required",59:"Invalid command found in the PBF",60:"Missing or invalid `size`",61:"Cannot determine IIIF Image API version from provided image information JSON",62:"A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",64:"Layer opacity must be a number",66:"`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",67:"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",68:"A VectorTile source can only be rendered if it has a projection compatible with the view projection",69:"`width` or `height` cannot be provided together with `scale`"};class o extends Error{constructor(e){const t=r[e];super(t),this.code=e,this.name="AssertionError",this.message=t}}var i=o;function a(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function s(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new i(t)}(0!==n,32);const o=t[0],a=t[1],s=t[2],u=t[3],f=t[4],x=t[5];return e[0]=u/n,e[1]=-a/n,e[2]=-s/n,e[3]=o/n,e[4]=(s*x-u*f)/n,e[5]=-(o*x-a*f)/n,e}new Array(6);var u={};function f(e,t,n){n=n||2;var r,o,i,a,s,u,f,l=t&&t.length,c=l?t[0]*n:e.length,v=x(e,0,c,n,!0),d=[];if(!v||v.next===v.prev)return d;if(l&&(v=function(e,t,n,r){var o,i,a,s=[];for(o=0,i=t.length;o<i;o++)(a=x(e,t[o]*r,o<i-1?t[o+1]*r:e.length,r,!1))===a.next&&(a.steiner=!0),s.push(w(a));for(s.sort(p),o=0;o<s.length;o++)n=b(s[o],n);return n}(e,t,v,n)),e.length>80*n){r=i=e[0],o=a=e[1];for(var y=n;y<c;y+=n)(s=e[y])<r&&(r=s),(u=e[y+1])<o&&(o=u),s>i&&(i=s),u>a&&(a=u);f=0!==(f=Math.max(i-r,a-o))?32767/f:0}return h(v,d,n,r,o,f,0),d}function x(e,t,n,r,o){var i,a;if(o===B(e,t,n,r)>0)for(i=t;i<n;i+=r)a=k(i,e[i],e[i+1],a);else for(i=n-r;i>=t;i-=r)a=k(i,e[i],e[i+1],a);return a&&M(a,a.next)&&(z(a),a=a.next),a}function l(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!M(r,r.next)&&0!==Z(r.prev,r,r.next))r=r.next;else{if(z(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function h(e,t,n,r,o,i,a){if(e){!a&&i&&function(e,t,n,r){var o=e;do{0===o.z&&(o.z=m(o.x,o.y,t,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,n,r,o,i,a,s,u,f=1;do{for(n=e,e=null,i=null,a=0;n;){for(a++,r=n,s=0,t=0;t<f&&(s++,r=r.nextZ);t++);for(u=f;s>0||u>0&&r;)0!==s&&(0===u||!r||n.z<=r.z)?(o=n,n=n.nextZ,s--):(o=r,r=r.nextZ,u--),i?i.nextZ=o:e=o,o.prevZ=i,i=o;n=r}i.nextZ=null,f*=2}while(a>1)}(o)}(e,r,o,i);for(var s,u,f=e;e.prev!==e.next;)if(s=e.prev,u=e.next,i?v(e,r,o,i):c(e))t.push(s.i/n|0),t.push(e.i/n|0),t.push(u.i/n|0),z(e),e=u.next,f=u.next;else if((e=u)===f){a?1===a?h(e=d(l(e),t,n),t,n,r,o,i,2):2===a&&y(e,t,n,r,o,i):h(l(e),t,n,r,o,i,1);break}}}function c(e){var t=e.prev,n=e,r=e.next;if(Z(t,n,r)>=0)return!1;for(var o=t.x,i=n.x,a=r.x,s=t.y,u=n.y,f=r.y,x=o<i?o<a?o:a:i<a?i:a,l=s<u?s<f?s:f:u<f?u:f,h=o>i?o>a?o:a:i>a?i:a,c=s>u?s>f?s:f:u>f?u:f,v=r.next;v!==t;){if(v.x>=x&&v.x<=h&&v.y>=l&&v.y<=c&&A(o,s,i,u,a,f,v.x,v.y)&&Z(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function v(e,t,n,r){var o=e.prev,i=e,a=e.next;if(Z(o,i,a)>=0)return!1;for(var s=o.x,u=i.x,f=a.x,x=o.y,l=i.y,h=a.y,c=s<u?s<f?s:f:u<f?u:f,v=x<l?x<h?x:h:l<h?l:h,d=s>u?s>f?s:f:u>f?u:f,y=x>l?x>h?x:h:l>h?l:h,p=m(c,v,t,n,r),b=m(d,y,t,n,r),g=e.prevZ,w=e.nextZ;g&&g.z>=p&&w&&w.z<=b;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&A(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,w.x>=c&&w.x<=d&&w.y>=v&&w.y<=y&&w!==o&&w!==a&&A(s,x,u,l,f,h,w.x,w.y)&&Z(w.prev,w,w.next)>=0)return!1;w=w.nextZ}for(;g&&g.z>=p;){if(g.x>=c&&g.x<=d&&g.y>=v&&g.y<=y&&g!==o&&g!==a&&A(s,x,u,l,f,h,g.x,g.y)&&Z(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;w&&w.z<=b;){if(w.x>=c&&w.x<=d&&w.y>=v&&w.y<=y&&w!==o&&w!==a&&A(s,x,u,l,f,h,w.x,w.y)&&Z(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function d(e,t,n){var r=e;do{var o=r.prev,i=r.next.next;!M(o,i)&&F(o,r,r.next,i)&&S(o,i)&&S(i,o)&&(t.push(o.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),z(r),z(r.next),r=e=i),r=r.next}while(r!==e);return l(r)}function y(e,t,n,r,o,i){var a=e;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&E(a,s)){var u=U(a,s);return a=l(a,a.next),u=l(u,u.next),h(a,t,n,r,o,i,0),void h(u,t,n,r,o,i,0)}s=s.next}a=a.next}while(a!==e)}function p(e,t){return e.x-t.x}function b(e,t){var n=function(e,t){var n,r=t,o=e.x,i=e.y,a=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var s=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=o&&s>a&&(a=s,n=r.x<r.next.x?r:r.next,s===o))return n}r=r.next}while(r!==t);if(!n)return null;var u,f=n,x=n.x,l=n.y,h=1/0;r=n;do{o>=r.x&&r.x>=x&&o!==r.x&&A(i<l?o:a,i,x,l,i<l?a:o,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(o-r.x),S(r,e)&&(u<h||u===h&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,h=u)),r=r.next}while(r!==f);return n}(e,t);if(!n)return t;var r=U(n,e);return l(r,r.next),l(n,n.next)}function g(e,t){return Z(e.prev,e,t.prev)<0&&Z(t.next,e,e.next)<0}function m(e,t,n,r,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function w(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function A(e,t,n,r,o,i,a,s){return(o-a)*(t-s)>=(e-a)*(i-s)&&(e-a)*(r-s)>=(n-a)*(t-s)&&(n-a)*(i-s)>=(o-a)*(r-s)}function E(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&F(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(S(e,t)&&S(t,e)&&function(e,t){var n=e,r=!1,o=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&o<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(Z(e.prev,e,t.prev)||Z(e,t.prev,t))||M(e,t)&&Z(e.prev,e,e.next)>0&&Z(t.prev,t,t.next)>0)}function Z(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function M(e,t){return e.x===t.x&&e.y===t.y}function F(e,t,n,r){var o=I(Z(e,t,n)),i=I(Z(e,t,r)),a=I(Z(n,r,e)),s=I(Z(n,r,t));return o!==i&&a!==s||(!(0!==o||!T(e,n,t))||(!(0!==i||!T(e,r,t))||(!(0!==a||!T(n,e,r))||!(0!==s||!T(n,t,r)))))}function T(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function I(e){return e>0?1:e<0?-1:0}function S(e,t){return Z(e.prev,e,e.next)<0?Z(e,t,e.next)>=0&&Z(e,e.prev,t)>=0:Z(e,t,e.prev)<0||Z(e,e.next,t)<0}function U(e,t){var n=new R(e.i,e.x,e.y),r=new R(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=o,o.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function k(e,t,n,r){var o=new R(e,t,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function z(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function R(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(e,t,n,r){for(var o=0,i=t,a=n-r;i<n;i+=r)o+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return o}({get exports(){return u},set exports(e){u=e}}).exports=f,u.default=f,f.deviation=function(e,t,n,r){var o=t&&t.length,i=o?t[0]*n:e.length,a=Math.abs(B(e,0,i,n));if(o)for(var s=0,u=t.length;s<u;s++){var f=t[s]*n,x=s<u-1?t[s+1]*n:e.length;a-=Math.abs(B(e,f,x,n))}var l=0;for(s=0;s<r.length;s+=3){var h=r[s]*n,c=r[s+1]*n,v=r[s+2]*n;l+=Math.abs((e[h]-e[v])*(e[c+1]-e[h+1])-(e[h]-e[c])*(e[v+1]-e[h+1]))}return 0===a&&0===l?0:Math.abs((l-a)/a)},f.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,o=0;o<e.length;o++){for(var i=0;i<e[o].length;i++)for(var a=0;a<t;a++)n.vertices.push(e[o][i][a]);o>0&&(r+=e[o-1].length,n.holes.push(r))}return n};const N=[],P={vertexPosition:0,indexPosition:0};function C(e,t,n,r,o){e[t+0]=n,e[t+1]=r,e[t+2]=o}function _(e,t,n,r,o,i){const a=3+o,s=e[t+0],u=e[t+1],f=N;f.length=o;for(let n=0;n<f.length;n++)f[n]=e[t+2+n];let x=i?i.vertexPosition:0,l=i?i.indexPosition:0;const h=x/a;return C(n,x,s,u,0),f.length&&n.set(f,x+3),x+=a,C(n,x,s,u,1),f.length&&n.set(f,x+3),x+=a,C(n,x,s,u,2),f.length&&n.set(f,x+3),x+=a,C(n,x,s,u,3),f.length&&n.set(f,x+3),x+=a,r[l++]=h,r[l++]=h+1,r[l++]=h+3,r[l++]=h+1,r[l++]=h+2,r[l++]=h+3,P.vertexPosition=x,P.indexPosition=l,P}function q(e,t,n,r,o,i,s,u,f,x){const l=5+u.length,h=i.length/l,c=[e[t+0],e[t+1]],v=[e[n],e[n+1]],d=a(x,[...c]),y=a(x,[...v]);function p(e,t,n){const r=1e4;return Math.round(1500*t)+Math.round(1500*n)*r+e*r*r}function b(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),o=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-o[1],o[0]],a=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),s=[(n[0]-e[0])/a,(n[1]-e[1])/a],u=0===r||0===a?0:Math.acos((f=s[0]*o[0]+s[1]*o[1],x=-1,l=1,Math.min(Math.max(f,x),l)));var f,x,l;return s[0]*i[0]+s[1]*i[1]>0?u:2*Math.PI-u}const g=null!==o;let m=0,w=0;if(null!==r){m=b(d,y,a(x,[...[e[r],e[r+1]]]))}if(g){w=b(y,d,a(x,[...[e[o],e[o+1]]]))}i.push(c[0],c[1],v[0],v[1],p(0,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(1,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(2,m,w)),i.push(...u),i.push(c[0],c[1],v[0],v[1],p(3,m,w)),i.push(...u),s.push(h,h+1,h+2,h+1,h+3,h+2)}function L(e,t,n,r,o){const i=2+o;let a=t;const s=e.slice(a,a+o);a+=o;const f=e[a++];let x=0;const l=new Array(f-1);for(let t=0;t<f;t++)x+=e[a++],t<f-1&&(l[t]=x);const h=e.slice(a,a+2*x),c=u(h,l,2);for(let e=0;e<c.length;e++)r.push(c[e]+n.length/i);for(let e=0;e<h.length;e+=2)n.push(h[e],h[e+1],...s);return a+2*x}const G=self;G.onmessage=r=>{const o=r.data;switch(o.type){case t:{const e=3,t=2,n=o.customAttributesCount,r=t+n,i=new Float32Array(o.renderInstructions),a=i.length/r,s=4*a*(n+e),u=new Uint32Array(6*a),f=new Float32Array(s);let x;for(let e=0;e<i.length;e+=r)x=_(i,e,f,u,n,x);const l=Object.assign({vertexBuffer:f.buffer,indexBuffer:u.buffer,renderInstructions:i.buffer},o);G.postMessage(l,[f.buffer,u.buffer,i.buffer]);break}case n:{const e=[],t=[],n=o.customAttributesCount,r=2,i=new Float32Array(o.renderInstructions);let a=0;const u=o.renderInstructionsTransform,f=[1,0,0,1,0,0];let x,l;for(s(f,u);a<i.length;){l=Array.from(i.slice(a,a+n)),a+=n,x=i[a++];for(let n=0;n<x-1;n++)q(i,a+n*r,a+(n+1)*r,n>0?a+(n-1)*r:null,n<x-2?a+(n+2)*r:null,e,t,l,0,f);a+=x*r}const h=Uint32Array.from(t),c=Float32Array.from(e),v=Object.assign({vertexBuffer:c.buffer,indexBuffer:h.buffer,renderInstructions:i.buffer},o);G.postMessage(v,[c.buffer,h.buffer,i.buffer]);break}case e:{const e=[],t=[],n=o.customAttributesCount,r=new Float32Array(o.renderInstructions);let i=0;for(;i<r.length;)i=L(r,i,e,t,n);const a=Uint32Array.from(t),s=Float32Array.from(e),u=Object.assign({vertexBuffer:s.buffer,indexBuffer:a.buffer,renderInstructions:r.buffer},o);G.postMessage(u,[s.buffer,a.buffer,r.buffer]);break}}};';
  return new Worker(typeof Blob === "undefined" ? "data:application/javascript;base64," + Buffer.from(source, "binary").toString("base64") : URL.createObjectURL(new Blob([source], { type: "application/javascript" })));
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/webgl/PointsLayer.js
var WebGLPointsLayerRenderer = class extends Layer_default3 {
  /**
   * @param {import("../../layer/Layer.js").default} layer Layer.
   * @param {Options} options Options.
   */
  constructor(layer, options) {
    const uniforms = options.uniforms || {};
    const projectionMatrixTransform = create();
    uniforms[DefaultUniform.PROJECTION_MATRIX] = projectionMatrixTransform;
    super(layer, {
      uniforms,
      postProcesses: options.postProcesses
    });
    this.ready = false;
    this.sourceRevision_ = -1;
    this.verticesBuffer_ = new Buffer_default(ARRAY_BUFFER, DYNAMIC_DRAW);
    this.hitVerticesBuffer_ = new Buffer_default(ARRAY_BUFFER, DYNAMIC_DRAW);
    this.indicesBuffer_ = new Buffer_default(
      ELEMENT_ARRAY_BUFFER,
      DYNAMIC_DRAW
    );
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.program_;
    this.hitDetectionEnabled_ = options.hitFragmentShader && options.hitVertexShader ? true : false;
    this.hitVertexShader_ = options.hitVertexShader;
    this.hitFragmentShader_ = options.hitFragmentShader;
    this.hitProgram_;
    const customAttributes = options.attributes ? options.attributes.map(function(attribute) {
      return {
        name: "a_" + attribute.name,
        size: 1,
        type: AttributeType.FLOAT
      };
    }) : [];
    this.attributes = [
      {
        name: "a_position",
        size: 2,
        type: AttributeType.FLOAT
      },
      {
        name: "a_index",
        size: 1,
        type: AttributeType.FLOAT
      }
    ].concat(customAttributes);
    this.hitDetectionAttributes = [
      {
        name: "a_position",
        size: 2,
        type: AttributeType.FLOAT
      },
      {
        name: "a_index",
        size: 1,
        type: AttributeType.FLOAT
      },
      {
        name: "a_hitColor",
        size: 4,
        type: AttributeType.FLOAT
      },
      {
        name: "a_featureUid",
        size: 1,
        type: AttributeType.FLOAT
      }
    ].concat(customAttributes);
    this.customAttributes = options.attributes ? options.attributes : [];
    this.previousExtent_ = createEmpty();
    this.currentTransform_ = projectionMatrixTransform;
    this.renderTransform_ = create();
    this.invertRenderTransform_ = create();
    this.renderInstructions_ = new Float32Array(0);
    this.hitRenderInstructions_ = new Float32Array(0);
    this.hitRenderTarget_;
    this.generateBuffersRun_ = 0;
    this.worker_ = create3();
    this.worker_.addEventListener(
      "message",
      /**
       * @param {*} event Event.
       */
      (event) => {
        const received = event.data;
        if (received.type === WebGLWorkerMessageType.GENERATE_POINT_BUFFERS) {
          const projectionTransform = received.projectionTransform;
          if (received.hitDetection) {
            this.hitVerticesBuffer_.fromArrayBuffer(received.vertexBuffer);
            this.helper.flushBufferData(this.hitVerticesBuffer_);
          } else {
            this.verticesBuffer_.fromArrayBuffer(received.vertexBuffer);
            this.helper.flushBufferData(this.verticesBuffer_);
          }
          this.indicesBuffer_.fromArrayBuffer(received.indexBuffer);
          this.helper.flushBufferData(this.indicesBuffer_);
          this.renderTransform_ = projectionTransform;
          makeInverse(
            this.invertRenderTransform_,
            this.renderTransform_
          );
          if (received.hitDetection) {
            this.hitRenderInstructions_ = new Float32Array(
              event.data.renderInstructions
            );
          } else {
            this.renderInstructions_ = new Float32Array(
              event.data.renderInstructions
            );
            if (received.generateBuffersRun === this.generateBuffersRun_) {
              this.ready = true;
            }
          }
          this.getLayer().changed();
        }
      }
    );
    this.featureCache_ = {};
    this.featureCount_ = 0;
    const source = this.getLayer().getSource();
    this.sourceListenKeys_ = [
      listen(
        source,
        VectorEventType_default.ADDFEATURE,
        this.handleSourceFeatureAdded_,
        this
      ),
      listen(
        source,
        VectorEventType_default.CHANGEFEATURE,
        this.handleSourceFeatureChanged_,
        this
      ),
      listen(
        source,
        VectorEventType_default.REMOVEFEATURE,
        this.handleSourceFeatureDelete_,
        this
      ),
      listen(
        source,
        VectorEventType_default.CLEAR,
        this.handleSourceFeatureClear_,
        this
      )
    ];
    source.forEachFeature((feature) => {
      this.featureCache_[getUid(feature)] = {
        feature,
        properties: feature.getProperties(),
        geometry: feature.getGeometry()
      };
      this.featureCount_++;
    });
  }
  afterHelperCreated() {
    this.program_ = this.helper.getProgram(
      this.fragmentShader_,
      this.vertexShader_
    );
    if (this.hitDetectionEnabled_) {
      this.hitProgram_ = this.helper.getProgram(
        this.hitFragmentShader_,
        this.hitVertexShader_
      );
      this.hitRenderTarget_ = new RenderTarget_default(this.helper);
    }
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureAdded_(event) {
    const feature = event.feature;
    this.featureCache_[getUid(feature)] = {
      feature,
      properties: feature.getProperties(),
      geometry: feature.getGeometry()
    };
    this.featureCount_++;
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureChanged_(event) {
    const feature = event.feature;
    this.featureCache_[getUid(feature)] = {
      feature,
      properties: feature.getProperties(),
      geometry: feature.getGeometry()
    };
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureDelete_(event) {
    const feature = event.feature;
    delete this.featureCache_[getUid(feature)];
    this.featureCount_--;
  }
  /**
   * @private
   */
  handleSourceFeatureClear_() {
    this.featureCache_ = {};
    this.featureCount_ = 0;
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(frameState) {
    const gl = this.helper.getGL();
    this.preRender(gl, frameState);
    const projection = frameState.viewState.projection;
    const layer = this.getLayer();
    const vectorSource = layer.getSource();
    const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
    const projectionExtent = projection.getExtent();
    const extent = frameState.extent;
    const worldWidth = multiWorld ? getWidth(projectionExtent) : null;
    const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
    const startWorld = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
    let world = startWorld;
    const renderCount = this.indicesBuffer_.getSize();
    do {
      this.helper.makeProjectionTransform(frameState, this.currentTransform_);
      translate(this.currentTransform_, world * worldWidth, 0);
      multiply(this.currentTransform_, this.invertRenderTransform_);
      this.helper.applyUniforms(frameState);
      this.helper.drawElements(0, renderCount);
    } while (++world < endWorld);
    this.helper.finalizeDraw(
      frameState,
      this.dispatchPreComposeEvent,
      this.dispatchPostComposeEvent
    );
    const canvas = this.helper.getCanvas();
    if (this.hitDetectionEnabled_) {
      this.renderHitDetection(frameState, startWorld, endWorld, worldWidth);
      this.hitRenderTarget_.clearCachedData();
    }
    this.postRender(gl, frameState);
    return canvas;
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrameInternal(frameState) {
    const layer = this.getLayer();
    const vectorSource = layer.getSource();
    const viewState = frameState.viewState;
    const viewNotMoving = !frameState.viewHints[ViewHint_default.ANIMATING] && !frameState.viewHints[ViewHint_default.INTERACTING];
    const extentChanged = !equals2(this.previousExtent_, frameState.extent);
    const sourceChanged = this.sourceRevision_ < vectorSource.getRevision();
    if (sourceChanged) {
      this.sourceRevision_ = vectorSource.getRevision();
    }
    if (viewNotMoving && (extentChanged || sourceChanged)) {
      const projection = viewState.projection;
      const resolution = viewState.resolution;
      const renderBuffer = layer instanceof BaseVector_default ? layer.getRenderBuffer() : 0;
      const extent = buffer(frameState.extent, renderBuffer * resolution);
      vectorSource.loadFeatures(extent, resolution, projection);
      this.rebuildBuffers_(frameState);
      this.previousExtent_ = frameState.extent.slice();
    }
    this.helper.useProgram(this.program_, frameState);
    this.helper.prepareDraw(frameState);
    this.helper.bindBuffer(this.verticesBuffer_);
    this.helper.bindBuffer(this.indicesBuffer_);
    this.helper.enableAttributes(this.attributes);
    return true;
  }
  /**
   * Rebuild internal webgl buffers based on current view extent; costly, should not be called too much
   * @param {import("../../Map").FrameState} frameState Frame state.
   * @private
   */
  rebuildBuffers_(frameState) {
    const projectionTransform = create();
    this.helper.makeProjectionTransform(frameState, projectionTransform);
    const totalInstructionsCount = (2 + this.customAttributes.length) * this.featureCount_;
    if (!this.renderInstructions_ || this.renderInstructions_.length !== totalInstructionsCount) {
      this.renderInstructions_ = new Float32Array(totalInstructionsCount);
    }
    if (this.hitDetectionEnabled_) {
      const totalHitInstructionsCount = (7 + this.customAttributes.length) * this.featureCount_;
      if (!this.hitRenderInstructions_ || this.hitRenderInstructions_.length !== totalHitInstructionsCount) {
        this.hitRenderInstructions_ = new Float32Array(
          totalHitInstructionsCount
        );
      }
    }
    let featureCache, geometry2;
    const tmpCoords = [];
    const tmpColor = [];
    let renderIndex = 0;
    let hitIndex = 0;
    let hitColor;
    for (const featureUid in this.featureCache_) {
      featureCache = this.featureCache_[featureUid];
      geometry2 = /** @type {import("../../geom").Point} */
      featureCache.geometry;
      if (!geometry2 || geometry2.getType() !== "Point") {
        continue;
      }
      tmpCoords[0] = geometry2.getFlatCoordinates()[0];
      tmpCoords[1] = geometry2.getFlatCoordinates()[1];
      apply(projectionTransform, tmpCoords);
      hitColor = colorEncodeId(hitIndex + 6, tmpColor);
      this.renderInstructions_[renderIndex++] = tmpCoords[0];
      this.renderInstructions_[renderIndex++] = tmpCoords[1];
      if (this.hitDetectionEnabled_) {
        this.hitRenderInstructions_[hitIndex++] = tmpCoords[0];
        this.hitRenderInstructions_[hitIndex++] = tmpCoords[1];
        this.hitRenderInstructions_[hitIndex++] = hitColor[0];
        this.hitRenderInstructions_[hitIndex++] = hitColor[1];
        this.hitRenderInstructions_[hitIndex++] = hitColor[2];
        this.hitRenderInstructions_[hitIndex++] = hitColor[3];
        this.hitRenderInstructions_[hitIndex++] = Number(featureUid);
      }
      let value;
      for (let j = 0; j < this.customAttributes.length; j++) {
        value = this.customAttributes[j].callback(
          featureCache.feature,
          featureCache.properties
        );
        this.renderInstructions_[renderIndex++] = value;
        if (this.hitDetectionEnabled_) {
          this.hitRenderInstructions_[hitIndex++] = value;
        }
      }
    }
    const message = {
      id: 0,
      type: WebGLWorkerMessageType.GENERATE_POINT_BUFFERS,
      renderInstructions: this.renderInstructions_.buffer,
      customAttributesCount: this.customAttributes.length
    };
    message["projectionTransform"] = projectionTransform;
    message["generateBuffersRun"] = ++this.generateBuffersRun_;
    this.ready = false;
    this.worker_.postMessage(message, [this.renderInstructions_.buffer]);
    this.renderInstructions_ = null;
    if (this.hitDetectionEnabled_) {
      const hitMessage = {
        id: 0,
        type: WebGLWorkerMessageType.GENERATE_POINT_BUFFERS,
        renderInstructions: this.hitRenderInstructions_.buffer,
        customAttributesCount: 5 + this.customAttributes.length
      };
      hitMessage["projectionTransform"] = projectionTransform;
      hitMessage["hitDetection"] = true;
      this.worker_.postMessage(hitMessage, [
        this.hitRenderInstructions_.buffer
      ]);
      this.hitRenderInstructions_ = null;
    }
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
    assert(this.hitDetectionEnabled_, 66);
    if (!this.hitRenderInstructions_) {
      return void 0;
    }
    const pixel = apply(
      frameState.coordinateToPixelTransform,
      coordinate.slice()
    );
    const data = this.hitRenderTarget_.readPixel(pixel[0] / 2, pixel[1] / 2);
    const color2 = [data[0] / 255, data[1] / 255, data[2] / 255, data[3] / 255];
    const index = colorDecodeId(color2);
    const opacity = this.hitRenderInstructions_[index];
    const uid = Math.floor(opacity).toString();
    const source = this.getLayer().getSource();
    const feature = source.getFeatureByUid(uid);
    if (feature) {
      return callback(feature, this.getLayer(), null);
    }
    return void 0;
  }
  /**
   * Render the hit detection data to the corresponding render target
   * @param {import("../../Map.js").FrameState} frameState current frame state
   * @param {number} startWorld the world to render in the first iteration
   * @param {number} endWorld the last world to render
   * @param {number} worldWidth the width of the worlds being rendered
   */
  renderHitDetection(frameState, startWorld, endWorld, worldWidth) {
    if (!this.hitVerticesBuffer_.getSize()) {
      return;
    }
    let world = startWorld;
    this.hitRenderTarget_.setSize([
      Math.floor(frameState.size[0] / 2),
      Math.floor(frameState.size[1] / 2)
    ]);
    this.helper.useProgram(this.hitProgram_, frameState);
    this.helper.prepareDrawToRenderTarget(
      frameState,
      this.hitRenderTarget_,
      true
    );
    this.helper.bindBuffer(this.hitVerticesBuffer_);
    this.helper.bindBuffer(this.indicesBuffer_);
    this.helper.enableAttributes(this.hitDetectionAttributes);
    do {
      this.helper.makeProjectionTransform(frameState, this.currentTransform_);
      translate(this.currentTransform_, world * worldWidth, 0);
      multiply(this.currentTransform_, this.invertRenderTransform_);
      this.helper.applyUniforms(frameState);
      const renderCount = this.indicesBuffer_.getSize();
      this.helper.drawElements(0, renderCount);
    } while (++world < endWorld);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.worker_.terminate();
    this.layer_ = null;
    this.sourceListenKeys_.forEach(function(key) {
      unlistenByKey(key);
    });
    this.sourceListenKeys_ = null;
    super.disposeInternal();
  }
};
var PointsLayer_default = WebGLPointsLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/Heatmap.js
var Property = {
  BLUR: "blur",
  GRADIENT: "gradient",
  RADIUS: "radius"
};
var DEFAULT_GRADIENT = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
var Heatmap = class extends BaseVector_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.gradient;
    delete baseOptions.radius;
    delete baseOptions.blur;
    delete baseOptions.weight;
    super(baseOptions);
    this.gradient_ = null;
    this.addChangeListener(Property.GRADIENT, this.handleGradientChanged_);
    this.setGradient(options.gradient ? options.gradient : DEFAULT_GRADIENT);
    this.setBlur(options.blur !== void 0 ? options.blur : 15);
    this.setRadius(options.radius !== void 0 ? options.radius : 8);
    const weight = options.weight ? options.weight : "weight";
    if (typeof weight === "string") {
      this.weightFunction_ = function(feature) {
        return feature.get(weight);
      };
    } else {
      this.weightFunction_ = weight;
    }
    this.setRenderOrder(null);
  }
  /**
   * Return the blur size in pixels.
   * @return {number} Blur size in pixels.
   * @api
   * @observable
   */
  getBlur() {
    return (
      /** @type {number} */
      this.get(Property.BLUR)
    );
  }
  /**
   * Return the gradient colors as array of strings.
   * @return {Array<string>} Colors.
   * @api
   * @observable
   */
  getGradient() {
    return (
      /** @type {Array<string>} */
      this.get(Property.GRADIENT)
    );
  }
  /**
   * Return the size of the radius in pixels.
   * @return {number} Radius size in pixel.
   * @api
   * @observable
   */
  getRadius() {
    return (
      /** @type {number} */
      this.get(Property.RADIUS)
    );
  }
  /**
   * @private
   */
  handleGradientChanged_() {
    this.gradient_ = createGradient(this.getGradient());
  }
  /**
   * Set the blur size in pixels.
   * @param {number} blur Blur size in pixels.
   * @api
   * @observable
   */
  setBlur(blur) {
    this.set(Property.BLUR, blur);
  }
  /**
   * Set the gradient colors as array of strings.
   * @param {Array<string>} colors Gradient.
   * @api
   * @observable
   */
  setGradient(colors) {
    this.set(Property.GRADIENT, colors);
  }
  /**
   * Set the size of the radius in pixels.
   * @param {number} radius Radius size in pixel.
   * @api
   * @observable
   */
  setRadius(radius) {
    this.set(Property.RADIUS, radius);
  }
  createRenderer() {
    return new PointsLayer_default(this, {
      className: this.getClassName(),
      attributes: [
        {
          name: "weight",
          callback: (feature) => {
            const weight = this.weightFunction_(feature);
            return weight !== void 0 ? clamp(weight, 0, 1) : 1;
          }
        }
      ],
      vertexShader: `
        precision mediump float;
        uniform mat4 u_projectionMatrix;
        uniform mat4 u_offsetScaleMatrix;
        uniform float u_size;
        attribute vec2 a_position;
        attribute float a_index;
        attribute float a_weight;

        varying vec2 v_texCoord;
        varying float v_weight;

        void main(void) {
          mat4 offsetMatrix = u_offsetScaleMatrix;
          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;
          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;
          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);
          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;
          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;
          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;
          v_texCoord = vec2(u, v);
          v_weight = a_weight;
        }`,
      fragmentShader: `
        precision mediump float;
        uniform float u_blurSlope;

        varying vec2 v_texCoord;
        varying float v_weight;

        void main(void) {
          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);
          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;
          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;
          float alpha = smoothstep(0.0, 1.0, value) * v_weight;
          gl_FragColor = vec4(alpha, alpha, alpha, alpha);
        }`,
      hitVertexShader: `
        precision mediump float;
        uniform mat4 u_projectionMatrix;
        uniform mat4 u_offsetScaleMatrix;
        uniform float u_size;
        attribute vec2 a_position;
        attribute float a_index;
        attribute float a_weight;
        attribute vec4 a_hitColor;

        varying vec2 v_texCoord;
        varying float v_weight;
        varying vec4 v_hitColor;

        void main(void) {
          mat4 offsetMatrix = u_offsetScaleMatrix;
          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;
          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;
          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);
          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;
          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;
          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;
          v_texCoord = vec2(u, v);
          v_hitColor = a_hitColor;
          v_weight = a_weight;
        }`,
      hitFragmentShader: `
        precision mediump float;
        uniform float u_blurSlope;

        varying vec2 v_texCoord;
        varying float v_weight;
        varying vec4 v_hitColor;

        void main(void) {
          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);
          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;
          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;
          float alpha = smoothstep(0.0, 1.0, value) * v_weight;
          if (alpha < 0.05) {
            discard;
          }

          gl_FragColor = v_hitColor;
        }`,
      uniforms: {
        u_size: () => {
          return (this.get(Property.RADIUS) + this.get(Property.BLUR)) * 2;
        },
        u_blurSlope: () => {
          return this.get(Property.RADIUS) / Math.max(1, this.get(Property.BLUR));
        }
      },
      postProcesses: [
        {
          fragmentShader: `
            precision mediump float;

            uniform sampler2D u_image;
            uniform sampler2D u_gradientTexture;
            uniform float u_opacity;

            varying vec2 v_texCoord;

            void main() {
              vec4 color = texture2D(u_image, v_texCoord);
              gl_FragColor.a = color.a * u_opacity;
              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;
              gl_FragColor.rgb *= gl_FragColor.a;
            }`,
          uniforms: {
            u_gradientTexture: () => {
              return this.gradient_;
            },
            u_opacity: () => {
              return this.getOpacity();
            }
          }
        }
      ]
    });
  }
  renderDeclutter() {
  }
};
function createGradient(colors) {
  const width = 1;
  const height = 256;
  const context = createCanvasContext2D(width, height);
  const gradient = context.createLinearGradient(0, 0, width, height);
  const step = 1 / (colors.length - 1);
  for (let i = 0, ii = colors.length; i < ii; ++i) {
    gradient.addColorStop(i * step, colors[i]);
  }
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  return context.canvas;
}
var Heatmap_default = Heatmap;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/format/Feature.js
var FeatureFormat = class {
  constructor() {
    this.dataProjection = void 0;
    this.defaultFeatureProjection = void 0;
    this.supportedMediaTypes = null;
  }
  /**
   * Adds the data projection to the read options.
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Options.
   * @return {ReadOptions|undefined} Options.
   * @protected
   */
  getReadOptions(source, options) {
    if (options) {
      let dataProjection = options.dataProjection ? get(options.dataProjection) : this.readProjection(source);
      if (options.extent && dataProjection && dataProjection.getUnits() === "tile-pixels") {
        dataProjection = get(dataProjection);
        dataProjection.setWorldExtent(options.extent);
      }
      options = {
        dataProjection,
        featureProjection: options.featureProjection
      };
    }
    return this.adaptOptions(options);
  }
  /**
   * Sets the `dataProjection` on the options, if no `dataProjection`
   * is set.
   * @param {WriteOptions|ReadOptions|undefined} options
   *     Options.
   * @protected
   * @return {WriteOptions|ReadOptions|undefined}
   *     Updated options.
   */
  adaptOptions(options) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection
      },
      options
    );
  }
  /**
   * @abstract
   * @return {Type} The format type.
   */
  getType() {
    return abstract();
  }
  /**
   * Read a single feature from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {import("../Feature.js").FeatureLike} Feature.
   */
  readFeature(source, options) {
    return abstract();
  }
  /**
   * Read all features from a source.
   *
   * @abstract
   * @param {Document|Element|ArrayBuffer|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {Array<import("../Feature.js").FeatureLike>} Features.
   */
  readFeatures(source, options) {
    return abstract();
  }
  /**
   * Read a single geometry from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @param {ReadOptions} [options] Read options.
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  readGeometry(source, options) {
    return abstract();
  }
  /**
   * Read the projection from a source.
   *
   * @abstract
   * @param {Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default|undefined} Projection.
   */
  readProjection(source) {
    return abstract();
  }
  /**
   * Encode a feature in this format.
   *
   * @abstract
   * @param {import("../Feature.js").default} feature Feature.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeFeature(feature, options) {
    return abstract();
  }
  /**
   * Encode an array of features in this format.
   *
   * @abstract
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeFeatures(features, options) {
    return abstract();
  }
  /**
   * Write a single geometry in this format.
   *
   * @abstract
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {WriteOptions} [options] Write options.
   * @return {string|ArrayBuffer} Result.
   */
  writeGeometry(geometry2, options) {
    return abstract();
  }
};
var Feature_default2 = FeatureFormat;
function transformGeometryWithOptions(geometry2, write, options) {
  const featureProjection = options ? get(options.featureProjection) : null;
  const dataProjection = options ? get(options.dataProjection) : null;
  let transformed;
  if (featureProjection && dataProjection && !equivalent(featureProjection, dataProjection)) {
    transformed = (write ? geometry2.clone() : geometry2).transform(
      write ? featureProjection : dataProjection,
      write ? dataProjection : featureProjection
    );
  } else {
    transformed = geometry2;
  }
  if (write && options && /** @type {WriteOptions} */
  options.decimals !== void 0) {
    const power = Math.pow(
      10,
      /** @type {WriteOptions} */
      options.decimals
    );
    const transform = function(coordinates) {
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = Math.round(coordinates[i] * power) / power;
      }
      return coordinates;
    };
    if (transformed === geometry2) {
      transformed = geometry2.clone();
    }
    transformed.applyTransform(transform);
  }
  return transformed;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/MultiPoint.js
var MultiPoint = class extends SimpleGeometry_default {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(coordinates, layout) {
    super();
    if (layout && !Array.isArray(coordinates[0])) {
      this.setFlatCoordinates(
        layout,
        /** @type {Array<number>} */
        coordinates
      );
    } else {
      this.setCoordinates(
        /** @type {Array<import("../coordinate.js").Coordinate>} */
        coordinates,
        layout
      );
    }
  }
  /**
   * Append the passed point to this multipoint.
   * @param {Point} point Point.
   * @api
   */
  appendPoint(point) {
    if (!this.flatCoordinates) {
      this.flatCoordinates = point.getFlatCoordinates().slice();
    } else {
      extend(this.flatCoordinates, point.getFlatCoordinates());
    }
    this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */
  clone() {
    const multiPoint = new MultiPoint(
      this.flatCoordinates.slice(),
      this.layout
    );
    multiPoint.applyProperties(this);
    return multiPoint;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }
    const flatCoordinates = this.flatCoordinates;
    const stride = this.stride;
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      const squaredDistance2 = squaredDistance(
        x,
        y,
        flatCoordinates[i],
        flatCoordinates[i + 1]
      );
      if (squaredDistance2 < minSquaredDistance) {
        minSquaredDistance = squaredDistance2;
        for (let j = 0; j < stride; ++j) {
          closestPoint[j] = flatCoordinates[i + j];
        }
        closestPoint.length = stride;
      }
    }
    return minSquaredDistance;
  }
  /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return inflateCoordinates(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the point at the specified index.
   * @param {number} index Index.
   * @return {Point} Point.
   * @api
   */
  getPoint(index) {
    const n = !this.flatCoordinates ? 0 : this.flatCoordinates.length / this.stride;
    if (index < 0 || n <= index) {
      return null;
    }
    return new Point_default(
      this.flatCoordinates.slice(
        index * this.stride,
        (index + 1) * this.stride
      ),
      this.layout
    );
  }
  /**
   * Return the points of this multipoint.
   * @return {Array<Point>} Points.
   * @api
   */
  getPoints() {
    const flatCoordinates = this.flatCoordinates;
    const layout = this.layout;
    const stride = this.stride;
    const points = [];
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      const point = new Point_default(flatCoordinates.slice(i, i + stride), layout);
      points.push(point);
    }
    return points;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "MultiPoint";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(extent) {
    const flatCoordinates = this.flatCoordinates;
    const stride = this.stride;
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      const x = flatCoordinates[i];
      const y = flatCoordinates[i + 1];
      if (containsXY(extent, x, y)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Set the coordinates of the multipoint.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(coordinates, layout) {
    this.setLayout(layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = deflateCoordinates(
      this.flatCoordinates,
      0,
      coordinates,
      this.stride
    );
    this.changed();
  }
};
var MultiPoint_default = MultiPoint;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/flat/center.js
function linearRingss2(flatCoordinates, offset, endss, stride) {
  const flatCenters = [];
  let extent = createEmpty();
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    extent = createOrUpdateFromFlatCoordinates(
      flatCoordinates,
      offset,
      ends[0],
      stride
    );
    flatCenters.push((extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2);
    offset = ends[ends.length - 1];
  }
  return flatCenters;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/MultiPolygon.js
var MultiPolygon = class extends SimpleGeometry_default {
  /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` and `endss` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<Array<number>>} [endss] Array of ends for internal use with flat coordinates.
   */
  constructor(coordinates, layout, endss) {
    super();
    this.endss_ = [];
    this.flatInteriorPointsRevision_ = -1;
    this.flatInteriorPoints_ = null;
    this.maxDelta_ = -1;
    this.maxDeltaRevision_ = -1;
    this.orientedRevision_ = -1;
    this.orientedFlatCoordinates_ = null;
    if (!endss && !Array.isArray(coordinates[0])) {
      let thisLayout = this.getLayout();
      const polygons = (
        /** @type {Array<Polygon>} */
        coordinates
      );
      const flatCoordinates = [];
      const thisEndss = [];
      for (let i = 0, ii = polygons.length; i < ii; ++i) {
        const polygon = polygons[i];
        if (i === 0) {
          thisLayout = polygon.getLayout();
        }
        const offset = flatCoordinates.length;
        const ends = polygon.getEnds();
        for (let j = 0, jj = ends.length; j < jj; ++j) {
          ends[j] += offset;
        }
        extend(flatCoordinates, polygon.getFlatCoordinates());
        thisEndss.push(ends);
      }
      layout = thisLayout;
      coordinates = flatCoordinates;
      endss = thisEndss;
    }
    if (layout !== void 0 && endss) {
      this.setFlatCoordinates(
        layout,
        /** @type {Array<number>} */
        coordinates
      );
      this.endss_ = endss;
    } else {
      this.setCoordinates(
        /** @type {Array<Array<Array<import("../coordinate.js").Coordinate>>>} */
        coordinates,
        layout
      );
    }
  }
  /**
   * Append the passed polygon to this multipolygon.
   * @param {Polygon} polygon Polygon.
   * @api
   */
  appendPolygon(polygon) {
    let ends;
    if (!this.flatCoordinates) {
      this.flatCoordinates = polygon.getFlatCoordinates().slice();
      ends = polygon.getEnds().slice();
      this.endss_.push();
    } else {
      const offset = this.flatCoordinates.length;
      extend(this.flatCoordinates, polygon.getFlatCoordinates());
      ends = polygon.getEnds().slice();
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        ends[i] += offset;
      }
    }
    this.endss_.push(ends);
    this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPolygon} Clone.
   * @api
   */
  clone() {
    const len = this.endss_.length;
    const newEndss = new Array(len);
    for (let i = 0; i < len; ++i) {
      newEndss[i] = this.endss_[i].slice();
    }
    const multiPolygon = new MultiPolygon(
      this.flatCoordinates.slice(),
      this.layout,
      newEndss
    );
    multiPolygon.applyProperties(this);
    return multiPolygon;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }
    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt(
        multiArrayMaxSquaredDelta(
          this.flatCoordinates,
          0,
          this.endss_,
          this.stride,
          0
        )
      );
      this.maxDeltaRevision_ = this.getRevision();
    }
    return assignClosestMultiArrayPoint(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      this.maxDelta_,
      true,
      x,
      y,
      closestPoint,
      minSquaredDistance
    );
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(x, y) {
    return linearRingssContainsXY(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      x,
      y
    );
  }
  /**
   * Return the area of the multipolygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return linearRingss(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for multi-polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
   * @api
   */
  getCoordinates(right) {
    let flatCoordinates;
    if (right !== void 0) {
      flatCoordinates = this.getOrientedFlatCoordinates().slice();
      orientLinearRingsArray(
        flatCoordinates,
        0,
        this.endss_,
        this.stride,
        right
      );
    } else {
      flatCoordinates = this.flatCoordinates;
    }
    return inflateMultiCoordinatesArray(
      flatCoordinates,
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * @return {Array<Array<number>>} Endss.
   */
  getEndss() {
    return this.endss_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const flatCenters = linearRingss2(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = getInteriorPointsOfMultiArray(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        flatCenters
      );
      this.flatInteriorPointsRevision_ = this.getRevision();
    }
    return this.flatInteriorPoints_;
  }
  /**
   * Return the interior points as {@link module:ol/geom/MultiPoint~MultiPoint multipoint}.
   * @return {MultiPoint} Interior points as XYM coordinates, where M is
   * the length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoints() {
    return new MultiPoint_default(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const flatCoordinates = this.flatCoordinates;
      if (linearRingssAreOriented(flatCoordinates, 0, this.endss_, this.stride)) {
        this.orientedFlatCoordinates_ = flatCoordinates;
      } else {
        this.orientedFlatCoordinates_ = flatCoordinates.slice();
        this.orientedFlatCoordinates_.length = orientLinearRingsArray(
          this.orientedFlatCoordinates_,
          0,
          this.endss_,
          this.stride
        );
      }
      this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiPolygon} Simplified MultiPolygon.
   * @protected
   */
  getSimplifiedGeometryInternal(squaredTolerance) {
    const simplifiedFlatCoordinates = [];
    const simplifiedEndss = [];
    simplifiedFlatCoordinates.length = quantizeMultiArray(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(squaredTolerance),
      simplifiedFlatCoordinates,
      0,
      simplifiedEndss
    );
    return new MultiPolygon(simplifiedFlatCoordinates, "XY", simplifiedEndss);
  }
  /**
   * Return the polygon at the specified index.
   * @param {number} index Index.
   * @return {Polygon} Polygon.
   * @api
   */
  getPolygon(index) {
    if (index < 0 || this.endss_.length <= index) {
      return null;
    }
    let offset;
    if (index === 0) {
      offset = 0;
    } else {
      const prevEnds = this.endss_[index - 1];
      offset = prevEnds[prevEnds.length - 1];
    }
    const ends = this.endss_[index].slice();
    const end = ends[ends.length - 1];
    if (offset !== 0) {
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        ends[i] -= offset;
      }
    }
    return new Polygon_default(
      this.flatCoordinates.slice(offset, end),
      this.layout,
      ends
    );
  }
  /**
   * Return the polygons of this multipolygon.
   * @return {Array<Polygon>} Polygons.
   * @api
   */
  getPolygons() {
    const layout = this.layout;
    const flatCoordinates = this.flatCoordinates;
    const endss = this.endss_;
    const polygons = [];
    let offset = 0;
    for (let i = 0, ii = endss.length; i < ii; ++i) {
      const ends = endss[i].slice();
      const end = ends[ends.length - 1];
      if (offset !== 0) {
        for (let j = 0, jj = ends.length; j < jj; ++j) {
          ends[j] -= offset;
        }
      }
      const polygon = new Polygon_default(
        flatCoordinates.slice(offset, end),
        layout,
        ends
      );
      polygons.push(polygon);
      offset = end;
    }
    return polygons;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "MultiPolygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(extent) {
    return intersectsLinearRingMultiArray(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      extent
    );
  }
  /**
   * Set the coordinates of the multipolygon.
   * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(coordinates, layout) {
    this.setLayout(layout, coordinates, 3);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    const endss = deflateMultiCoordinatesArray(
      this.flatCoordinates,
      0,
      coordinates,
      this.stride,
      this.endss_
    );
    if (endss.length === 0) {
      this.flatCoordinates.length = 0;
    } else {
      const lastEnds = endss[endss.length - 1];
      this.flatCoordinates.length = lastEnds.length === 0 ? 0 : lastEnds[lastEnds.length - 1];
    }
    this.changed();
  }
};
var MultiPolygon_default = MultiPolygon;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/format/MVT.js
var import_pbf = __toESM(require_pbf(), 1);

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/Circle.js
var Circle = class extends SimpleGeometry_default {
  /**
   * @param {!import("../coordinate.js").Coordinate} center Center.
   *     For internal use, flat coordinates in combination with `layout` and no
   *     `radius` are also accepted.
   * @param {number} [radius] Radius.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(center, radius, layout) {
    super();
    if (layout !== void 0 && radius === void 0) {
      this.setFlatCoordinates(layout, center);
    } else {
      radius = radius ? radius : 0;
      this.setCenterAndRadius(center, radius, layout);
    }
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Circle} Clone.
   * @api
   */
  clone() {
    const circle = new Circle(
      this.flatCoordinates.slice(),
      void 0,
      this.layout
    );
    circle.applyProperties(this);
    return circle;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    const flatCoordinates = this.flatCoordinates;
    const dx = x - flatCoordinates[0];
    const dy = y - flatCoordinates[1];
    const squaredDistance2 = dx * dx + dy * dy;
    if (squaredDistance2 < minSquaredDistance) {
      if (squaredDistance2 === 0) {
        for (let i = 0; i < this.stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
      } else {
        const delta = this.getRadius() / Math.sqrt(squaredDistance2);
        closestPoint[0] = flatCoordinates[0] + delta * dx;
        closestPoint[1] = flatCoordinates[1] + delta * dy;
        for (let i = 2; i < this.stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
      }
      closestPoint.length = this.stride;
      return squaredDistance2;
    }
    return minSquaredDistance;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(x, y) {
    const flatCoordinates = this.flatCoordinates;
    const dx = x - flatCoordinates[0];
    const dy = y - flatCoordinates[1];
    return dx * dx + dy * dy <= this.getRadiusSquared_();
  }
  /**
   * Return the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
   * @return {import("../coordinate.js").Coordinate} Center.
   * @api
   */
  getCenter() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(extent) {
    const flatCoordinates = this.flatCoordinates;
    const radius = flatCoordinates[this.stride] - flatCoordinates[0];
    return createOrUpdate(
      flatCoordinates[0] - radius,
      flatCoordinates[1] - radius,
      flatCoordinates[0] + radius,
      flatCoordinates[1] + radius,
      extent
    );
  }
  /**
   * Return the radius of the circle.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return Math.sqrt(this.getRadiusSquared_());
  }
  /**
   * @private
   * @return {number} Radius squared.
   */
  getRadiusSquared_() {
    const dx = this.flatCoordinates[this.stride] - this.flatCoordinates[0];
    const dy = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
    return dx * dx + dy * dy;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "Circle";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(extent) {
    const circleExtent = this.getExtent();
    if (intersects(extent, circleExtent)) {
      const center = this.getCenter();
      if (extent[0] <= center[0] && extent[2] >= center[0]) {
        return true;
      }
      if (extent[1] <= center[1] && extent[3] >= center[1]) {
        return true;
      }
      return forEachCorner(extent, this.intersectsCoordinate.bind(this));
    }
    return false;
  }
  /**
   * Set the center of the circle as {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} center Center.
   * @api
   */
  setCenter(center) {
    const stride = this.stride;
    const radius = this.flatCoordinates[stride] - this.flatCoordinates[0];
    const flatCoordinates = center.slice();
    flatCoordinates[stride] = flatCoordinates[0] + radius;
    for (let i = 1; i < stride; ++i) {
      flatCoordinates[stride + i] = center[i];
    }
    this.setFlatCoordinates(this.layout, flatCoordinates);
    this.changed();
  }
  /**
   * Set the center (as {@link module:ol/coordinate~Coordinate coordinate}) and the radius (as
   * number) of the circle.
   * @param {!import("../coordinate.js").Coordinate} center Center.
   * @param {number} radius Radius.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCenterAndRadius(center, radius, layout) {
    this.setLayout(layout, center, 0);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    const flatCoordinates = this.flatCoordinates;
    let offset = deflateCoordinate(flatCoordinates, 0, center, this.stride);
    flatCoordinates[offset++] = flatCoordinates[0] + radius;
    for (let i = 1, ii = this.stride; i < ii; ++i) {
      flatCoordinates[offset++] = flatCoordinates[i];
    }
    flatCoordinates.length = offset;
    this.changed();
  }
  getCoordinates() {
    return null;
  }
  setCoordinates(coordinates, layout) {
  }
  /**
   * Set the radius of the circle. The radius is in the units of the projection.
   * @param {number} radius Radius.
   * @api
   */
  setRadius(radius) {
    this.flatCoordinates[this.stride] = this.flatCoordinates[0] + radius;
    this.changed();
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(angle, anchor2) {
    const center = this.getCenter();
    const stride = this.getStride();
    this.setCenter(
      rotate2(center, 0, center.length, stride, angle, anchor2, center)
    );
    this.changed();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(deltaX, deltaY) {
    const center = this.getCenter();
    const stride = this.getStride();
    this.setCenter(
      translate2(center, 0, center.length, stride, deltaX, deltaY, center)
    );
    this.changed();
  }
};
Circle.prototype.transform;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/GeometryCollection.js
var GeometryCollection = class extends Geometry_default {
  /**
   * @param {Array<Geometry>} [geometries] Geometries.
   */
  constructor(geometries) {
    super();
    this.geometries_ = geometries ? geometries : null;
    this.changeEventsKeys_ = [];
    this.listenGeometriesChange_();
  }
  /**
   * @private
   */
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(unlistenByKey);
    this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    if (!this.geometries_) {
      return;
    }
    for (let i = 0, ii = this.geometries_.length; i < ii; ++i) {
      this.changeEventsKeys_.push(
        listen(this.geometries_[i], EventType_default.CHANGE, this.changed, this)
      );
    }
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */
  clone() {
    const geometryCollection = new GeometryCollection(null);
    geometryCollection.setGeometries(this.geometries_);
    geometryCollection.applyProperties(this);
    return geometryCollection;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      minSquaredDistance = geometries[i].closestPointXY(
        x,
        y,
        closestPoint,
        minSquaredDistance
      );
    }
    return minSquaredDistance;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(x, y) {
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      if (geometries[i].containsXY(x, y)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(extent) {
    createOrUpdateEmpty(extent);
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      extend2(extent, geometries[i].getExtent());
    }
    return extent;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return cloneGeometries(this.geometries_);
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArray() {
    return this.geometries_;
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArrayRecursive() {
    let geometriesArray = [];
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      if (geometries[i].getType() === this.getType()) {
        geometriesArray = geometriesArray.concat(
          /** @type {GeometryCollection} */
          geometries[i].getGeometriesArrayRecursive()
        );
      } else {
        geometriesArray.push(geometries[i]);
      }
    }
    return geometriesArray;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {GeometryCollection} Simplified GeometryCollection.
   */
  getSimplifiedGeometry(squaredTolerance) {
    if (this.simplifiedGeometryRevision !== this.getRevision()) {
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = this.getRevision();
    }
    if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance < this.simplifiedGeometryMaxMinSquaredTolerance) {
      return this;
    }
    const simplifiedGeometries = [];
    const geometries = this.geometries_;
    let simplified = false;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      const geometry2 = geometries[i];
      const simplifiedGeometry = geometry2.getSimplifiedGeometry(squaredTolerance);
      simplifiedGeometries.push(simplifiedGeometry);
      if (simplifiedGeometry !== geometry2) {
        simplified = true;
      }
    }
    if (simplified) {
      const simplifiedGeometryCollection = new GeometryCollection(null);
      simplifiedGeometryCollection.setGeometriesArray(simplifiedGeometries);
      return simplifiedGeometryCollection;
    }
    this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
    return this;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "GeometryCollection";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(extent) {
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      if (geometries[i].intersectsExtent(extent)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.geometries_.length === 0;
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(angle, anchor2) {
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].rotate(angle, anchor2);
    }
    this.changed();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(sx, sy, anchor2) {
    if (!anchor2) {
      anchor2 = getCenter(this.getExtent());
    }
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].scale(sx, sy, anchor2);
    }
    this.changed();
  }
  /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */
  setGeometries(geometries) {
    this.setGeometriesArray(cloneGeometries(geometries));
  }
  /**
   * @param {Array<Geometry>} geometries Geometries.
   */
  setGeometriesArray(geometries) {
    this.unlistenGeometriesChange_();
    this.geometries_ = geometries;
    this.listenGeometriesChange_();
    this.changed();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */
  applyTransform(transformFn) {
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].applyTransform(transformFn);
    }
    this.changed();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(deltaX, deltaY) {
    const geometries = this.geometries_;
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      geometries[i].translate(deltaX, deltaY);
    }
    this.changed();
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.unlistenGeometriesChange_();
    super.disposeInternal();
  }
};
function cloneGeometries(geometries) {
  const clonedGeometries = [];
  for (let i = 0, ii = geometries.length; i < ii; ++i) {
    clonedGeometries.push(geometries[i].clone());
  }
  return clonedGeometries;
}
var GeometryCollection_default = GeometryCollection;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render/Feature.js
var tmpTransform = create();
var RenderFeature = class {
  /**
   * @param {import("../geom/Geometry.js").Type} type Geometry type.
   * @param {Array<number>} flatCoordinates Flat coordinates. These always need
   *     to be right-handed for polygons.
   * @param {Array<number>|Array<Array<number>>} ends Ends or Endss.
   * @param {Object<string, *>} properties Properties.
   * @param {number|string|undefined} id Feature id.
   */
  constructor(type, flatCoordinates, ends, properties2, id2) {
    this.styleFunction;
    this.extent_;
    this.id_ = id2;
    this.type_ = type;
    this.flatCoordinates_ = flatCoordinates;
    this.flatInteriorPoints_ = null;
    this.flatMidpoints_ = null;
    this.ends_ = ends;
    this.properties_ = properties2;
  }
  /**
   * Get a feature property by its key.
   * @param {string} key Key
   * @return {*} Value for the requested key.
   * @api
   */
  get(key) {
    return this.properties_[key];
  }
  /**
   * Get the extent of this feature's geometry.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    if (!this.extent_) {
      this.extent_ = this.type_ === "Point" ? createOrUpdateFromCoordinate(this.flatCoordinates_) : createOrUpdateFromFlatCoordinates(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2
      );
    }
    return this.extent_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const flatCenter = getCenter(this.getExtent());
      this.flatInteriorPoints_ = getInteriorPointOfArray(
        this.flatCoordinates_,
        0,
        /** @type {Array<number>} */
        this.ends_,
        2,
        flatCenter,
        0
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const flatCenters = linearRingss2(
        this.flatCoordinates_,
        0,
        /** @type {Array<Array<number>>} */
        this.ends_,
        2
      );
      this.flatInteriorPoints_ = getInteriorPointsOfMultiArray(
        this.flatCoordinates_,
        0,
        /** @type {Array<Array<number>>} */
        this.ends_,
        2,
        flatCenters
      );
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = interpolatePoint(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        0.5
      );
    }
    return this.flatMidpoints_;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const flatCoordinates = this.flatCoordinates_;
      let offset = 0;
      const ends = (
        /** @type {Array<number>} */
        this.ends_
      );
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const midpoint = interpolatePoint(flatCoordinates, offset, end, 2, 0.5);
        extend(this.flatMidpoints_, midpoint);
        offset = end;
      }
    }
    return this.flatMidpoints_;
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is set when reading data from a remote source.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  /**
   * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
   * determining the geometry type in style function (see {@link #getType}).
   * @return {RenderFeature} Feature.
   * @api
   */
  getGeometry() {
    return this;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {RenderFeature} Simplified geometry.
   */
  getSimplifiedGeometry(squaredTolerance) {
    return this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {RenderFeature} Simplified geometry.
   */
  simplifyTransformed(squaredTolerance, transform) {
    return this;
  }
  /**
   * Get the feature properties.
   * @return {Object<string, *>} Feature properties.
   * @api
   */
  getProperties() {
    return this.properties_;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return 2;
  }
  /**
   * @return {import('../style/Style.js').StyleFunction|undefined} Style
   */
  getStyleFunction() {
    return this.styleFunction;
  }
  /**
   * Get the type of this feature's geometry.
   * @return {import("../geom/Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return this.type_;
  }
  /**
   * Transform geometry coordinates from tile pixel space to projected.
   *
   * @param {import("../proj.js").ProjectionLike} projection The data projection
   */
  transform(projection) {
    projection = get(projection);
    const pixelExtent = projection.getExtent();
    const projectedExtent = projection.getWorldExtent();
    if (pixelExtent && projectedExtent) {
      const scale2 = getHeight(projectedExtent) / getHeight(pixelExtent);
      compose(
        tmpTransform,
        projectedExtent[0],
        projectedExtent[3],
        scale2,
        -scale2,
        0,
        0,
        0
      );
      transform2D(
        this.flatCoordinates_,
        0,
        this.flatCoordinates_.length,
        2,
        tmpTransform,
        this.flatCoordinates_
      );
    }
  }
  /**
   * @return {Array<number>|Array<Array<number>>} Ends or endss.
   */
  getEnds() {
    return this.ends_;
  }
};
RenderFeature.prototype.getEndss = RenderFeature.prototype.getEnds;
RenderFeature.prototype.getFlatCoordinates = RenderFeature.prototype.getOrientedFlatCoordinates;
var Feature_default3 = RenderFeature;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/format/MVT.js
var MVT = class extends Feature_default2 {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options ? options : {};
    this.dataProjection = new Projection_default({
      code: "",
      units: "tile-pixels"
    });
    this.featureClass_ = options.featureClass ? options.featureClass : Feature_default3;
    this.geometryName_ = options.geometryName;
    this.layerName_ = options.layerName ? options.layerName : "layer";
    this.layers_ = options.layers ? options.layers : null;
    this.idProperty_ = options.idProperty;
    this.supportedMediaTypes = [
      "application/vnd.mapbox-vector-tile",
      "application/x-protobuf"
    ];
  }
  /**
   * Read the raw geometry from the pbf offset stored in a raw feature's geometry
   * property.
   * @param {PBF} pbf PBF.
   * @param {Object} feature Raw feature.
   * @param {Array<number>} flatCoordinates Array to store flat coordinates in.
   * @param {Array<number>} ends Array to store ends in.
   * @private
   */
  readRawGeometry_(pbf, feature, flatCoordinates, ends) {
    pbf.pos = feature.geometry;
    const end = pbf.readVarint() + pbf.pos;
    let cmd = 1;
    let length = 0;
    let x = 0;
    let y = 0;
    let coordsLen = 0;
    let currentEnd = 0;
    while (pbf.pos < end) {
      if (!length) {
        const cmdLen = pbf.readVarint();
        cmd = cmdLen & 7;
        length = cmdLen >> 3;
      }
      length--;
      if (cmd === 1 || cmd === 2) {
        x += pbf.readSVarint();
        y += pbf.readSVarint();
        if (cmd === 1) {
          if (coordsLen > currentEnd) {
            ends.push(coordsLen);
            currentEnd = coordsLen;
          }
        }
        flatCoordinates.push(x, y);
        coordsLen += 2;
      } else if (cmd === 7) {
        if (coordsLen > currentEnd) {
          flatCoordinates.push(
            flatCoordinates[currentEnd],
            flatCoordinates[currentEnd + 1]
          );
          coordsLen += 2;
        }
      } else {
        assert(false, 59);
      }
    }
    if (coordsLen > currentEnd) {
      ends.push(coordsLen);
      currentEnd = coordsLen;
    }
  }
  /**
   * @private
   * @param {PBF} pbf PBF
   * @param {Object} rawFeature Raw Mapbox feature.
   * @param {import("./Feature.js").ReadOptions} options Read options.
   * @return {import("../Feature.js").FeatureLike|null} Feature.
   */
  createFeature_(pbf, rawFeature, options) {
    const type = rawFeature.type;
    if (type === 0) {
      return null;
    }
    let feature;
    const values = rawFeature.properties;
    let id2;
    if (!this.idProperty_) {
      id2 = rawFeature.id;
    } else {
      id2 = values[this.idProperty_];
      delete values[this.idProperty_];
    }
    values[this.layerName_] = rawFeature.layer.name;
    const flatCoordinates = (
      /** @type {Array<number>} */
      []
    );
    const ends = (
      /** @type {Array<number>} */
      []
    );
    this.readRawGeometry_(pbf, rawFeature, flatCoordinates, ends);
    const geometryType2 = getGeometryType(type, ends.length);
    if (this.featureClass_ === Feature_default3) {
      feature = new this.featureClass_(
        geometryType2,
        flatCoordinates,
        ends,
        values,
        id2
      );
      feature.transform(options.dataProjection);
    } else {
      let geom;
      if (geometryType2 == "Polygon") {
        const endss = inflateEnds(flatCoordinates, ends);
        geom = endss.length > 1 ? new MultiPolygon_default(flatCoordinates, "XY", endss) : new Polygon_default(flatCoordinates, "XY", ends);
      } else {
        geom = geometryType2 === "Point" ? new Point_default(flatCoordinates, "XY") : geometryType2 === "LineString" ? new LineString_default(flatCoordinates, "XY") : geometryType2 === "MultiPoint" ? new MultiPoint_default(flatCoordinates, "XY") : geometryType2 === "MultiLineString" ? new MultiLineString_default(flatCoordinates, "XY", ends) : null;
      }
      const ctor = (
        /** @type {typeof import("../Feature.js").default} */
        this.featureClass_
      );
      feature = new ctor();
      if (this.geometryName_) {
        feature.setGeometryName(this.geometryName_);
      }
      const geometry2 = transformGeometryWithOptions(geom, false, options);
      feature.setGeometry(geometry2);
      if (id2 !== void 0) {
        feature.setId(id2);
      }
      feature.setProperties(values, true);
    }
    return feature;
  }
  /**
   * @return {import("./Feature.js").Type} Format.
   */
  getType() {
    return "arraybuffer";
  }
  /**
   * Read all features.
   *
   * @param {ArrayBuffer} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {Array<import("../Feature.js").FeatureLike>} Features.
   * @api
   */
  readFeatures(source, options) {
    const layers = this.layers_;
    options = this.adaptOptions(options);
    const dataProjection = get(options.dataProjection);
    dataProjection.setWorldExtent(options.extent);
    options.dataProjection = dataProjection;
    const pbf = new import_pbf.default(
      /** @type {ArrayBuffer} */
      source
    );
    const pbfLayers = pbf.readFields(layersPBFReader, {});
    const features = [];
    for (const name in pbfLayers) {
      if (layers && !layers.includes(name)) {
        continue;
      }
      const pbfLayer = pbfLayers[name];
      const extent = pbfLayer ? [0, 0, pbfLayer.extent, pbfLayer.extent] : null;
      dataProjection.setExtent(extent);
      for (let i = 0, ii = pbfLayer.length; i < ii; ++i) {
        const rawFeature = readRawFeature(pbf, pbfLayer, i);
        const feature = this.createFeature_(pbf, rawFeature, options);
        if (feature !== null) {
          features.push(feature);
        }
      }
    }
    return features;
  }
  /**
   * Read the projection from the source.
   *
   * @param {Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   */
  readProjection(source) {
    return this.dataProjection;
  }
  /**
   * Sets the layers that features will be read from.
   * @param {Array<string>} layers Layers.
   * @api
   */
  setLayers(layers) {
    this.layers_ = layers;
  }
};
function layersPBFReader(tag, layers, pbf) {
  if (tag === 3) {
    const layer = {
      keys: [],
      values: [],
      features: []
    };
    const end = pbf.readVarint() + pbf.pos;
    pbf.readFields(layerPBFReader, layer, end);
    layer.length = layer.features.length;
    if (layer.length) {
      layers[layer.name] = layer;
    }
  }
}
function layerPBFReader(tag, layer, pbf) {
  if (tag === 15) {
    layer.version = pbf.readVarint();
  } else if (tag === 1) {
    layer.name = pbf.readString();
  } else if (tag === 5) {
    layer.extent = pbf.readVarint();
  } else if (tag === 2) {
    layer.features.push(pbf.pos);
  } else if (tag === 3) {
    layer.keys.push(pbf.readString());
  } else if (tag === 4) {
    let value = null;
    const end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
      tag = pbf.readVarint() >> 3;
      value = tag === 1 ? pbf.readString() : tag === 2 ? pbf.readFloat() : tag === 3 ? pbf.readDouble() : tag === 4 ? pbf.readVarint64() : tag === 5 ? pbf.readVarint() : tag === 6 ? pbf.readSVarint() : tag === 7 ? pbf.readBoolean() : null;
    }
    layer.values.push(value);
  }
}
function featurePBFReader(tag, feature, pbf) {
  if (tag == 1) {
    feature.id = pbf.readVarint();
  } else if (tag == 2) {
    const end = pbf.readVarint() + pbf.pos;
    while (pbf.pos < end) {
      const key = feature.layer.keys[pbf.readVarint()];
      const value = feature.layer.values[pbf.readVarint()];
      feature.properties[key] = value;
    }
  } else if (tag == 3) {
    feature.type = pbf.readVarint();
  } else if (tag == 4) {
    feature.geometry = pbf.pos;
  }
}
function readRawFeature(pbf, layer, i) {
  pbf.pos = layer.features[i];
  const end = pbf.readVarint() + pbf.pos;
  const feature = {
    layer,
    type: 0,
    properties: {}
  };
  pbf.readFields(featurePBFReader, feature, end);
  return feature;
}
function getGeometryType(type, numEnds) {
  let geometryType2;
  if (type === 1) {
    geometryType2 = numEnds === 1 ? "Point" : "MultiPoint";
  } else if (type === 2) {
    geometryType2 = numEnds === 1 ? "LineString" : "MultiLineString";
  } else if (type === 3) {
    geometryType2 = "Polygon";
  }
  return geometryType2;
}
var MVT_default = MVT;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/canvas/VectorTileLayer.js
var IMAGE_REPLAYS = {
  "image": ["Polygon", "Circle", "LineString", "Image", "Text"],
  "hybrid": ["Polygon", "LineString"],
  "vector": []
};
var VECTOR_REPLAYS = {
  "hybrid": ["Image", "Text", "Default"],
  "vector": ["Polygon", "Circle", "LineString", "Image", "Text", "Default"]
};
var CanvasVectorTileLayerRenderer = class extends TileLayer_default {
  /**
   * @param {import("../../layer/VectorTile.js").default} layer VectorTile layer.
   */
  constructor(layer) {
    super(layer);
    this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);
    this.renderedLayerRevision_;
    this.renderedPixelToCoordinateTransform_ = null;
    this.renderedRotation_;
    this.tmpTransform_ = create();
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection").default} projection Projection.
   * @return {boolean|undefined} Tile needs to be rendered.
   */
  prepareTile(tile, pixelRatio, projection) {
    let render;
    const state = tile.getState();
    if (state === TileState_default.LOADED || state === TileState_default.ERROR) {
      this.updateExecutorGroup_(tile, pixelRatio, projection);
      if (this.tileImageNeedsRender_(tile)) {
        render = true;
      }
    }
    return render;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {!import("../../Tile.js").default} Tile.
   */
  getTile(z, x, y, frameState) {
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const resolution = viewState.resolution;
    const projection = viewState.projection;
    const layer = this.getLayer();
    const tile = layer.getSource().getTile(z, x, y, pixelRatio, projection);
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    if (hifi || !tile.wantedResolution) {
      tile.wantedResolution = resolution;
    }
    const render = this.prepareTile(tile, pixelRatio, projection);
    if (render && (hifi || Date.now() - frameState.time < 8) && layer.getRenderMode() !== "vector") {
      this.renderTileImage_(tile, frameState);
    }
    return super.getTile(z, x, y, frameState);
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @return {boolean} Tile is drawable.
   */
  isDrawableTile(tile) {
    const layer = this.getLayer();
    return super.isDrawableTile(tile) && (layer.getRenderMode() === "vector" ? getUid(layer) in tile.executorGroups : tile.hasContext(layer));
  }
  /**
   * @inheritDoc
   */
  getTileImage(tile) {
    return tile.getImage(this.getLayer());
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    const layerRevision = this.getLayer().getRevision();
    if (this.renderedLayerRevision_ !== layerRevision) {
      this.renderedLayerRevision_ = layerRevision;
      this.renderedTiles.length = 0;
    }
    return super.prepareFrame(frameState);
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @private
   */
  updateExecutorGroup_(tile, pixelRatio, projection) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const revision = layer.getRevision();
    const renderOrder = layer.getRenderOrder() || null;
    const resolution = tile.wantedResolution;
    const builderState = tile.getReplayState(layer);
    if (!builderState.dirty && builderState.renderedResolution === resolution && builderState.renderedRevision == revision && builderState.renderedRenderOrder == renderOrder) {
      return;
    }
    const source = layer.getSource();
    const declutter = layer.getDeclutter();
    const sourceTileGrid = source.getTileGrid();
    const tileGrid = source.getTileGridForProjection(projection);
    const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
    const sourceTiles = source.getSourceTiles(pixelRatio, projection, tile);
    const layerUid = getUid(layer);
    delete tile.hitDetectionImageData[layerUid];
    tile.executorGroups[layerUid] = [];
    if (declutter) {
      tile.declutterExecutorGroups[layerUid] = [];
    }
    builderState.dirty = false;
    for (let t = 0, tt = sourceTiles.length; t < tt; ++t) {
      const sourceTile = sourceTiles[t];
      if (sourceTile.getState() != TileState_default.LOADED) {
        continue;
      }
      const sourceTileCoord = sourceTile.tileCoord;
      const sourceTileExtent = sourceTileGrid.getTileCoordExtent(sourceTileCoord);
      const sharedExtent = getIntersection(tileExtent, sourceTileExtent);
      const builderExtent = buffer(
        sharedExtent,
        layer.getRenderBuffer() * resolution,
        this.tmpExtent
      );
      const bufferedExtent = equals2(sourceTileExtent, sharedExtent) ? null : builderExtent;
      const builderGroup = new BuilderGroup_default(
        0,
        builderExtent,
        resolution,
        pixelRatio
      );
      const declutterBuilderGroup = declutter ? new BuilderGroup_default(0, sharedExtent, resolution, pixelRatio) : void 0;
      const squaredTolerance = getSquaredTolerance(
        resolution,
        pixelRatio
      );
      const render = function(feature) {
        let styles;
        const styleFunction = feature.getStyleFunction() || layer.getStyleFunction();
        if (styleFunction) {
          styles = styleFunction(feature, resolution);
        }
        if (styles) {
          const dirty = this.renderFeature(
            feature,
            squaredTolerance,
            styles,
            builderGroup,
            declutterBuilderGroup
          );
          builderState.dirty = builderState.dirty || dirty;
        }
      };
      const features = sourceTile.getFeatures();
      if (renderOrder && renderOrder !== builderState.renderedRenderOrder) {
        features.sort(renderOrder);
      }
      for (let i = 0, ii = features.length; i < ii; ++i) {
        const feature = features[i];
        if (!bufferedExtent || intersects(bufferedExtent, feature.getGeometry().getExtent())) {
          render.call(this, feature);
        }
      }
      const executorGroupInstructions = builderGroup.finish();
      const replayExtent = layer.getRenderMode() !== "vector" && declutter && sourceTiles.length === 1 ? null : sharedExtent;
      const renderingReplayGroup = new ExecutorGroup_default(
        replayExtent,
        resolution,
        pixelRatio,
        source.getOverlaps(),
        executorGroupInstructions,
        layer.getRenderBuffer()
      );
      tile.executorGroups[layerUid].push(renderingReplayGroup);
      if (declutterBuilderGroup) {
        const declutterExecutorGroup = new ExecutorGroup_default(
          null,
          resolution,
          pixelRatio,
          source.getOverlaps(),
          declutterBuilderGroup.finish(),
          layer.getRenderBuffer()
        );
        tile.declutterExecutorGroups[layerUid].push(declutterExecutorGroup);
      }
    }
    builderState.renderedRevision = revision;
    builderState.renderedRenderOrder = renderOrder;
    builderState.renderedResolution = resolution;
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
    const resolution = frameState.viewState.resolution;
    const rotation = frameState.viewState.rotation;
    hitTolerance = hitTolerance == void 0 ? 0 : hitTolerance;
    const layer = this.getLayer();
    const source = layer.getSource();
    const tileGrid = source.getTileGridForProjection(
      frameState.viewState.projection
    );
    const hitExtent = boundingExtent([coordinate]);
    buffer(hitExtent, resolution * hitTolerance, hitExtent);
    const features = {};
    const featureCallback = function(feature, geometry2, distanceSq) {
      let key = feature.getId();
      if (key === void 0) {
        key = getUid(feature);
      }
      const match = features[key];
      if (!match) {
        if (distanceSq === 0) {
          features[key] = true;
          return callback(feature, layer, geometry2);
        }
        matches.push(
          features[key] = {
            feature,
            layer,
            geometry: geometry2,
            distanceSq,
            callback
          }
        );
      } else if (match !== true && distanceSq < match.distanceSq) {
        if (distanceSq === 0) {
          features[key] = true;
          matches.splice(matches.lastIndexOf(match), 1);
          return callback(feature, layer, geometry2);
        }
        match.geometry = geometry2;
        match.distanceSq = distanceSq;
      }
      return void 0;
    };
    const renderedTiles = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    let found;
    for (let i = 0, ii = renderedTiles.length; !found && i < ii; ++i) {
      const tile = renderedTiles[i];
      const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
      if (!intersects(tileExtent, hitExtent)) {
        continue;
      }
      const layerUid = getUid(layer);
      const executorGroups = [tile.executorGroups[layerUid]];
      const declutterExecutorGroups = tile.declutterExecutorGroups[layerUid];
      if (declutterExecutorGroups) {
        executorGroups.push(declutterExecutorGroups);
      }
      executorGroups.some((executorGroups2) => {
        const declutteredFeatures = executorGroups2 === declutterExecutorGroups ? frameState.declutterTree.all().map((item) => item.value) : null;
        for (let t = 0, tt = executorGroups2.length; t < tt; ++t) {
          const executorGroup = executorGroups2[t];
          found = executorGroup.forEachFeatureAtCoordinate(
            coordinate,
            resolution,
            rotation,
            hitTolerance,
            featureCallback,
            declutteredFeatures
          );
          if (found) {
            return true;
          }
        }
      });
    }
    return found;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature.js").FeatureLike>>} Promise that resolves with an array of features.
   */
  getFeatures(pixel) {
    return new Promise((resolve, reject) => {
      const layer = this.getLayer();
      const layerUid = getUid(layer);
      const source = layer.getSource();
      const projection = this.renderedProjection;
      const projectionExtent = projection.getExtent();
      const resolution = this.renderedResolution;
      const tileGrid = source.getTileGridForProjection(projection);
      const coordinate = apply(
        this.renderedPixelToCoordinateTransform_,
        pixel.slice()
      );
      const tileCoord = tileGrid.getTileCoordForCoordAndResolution(
        coordinate,
        resolution
      );
      let tile;
      for (let i = 0, ii = this.renderedTiles.length; i < ii; ++i) {
        if (tileCoord.toString() === this.renderedTiles[i].tileCoord.toString()) {
          tile = /** @type {import("../../VectorRenderTile.js").default} */
          this.renderedTiles[i];
          if (tile.getState() === TileState_default.LOADED) {
            const extent2 = tileGrid.getTileCoordExtent(tile.tileCoord);
            if (source.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, extent2)) {
              wrapX(coordinate, projection);
            }
            break;
          }
          tile = void 0;
        }
      }
      if (!tile || tile.loadingSourceTiles > 0) {
        resolve([]);
        return;
      }
      const extent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
      const corner = getTopLeft(extent);
      const tilePixel = [
        (coordinate[0] - corner[0]) / resolution,
        (corner[1] - coordinate[1]) / resolution
      ];
      const features = tile.getSourceTiles().reduce(function(accumulator, sourceTile) {
        return accumulator.concat(sourceTile.getFeatures());
      }, []);
      let hitDetectionImageData = tile.hitDetectionImageData[layerUid];
      if (!hitDetectionImageData) {
        const tileSize = toSize(
          tileGrid.getTileSize(
            tileGrid.getZForResolution(resolution, source.zDirection)
          )
        );
        const rotation = this.renderedRotation_;
        const transforms = [
          this.getRenderTransform(
            tileGrid.getTileCoordCenter(tile.wrappedTileCoord),
            resolution,
            0,
            HIT_DETECT_RESOLUTION,
            tileSize[0] * HIT_DETECT_RESOLUTION,
            tileSize[1] * HIT_DETECT_RESOLUTION,
            0
          )
        ];
        hitDetectionImageData = createHitDetectionImageData(
          tileSize,
          transforms,
          features,
          layer.getStyleFunction(),
          tileGrid.getTileCoordExtent(tile.wrappedTileCoord),
          tile.getReplayState(layer).renderedResolution,
          rotation
        );
        tile.hitDetectionImageData[layerUid] = hitDetectionImageData;
      }
      resolve(hitDetect(tilePixel, features, hitDetectionImageData));
    });
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const layer = this.getLayer();
    if (layer.getVisible() && this.renderedLayerRevision_ !== void 0) {
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
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    const context = this.context;
    const alpha = context.globalAlpha;
    context.globalAlpha = this.getLayer().getOpacity();
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    const tiles = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    for (let i = 0, ii = tiles.length; i < ii; ++i) {
      const tile = tiles[i];
      const declutterExecutorGroups = tile.declutterExecutorGroups[getUid(this.getLayer())];
      if (declutterExecutorGroups) {
        for (let j = declutterExecutorGroups.length - 1; j >= 0; --j) {
          declutterExecutorGroups[j].execute(
            this.context,
            1,
            this.getTileRenderTransform(tile, frameState),
            frameState.viewState.rotation,
            hifi,
            void 0,
            frameState.declutterTree
          );
        }
      }
    }
    context.globalAlpha = alpha;
  }
  getTileRenderTransform(tile, frameState) {
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const center = viewState.center;
    const resolution = viewState.resolution;
    const rotation = viewState.rotation;
    const size = frameState.size;
    const width = Math.round(size[0] * pixelRatio);
    const height = Math.round(size[1] * pixelRatio);
    const source = this.getLayer().getSource();
    const tileGrid = source.getTileGridForProjection(
      frameState.viewState.projection
    );
    const tileCoord = tile.tileCoord;
    const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
    const worldOffset = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent)[0] - tileExtent[0];
    const transform = multiply(
      scale(this.inversePixelTransform.slice(), 1 / pixelRatio, 1 / pixelRatio),
      this.getRenderTransform(
        center,
        resolution,
        rotation,
        pixelRatio,
        width,
        height,
        worldOffset
      )
    );
    return transform;
  }
  /**
   * Render the vectors for this layer.
   * @param {CanvasRenderingContext2D} context Target context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  postRender(context, frameState) {
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    this.renderedPixelToCoordinateTransform_ = frameState.pixelToCoordinateTransform.slice();
    this.renderedRotation_ = frameState.viewState.rotation;
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const renderMode = layer.getRenderMode();
    const alpha = context.globalAlpha;
    context.globalAlpha = layer.getOpacity();
    const replayTypes = VECTOR_REPLAYS[renderMode];
    const viewState = frameState.viewState;
    const rotation = viewState.rotation;
    const tileSource = layer.getSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const z = tileGrid.getZForResolution(
      viewState.resolution,
      tileSource.zDirection
    );
    const tiles = this.renderedTiles;
    const clips = [];
    const clipZs = [];
    let ready = true;
    for (let i = tiles.length - 1; i >= 0; --i) {
      const tile = (
        /** @type {import("../../VectorRenderTile.js").default} */
        tiles[i]
      );
      ready = ready && !tile.getReplayState(layer).dirty;
      const executorGroups = tile.executorGroups[getUid(layer)].filter(
        (group) => group.hasExecutors(replayTypes)
      );
      if (executorGroups.length === 0) {
        continue;
      }
      const transform = this.getTileRenderTransform(tile, frameState);
      const currentZ = tile.tileCoord[0];
      let contextSaved = false;
      const currentClip = executorGroups[0].getClipCoords(transform);
      if (currentClip) {
        for (let j = 0, jj = clips.length; j < jj; ++j) {
          if (z !== currentZ && currentZ < clipZs[j]) {
            const clip = clips[j];
            if (intersects(
              [
                currentClip[0],
                currentClip[3],
                currentClip[4],
                currentClip[7]
              ],
              [clip[0], clip[3], clip[4], clip[7]]
            )) {
              if (!contextSaved) {
                context.save();
                contextSaved = true;
              }
              context.beginPath();
              context.moveTo(currentClip[0], currentClip[1]);
              context.lineTo(currentClip[2], currentClip[3]);
              context.lineTo(currentClip[4], currentClip[5]);
              context.lineTo(currentClip[6], currentClip[7]);
              context.moveTo(clip[6], clip[7]);
              context.lineTo(clip[4], clip[5]);
              context.lineTo(clip[2], clip[3]);
              context.lineTo(clip[0], clip[1]);
              context.clip();
            }
          }
        }
        clips.push(currentClip);
        clipZs.push(currentZ);
      }
      for (let t = 0, tt = executorGroups.length; t < tt; ++t) {
        const executorGroup = executorGroups[t];
        executorGroup.execute(
          context,
          1,
          transform,
          rotation,
          hifi,
          replayTypes
        );
      }
      if (contextSaved) {
        context.restore();
      }
    }
    context.globalAlpha = alpha;
    this.ready = ready;
    super.postRender(context, frameState);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
   * @param {import("../../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder group for decluttering.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(feature, squaredTolerance, styles, builderGroup, declutterBuilderGroup) {
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
          void 0,
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
        void 0,
        declutterBuilderGroup
      );
    }
    return loading;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @return {boolean} A new tile image was rendered.
   * @private
   */
  tileImageNeedsRender_(tile) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    if (layer.getRenderMode() === "vector") {
      return false;
    }
    const replayState = tile.getReplayState(layer);
    const revision = layer.getRevision();
    const resolution = tile.wantedResolution;
    return replayState.renderedTileResolution !== resolution || replayState.renderedTileRevision !== revision;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {import("../../Map").FrameState} frameState Frame state.
   * @private
   */
  renderTileImage_(tile, frameState) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const replayState = tile.getReplayState(layer);
    const revision = layer.getRevision();
    const executorGroups = tile.executorGroups[getUid(layer)];
    replayState.renderedTileRevision = revision;
    const tileCoord = tile.wrappedTileCoord;
    const z = tileCoord[0];
    const source = layer.getSource();
    let pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const tileGrid = source.getTileGridForProjection(projection);
    const tileResolution = tileGrid.getResolution(tile.tileCoord[0]);
    const renderPixelRatio = frameState.pixelRatio / tile.wantedResolution * tileResolution;
    const resolution = tileGrid.getResolution(z);
    const context = tile.getContext(layer);
    pixelRatio = Math.round(
      Math.max(pixelRatio, renderPixelRatio / pixelRatio)
    );
    const size = source.getTilePixelSize(z, pixelRatio, projection);
    context.canvas.width = size[0];
    context.canvas.height = size[1];
    const renderScale = pixelRatio / renderPixelRatio;
    if (renderScale !== 1) {
      const canvasTransform = reset(this.tmpTransform_);
      scale(canvasTransform, renderScale, renderScale);
      context.setTransform.apply(context, canvasTransform);
    }
    const tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tmpExtent);
    const pixelScale = renderPixelRatio / resolution;
    const transform = reset(this.tmpTransform_);
    scale(transform, pixelScale, -pixelScale);
    translate(transform, -tileExtent[0], -tileExtent[3]);
    for (let i = 0, ii = executorGroups.length; i < ii; ++i) {
      const executorGroup = executorGroups[i];
      executorGroup.execute(
        context,
        renderScale,
        transform,
        0,
        true,
        IMAGE_REPLAYS[layer.getRenderMode()]
      );
    }
    replayState.renderedTileResolution = tile.wantedResolution;
  }
};
var VectorTileLayer_default = CanvasVectorTileLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/VectorTile.js
var VectorTileLayer = class extends BaseVector_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = (
      /** @type {Object} */
      Object.assign({}, options)
    );
    delete baseOptions.preload;
    delete baseOptions.useInterimTilesOnError;
    super(
      /** @type {import("./BaseVector.js").Options<import("../source/VectorTile.js").default>} */
      baseOptions
    );
    this.on;
    this.once;
    this.un;
    const renderMode = options.renderMode || "hybrid";
    assert(renderMode == "hybrid" || renderMode == "vector", 28);
    this.renderMode_ = renderMode;
    this.setPreload(options.preload ? options.preload : 0);
    this.setUseInterimTilesOnError(
      options.useInterimTilesOnError !== void 0 ? options.useInterimTilesOnError : true
    );
    this.getBackground;
    this.setBackground;
  }
  createRenderer() {
    return new VectorTileLayer_default(this);
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
   * @return {VectorTileRenderType} The render mode.
   */
  getRenderMode() {
    return this.renderMode_;
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(TileProperty_default.PRELOAD)
    );
  }
  /**
   * Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(TileProperty_default.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(preload) {
    this.set(TileProperty_default.PRELOAD, preload);
  }
  /**
   * Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(useInterimTilesOnError) {
    this.set(TileProperty_default.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
  }
};
var VectorTile_default2 = VectorTileLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/format/JSONFeature.js
var JSONFeature = class extends Feature_default2 {
  constructor() {
    super();
  }
  /**
   * @return {import("./Feature.js").Type} Format.
   */
  getType() {
    return "json";
  }
  /**
   * Read a feature.  Only works for a single feature. Use `readFeatures` to
   * read a feature collection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {import("../Feature.js").default} Feature.
   * @api
   */
  readFeature(source, options) {
    return this.readFeatureFromObject(
      getObject(source),
      this.getReadOptions(source, options)
    );
  }
  /**
   * Read all features.  Works with both a single feature and a feature
   * collection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */
  readFeatures(source, options) {
    return this.readFeaturesFromObject(
      getObject(source),
      this.getReadOptions(source, options)
    );
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../Feature.js").default} Feature.
   */
  readFeatureFromObject(object, options) {
    return abstract();
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {Array<import("../Feature.js").default>} Features.
   */
  readFeaturesFromObject(object, options) {
    return abstract();
  }
  /**
   * Read a geometry.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @return {import("../geom/Geometry.js").default} Geometry.
   * @api
   */
  readGeometry(source, options) {
    return this.readGeometryFromObject(
      getObject(source),
      this.getReadOptions(source, options)
    );
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  readGeometryFromObject(object, options) {
    return abstract();
  }
  /**
   * Read the projection.
   *
   * @param {ArrayBuffer|Document|Element|Object|string} source Source.
   * @return {import("../proj/Projection.js").default} Projection.
   * @api
   */
  readProjection(source) {
    return this.readProjectionFromObject(getObject(source));
  }
  /**
   * @abstract
   * @param {Object} object Object.
   * @protected
   * @return {import("../proj/Projection.js").default} Projection.
   */
  readProjectionFromObject(object) {
    return abstract();
  }
  /**
   * Encode a feature as string.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded feature.
   * @api
   */
  writeFeature(feature, options) {
    return JSON.stringify(this.writeFeatureObject(feature, options));
  }
  /**
   * @abstract
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeFeatureObject(feature, options) {
    return abstract();
  }
  /**
   * Encode an array of features as string.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded features.
   * @api
   */
  writeFeatures(features, options) {
    return JSON.stringify(this.writeFeaturesObject(features, options));
  }
  /**
   * @abstract
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeFeaturesObject(features, options) {
    return abstract();
  }
  /**
   * Encode a geometry as string.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {string} Encoded geometry.
   * @api
   */
  writeGeometry(geometry2, options) {
    return JSON.stringify(this.writeGeometryObject(geometry2, options));
  }
  /**
   * @abstract
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {Object} Object.
   */
  writeGeometryObject(geometry2, options) {
    return abstract();
  }
};
function getObject(source) {
  if (typeof source === "string") {
    const object = JSON.parse(source);
    return object ? (
      /** @type {Object} */
      object
    ) : null;
  } else if (source !== null) {
    return source;
  }
  return null;
}
var JSONFeature_default = JSONFeature;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/format/GeoJSON.js
var GeoJSON = class extends JSONFeature_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    super();
    this.dataProjection = get(
      options.dataProjection ? options.dataProjection : "EPSG:4326"
    );
    if (options.featureProjection) {
      this.defaultFeatureProjection = get(options.featureProjection);
    }
    this.geometryName_ = options.geometryName;
    this.extractGeometryName_ = options.extractGeometryName;
    this.supportedMediaTypes = [
      "application/geo+json",
      "application/vnd.geo+json"
    ];
  }
  /**
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../Feature.js").default} Feature.
   */
  readFeatureFromObject(object, options) {
    let geoJSONFeature = null;
    if (object["type"] === "Feature") {
      geoJSONFeature = /** @type {GeoJSONFeature} */
      object;
    } else {
      geoJSONFeature = {
        "type": "Feature",
        "geometry": (
          /** @type {GeoJSONGeometry} */
          object
        ),
        "properties": null
      };
    }
    const geometry2 = readGeometry(geoJSONFeature["geometry"], options);
    const feature = new Feature_default();
    if (this.geometryName_) {
      feature.setGeometryName(this.geometryName_);
    } else if (this.extractGeometryName_ && "geometry_name" in geoJSONFeature !== void 0) {
      feature.setGeometryName(geoJSONFeature["geometry_name"]);
    }
    feature.setGeometry(geometry2);
    if ("id" in geoJSONFeature) {
      feature.setId(geoJSONFeature["id"]);
    }
    if (geoJSONFeature["properties"]) {
      feature.setProperties(geoJSONFeature["properties"], true);
    }
    return feature;
  }
  /**
   * @param {Object} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {Array<Feature>} Features.
   */
  readFeaturesFromObject(object, options) {
    const geoJSONObject = (
      /** @type {GeoJSONObject} */
      object
    );
    let features = null;
    if (geoJSONObject["type"] === "FeatureCollection") {
      const geoJSONFeatureCollection = (
        /** @type {GeoJSONFeatureCollection} */
        object
      );
      features = [];
      const geoJSONFeatures = geoJSONFeatureCollection["features"];
      for (let i = 0, ii = geoJSONFeatures.length; i < ii; ++i) {
        features.push(this.readFeatureFromObject(geoJSONFeatures[i], options));
      }
    } else {
      features = [this.readFeatureFromObject(object, options)];
    }
    return features;
  }
  /**
   * @param {GeoJSONGeometry} object Object.
   * @param {import("./Feature.js").ReadOptions} [options] Read options.
   * @protected
   * @return {import("../geom/Geometry.js").default} Geometry.
   */
  readGeometryFromObject(object, options) {
    return readGeometry(object, options);
  }
  /**
   * @param {Object} object Object.
   * @protected
   * @return {import("../proj/Projection.js").default} Projection.
   */
  readProjectionFromObject(object) {
    const crs = object["crs"];
    let projection;
    if (crs) {
      if (crs["type"] == "name") {
        projection = get(crs["properties"]["name"]);
      } else if (crs["type"] === "EPSG") {
        projection = get("EPSG:" + crs["properties"]["code"]);
      } else {
        assert(false, 36);
      }
    } else {
      projection = this.dataProjection;
    }
    return (
      /** @type {import("../proj/Projection.js").default} */
      projection
    );
  }
  /**
   * Encode a feature as a GeoJSON Feature object.
   *
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONFeature} Object.
   * @api
   */
  writeFeatureObject(feature, options) {
    options = this.adaptOptions(options);
    const object = {
      "type": "Feature",
      geometry: null,
      properties: null
    };
    const id2 = feature.getId();
    if (id2 !== void 0) {
      object.id = id2;
    }
    if (!feature.hasProperties()) {
      return object;
    }
    const properties2 = feature.getProperties();
    const geometry2 = feature.getGeometry();
    if (geometry2) {
      object.geometry = writeGeometry(geometry2, options);
      delete properties2[feature.getGeometryName()];
    }
    if (!isEmpty(properties2)) {
      object.properties = properties2;
    }
    return object;
  }
  /**
   * Encode an array of features as a GeoJSON object.
   *
   * @param {Array<import("../Feature.js").default>} features Features.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONFeatureCollection} GeoJSON Object.
   * @api
   */
  writeFeaturesObject(features, options) {
    options = this.adaptOptions(options);
    const objects = [];
    for (let i = 0, ii = features.length; i < ii; ++i) {
      objects.push(this.writeFeatureObject(features[i], options));
    }
    return {
      type: "FeatureCollection",
      features: objects
    };
  }
  /**
   * Encode a geometry as a GeoJSON object.
   *
   * @param {import("../geom/Geometry.js").default} geometry Geometry.
   * @param {import("./Feature.js").WriteOptions} [options] Write options.
   * @return {GeoJSONGeometry|GeoJSONGeometryCollection} Object.
   * @api
   */
  writeGeometryObject(geometry2, options) {
    return writeGeometry(geometry2, this.adaptOptions(options));
  }
};
function readGeometry(object, options) {
  if (!object) {
    return null;
  }
  let geometry2;
  switch (object["type"]) {
    case "Point": {
      geometry2 = readPointGeometry(
        /** @type {GeoJSONPoint} */
        object
      );
      break;
    }
    case "LineString": {
      geometry2 = readLineStringGeometry(
        /** @type {GeoJSONLineString} */
        object
      );
      break;
    }
    case "Polygon": {
      geometry2 = readPolygonGeometry(
        /** @type {GeoJSONPolygon} */
        object
      );
      break;
    }
    case "MultiPoint": {
      geometry2 = readMultiPointGeometry(
        /** @type {GeoJSONMultiPoint} */
        object
      );
      break;
    }
    case "MultiLineString": {
      geometry2 = readMultiLineStringGeometry(
        /** @type {GeoJSONMultiLineString} */
        object
      );
      break;
    }
    case "MultiPolygon": {
      geometry2 = readMultiPolygonGeometry(
        /** @type {GeoJSONMultiPolygon} */
        object
      );
      break;
    }
    case "GeometryCollection": {
      geometry2 = readGeometryCollectionGeometry(
        /** @type {GeoJSONGeometryCollection} */
        object
      );
      break;
    }
    default: {
      throw new Error("Unsupported GeoJSON type: " + object["type"]);
    }
  }
  return transformGeometryWithOptions(geometry2, false, options);
}
function readGeometryCollectionGeometry(object, options) {
  const geometries = object["geometries"].map(
    /**
     * @param {GeoJSONGeometry} geometry Geometry.
     * @return {import("../geom/Geometry.js").default} geometry Geometry.
     */
    function(geometry2) {
      return readGeometry(geometry2, options);
    }
  );
  return new GeometryCollection_default(geometries);
}
function readPointGeometry(object) {
  return new Point_default(object["coordinates"]);
}
function readLineStringGeometry(object) {
  return new LineString_default(object["coordinates"]);
}
function readMultiLineStringGeometry(object) {
  return new MultiLineString_default(object["coordinates"]);
}
function readMultiPointGeometry(object) {
  return new MultiPoint_default(object["coordinates"]);
}
function readMultiPolygonGeometry(object) {
  return new MultiPolygon_default(object["coordinates"]);
}
function readPolygonGeometry(object) {
  return new Polygon_default(object["coordinates"]);
}
function writeGeometry(geometry2, options) {
  geometry2 = transformGeometryWithOptions(geometry2, true, options);
  const type = geometry2.getType();
  let geoJSON;
  switch (type) {
    case "Point": {
      geoJSON = writePointGeometry(
        /** @type {Point} */
        geometry2,
        options
      );
      break;
    }
    case "LineString": {
      geoJSON = writeLineStringGeometry(
        /** @type {LineString} */
        geometry2,
        options
      );
      break;
    }
    case "Polygon": {
      geoJSON = writePolygonGeometry(
        /** @type {Polygon} */
        geometry2,
        options
      );
      break;
    }
    case "MultiPoint": {
      geoJSON = writeMultiPointGeometry(
        /** @type {MultiPoint} */
        geometry2,
        options
      );
      break;
    }
    case "MultiLineString": {
      geoJSON = writeMultiLineStringGeometry(
        /** @type {MultiLineString} */
        geometry2,
        options
      );
      break;
    }
    case "MultiPolygon": {
      geoJSON = writeMultiPolygonGeometry(
        /** @type {MultiPolygon} */
        geometry2,
        options
      );
      break;
    }
    case "GeometryCollection": {
      geoJSON = writeGeometryCollectionGeometry(
        /** @type {GeometryCollection} */
        geometry2,
        options
      );
      break;
    }
    case "Circle": {
      geoJSON = {
        type: "GeometryCollection",
        geometries: []
      };
      break;
    }
    default: {
      throw new Error("Unsupported geometry type: " + type);
    }
  }
  return geoJSON;
}
function writeGeometryCollectionGeometry(geometry2, options) {
  options = Object.assign({}, options);
  delete options.featureProjection;
  const geometries = geometry2.getGeometriesArray().map(function(geometry3) {
    return writeGeometry(geometry3, options);
  });
  return {
    type: "GeometryCollection",
    geometries
  };
}
function writeLineStringGeometry(geometry2, options) {
  return {
    type: "LineString",
    coordinates: geometry2.getCoordinates()
  };
}
function writeMultiLineStringGeometry(geometry2, options) {
  return {
    type: "MultiLineString",
    coordinates: geometry2.getCoordinates()
  };
}
function writeMultiPointGeometry(geometry2, options) {
  return {
    type: "MultiPoint",
    coordinates: geometry2.getCoordinates()
  };
}
function writeMultiPolygonGeometry(geometry2, options) {
  let right;
  if (options) {
    right = options.rightHanded;
  }
  return {
    type: "MultiPolygon",
    coordinates: geometry2.getCoordinates(right)
  };
}
function writePointGeometry(geometry2, options) {
  return {
    type: "Point",
    coordinates: geometry2.getCoordinates()
  };
}
function writePolygonGeometry(geometry2, options) {
  let right;
  if (options) {
    right = options.rightHanded;
  }
  return {
    type: "Polygon",
    coordinates: geometry2.getCoordinates(right)
  };
}
var GeoJSON_default = GeoJSON;

// node_modules/.pnpm/ol-mapbox-style@9.7.0/node_modules/ol-mapbox-style/dist/index.js
var csscolorparser = {};
var parseCSSColor_1;
var kCSSColorTable = {
  "transparent": [
    0,
    0,
    0,
    0
  ],
  "aliceblue": [
    240,
    248,
    255,
    1
  ],
  "antiquewhite": [
    250,
    235,
    215,
    1
  ],
  "aqua": [
    0,
    255,
    255,
    1
  ],
  "aquamarine": [
    127,
    255,
    212,
    1
  ],
  "azure": [
    240,
    255,
    255,
    1
  ],
  "beige": [
    245,
    245,
    220,
    1
  ],
  "bisque": [
    255,
    228,
    196,
    1
  ],
  "black": [
    0,
    0,
    0,
    1
  ],
  "blanchedalmond": [
    255,
    235,
    205,
    1
  ],
  "blue": [
    0,
    0,
    255,
    1
  ],
  "blueviolet": [
    138,
    43,
    226,
    1
  ],
  "brown": [
    165,
    42,
    42,
    1
  ],
  "burlywood": [
    222,
    184,
    135,
    1
  ],
  "cadetblue": [
    95,
    158,
    160,
    1
  ],
  "chartreuse": [
    127,
    255,
    0,
    1
  ],
  "chocolate": [
    210,
    105,
    30,
    1
  ],
  "coral": [
    255,
    127,
    80,
    1
  ],
  "cornflowerblue": [
    100,
    149,
    237,
    1
  ],
  "cornsilk": [
    255,
    248,
    220,
    1
  ],
  "crimson": [
    220,
    20,
    60,
    1
  ],
  "cyan": [
    0,
    255,
    255,
    1
  ],
  "darkblue": [
    0,
    0,
    139,
    1
  ],
  "darkcyan": [
    0,
    139,
    139,
    1
  ],
  "darkgoldenrod": [
    184,
    134,
    11,
    1
  ],
  "darkgray": [
    169,
    169,
    169,
    1
  ],
  "darkgreen": [
    0,
    100,
    0,
    1
  ],
  "darkgrey": [
    169,
    169,
    169,
    1
  ],
  "darkkhaki": [
    189,
    183,
    107,
    1
  ],
  "darkmagenta": [
    139,
    0,
    139,
    1
  ],
  "darkolivegreen": [
    85,
    107,
    47,
    1
  ],
  "darkorange": [
    255,
    140,
    0,
    1
  ],
  "darkorchid": [
    153,
    50,
    204,
    1
  ],
  "darkred": [
    139,
    0,
    0,
    1
  ],
  "darksalmon": [
    233,
    150,
    122,
    1
  ],
  "darkseagreen": [
    143,
    188,
    143,
    1
  ],
  "darkslateblue": [
    72,
    61,
    139,
    1
  ],
  "darkslategray": [
    47,
    79,
    79,
    1
  ],
  "darkslategrey": [
    47,
    79,
    79,
    1
  ],
  "darkturquoise": [
    0,
    206,
    209,
    1
  ],
  "darkviolet": [
    148,
    0,
    211,
    1
  ],
  "deeppink": [
    255,
    20,
    147,
    1
  ],
  "deepskyblue": [
    0,
    191,
    255,
    1
  ],
  "dimgray": [
    105,
    105,
    105,
    1
  ],
  "dimgrey": [
    105,
    105,
    105,
    1
  ],
  "dodgerblue": [
    30,
    144,
    255,
    1
  ],
  "firebrick": [
    178,
    34,
    34,
    1
  ],
  "floralwhite": [
    255,
    250,
    240,
    1
  ],
  "forestgreen": [
    34,
    139,
    34,
    1
  ],
  "fuchsia": [
    255,
    0,
    255,
    1
  ],
  "gainsboro": [
    220,
    220,
    220,
    1
  ],
  "ghostwhite": [
    248,
    248,
    255,
    1
  ],
  "gold": [
    255,
    215,
    0,
    1
  ],
  "goldenrod": [
    218,
    165,
    32,
    1
  ],
  "gray": [
    128,
    128,
    128,
    1
  ],
  "green": [
    0,
    128,
    0,
    1
  ],
  "greenyellow": [
    173,
    255,
    47,
    1
  ],
  "grey": [
    128,
    128,
    128,
    1
  ],
  "honeydew": [
    240,
    255,
    240,
    1
  ],
  "hotpink": [
    255,
    105,
    180,
    1
  ],
  "indianred": [
    205,
    92,
    92,
    1
  ],
  "indigo": [
    75,
    0,
    130,
    1
  ],
  "ivory": [
    255,
    255,
    240,
    1
  ],
  "khaki": [
    240,
    230,
    140,
    1
  ],
  "lavender": [
    230,
    230,
    250,
    1
  ],
  "lavenderblush": [
    255,
    240,
    245,
    1
  ],
  "lawngreen": [
    124,
    252,
    0,
    1
  ],
  "lemonchiffon": [
    255,
    250,
    205,
    1
  ],
  "lightblue": [
    173,
    216,
    230,
    1
  ],
  "lightcoral": [
    240,
    128,
    128,
    1
  ],
  "lightcyan": [
    224,
    255,
    255,
    1
  ],
  "lightgoldenrodyellow": [
    250,
    250,
    210,
    1
  ],
  "lightgray": [
    211,
    211,
    211,
    1
  ],
  "lightgreen": [
    144,
    238,
    144,
    1
  ],
  "lightgrey": [
    211,
    211,
    211,
    1
  ],
  "lightpink": [
    255,
    182,
    193,
    1
  ],
  "lightsalmon": [
    255,
    160,
    122,
    1
  ],
  "lightseagreen": [
    32,
    178,
    170,
    1
  ],
  "lightskyblue": [
    135,
    206,
    250,
    1
  ],
  "lightslategray": [
    119,
    136,
    153,
    1
  ],
  "lightslategrey": [
    119,
    136,
    153,
    1
  ],
  "lightsteelblue": [
    176,
    196,
    222,
    1
  ],
  "lightyellow": [
    255,
    255,
    224,
    1
  ],
  "lime": [
    0,
    255,
    0,
    1
  ],
  "limegreen": [
    50,
    205,
    50,
    1
  ],
  "linen": [
    250,
    240,
    230,
    1
  ],
  "magenta": [
    255,
    0,
    255,
    1
  ],
  "maroon": [
    128,
    0,
    0,
    1
  ],
  "mediumaquamarine": [
    102,
    205,
    170,
    1
  ],
  "mediumblue": [
    0,
    0,
    205,
    1
  ],
  "mediumorchid": [
    186,
    85,
    211,
    1
  ],
  "mediumpurple": [
    147,
    112,
    219,
    1
  ],
  "mediumseagreen": [
    60,
    179,
    113,
    1
  ],
  "mediumslateblue": [
    123,
    104,
    238,
    1
  ],
  "mediumspringgreen": [
    0,
    250,
    154,
    1
  ],
  "mediumturquoise": [
    72,
    209,
    204,
    1
  ],
  "mediumvioletred": [
    199,
    21,
    133,
    1
  ],
  "midnightblue": [
    25,
    25,
    112,
    1
  ],
  "mintcream": [
    245,
    255,
    250,
    1
  ],
  "mistyrose": [
    255,
    228,
    225,
    1
  ],
  "moccasin": [
    255,
    228,
    181,
    1
  ],
  "navajowhite": [
    255,
    222,
    173,
    1
  ],
  "navy": [
    0,
    0,
    128,
    1
  ],
  "oldlace": [
    253,
    245,
    230,
    1
  ],
  "olive": [
    128,
    128,
    0,
    1
  ],
  "olivedrab": [
    107,
    142,
    35,
    1
  ],
  "orange": [
    255,
    165,
    0,
    1
  ],
  "orangered": [
    255,
    69,
    0,
    1
  ],
  "orchid": [
    218,
    112,
    214,
    1
  ],
  "palegoldenrod": [
    238,
    232,
    170,
    1
  ],
  "palegreen": [
    152,
    251,
    152,
    1
  ],
  "paleturquoise": [
    175,
    238,
    238,
    1
  ],
  "palevioletred": [
    219,
    112,
    147,
    1
  ],
  "papayawhip": [
    255,
    239,
    213,
    1
  ],
  "peachpuff": [
    255,
    218,
    185,
    1
  ],
  "peru": [
    205,
    133,
    63,
    1
  ],
  "pink": [
    255,
    192,
    203,
    1
  ],
  "plum": [
    221,
    160,
    221,
    1
  ],
  "powderblue": [
    176,
    224,
    230,
    1
  ],
  "purple": [
    128,
    0,
    128,
    1
  ],
  "rebeccapurple": [
    102,
    51,
    153,
    1
  ],
  "red": [
    255,
    0,
    0,
    1
  ],
  "rosybrown": [
    188,
    143,
    143,
    1
  ],
  "royalblue": [
    65,
    105,
    225,
    1
  ],
  "saddlebrown": [
    139,
    69,
    19,
    1
  ],
  "salmon": [
    250,
    128,
    114,
    1
  ],
  "sandybrown": [
    244,
    164,
    96,
    1
  ],
  "seagreen": [
    46,
    139,
    87,
    1
  ],
  "seashell": [
    255,
    245,
    238,
    1
  ],
  "sienna": [
    160,
    82,
    45,
    1
  ],
  "silver": [
    192,
    192,
    192,
    1
  ],
  "skyblue": [
    135,
    206,
    235,
    1
  ],
  "slateblue": [
    106,
    90,
    205,
    1
  ],
  "slategray": [
    112,
    128,
    144,
    1
  ],
  "slategrey": [
    112,
    128,
    144,
    1
  ],
  "snow": [
    255,
    250,
    250,
    1
  ],
  "springgreen": [
    0,
    255,
    127,
    1
  ],
  "steelblue": [
    70,
    130,
    180,
    1
  ],
  "tan": [
    210,
    180,
    140,
    1
  ],
  "teal": [
    0,
    128,
    128,
    1
  ],
  "thistle": [
    216,
    191,
    216,
    1
  ],
  "tomato": [
    255,
    99,
    71,
    1
  ],
  "turquoise": [
    64,
    224,
    208,
    1
  ],
  "violet": [
    238,
    130,
    238,
    1
  ],
  "wheat": [
    245,
    222,
    179,
    1
  ],
  "white": [
    255,
    255,
    255,
    1
  ],
  "whitesmoke": [
    245,
    245,
    245,
    1
  ],
  "yellow": [
    255,
    255,
    0,
    1
  ],
  "yellowgreen": [
    154,
    205,
    50,
    1
  ]
};
function clamp_css_byte(i) {
  i = Math.round(i);
  return i < 0 ? 0 : i > 255 ? 255 : i;
}
function clamp_css_float(f) {
  return f < 0 ? 0 : f > 1 ? 1 : f;
}
function parse_css_int(str) {
  if (str[str.length - 1] === "%") {
    return clamp_css_byte(parseFloat(str) / 100 * 255);
  }
  return clamp_css_byte(parseInt(str));
}
function parse_css_float(str) {
  if (str[str.length - 1] === "%") {
    return clamp_css_float(parseFloat(str) / 100);
  }
  return clamp_css_float(parseFloat(str));
}
function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) {
    h += 1;
  } else if (h > 1) {
    h -= 1;
  }
  if (h * 6 < 1) {
    return m1 + (m2 - m1) * h * 6;
  }
  if (h * 2 < 1) {
    return m2;
  }
  if (h * 3 < 2) {
    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  }
  return m1;
}
function parseCSSColor(css_str) {
  var str = css_str.replace(/ /g, "").toLowerCase();
  if (str in kCSSColorTable) {
    return kCSSColorTable[str].slice();
  }
  if (str[0] === "#") {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16);
      if (!(iv >= 0 && iv <= 4095)) {
        return null;
      }
      return [
        (iv & 3840) >> 4 | (iv & 3840) >> 8,
        iv & 240 | (iv & 240) >> 4,
        iv & 15 | (iv & 15) << 4,
        1
      ];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16);
      if (!(iv >= 0 && iv <= 16777215)) {
        return null;
      }
      return [
        (iv & 16711680) >> 16,
        (iv & 65280) >> 8,
        iv & 255,
        1
      ];
    }
    return null;
  }
  var op = str.indexOf("("), ep = str.indexOf(")");
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op + 1, ep - (op + 1)).split(",");
    var alpha = 1;
    switch (fname) {
      case "rgba":
        if (params.length !== 4) {
          return null;
        }
        alpha = parse_css_float(params.pop());
      case "rgb":
        if (params.length !== 3) {
          return null;
        }
        return [
          parse_css_int(params[0]),
          parse_css_int(params[1]),
          parse_css_int(params[2]),
          alpha
        ];
      case "hsla":
        if (params.length !== 4) {
          return null;
        }
        alpha = parse_css_float(params.pop());
      case "hsl":
        if (params.length !== 3) {
          return null;
        }
        var h = (parseFloat(params[0]) % 360 + 360) % 360 / 360;
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [
          clamp_css_byte(css_hue_to_rgb(m1, m2, h + 1 / 3) * 255),
          clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255),
          clamp_css_byte(css_hue_to_rgb(m1, m2, h - 1 / 3) * 255),
          alpha
        ];
      default:
        return null;
    }
  }
  return null;
}
try {
  parseCSSColor_1 = csscolorparser.parseCSSColor = parseCSSColor;
} catch (e) {
}
var Color = function Color2(r, g, b, a) {
  if (a === void 0)
    a = 1;
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
};
Color.parse = function parse(input) {
  if (!input) {
    return void 0;
  }
  if (input instanceof Color) {
    return input;
  }
  if (typeof input !== "string") {
    return void 0;
  }
  var rgba2 = parseCSSColor_1(input);
  if (!rgba2) {
    return void 0;
  }
  return new Color(rgba2[0] / 255 * rgba2[3], rgba2[1] / 255 * rgba2[3], rgba2[2] / 255 * rgba2[3], rgba2[3]);
};
Color.prototype.toString = function toString() {
  var ref = this.toArray();
  var r = ref[0];
  var g = ref[1];
  var b = ref[2];
  var a = ref[3];
  return "rgba(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + "," + a + ")";
};
Color.prototype.toArray = function toArray() {
  var ref = this;
  var r = ref.r;
  var g = ref.g;
  var b = ref.b;
  var a = ref.a;
  return a === 0 ? [
    0,
    0,
    0,
    0
  ] : [
    r * 255 / a,
    g * 255 / a,
    b * 255 / a,
    a
  ];
};
Color.prototype.toArray01 = function toArray01() {
  var ref = this;
  var r = ref.r;
  var g = ref.g;
  var b = ref.b;
  var a = ref.a;
  return a === 0 ? [
    0,
    0,
    0,
    0
  ] : [
    r / a,
    g / a,
    b / a,
    a
  ];
};
Color.prototype.toArray01PremultipliedAlpha = function toArray01PremultipliedAlpha() {
  var ref = this;
  var r = ref.r;
  var g = ref.g;
  var b = ref.b;
  var a = ref.a;
  return [
    r,
    g,
    b,
    a
  ];
};
Color.black = new Color(0, 0, 0, 1);
Color.white = new Color(1, 1, 1, 1);
Color.transparent = new Color(0, 0, 0, 0);
Color.red = new Color(1, 0, 0, 1);
Color.blue = new Color(0, 0, 1, 1);
var Color$1 = Color;
function convertLiteral(value) {
  return typeof value === "object" ? [
    "literal",
    value
  ] : value;
}
function convertFunction(parameters, propertySpec) {
  var stops = parameters.stops;
  if (!stops) {
    return convertIdentityFunction(parameters, propertySpec);
  }
  var zoomAndFeatureDependent = stops && typeof stops[0][0] === "object";
  var featureDependent = zoomAndFeatureDependent || parameters.property !== void 0;
  var zoomDependent = zoomAndFeatureDependent || !featureDependent;
  stops = stops.map(function(stop) {
    if (!featureDependent && propertySpec.tokens && typeof stop[1] === "string") {
      return [
        stop[0],
        convertTokenString(stop[1])
      ];
    }
    return [
      stop[0],
      convertLiteral(stop[1])
    ];
  });
  if (zoomAndFeatureDependent) {
    return convertZoomAndPropertyFunction(parameters, propertySpec, stops);
  } else if (zoomDependent) {
    return convertZoomFunction(parameters, propertySpec, stops);
  } else {
    return convertPropertyFunction(parameters, propertySpec, stops);
  }
}
function convertIdentityFunction(parameters, propertySpec) {
  var get4 = [
    "get",
    parameters.property
  ];
  if (parameters.default === void 0) {
    return propertySpec.type === "string" ? [
      "string",
      get4
    ] : get4;
  } else if (propertySpec.type === "enum") {
    return [
      "match",
      get4,
      Object.keys(propertySpec.values),
      get4,
      parameters.default
    ];
  } else {
    var expression = [
      propertySpec.type === "color" ? "to-color" : propertySpec.type,
      get4,
      convertLiteral(parameters.default)
    ];
    if (propertySpec.type === "array") {
      expression.splice(1, 0, propertySpec.value, propertySpec.length || null);
    }
    return expression;
  }
}
function getInterpolateOperator(parameters) {
  switch (parameters.colorSpace) {
    case "hcl":
      return "interpolate-hcl";
    case "lab":
      return "interpolate-lab";
    default:
      return "interpolate";
  }
}
function convertZoomAndPropertyFunction(parameters, propertySpec, stops) {
  var featureFunctionParameters = {};
  var featureFunctionStops = {};
  var zoomStops = [];
  for (var s = 0; s < stops.length; s++) {
    var stop = stops[s];
    var zoom = stop[0].zoom;
    if (featureFunctionParameters[zoom] === void 0) {
      featureFunctionParameters[zoom] = {
        zoom,
        type: parameters.type,
        property: parameters.property,
        default: parameters.default
      };
      featureFunctionStops[zoom] = [];
      zoomStops.push(zoom);
    }
    featureFunctionStops[zoom].push([
      stop[0].value,
      stop[1]
    ]);
  }
  var functionType = getFunctionType({}, propertySpec);
  if (functionType === "exponential") {
    var expression = [
      getInterpolateOperator(parameters),
      ["linear"],
      ["zoom"]
    ];
    for (var i = 0, list = zoomStops; i < list.length; i += 1) {
      var z = list[i];
      var output = convertPropertyFunction(featureFunctionParameters[z], propertySpec, featureFunctionStops[z]);
      appendStopPair(expression, z, output, false);
    }
    return expression;
  } else {
    var expression$1 = [
      "step",
      ["zoom"]
    ];
    for (var i$1 = 0, list$1 = zoomStops; i$1 < list$1.length; i$1 += 1) {
      var z$1 = list$1[i$1];
      var output$1 = convertPropertyFunction(featureFunctionParameters[z$1], propertySpec, featureFunctionStops[z$1]);
      appendStopPair(expression$1, z$1, output$1, true);
    }
    fixupDegenerateStepCurve(expression$1);
    return expression$1;
  }
}
function coalesce(a, b) {
  if (a !== void 0) {
    return a;
  }
  if (b !== void 0) {
    return b;
  }
}
function getFallback(parameters, propertySpec) {
  var defaultValue = convertLiteral(coalesce(parameters.default, propertySpec.default));
  if (defaultValue === void 0 && propertySpec.type === "resolvedImage") {
    return "";
  }
  return defaultValue;
}
function convertPropertyFunction(parameters, propertySpec, stops) {
  var type = getFunctionType(parameters, propertySpec);
  var get4 = [
    "get",
    parameters.property
  ];
  if (type === "categorical" && typeof stops[0][0] === "boolean") {
    var expression = ["case"];
    for (var i = 0, list = stops; i < list.length; i += 1) {
      var stop = list[i];
      expression.push([
        "==",
        get4,
        stop[0]
      ], stop[1]);
    }
    expression.push(getFallback(parameters, propertySpec));
    return expression;
  } else if (type === "categorical") {
    var expression$1 = [
      "match",
      get4
    ];
    for (var i$1 = 0, list$1 = stops; i$1 < list$1.length; i$1 += 1) {
      var stop$1 = list$1[i$1];
      appendStopPair(expression$1, stop$1[0], stop$1[1], false);
    }
    expression$1.push(getFallback(parameters, propertySpec));
    return expression$1;
  } else if (type === "interval") {
    var expression$2 = [
      "step",
      [
        "number",
        get4
      ]
    ];
    for (var i$2 = 0, list$2 = stops; i$2 < list$2.length; i$2 += 1) {
      var stop$2 = list$2[i$2];
      appendStopPair(expression$2, stop$2[0], stop$2[1], true);
    }
    fixupDegenerateStepCurve(expression$2);
    return parameters.default === void 0 ? expression$2 : [
      "case",
      [
        "==",
        [
          "typeof",
          get4
        ],
        "number"
      ],
      expression$2,
      convertLiteral(parameters.default)
    ];
  } else if (type === "exponential") {
    var base = parameters.base !== void 0 ? parameters.base : 1;
    var expression$3 = [
      getInterpolateOperator(parameters),
      base === 1 ? ["linear"] : [
        "exponential",
        base
      ],
      [
        "number",
        get4
      ]
    ];
    for (var i$3 = 0, list$3 = stops; i$3 < list$3.length; i$3 += 1) {
      var stop$3 = list$3[i$3];
      appendStopPair(expression$3, stop$3[0], stop$3[1], false);
    }
    return parameters.default === void 0 ? expression$3 : [
      "case",
      [
        "==",
        [
          "typeof",
          get4
        ],
        "number"
      ],
      expression$3,
      convertLiteral(parameters.default)
    ];
  } else {
    throw new Error("Unknown property function type " + type);
  }
}
function convertZoomFunction(parameters, propertySpec, stops, input) {
  if (input === void 0)
    input = ["zoom"];
  var type = getFunctionType(parameters, propertySpec);
  var expression;
  var isStep = false;
  if (type === "interval") {
    expression = [
      "step",
      input
    ];
    isStep = true;
  } else if (type === "exponential") {
    var base = parameters.base !== void 0 ? parameters.base : 1;
    expression = [
      getInterpolateOperator(parameters),
      base === 1 ? ["linear"] : [
        "exponential",
        base
      ],
      input
    ];
  } else {
    throw new Error('Unknown zoom function type "' + type + '"');
  }
  for (var i = 0, list = stops; i < list.length; i += 1) {
    var stop = list[i];
    appendStopPair(expression, stop[0], stop[1], isStep);
  }
  fixupDegenerateStepCurve(expression);
  return expression;
}
function fixupDegenerateStepCurve(expression) {
  if (expression[0] === "step" && expression.length === 3) {
    expression.push(0);
    expression.push(expression[3]);
  }
}
function appendStopPair(curve, input, output, isStep) {
  if (curve.length > 3 && input === curve[curve.length - 2]) {
    return;
  }
  if (!(isStep && curve.length === 2)) {
    curve.push(input);
  }
  curve.push(output);
}
function getFunctionType(parameters, propertySpec) {
  if (parameters.type) {
    return parameters.type;
  } else {
    return propertySpec.expression.interpolated ? "exponential" : "interval";
  }
}
function convertTokenString(s) {
  var result = ["concat"];
  var re = /{([^{}]+)}/g;
  var pos = 0;
  for (var match = re.exec(s); match !== null; match = re.exec(s)) {
    var literal = s.slice(pos, re.lastIndex - match[0].length);
    pos = re.lastIndex;
    if (literal.length > 0) {
      result.push(literal);
    }
    result.push([
      "get",
      match[1]
    ]);
  }
  if (result.length === 1) {
    return s;
  }
  if (pos < s.length) {
    result.push(s.slice(pos));
  } else if (result.length === 2) {
    return [
      "to-string",
      result[1]
    ];
  }
  return result;
}
var ParsingError = function(Error2) {
  function ParsingError2(key, message) {
    Error2.call(this, message);
    this.message = message;
    this.key = key;
  }
  if (Error2)
    ParsingError2.__proto__ = Error2;
  ParsingError2.prototype = Object.create(Error2 && Error2.prototype);
  ParsingError2.prototype.constructor = ParsingError2;
  return ParsingError2;
}(Error);
var ParsingError$1 = ParsingError;
var Scope = function Scope2(parent, bindings) {
  if (bindings === void 0)
    bindings = [];
  this.parent = parent;
  this.bindings = {};
  for (var i = 0, list = bindings; i < list.length; i += 1) {
    var ref = list[i];
    var name = ref[0];
    var expression = ref[1];
    this.bindings[name] = expression;
  }
};
Scope.prototype.concat = function concat(bindings) {
  return new Scope(this, bindings);
};
Scope.prototype.get = function get2(name) {
  if (this.bindings[name]) {
    return this.bindings[name];
  }
  if (this.parent) {
    return this.parent.get(name);
  }
  throw new Error(name + " not found in scope.");
};
Scope.prototype.has = function has(name) {
  if (this.bindings[name]) {
    return true;
  }
  return this.parent ? this.parent.has(name) : false;
};
var Scope$1 = Scope;
var NullType = { kind: "null" };
var NumberType = { kind: "number" };
var StringType = { kind: "string" };
var BooleanType = { kind: "boolean" };
var ColorType = { kind: "color" };
var ObjectType = { kind: "object" };
var ValueType = { kind: "value" };
var ErrorType = { kind: "error" };
var CollatorType = { kind: "collator" };
var FormattedType = { kind: "formatted" };
var ResolvedImageType = { kind: "resolvedImage" };
function array$1(itemType, N) {
  return {
    kind: "array",
    itemType,
    N
  };
}
function toString$1(type) {
  if (type.kind === "array") {
    var itemType = toString$1(type.itemType);
    return typeof type.N === "number" ? "array<" + itemType + ", " + type.N + ">" : type.itemType.kind === "value" ? "array" : "array<" + itemType + ">";
  } else {
    return type.kind;
  }
}
var valueMemberTypes = [
  NullType,
  NumberType,
  StringType,
  BooleanType,
  ColorType,
  FormattedType,
  ObjectType,
  array$1(ValueType),
  ResolvedImageType
];
function checkSubtype(expected, t) {
  if (t.kind === "error") {
    return null;
  } else if (expected.kind === "array") {
    if (t.kind === "array" && (t.N === 0 && t.itemType.kind === "value" || !checkSubtype(expected.itemType, t.itemType)) && (typeof expected.N !== "number" || expected.N === t.N)) {
      return null;
    }
  } else if (expected.kind === t.kind) {
    return null;
  } else if (expected.kind === "value") {
    for (var i = 0, list = valueMemberTypes; i < list.length; i += 1) {
      var memberType = list[i];
      if (!checkSubtype(memberType, t)) {
        return null;
      }
    }
  }
  return "Expected " + toString$1(expected) + " but found " + toString$1(t) + " instead.";
}
function isValidType(provided, allowedTypes) {
  return allowedTypes.some(function(t) {
    return t.kind === provided.kind;
  });
}
function isValidNativeType(provided, allowedTypes) {
  return allowedTypes.some(function(t) {
    if (t === "null") {
      return provided === null;
    } else if (t === "array") {
      return Array.isArray(provided);
    } else if (t === "object") {
      return provided && !Array.isArray(provided) && typeof provided === "object";
    } else {
      return t === typeof provided;
    }
  });
}
var Collator = function Collator2(caseSensitive, diacriticSensitive, locale) {
  if (caseSensitive) {
    this.sensitivity = diacriticSensitive ? "variant" : "case";
  } else {
    this.sensitivity = diacriticSensitive ? "accent" : "base";
  }
  this.locale = locale;
  this.collator = new Intl.Collator(this.locale ? this.locale : [], {
    sensitivity: this.sensitivity,
    usage: "search"
  });
};
Collator.prototype.compare = function compare(lhs, rhs) {
  return this.collator.compare(lhs, rhs);
};
Collator.prototype.resolvedLocale = function resolvedLocale() {
  return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
};
var Collator$1 = Collator;
var FormattedSection = function FormattedSection2(text, image, scale2, fontStack, textColor) {
  this.text = text.normalize ? text.normalize() : text;
  this.image = image;
  this.scale = scale2;
  this.fontStack = fontStack;
  this.textColor = textColor;
};
var Formatted = function Formatted2(sections) {
  this.sections = sections;
};
Formatted.fromString = function fromString2(unformatted) {
  return new Formatted([new FormattedSection(unformatted, null, null, null, null)]);
};
Formatted.prototype.isEmpty = function isEmpty3() {
  if (this.sections.length === 0) {
    return true;
  }
  return !this.sections.some(function(section) {
    return section.text.length !== 0 || section.image && section.image.name.length !== 0;
  });
};
Formatted.factory = function factory(text) {
  if (text instanceof Formatted) {
    return text;
  } else {
    return Formatted.fromString(text);
  }
};
Formatted.prototype.toString = function toString2() {
  if (this.sections.length === 0) {
    return "";
  }
  return this.sections.map(function(section) {
    return section.text;
  }).join("");
};
Formatted.prototype.serialize = function serialize() {
  var serialized = ["format"];
  for (var i = 0, list = this.sections; i < list.length; i += 1) {
    var section = list[i];
    if (section.image) {
      serialized.push([
        "image",
        section.image.name
      ]);
      continue;
    }
    serialized.push(section.text);
    var options = {};
    if (section.fontStack) {
      options["text-font"] = [
        "literal",
        section.fontStack.split(",")
      ];
    }
    if (section.scale) {
      options["font-scale"] = section.scale;
    }
    if (section.textColor) {
      options["text-color"] = ["rgba"].concat(section.textColor.toArray());
    }
    serialized.push(options);
  }
  return serialized;
};
var Formatted$1 = Formatted;
var ResolvedImage = function ResolvedImage2(options) {
  this.name = options.name;
  this.available = options.available;
};
ResolvedImage.prototype.toString = function toString3() {
  return this.name;
};
ResolvedImage.fromString = function fromString3(name) {
  if (!name) {
    return null;
  }
  return new ResolvedImage({
    name,
    available: false
  });
};
ResolvedImage.prototype.serialize = function serialize2() {
  return [
    "image",
    this.name
  ];
};
var ResolvedImage$1 = ResolvedImage;
function validateRGBA(r, g, b, a) {
  if (!(typeof r === "number" && r >= 0 && r <= 255 && typeof g === "number" && g >= 0 && g <= 255 && typeof b === "number" && b >= 0 && b <= 255)) {
    var value = typeof a === "number" ? [
      r,
      g,
      b,
      a
    ] : [
      r,
      g,
      b
    ];
    return "Invalid rgba value [" + value.join(", ") + "]: 'r', 'g', and 'b' must be between 0 and 255.";
  }
  if (!(typeof a === "undefined" || typeof a === "number" && a >= 0 && a <= 1)) {
    return "Invalid rgba value [" + [
      r,
      g,
      b,
      a
    ].join(", ") + "]: 'a' must be between 0 and 1.";
  }
  return null;
}
function isValue(mixed) {
  if (mixed === null) {
    return true;
  } else if (typeof mixed === "string") {
    return true;
  } else if (typeof mixed === "boolean") {
    return true;
  } else if (typeof mixed === "number") {
    return true;
  } else if (mixed instanceof Color$1) {
    return true;
  } else if (mixed instanceof Collator$1) {
    return true;
  } else if (mixed instanceof Formatted$1) {
    return true;
  } else if (mixed instanceof ResolvedImage$1) {
    return true;
  } else if (Array.isArray(mixed)) {
    for (var i = 0, list = mixed; i < list.length; i += 1) {
      var item = list[i];
      if (!isValue(item)) {
        return false;
      }
    }
    return true;
  } else if (typeof mixed === "object") {
    for (var key in mixed) {
      if (!isValue(mixed[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function typeOf(value) {
  if (value === null) {
    return NullType;
  } else if (typeof value === "string") {
    return StringType;
  } else if (typeof value === "boolean") {
    return BooleanType;
  } else if (typeof value === "number") {
    return NumberType;
  } else if (value instanceof Color$1) {
    return ColorType;
  } else if (value instanceof Collator$1) {
    return CollatorType;
  } else if (value instanceof Formatted$1) {
    return FormattedType;
  } else if (value instanceof ResolvedImage$1) {
    return ResolvedImageType;
  } else if (Array.isArray(value)) {
    var length = value.length;
    var itemType;
    for (var i = 0, list = value; i < list.length; i += 1) {
      var item = list[i];
      var t = typeOf(item);
      if (!itemType) {
        itemType = t;
      } else if (itemType === t) {
        continue;
      } else {
        itemType = ValueType;
        break;
      }
    }
    return array$1(itemType || ValueType, length);
  } else {
    return ObjectType;
  }
}
function toString4(value) {
  var type = typeof value;
  if (value === null) {
    return "";
  } else if (type === "string" || type === "number" || type === "boolean") {
    return String(value);
  } else if (value instanceof Color$1 || value instanceof Formatted$1 || value instanceof ResolvedImage$1) {
    return value.toString();
  } else {
    return JSON.stringify(value);
  }
}
var Literal = function Literal2(type, value) {
  this.type = type;
  this.value = value;
};
Literal.parse = function parse2(args, context) {
  if (args.length !== 2) {
    return context.error("'literal' expression requires exactly one argument, but found " + (args.length - 1) + " instead.");
  }
  if (!isValue(args[1])) {
    return context.error("invalid value");
  }
  var value = args[1];
  var type = typeOf(value);
  var expected = context.expectedType;
  if (type.kind === "array" && type.N === 0 && expected && expected.kind === "array" && (typeof expected.N !== "number" || expected.N === 0)) {
    type = expected;
  }
  return new Literal(type, value);
};
Literal.prototype.evaluate = function evaluate() {
  return this.value;
};
Literal.prototype.eachChild = function eachChild() {
};
Literal.prototype.outputDefined = function outputDefined() {
  return true;
};
Literal.prototype.serialize = function serialize3() {
  if (this.type.kind === "array" || this.type.kind === "object") {
    return [
      "literal",
      this.value
    ];
  } else if (this.value instanceof Color$1) {
    return ["rgba"].concat(this.value.toArray());
  } else if (this.value instanceof Formatted$1) {
    return this.value.serialize();
  } else {
    return this.value;
  }
};
var Literal$1 = Literal;
var RuntimeError = function RuntimeError2(message) {
  this.name = "ExpressionEvaluationError";
  this.message = message;
};
RuntimeError.prototype.toJSON = function toJSON() {
  return this.message;
};
var RuntimeError$1 = RuntimeError;
var types$2 = {
  string: StringType,
  number: NumberType,
  boolean: BooleanType,
  object: ObjectType
};
var Assertion = function Assertion2(type, args) {
  this.type = type;
  this.args = args;
};
Assertion.parse = function parse3(args, context) {
  if (args.length < 2) {
    return context.error("Expected at least one argument.");
  }
  var i = 1;
  var type;
  var name = args[0];
  if (name === "array") {
    var itemType;
    if (args.length > 2) {
      var type$1 = args[1];
      if (typeof type$1 !== "string" || !(type$1 in types$2) || type$1 === "object") {
        return context.error('The item type argument of "array" must be one of string, number, boolean', 1);
      }
      itemType = types$2[type$1];
      i++;
    } else {
      itemType = ValueType;
    }
    var N;
    if (args.length > 3) {
      if (args[2] !== null && (typeof args[2] !== "number" || args[2] < 0 || args[2] !== Math.floor(args[2]))) {
        return context.error('The length argument to "array" must be a positive integer literal', 2);
      }
      N = args[2];
      i++;
    }
    type = array$1(itemType, N);
  } else {
    type = types$2[name];
  }
  var parsed = [];
  for (; i < args.length; i++) {
    var input = context.parse(args[i], i, ValueType);
    if (!input) {
      return null;
    }
    parsed.push(input);
  }
  return new Assertion(type, parsed);
};
Assertion.prototype.evaluate = function evaluate2(ctx) {
  for (var i = 0; i < this.args.length; i++) {
    var value = this.args[i].evaluate(ctx);
    var error3 = checkSubtype(this.type, typeOf(value));
    if (!error3) {
      return value;
    } else if (i === this.args.length - 1) {
      throw new RuntimeError$1("Expected value to be of type " + toString$1(this.type) + ", but found " + toString$1(typeOf(value)) + " instead.");
    }
  }
  return null;
};
Assertion.prototype.eachChild = function eachChild2(fn) {
  this.args.forEach(fn);
};
Assertion.prototype.outputDefined = function outputDefined2() {
  return this.args.every(function(arg) {
    return arg.outputDefined();
  });
};
Assertion.prototype.serialize = function serialize4() {
  var type = this.type;
  var serialized = [type.kind];
  if (type.kind === "array") {
    var itemType = type.itemType;
    if (itemType.kind === "string" || itemType.kind === "number" || itemType.kind === "boolean") {
      serialized.push(itemType.kind);
      var N = type.N;
      if (typeof N === "number" || this.args.length > 1) {
        serialized.push(N);
      }
    }
  }
  return serialized.concat(this.args.map(function(arg) {
    return arg.serialize();
  }));
};
var Assertion$1 = Assertion;
var FormatExpression = function FormatExpression2(sections) {
  this.type = FormattedType;
  this.sections = sections;
};
FormatExpression.parse = function parse4(args, context) {
  if (args.length < 2) {
    return context.error("Expected at least one argument.");
  }
  var firstArg = args[1];
  if (!Array.isArray(firstArg) && typeof firstArg === "object") {
    return context.error("First argument must be an image or text section.");
  }
  var sections = [];
  var nextTokenMayBeObject = false;
  for (var i = 1; i <= args.length - 1; ++i) {
    var arg = args[i];
    if (nextTokenMayBeObject && typeof arg === "object" && !Array.isArray(arg)) {
      nextTokenMayBeObject = false;
      var scale2 = null;
      if (arg["font-scale"]) {
        scale2 = context.parse(arg["font-scale"], 1, NumberType);
        if (!scale2) {
          return null;
        }
      }
      var font = null;
      if (arg["text-font"]) {
        font = context.parse(arg["text-font"], 1, array$1(StringType));
        if (!font) {
          return null;
        }
      }
      var textColor = null;
      if (arg["text-color"]) {
        textColor = context.parse(arg["text-color"], 1, ColorType);
        if (!textColor) {
          return null;
        }
      }
      var lastExpression = sections[sections.length - 1];
      lastExpression.scale = scale2;
      lastExpression.font = font;
      lastExpression.textColor = textColor;
    } else {
      var content = context.parse(args[i], 1, ValueType);
      if (!content) {
        return null;
      }
      var kind = content.type.kind;
      if (kind !== "string" && kind !== "value" && kind !== "null" && kind !== "resolvedImage") {
        return context.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
      }
      nextTokenMayBeObject = true;
      sections.push({
        content,
        scale: null,
        font: null,
        textColor: null
      });
    }
  }
  return new FormatExpression(sections);
};
FormatExpression.prototype.evaluate = function evaluate3(ctx) {
  var evaluateSection = function(section) {
    var evaluatedContent = section.content.evaluate(ctx);
    if (typeOf(evaluatedContent) === ResolvedImageType) {
      return new FormattedSection("", evaluatedContent, null, null, null);
    }
    return new FormattedSection(toString4(evaluatedContent), null, section.scale ? section.scale.evaluate(ctx) : null, section.font ? section.font.evaluate(ctx).join(",") : null, section.textColor ? section.textColor.evaluate(ctx) : null);
  };
  return new Formatted$1(this.sections.map(evaluateSection));
};
FormatExpression.prototype.eachChild = function eachChild3(fn) {
  for (var i = 0, list = this.sections; i < list.length; i += 1) {
    var section = list[i];
    fn(section.content);
    if (section.scale) {
      fn(section.scale);
    }
    if (section.font) {
      fn(section.font);
    }
    if (section.textColor) {
      fn(section.textColor);
    }
  }
};
FormatExpression.prototype.outputDefined = function outputDefined3() {
  return false;
};
FormatExpression.prototype.serialize = function serialize5() {
  var serialized = ["format"];
  for (var i = 0, list = this.sections; i < list.length; i += 1) {
    var section = list[i];
    serialized.push(section.content.serialize());
    var options = {};
    if (section.scale) {
      options["font-scale"] = section.scale.serialize();
    }
    if (section.font) {
      options["text-font"] = section.font.serialize();
    }
    if (section.textColor) {
      options["text-color"] = section.textColor.serialize();
    }
    serialized.push(options);
  }
  return serialized;
};
var FormatExpression$1 = FormatExpression;
var ImageExpression = function ImageExpression2(input) {
  this.type = ResolvedImageType;
  this.input = input;
};
ImageExpression.parse = function parse5(args, context) {
  if (args.length !== 2) {
    return context.error("Expected two arguments.");
  }
  var name = context.parse(args[1], 1, StringType);
  if (!name) {
    return context.error("No image name provided.");
  }
  return new ImageExpression(name);
};
ImageExpression.prototype.evaluate = function evaluate4(ctx) {
  var evaluatedImageName = this.input.evaluate(ctx);
  var value = ResolvedImage$1.fromString(evaluatedImageName);
  if (value && ctx.availableImages) {
    value.available = ctx.availableImages.indexOf(evaluatedImageName) > -1;
  }
  return value;
};
ImageExpression.prototype.eachChild = function eachChild4(fn) {
  fn(this.input);
};
ImageExpression.prototype.outputDefined = function outputDefined4() {
  return false;
};
ImageExpression.prototype.serialize = function serialize6() {
  return [
    "image",
    this.input.serialize()
  ];
};
var ImageExpression$1 = ImageExpression;
var types$1 = {
  "to-boolean": BooleanType,
  "to-color": ColorType,
  "to-number": NumberType,
  "to-string": StringType
};
var Coercion = function Coercion2(type, args) {
  this.type = type;
  this.args = args;
};
Coercion.parse = function parse6(args, context) {
  if (args.length < 2) {
    return context.error("Expected at least one argument.");
  }
  var name = args[0];
  if ((name === "to-boolean" || name === "to-string") && args.length !== 2) {
    return context.error("Expected one argument.");
  }
  var type = types$1[name];
  var parsed = [];
  for (var i = 1; i < args.length; i++) {
    var input = context.parse(args[i], i, ValueType);
    if (!input) {
      return null;
    }
    parsed.push(input);
  }
  return new Coercion(type, parsed);
};
Coercion.prototype.evaluate = function evaluate5(ctx) {
  if (this.type.kind === "boolean") {
    return Boolean(this.args[0].evaluate(ctx));
  } else if (this.type.kind === "color") {
    var input;
    var error3;
    for (var i = 0, list = this.args; i < list.length; i += 1) {
      var arg = list[i];
      input = arg.evaluate(ctx);
      error3 = null;
      if (input instanceof Color$1) {
        return input;
      } else if (typeof input === "string") {
        var c = ctx.parseColor(input);
        if (c) {
          return c;
        }
      } else if (Array.isArray(input)) {
        if (input.length < 3 || input.length > 4) {
          error3 = "Invalid rbga value " + JSON.stringify(input) + ": expected an array containing either three or four numeric values.";
        } else {
          error3 = validateRGBA(input[0], input[1], input[2], input[3]);
        }
        if (!error3) {
          return new Color$1(input[0] / 255, input[1] / 255, input[2] / 255, input[3]);
        }
      }
    }
    throw new RuntimeError$1(error3 || "Could not parse color from value '" + (typeof input === "string" ? input : String(JSON.stringify(input))) + "'");
  } else if (this.type.kind === "number") {
    var value = null;
    for (var i$1 = 0, list$1 = this.args; i$1 < list$1.length; i$1 += 1) {
      var arg$1 = list$1[i$1];
      value = arg$1.evaluate(ctx);
      if (value === null) {
        return 0;
      }
      var num = Number(value);
      if (isNaN(num)) {
        continue;
      }
      return num;
    }
    throw new RuntimeError$1("Could not convert " + JSON.stringify(value) + " to number.");
  } else if (this.type.kind === "formatted") {
    return Formatted$1.fromString(toString4(this.args[0].evaluate(ctx)));
  } else if (this.type.kind === "resolvedImage") {
    return ResolvedImage$1.fromString(toString4(this.args[0].evaluate(ctx)));
  } else {
    return toString4(this.args[0].evaluate(ctx));
  }
};
Coercion.prototype.eachChild = function eachChild5(fn) {
  this.args.forEach(fn);
};
Coercion.prototype.outputDefined = function outputDefined5() {
  return this.args.every(function(arg) {
    return arg.outputDefined();
  });
};
Coercion.prototype.serialize = function serialize7() {
  if (this.type.kind === "formatted") {
    return new FormatExpression$1([{
      content: this.args[0],
      scale: null,
      font: null,
      textColor: null
    }]).serialize();
  }
  if (this.type.kind === "resolvedImage") {
    return new ImageExpression$1(this.args[0]).serialize();
  }
  var serialized = ["to-" + this.type.kind];
  this.eachChild(function(child) {
    serialized.push(child.serialize());
  });
  return serialized;
};
var Coercion$1 = Coercion;
var geometryTypes = [
  "Unknown",
  "Point",
  "LineString",
  "Polygon"
];
var EvaluationContext = function EvaluationContext2() {
  this.globals = null;
  this.feature = null;
  this.featureState = null;
  this.formattedSection = null;
  this._parseColorCache = {};
  this.availableImages = null;
  this.canonical = null;
  this.featureTileCoord = null;
  this.featureDistanceData = null;
};
EvaluationContext.prototype.id = function id() {
  return this.feature && this.feature.id !== void 0 ? this.feature.id : null;
};
EvaluationContext.prototype.geometryType = function geometryType() {
  return this.feature ? typeof this.feature.type === "number" ? geometryTypes[this.feature.type] : this.feature.type : null;
};
EvaluationContext.prototype.geometry = function geometry() {
  return this.feature && "geometry" in this.feature ? this.feature.geometry : null;
};
EvaluationContext.prototype.canonicalID = function canonicalID() {
  return this.canonical;
};
EvaluationContext.prototype.properties = function properties() {
  return this.feature && this.feature.properties || {};
};
EvaluationContext.prototype.distanceFromCenter = function distanceFromCenter() {
  if (this.featureTileCoord && this.featureDistanceData) {
    var c = this.featureDistanceData.center;
    var scale2 = this.featureDistanceData.scale;
    var ref = this.featureTileCoord;
    var x = ref.x;
    var y = ref.y;
    var dX = x * scale2 - c[0];
    var dY = y * scale2 - c[1];
    var bX = this.featureDistanceData.bearing[0];
    var bY = this.featureDistanceData.bearing[1];
    var dist = bX * dX + bY * dY;
    return dist;
  }
  return 0;
};
EvaluationContext.prototype.parseColor = function parseColor(input) {
  var cached = this._parseColorCache[input];
  if (!cached) {
    cached = this._parseColorCache[input] = Color$1.parse(input);
  }
  return cached;
};
var EvaluationContext$1 = EvaluationContext;
var CompoundExpression = function CompoundExpression2(name, type, evaluate25, args) {
  this.name = name;
  this.type = type;
  this._evaluate = evaluate25;
  this.args = args;
};
CompoundExpression.prototype.evaluate = function evaluate6(ctx) {
  return this._evaluate(ctx, this.args);
};
CompoundExpression.prototype.eachChild = function eachChild6(fn) {
  this.args.forEach(fn);
};
CompoundExpression.prototype.outputDefined = function outputDefined6() {
  return false;
};
CompoundExpression.prototype.serialize = function serialize8() {
  return [this.name].concat(this.args.map(function(arg) {
    return arg.serialize();
  }));
};
CompoundExpression.parse = function parse7(args, context) {
  var ref$1;
  var op = args[0];
  var definition = CompoundExpression.definitions[op];
  if (!definition) {
    return context.error('Unknown expression "' + op + '". If you wanted a literal array, use ["literal", [...]].', 0);
  }
  var type = Array.isArray(definition) ? definition[0] : definition.type;
  var availableOverloads = Array.isArray(definition) ? [[
    definition[1],
    definition[2]
  ]] : definition.overloads;
  var overloads = availableOverloads.filter(
    function(ref2) {
      var signature = ref2[0];
      return !Array.isArray(signature) || // varags
      signature.length === args.length - 1;
    }
    // correct param count
  );
  var signatureContext = null;
  for (var i$3 = 0, list = overloads; i$3 < list.length; i$3 += 1) {
    var ref = list[i$3];
    var params = ref[0];
    var evaluate25 = ref[1];
    signatureContext = new ParsingContext$1(context.registry, context.path, null, context.scope);
    var parsedArgs = [];
    var argParseFailed = false;
    for (var i = 1; i < args.length; i++) {
      var arg = args[i];
      var expectedType = Array.isArray(params) ? params[i - 1] : params.type;
      var parsed = signatureContext.parse(arg, 1 + parsedArgs.length, expectedType);
      if (!parsed) {
        argParseFailed = true;
        break;
      }
      parsedArgs.push(parsed);
    }
    if (argParseFailed) {
      continue;
    }
    if (Array.isArray(params)) {
      if (params.length !== parsedArgs.length) {
        signatureContext.error("Expected " + params.length + " arguments, but found " + parsedArgs.length + " instead.");
        continue;
      }
    }
    for (var i$1 = 0; i$1 < parsedArgs.length; i$1++) {
      var expected = Array.isArray(params) ? params[i$1] : params.type;
      var arg$1 = parsedArgs[i$1];
      signatureContext.concat(i$1 + 1).checkSubtype(expected, arg$1.type);
    }
    if (signatureContext.errors.length === 0) {
      return new CompoundExpression(op, type, evaluate25, parsedArgs);
    }
  }
  if (overloads.length === 1) {
    (ref$1 = context.errors).push.apply(ref$1, signatureContext.errors);
  } else {
    var expected$1 = overloads.length ? overloads : availableOverloads;
    var signatures = expected$1.map(function(ref2) {
      var params2 = ref2[0];
      return stringifySignature(params2);
    }).join(" | ");
    var actualTypes = [];
    for (var i$2 = 1; i$2 < args.length; i$2++) {
      var parsed$1 = context.parse(args[i$2], 1 + actualTypes.length);
      if (!parsed$1) {
        return null;
      }
      actualTypes.push(toString$1(parsed$1.type));
    }
    context.error("Expected arguments of type " + signatures + ", but found (" + actualTypes.join(", ") + ") instead.");
  }
  return null;
};
CompoundExpression.register = function register(registry, definitions2) {
  CompoundExpression.definitions = definitions2;
  for (var name in definitions2) {
    registry[name] = CompoundExpression;
  }
};
function stringifySignature(signature) {
  if (Array.isArray(signature)) {
    return "(" + signature.map(toString$1).join(", ") + ")";
  } else {
    return "(" + toString$1(signature.type) + "...)";
  }
}
var CompoundExpression$1 = CompoundExpression;
var CollatorExpression = function CollatorExpression2(caseSensitive, diacriticSensitive, locale) {
  this.type = CollatorType;
  this.locale = locale;
  this.caseSensitive = caseSensitive;
  this.diacriticSensitive = diacriticSensitive;
};
CollatorExpression.parse = function parse8(args, context) {
  if (args.length !== 2) {
    return context.error("Expected one argument.");
  }
  var options = args[1];
  if (typeof options !== "object" || Array.isArray(options)) {
    return context.error("Collator options argument must be an object.");
  }
  var caseSensitive = context.parse(options["case-sensitive"] === void 0 ? false : options["case-sensitive"], 1, BooleanType);
  if (!caseSensitive) {
    return null;
  }
  var diacriticSensitive = context.parse(options["diacritic-sensitive"] === void 0 ? false : options["diacritic-sensitive"], 1, BooleanType);
  if (!diacriticSensitive) {
    return null;
  }
  var locale = null;
  if (options["locale"]) {
    locale = context.parse(options["locale"], 1, StringType);
    if (!locale) {
      return null;
    }
  }
  return new CollatorExpression(caseSensitive, diacriticSensitive, locale);
};
CollatorExpression.prototype.evaluate = function evaluate7(ctx) {
  return new Collator$1(this.caseSensitive.evaluate(ctx), this.diacriticSensitive.evaluate(ctx), this.locale ? this.locale.evaluate(ctx) : null);
};
CollatorExpression.prototype.eachChild = function eachChild7(fn) {
  fn(this.caseSensitive);
  fn(this.diacriticSensitive);
  if (this.locale) {
    fn(this.locale);
  }
};
CollatorExpression.prototype.outputDefined = function outputDefined7() {
  return false;
};
CollatorExpression.prototype.serialize = function serialize9() {
  var options = {};
  options["case-sensitive"] = this.caseSensitive.serialize();
  options["diacritic-sensitive"] = this.diacriticSensitive.serialize();
  if (this.locale) {
    options["locale"] = this.locale.serialize();
  }
  return [
    "collator",
    options
  ];
};
var CollatorExpression$1 = CollatorExpression;
var EXTENT = 8192;
function updateBBox(bbox2, coord) {
  bbox2[0] = Math.min(bbox2[0], coord[0]);
  bbox2[1] = Math.min(bbox2[1], coord[1]);
  bbox2[2] = Math.max(bbox2[2], coord[0]);
  bbox2[3] = Math.max(bbox2[3], coord[1]);
}
function mercatorXfromLng(lng) {
  return (180 + lng) / 360;
}
function mercatorYfromLat(lat) {
  return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))) / 360;
}
function boxWithinBox(bbox1, bbox2) {
  if (bbox1[0] <= bbox2[0]) {
    return false;
  }
  if (bbox1[2] >= bbox2[2]) {
    return false;
  }
  if (bbox1[1] <= bbox2[1]) {
    return false;
  }
  if (bbox1[3] >= bbox2[3]) {
    return false;
  }
  return true;
}
function getTileCoordinates(p, canonical) {
  var x = mercatorXfromLng(p[0]);
  var y = mercatorYfromLat(p[1]);
  var tilesAtZoom = Math.pow(2, canonical.z);
  return [
    Math.round(x * tilesAtZoom * EXTENT),
    Math.round(y * tilesAtZoom * EXTENT)
  ];
}
function onBoundary(p, p1, p2) {
  var x1 = p[0] - p1[0];
  var y1 = p[1] - p1[1];
  var x2 = p[0] - p2[0];
  var y2 = p[1] - p2[1];
  return x1 * y2 - x2 * y1 === 0 && x1 * x2 <= 0 && y1 * y2 <= 0;
}
function rayIntersect(p, p1, p2) {
  return p1[1] > p[1] !== p2[1] > p[1] && p[0] < (p2[0] - p1[0]) * (p[1] - p1[1]) / (p2[1] - p1[1]) + p1[0];
}
function pointWithinPolygon(point, rings) {
  var inside = false;
  for (var i = 0, len = rings.length; i < len; i++) {
    var ring = rings[i];
    for (var j = 0, len2 = ring.length; j < len2 - 1; j++) {
      if (onBoundary(point, ring[j], ring[j + 1])) {
        return false;
      }
      if (rayIntersect(point, ring[j], ring[j + 1])) {
        inside = !inside;
      }
    }
  }
  return inside;
}
function pointWithinPolygons(point, polygons) {
  for (var i = 0; i < polygons.length; i++) {
    if (pointWithinPolygon(point, polygons[i])) {
      return true;
    }
  }
  return false;
}
function perp(v1, v2) {
  return v1[0] * v2[1] - v1[1] * v2[0];
}
function twoSided(p1, p2, q1, q2) {
  var x1 = p1[0] - q1[0];
  var y1 = p1[1] - q1[1];
  var x2 = p2[0] - q1[0];
  var y2 = p2[1] - q1[1];
  var x3 = q2[0] - q1[0];
  var y3 = q2[1] - q1[1];
  var det1 = x1 * y3 - x3 * y1;
  var det2 = x2 * y3 - x3 * y2;
  if (det1 > 0 && det2 < 0 || det1 < 0 && det2 > 0) {
    return true;
  }
  return false;
}
function lineIntersectLine(a, b, c, d) {
  var vectorP = [
    b[0] - a[0],
    b[1] - a[1]
  ];
  var vectorQ = [
    d[0] - c[0],
    d[1] - c[1]
  ];
  if (perp(vectorQ, vectorP) === 0) {
    return false;
  }
  if (twoSided(a, b, c, d) && twoSided(c, d, a, b)) {
    return true;
  }
  return false;
}
function lineIntersectPolygon(p1, p2, polygon) {
  for (var i = 0, list = polygon; i < list.length; i += 1) {
    var ring = list[i];
    for (var j = 0; j < ring.length - 1; ++j) {
      if (lineIntersectLine(p1, p2, ring[j], ring[j + 1])) {
        return true;
      }
    }
  }
  return false;
}
function lineStringWithinPolygon(line, polygon) {
  for (var i = 0; i < line.length; ++i) {
    if (!pointWithinPolygon(line[i], polygon)) {
      return false;
    }
  }
  for (var i$1 = 0; i$1 < line.length - 1; ++i$1) {
    if (lineIntersectPolygon(line[i$1], line[i$1 + 1], polygon)) {
      return false;
    }
  }
  return true;
}
function lineStringWithinPolygons(line, polygons) {
  for (var i = 0; i < polygons.length; i++) {
    if (lineStringWithinPolygon(line, polygons[i])) {
      return true;
    }
  }
  return false;
}
function getTilePolygon(coordinates, bbox2, canonical) {
  var polygon = [];
  for (var i = 0; i < coordinates.length; i++) {
    var ring = [];
    for (var j = 0; j < coordinates[i].length; j++) {
      var coord = getTileCoordinates(coordinates[i][j], canonical);
      updateBBox(bbox2, coord);
      ring.push(coord);
    }
    polygon.push(ring);
  }
  return polygon;
}
function getTilePolygons(coordinates, bbox2, canonical) {
  var polygons = [];
  for (var i = 0; i < coordinates.length; i++) {
    var polygon = getTilePolygon(coordinates[i], bbox2, canonical);
    polygons.push(polygon);
  }
  return polygons;
}
function updatePoint(p, bbox2, polyBBox, worldSize) {
  if (p[0] < polyBBox[0] || p[0] > polyBBox[2]) {
    var halfWorldSize = worldSize * 0.5;
    var shift = p[0] - polyBBox[0] > halfWorldSize ? -worldSize : polyBBox[0] - p[0] > halfWorldSize ? worldSize : 0;
    if (shift === 0) {
      shift = p[0] - polyBBox[2] > halfWorldSize ? -worldSize : polyBBox[2] - p[0] > halfWorldSize ? worldSize : 0;
    }
    p[0] += shift;
  }
  updateBBox(bbox2, p);
}
function resetBBox(bbox2) {
  bbox2[0] = bbox2[1] = Infinity;
  bbox2[2] = bbox2[3] = -Infinity;
}
function getTilePoints(geometry2, pointBBox, polyBBox, canonical) {
  var worldSize = Math.pow(2, canonical.z) * EXTENT;
  var shifts = [
    canonical.x * EXTENT,
    canonical.y * EXTENT
  ];
  var tilePoints = [];
  if (!geometry2) {
    return tilePoints;
  }
  for (var i$1 = 0, list$1 = geometry2; i$1 < list$1.length; i$1 += 1) {
    var points = list$1[i$1];
    for (var i = 0, list = points; i < list.length; i += 1) {
      var point = list[i];
      var p = [
        point.x + shifts[0],
        point.y + shifts[1]
      ];
      updatePoint(p, pointBBox, polyBBox, worldSize);
      tilePoints.push(p);
    }
  }
  return tilePoints;
}
function getTileLines(geometry2, lineBBox, polyBBox, canonical) {
  var worldSize = Math.pow(2, canonical.z) * EXTENT;
  var shifts = [
    canonical.x * EXTENT,
    canonical.y * EXTENT
  ];
  var tileLines = [];
  if (!geometry2) {
    return tileLines;
  }
  for (var i$1 = 0, list$1 = geometry2; i$1 < list$1.length; i$1 += 1) {
    var line = list$1[i$1];
    var tileLine = [];
    for (var i = 0, list = line; i < list.length; i += 1) {
      var point = list[i];
      var p = [
        point.x + shifts[0],
        point.y + shifts[1]
      ];
      updateBBox(lineBBox, p);
      tileLine.push(p);
    }
    tileLines.push(tileLine);
  }
  if (lineBBox[2] - lineBBox[0] <= worldSize / 2) {
    resetBBox(lineBBox);
    for (var i$3 = 0, list$3 = tileLines; i$3 < list$3.length; i$3 += 1) {
      var line$1 = list$3[i$3];
      for (var i$2 = 0, list$2 = line$1; i$2 < list$2.length; i$2 += 1) {
        var p$1 = list$2[i$2];
        updatePoint(p$1, lineBBox, polyBBox, worldSize);
      }
    }
  }
  return tileLines;
}
function pointsWithinPolygons(ctx, polygonGeometry) {
  var pointBBox = [
    Infinity,
    Infinity,
    -Infinity,
    -Infinity
  ];
  var polyBBox = [
    Infinity,
    Infinity,
    -Infinity,
    -Infinity
  ];
  var canonical = ctx.canonicalID();
  if (!canonical) {
    return false;
  }
  if (polygonGeometry.type === "Polygon") {
    var tilePolygon = getTilePolygon(polygonGeometry.coordinates, polyBBox, canonical);
    var tilePoints = getTilePoints(ctx.geometry(), pointBBox, polyBBox, canonical);
    if (!boxWithinBox(pointBBox, polyBBox)) {
      return false;
    }
    for (var i = 0, list = tilePoints; i < list.length; i += 1) {
      var point = list[i];
      if (!pointWithinPolygon(point, tilePolygon)) {
        return false;
      }
    }
  }
  if (polygonGeometry.type === "MultiPolygon") {
    var tilePolygons = getTilePolygons(polygonGeometry.coordinates, polyBBox, canonical);
    var tilePoints$1 = getTilePoints(ctx.geometry(), pointBBox, polyBBox, canonical);
    if (!boxWithinBox(pointBBox, polyBBox)) {
      return false;
    }
    for (var i$1 = 0, list$1 = tilePoints$1; i$1 < list$1.length; i$1 += 1) {
      var point$1 = list$1[i$1];
      if (!pointWithinPolygons(point$1, tilePolygons)) {
        return false;
      }
    }
  }
  return true;
}
function linesWithinPolygons(ctx, polygonGeometry) {
  var lineBBox = [
    Infinity,
    Infinity,
    -Infinity,
    -Infinity
  ];
  var polyBBox = [
    Infinity,
    Infinity,
    -Infinity,
    -Infinity
  ];
  var canonical = ctx.canonicalID();
  if (!canonical) {
    return false;
  }
  if (polygonGeometry.type === "Polygon") {
    var tilePolygon = getTilePolygon(polygonGeometry.coordinates, polyBBox, canonical);
    var tileLines = getTileLines(ctx.geometry(), lineBBox, polyBBox, canonical);
    if (!boxWithinBox(lineBBox, polyBBox)) {
      return false;
    }
    for (var i = 0, list = tileLines; i < list.length; i += 1) {
      var line = list[i];
      if (!lineStringWithinPolygon(line, tilePolygon)) {
        return false;
      }
    }
  }
  if (polygonGeometry.type === "MultiPolygon") {
    var tilePolygons = getTilePolygons(polygonGeometry.coordinates, polyBBox, canonical);
    var tileLines$1 = getTileLines(ctx.geometry(), lineBBox, polyBBox, canonical);
    if (!boxWithinBox(lineBBox, polyBBox)) {
      return false;
    }
    for (var i$1 = 0, list$1 = tileLines$1; i$1 < list$1.length; i$1 += 1) {
      var line$1 = list$1[i$1];
      if (!lineStringWithinPolygons(line$1, tilePolygons)) {
        return false;
      }
    }
  }
  return true;
}
var Within = function Within2(geojson, geometries) {
  this.type = BooleanType;
  this.geojson = geojson;
  this.geometries = geometries;
};
Within.parse = function parse9(args, context) {
  if (args.length !== 2) {
    return context.error("'within' expression requires exactly one argument, but found " + (args.length - 1) + " instead.");
  }
  if (isValue(args[1])) {
    var geojson = args[1];
    if (geojson.type === "FeatureCollection") {
      for (var i = 0; i < geojson.features.length; ++i) {
        var type = geojson.features[i].geometry.type;
        if (type === "Polygon" || type === "MultiPolygon") {
          return new Within(geojson, geojson.features[i].geometry);
        }
      }
    } else if (geojson.type === "Feature") {
      var type$1 = geojson.geometry.type;
      if (type$1 === "Polygon" || type$1 === "MultiPolygon") {
        return new Within(geojson, geojson.geometry);
      }
    } else if (geojson.type === "Polygon" || geojson.type === "MultiPolygon") {
      return new Within(geojson, geojson);
    }
  }
  return context.error("'within' expression requires valid geojson object that contains polygon geometry type.");
};
Within.prototype.evaluate = function evaluate8(ctx) {
  if (ctx.geometry() != null && ctx.canonicalID() != null) {
    if (ctx.geometryType() === "Point") {
      return pointsWithinPolygons(ctx, this.geometries);
    } else if (ctx.geometryType() === "LineString") {
      return linesWithinPolygons(ctx, this.geometries);
    }
  }
  return false;
};
Within.prototype.eachChild = function eachChild8() {
};
Within.prototype.outputDefined = function outputDefined8() {
  return true;
};
Within.prototype.serialize = function serialize10() {
  return [
    "within",
    this.geojson
  ];
};
var Within$1 = Within;
function isFeatureConstant(e) {
  if (e instanceof CompoundExpression$1) {
    if (e.name === "get" && e.args.length === 1) {
      return false;
    } else if (e.name === "feature-state") {
      return false;
    } else if (e.name === "has" && e.args.length === 1) {
      return false;
    } else if (e.name === "properties" || e.name === "geometry-type" || e.name === "id") {
      return false;
    } else if (/^filter-/.test(e.name)) {
      return false;
    }
  }
  if (e instanceof Within$1) {
    return false;
  }
  var result = true;
  e.eachChild(function(arg) {
    if (result && !isFeatureConstant(arg)) {
      result = false;
    }
  });
  return result;
}
function isStateConstant(e) {
  if (e instanceof CompoundExpression$1) {
    if (e.name === "feature-state") {
      return false;
    }
  }
  var result = true;
  e.eachChild(function(arg) {
    if (result && !isStateConstant(arg)) {
      result = false;
    }
  });
  return result;
}
function isGlobalPropertyConstant(e, properties2) {
  if (e instanceof CompoundExpression$1 && properties2.indexOf(e.name) >= 0) {
    return false;
  }
  var result = true;
  e.eachChild(function(arg) {
    if (result && !isGlobalPropertyConstant(arg, properties2)) {
      result = false;
    }
  });
  return result;
}
var Var = function Var2(name, boundExpression) {
  this.type = boundExpression.type;
  this.name = name;
  this.boundExpression = boundExpression;
};
Var.parse = function parse10(args, context) {
  if (args.length !== 2 || typeof args[1] !== "string") {
    return context.error("'var' expression requires exactly one string literal argument.");
  }
  var name = args[1];
  if (!context.scope.has(name)) {
    return context.error('Unknown variable "' + name + '". Make sure "' + name + '" has been bound in an enclosing "let" expression before using it.', 1);
  }
  return new Var(name, context.scope.get(name));
};
Var.prototype.evaluate = function evaluate9(ctx) {
  return this.boundExpression.evaluate(ctx);
};
Var.prototype.eachChild = function eachChild9() {
};
Var.prototype.outputDefined = function outputDefined9() {
  return false;
};
Var.prototype.serialize = function serialize11() {
  return [
    "var",
    this.name
  ];
};
var Var$1 = Var;
var ParsingContext = function ParsingContext2(registry, path, expectedType, scope, errors) {
  if (path === void 0)
    path = [];
  if (scope === void 0)
    scope = new Scope$1();
  if (errors === void 0)
    errors = [];
  this.registry = registry;
  this.path = path;
  this.key = path.map(function(part) {
    return "[" + part + "]";
  }).join("");
  this.scope = scope;
  this.errors = errors;
  this.expectedType = expectedType;
};
ParsingContext.prototype.parse = function parse11(expr, index, expectedType, bindings, options) {
  if (options === void 0)
    options = {};
  if (index) {
    return this.concat(index, expectedType, bindings)._parse(expr, options);
  }
  return this._parse(expr, options);
};
ParsingContext.prototype._parse = function _parse(expr, options) {
  if (expr === null || typeof expr === "string" || typeof expr === "boolean" || typeof expr === "number") {
    expr = [
      "literal",
      expr
    ];
  }
  function annotate(parsed2, type, typeAnnotation) {
    if (typeAnnotation === "assert") {
      return new Assertion$1(type, [parsed2]);
    } else if (typeAnnotation === "coerce") {
      return new Coercion$1(type, [parsed2]);
    } else {
      return parsed2;
    }
  }
  if (Array.isArray(expr)) {
    if (expr.length === 0) {
      return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
    }
    var op = expr[0];
    if (typeof op !== "string") {
      this.error("Expression name must be a string, but found " + typeof op + ' instead. If you wanted a literal array, use ["literal", [...]].', 0);
      return null;
    }
    var Expr = this.registry[op];
    if (Expr) {
      var parsed = Expr.parse(expr, this);
      if (!parsed) {
        return null;
      }
      if (this.expectedType) {
        var expected = this.expectedType;
        var actual = parsed.type;
        if ((expected.kind === "string" || expected.kind === "number" || expected.kind === "boolean" || expected.kind === "object" || expected.kind === "array") && actual.kind === "value") {
          parsed = annotate(parsed, expected, options.typeAnnotation || "assert");
        } else if ((expected.kind === "color" || expected.kind === "formatted" || expected.kind === "resolvedImage") && (actual.kind === "value" || actual.kind === "string")) {
          parsed = annotate(parsed, expected, options.typeAnnotation || "coerce");
        } else if (this.checkSubtype(expected, actual)) {
          return null;
        }
      }
      if (!(parsed instanceof Literal$1) && parsed.type.kind !== "resolvedImage" && isConstant(parsed)) {
        var ec = new EvaluationContext$1();
        try {
          parsed = new Literal$1(parsed.type, parsed.evaluate(ec));
        } catch (e) {
          this.error(e.message);
          return null;
        }
      }
      return parsed;
    }
    return this.error('Unknown expression "' + op + '". If you wanted a literal array, use ["literal", [...]].', 0);
  } else if (typeof expr === "undefined") {
    return this.error("'undefined' value invalid. Use null instead.");
  } else if (typeof expr === "object") {
    return this.error('Bare objects invalid. Use ["literal", {...}] instead.');
  } else {
    return this.error("Expected an array, but found " + typeof expr + " instead.");
  }
};
ParsingContext.prototype.concat = function concat2(index, expectedType, bindings) {
  var path = typeof index === "number" ? this.path.concat(index) : this.path;
  var scope = bindings ? this.scope.concat(bindings) : this.scope;
  return new ParsingContext(this.registry, path, expectedType || null, scope, this.errors);
};
ParsingContext.prototype.error = function error(error$1) {
  var keys = [], len = arguments.length - 1;
  while (len-- > 0)
    keys[len] = arguments[len + 1];
  var key = "" + this.key + keys.map(function(k) {
    return "[" + k + "]";
  }).join("");
  this.errors.push(new ParsingError$1(key, error$1));
};
ParsingContext.prototype.checkSubtype = function checkSubtype$1(expected, t) {
  var error3 = checkSubtype(expected, t);
  if (error3) {
    this.error(error3);
  }
  return error3;
};
var ParsingContext$1 = ParsingContext;
function isConstant(expression) {
  if (expression instanceof Var$1) {
    return isConstant(expression.boundExpression);
  } else if (expression instanceof CompoundExpression$1 && expression.name === "error") {
    return false;
  } else if (expression instanceof CollatorExpression$1) {
    return false;
  } else if (expression instanceof Within$1) {
    return false;
  }
  var isTypeAnnotation = expression instanceof Coercion$1 || expression instanceof Assertion$1;
  var childrenConstant = true;
  expression.eachChild(function(child) {
    if (isTypeAnnotation) {
      childrenConstant = childrenConstant && isConstant(child);
    } else {
      childrenConstant = childrenConstant && child instanceof Literal$1;
    }
  });
  if (!childrenConstant) {
    return false;
  }
  return isFeatureConstant(expression) && isGlobalPropertyConstant(expression, [
    "zoom",
    "heatmap-density",
    "line-progress",
    "sky-radial-progress",
    "accumulated",
    "is-supported-script",
    "pitch",
    "distance-from-center"
  ]);
}
function findStopLessThanOrEqualTo(stops, input) {
  var lastIndex = stops.length - 1;
  var lowerIndex = 0;
  var upperIndex = lastIndex;
  var currentIndex = 0;
  var currentValue, nextValue;
  while (lowerIndex <= upperIndex) {
    currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
    currentValue = stops[currentIndex];
    nextValue = stops[currentIndex + 1];
    if (currentValue <= input) {
      if (currentIndex === lastIndex || input < nextValue) {
        return currentIndex;
      }
      lowerIndex = currentIndex + 1;
    } else if (currentValue > input) {
      upperIndex = currentIndex - 1;
    } else {
      throw new RuntimeError$1("Input is not a number.");
    }
  }
  return 0;
}
var Step = function Step2(type, input, stops) {
  this.type = type;
  this.input = input;
  this.labels = [];
  this.outputs = [];
  for (var i = 0, list = stops; i < list.length; i += 1) {
    var ref = list[i];
    var label = ref[0];
    var expression = ref[1];
    this.labels.push(label);
    this.outputs.push(expression);
  }
};
Step.parse = function parse12(args, context) {
  if (args.length - 1 < 4) {
    return context.error("Expected at least 4 arguments, but found only " + (args.length - 1) + ".");
  }
  if ((args.length - 1) % 2 !== 0) {
    return context.error("Expected an even number of arguments.");
  }
  var input = context.parse(args[1], 1, NumberType);
  if (!input) {
    return null;
  }
  var stops = [];
  var outputType = null;
  if (context.expectedType && context.expectedType.kind !== "value") {
    outputType = context.expectedType;
  }
  for (var i = 1; i < args.length; i += 2) {
    var label = i === 1 ? -Infinity : args[i];
    var value = args[i + 1];
    var labelKey = i;
    var valueKey = i + 1;
    if (typeof label !== "number") {
      return context.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
    }
    if (stops.length && stops[stops.length - 1][0] >= label) {
      return context.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', labelKey);
    }
    var parsed = context.parse(value, valueKey, outputType);
    if (!parsed) {
      return null;
    }
    outputType = outputType || parsed.type;
    stops.push([
      label,
      parsed
    ]);
  }
  return new Step(outputType, input, stops);
};
Step.prototype.evaluate = function evaluate10(ctx) {
  var labels = this.labels;
  var outputs = this.outputs;
  if (labels.length === 1) {
    return outputs[0].evaluate(ctx);
  }
  var value = this.input.evaluate(ctx);
  if (value <= labels[0]) {
    return outputs[0].evaluate(ctx);
  }
  var stopCount = labels.length;
  if (value >= labels[stopCount - 1]) {
    return outputs[stopCount - 1].evaluate(ctx);
  }
  var index = findStopLessThanOrEqualTo(labels, value);
  return outputs[index].evaluate(ctx);
};
Step.prototype.eachChild = function eachChild10(fn) {
  fn(this.input);
  for (var i = 0, list = this.outputs; i < list.length; i += 1) {
    var expression = list[i];
    fn(expression);
  }
};
Step.prototype.outputDefined = function outputDefined10() {
  return this.outputs.every(function(out) {
    return out.outputDefined();
  });
};
Step.prototype.serialize = function serialize12() {
  var serialized = [
    "step",
    this.input.serialize()
  ];
  for (var i = 0; i < this.labels.length; i++) {
    if (i > 0) {
      serialized.push(this.labels[i]);
    }
    serialized.push(this.outputs[i].serialize());
  }
  return serialized;
};
var Step$1 = Step;
var unitbezier = UnitBezier;
function UnitBezier(p1x, p1y, p2x, p2y) {
  this.cx = 3 * p1x;
  this.bx = 3 * (p2x - p1x) - this.cx;
  this.ax = 1 - this.cx - this.bx;
  this.cy = 3 * p1y;
  this.by = 3 * (p2y - p1y) - this.cy;
  this.ay = 1 - this.cy - this.by;
  this.p1x = p1x;
  this.p1y = p2y;
  this.p2x = p2x;
  this.p2y = p2y;
}
UnitBezier.prototype.sampleCurveX = function(t) {
  return ((this.ax * t + this.bx) * t + this.cx) * t;
};
UnitBezier.prototype.sampleCurveY = function(t) {
  return ((this.ay * t + this.by) * t + this.cy) * t;
};
UnitBezier.prototype.sampleCurveDerivativeX = function(t) {
  return (3 * this.ax * t + 2 * this.bx) * t + this.cx;
};
UnitBezier.prototype.solveCurveX = function(x, epsilon) {
  if (typeof epsilon === "undefined") {
    epsilon = 1e-6;
  }
  var t02, t12, t22, x2, i;
  for (t22 = x, i = 0; i < 8; i++) {
    x2 = this.sampleCurveX(t22) - x;
    if (Math.abs(x2) < epsilon) {
      return t22;
    }
    var d2 = this.sampleCurveDerivativeX(t22);
    if (Math.abs(d2) < 1e-6) {
      break;
    }
    t22 = t22 - x2 / d2;
  }
  t02 = 0;
  t12 = 1;
  t22 = x;
  if (t22 < t02) {
    return t02;
  }
  if (t22 > t12) {
    return t12;
  }
  while (t02 < t12) {
    x2 = this.sampleCurveX(t22);
    if (Math.abs(x2 - x) < epsilon) {
      return t22;
    }
    if (x > x2) {
      t02 = t22;
    } else {
      t12 = t22;
    }
    t22 = (t12 - t02) * 0.5 + t02;
  }
  return t22;
};
UnitBezier.prototype.solve = function(x, epsilon) {
  return this.sampleCurveY(this.solveCurveX(x, epsilon));
};
function number(a, b, t) {
  return a * (1 - t) + b * t;
}
function color(from, to, t) {
  return new Color$1(number(from.r, to.r, t), number(from.g, to.g, t), number(from.b, to.b, t), number(from.a, to.a, t));
}
function array(from, to, t) {
  return from.map(function(d, i) {
    return number(d, to[i], t);
  });
}
var interpolate = Object.freeze({
  __proto__: null,
  number,
  color,
  array
});
var Xn = 0.95047;
var Yn = 1;
var Zn = 1.08883;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
var deg2rad$1 = Math.PI / 180;
var rad2deg = 180 / Math.PI;
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function xyz2rgb(x) {
  return 255 * (x <= 31308e-7 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2xyz(x) {
  x /= 255;
  return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function rgbToLab(rgbColor) {
  var b = rgb2xyz(rgbColor.r), a = rgb2xyz(rgbColor.g), l = rgb2xyz(rgbColor.b), x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn), y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.072175 * l) / Yn), z = xyz2lab((0.0193339 * b + 0.119192 * a + 0.9503041 * l) / Zn);
  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z),
    alpha: rgbColor.a
  };
}
function labToRgb(labColor) {
  var y = (labColor.l + 16) / 116, x = isNaN(labColor.a) ? y : y + labColor.a / 500, z = isNaN(labColor.b) ? y : y - labColor.b / 200;
  y = Yn * lab2xyz(y);
  x = Xn * lab2xyz(x);
  z = Zn * lab2xyz(z);
  return new Color$1(
    xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z),
    // D65 -> sRGB
    xyz2rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z),
    xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
    labColor.alpha
  );
}
function interpolateLab(from, to, t) {
  return {
    l: number(from.l, to.l, t),
    a: number(from.a, to.a, t),
    b: number(from.b, to.b, t),
    alpha: number(from.alpha, to.alpha, t)
  };
}
function rgbToHcl(rgbColor) {
  var ref = rgbToLab(rgbColor);
  var l = ref.l;
  var a = ref.a;
  var b = ref.b;
  var h = Math.atan2(b, a) * rad2deg;
  return {
    h: h < 0 ? h + 360 : h,
    c: Math.sqrt(a * a + b * b),
    l,
    alpha: rgbColor.a
  };
}
function hclToRgb(hclColor) {
  var h = hclColor.h * deg2rad$1, c = hclColor.c, l = hclColor.l;
  return labToRgb({
    l,
    a: Math.cos(h) * c,
    b: Math.sin(h) * c,
    alpha: hclColor.alpha
  });
}
function interpolateHue(a, b, t) {
  var d = b - a;
  return a + t * (d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d);
}
function interpolateHcl(from, to, t) {
  return {
    h: interpolateHue(from.h, to.h, t),
    c: number(from.c, to.c, t),
    l: number(from.l, to.l, t),
    alpha: number(from.alpha, to.alpha, t)
  };
}
var lab = {
  forward: rgbToLab,
  reverse: labToRgb,
  interpolate: interpolateLab
};
var hcl = {
  forward: rgbToHcl,
  reverse: hclToRgb,
  interpolate: interpolateHcl
};
var Interpolate = function Interpolate2(type, operator, interpolation, input, stops) {
  this.type = type;
  this.operator = operator;
  this.interpolation = interpolation;
  this.input = input;
  this.labels = [];
  this.outputs = [];
  for (var i = 0, list = stops; i < list.length; i += 1) {
    var ref = list[i];
    var label = ref[0];
    var expression = ref[1];
    this.labels.push(label);
    this.outputs.push(expression);
  }
};
Interpolate.interpolationFactor = function interpolationFactor(interpolation, input, lower, upper) {
  var t = 0;
  if (interpolation.name === "exponential") {
    t = exponentialInterpolation(input, interpolation.base, lower, upper);
  } else if (interpolation.name === "linear") {
    t = exponentialInterpolation(input, 1, lower, upper);
  } else if (interpolation.name === "cubic-bezier") {
    var c = interpolation.controlPoints;
    var ub = new unitbezier(c[0], c[1], c[2], c[3]);
    t = ub.solve(exponentialInterpolation(input, 1, lower, upper));
  }
  return t;
};
Interpolate.parse = function parse13(args, context) {
  var operator = args[0];
  var interpolation = args[1];
  var input = args[2];
  var rest = args.slice(3);
  if (!Array.isArray(interpolation) || interpolation.length === 0) {
    return context.error("Expected an interpolation type expression.", 1);
  }
  if (interpolation[0] === "linear") {
    interpolation = { name: "linear" };
  } else if (interpolation[0] === "exponential") {
    var base = interpolation[1];
    if (typeof base !== "number") {
      return context.error("Exponential interpolation requires a numeric base.", 1, 1);
    }
    interpolation = {
      name: "exponential",
      base
    };
  } else if (interpolation[0] === "cubic-bezier") {
    var controlPoints = interpolation.slice(1);
    if (controlPoints.length !== 4 || controlPoints.some(function(t) {
      return typeof t !== "number" || t < 0 || t > 1;
    })) {
      return context.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
    }
    interpolation = {
      name: "cubic-bezier",
      controlPoints
    };
  } else {
    return context.error("Unknown interpolation type " + String(interpolation[0]), 1, 0);
  }
  if (args.length - 1 < 4) {
    return context.error("Expected at least 4 arguments, but found only " + (args.length - 1) + ".");
  }
  if ((args.length - 1) % 2 !== 0) {
    return context.error("Expected an even number of arguments.");
  }
  input = context.parse(input, 2, NumberType);
  if (!input) {
    return null;
  }
  var stops = [];
  var outputType = null;
  if (operator === "interpolate-hcl" || operator === "interpolate-lab") {
    outputType = ColorType;
  } else if (context.expectedType && context.expectedType.kind !== "value") {
    outputType = context.expectedType;
  }
  for (var i = 0; i < rest.length; i += 2) {
    var label = rest[i];
    var value = rest[i + 1];
    var labelKey = i + 3;
    var valueKey = i + 4;
    if (typeof label !== "number") {
      return context.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', labelKey);
    }
    if (stops.length && stops[stops.length - 1][0] >= label) {
      return context.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', labelKey);
    }
    var parsed = context.parse(value, valueKey, outputType);
    if (!parsed) {
      return null;
    }
    outputType = outputType || parsed.type;
    stops.push([
      label,
      parsed
    ]);
  }
  if (outputType.kind !== "number" && outputType.kind !== "color" && !(outputType.kind === "array" && outputType.itemType.kind === "number" && typeof outputType.N === "number")) {
    return context.error("Type " + toString$1(outputType) + " is not interpolatable.");
  }
  return new Interpolate(outputType, operator, interpolation, input, stops);
};
Interpolate.prototype.evaluate = function evaluate11(ctx) {
  var labels = this.labels;
  var outputs = this.outputs;
  if (labels.length === 1) {
    return outputs[0].evaluate(ctx);
  }
  var value = this.input.evaluate(ctx);
  if (value <= labels[0]) {
    return outputs[0].evaluate(ctx);
  }
  var stopCount = labels.length;
  if (value >= labels[stopCount - 1]) {
    return outputs[stopCount - 1].evaluate(ctx);
  }
  var index = findStopLessThanOrEqualTo(labels, value);
  var lower = labels[index];
  var upper = labels[index + 1];
  var t = Interpolate.interpolationFactor(this.interpolation, value, lower, upper);
  var outputLower = outputs[index].evaluate(ctx);
  var outputUpper = outputs[index + 1].evaluate(ctx);
  if (this.operator === "interpolate") {
    return interpolate[this.type.kind.toLowerCase()](outputLower, outputUpper, t);
  } else if (this.operator === "interpolate-hcl") {
    return hcl.reverse(hcl.interpolate(hcl.forward(outputLower), hcl.forward(outputUpper), t));
  } else {
    return lab.reverse(lab.interpolate(lab.forward(outputLower), lab.forward(outputUpper), t));
  }
};
Interpolate.prototype.eachChild = function eachChild11(fn) {
  fn(this.input);
  for (var i = 0, list = this.outputs; i < list.length; i += 1) {
    var expression = list[i];
    fn(expression);
  }
};
Interpolate.prototype.outputDefined = function outputDefined11() {
  return this.outputs.every(function(out) {
    return out.outputDefined();
  });
};
Interpolate.prototype.serialize = function serialize13() {
  var interpolation;
  if (this.interpolation.name === "linear") {
    interpolation = ["linear"];
  } else if (this.interpolation.name === "exponential") {
    if (this.interpolation.base === 1) {
      interpolation = ["linear"];
    } else {
      interpolation = [
        "exponential",
        this.interpolation.base
      ];
    }
  } else {
    interpolation = ["cubic-bezier"].concat(this.interpolation.controlPoints);
  }
  var serialized = [
    this.operator,
    interpolation,
    this.input.serialize()
  ];
  for (var i = 0; i < this.labels.length; i++) {
    serialized.push(this.labels[i], this.outputs[i].serialize());
  }
  return serialized;
};
function exponentialInterpolation(input, base, lowerValue, upperValue) {
  var difference = upperValue - lowerValue;
  var progress = input - lowerValue;
  if (difference === 0) {
    return 0;
  } else if (base === 1) {
    return progress / difference;
  } else {
    return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
  }
}
var Interpolate$1 = Interpolate;
var Coalesce = function Coalesce2(type, args) {
  this.type = type;
  this.args = args;
};
Coalesce.parse = function parse14(args, context) {
  if (args.length < 2) {
    return context.error("Expectected at least one argument.");
  }
  var outputType = null;
  var expectedType = context.expectedType;
  if (expectedType && expectedType.kind !== "value") {
    outputType = expectedType;
  }
  var parsedArgs = [];
  for (var i = 0, list = args.slice(1); i < list.length; i += 1) {
    var arg = list[i];
    var parsed = context.parse(arg, 1 + parsedArgs.length, outputType, void 0, { typeAnnotation: "omit" });
    if (!parsed) {
      return null;
    }
    outputType = outputType || parsed.type;
    parsedArgs.push(parsed);
  }
  var needsAnnotation = expectedType && parsedArgs.some(function(arg2) {
    return checkSubtype(expectedType, arg2.type);
  });
  return needsAnnotation ? new Coalesce(ValueType, parsedArgs) : new Coalesce(outputType, parsedArgs);
};
Coalesce.prototype.evaluate = function evaluate12(ctx) {
  var result = null;
  var argCount = 0;
  var firstImage;
  for (var i = 0, list = this.args; i < list.length; i += 1) {
    var arg = list[i];
    argCount++;
    result = arg.evaluate(ctx);
    if (result && result instanceof ResolvedImage$1 && !result.available) {
      if (!firstImage) {
        firstImage = result;
      }
      result = null;
      if (argCount === this.args.length) {
        return firstImage;
      }
    }
    if (result !== null) {
      break;
    }
  }
  return result;
};
Coalesce.prototype.eachChild = function eachChild12(fn) {
  this.args.forEach(fn);
};
Coalesce.prototype.outputDefined = function outputDefined12() {
  return this.args.every(function(arg) {
    return arg.outputDefined();
  });
};
Coalesce.prototype.serialize = function serialize14() {
  var serialized = ["coalesce"];
  this.eachChild(function(child) {
    serialized.push(child.serialize());
  });
  return serialized;
};
var Coalesce$1 = Coalesce;
var Let = function Let2(bindings, result) {
  this.type = result.type;
  this.bindings = [].concat(bindings);
  this.result = result;
};
Let.prototype.evaluate = function evaluate13(ctx) {
  return this.result.evaluate(ctx);
};
Let.prototype.eachChild = function eachChild13(fn) {
  for (var i = 0, list = this.bindings; i < list.length; i += 1) {
    var binding = list[i];
    fn(binding[1]);
  }
  fn(this.result);
};
Let.parse = function parse15(args, context) {
  if (args.length < 4) {
    return context.error("Expected at least 3 arguments, but found " + (args.length - 1) + " instead.");
  }
  var bindings = [];
  for (var i = 1; i < args.length - 1; i += 2) {
    var name = args[i];
    if (typeof name !== "string") {
      return context.error("Expected string, but found " + typeof name + " instead.", i);
    }
    if (/[^a-zA-Z0-9_]/.test(name)) {
      return context.error("Variable names must contain only alphanumeric characters or '_'.", i);
    }
    var value = context.parse(args[i + 1], i + 1);
    if (!value) {
      return null;
    }
    bindings.push([
      name,
      value
    ]);
  }
  var result = context.parse(args[args.length - 1], args.length - 1, context.expectedType, bindings);
  if (!result) {
    return null;
  }
  return new Let(bindings, result);
};
Let.prototype.outputDefined = function outputDefined13() {
  return this.result.outputDefined();
};
Let.prototype.serialize = function serialize15() {
  var serialized = ["let"];
  for (var i = 0, list = this.bindings; i < list.length; i += 1) {
    var ref = list[i];
    var name = ref[0];
    var expr = ref[1];
    serialized.push(name, expr.serialize());
  }
  serialized.push(this.result.serialize());
  return serialized;
};
var Let$1 = Let;
var At = function At2(type, index, input) {
  this.type = type;
  this.index = index;
  this.input = input;
};
At.parse = function parse16(args, context) {
  if (args.length !== 3) {
    return context.error("Expected 2 arguments, but found " + (args.length - 1) + " instead.");
  }
  var index = context.parse(args[1], 1, NumberType);
  var input = context.parse(args[2], 2, array$1(context.expectedType || ValueType));
  if (!index || !input) {
    return null;
  }
  var t = input.type;
  return new At(t.itemType, index, input);
};
At.prototype.evaluate = function evaluate14(ctx) {
  var index = this.index.evaluate(ctx);
  var array2 = this.input.evaluate(ctx);
  if (index < 0) {
    throw new RuntimeError$1("Array index out of bounds: " + index + " < 0.");
  }
  if (index >= array2.length) {
    throw new RuntimeError$1("Array index out of bounds: " + index + " > " + (array2.length - 1) + ".");
  }
  if (index !== Math.floor(index)) {
    throw new RuntimeError$1("Array index must be an integer, but found " + index + " instead.");
  }
  return array2[index];
};
At.prototype.eachChild = function eachChild14(fn) {
  fn(this.index);
  fn(this.input);
};
At.prototype.outputDefined = function outputDefined14() {
  return false;
};
At.prototype.serialize = function serialize16() {
  return [
    "at",
    this.index.serialize(),
    this.input.serialize()
  ];
};
var At$1 = At;
var In = function In2(needle, haystack) {
  this.type = BooleanType;
  this.needle = needle;
  this.haystack = haystack;
};
In.parse = function parse17(args, context) {
  if (args.length !== 3) {
    return context.error("Expected 2 arguments, but found " + (args.length - 1) + " instead.");
  }
  var needle = context.parse(args[1], 1, ValueType);
  var haystack = context.parse(args[2], 2, ValueType);
  if (!needle || !haystack) {
    return null;
  }
  if (!isValidType(needle.type, [
    BooleanType,
    StringType,
    NumberType,
    NullType,
    ValueType
  ])) {
    return context.error("Expected first argument to be of type boolean, string, number or null, but found " + toString$1(needle.type) + " instead");
  }
  return new In(needle, haystack);
};
In.prototype.evaluate = function evaluate15(ctx) {
  var needle = this.needle.evaluate(ctx);
  var haystack = this.haystack.evaluate(ctx);
  if (haystack == null) {
    return false;
  }
  if (!isValidNativeType(needle, [
    "boolean",
    "string",
    "number",
    "null"
  ])) {
    throw new RuntimeError$1("Expected first argument to be of type boolean, string, number or null, but found " + toString$1(typeOf(needle)) + " instead.");
  }
  if (!isValidNativeType(haystack, [
    "string",
    "array"
  ])) {
    throw new RuntimeError$1("Expected second argument to be of type array or string, but found " + toString$1(typeOf(haystack)) + " instead.");
  }
  return haystack.indexOf(needle) >= 0;
};
In.prototype.eachChild = function eachChild15(fn) {
  fn(this.needle);
  fn(this.haystack);
};
In.prototype.outputDefined = function outputDefined15() {
  return true;
};
In.prototype.serialize = function serialize17() {
  return [
    "in",
    this.needle.serialize(),
    this.haystack.serialize()
  ];
};
var In$1 = In;
var IndexOf = function IndexOf2(needle, haystack, fromIndex) {
  this.type = NumberType;
  this.needle = needle;
  this.haystack = haystack;
  this.fromIndex = fromIndex;
};
IndexOf.parse = function parse18(args, context) {
  if (args.length <= 2 || args.length >= 5) {
    return context.error("Expected 3 or 4 arguments, but found " + (args.length - 1) + " instead.");
  }
  var needle = context.parse(args[1], 1, ValueType);
  var haystack = context.parse(args[2], 2, ValueType);
  if (!needle || !haystack) {
    return null;
  }
  if (!isValidType(needle.type, [
    BooleanType,
    StringType,
    NumberType,
    NullType,
    ValueType
  ])) {
    return context.error("Expected first argument to be of type boolean, string, number or null, but found " + toString$1(needle.type) + " instead");
  }
  if (args.length === 4) {
    var fromIndex = context.parse(args[3], 3, NumberType);
    if (!fromIndex) {
      return null;
    }
    return new IndexOf(needle, haystack, fromIndex);
  } else {
    return new IndexOf(needle, haystack);
  }
};
IndexOf.prototype.evaluate = function evaluate16(ctx) {
  var needle = this.needle.evaluate(ctx);
  var haystack = this.haystack.evaluate(ctx);
  if (!isValidNativeType(needle, [
    "boolean",
    "string",
    "number",
    "null"
  ])) {
    throw new RuntimeError$1("Expected first argument to be of type boolean, string, number or null, but found " + toString$1(typeOf(needle)) + " instead.");
  }
  if (!isValidNativeType(haystack, [
    "string",
    "array"
  ])) {
    throw new RuntimeError$1("Expected second argument to be of type array or string, but found " + toString$1(typeOf(haystack)) + " instead.");
  }
  if (this.fromIndex) {
    var fromIndex = this.fromIndex.evaluate(ctx);
    return haystack.indexOf(needle, fromIndex);
  }
  return haystack.indexOf(needle);
};
IndexOf.prototype.eachChild = function eachChild16(fn) {
  fn(this.needle);
  fn(this.haystack);
  if (this.fromIndex) {
    fn(this.fromIndex);
  }
};
IndexOf.prototype.outputDefined = function outputDefined16() {
  return false;
};
IndexOf.prototype.serialize = function serialize18() {
  if (this.fromIndex != null && this.fromIndex !== void 0) {
    var fromIndex = this.fromIndex.serialize();
    return [
      "index-of",
      this.needle.serialize(),
      this.haystack.serialize(),
      fromIndex
    ];
  }
  return [
    "index-of",
    this.needle.serialize(),
    this.haystack.serialize()
  ];
};
var IndexOf$1 = IndexOf;
var Match = function Match2(inputType, outputType, input, cases, outputs, otherwise) {
  this.inputType = inputType;
  this.type = outputType;
  this.input = input;
  this.cases = cases;
  this.outputs = outputs;
  this.otherwise = otherwise;
};
Match.parse = function parse19(args, context) {
  if (args.length < 5) {
    return context.error("Expected at least 4 arguments, but found only " + (args.length - 1) + ".");
  }
  if (args.length % 2 !== 1) {
    return context.error("Expected an even number of arguments.");
  }
  var inputType;
  var outputType;
  if (context.expectedType && context.expectedType.kind !== "value") {
    outputType = context.expectedType;
  }
  var cases = {};
  var outputs = [];
  for (var i = 2; i < args.length - 1; i += 2) {
    var labels = args[i];
    var value = args[i + 1];
    if (!Array.isArray(labels)) {
      labels = [labels];
    }
    var labelContext = context.concat(i);
    if (labels.length === 0) {
      return labelContext.error("Expected at least one branch label.");
    }
    for (var i$1 = 0, list = labels; i$1 < list.length; i$1 += 1) {
      var label = list[i$1];
      if (typeof label !== "number" && typeof label !== "string") {
        return labelContext.error("Branch labels must be numbers or strings.");
      } else if (typeof label === "number" && Math.abs(label) > Number.MAX_SAFE_INTEGER) {
        return labelContext.error("Branch labels must be integers no larger than " + Number.MAX_SAFE_INTEGER + ".");
      } else if (typeof label === "number" && Math.floor(label) !== label) {
        return labelContext.error("Numeric branch labels must be integer values.");
      } else if (!inputType) {
        inputType = typeOf(label);
      } else if (labelContext.checkSubtype(inputType, typeOf(label))) {
        return null;
      }
      if (typeof cases[String(label)] !== "undefined") {
        return labelContext.error("Branch labels must be unique.");
      }
      cases[String(label)] = outputs.length;
    }
    var result = context.parse(value, i, outputType);
    if (!result) {
      return null;
    }
    outputType = outputType || result.type;
    outputs.push(result);
  }
  var input = context.parse(args[1], 1, ValueType);
  if (!input) {
    return null;
  }
  var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
  if (!otherwise) {
    return null;
  }
  if (input.type.kind !== "value" && context.concat(1).checkSubtype(inputType, input.type)) {
    return null;
  }
  return new Match(inputType, outputType, input, cases, outputs, otherwise);
};
Match.prototype.evaluate = function evaluate17(ctx) {
  var input = this.input.evaluate(ctx);
  var output = typeOf(input) === this.inputType && this.outputs[this.cases[input]] || this.otherwise;
  return output.evaluate(ctx);
};
Match.prototype.eachChild = function eachChild17(fn) {
  fn(this.input);
  this.outputs.forEach(fn);
  fn(this.otherwise);
};
Match.prototype.outputDefined = function outputDefined17() {
  return this.outputs.every(function(out) {
    return out.outputDefined();
  }) && this.otherwise.outputDefined();
};
Match.prototype.serialize = function serialize19() {
  var this$1$1 = this;
  var serialized = [
    "match",
    this.input.serialize()
  ];
  var sortedLabels = Object.keys(this.cases).sort();
  var groupedByOutput = [];
  var outputLookup = {};
  for (var i = 0, list = sortedLabels; i < list.length; i += 1) {
    var label = list[i];
    var outputIndex = outputLookup[this.cases[label]];
    if (outputIndex === void 0) {
      outputLookup[this.cases[label]] = groupedByOutput.length;
      groupedByOutput.push([
        this.cases[label],
        [label]
      ]);
    } else {
      groupedByOutput[outputIndex][1].push(label);
    }
  }
  var coerceLabel = function(label2) {
    return this$1$1.inputType.kind === "number" ? Number(label2) : label2;
  };
  for (var i$1 = 0, list$1 = groupedByOutput; i$1 < list$1.length; i$1 += 1) {
    var ref = list$1[i$1];
    var outputIndex = ref[0];
    var labels = ref[1];
    if (labels.length === 1) {
      serialized.push(coerceLabel(labels[0]));
    } else {
      serialized.push(labels.map(coerceLabel));
    }
    serialized.push(this.outputs[outputIndex$1].serialize());
  }
  serialized.push(this.otherwise.serialize());
  return serialized;
};
var Match$1 = Match;
var Case = function Case2(type, branches, otherwise) {
  this.type = type;
  this.branches = branches;
  this.otherwise = otherwise;
};
Case.parse = function parse20(args, context) {
  if (args.length < 4) {
    return context.error("Expected at least 3 arguments, but found only " + (args.length - 1) + ".");
  }
  if (args.length % 2 !== 0) {
    return context.error("Expected an odd number of arguments.");
  }
  var outputType;
  if (context.expectedType && context.expectedType.kind !== "value") {
    outputType = context.expectedType;
  }
  var branches = [];
  for (var i = 1; i < args.length - 1; i += 2) {
    var test = context.parse(args[i], i, BooleanType);
    if (!test) {
      return null;
    }
    var result = context.parse(args[i + 1], i + 1, outputType);
    if (!result) {
      return null;
    }
    branches.push([
      test,
      result
    ]);
    outputType = outputType || result.type;
  }
  var otherwise = context.parse(args[args.length - 1], args.length - 1, outputType);
  if (!otherwise) {
    return null;
  }
  return new Case(outputType, branches, otherwise);
};
Case.prototype.evaluate = function evaluate18(ctx) {
  for (var i = 0, list = this.branches; i < list.length; i += 1) {
    var ref = list[i];
    var test = ref[0];
    var expression = ref[1];
    if (test.evaluate(ctx)) {
      return expression.evaluate(ctx);
    }
  }
  return this.otherwise.evaluate(ctx);
};
Case.prototype.eachChild = function eachChild18(fn) {
  for (var i = 0, list = this.branches; i < list.length; i += 1) {
    var ref = list[i];
    var test = ref[0];
    var expression = ref[1];
    fn(test);
    fn(expression);
  }
  fn(this.otherwise);
};
Case.prototype.outputDefined = function outputDefined18() {
  return this.branches.every(function(ref) {
    ref[0];
    var out = ref[1];
    return out.outputDefined();
  }) && this.otherwise.outputDefined();
};
Case.prototype.serialize = function serialize20() {
  var serialized = ["case"];
  this.eachChild(function(child) {
    serialized.push(child.serialize());
  });
  return serialized;
};
var Case$1 = Case;
var Slice = function Slice2(type, input, beginIndex, endIndex) {
  this.type = type;
  this.input = input;
  this.beginIndex = beginIndex;
  this.endIndex = endIndex;
};
Slice.parse = function parse21(args, context) {
  if (args.length <= 2 || args.length >= 5) {
    return context.error("Expected 3 or 4 arguments, but found " + (args.length - 1) + " instead.");
  }
  var input = context.parse(args[1], 1, ValueType);
  var beginIndex = context.parse(args[2], 2, NumberType);
  if (!input || !beginIndex) {
    return null;
  }
  if (!isValidType(input.type, [
    array$1(ValueType),
    StringType,
    ValueType
  ])) {
    return context.error("Expected first argument to be of type array or string, but found " + toString$1(input.type) + " instead");
  }
  if (args.length === 4) {
    var endIndex = context.parse(args[3], 3, NumberType);
    if (!endIndex) {
      return null;
    }
    return new Slice(input.type, input, beginIndex, endIndex);
  } else {
    return new Slice(input.type, input, beginIndex);
  }
};
Slice.prototype.evaluate = function evaluate19(ctx) {
  var input = this.input.evaluate(ctx);
  var beginIndex = this.beginIndex.evaluate(ctx);
  if (!isValidNativeType(input, [
    "string",
    "array"
  ])) {
    throw new RuntimeError$1("Expected first argument to be of type array or string, but found " + toString$1(typeOf(input)) + " instead.");
  }
  if (this.endIndex) {
    var endIndex = this.endIndex.evaluate(ctx);
    return input.slice(beginIndex, endIndex);
  }
  return input.slice(beginIndex);
};
Slice.prototype.eachChild = function eachChild19(fn) {
  fn(this.input);
  fn(this.beginIndex);
  if (this.endIndex) {
    fn(this.endIndex);
  }
};
Slice.prototype.outputDefined = function outputDefined19() {
  return false;
};
Slice.prototype.serialize = function serialize21() {
  if (this.endIndex != null && this.endIndex !== void 0) {
    var endIndex = this.endIndex.serialize();
    return [
      "slice",
      this.input.serialize(),
      this.beginIndex.serialize(),
      endIndex
    ];
  }
  return [
    "slice",
    this.input.serialize(),
    this.beginIndex.serialize()
  ];
};
var Slice$1 = Slice;
function isComparableType(op, type) {
  if (op === "==" || op === "!=") {
    return type.kind === "boolean" || type.kind === "string" || type.kind === "number" || type.kind === "null" || type.kind === "value";
  } else {
    return type.kind === "string" || type.kind === "number" || type.kind === "value";
  }
}
function eq(ctx, a, b) {
  return a === b;
}
function neq(ctx, a, b) {
  return a !== b;
}
function lt(ctx, a, b) {
  return a < b;
}
function gt(ctx, a, b) {
  return a > b;
}
function lteq(ctx, a, b) {
  return a <= b;
}
function gteq(ctx, a, b) {
  return a >= b;
}
function eqCollate(ctx, a, b, c) {
  return c.compare(a, b) === 0;
}
function neqCollate(ctx, a, b, c) {
  return !eqCollate(ctx, a, b, c);
}
function ltCollate(ctx, a, b, c) {
  return c.compare(a, b) < 0;
}
function gtCollate(ctx, a, b, c) {
  return c.compare(a, b) > 0;
}
function lteqCollate(ctx, a, b, c) {
  return c.compare(a, b) <= 0;
}
function gteqCollate(ctx, a, b, c) {
  return c.compare(a, b) >= 0;
}
function makeComparison(op, compareBasic, compareWithCollator) {
  var isOrderComparison = op !== "==" && op !== "!=";
  return function() {
    function Comparison(lhs, rhs, collator) {
      this.type = BooleanType;
      this.lhs = lhs;
      this.rhs = rhs;
      this.collator = collator;
      this.hasUntypedArgument = lhs.type.kind === "value" || rhs.type.kind === "value";
    }
    Comparison.parse = function parse24(args, context) {
      if (args.length !== 3 && args.length !== 4) {
        return context.error("Expected two or three arguments.");
      }
      var op2 = args[0];
      var lhs = context.parse(args[1], 1, ValueType);
      if (!lhs) {
        return null;
      }
      if (!isComparableType(op2, lhs.type)) {
        return context.concat(1).error('"' + op2 + `" comparisons are not supported for type '` + toString$1(lhs.type) + "'.");
      }
      var rhs = context.parse(args[2], 2, ValueType);
      if (!rhs) {
        return null;
      }
      if (!isComparableType(op2, rhs.type)) {
        return context.concat(2).error('"' + op2 + `" comparisons are not supported for type '` + toString$1(rhs.type) + "'.");
      }
      if (lhs.type.kind !== rhs.type.kind && lhs.type.kind !== "value" && rhs.type.kind !== "value") {
        return context.error("Cannot compare types '" + toString$1(lhs.type) + "' and '" + toString$1(rhs.type) + "'.");
      }
      if (isOrderComparison) {
        if (lhs.type.kind === "value" && rhs.type.kind !== "value") {
          lhs = new Assertion$1(rhs.type, [lhs]);
        } else if (lhs.type.kind !== "value" && rhs.type.kind === "value") {
          rhs = new Assertion$1(lhs.type, [rhs]);
        }
      }
      var collator = null;
      if (args.length === 4) {
        if (lhs.type.kind !== "string" && rhs.type.kind !== "string" && lhs.type.kind !== "value" && rhs.type.kind !== "value") {
          return context.error("Cannot use collator to compare non-string types.");
        }
        collator = context.parse(args[3], 3, CollatorType);
        if (!collator) {
          return null;
        }
      }
      return new Comparison(lhs, rhs, collator);
    };
    Comparison.prototype.evaluate = function evaluate25(ctx) {
      var lhs = this.lhs.evaluate(ctx);
      var rhs = this.rhs.evaluate(ctx);
      if (isOrderComparison && this.hasUntypedArgument) {
        var lt2 = typeOf(lhs);
        var rt = typeOf(rhs);
        if (lt2.kind !== rt.kind || !(lt2.kind === "string" || lt2.kind === "number")) {
          throw new RuntimeError$1('Expected arguments for "' + op + '" to be (string, string) or (number, number), but found (' + lt2.kind + ", " + rt.kind + ") instead.");
        }
      }
      if (this.collator && !isOrderComparison && this.hasUntypedArgument) {
        var lt$1 = typeOf(lhs);
        var rt$1 = typeOf(rhs);
        if (lt$1.kind !== "string" || rt$1.kind !== "string") {
          return compareBasic(ctx, lhs, rhs);
        }
      }
      return this.collator ? compareWithCollator(ctx, lhs, rhs, this.collator.evaluate(ctx)) : compareBasic(ctx, lhs, rhs);
    };
    Comparison.prototype.eachChild = function eachChild22(fn) {
      fn(this.lhs);
      fn(this.rhs);
      if (this.collator) {
        fn(this.collator);
      }
    };
    Comparison.prototype.outputDefined = function outputDefined22() {
      return true;
    };
    Comparison.prototype.serialize = function serialize24() {
      var serialized = [op];
      this.eachChild(function(child) {
        serialized.push(child.serialize());
      });
      return serialized;
    };
    return Comparison;
  }();
}
var Equals = makeComparison("==", eq, eqCollate);
var NotEquals = makeComparison("!=", neq, neqCollate);
var LessThan = makeComparison("<", lt, ltCollate);
var GreaterThan = makeComparison(">", gt, gtCollate);
var LessThanOrEqual = makeComparison("<=", lteq, lteqCollate);
var GreaterThanOrEqual = makeComparison(">=", gteq, gteqCollate);
var NumberFormat = function NumberFormat2(number2, locale, currency, unit, minFractionDigits, maxFractionDigits) {
  this.type = StringType;
  this.number = number2;
  this.locale = locale;
  this.currency = currency;
  this.unit = unit;
  this.minFractionDigits = minFractionDigits;
  this.maxFractionDigits = maxFractionDigits;
};
NumberFormat.parse = function parse22(args, context) {
  if (args.length !== 3) {
    return context.error("Expected two arguments.");
  }
  var number2 = context.parse(args[1], 1, NumberType);
  if (!number2) {
    return null;
  }
  var options = args[2];
  if (typeof options !== "object" || Array.isArray(options)) {
    return context.error("NumberFormat options argument must be an object.");
  }
  var locale = null;
  if (options["locale"]) {
    locale = context.parse(options["locale"], 1, StringType);
    if (!locale) {
      return null;
    }
  }
  var currency = null;
  if (options["currency"]) {
    currency = context.parse(options["currency"], 1, StringType);
    if (!currency) {
      return null;
    }
  }
  var unit = null;
  if (options["unit"]) {
    unit = context.parse(options["unit"], 1, StringType);
    if (!unit) {
      return null;
    }
  }
  var minFractionDigits = null;
  if (options["min-fraction-digits"]) {
    minFractionDigits = context.parse(options["min-fraction-digits"], 1, NumberType);
    if (!minFractionDigits) {
      return null;
    }
  }
  var maxFractionDigits = null;
  if (options["max-fraction-digits"]) {
    maxFractionDigits = context.parse(options["max-fraction-digits"], 1, NumberType);
    if (!maxFractionDigits) {
      return null;
    }
  }
  return new NumberFormat(number2, locale, currency, unit, minFractionDigits, maxFractionDigits);
};
NumberFormat.prototype.evaluate = function evaluate20(ctx) {
  return new Intl.NumberFormat(this.locale ? this.locale.evaluate(ctx) : [], {
    style: this.currency && "currency" || this.unit && "unit" || "decimal",
    currency: this.currency ? this.currency.evaluate(ctx) : void 0,
    unit: this.unit ? this.unit.evaluate(ctx) : void 0,
    minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(ctx) : void 0,
    maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(ctx) : void 0
  }).format(this.number.evaluate(ctx));
};
NumberFormat.prototype.eachChild = function eachChild20(fn) {
  fn(this.number);
  if (this.locale) {
    fn(this.locale);
  }
  if (this.currency) {
    fn(this.currency);
  }
  if (this.unit) {
    fn(this.unit);
  }
  if (this.minFractionDigits) {
    fn(this.minFractionDigits);
  }
  if (this.maxFractionDigits) {
    fn(this.maxFractionDigits);
  }
};
NumberFormat.prototype.outputDefined = function outputDefined20() {
  return false;
};
NumberFormat.prototype.serialize = function serialize22() {
  var options = {};
  if (this.locale) {
    options["locale"] = this.locale.serialize();
  }
  if (this.currency) {
    options["currency"] = this.currency.serialize();
  }
  if (this.unit) {
    options["unit"] = this.unit.serialize();
  }
  if (this.minFractionDigits) {
    options["min-fraction-digits"] = this.minFractionDigits.serialize();
  }
  if (this.maxFractionDigits) {
    options["max-fraction-digits"] = this.maxFractionDigits.serialize();
  }
  return [
    "number-format",
    this.number.serialize(),
    options
  ];
};
var NumberFormat$1 = NumberFormat;
var Length = function Length2(input) {
  this.type = NumberType;
  this.input = input;
};
Length.parse = function parse23(args, context) {
  if (args.length !== 2) {
    return context.error("Expected 1 argument, but found " + (args.length - 1) + " instead.");
  }
  var input = context.parse(args[1], 1);
  if (!input) {
    return null;
  }
  if (input.type.kind !== "array" && input.type.kind !== "string" && input.type.kind !== "value") {
    return context.error("Expected argument of type string or array, but found " + toString$1(input.type) + " instead.");
  }
  return new Length(input);
};
Length.prototype.evaluate = function evaluate21(ctx) {
  var input = this.input.evaluate(ctx);
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new RuntimeError$1("Expected value to be of type string or array, but found " + toString$1(typeOf(input)) + " instead.");
  }
};
Length.prototype.eachChild = function eachChild21(fn) {
  fn(this.input);
};
Length.prototype.outputDefined = function outputDefined21() {
  return false;
};
Length.prototype.serialize = function serialize23() {
  var serialized = ["length"];
  this.eachChild(function(child) {
    serialized.push(child.serialize());
  });
  return serialized;
};
var Length$1 = Length;
var expressions = {
  // special forms
  "==": Equals,
  "!=": NotEquals,
  ">": GreaterThan,
  "<": LessThan,
  ">=": GreaterThanOrEqual,
  "<=": LessThanOrEqual,
  "array": Assertion$1,
  "at": At$1,
  "boolean": Assertion$1,
  "case": Case$1,
  "coalesce": Coalesce$1,
  "collator": CollatorExpression$1,
  "format": FormatExpression$1,
  "image": ImageExpression$1,
  "in": In$1,
  "index-of": IndexOf$1,
  "interpolate": Interpolate$1,
  "interpolate-hcl": Interpolate$1,
  "interpolate-lab": Interpolate$1,
  "length": Length$1,
  "let": Let$1,
  "literal": Literal$1,
  "match": Match$1,
  "number": Assertion$1,
  "number-format": NumberFormat$1,
  "object": Assertion$1,
  "slice": Slice$1,
  "step": Step$1,
  "string": Assertion$1,
  "to-boolean": Coercion$1,
  "to-color": Coercion$1,
  "to-number": Coercion$1,
  "to-string": Coercion$1,
  "var": Var$1,
  "within": Within$1
};
function rgba(ctx, ref) {
  var r = ref[0];
  var g = ref[1];
  var b = ref[2];
  var a = ref[3];
  r = r.evaluate(ctx);
  g = g.evaluate(ctx);
  b = b.evaluate(ctx);
  var alpha = a ? a.evaluate(ctx) : 1;
  var error3 = validateRGBA(r, g, b, alpha);
  if (error3) {
    throw new RuntimeError$1(error3);
  }
  return new Color$1(r / 255 * alpha, g / 255 * alpha, b / 255 * alpha, alpha);
}
function has2(key, obj) {
  return key in obj;
}
function get3(key, obj) {
  var v = obj[key];
  return typeof v === "undefined" ? null : v;
}
function binarySearch(v, a, i, j) {
  while (i <= j) {
    var m = i + j >> 1;
    if (a[m] === v) {
      return true;
    }
    if (a[m] > v) {
      j = m - 1;
    } else {
      i = m + 1;
    }
  }
  return false;
}
function varargs(type) {
  return { type };
}
CompoundExpression$1.register(expressions, {
  "error": [
    ErrorType,
    [StringType],
    function(ctx, ref) {
      var v = ref[0];
      throw new RuntimeError$1(v.evaluate(ctx));
    }
  ],
  "typeof": [
    StringType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      return toString$1(typeOf(v.evaluate(ctx)));
    }
  ],
  "to-rgba": [
    array$1(NumberType, 4),
    [ColorType],
    function(ctx, ref) {
      var v = ref[0];
      return v.evaluate(ctx).toArray();
    }
  ],
  "rgb": [
    ColorType,
    [
      NumberType,
      NumberType,
      NumberType
    ],
    rgba
  ],
  "rgba": [
    ColorType,
    [
      NumberType,
      NumberType,
      NumberType,
      NumberType
    ],
    rgba
  ],
  "has": {
    type: BooleanType,
    overloads: [
      [
        [StringType],
        function(ctx, ref) {
          var key = ref[0];
          return has2(key.evaluate(ctx), ctx.properties());
        }
      ],
      [
        [
          StringType,
          ObjectType
        ],
        function(ctx, ref) {
          var key = ref[0];
          var obj = ref[1];
          return has2(key.evaluate(ctx), obj.evaluate(ctx));
        }
      ]
    ]
  },
  "get": {
    type: ValueType,
    overloads: [
      [
        [StringType],
        function(ctx, ref) {
          var key = ref[0];
          return get3(key.evaluate(ctx), ctx.properties());
        }
      ],
      [
        [
          StringType,
          ObjectType
        ],
        function(ctx, ref) {
          var key = ref[0];
          var obj = ref[1];
          return get3(key.evaluate(ctx), obj.evaluate(ctx));
        }
      ]
    ]
  },
  "feature-state": [
    ValueType,
    [StringType],
    function(ctx, ref) {
      var key = ref[0];
      return get3(key.evaluate(ctx), ctx.featureState || {});
    }
  ],
  "properties": [
    ObjectType,
    [],
    function(ctx) {
      return ctx.properties();
    }
  ],
  "geometry-type": [
    StringType,
    [],
    function(ctx) {
      return ctx.geometryType();
    }
  ],
  "id": [
    ValueType,
    [],
    function(ctx) {
      return ctx.id();
    }
  ],
  "zoom": [
    NumberType,
    [],
    function(ctx) {
      return ctx.globals.zoom;
    }
  ],
  "pitch": [
    NumberType,
    [],
    function(ctx) {
      return ctx.globals.pitch || 0;
    }
  ],
  "distance-from-center": [
    NumberType,
    [],
    function(ctx) {
      return ctx.distanceFromCenter();
    }
  ],
  "heatmap-density": [
    NumberType,
    [],
    function(ctx) {
      return ctx.globals.heatmapDensity || 0;
    }
  ],
  "line-progress": [
    NumberType,
    [],
    function(ctx) {
      return ctx.globals.lineProgress || 0;
    }
  ],
  "sky-radial-progress": [
    NumberType,
    [],
    function(ctx) {
      return ctx.globals.skyRadialProgress || 0;
    }
  ],
  "accumulated": [
    ValueType,
    [],
    function(ctx) {
      return ctx.globals.accumulated === void 0 ? null : ctx.globals.accumulated;
    }
  ],
  "+": [
    NumberType,
    varargs(NumberType),
    function(ctx, args) {
      var result = 0;
      for (var i = 0, list = args; i < list.length; i += 1) {
        var arg = list[i];
        result += arg.evaluate(ctx);
      }
      return result;
    }
  ],
  "*": [
    NumberType,
    varargs(NumberType),
    function(ctx, args) {
      var result = 1;
      for (var i = 0, list = args; i < list.length; i += 1) {
        var arg = list[i];
        result *= arg.evaluate(ctx);
      }
      return result;
    }
  ],
  "-": {
    type: NumberType,
    overloads: [
      [
        [
          NumberType,
          NumberType
        ],
        function(ctx, ref) {
          var a = ref[0];
          var b = ref[1];
          return a.evaluate(ctx) - b.evaluate(ctx);
        }
      ],
      [
        [NumberType],
        function(ctx, ref) {
          var a = ref[0];
          return -a.evaluate(ctx);
        }
      ]
    ]
  },
  "/": [
    NumberType,
    [
      NumberType,
      NumberType
    ],
    function(ctx, ref) {
      var a = ref[0];
      var b = ref[1];
      return a.evaluate(ctx) / b.evaluate(ctx);
    }
  ],
  "%": [
    NumberType,
    [
      NumberType,
      NumberType
    ],
    function(ctx, ref) {
      var a = ref[0];
      var b = ref[1];
      return a.evaluate(ctx) % b.evaluate(ctx);
    }
  ],
  "ln2": [
    NumberType,
    [],
    function() {
      return Math.LN2;
    }
  ],
  "pi": [
    NumberType,
    [],
    function() {
      return Math.PI;
    }
  ],
  "e": [
    NumberType,
    [],
    function() {
      return Math.E;
    }
  ],
  "^": [
    NumberType,
    [
      NumberType,
      NumberType
    ],
    function(ctx, ref) {
      var b = ref[0];
      var e = ref[1];
      return Math.pow(b.evaluate(ctx), e.evaluate(ctx));
    }
  ],
  "sqrt": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var x = ref[0];
      return Math.sqrt(x.evaluate(ctx));
    }
  ],
  "log10": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.log(n.evaluate(ctx)) / Math.LN10;
    }
  ],
  "ln": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.log(n.evaluate(ctx));
    }
  ],
  "log2": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.log(n.evaluate(ctx)) / Math.LN2;
    }
  ],
  "sin": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.sin(n.evaluate(ctx));
    }
  ],
  "cos": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.cos(n.evaluate(ctx));
    }
  ],
  "tan": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.tan(n.evaluate(ctx));
    }
  ],
  "asin": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.asin(n.evaluate(ctx));
    }
  ],
  "acos": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.acos(n.evaluate(ctx));
    }
  ],
  "atan": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.atan(n.evaluate(ctx));
    }
  ],
  "min": [
    NumberType,
    varargs(NumberType),
    function(ctx, args) {
      return Math.min.apply(Math, args.map(function(arg) {
        return arg.evaluate(ctx);
      }));
    }
  ],
  "max": [
    NumberType,
    varargs(NumberType),
    function(ctx, args) {
      return Math.max.apply(Math, args.map(function(arg) {
        return arg.evaluate(ctx);
      }));
    }
  ],
  "abs": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.abs(n.evaluate(ctx));
    }
  ],
  "round": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      var v = n.evaluate(ctx);
      return v < 0 ? -Math.round(-v) : Math.round(v);
    }
  ],
  "floor": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.floor(n.evaluate(ctx));
    }
  ],
  "ceil": [
    NumberType,
    [NumberType],
    function(ctx, ref) {
      var n = ref[0];
      return Math.ceil(n.evaluate(ctx));
    }
  ],
  "filter-==": [
    BooleanType,
    [
      StringType,
      ValueType
    ],
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      return ctx.properties()[k.value] === v.value;
    }
  ],
  "filter-id-==": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      return ctx.id() === v.value;
    }
  ],
  "filter-type-==": [
    BooleanType,
    [StringType],
    function(ctx, ref) {
      var v = ref[0];
      return ctx.geometryType() === v.value;
    }
  ],
  "filter-<": [
    BooleanType,
    [
      StringType,
      ValueType
    ],
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      var a = ctx.properties()[k.value];
      var b = v.value;
      return typeof a === typeof b && a < b;
    }
  ],
  "filter-id-<": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      var a = ctx.id();
      var b = v.value;
      return typeof a === typeof b && a < b;
    }
  ],
  "filter->": [
    BooleanType,
    [
      StringType,
      ValueType
    ],
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      var a = ctx.properties()[k.value];
      var b = v.value;
      return typeof a === typeof b && a > b;
    }
  ],
  "filter-id->": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      var a = ctx.id();
      var b = v.value;
      return typeof a === typeof b && a > b;
    }
  ],
  "filter-<=": [
    BooleanType,
    [
      StringType,
      ValueType
    ],
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      var a = ctx.properties()[k.value];
      var b = v.value;
      return typeof a === typeof b && a <= b;
    }
  ],
  "filter-id-<=": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      var a = ctx.id();
      var b = v.value;
      return typeof a === typeof b && a <= b;
    }
  ],
  "filter->=": [
    BooleanType,
    [
      StringType,
      ValueType
    ],
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      var a = ctx.properties()[k.value];
      var b = v.value;
      return typeof a === typeof b && a >= b;
    }
  ],
  "filter-id->=": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var v = ref[0];
      var a = ctx.id();
      var b = v.value;
      return typeof a === typeof b && a >= b;
    }
  ],
  "filter-has": [
    BooleanType,
    [ValueType],
    function(ctx, ref) {
      var k = ref[0];
      return k.value in ctx.properties();
    }
  ],
  "filter-has-id": [
    BooleanType,
    [],
    function(ctx) {
      return ctx.id() !== null && ctx.id() !== void 0;
    }
  ],
  "filter-type-in": [
    BooleanType,
    [array$1(StringType)],
    function(ctx, ref) {
      var v = ref[0];
      return v.value.indexOf(ctx.geometryType()) >= 0;
    }
  ],
  "filter-id-in": [
    BooleanType,
    [array$1(ValueType)],
    function(ctx, ref) {
      var v = ref[0];
      return v.value.indexOf(ctx.id()) >= 0;
    }
  ],
  "filter-in-small": [
    BooleanType,
    [
      StringType,
      array$1(ValueType)
    ],
    // assumes v is an array literal
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      return v.value.indexOf(ctx.properties()[k.value]) >= 0;
    }
  ],
  "filter-in-large": [
    BooleanType,
    [
      StringType,
      array$1(ValueType)
    ],
    // assumes v is a array literal with values sorted in ascending order and of a single type
    function(ctx, ref) {
      var k = ref[0];
      var v = ref[1];
      return binarySearch(ctx.properties()[k.value], v.value, 0, v.value.length - 1);
    }
  ],
  "all": {
    type: BooleanType,
    overloads: [
      [
        [
          BooleanType,
          BooleanType
        ],
        function(ctx, ref) {
          var a = ref[0];
          var b = ref[1];
          return a.evaluate(ctx) && b.evaluate(ctx);
        }
      ],
      [
        varargs(BooleanType),
        function(ctx, args) {
          for (var i = 0, list = args; i < list.length; i += 1) {
            var arg = list[i];
            if (!arg.evaluate(ctx)) {
              return false;
            }
          }
          return true;
        }
      ]
    ]
  },
  "any": {
    type: BooleanType,
    overloads: [
      [
        [
          BooleanType,
          BooleanType
        ],
        function(ctx, ref) {
          var a = ref[0];
          var b = ref[1];
          return a.evaluate(ctx) || b.evaluate(ctx);
        }
      ],
      [
        varargs(BooleanType),
        function(ctx, args) {
          for (var i = 0, list = args; i < list.length; i += 1) {
            var arg = list[i];
            if (arg.evaluate(ctx)) {
              return true;
            }
          }
          return false;
        }
      ]
    ]
  },
  "!": [
    BooleanType,
    [BooleanType],
    function(ctx, ref) {
      var b = ref[0];
      return !b.evaluate(ctx);
    }
  ],
  "is-supported-script": [
    BooleanType,
    [StringType],
    // At parse time this will always return true, so we need to exclude this expression with isGlobalPropertyConstant
    function(ctx, ref) {
      var s = ref[0];
      var isSupportedScript = ctx.globals && ctx.globals.isSupportedScript;
      if (isSupportedScript) {
        return isSupportedScript(s.evaluate(ctx));
      }
      return true;
    }
  ],
  "upcase": [
    StringType,
    [StringType],
    function(ctx, ref) {
      var s = ref[0];
      return s.evaluate(ctx).toUpperCase();
    }
  ],
  "downcase": [
    StringType,
    [StringType],
    function(ctx, ref) {
      var s = ref[0];
      return s.evaluate(ctx).toLowerCase();
    }
  ],
  "concat": [
    StringType,
    varargs(ValueType),
    function(ctx, args) {
      return args.map(function(arg) {
        return toString4(arg.evaluate(ctx));
      }).join("");
    }
  ],
  "resolved-locale": [
    StringType,
    [CollatorType],
    function(ctx, ref) {
      var collator = ref[0];
      return collator.evaluate(ctx).resolvedLocale();
    }
  ]
});
var definitions = expressions;
function success(value) {
  return {
    result: "success",
    value
  };
}
function error2(value) {
  return {
    result: "error",
    value
  };
}
function supportsPropertyExpression(spec2) {
  return spec2["property-type"] === "data-driven";
}
function supportsZoomExpression(spec2) {
  return !!spec2.expression && spec2.expression.parameters.indexOf("zoom") > -1;
}
function supportsInterpolation(spec2) {
  return !!spec2.expression && spec2.expression.interpolated;
}
function isFunction(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
var StyleExpression = function StyleExpression2(expression, propertySpec) {
  this.expression = expression;
  this._warningHistory = {};
  this._evaluator = new EvaluationContext$1();
  this._defaultValue = propertySpec ? getDefaultValue(propertySpec) : null;
  this._enumValues = propertySpec && propertySpec.type === "enum" ? propertySpec.values : null;
};
StyleExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection, featureTileCoord, featureDistanceData) {
  this._evaluator.globals = globals;
  this._evaluator.feature = feature;
  this._evaluator.featureState = featureState;
  this._evaluator.canonical = canonical || null;
  this._evaluator.availableImages = availableImages || null;
  this._evaluator.formattedSection = formattedSection;
  this._evaluator.featureTileCoord = featureTileCoord || null;
  this._evaluator.featureDistanceData = featureDistanceData || null;
  return this.expression.evaluate(this._evaluator);
};
StyleExpression.prototype.evaluate = function evaluate22(globals, feature, featureState, canonical, availableImages, formattedSection, featureTileCoord, featureDistanceData) {
  this._evaluator.globals = globals;
  this._evaluator.feature = feature || null;
  this._evaluator.featureState = featureState || null;
  this._evaluator.canonical = canonical || null;
  this._evaluator.availableImages = availableImages || null;
  this._evaluator.formattedSection = formattedSection || null;
  this._evaluator.featureTileCoord = featureTileCoord || null;
  this._evaluator.featureDistanceData = featureDistanceData || null;
  try {
    var val = this.expression.evaluate(this._evaluator);
    if (val === null || val === void 0 || typeof val === "number" && val !== val) {
      return this._defaultValue;
    }
    if (this._enumValues && !(val in this._enumValues)) {
      throw new RuntimeError$1("Expected value to be one of " + Object.keys(this._enumValues).map(function(v) {
        return JSON.stringify(v);
      }).join(", ") + ", but found " + JSON.stringify(val) + " instead.");
    }
    return val;
  } catch (e) {
    if (!this._warningHistory[e.message]) {
      this._warningHistory[e.message] = true;
      if (typeof console !== "undefined") {
        console.warn(e.message);
      }
    }
    return this._defaultValue;
  }
};
function isExpression(expression) {
  return Array.isArray(expression) && expression.length > 0 && typeof expression[0] === "string" && expression[0] in definitions;
}
function createExpression(expression, propertySpec) {
  var parser = new ParsingContext$1(definitions, [], propertySpec ? getExpectedType(propertySpec) : void 0);
  var parsed = parser.parse(expression, void 0, void 0, void 0, propertySpec && propertySpec.type === "string" ? { typeAnnotation: "coerce" } : void 0);
  if (!parsed) {
    return error2(parser.errors);
  }
  return success(new StyleExpression(parsed, propertySpec));
}
var ZoomConstantExpression = function ZoomConstantExpression2(kind, expression) {
  this.kind = kind;
  this._styleExpression = expression;
  this.isStateDependent = kind !== "constant" && !isStateConstant(expression.expression);
};
ZoomConstantExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling2(globals, feature, featureState, canonical, availableImages, formattedSection) {
  return this._styleExpression.evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomConstantExpression.prototype.evaluate = function evaluate23(globals, feature, featureState, canonical, availableImages, formattedSection) {
  return this._styleExpression.evaluate(globals, feature, featureState, canonical, availableImages, formattedSection);
};
var ZoomDependentExpression = function ZoomDependentExpression2(kind, expression, zoomStops, interpolationType) {
  this.kind = kind;
  this.zoomStops = zoomStops;
  this._styleExpression = expression;
  this.isStateDependent = kind !== "camera" && !isStateConstant(expression.expression);
  this.interpolationType = interpolationType;
};
ZoomDependentExpression.prototype.evaluateWithoutErrorHandling = function evaluateWithoutErrorHandling3(globals, feature, featureState, canonical, availableImages, formattedSection) {
  return this._styleExpression.evaluateWithoutErrorHandling(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomDependentExpression.prototype.evaluate = function evaluate24(globals, feature, featureState, canonical, availableImages, formattedSection) {
  return this._styleExpression.evaluate(globals, feature, featureState, canonical, availableImages, formattedSection);
};
ZoomDependentExpression.prototype.interpolationFactor = function interpolationFactor2(input, lower, upper) {
  if (this.interpolationType) {
    return Interpolate$1.interpolationFactor(this.interpolationType, input, lower, upper);
  } else {
    return 0;
  }
};
function createPropertyExpression(expression, propertySpec) {
  expression = createExpression(expression, propertySpec);
  if (expression.result === "error") {
    return expression;
  }
  var parsed = expression.value.expression;
  var isFeatureConstant$1 = isFeatureConstant(parsed);
  if (!isFeatureConstant$1 && !supportsPropertyExpression(propertySpec)) {
    return error2([new ParsingError$1("", "data expressions not supported")]);
  }
  var isZoomConstant = isGlobalPropertyConstant(parsed, [
    "zoom",
    "pitch",
    "distance-from-center"
  ]);
  if (!isZoomConstant && !supportsZoomExpression(propertySpec)) {
    return error2([new ParsingError$1("", "zoom expressions not supported")]);
  }
  var zoomCurve = findZoomCurve(parsed);
  if (!zoomCurve && !isZoomConstant) {
    return error2([new ParsingError$1("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
  } else if (zoomCurve instanceof ParsingError$1) {
    return error2([zoomCurve]);
  } else if (zoomCurve instanceof Interpolate$1 && !supportsInterpolation(propertySpec)) {
    return error2([new ParsingError$1("", '"interpolate" expressions cannot be used with this property')]);
  }
  if (!zoomCurve) {
    return success(isFeatureConstant$1 ? new ZoomConstantExpression("constant", expression.value) : new ZoomConstantExpression("source", expression.value));
  }
  var interpolationType = zoomCurve instanceof Interpolate$1 ? zoomCurve.interpolation : void 0;
  return success(isFeatureConstant$1 ? new ZoomDependentExpression("camera", expression.value, zoomCurve.labels, interpolationType) : new ZoomDependentExpression("composite", expression.value, zoomCurve.labels, interpolationType));
}
function findZoomCurve(expression) {
  var result = null;
  if (expression instanceof Let$1) {
    result = findZoomCurve(expression.result);
  } else if (expression instanceof Coalesce$1) {
    for (var i = 0, list = expression.args; i < list.length; i += 1) {
      var arg = list[i];
      result = findZoomCurve(arg);
      if (result) {
        break;
      }
    }
  } else if ((expression instanceof Step$1 || expression instanceof Interpolate$1) && expression.input instanceof CompoundExpression$1 && expression.input.name === "zoom") {
    result = expression;
  }
  if (result instanceof ParsingError$1) {
    return result;
  }
  expression.eachChild(function(child) {
    var childResult = findZoomCurve(child);
    if (childResult instanceof ParsingError$1) {
      result = childResult;
    } else if (!result && childResult) {
      result = new ParsingError$1("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.');
    } else if (result && childResult && result !== childResult) {
      result = new ParsingError$1("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.');
    }
  });
  return result;
}
function getExpectedType(spec2) {
  var types2 = {
    color: ColorType,
    string: StringType,
    number: NumberType,
    enum: StringType,
    boolean: BooleanType,
    formatted: FormattedType,
    resolvedImage: ResolvedImageType
  };
  if (spec2.type === "array") {
    return array$1(types2[spec2.value] || ValueType, spec2.length);
  }
  return types2[spec2.type];
}
function getDefaultValue(spec2) {
  if (spec2.type === "color" && (isFunction(spec2.default) || Array.isArray(spec2.default))) {
    return new Color$1(0, 0, 0, 0);
  } else if (spec2.type === "color") {
    return Color$1.parse(spec2.default) || null;
  } else if (spec2.default === void 0) {
    return null;
  } else {
    return spec2.default;
  }
}
function unbundle(value) {
  if (value instanceof Number || value instanceof String || value instanceof Boolean) {
    return value.valueOf();
  } else {
    return value;
  }
}
function deepUnbundle(value) {
  if (Array.isArray(value)) {
    return value.map(deepUnbundle);
  } else if (value instanceof Object && !(value instanceof Number || value instanceof String || value instanceof Boolean)) {
    var unbundledValue = {};
    for (var key in value) {
      unbundledValue[key] = deepUnbundle(value[key]);
    }
    return unbundledValue;
  }
  return unbundle(value);
}
var spec = { "$version": 8, "$root": { "version": { "required": true, "type": "enum", "values": [8] }, "name": { "type": "string" }, "metadata": { "type": "*" }, "center": { "type": "array", "value": "number" }, "zoom": { "type": "number" }, "bearing": { "type": "number", "default": 0, "period": 360, "units": "degrees" }, "pitch": { "type": "number", "default": 0, "units": "degrees" }, "light": { "type": "light" }, "terrain": { "type": "terrain" }, "fog": { "type": "fog" }, "sources": { "required": true, "type": "sources" }, "sprite": { "type": "string" }, "glyphs": { "type": "string" }, "transition": { "type": "transition" }, "projection": { "type": "projection" }, "layers": { "required": true, "type": "array", "value": "layer" } }, "sources": { "*": { "type": "source" } }, "source": ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"], "source_vector": { "type": { "required": true, "type": "enum", "values": { "vector": {} } }, "url": { "type": "string" }, "tiles": { "type": "array", "value": "string" }, "bounds": { "type": "array", "value": "number", "length": 4, "default": [-180, -85.051129, 180, 85.051129] }, "scheme": { "type": "enum", "values": { "xyz": {}, "tms": {} }, "default": "xyz" }, "minzoom": { "type": "number", "default": 0 }, "maxzoom": { "type": "number", "default": 22 }, "attribution": { "type": "string" }, "promoteId": { "type": "promoteId" }, "volatile": { "type": "boolean", "default": false }, "*": { "type": "*" } }, "source_raster": { "type": { "required": true, "type": "enum", "values": { "raster": {} } }, "url": { "type": "string" }, "tiles": { "type": "array", "value": "string" }, "bounds": { "type": "array", "value": "number", "length": 4, "default": [-180, -85.051129, 180, 85.051129] }, "minzoom": { "type": "number", "default": 0 }, "maxzoom": { "type": "number", "default": 22 }, "tileSize": { "type": "number", "default": 512, "units": "pixels" }, "scheme": { "type": "enum", "values": { "xyz": {}, "tms": {} }, "default": "xyz" }, "attribution": { "type": "string" }, "volatile": { "type": "boolean", "default": false }, "*": { "type": "*" } }, "source_raster_dem": { "type": { "required": true, "type": "enum", "values": { "raster-dem": {} } }, "url": { "type": "string" }, "tiles": { "type": "array", "value": "string" }, "bounds": { "type": "array", "value": "number", "length": 4, "default": [-180, -85.051129, 180, 85.051129] }, "minzoom": { "type": "number", "default": 0 }, "maxzoom": { "type": "number", "default": 22 }, "tileSize": { "type": "number", "default": 512, "units": "pixels" }, "attribution": { "type": "string" }, "encoding": { "type": "enum", "values": { "terrarium": {}, "mapbox": {} }, "default": "mapbox" }, "volatile": { "type": "boolean", "default": false }, "*": { "type": "*" } }, "source_geojson": { "type": { "required": true, "type": "enum", "values": { "geojson": {} } }, "data": { "type": "*" }, "maxzoom": { "type": "number", "default": 18 }, "attribution": { "type": "string" }, "buffer": { "type": "number", "default": 128, "maximum": 512, "minimum": 0 }, "filter": { "type": "*" }, "tolerance": { "type": "number", "default": 0.375 }, "cluster": { "type": "boolean", "default": false }, "clusterRadius": { "type": "number", "default": 50, "minimum": 0 }, "clusterMaxZoom": { "type": "number" }, "clusterMinPoints": { "type": "number" }, "clusterProperties": { "type": "*" }, "lineMetrics": { "type": "boolean", "default": false }, "generateId": { "type": "boolean", "default": false }, "promoteId": { "type": "promoteId" } }, "source_video": { "type": { "required": true, "type": "enum", "values": { "video": {} } }, "urls": { "required": true, "type": "array", "value": "string" }, "coordinates": { "required": true, "type": "array", "length": 4, "value": { "type": "array", "length": 2, "value": "number" } } }, "source_image": { "type": { "required": true, "type": "enum", "values": { "image": {} } }, "url": { "required": true, "type": "string" }, "coordinates": { "required": true, "type": "array", "length": 4, "value": { "type": "array", "length": 2, "value": "number" } } }, "layer": { "id": { "type": "string", "required": true }, "type": { "type": "enum", "values": { "fill": {}, "line": {}, "symbol": {}, "circle": {}, "heatmap": {}, "fill-extrusion": {}, "raster": {}, "hillshade": {}, "background": {}, "sky": {} }, "required": true }, "metadata": { "type": "*" }, "source": { "type": "string" }, "source-layer": { "type": "string" }, "minzoom": { "type": "number", "minimum": 0, "maximum": 24 }, "maxzoom": { "type": "number", "minimum": 0, "maximum": 24 }, "filter": { "type": "filter" }, "layout": { "type": "layout" }, "paint": { "type": "paint" } }, "layout": ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background", "layout_sky"], "layout_background": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_sky": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_fill": { "fill-sort-key": { "type": "number", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_circle": { "circle-sort-key": { "type": "number", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_heatmap": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_fill-extrusion": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" }, "fill-extrusion-edge-radius": { "type": "number", "private": true, "default": 0, "minimum": 0, "maximum": 1, "property-type": "constant" } }, "layout_line": { "line-cap": { "type": "enum", "values": { "butt": {}, "round": {}, "square": {} }, "default": "butt", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "line-join": { "type": "enum", "values": { "bevel": {}, "round": {}, "miter": {} }, "default": "miter", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "line-miter-limit": { "type": "number", "default": 2, "requires": [{ "line-join": "miter" }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "line-round-limit": { "type": "number", "default": 1.05, "requires": [{ "line-join": "round" }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "line-sort-key": { "type": "number", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_symbol": { "symbol-placement": { "type": "enum", "values": { "point": {}, "line": {}, "line-center": {} }, "default": "point", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "symbol-spacing": { "type": "number", "default": 250, "minimum": 1, "units": "pixels", "requires": [{ "symbol-placement": "line" }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "symbol-avoid-edges": { "type": "boolean", "default": false, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "symbol-sort-key": { "type": "number", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "symbol-z-order": { "type": "enum", "values": { "auto": {}, "viewport-y": {}, "source": {} }, "default": "auto", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-allow-overlap": { "type": "boolean", "default": false, "requires": ["icon-image"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-ignore-placement": { "type": "boolean", "default": false, "requires": ["icon-image"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-optional": { "type": "boolean", "default": false, "requires": ["icon-image", "text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-rotation-alignment": { "type": "enum", "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["icon-image"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-size": { "type": "number", "default": 1, "minimum": 0, "units": "factor of the original icon size", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "icon-text-fit": { "type": "enum", "values": { "none": {}, "width": {}, "height": {}, "both": {} }, "default": "none", "requires": ["icon-image", "text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-text-fit-padding": { "type": "array", "value": "number", "length": 4, "default": [0, 0, 0, 0], "units": "pixels", "requires": ["icon-image", "text-field", { "icon-text-fit": ["both", "width", "height"] }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-image": { "type": "resolvedImage", "tokens": true, "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "icon-rotate": { "type": "number", "default": 0, "period": 360, "units": "degrees", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "icon-padding": { "type": "number", "default": 2, "minimum": 0, "units": "pixels", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-keep-upright": { "type": "boolean", "default": false, "requires": ["icon-image", { "icon-rotation-alignment": "map" }, { "symbol-placement": ["line", "line-center"] }], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-offset": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "icon-anchor": { "type": "enum", "values": { "center": {}, "left": {}, "right": {}, "top": {}, "bottom": {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, "default": "center", "requires": ["icon-image"], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "icon-pitch-alignment": { "type": "enum", "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["icon-image"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-pitch-alignment": { "type": "enum", "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-rotation-alignment": { "type": "enum", "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-field": { "type": "formatted", "default": "", "tokens": true, "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-font": { "type": "array", "value": "string", "default": ["Open Sans Regular", "Arial Unicode MS Regular"], "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-size": { "type": "number", "default": 16, "minimum": 0, "units": "pixels", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-max-width": { "type": "number", "default": 10, "minimum": 0, "units": "ems", "requires": ["text-field", { "symbol-placement": ["point"] }], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-line-height": { "type": "number", "default": 1.2, "units": "ems", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-letter-spacing": { "type": "number", "default": 0, "units": "ems", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-justify": { "type": "enum", "values": { "auto": {}, "left": {}, "center": {}, "right": {} }, "default": "center", "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-radial-offset": { "type": "number", "units": "ems", "default": 0, "requires": ["text-field"], "property-type": "data-driven", "expression": { "interpolated": true, "parameters": ["zoom", "feature"] } }, "text-variable-anchor": { "type": "array", "value": "enum", "values": { "center": {}, "left": {}, "right": {}, "top": {}, "bottom": {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, "requires": ["text-field", { "symbol-placement": ["point"] }], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-anchor": { "type": "enum", "values": { "center": {}, "left": {}, "right": {}, "top": {}, "bottom": {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, "default": "center", "requires": ["text-field", { "!": "text-variable-anchor" }], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-max-angle": { "type": "number", "default": 45, "units": "degrees", "requires": ["text-field", { "symbol-placement": ["line", "line-center"] }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-writing-mode": { "type": "array", "value": "enum", "values": { "horizontal": {}, "vertical": {} }, "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-rotate": { "type": "number", "default": 0, "period": 360, "units": "degrees", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-padding": { "type": "number", "default": 2, "minimum": 0, "units": "pixels", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-keep-upright": { "type": "boolean", "default": true, "requires": ["text-field", { "text-rotation-alignment": "map" }, { "symbol-placement": ["line", "line-center"] }], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-transform": { "type": "enum", "values": { "none": {}, "uppercase": {}, "lowercase": {} }, "default": "none", "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-offset": { "type": "array", "value": "number", "units": "ems", "length": 2, "default": [0, 0], "requires": ["text-field", { "!": "text-radial-offset" }], "expression": { "interpolated": true, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "text-allow-overlap": { "type": "boolean", "default": false, "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-ignore-placement": { "type": "boolean", "default": false, "requires": ["text-field"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-optional": { "type": "boolean", "default": false, "requires": ["text-field", "icon-image"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_raster": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "layout_hillshade": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible", "property-type": "constant" } }, "filter": { "type": "array", "value": "*" }, "filter_symbol": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature", "pitch", "distance-from-center"] } }, "filter_fill": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] } }, "filter_line": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] } }, "filter_circle": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] } }, "filter_fill-extrusion": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] } }, "filter_heatmap": { "type": "boolean", "default": false, "transition": false, "property-type": "data-driven", "expression": { "interpolated": false, "parameters": ["zoom", "feature"] } }, "filter_operator": { "type": "enum", "values": { "==": {}, "!=": {}, ">": {}, ">=": {}, "<": {}, "<=": {}, "in": {}, "!in": {}, "all": {}, "any": {}, "none": {}, "has": {}, "!has": {}, "within": {} } }, "geometry_type": { "type": "enum", "values": { "Point": {}, "LineString": {}, "Polygon": {} } }, "function": { "expression": { "type": "expression" }, "stops": { "type": "array", "value": "function_stop" }, "base": { "type": "number", "default": 1, "minimum": 0 }, "property": { "type": "string", "default": "$zoom" }, "type": { "type": "enum", "values": { "identity": {}, "exponential": {}, "interval": {}, "categorical": {} }, "default": "exponential" }, "colorSpace": { "type": "enum", "values": { "rgb": {}, "lab": {}, "hcl": {} }, "default": "rgb" }, "default": { "type": "*", "required": false } }, "function_stop": { "type": "array", "minimum": 0, "maximum": 24, "value": ["number", "color"], "length": 2 }, "expression": { "type": "array", "value": "*", "minimum": 1 }, "expression_name": { "type": "enum", "values": { "let": { "group": "Variable binding" }, "var": { "group": "Variable binding" }, "literal": { "group": "Types" }, "array": { "group": "Types" }, "at": { "group": "Lookup" }, "in": { "group": "Lookup" }, "index-of": { "group": "Lookup" }, "slice": { "group": "Lookup" }, "case": { "group": "Decision" }, "match": { "group": "Decision" }, "coalesce": { "group": "Decision" }, "step": { "group": "Ramps, scales, curves" }, "interpolate": { "group": "Ramps, scales, curves" }, "interpolate-hcl": { "group": "Ramps, scales, curves" }, "interpolate-lab": { "group": "Ramps, scales, curves" }, "ln2": { "group": "Math" }, "pi": { "group": "Math" }, "e": { "group": "Math" }, "typeof": { "group": "Types" }, "string": { "group": "Types" }, "number": { "group": "Types" }, "boolean": { "group": "Types" }, "object": { "group": "Types" }, "collator": { "group": "Types" }, "format": { "group": "Types" }, "image": { "group": "Types" }, "number-format": { "group": "Types" }, "to-string": { "group": "Types" }, "to-number": { "group": "Types" }, "to-boolean": { "group": "Types" }, "to-rgba": { "group": "Color" }, "to-color": { "group": "Types" }, "rgb": { "group": "Color" }, "rgba": { "group": "Color" }, "get": { "group": "Lookup" }, "has": { "group": "Lookup" }, "length": { "group": "Lookup" }, "properties": { "group": "Feature data" }, "feature-state": { "group": "Feature data" }, "geometry-type": { "group": "Feature data" }, "id": { "group": "Feature data" }, "zoom": { "group": "Camera" }, "pitch": { "group": "Camera" }, "distance-from-center": { "group": "Camera" }, "heatmap-density": { "group": "Heatmap" }, "line-progress": { "group": "Feature data" }, "sky-radial-progress": { "group": "sky" }, "accumulated": { "group": "Feature data" }, "+": { "group": "Math" }, "*": { "group": "Math" }, "-": { "group": "Math" }, "/": { "group": "Math" }, "%": { "group": "Math" }, "^": { "group": "Math" }, "sqrt": { "group": "Math" }, "log10": { "group": "Math" }, "ln": { "group": "Math" }, "log2": { "group": "Math" }, "sin": { "group": "Math" }, "cos": { "group": "Math" }, "tan": { "group": "Math" }, "asin": { "group": "Math" }, "acos": { "group": "Math" }, "atan": { "group": "Math" }, "min": { "group": "Math" }, "max": { "group": "Math" }, "round": { "group": "Math" }, "abs": { "group": "Math" }, "ceil": { "group": "Math" }, "floor": { "group": "Math" }, "distance": { "group": "Math" }, "==": { "group": "Decision" }, "!=": { "group": "Decision" }, ">": { "group": "Decision" }, "<": { "group": "Decision" }, ">=": { "group": "Decision" }, "<=": { "group": "Decision" }, "all": { "group": "Decision" }, "any": { "group": "Decision" }, "!": { "group": "Decision" }, "within": { "group": "Decision" }, "is-supported-script": { "group": "String" }, "upcase": { "group": "String" }, "downcase": { "group": "String" }, "concat": { "group": "String" }, "resolved-locale": { "group": "String" } } }, "fog": { "range": { "type": "array", "default": [0.5, 10], "minimum": -20, "maximum": 20, "length": 2, "value": "number", "property-type": "data-constant", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] } }, "color": { "type": "color", "property-type": "data-constant", "default": "#ffffff", "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "high-color": { "type": "color", "property-type": "data-constant", "default": "#245cdf", "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "space-color": { "type": "color", "property-type": "data-constant", "default": ["interpolate", ["linear"], ["zoom"], 4, "#010b19", 7, "#367ab9"], "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "horizon-blend": { "type": "number", "property-type": "data-constant", "default": ["interpolate", ["linear"], ["zoom"], 4, 0.2, 7, 0.1], "minimum": 0, "maximum": 1, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "star-intensity": { "type": "number", "property-type": "data-constant", "default": ["interpolate", ["linear"], ["zoom"], 5, 0.35, 6, 0], "minimum": 0, "maximum": 1, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true } }, "light": { "anchor": { "type": "enum", "default": "viewport", "values": { "map": {}, "viewport": {} }, "property-type": "data-constant", "transition": false, "expression": { "interpolated": false, "parameters": ["zoom"] } }, "position": { "type": "array", "default": [1.15, 210, 30], "length": 3, "value": "number", "property-type": "data-constant", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] } }, "color": { "type": "color", "property-type": "data-constant", "default": "#ffffff", "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "intensity": { "type": "number", "property-type": "data-constant", "default": 0.5, "minimum": 0, "maximum": 1, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true } }, "projection": { "name": { "type": "enum", "values": { "albers": {}, "equalEarth": {}, "equirectangular": {}, "lambertConformalConic": {}, "mercator": {}, "naturalEarth": {}, "winkelTripel": {}, "globe": {} }, "default": "mercator", "required": true }, "center": { "type": "array", "length": 2, "value": "number", "property-type": "data-constant", "minimum": [-180, -90], "maximum": [180, 90], "transition": false, "requires": [{ "name": ["albers", "lambertConformalConic"] }] }, "parallels": { "type": "array", "length": 2, "value": "number", "property-type": "data-constant", "minimum": [-90, -90], "maximum": [90, 90], "transition": false, "requires": [{ "name": ["albers", "lambertConformalConic"] }] } }, "terrain": { "source": { "type": "string", "required": true }, "exaggeration": { "type": "number", "property-type": "data-constant", "default": 1, "minimum": 0, "maximum": 1e3, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true, "requires": ["source"] } }, "paint": ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background", "paint_sky"], "paint_fill": { "fill-antialias": { "type": "boolean", "default": true, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-color": { "type": "color", "default": "#000000", "transition": true, "requires": [{ "!": "fill-pattern" }], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-outline-color": { "type": "color", "transition": true, "requires": [{ "!": "fill-pattern" }, { "fill-antialias": true }], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["fill-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-pattern": { "type": "resolvedImage", "transition": false, "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" } }, "paint_fill-extrusion": { "fill-extrusion-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-extrusion-color": { "type": "color", "default": "#000000", "transition": true, "requires": [{ "!": "fill-extrusion-pattern" }], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-extrusion-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-extrusion-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["fill-extrusion-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-extrusion-pattern": { "type": "resolvedImage", "transition": false, "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "fill-extrusion-height": { "type": "number", "default": 0, "minimum": 0, "units": "meters", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-extrusion-base": { "type": "number", "default": 0, "minimum": 0, "units": "meters", "transition": true, "requires": ["fill-extrusion-height"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "fill-extrusion-vertical-gradient": { "type": "boolean", "default": true, "transition": false, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "fill-extrusion-ambient-occlusion-intensity": { "property-type": "data-constant", "type": "number", "private": true, "default": 0, "minimum": 0, "maximum": 1, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true }, "fill-extrusion-ambient-occlusion-radius": { "property-type": "data-constant", "type": "number", "private": true, "default": 3, "minimum": 0, "expression": { "interpolated": true, "parameters": ["zoom"] }, "transition": true, "requires": ["fill-extrusion-edge-radius"] } }, "paint_line": { "line-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-color": { "type": "color", "default": "#000000", "transition": true, "requires": [{ "!": "line-pattern" }], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "line-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["line-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "line-width": { "type": "number", "default": 1, "minimum": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-gap-width": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-offset": { "type": "number", "default": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-blur": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "line-dasharray": { "type": "array", "value": "number", "minimum": 0, "transition": false, "units": "line widths", "requires": [{ "!": "line-pattern" }], "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "line-pattern": { "type": "resolvedImage", "transition": false, "expression": { "interpolated": false, "parameters": ["zoom", "feature"] }, "property-type": "data-driven" }, "line-gradient": { "type": "color", "transition": false, "requires": [{ "!": "line-pattern" }, { "source": "geojson", "has": { "lineMetrics": true } }], "expression": { "interpolated": true, "parameters": ["line-progress"] }, "property-type": "color-ramp" }, "line-trim-offset": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "minimum": [0, 0], "maximum": [1, 1], "transition": false, "requires": [{ "source": "geojson", "has": { "lineMetrics": true } }], "property-type": "constant" } }, "paint_circle": { "circle-radius": { "type": "number", "default": 5, "minimum": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-color": { "type": "color", "default": "#000000", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-blur": { "type": "number", "default": 0, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "circle-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["circle-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "circle-pitch-scale": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "circle-pitch-alignment": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "viewport", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "circle-stroke-width": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-stroke-color": { "type": "color", "default": "#000000", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "circle-stroke-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" } }, "paint_heatmap": { "heatmap-radius": { "type": "number", "default": 30, "minimum": 1, "transition": true, "units": "pixels", "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "heatmap-weight": { "type": "number", "default": 1, "minimum": 0, "transition": false, "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "heatmap-intensity": { "type": "number", "default": 1, "minimum": 0, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "heatmap-color": { "type": "color", "default": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", 0.1, "royalblue", 0.3, "cyan", 0.5, "lime", 0.7, "yellow", 1, "red"], "transition": false, "expression": { "interpolated": true, "parameters": ["heatmap-density"] }, "property-type": "color-ramp" }, "heatmap-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "paint_symbol": { "icon-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "icon-color": { "type": "color", "default": "#000000", "transition": true, "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "icon-halo-color": { "type": "color", "default": "rgba(0, 0, 0, 0)", "transition": true, "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "icon-halo-width": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "icon-halo-blur": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "icon-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "requires": ["icon-image"], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "icon-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["icon-image", "icon-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "text-color": { "type": "color", "default": "#000000", "transition": true, "overridable": true, "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "text-halo-color": { "type": "color", "default": "rgba(0, 0, 0, 0)", "transition": true, "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "text-halo-width": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "text-halo-blur": { "type": "number", "default": 0, "minimum": 0, "transition": true, "units": "pixels", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom", "feature", "feature-state"] }, "property-type": "data-driven" }, "text-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "transition": true, "units": "pixels", "requires": ["text-field"], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "text-translate-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["text-field", "text-translate"], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "paint_raster": { "raster-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-hue-rotate": { "type": "number", "default": 0, "period": 360, "transition": true, "units": "degrees", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-brightness-min": { "type": "number", "default": 0, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-brightness-max": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-saturation": { "type": "number", "default": 0, "minimum": -1, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-contrast": { "type": "number", "default": 0, "minimum": -1, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-resampling": { "type": "enum", "values": { "linear": {}, "nearest": {} }, "default": "linear", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "raster-fade-duration": { "type": "number", "default": 300, "minimum": 0, "transition": false, "units": "milliseconds", "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "paint_hillshade": { "hillshade-illumination-direction": { "type": "number", "default": 335, "minimum": 0, "maximum": 359, "transition": false, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "hillshade-illumination-anchor": { "type": "enum", "values": { "map": {}, "viewport": {} }, "default": "viewport", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "hillshade-exaggeration": { "type": "number", "default": 0.5, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "hillshade-shadow-color": { "type": "color", "default": "#000000", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "hillshade-highlight-color": { "type": "color", "default": "#FFFFFF", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "hillshade-accent-color": { "type": "color", "default": "#000000", "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "paint_background": { "background-color": { "type": "color", "default": "#000000", "transition": true, "requires": [{ "!": "background-pattern" }], "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" }, "background-pattern": { "type": "resolvedImage", "transition": false, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "background-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "paint_sky": { "sky-type": { "type": "enum", "values": { "gradient": {}, "atmosphere": {} }, "default": "atmosphere", "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "sky-atmosphere-sun": { "type": "array", "value": "number", "length": 2, "units": "degrees", "minimum": [0, 0], "maximum": [360, 180], "transition": false, "requires": [{ "sky-type": "atmosphere" }], "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "sky-atmosphere-sun-intensity": { "type": "number", "requires": [{ "sky-type": "atmosphere" }], "default": 10, "minimum": 0, "maximum": 100, "transition": false, "property-type": "data-constant" }, "sky-gradient-center": { "type": "array", "requires": [{ "sky-type": "gradient" }], "value": "number", "default": [0, 0], "length": 2, "units": "degrees", "minimum": [0, 0], "maximum": [360, 180], "transition": false, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "sky-gradient-radius": { "type": "number", "requires": [{ "sky-type": "gradient" }], "default": 90, "minimum": 0, "maximum": 180, "transition": false, "expression": { "interpolated": false, "parameters": ["zoom"] }, "property-type": "data-constant" }, "sky-gradient": { "type": "color", "default": ["interpolate", ["linear"], ["sky-radial-progress"], 0.8, "#87ceeb", 1, "white"], "transition": false, "requires": [{ "sky-type": "gradient" }], "expression": { "interpolated": true, "parameters": ["sky-radial-progress"] }, "property-type": "color-ramp" }, "sky-atmosphere-halo-color": { "type": "color", "default": "white", "transition": false, "requires": [{ "sky-type": "atmosphere" }], "property-type": "data-constant" }, "sky-atmosphere-color": { "type": "color", "default": "white", "transition": false, "requires": [{ "sky-type": "atmosphere" }], "property-type": "data-constant" }, "sky-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "transition": true, "expression": { "interpolated": true, "parameters": ["zoom"] }, "property-type": "data-constant" } }, "transition": { "duration": { "type": "number", "default": 300, "minimum": 0, "units": "milliseconds" }, "delay": { "type": "number", "default": 0, "minimum": 0, "units": "milliseconds" } }, "property-type": { "data-driven": { "type": "property-type" }, "color-ramp": { "type": "property-type" }, "data-constant": { "type": "property-type" }, "constant": { "type": "property-type" } }, "promoteId": { "*": { "type": "string" } } };
function isExpressionFilter(filter) {
  if (filter === true || filter === false) {
    return true;
  }
  if (!Array.isArray(filter) || filter.length === 0) {
    return false;
  }
  switch (filter[0]) {
    case "has":
      return filter.length >= 2 && filter[1] !== "$id" && filter[1] !== "$type";
    case "in":
      return filter.length >= 3 && (typeof filter[1] !== "string" || Array.isArray(filter[2]));
    case "!in":
    case "!has":
    case "none":
      return false;
    case "==":
    case "!=":
    case ">":
    case ">=":
    case "<":
    case "<=":
      return filter.length !== 3 || (Array.isArray(filter[1]) || Array.isArray(filter[2]));
    case "any":
    case "all":
      for (var i = 0, list = filter.slice(1); i < list.length; i += 1) {
        var f = list[i];
        if (!isExpressionFilter(f) && typeof f !== "boolean") {
          return false;
        }
      }
      return true;
    default:
      return true;
  }
}
function createFilter(filter, layerType) {
  if (layerType === void 0)
    layerType = "fill";
  if (filter === null || filter === void 0) {
    return {
      filter: function() {
        return true;
      },
      needGeometry: false,
      needFeature: false
    };
  }
  if (!isExpressionFilter(filter)) {
    filter = convertFilter(filter);
  }
  var filterExp = filter;
  var staticFilter = true;
  try {
    staticFilter = extractStaticFilter(filterExp);
  } catch (e) {
    console.warn("Failed to extract static filter. Filter will continue working, but at higher memory usage and slower framerate.\nThis is most likely a bug, please report this via https://github.com/mapbox/mapbox-gl-js/issues/new?assignees=&labels=&template=Bug_report.md\nand paste the contents of this message in the report.\nThank you!\nFilter Expression:\n" + JSON.stringify(filterExp, null, 2) + "\n        ");
  }
  var filterSpec = spec["filter_" + layerType];
  var compiledStaticFilter = createExpression(staticFilter, filterSpec);
  var filterFunc = null;
  if (compiledStaticFilter.result === "error") {
    throw new Error(compiledStaticFilter.value.map(function(err) {
      return err.key + ": " + err.message;
    }).join(", "));
  } else {
    filterFunc = function(globalProperties, feature, canonical) {
      return compiledStaticFilter.value.evaluate(globalProperties, feature, {}, canonical);
    };
  }
  var dynamicFilterFunc = null;
  var needFeature = null;
  if (staticFilter !== filterExp) {
    var compiledDynamicFilter = createExpression(filterExp, filterSpec);
    if (compiledDynamicFilter.result === "error") {
      throw new Error(compiledDynamicFilter.value.map(function(err) {
        return err.key + ": " + err.message;
      }).join(", "));
    } else {
      dynamicFilterFunc = function(globalProperties, feature, canonical, featureTileCoord, featureDistanceData) {
        return compiledDynamicFilter.value.evaluate(globalProperties, feature, {}, canonical, void 0, void 0, featureTileCoord, featureDistanceData);
      };
      needFeature = !isFeatureConstant(compiledDynamicFilter.value.expression);
    }
  }
  filterFunc = filterFunc;
  var needGeometry = geometryNeeded(staticFilter);
  return {
    filter: filterFunc,
    dynamicFilter: dynamicFilterFunc ? dynamicFilterFunc : void 0,
    needGeometry,
    needFeature: !!needFeature
  };
}
function extractStaticFilter(filter) {
  if (!isDynamicFilter(filter)) {
    return filter;
  }
  var result = deepUnbundle(filter);
  unionDynamicBranches(result);
  result = collapseDynamicBooleanExpressions(result);
  return result;
}
function collapseDynamicBooleanExpressions(expression) {
  if (!Array.isArray(expression)) {
    return expression;
  }
  var collapsed = collapsedExpression(expression);
  if (collapsed === true) {
    return collapsed;
  } else {
    return collapsed.map(function(subExpression) {
      return collapseDynamicBooleanExpressions(subExpression);
    });
  }
}
function unionDynamicBranches(filter) {
  var isBranchingDynamically = false;
  var branches = [];
  if (filter[0] === "case") {
    for (var i = 1; i < filter.length - 1; i += 2) {
      isBranchingDynamically = isBranchingDynamically || isDynamicFilter(filter[i]);
      branches.push(filter[i + 1]);
    }
    branches.push(filter[filter.length - 1]);
  } else if (filter[0] === "match") {
    isBranchingDynamically = isBranchingDynamically || isDynamicFilter(filter[1]);
    for (var i$1 = 2; i$1 < filter.length - 1; i$1 += 2) {
      branches.push(filter[i$1 + 1]);
    }
    branches.push(filter[filter.length - 1]);
  } else if (filter[0] === "step") {
    isBranchingDynamically = isBranchingDynamically || isDynamicFilter(filter[1]);
    for (var i$2 = 1; i$2 < filter.length - 1; i$2 += 2) {
      branches.push(filter[i$2 + 1]);
    }
  }
  if (isBranchingDynamically) {
    filter.length = 0;
    filter.push.apply(filter, ["any"].concat(branches));
  }
  for (var i$3 = 1; i$3 < filter.length; i$3++) {
    unionDynamicBranches(filter[i$3]);
  }
}
function isDynamicFilter(filter) {
  if (!Array.isArray(filter)) {
    return false;
  }
  if (isRootExpressionDynamic(filter[0])) {
    return true;
  }
  for (var i = 1; i < filter.length; i++) {
    var child = filter[i];
    if (isDynamicFilter(child)) {
      return true;
    }
  }
  return false;
}
function isRootExpressionDynamic(expression) {
  return expression === "pitch" || expression === "distance-from-center";
}
var dynamicConditionExpressions = /* @__PURE__ */ new Set([
  "in",
  "==",
  "!=",
  ">",
  ">=",
  "<",
  "<=",
  "to-boolean"
]);
function collapsedExpression(expression) {
  if (dynamicConditionExpressions.has(expression[0])) {
    for (var i = 1; i < expression.length; i++) {
      var param = expression[i];
      if (isDynamicFilter(param)) {
        return true;
      }
    }
  }
  return expression;
}
function compare2(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function geometryNeeded(filter) {
  if (!Array.isArray(filter)) {
    return false;
  }
  if (filter[0] === "within") {
    return true;
  }
  for (var index = 1; index < filter.length; index++) {
    if (geometryNeeded(filter[index])) {
      return true;
    }
  }
  return false;
}
function convertFilter(filter) {
  if (!filter) {
    return true;
  }
  var op = filter[0];
  if (filter.length <= 1) {
    return op !== "any";
  }
  var converted = op === "==" ? convertComparisonOp(filter[1], filter[2], "==") : op === "!=" ? convertNegation(convertComparisonOp(filter[1], filter[2], "==")) : op === "<" || op === ">" || op === "<=" || op === ">=" ? convertComparisonOp(filter[1], filter[2], op) : op === "any" ? convertDisjunctionOp(filter.slice(1)) : op === "all" ? ["all"].concat(filter.slice(1).map(convertFilter)) : op === "none" ? ["all"].concat(filter.slice(1).map(convertFilter).map(convertNegation)) : op === "in" ? convertInOp(filter[1], filter.slice(2)) : op === "!in" ? convertNegation(convertInOp(filter[1], filter.slice(2))) : op === "has" ? convertHasOp(filter[1]) : op === "!has" ? convertNegation(convertHasOp(filter[1])) : op === "within" ? filter : true;
  return converted;
}
function convertComparisonOp(property, value, op) {
  switch (property) {
    case "$type":
      return [
        "filter-type-" + op,
        value
      ];
    case "$id":
      return [
        "filter-id-" + op,
        value
      ];
    default:
      return [
        "filter-" + op,
        property,
        value
      ];
  }
}
function convertDisjunctionOp(filters) {
  return ["any"].concat(filters.map(convertFilter));
}
function convertInOp(property, values) {
  if (values.length === 0) {
    return false;
  }
  switch (property) {
    case "$type":
      return [
        "filter-type-in",
        [
          "literal",
          values
        ]
      ];
    case "$id":
      return [
        "filter-id-in",
        [
          "literal",
          values
        ]
      ];
    default:
      if (values.length > 200 && !values.some(function(v) {
        return typeof v !== typeof values[0];
      })) {
        return [
          "filter-in-large",
          property,
          [
            "literal",
            values.sort(compare2)
          ]
        ];
      } else {
        return [
          "filter-in-small",
          property,
          [
            "literal",
            values
          ]
        ];
      }
  }
}
function convertHasOp(property) {
  switch (property) {
    case "$type":
      return true;
    case "$id":
      return ["filter-has-id"];
    default:
      return [
        "filter-has",
        property
      ];
  }
}
function convertNegation(filter) {
  return [
    "!",
    filter
  ];
}
var refProperties = [
  "type",
  "source",
  "source-layer",
  "minzoom",
  "maxzoom",
  "filter",
  "layout"
];
function deref(layer, parent) {
  var result = {};
  for (var k in layer) {
    if (k !== "ref") {
      result[k] = layer[k];
    }
  }
  refProperties.forEach(function(k2) {
    if (k2 in parent) {
      result[k2] = parent[k2];
    }
  });
  return result;
}
function derefLayers(layers) {
  layers = layers.slice();
  var map = /* @__PURE__ */ Object.create(null);
  for (var i = 0; i < layers.length; i++) {
    map[layers[i].id] = layers[i];
  }
  for (var i$1 = 0; i$1 < layers.length; i$1++) {
    if ("ref" in layers[i$1]) {
      layers[i$1] = deref(layers[i$1], map[layers[i$1].ref]);
    }
  }
  return layers;
}
var fontWeights = {
  thin: 100,
  hairline: 100,
  "ultra-light": 100,
  "extra-light": 100,
  light: 200,
  book: 300,
  regular: 400,
  normal: 400,
  plain: 400,
  roman: 400,
  standard: 400,
  medium: 500,
  "semi-bold": 600,
  "demi-bold": 600,
  bold: 700,
  heavy: 800,
  black: 800,
  "extra-bold": 800,
  "ultra-black": 900,
  "extra-black": 900,
  "ultra-bold": 900,
  "heavy-black": 900,
  fat: 900,
  poster: 900
};
var sp = " ";
var italicRE = /(italic|oblique)$/i;
var fontCache = {};
var mapboxToCssFont = function(fonts, size, lineHeight) {
  var cssData = fontCache[fonts];
  if (!cssData) {
    if (!Array.isArray(fonts)) {
      fonts = [fonts];
    }
    var weight = 400;
    var style = "normal";
    var fontFamilies = [];
    var haveWeight, haveStyle;
    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];
      var parts = font.split(" ");
      var maybeWeight = parts[parts.length - 1].toLowerCase();
      if (maybeWeight == "normal" || maybeWeight == "italic" || maybeWeight == "oblique") {
        style = haveStyle ? style : maybeWeight;
        parts.pop();
        maybeWeight = parts[parts.length - 1].toLowerCase();
      } else if (italicRE.test(maybeWeight)) {
        maybeWeight = maybeWeight.replace(italicRE, "");
        style = haveStyle ? style : parts[parts.length - 1].replace(maybeWeight, "");
      }
      for (var w in fontWeights) {
        var previousPart = parts.length > 1 ? parts[parts.length - 2].toLowerCase() : "";
        if (maybeWeight == w || maybeWeight == w.replace("-", "") || previousPart + "-" + maybeWeight == w) {
          weight = haveWeight ? weight : fontWeights[w];
          parts.pop();
          if (previousPart && w.startsWith(previousPart)) {
            parts.pop();
          }
          break;
        }
      }
      if (!haveWeight && typeof maybeWeight == "number") {
        weight = maybeWeight;
      }
      var fontFamily = parts.join(sp).replace("Klokantech Noto Sans", "Noto Sans");
      if (fontFamily.indexOf(sp) !== -1) {
        fontFamily = '"' + fontFamily + '"';
      }
      fontFamilies.push(fontFamily);
    }
    cssData = fontCache[fonts] = [
      style,
      weight,
      fontFamilies
    ];
  }
  return cssData[0] + sp + cssData[1] + sp + size + "px" + (lineHeight ? "/" + lineHeight : "") + sp + cssData[2];
};
var mapboxBaseUrl = "https://api.mapbox.com";
function getMapboxPath(url) {
  var startsWith = "mapbox://";
  if (url.indexOf(startsWith) !== 0) {
    return "";
  }
  return url.slice(startsWith.length);
}
function normalizeSpriteUrl(url, token, styleUrl) {
  var mapboxPath = getMapboxPath(url);
  if (!mapboxPath) {
    return decodeURI(new URL(url, styleUrl).href);
  }
  var startsWith = "sprites/";
  if (mapboxPath.indexOf(startsWith) !== 0) {
    throw new Error("unexpected sprites url: " + url);
  }
  var sprite = mapboxPath.slice(startsWith.length);
  return mapboxBaseUrl + "/styles/v1/" + sprite + "/sprite?access_token=" + token;
}
function normalizeStyleUrl(url, token) {
  var mapboxPath = getMapboxPath(url);
  if (!mapboxPath) {
    return decodeURI(new URL(url, location.href).href);
  }
  var startsWith = "styles/";
  if (mapboxPath.indexOf(startsWith) !== 0) {
    throw new Error("unexpected style url: " + url);
  }
  var style = mapboxPath.slice(startsWith.length);
  return mapboxBaseUrl + "/styles/v1/" + style + "?&access_token=" + token;
}
function normalizeSourceUrl(url, token, tokenParam, styleUrl) {
  var urlObject = new URL(url, styleUrl);
  var mapboxPath = getMapboxPath(url);
  if (!mapboxPath) {
    if (!token) {
      return decodeURI(urlObject.href);
    }
    urlObject.searchParams.set(tokenParam, token);
    return decodeURI(urlObject.href);
  }
  if (mapboxPath === "mapbox.satellite") {
    var sizeFactor = window.devicePixelRatio >= 1.5 ? "@2x" : "";
    return "https://api.mapbox.com/v4/" + mapboxPath + "/{z}/{x}/{y}" + sizeFactor + ".webp?access_token=" + token;
  }
  return "https://{a-d}.tiles.mapbox.com/v4/" + mapboxPath + "/{z}/{x}/{y}.vector.pbf?access_token=" + token;
}
var styleId = 0;
var functionCacheByStyleId = {};
var filterCacheByStyleId = {};
function getFunctionCache(glStyle) {
  if (!glStyle.id) {
    glStyle.id = styleId++;
  }
  var functionCache = {};
  functionCacheByStyleId[glStyle.id] = functionCache;
  return functionCache;
}
function getFilterCache(glStyle) {
  if (!glStyle.id) {
    glStyle.id = styleId++;
  }
  var filterCache = {};
  filterCacheByStyleId[glStyle.id] = filterCache;
  return filterCache;
}
function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}
var defaultResolutions = function() {
  var resolutions = [];
  for (var res = 78271.51696402048; resolutions.length <= 24; res /= 2) {
    resolutions.push(res);
  }
  return resolutions;
}();
function createCanvas(width, height) {
  if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(width, height);
  }
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function getZoomForResolution(resolution, resolutions) {
  var i = 0;
  var ii = resolutions.length;
  for (; i < ii; ++i) {
    var candidate = resolutions[i];
    if (candidate < resolution && i + 1 < ii) {
      var zoomFactor = resolutions[i] / resolutions[i + 1];
      return i + Math.log(resolutions[i] / resolution) / Math.log(zoomFactor);
    }
  }
  return ii - 1;
}
var pendingRequests = {};
function fetchResource(resourceType, url, options, metadata) {
  if (options === void 0)
    options = {};
  if (url in pendingRequests) {
    if (metadata) {
      metadata.request = pendingRequests[url][0];
    }
    return pendingRequests[url][1];
  }
  var request = options.transformRequest ? options.transformRequest(url, resourceType) || new Request(url) : new Request(url);
  if (!request.headers.get("Accept")) {
    request.headers.set("Accept", "application/json");
  }
  if (metadata) {
    metadata.request = request;
  }
  var pendingRequest = fetch(request).then(function(response) {
    delete pendingRequests[url];
    return response.ok ? response.json() : Promise.reject(new Error("Error fetching source " + url));
  }).catch(function(error3) {
    delete pendingRequests[url];
    return Promise.reject(new Error("Error fetching source " + url));
  });
  pendingRequests[url] = [
    request,
    pendingRequest
  ];
  return pendingRequest;
}
function getGlStyle(glStyleOrUrl, options) {
  if (typeof glStyleOrUrl === "string") {
    if (glStyleOrUrl.trim().startsWith("{")) {
      try {
        var glStyle = JSON.parse(glStyleOrUrl);
        return Promise.resolve(glStyle);
      } catch (error3) {
        return Promise.reject(error3);
      }
    } else {
      glStyleOrUrl = normalizeStyleUrl(glStyleOrUrl, options.accessToken);
      return fetchResource("Style", glStyleOrUrl, options);
    }
  } else {
    return Promise.resolve(glStyleOrUrl);
  }
}
function getTransformedTilesUrl(tilesUrl, options) {
  if (options.transformRequest) {
    var transformedRequest = options.transformRequest(tilesUrl, "Tiles");
    if (transformedRequest instanceof Request) {
      return decodeURI(transformedRequest.url);
    }
  }
  return tilesUrl;
}
var tilejsonCache = {};
function getTileJson(glSource, styleUrl, options) {
  if (options === void 0)
    options = {};
  var cacheKey = [
    styleUrl,
    JSON.stringify(glSource)
  ].toString();
  var promise = tilejsonCache[cacheKey];
  if (!promise || options.transformRequest) {
    var url = glSource.url;
    if (url && !glSource.tiles) {
      var normalizedSourceUrl = normalizeSourceUrl(url, options.accessToken, options.accessTokenParam || "access_token", styleUrl || location.href);
      if (url.startsWith("mapbox://")) {
        promise = Promise.resolve(Object.assign({}, glSource, {
          url: void 0,
          tiles: expandUrl(normalizedSourceUrl)
        }));
      } else {
        var metadata = {};
        promise = fetchResource("Source", normalizedSourceUrl, options, metadata).then(function(tileJson) {
          tileJson.tiles = tileJson.tiles.map(function(tileUrl) {
            return getTransformedTilesUrl(normalizeSourceUrl(tileUrl, options.accessToken, options.accessTokenParam || "access_token", metadata.request.url), options);
          });
          return Promise.resolve(tileJson);
        });
      }
    } else {
      glSource = Object.assign({}, glSource, {
        tiles: glSource.tiles.map(function(tileUrl) {
          return getTransformedTilesUrl(normalizeSourceUrl(tileUrl, options.accessToken, options.accessTokenParam || "access_token", styleUrl || location.href), options);
        })
      });
      promise = Promise.resolve(Object.assign({}, glSource));
    }
    tilejsonCache[cacheKey] = promise;
  }
  return promise;
}
function drawIconHalo(spriteImage, spriteImageData, haloWidth, haloColor) {
  var imageCanvas = document.createElement("canvas");
  var imgSize = [
    2 * haloWidth * spriteImageData.pixelRatio + spriteImageData.width,
    2 * haloWidth * spriteImageData.pixelRatio + spriteImageData.height
  ];
  imageCanvas.width = imgSize[0];
  imageCanvas.height = imgSize[1];
  var imageContext = imageCanvas.getContext("2d");
  imageContext.drawImage(spriteImage, spriteImageData.x, spriteImageData.y, spriteImageData.width, spriteImageData.height, haloWidth * spriteImageData.pixelRatio, haloWidth * spriteImageData.pixelRatio, spriteImageData.width, spriteImageData.height);
  var imageData = imageContext.getImageData(0, 0, imgSize[0], imgSize[1]);
  imageContext.globalCompositeOperation = "destination-over";
  imageContext.fillStyle = "rgba(" + haloColor.r * 255 + "," + haloColor.g * 255 + "," + haloColor.b * 255 + "," + haloColor.a + ")";
  var data = imageData.data;
  for (var i = 0, ii = imageData.width; i < ii; ++i) {
    for (var j = 0, jj = imageData.height; j < jj; ++j) {
      var index = (j * ii + i) * 4;
      var alpha = data[index + 3];
      if (alpha > 0) {
        imageContext.arc(i, j, haloWidth * spriteImageData.pixelRatio, 0, 2 * Math.PI);
      }
    }
  }
  imageContext.fill();
  return imageCanvas;
}
var hairSpacePool = Array(256).join(" ");
function applyLetterSpacing(text, letterSpacing) {
  if (letterSpacing >= 0.05) {
    var textWithLetterSpacing = "";
    var lines = text.split("\n");
    var joinSpaceString = hairSpacePool.slice(0, Math.round(letterSpacing / 0.1));
    for (var l = 0, ll = lines.length; l < ll; ++l) {
      if (l > 0) {
        textWithLetterSpacing += "\n";
      }
      textWithLetterSpacing += lines[l].split("").join(joinSpaceString);
    }
    return textWithLetterSpacing;
  }
  return text;
}
var measureContext;
function getMeasureContext() {
  if (!measureContext) {
    measureContext = createCanvas(1, 1).getContext("2d");
  }
  return measureContext;
}
function measureText(text, letterSpacing) {
  return getMeasureContext().measureText(text).width + (text.length - 1) * letterSpacing;
}
var measureCache = {};
function wrapText(text, font, em, letterSpacing) {
  if (text.indexOf("\n") !== -1) {
    var hardLines = text.split("\n");
    var lines = [];
    for (var i = 0, ii = hardLines.length; i < ii; ++i) {
      lines.push(wrapText(hardLines[i], font, em, letterSpacing));
    }
    return lines.join("\n");
  }
  var key = em + "," + font + "," + text + "," + letterSpacing;
  var wrappedText = measureCache[key];
  if (!wrappedText) {
    var words = text.split(" ");
    if (words.length > 1) {
      var ctx = getMeasureContext();
      ctx.font = font;
      var oneEm = ctx.measureText("M").width;
      var maxWidth = oneEm * em;
      var line = "";
      var lines$1 = [];
      for (var i$1 = 0, ii$1 = words.length; i$1 < ii$1; ++i$1) {
        var word = words[i$1];
        var testLine = line + (line ? " " : "") + word;
        if (measureText(testLine, letterSpacing) <= maxWidth) {
          line = testLine;
        } else {
          if (line) {
            lines$1.push(line);
          }
          line = word;
        }
      }
      if (line) {
        lines$1.push(line);
      }
      for (var i$2 = 0, ii$2 = lines$1.length; i$2 < ii$2 && ii$2 > 1; ++i$2) {
        var line$1 = lines$1[i$2];
        if (measureText(line$1, letterSpacing) < maxWidth * 0.35) {
          var prevWidth = i$2 > 0 ? measureText(lines$1[i$2 - 1], letterSpacing) : Infinity;
          var nextWidth = i$2 < ii$2 - 1 ? measureText(lines$1[i$2 + 1], letterSpacing) : Infinity;
          lines$1.splice(i$2, 1);
          ii$2 -= 1;
          if (prevWidth < nextWidth) {
            lines$1[i$2 - 1] += " " + line$1;
            i$2 -= 1;
          } else {
            lines$1[i$2] = line$1 + " " + lines$1[i$2];
          }
        }
      }
      for (var i$3 = 0, ii$3 = lines$1.length - 1; i$3 < ii$3; ++i$3) {
        var line$2 = lines$1[i$3];
        var next = lines$1[i$3 + 1];
        if (measureText(line$2, letterSpacing) > maxWidth * 0.7 && measureText(next, letterSpacing) < maxWidth * 0.6) {
          var lineWords = line$2.split(" ");
          var lastWord = lineWords.pop();
          if (measureText(lastWord, letterSpacing) < maxWidth * 0.2) {
            lines$1[i$3] = lineWords.join(" ");
            lines$1[i$3 + 1] = lastWord + " " + next;
          }
          ii$3 -= 1;
        }
      }
      wrappedText = lines$1.join("\n");
    } else {
      wrappedText = text;
    }
    wrappedText = applyLetterSpacing(wrappedText, letterSpacing);
    measureCache[key] = wrappedText;
  }
  return wrappedText;
}
var fontFamilyRegEx = /font-family: ?([^;]*);/;
var stripQuotesRegEx = /("|')/g;
var loadedFontFamilies;
function hasFontFamily(family) {
  if (!loadedFontFamilies) {
    loadedFontFamilies = {};
    var styleSheets = document.styleSheets;
    for (var i = 0, ii = styleSheets.length; i < ii; ++i) {
      var styleSheet = styleSheets[i];
      try {
        var cssRules = styleSheet.rules || styleSheet.cssRules;
        if (cssRules) {
          for (var j = 0, jj = cssRules.length; j < jj; ++j) {
            var cssRule = cssRules[j];
            if (cssRule.type == 5) {
              var match = cssRule.cssText.match(fontFamilyRegEx);
              loadedFontFamilies[match[1].replace(stripQuotesRegEx, "")] = true;
            }
          }
        }
      } catch (e) {
      }
    }
  }
  return family in loadedFontFamilies;
}
var processedFontFamilies = {};
function getFonts(fonts) {
  var fontsKey = fonts.toString();
  if (fontsKey in processedFontFamilies) {
    return processedFontFamilies[fontsKey];
  }
  var googleFontDescriptions = [];
  for (var i = 0, ii = fonts.length; i < ii; ++i) {
    fonts[i] = fonts[i].replace("Arial Unicode MS", "Arial");
    var font = fonts[i];
    var cssFont = mapboxToCssFont(font, 1);
    registerFont(cssFont);
    var parts = cssFont.split(" ");
    googleFontDescriptions.push([
      parts.slice(3).join(" ").replace(/"/g, ""),
      parts[1],
      parts[0]
    ]);
  }
  for (var i$1 = 0, ii$1 = googleFontDescriptions.length; i$1 < ii$1; ++i$1) {
    var googleFontDescription = googleFontDescriptions[i$1];
    var family = googleFontDescription[0];
    if (!hasFontFamily(family)) {
      if (checkedFonts.get(googleFontDescription[2] + "\n" + googleFontDescription[1] + " \n" + family) !== 100) {
        var fontUrl = "https://fonts.googleapis.com/css?family=" + family.replace(/ /g, "+") + ":" + googleFontDescription[1] + googleFontDescription[2];
        if (!document.querySelector('link[href="' + fontUrl + '"]')) {
          var markup = document.createElement("link");
          markup.href = fontUrl;
          markup.rel = "stylesheet";
          document.head.appendChild(markup);
        }
      }
    }
  }
  processedFontFamilies[fontsKey] = fonts;
  return fonts;
}
var types = {
  "Point": 1,
  "MultiPoint": 1,
  "LineString": 2,
  "MultiLineString": 2,
  "Polygon": 3,
  "MultiPolygon": 3
};
var anchor = {
  "center": [
    0.5,
    0.5
  ],
  "left": [
    0,
    0.5
  ],
  "right": [
    1,
    0.5
  ],
  "top": [
    0.5,
    0
  ],
  "bottom": [
    0.5,
    1
  ],
  "top-left": [
    0,
    0
  ],
  "top-right": [
    1,
    0
  ],
  "bottom-left": [
    0,
    1
  ],
  "bottom-right": [
    1,
    1
  ]
};
var expressionData = function(rawExpression, propertySpec) {
  var compiledExpression = createPropertyExpression(rawExpression, propertySpec);
  if (compiledExpression.result === "error") {
    throw new Error(compiledExpression.value.map(function(err) {
      return err.key + ": " + err.message;
    }).join(", "));
  }
  return compiledExpression.value;
};
var emptyObj$1 = {};
var zoomObj = { zoom: 0 };
var renderFeatureCoordinates;
var renderFeature2;
function getValue(layer, layoutOrPaint, property, zoom, feature, functionCache, featureState) {
  var layerId = layer.id;
  if (!functionCache) {
    functionCache = {};
    console.warn("No functionCache provided to getValue()");
  }
  if (!functionCache[layerId]) {
    functionCache[layerId] = {};
  }
  var functions = functionCache[layerId];
  if (!functions[property]) {
    var value = (layer[layoutOrPaint] || emptyObj$1)[property];
    var propertySpec = spec[layoutOrPaint + "_" + layer.type][property];
    if (value === void 0) {
      value = propertySpec.default;
    }
    var isExpr = isExpression(value);
    if (!isExpr && isFunction(value)) {
      value = convertFunction(value, propertySpec);
      isExpr = true;
    }
    if (isExpr) {
      var compiledExpression = expressionData(value, propertySpec);
      functions[property] = compiledExpression.evaluate.bind(compiledExpression);
    } else {
      if (propertySpec.type == "color") {
        value = Color$1.parse(value);
      }
      functions[property] = function() {
        return value;
      };
    }
  }
  zoomObj.zoom = zoom;
  return functions[property](zoomObj, feature, featureState);
}
function getIconDeclutterMode(layer, zoom, feature, functionCache) {
  var allowOverlap = getValue(layer, "layout", "icon-allow-overlap", zoom, feature, functionCache);
  if (!allowOverlap) {
    return "declutter";
  }
  var ignorePlacement = getValue(layer, "layout", "icon-ignore-placement", zoom, feature, functionCache);
  if (!ignorePlacement) {
    return "obstacle";
  }
  return "none";
}
function evaluateFilter(layerId, filter, feature, zoom, filterCache) {
  if (!filterCache) {
    console.warn("No filterCache provided to evaluateFilter()");
  }
  if (!(layerId in filterCache)) {
    filterCache[layerId] = createFilter(filter).filter;
  }
  zoomObj.zoom = zoom;
  return filterCache[layerId](zoomObj, feature);
}
var renderTransparentEnabled = false;
function colorWithOpacity(color2, opacity) {
  if (color2) {
    if (!renderTransparentEnabled && (color2.a === 0 || opacity === 0)) {
      return void 0;
    }
    var a = color2.a;
    opacity = opacity === void 0 ? 1 : opacity;
    return a === 0 ? "transparent" : "rgba(" + Math.round(color2.r * 255 / a) + "," + Math.round(color2.g * 255 / a) + "," + Math.round(color2.b * 255 / a) + "," + a * opacity + ")";
  }
  return color2;
}
var templateRegEx = /\{[^{}}]*\}/g;
function fromTemplate(text, properties2) {
  return text.replace(templateRegEx, function(match) {
    return properties2[match.slice(1, -1)] || "";
  });
}
var recordLayer = false;
function stylefunction(olLayer, glStyle, sourceOrLayers, resolutions, spriteData, spriteImageUrl, getFonts2, getImage) {
  if (resolutions === void 0)
    resolutions = defaultResolutions;
  if (spriteData === void 0)
    spriteData = void 0;
  if (spriteImageUrl === void 0)
    spriteImageUrl = void 0;
  if (getFonts2 === void 0)
    getFonts2 = void 0;
  if (getImage === void 0)
    getImage = void 0;
  if (typeof glStyle == "string") {
    glStyle = JSON.parse(glStyle);
  }
  if (glStyle.version != 8) {
    throw new Error("glStyle version 8 required.");
  }
  var spriteImage, spriteImageSize;
  if (spriteImageUrl) {
    if (typeof Image !== "undefined") {
      var img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function() {
        spriteImage = img;
        spriteImageSize = [
          img.width,
          img.height
        ];
        olLayer.changed();
        img.onload = null;
      };
      img.src = spriteImageUrl;
    } else if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
      var worker = self;
      worker.postMessage({
        action: "loadImage",
        src: spriteImageUrl
      });
      worker.addEventListener("message", function handler(event) {
        if (event.data.action === "imageLoaded" && event.data.src === spriteImageUrl) {
          spriteImage = event.data.image;
          spriteImageSize = [
            spriteImage.width,
            spriteImage.height
          ];
        }
      });
    }
  }
  var allLayers = derefLayers(glStyle.layers);
  var layersBySourceLayer = {};
  var mapboxLayers = [];
  var iconImageCache = {};
  var patternCache = {};
  var functionCache = getFunctionCache(glStyle);
  var filterCache = getFilterCache(glStyle);
  var mapboxSource;
  for (var i = 0, ii = allLayers.length; i < ii; ++i) {
    var layer = allLayers[i];
    var layerId = layer.id;
    if (typeof sourceOrLayers == "string" && layer.source == sourceOrLayers || sourceOrLayers.indexOf(layerId) !== -1) {
      var sourceLayer = layer["source-layer"];
      if (!mapboxSource) {
        mapboxSource = layer.source;
        var source = glStyle.sources[mapboxSource];
        if (!source) {
          throw new Error('Source "' + mapboxSource + '" is not defined');
        }
        var type = source.type;
        if (type !== "vector" && type !== "geojson") {
          throw new Error('Source "' + mapboxSource + '" is not of type "vector" or "geojson", but "' + type + '"');
        }
      } else if (layer.source !== mapboxSource) {
        throw new Error('Layer "' + layerId + '" does not use source "' + mapboxSource);
      }
      var layers = layersBySourceLayer[sourceLayer];
      if (!layers) {
        layers = [];
        layersBySourceLayer[sourceLayer] = layers;
      }
      layers.push({
        layer,
        index: i
      });
      mapboxLayers.push(layerId);
    }
  }
  var textHalo = new Stroke_default();
  var textColor = new Fill_default();
  var styles = [];
  var styleFunction = function(feature, resolution) {
    var properties2 = feature.getProperties();
    var layers2 = layersBySourceLayer[properties2.layer];
    if (!layers2) {
      return;
    }
    var zoom = resolutions.indexOf(resolution);
    if (zoom == -1) {
      zoom = getZoomForResolution(resolution, resolutions);
    }
    var type2 = types[feature.getGeometry().getType()];
    var f = {
      properties: properties2,
      type: type2
    };
    var featureState = olLayer.get("mapbox-featurestate")[feature.getId()];
    var stylesLength = -1;
    var featureBelongsToLayer;
    for (var i2 = 0, ii2 = layers2.length; i2 < ii2; ++i2) {
      var layerData = layers2[i2];
      var layer2 = layerData.layer;
      var layerId2 = layer2.id;
      var layout = layer2.layout || emptyObj$1;
      var paint = layer2.paint || emptyObj$1;
      if (layout.visibility === "none" || "minzoom" in layer2 && zoom < layer2.minzoom || "maxzoom" in layer2 && zoom >= layer2.maxzoom) {
        continue;
      }
      var filter = layer2.filter;
      if (!filter || evaluateFilter(layerId2, filter, f, zoom, filterCache)) {
        featureBelongsToLayer = layer2;
        var color2 = void 0, opacity = void 0, fill = void 0, stroke = void 0, strokeColor = void 0, style = void 0;
        var index = layerData.index;
        if (type2 == 3 && (layer2.type == "fill" || layer2.type == "fill-extrusion")) {
          opacity = getValue(layer2, "paint", layer2.type + "-opacity", zoom, f, functionCache, featureState);
          if (layer2.type + "-pattern" in paint) {
            var fillIcon = getValue(layer2, "paint", layer2.type + "-pattern", zoom, f, functionCache, featureState);
            if (fillIcon) {
              var icon = typeof fillIcon === "string" ? fromTemplate(fillIcon, properties2) : fillIcon.toString();
              if (spriteImage && spriteData && spriteData[icon]) {
                ++stylesLength;
                style = styles[stylesLength];
                if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                  style = new Style_default({ fill: new Fill_default() });
                  styles[stylesLength] = style;
                }
                fill = style.getFill();
                style.setZIndex(index);
                var icon_cache_key = icon + "." + opacity;
                var pattern = patternCache[icon_cache_key];
                if (!pattern) {
                  var spriteImageData = spriteData[icon];
                  var canvas = createCanvas(spriteImageData.width, spriteImageData.height);
                  var ctx = canvas.getContext("2d");
                  ctx.globalAlpha = opacity;
                  ctx.drawImage(spriteImage, spriteImageData.x, spriteImageData.y, spriteImageData.width, spriteImageData.height, 0, 0, spriteImageData.width, spriteImageData.height);
                  pattern = ctx.createPattern(canvas, "repeat");
                  patternCache[icon_cache_key] = pattern;
                }
                fill.setColor(pattern);
              }
            }
          } else {
            color2 = colorWithOpacity(getValue(layer2, "paint", layer2.type + "-color", zoom, f, functionCache, featureState), opacity);
            if (layer2.type + "-outline-color" in paint) {
              strokeColor = colorWithOpacity(getValue(layer2, "paint", layer2.type + "-outline-color", zoom, f, functionCache, featureState), opacity);
            }
            if (!strokeColor) {
              strokeColor = color2;
            }
            if (color2 || strokeColor) {
              ++stylesLength;
              style = styles[stylesLength];
              if (!style || color2 && !style.getFill() || !color2 && style.getFill() || strokeColor && !style.getStroke() || !strokeColor && style.getStroke() || style.getText()) {
                style = new Style_default({
                  fill: color2 ? new Fill_default() : void 0,
                  stroke: strokeColor ? new Stroke_default() : void 0
                });
                styles[stylesLength] = style;
              }
              if (color2) {
                fill = style.getFill();
                fill.setColor(color2);
              }
              if (strokeColor) {
                stroke = style.getStroke();
                stroke.setColor(strokeColor);
                stroke.setWidth(0.5);
              }
              style.setZIndex(index);
            }
          }
        }
        if (type2 != 1 && layer2.type == "line") {
          color2 = !("line-pattern" in paint) && "line-color" in paint ? colorWithOpacity(getValue(layer2, "paint", "line-color", zoom, f, functionCache, featureState), getValue(layer2, "paint", "line-opacity", zoom, f, functionCache, featureState)) : void 0;
          var width = getValue(layer2, "paint", "line-width", zoom, f, functionCache, featureState);
          if (color2 && width > 0) {
            ++stylesLength;
            style = styles[stylesLength];
            if (!style || !style.getStroke() || style.getFill() || style.getText()) {
              style = new Style_default({ stroke: new Stroke_default() });
              styles[stylesLength] = style;
            }
            stroke = style.getStroke();
            stroke.setLineCap(getValue(layer2, "layout", "line-cap", zoom, f, functionCache, featureState));
            stroke.setLineJoin(getValue(layer2, "layout", "line-join", zoom, f, functionCache, featureState));
            stroke.setMiterLimit(getValue(layer2, "layout", "line-miter-limit", zoom, f, functionCache, featureState));
            stroke.setColor(color2);
            stroke.setWidth(width);
            stroke.setLineDash(paint["line-dasharray"] ? getValue(layer2, "paint", "line-dasharray", zoom, f, functionCache, featureState).map(function(x) {
              return x * width;
            }) : null);
            style.setZIndex(index);
          }
        }
        var hasImage = false;
        var text = null;
        var placementAngle = 0;
        var icon$1 = void 0, iconImg = void 0, skipLabel = void 0;
        if ((type2 == 1 || type2 == 2) && "icon-image" in layout) {
          var iconImage = getValue(layer2, "layout", "icon-image", zoom, f, functionCache, featureState);
          if (iconImage) {
            icon$1 = typeof iconImage === "string" ? fromTemplate(iconImage, properties2) : iconImage.toString();
            var styleGeom = void 0;
            var imageElement = getImage ? getImage(olLayer, icon$1) : void 0;
            if (spriteImage && spriteData && spriteData[icon$1] || imageElement) {
              var iconRotationAlignment = getValue(layer2, "layout", "icon-rotation-alignment", zoom, f, functionCache, featureState);
              if (type2 == 2) {
                var geom = feature.getGeometry();
                if (geom.getFlatMidpoint || geom.getFlatMidpoints) {
                  var extent = geom.getExtent();
                  var size = Math.sqrt(Math.max(Math.pow((extent[2] - extent[0]) / resolution, 2), Math.pow((extent[3] - extent[1]) / resolution, 2)));
                  if (size > 150) {
                    var midpoint = geom.getType() === "MultiLineString" ? geom.getFlatMidpoints() : geom.getFlatMidpoint();
                    if (!renderFeature2) {
                      renderFeatureCoordinates = [
                        NaN,
                        NaN
                      ];
                      renderFeature2 = new Feature_default3("Point", renderFeatureCoordinates, [], {}, null);
                    }
                    styleGeom = renderFeature2;
                    renderFeatureCoordinates[0] = midpoint[0];
                    renderFeatureCoordinates[1] = midpoint[1];
                    var placement = getValue(layer2, "layout", "symbol-placement", zoom, f, functionCache, featureState);
                    if (placement === "line" && iconRotationAlignment === "map") {
                      var stride = geom.getStride();
                      var coordinates = geom.getFlatCoordinates();
                      for (var i$1 = 0, ii$1 = coordinates.length - stride; i$1 < ii$1; i$1 += stride) {
                        var x1 = coordinates[i$1];
                        var y1 = coordinates[i$1 + 1];
                        var x2 = coordinates[i$1 + stride];
                        var y2 = coordinates[i$1 + stride + 1];
                        var minX = Math.min(x1, x2);
                        var minY = Math.min(y1, y2);
                        var maxX = Math.max(x1, x2);
                        var maxY = Math.max(y1, y2);
                        if (midpoint[0] >= minX && midpoint[0] <= maxX && midpoint[1] >= minY && midpoint[1] <= maxY) {
                          placementAngle = Math.atan2(y1 - y2, x2 - x1);
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if (type2 !== 2 || styleGeom) {
                var iconSize = getValue(layer2, "layout", "icon-size", zoom, f, functionCache, featureState);
                var iconColor = paint["icon-color"] !== void 0 ? getValue(layer2, "paint", "icon-color", zoom, f, functionCache, featureState) : null;
                if (!iconColor || iconColor.a !== 0) {
                  var haloColor = getValue(layer2, "paint", "icon-halo-color", zoom, f, functionCache, featureState);
                  var haloWidth = getValue(layer2, "paint", "icon-halo-width", zoom, f, functionCache, featureState);
                  var iconCacheKey = icon$1 + "." + iconSize + "." + haloWidth + "." + haloColor;
                  if (iconColor !== null) {
                    iconCacheKey += "." + iconColor;
                  }
                  iconImg = iconImageCache[iconCacheKey];
                  if (!iconImg) {
                    var declutterMode = getIconDeclutterMode(layer2, zoom, f, functionCache);
                    var displacement = void 0;
                    if ("icon-offset" in layout) {
                      displacement = getValue(layer2, "layout", "icon-offset", zoom, f, functionCache, featureState);
                      displacement[1] *= -1;
                    }
                    var color$1 = iconColor ? [
                      iconColor.r * 255,
                      iconColor.g * 255,
                      iconColor.b * 255,
                      iconColor.a
                    ] : void 0;
                    if (imageElement) {
                      var iconOptions = {
                        color: color$1,
                        rotateWithView: iconRotationAlignment === "map",
                        displacement,
                        declutterMode
                      };
                      if (typeof imageElement === "string") {
                        iconOptions.src = imageElement;
                      } else {
                        iconOptions.img = imageElement;
                        iconOptions.imgSize = [
                          imageElement.width,
                          imageElement.height
                        ];
                      }
                      iconImg = new Icon_default(iconOptions);
                    } else {
                      var spriteImageData$1 = spriteData[icon$1];
                      var img2 = void 0, imgSize = void 0, size$1 = void 0, offset = void 0;
                      if (haloWidth) {
                        img2 = drawIconHalo(spriteImage, spriteImageData$1, haloWidth, haloColor);
                        imgSize = [
                          img2.width,
                          img2.height
                        ];
                      } else {
                        img2 = spriteImage;
                        imgSize = spriteImageSize;
                        size$1 = [
                          spriteImageData$1.width,
                          spriteImageData$1.height
                        ];
                        offset = [
                          spriteImageData$1.x,
                          spriteImageData$1.y
                        ];
                      }
                      iconImg = new Icon_default({
                        color: color$1,
                        img: img2,
                        imgSize,
                        size: size$1,
                        offset,
                        rotateWithView: iconRotationAlignment === "map",
                        scale: iconSize / spriteImageData$1.pixelRatio,
                        displacement,
                        declutterMode
                      });
                    }
                    iconImageCache[iconCacheKey] = iconImg;
                  }
                }
                if (iconImg) {
                  ++stylesLength;
                  style = styles[stylesLength];
                  if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
                    style = new Style_default();
                    styles[stylesLength] = style;
                  }
                  style.setGeometry(styleGeom);
                  iconImg.setRotation(placementAngle + deg2rad(getValue(layer2, "layout", "icon-rotate", zoom, f, functionCache, featureState)));
                  iconImg.setOpacity(getValue(layer2, "paint", "icon-opacity", zoom, f, functionCache, featureState));
                  iconImg.setAnchor(anchor[getValue(layer2, "layout", "icon-anchor", zoom, f, functionCache, featureState)]);
                  style.setImage(iconImg);
                  text = style.getText();
                  style.setText(void 0);
                  style.setZIndex(index);
                  hasImage = true;
                  skipLabel = false;
                }
              } else {
                skipLabel = true;
              }
            }
          }
        }
        if (type2 == 1 && layer2.type === "circle") {
          ++stylesLength;
          style = styles[stylesLength];
          if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
            style = new Style_default();
            styles[stylesLength] = style;
          }
          var circleRadius = "circle-radius" in paint ? getValue(layer2, "paint", "circle-radius", zoom, f, functionCache, featureState) : 5;
          var circleStrokeColor = colorWithOpacity(getValue(layer2, "paint", "circle-stroke-color", zoom, f, functionCache, featureState), getValue(layer2, "paint", "circle-stroke-opacity", zoom, f, functionCache, featureState));
          var circleColor = colorWithOpacity(getValue(layer2, "paint", "circle-color", zoom, f, functionCache, featureState), getValue(layer2, "paint", "circle-opacity", zoom, f, functionCache, featureState));
          var circleStrokeWidth = getValue(layer2, "paint", "circle-stroke-width", zoom, f, functionCache, featureState);
          var cache_key = circleRadius + "." + circleStrokeColor + "." + circleColor + "." + circleStrokeWidth;
          iconImg = iconImageCache[cache_key];
          if (!iconImg) {
            iconImg = new Circle_default({
              radius: circleRadius,
              stroke: circleStrokeColor && circleStrokeWidth > 0 ? new Stroke_default({
                width: circleStrokeWidth,
                color: circleStrokeColor
              }) : void 0,
              fill: circleColor ? new Fill_default({ color: circleColor }) : void 0,
              declutterMode: "none"
            });
            iconImageCache[cache_key] = iconImg;
          }
          style.setImage(iconImg);
          text = style.getText();
          style.setText(void 0);
          style.setGeometry(void 0);
          style.setZIndex(index);
          hasImage = true;
        }
        var label = void 0, font = void 0, textLineHeight = void 0, textSize = void 0, letterSpacing = void 0, maxTextWidth = void 0;
        if ("text-field" in layout) {
          textSize = Math.round(getValue(layer2, "layout", "text-size", zoom, f, functionCache, featureState));
          var fontArray = getValue(layer2, "layout", "text-font", zoom, f, functionCache, featureState);
          textLineHeight = getValue(layer2, "layout", "text-line-height", zoom, f, functionCache, featureState);
          font = mapboxToCssFont(getFonts2 ? getFonts2(fontArray) : fontArray, textSize, textLineHeight);
          if (!font.includes("sans-serif")) {
            font += ",sans-serif";
          }
          letterSpacing = getValue(layer2, "layout", "text-letter-spacing", zoom, f, functionCache, featureState);
          maxTextWidth = getValue(layer2, "layout", "text-max-width", zoom, f, functionCache, featureState);
          var textField = getValue(layer2, "layout", "text-field", zoom, f, functionCache, featureState);
          if (typeof textField === "object" && textField.sections) {
            if (textField.sections.length === 1) {
              label = textField.toString();
            } else {
              label = textField.sections.reduce(function(acc, chunk, i3) {
                var fonts = chunk.fontStack ? chunk.fontStack.split(",") : fontArray;
                var chunkFont = mapboxToCssFont(getFonts2 ? getFonts2(fonts) : fonts, textSize * (chunk.scale || 1), textLineHeight);
                var text2 = chunk.text;
                if (text2 === "\n") {
                  acc.push("\n", "");
                  return acc;
                }
                if (type2 == 2) {
                  acc.push(applyLetterSpacing(text2, letterSpacing), chunkFont);
                  return;
                }
                text2 = wrapText(text2, chunkFont, maxTextWidth, letterSpacing).split("\n");
                for (var i$12 = 0, ii3 = text2.length; i$12 < ii3; ++i$12) {
                  if (i$12 > 0) {
                    acc.push("\n", "");
                  }
                  acc.push(text2[i$12], chunkFont);
                }
                return acc;
              }, []);
            }
          } else {
            label = fromTemplate(textField, properties2).trim();
          }
          opacity = getValue(layer2, "paint", "text-opacity", zoom, f, functionCache, featureState);
        }
        if (label && opacity && !skipLabel) {
          if (!hasImage) {
            ++stylesLength;
            style = styles[stylesLength];
            if (!style || !style.getText() || style.getFill() || style.getStroke()) {
              style = new Style_default();
              styles[stylesLength] = style;
            }
            style.setImage(void 0);
            style.setGeometry(void 0);
          }
          if (!style.getText()) {
            style.setText(text || new Text_default({
              padding: [
                2,
                2,
                2,
                2
              ]
            }));
          }
          text = style.getText();
          var textTransform = layout["text-transform"];
          if (textTransform == "uppercase") {
            label = Array.isArray(label) ? label.map(function(t, i3) {
              return i3 % 2 ? t : t.toUpperCase();
            }) : label.toUpperCase();
          } else if (textTransform == "lowercase") {
            label = Array.isArray(label) ? label.map(function(t, i3) {
              return i3 % 2 ? t : t.toLowerCase();
            }) : label.toLowerCase();
          }
          var wrappedLabel = Array.isArray(label) ? label : type2 == 2 ? applyLetterSpacing(label, letterSpacing) : wrapText(label, font, maxTextWidth, letterSpacing);
          text.setText(wrappedLabel);
          text.setFont(font);
          text.setRotation(deg2rad(getValue(layer2, "layout", "text-rotate", zoom, f, functionCache, featureState)));
          var textAnchor = getValue(layer2, "layout", "text-anchor", zoom, f, functionCache, featureState);
          var placement$1 = hasImage || type2 == 1 ? "point" : getValue(layer2, "layout", "symbol-placement", zoom, f, functionCache, featureState);
          text.setPlacement(placement$1);
          if (typeof text.setRepeat === "function") {
            var symbolSpacing = getValue(layer2, "layout", "symbol-spacing", zoom, f, functionCache, featureState);
            text.setRepeat(symbolSpacing * 2);
          }
          text.setOverflow(placement$1 === "point");
          var textHaloWidth = getValue(layer2, "paint", "text-halo-width", zoom, f, functionCache, featureState);
          var textOffset = getValue(layer2, "layout", "text-offset", zoom, f, functionCache, featureState);
          var textTranslate = getValue(layer2, "paint", "text-translate", zoom, f, functionCache, featureState);
          var vOffset = 0;
          var hOffset = 0;
          if (placement$1 == "point") {
            var textAlign = "center";
            if (textAnchor.indexOf("left") !== -1) {
              textAlign = "left";
              hOffset = textHaloWidth;
            } else if (textAnchor.indexOf("right") !== -1) {
              textAlign = "right";
              hOffset = -textHaloWidth;
            }
            text.setTextAlign(textAlign);
            var textRotationAlignment = getValue(layer2, "layout", "text-rotation-alignment", zoom, f, functionCache, featureState);
            text.setRotateWithView(textRotationAlignment == "map");
          } else {
            text.setMaxAngle(deg2rad(getValue(layer2, "layout", "text-max-angle", zoom, f, functionCache, featureState)) * label.length / wrappedLabel.length);
            text.setTextAlign();
            text.setRotateWithView(false);
          }
          var textBaseline = "middle";
          if (textAnchor.indexOf("bottom") == 0) {
            textBaseline = "bottom";
            vOffset = -textHaloWidth - 0.5 * (textLineHeight - 1) * textSize;
          } else if (textAnchor.indexOf("top") == 0) {
            textBaseline = "top";
            vOffset = textHaloWidth + 0.5 * (textLineHeight - 1) * textSize;
          }
          text.setTextBaseline(textBaseline);
          var textJustify = getValue(layer2, "layout", "text-justify", zoom, f, functionCache, featureState);
          text.setJustify(textJustify === "auto" ? void 0 : textJustify);
          text.setOffsetX(textOffset[0] * textSize + hOffset + textTranslate[0]);
          text.setOffsetY(textOffset[1] * textSize + vOffset + textTranslate[1]);
          textColor.setColor(colorWithOpacity(getValue(layer2, "paint", "text-color", zoom, f, functionCache, featureState), opacity));
          text.setFill(textColor);
          var haloColor$1 = colorWithOpacity(getValue(layer2, "paint", "text-halo-color", zoom, f, functionCache, featureState), opacity);
          if (haloColor$1) {
            textHalo.setColor(haloColor$1);
            textHaloWidth *= 2;
            var halfTextSize = 0.5 * textSize;
            textHalo.setWidth(textHaloWidth <= halfTextSize ? textHaloWidth : halfTextSize);
            text.setStroke(textHalo);
          } else {
            text.setStroke(void 0);
          }
          var textPadding = getValue(layer2, "layout", "text-padding", zoom, f, functionCache, featureState);
          var padding = text.getPadding();
          if (textPadding !== padding[0]) {
            padding[0] = textPadding;
            padding[1] = textPadding;
            padding[2] = textPadding;
            padding[3] = textPadding;
          }
          style.setZIndex(index);
        }
      }
    }
    if (stylesLength > -1) {
      styles.length = stylesLength + 1;
      if (recordLayer) {
        if (typeof feature.set === "function") {
          feature.set("mapbox-layer", featureBelongsToLayer);
        } else {
          feature.getProperties()["mapbox-layer"] = featureBelongsToLayer;
        }
      }
      return styles;
    }
  };
  olLayer.setStyle(styleFunction);
  olLayer.set("mapbox-source", mapboxSource);
  olLayer.set("mapbox-layers", mapboxLayers);
  olLayer.set("mapbox-featurestate", {});
  return styleFunction;
}
function getTileResolutions(projection, tileSize) {
  if (tileSize === void 0)
    tileSize = 512;
  return projection.getExtent() ? createXYZ({
    extent: projection.getExtent(),
    tileSize,
    maxZoom: 22
  }).getResolutions() : defaultResolutions;
}
function completeOptions(styleUrl, options) {
  if (!options.accessToken) {
    options = Object.assign({}, options);
    var searchParams = new URL(styleUrl).searchParams;
    searchParams.forEach(function(value, key) {
      options.accessToken = value;
      options.accessTokenParam = key;
    });
  }
  return options;
}
function applyStyle(layer, glStyle, sourceOrLayersOrOptions, optionsOrPath, resolutions) {
  if (sourceOrLayersOrOptions === void 0)
    sourceOrLayersOrOptions = "";
  if (optionsOrPath === void 0)
    optionsOrPath = {};
  if (resolutions === void 0)
    resolutions = void 0;
  var styleUrl, sourceId;
  var options;
  var sourceOrLayers;
  var updateSource = true;
  if (typeof sourceOrLayersOrOptions !== "string" && !Array.isArray(sourceOrLayersOrOptions)) {
    options = sourceOrLayersOrOptions;
    sourceOrLayers = options.source || options.layers;
    optionsOrPath = options;
  } else {
    sourceOrLayers = sourceOrLayersOrOptions;
  }
  if (typeof optionsOrPath === "string") {
    styleUrl = optionsOrPath;
    options = {};
  } else {
    styleUrl = optionsOrPath.styleUrl;
    options = optionsOrPath;
  }
  if (options.updateSource === false) {
    updateSource = false;
  }
  if (!resolutions) {
    resolutions = options.resolutions;
  }
  if (!styleUrl && typeof glStyle === "string" && !glStyle.trim().startsWith("{")) {
    styleUrl = glStyle;
  }
  if (styleUrl) {
    styleUrl = styleUrl.startsWith("data:") ? location.href : normalizeStyleUrl(styleUrl, options.accessToken);
    options = completeOptions(styleUrl, options);
  }
  return new Promise(function(resolve, reject) {
    getGlStyle(glStyle, options).then(function(glStyle2) {
      if (glStyle2.version != 8) {
        return reject(new Error("glStyle version 8 required."));
      }
      if (!(layer instanceof Vector_default2 || layer instanceof VectorTile_default2)) {
        return reject(new Error("Can only apply to VectorLayer or VectorTileLayer"));
      }
      var type = layer instanceof VectorTile_default2 ? "vector" : "geojson";
      if (!sourceOrLayers) {
        sourceId = Object.keys(glStyle2.sources).find(function(key) {
          return glStyle2.sources[key].type === type;
        });
        sourceOrLayers = sourceId;
      } else if (Array.isArray(sourceOrLayers)) {
        sourceId = glStyle2.layers.find(function(layer2) {
          return layer2.id === sourceOrLayers[0];
        }).source;
      } else {
        sourceId = sourceOrLayers;
      }
      if (!sourceId) {
        return reject(new Error("No " + type + " source found in the glStyle."));
      }
      function assignSource() {
        if (!updateSource) {
          return Promise.resolve();
        }
        if (layer instanceof VectorTile_default2) {
          return setupVectorSource(glStyle2.sources[sourceId], styleUrl, options).then(function(source2) {
            var targetSource2 = layer.getSource();
            if (!targetSource2) {
              layer.setSource(source2);
            } else if (source2 !== targetSource2) {
              targetSource2.setTileUrlFunction(source2.getTileUrlFunction());
              if (!targetSource2.format_) {
                targetSource2.format_ = source2.format_;
              }
              if (!targetSource2.getAttributions()) {
                targetSource2.setAttributions(source2.getAttributions());
              }
              if (targetSource2.getTileLoadFunction() === defaultLoadFunction) {
                targetSource2.setTileLoadFunction(source2.getTileLoadFunction());
              }
              if (equivalent(targetSource2.getProjection(), source2.getProjection())) {
                targetSource2.tileGrid = source2.getTileGrid();
              }
            }
            if (!isFinite(layer.getMaxResolution()) && !isFinite(layer.getMinZoom())) {
              var tileGrid = layer.getSource().getTileGrid();
              layer.setMaxResolution(tileGrid.getResolution(tileGrid.getMinZoom()));
            }
          });
        }
        var glSource = glStyle2.sources[sourceId];
        var source = layer.getSource();
        if (!source || source.get("mapbox-source") !== glSource) {
          source = setupGeoJSONSource(glSource, styleUrl, options);
        }
        var targetSource = layer.getSource();
        if (!targetSource) {
          layer.setSource(source);
        } else if (source !== targetSource) {
          if (!targetSource.getAttributions()) {
            targetSource.setAttributions(source.getAttributions());
          }
          if (!targetSource.format_) {
            targetSource.format_ = source.getFormat();
          }
          targetSource.url_ = source.getUrl();
        }
        return Promise.resolve();
      }
      var spriteScale, spriteData, spriteImageUrl, style;
      function onChange() {
        if (!style && (!glStyle2.sprite || spriteData)) {
          if (options.projection && !resolutions) {
            var projection = get(options.projection);
            var units = projection.getUnits();
            if (units !== "m") {
              resolutions = defaultResolutions.map(function(resolution) {
                return resolution / METERS_PER_UNIT[units];
              });
            }
          }
          style = stylefunction(layer, glStyle2, sourceOrLayers, resolutions, spriteData, spriteImageUrl, getFonts, options.getImage);
          if (!layer.getStyle()) {
            reject(new Error("Nothing to show for source [" + sourceId + "]"));
          } else {
            assignSource().then(resolve).catch(reject);
          }
        } else if (style) {
          layer.setStyle(style);
          assignSource().then(resolve).catch(reject);
        } else {
          reject(new Error("Something went wrong trying to apply style."));
        }
      }
      if (glStyle2.sprite) {
        var sprite = new URL(normalizeSpriteUrl(glStyle2.sprite, options.accessToken, styleUrl || location.href));
        spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
        var sizeFactor = spriteScale == 0.5 ? "@2x" : "";
        var spriteUrl = sprite.origin + sprite.pathname + sizeFactor + ".json" + sprite.search;
        new Promise(function(resolve2, reject2) {
          fetchResource("Sprite", spriteUrl, options).then(resolve2).catch(function(error3) {
            spriteUrl = sprite.origin + sprite.pathname + ".json" + sprite.search;
            fetchResource("Sprite", spriteUrl, options).then(resolve2).catch(reject2);
          });
        }).then(function(spritesJson) {
          if (spritesJson === void 0) {
            reject(new Error("No sprites found."));
          }
          spriteData = spritesJson;
          spriteImageUrl = sprite.origin + sprite.pathname + sizeFactor + ".png" + sprite.search;
          if (options.transformRequest) {
            var transformed = options.transformRequest(spriteImageUrl, "SpriteImage");
            if (transformed instanceof Request) {
              spriteImageUrl = encodeURI(transformed.url);
            }
          }
          onChange();
        }).catch(function(err) {
          reject(new Error("Sprites cannot be loaded: " + spriteUrl + ": " + err.message));
        });
      } else {
        onChange();
      }
    }).catch(reject);
  });
}
var emptyObj = {};
function setFirstBackground(mapOrLayer, glStyle, options) {
  glStyle.layers.some(function(layer) {
    if (layer.type === "background") {
      if (mapOrLayer instanceof Layer_default) {
        mapOrLayer.setBackground(function(resolution) {
          return getBackgroundColor(layer, resolution, options, {});
        });
        return true;
      } else if (mapOrLayer instanceof Map_default || mapOrLayer instanceof Group_default) {
        mapOrLayer.getLayers().push(setupBackgroundLayer(layer, options, {}));
        return true;
      }
    }
  });
}
function applyBackground(mapOrLayer, glStyle, options) {
  if (options === void 0)
    options = {};
  return getGlStyle(glStyle, options).then(function(glStyle2) {
    setFirstBackground(mapOrLayer, glStyle2, options);
  });
}
function extentFromTileJSON(tileJSON, projection) {
  var bounds = tileJSON.bounds;
  if (bounds) {
    var ll = fromLonLat([
      bounds[0],
      bounds[1]
    ], projection);
    var tr = fromLonLat([
      bounds[2],
      bounds[3]
    ], projection);
    return [
      ll[0],
      ll[1],
      tr[0],
      tr[1]
    ];
  }
  return get(projection).getExtent();
}
function sourceOptionsFromTileJSON(glSource, tileJSON, options) {
  var tileJSONSource = new TileJSON_default({
    tileJSON,
    tileSize: glSource.tileSize || tileJSON.tileSize || 512
  });
  var tileJSONDoc = tileJSONSource.getTileJSON();
  var tileGrid = tileJSONSource.getTileGrid();
  var projection = get(options.projection || "EPSG:3857");
  var extent = extentFromTileJSON(tileJSONDoc, projection);
  var projectionExtent = projection.getExtent();
  var minZoom = tileJSONDoc.minzoom || 0;
  var maxZoom = tileJSONDoc.maxzoom || 22;
  var sourceOptions = {
    attributions: tileJSONSource.getAttributions(),
    projection,
    tileGrid: new TileGrid_default({
      origin: projectionExtent ? getTopLeft(projectionExtent) : tileGrid.getOrigin(0),
      extent: extent || tileGrid.getExtent(),
      minZoom,
      resolutions: getTileResolutions(projection, tileJSON.tileSize).slice(0, maxZoom + 1),
      tileSize: tileGrid.getTileSize(0)
    })
  };
  if (Array.isArray(tileJSONDoc.tiles)) {
    sourceOptions.urls = tileJSONDoc.tiles;
  } else {
    sourceOptions.url = tileJSONDoc.tiles;
  }
  return sourceOptions;
}
function getBackgroundColor(glLayer, resolution, options, functionCache) {
  var background = {
    id: glLayer.id,
    type: glLayer.type
  };
  var layout = glLayer.layout || {};
  var paint = glLayer.paint || {};
  background["paint"] = paint;
  var zoom = getZoomForResolution(resolution, options.resolutions || defaultResolutions);
  var bg, opacity;
  if (paint["background-color"] !== void 0) {
    bg = getValue(background, "paint", "background-color", zoom, emptyObj, functionCache);
  }
  if (paint["background-opacity"] !== void 0) {
    opacity = getValue(background, "paint", "background-opacity", zoom, emptyObj, functionCache);
  }
  return layout.visibility == "none" ? void 0 : colorWithOpacity(bg, opacity);
}
function setupBackgroundLayer(glLayer, options, functionCache) {
  var div = document.createElement("div");
  div.className = "ol-mapbox-style-background";
  div.style.position = "absolute";
  div.style.width = "100%";
  div.style.height = "100%";
  return new Layer_default({
    source: new Source_default({}),
    render: function render(frameState) {
      var color2 = getBackgroundColor(glLayer, frameState.viewState.resolution, options, functionCache);
      div.style.backgroundColor = color2;
      return div;
    }
  });
}
function setupVectorSource(glSource, styleUrl, options) {
  return new Promise(function(resolve, reject) {
    getTileJson(glSource, styleUrl, options).then(function(tileJSON) {
      var sourceOptions = sourceOptionsFromTileJSON(glSource, tileJSON, options);
      sourceOptions.format = new MVT_default();
      if (Array.isArray(tileJSON.tiles)) {
        sourceOptions.urls = tileJSON.tiles;
      } else {
        sourceOptions.url = tileJSON.tiles;
      }
      resolve(new VectorTile_default(sourceOptions));
    }).catch(reject);
  });
}
function getBboxTemplate(projection) {
  var projCode = projection ? projection.getCode() : "EPSG:3857";
  return "{bbox-" + projCode.toLowerCase().replace(/[^a-z0-9]/g, "-") + "}";
}
var geoJsonFormat = new GeoJSON_default();
function setupGeoJSONSource(glSource, styleUrl, options) {
  var data = glSource.data;
  var sourceOptions = {};
  if (typeof data == "string") {
    var geoJsonUrl = normalizeSourceUrl(data, options.accessToken, options.accessTokenParam || "access_token", styleUrl || location.href);
    if (options.transformRequest) {
      var transformed = options.transformRequest(geoJsonUrl, "GeoJSON");
      if (transformed instanceof Request) {
        geoJsonUrl = decodeURI(transformed.url);
      }
    }
    if (/\{bbox-[0-9a-z-]+\}/.test(geoJsonUrl)) {
      var extentUrl = function(extent, resolution, projection) {
        var bboxTemplate = getBboxTemplate(projection);
        return geoJsonUrl.replace(bboxTemplate, extent.join(",") + "," + projection.getCode());
      };
      var source$1 = new Vector_default({
        attributions: glSource.attribution,
        format: geoJsonFormat,
        url: extentUrl,
        strategy: bbox
      });
      source$1.set("mapbox-source", glSource);
      return source$1;
    }
    return new Vector_default({
      attributions: glSource.attribution,
      format: geoJsonFormat,
      url: geoJsonUrl
    });
  }
  sourceOptions.features = geoJsonFormat.readFeatures(data, { featureProjection: getUserProjection() || "EPSG:3857" });
  var source = new Vector_default(Object.assign({
    attributions: glSource.attribution,
    format: geoJsonFormat
  }, sourceOptions));
  source.set("mapbox-source", glSource);
  return source;
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/MapboxVector.js
var ErrorEvent = class extends Event_default {
  /**
   * @param {Error} error error object.
   */
  constructor(error3) {
    super(EventType_default.ERROR);
    this.error = error3;
  }
};
var MapboxVectorLayer = class extends VectorTile_default2 {
  /**
   * @param {Options} options Layer options.  At a minimum, `styleUrl` and `accessToken`
   * must be provided.
   */
  constructor(options) {
    const declutter = "declutter" in options ? options.declutter : true;
    const source = new VectorTile_default({
      state: "loading",
      format: new MVT_default()
    });
    super({
      source,
      background: options.background,
      declutter,
      className: options.className,
      opacity: options.opacity,
      visible: options.visible,
      zIndex: options.zIndex,
      minResolution: options.minResolution,
      maxResolution: options.maxResolution,
      minZoom: options.minZoom,
      maxZoom: options.maxZoom,
      renderOrder: options.renderOrder,
      renderBuffer: options.renderBuffer,
      renderMode: options.renderMode,
      map: options.map,
      updateWhileAnimating: options.updateWhileAnimating,
      updateWhileInteracting: options.updateWhileInteracting,
      preload: options.preload,
      useInterimTilesOnError: options.useInterimTilesOnError,
      properties: options.properties
    });
    if (options.accessToken) {
      this.accessToken = options.accessToken;
    }
    const url = options.styleUrl;
    applyStyle(this, url, options.layers || options.source, {
      accessToken: this.accessToken
    }).then(() => {
      source.setState("ready");
    }).catch((error3) => {
      this.dispatchEvent(new ErrorEvent(error3));
      const source2 = this.getSource();
      source2.setState("error");
    });
    if (this.getBackground() === void 0) {
      applyBackground(this, options.styleUrl, {
        accessToken: this.accessToken
      });
    }
  }
};
var MapboxVector_default = MapboxVectorLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/canvas/VectorImageLayer.js
var CanvasVectorImageLayerRenderer = class extends ImageLayer_default {
  /**
   * @param {import("../../layer/VectorImage.js").default} layer Vector image layer.
   */
  constructor(layer) {
    super(layer);
    this.vectorRenderer_ = new VectorLayer_default(layer);
    this.layerImageRatio_ = layer.getImageRatio();
    this.coordinateToVectorPixelTransform_ = create();
    this.renderedPixelToCoordinateTransform_ = null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.vectorRenderer_.dispose();
    super.disposeInternal();
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise that resolves with an array of features.
   */
  getFeatures(pixel) {
    if (!this.vectorRenderer_) {
      return Promise.resolve([]);
    }
    const vectorPixel = apply(
      this.coordinateToVectorPixelTransform_,
      apply(this.renderedPixelToCoordinateTransform_, pixel.slice())
    );
    return this.vectorRenderer_.getFeatures(vectorPixel);
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    this.vectorRenderer_.handleFontsChanged();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(frameState) {
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewResolution = viewState.resolution;
    const hints = frameState.viewHints;
    const vectorRenderer = this.vectorRenderer_;
    let renderedExtent = frameState.extent;
    if (this.layerImageRatio_ !== 1) {
      renderedExtent = renderedExtent.slice(0);
      scaleFromCenter(renderedExtent, this.layerImageRatio_);
    }
    const width = getWidth(renderedExtent) / viewResolution;
    const height = getHeight(renderedExtent) / viewResolution;
    if (!hints[ViewHint_default.ANIMATING] && !hints[ViewHint_default.INTERACTING] && !isEmpty2(renderedExtent)) {
      vectorRenderer.useContainer(null, null);
      const context = vectorRenderer.context;
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      context.globalAlpha = layerState.opacity;
      const imageLayerState = Object.assign({}, layerState, { opacity: 1 });
      const imageFrameState = (
        /** @type {import("../../Map.js").FrameState} */
        Object.assign({}, frameState, {
          declutterTree: new RBush(9),
          extent: renderedExtent,
          size: [width, height],
          viewState: (
            /** @type {import("../../View.js").State} */
            Object.assign({}, frameState.viewState, {
              rotation: 0
            })
          ),
          layerStatesArray: [imageLayerState],
          layerIndex: 0
        })
      );
      let emptyImage = true;
      const image = new ImageCanvas_default(
        renderedExtent,
        viewResolution,
        pixelRatio,
        context.canvas,
        function(callback) {
          if (vectorRenderer.prepareFrame(imageFrameState) && vectorRenderer.replayGroupChanged) {
            vectorRenderer.clipping = false;
            if (vectorRenderer.renderFrame(imageFrameState, null)) {
              vectorRenderer.renderDeclutter(imageFrameState);
              emptyImage = false;
            }
            callback();
          }
        }
      );
      image.addEventListener(EventType_default.CHANGE, () => {
        if (image.getState() !== ImageState_default.LOADED) {
          return;
        }
        this.image_ = emptyImage ? null : image;
        const imageResolution = image.getResolution();
        const imagePixelRatio = image.getPixelRatio();
        const renderedResolution = imageResolution * pixelRatio / imagePixelRatio;
        this.renderedResolution = renderedResolution;
        this.coordinateToVectorPixelTransform_ = compose(
          this.coordinateToVectorPixelTransform_,
          width / 2,
          height / 2,
          1 / renderedResolution,
          -1 / renderedResolution,
          0,
          -viewState.center[0],
          -viewState.center[1]
        );
      });
      image.load();
    }
    if (this.image_) {
      this.renderedPixelToCoordinateTransform_ = frameState.pixelToCoordinateTransform.slice();
    }
    return !!this.image_;
  }
  /**
   */
  preRender() {
  }
  /**
   */
  postRender() {
  }
  /**
   */
  renderDeclutter() {
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
    if (this.vectorRenderer_) {
      return this.vectorRenderer_.forEachFeatureAtCoordinate(
        coordinate,
        frameState,
        hitTolerance,
        callback,
        matches
      );
    }
    return super.forEachFeatureAtCoordinate(
      coordinate,
      frameState,
      hitTolerance,
      callback,
      matches
    );
  }
};
var VectorImageLayer_default = CanvasVectorImageLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/VectorImage.js
var VectorImageLayer = class extends BaseVector_default {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.imageRatio;
    super(baseOptions);
    this.imageRatio_ = options.imageRatio !== void 0 ? options.imageRatio : 1;
  }
  /**
   * @return {number} Ratio between rendered extent size and viewport extent size.
   */
  getImageRatio() {
    return this.imageRatio_;
  }
  createRenderer() {
    return new VectorImageLayer_default(this);
  }
};
var VectorImage_default = VectorImageLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/PaletteTexture.js
var PaletteTexture = class {
  /**
   * @param {string} name The name of the texture.
   * @param {Uint8Array} data The texture data.
   */
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.texture_ = null;
  }
  /**
   * @param {WebGLRenderingContext} gl Rendering context.
   * @return {WebGLTexture} The texture.
   */
  getTexture(gl) {
    if (!this.texture_) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        this.data.length / 4,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        this.data
      );
      this.texture_ = texture;
    }
    return this.texture_;
  }
};
var PaletteTexture_default = PaletteTexture;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/TileTexture.js
function bindAndConfigure(gl, texture, interpolate2) {
  const resampleFilter = interpolate2 ? gl.LINEAR : gl.NEAREST;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, resampleFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, resampleFilter);
}
function uploadImageTexture(gl, texture, image, interpolate2) {
  bindAndConfigure(gl, texture, interpolate2);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
}
function uploadDataTexture(helper, texture, data, size, bandCount, interpolate2) {
  const gl = helper.getGL();
  let textureType;
  let canInterpolate;
  if (data instanceof Float32Array) {
    textureType = gl.FLOAT;
    helper.getExtension("OES_texture_float");
    const extension = helper.getExtension("OES_texture_float_linear");
    canInterpolate = extension !== null;
  } else {
    textureType = gl.UNSIGNED_BYTE;
    canInterpolate = true;
  }
  bindAndConfigure(gl, texture, interpolate2 && canInterpolate);
  const bytesPerRow = data.byteLength / size[1];
  let unpackAlignment = 1;
  if (bytesPerRow % 8 === 0) {
    unpackAlignment = 8;
  } else if (bytesPerRow % 4 === 0) {
    unpackAlignment = 4;
  } else if (bytesPerRow % 2 === 0) {
    unpackAlignment = 2;
  }
  let format;
  switch (bandCount) {
    case 1: {
      format = gl.LUMINANCE;
      break;
    }
    case 2: {
      format = gl.LUMINANCE_ALPHA;
      break;
    }
    case 3: {
      format = gl.RGB;
      break;
    }
    case 4: {
      format = gl.RGBA;
      break;
    }
    default: {
      throw new Error(`Unsupported number of bands: ${bandCount}`);
    }
  }
  const oldUnpackAlignment = gl.getParameter(gl.UNPACK_ALIGNMENT);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, unpackAlignment);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    format,
    size[0],
    size[1],
    0,
    format,
    textureType,
    data
  );
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, oldUnpackAlignment);
}
var pixelContext = null;
function createPixelContext() {
  pixelContext = createCanvasContext2D(1, 1, void 0, {
    willReadFrequently: true
  });
}
var TileTexture = class extends Target_default {
  /**
   * @param {Options} options The tile texture options.
   */
  constructor(options) {
    super();
    this.tile;
    this.textures = [];
    this.handleTileChange_ = this.handleTileChange_.bind(this);
    this.renderSize_ = toSize(
      options.grid.getTileSize(options.tile.tileCoord[0])
    );
    this.gutter_ = options.gutter || 0;
    this.bandCount = NaN;
    this.helper_ = options.helper;
    const coords = new Buffer_default(ARRAY_BUFFER, STATIC_DRAW);
    coords.fromArray([
      0,
      // P0
      1,
      1,
      // P1
      1,
      1,
      // P2
      0,
      0,
      // P3
      0
    ]);
    this.helper_.flushBufferData(coords);
    this.coords = coords;
    this.setTile(options.tile);
  }
  /**
   * @param {TileType} tile Tile.
   */
  setTile(tile) {
    if (tile !== this.tile) {
      if (this.tile) {
        this.tile.removeEventListener(EventType_default.CHANGE, this.handleTileChange_);
      }
      this.tile = tile;
      this.textures.length = 0;
      this.loaded = tile.getState() === TileState_default.LOADED;
      if (this.loaded) {
        this.uploadTile_();
      } else {
        if (tile instanceof ImageTile_default) {
          const image = tile.getImage();
          if (image instanceof Image && !image.crossOrigin) {
            image.crossOrigin = "anonymous";
          }
        }
        tile.addEventListener(EventType_default.CHANGE, this.handleTileChange_);
      }
    }
  }
  uploadTile_() {
    const helper = this.helper_;
    const gl = helper.getGL();
    const tile = this.tile;
    let data;
    if (tile instanceof ImageTile_default || tile instanceof Tile_default) {
      data = tile.getImage();
    } else {
      data = tile.getData();
    }
    const image = asImageLike(data);
    if (image) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      this.bandCount = 4;
      uploadImageTexture(gl, texture, image, tile.interpolate);
      return;
    }
    data = asArrayLike(data);
    const sourceTileSize = (
      /** @type {DataTile} */
      tile.getSize()
    );
    const pixelSize = [
      sourceTileSize[0] + 2 * this.gutter_,
      sourceTileSize[1] + 2 * this.gutter_
    ];
    const isFloat = data instanceof Float32Array;
    const pixelCount = pixelSize[0] * pixelSize[1];
    const DataType = isFloat ? Float32Array : Uint8Array;
    const bytesPerElement = DataType.BYTES_PER_ELEMENT;
    const bytesPerRow = data.byteLength / pixelSize[1];
    this.bandCount = Math.floor(bytesPerRow / bytesPerElement / pixelSize[0]);
    const textureCount = Math.ceil(this.bandCount / 4);
    if (textureCount === 1) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      uploadDataTexture(
        helper,
        texture,
        data,
        pixelSize,
        this.bandCount,
        tile.interpolate
      );
      return;
    }
    const textureDataArrays = new Array(textureCount);
    for (let textureIndex = 0; textureIndex < textureCount; ++textureIndex) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      const bandCount = textureIndex < textureCount - 1 ? 4 : (this.bandCount - 1) % 4 + 1;
      textureDataArrays[textureIndex] = new DataType(pixelCount * bandCount);
    }
    let dataIndex = 0;
    let rowOffset = 0;
    const colCount = pixelSize[0] * this.bandCount;
    for (let rowIndex = 0; rowIndex < pixelSize[1]; ++rowIndex) {
      for (let colIndex = 0; colIndex < colCount; ++colIndex) {
        const dataValue = data[rowOffset + colIndex];
        const pixelIndex = Math.floor(dataIndex / this.bandCount);
        const bandIndex = colIndex % this.bandCount;
        const textureIndex = Math.floor(bandIndex / 4);
        const textureData = textureDataArrays[textureIndex];
        const bandCount = textureData.length / pixelCount;
        const textureBandIndex = bandIndex % 4;
        textureData[pixelIndex * bandCount + textureBandIndex] = dataValue;
        ++dataIndex;
      }
      rowOffset += bytesPerRow / bytesPerElement;
    }
    for (let textureIndex = 0; textureIndex < textureCount; ++textureIndex) {
      const texture = this.textures[textureIndex];
      const textureData = textureDataArrays[textureIndex];
      const bandCount = textureData.length / pixelCount;
      uploadDataTexture(
        helper,
        texture,
        textureData,
        pixelSize,
        bandCount,
        tile.interpolate
      );
    }
  }
  handleTileChange_() {
    if (this.tile.getState() === TileState_default.LOADED) {
      this.loaded = true;
      this.uploadTile_();
      this.dispatchEvent(EventType_default.CHANGE);
    }
  }
  disposeInternal() {
    const gl = this.helper_.getGL();
    this.helper_.deleteBuffer(this.coords);
    for (let i = 0; i < this.textures.length; ++i) {
      gl.deleteTexture(this.textures[i]);
    }
    this.tile.removeEventListener(EventType_default.CHANGE, this.handleTileChange_);
  }
  /**
   * @param {import("../DataTile.js").ImageLike} image The image.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {Uint8ClampedArray|null} The data.
   * @private
   */
  getImagePixelData_(image, renderCol, renderRow) {
    const gutter = this.gutter_;
    const renderWidth = this.renderSize_[0];
    const renderHeight = this.renderSize_[1];
    if (!pixelContext) {
      createPixelContext();
    }
    pixelContext.clearRect(0, 0, 1, 1);
    const sourceWidth = image.width;
    const sourceHeight = image.height;
    const sourceWidthWithoutGutter = sourceWidth - 2 * gutter;
    const sourceHeightWithoutGutter = sourceHeight - 2 * gutter;
    const sourceCol = gutter + Math.floor(sourceWidthWithoutGutter * (renderCol / renderWidth));
    const sourceRow = gutter + Math.floor(sourceHeightWithoutGutter * (renderRow / renderHeight));
    let data;
    try {
      pixelContext.drawImage(image, sourceCol, sourceRow, 1, 1, 0, 0, 1, 1);
      data = pixelContext.getImageData(0, 0, 1, 1).data;
    } catch (err) {
      pixelContext = null;
      return null;
    }
    return data;
  }
  /**
   * @param {import("../DataTile.js").ArrayLike} data The data.
   * @param {import("../size.js").Size} sourceSize The size.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   * @private
   */
  getArrayPixelData_(data, sourceSize, renderCol, renderRow) {
    const gutter = this.gutter_;
    const renderWidth = this.renderSize_[0];
    const renderHeight = this.renderSize_[1];
    const sourceWidthWithoutGutter = sourceSize[0];
    const sourceHeightWithoutGutter = sourceSize[1];
    const sourceWidth = sourceWidthWithoutGutter + 2 * gutter;
    const sourceHeight = sourceHeightWithoutGutter + 2 * gutter;
    const sourceCol = gutter + Math.floor(sourceWidthWithoutGutter * (renderCol / renderWidth));
    const sourceRow = gutter + Math.floor(sourceHeightWithoutGutter * (renderRow / renderHeight));
    if (data instanceof DataView) {
      const bytesPerPixel = data.byteLength / (sourceWidth * sourceHeight);
      const offset2 = bytesPerPixel * (sourceRow * sourceWidth + sourceCol);
      const buffer2 = data.buffer.slice(offset2, offset2 + bytesPerPixel);
      return new DataView(buffer2);
    }
    const offset = this.bandCount * (sourceRow * sourceWidth + sourceCol);
    return data.slice(offset, offset + this.bandCount);
  }
  /**
   * Get data for a pixel.  If the tile is not loaded, null is returned.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   */
  getPixelData(renderCol, renderRow) {
    if (!this.loaded) {
      return null;
    }
    if (this.tile instanceof DataTile_default) {
      const data = this.tile.getData();
      const arrayData = asArrayLike(data);
      if (arrayData) {
        const sourceSize = this.tile.getSize();
        return this.getArrayPixelData_(
          arrayData,
          sourceSize,
          renderCol,
          renderRow
        );
      }
      return this.getImagePixelData_(asImageLike(data), renderCol, renderRow);
    }
    return this.getImagePixelData_(this.tile.getImage(), renderCol, renderRow);
  }
};
var TileTexture_default = TileTexture;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/renderer/webgl/TileLayer.js
var Uniforms = {
  TILE_TEXTURE_ARRAY: "u_tileTextures",
  TILE_TRANSFORM: "u_tileTransform",
  TRANSITION_ALPHA: "u_transitionAlpha",
  DEPTH: "u_depth",
  TEXTURE_PIXEL_WIDTH: "u_texturePixelWidth",
  TEXTURE_PIXEL_HEIGHT: "u_texturePixelHeight",
  TEXTURE_RESOLUTION: "u_textureResolution",
  // map units per texture pixel
  TEXTURE_ORIGIN_X: "u_textureOriginX",
  // map x coordinate of left edge of texture
  TEXTURE_ORIGIN_Y: "u_textureOriginY",
  // map y coordinate of top edge of texture
  RENDER_EXTENT: "u_renderExtent",
  // intersection of layer, source, and view extent
  RESOLUTION: "u_resolution",
  ZOOM: "u_zoom"
};
var Attributes = {
  TEXTURE_COORD: "a_textureCoord"
};
var attributeDescriptions = [
  {
    name: Attributes.TEXTURE_COORD,
    size: 2,
    type: AttributeType.FLOAT
  }
];
var empty = {};
function depthForZ(z) {
  return 2 * (1 - 1 / (z + 1)) - 1;
}
function addTileTextureToLookup(tileTexturesByZ, tileTexture, z) {
  if (!(z in tileTexturesByZ)) {
    tileTexturesByZ[z] = [];
  }
  tileTexturesByZ[z].push(tileTexture);
}
function getRenderExtent(frameState, extent) {
  const layerState = frameState.layerStatesArray[frameState.layerIndex];
  if (layerState.extent) {
    extent = getIntersection(
      extent,
      fromUserExtent(layerState.extent, frameState.viewState.projection)
    );
  }
  const source = (
    /** @type {import("../../source/Tile.js").default} */
    layerState.layer.getRenderSource()
  );
  if (!source.getWrapX()) {
    const gridExtent = source.getTileGridForProjection(frameState.viewState.projection).getExtent();
    if (gridExtent) {
      extent = getIntersection(extent, gridExtent);
    }
  }
  return extent;
}
function getCacheKey(source, tileCoord) {
  return `${source.getKey()},${getKey(tileCoord)}`;
}
var WebGLTileLayerRenderer = class extends Layer_default3 {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} options Options.
   */
  constructor(tileLayer, options) {
    super(tileLayer, {
      uniforms: options.uniforms
    });
    this.renderComplete = false;
    this.tileTransform_ = create();
    this.tempMat4_ = create2();
    this.tempTileRange_ = new TileRange_default(0, 0, 0, 0);
    this.tempTileCoord_ = createOrUpdate2(0, 0, 0);
    this.tempSize_ = [0, 0];
    this.program_;
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.indices_ = new Buffer_default(ELEMENT_ARRAY_BUFFER, STATIC_DRAW);
    this.indices_.fromArray([0, 1, 3, 1, 2, 3]);
    const cacheSize = options.cacheSize !== void 0 ? options.cacheSize : 512;
    this.tileTextureCache_ = new LRUCache_default(cacheSize);
    this.paletteTextures_ = options.paletteTextures || [];
    this.frameState_ = null;
    this.projection_ = void 0;
  }
  /**
   * @param {Options} options Options.
   */
  reset(options) {
    super.reset({
      uniforms: options.uniforms
    });
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.paletteTextures_ = options.paletteTextures || [];
    if (this.helper) {
      this.program_ = this.helper.getProgram(
        this.fragmentShader_,
        this.vertexShader_
      );
    }
  }
  afterHelperCreated() {
    this.program_ = this.helper.getProgram(
      this.fragmentShader_,
      this.vertexShader_
    );
    this.helper.flushBufferData(this.indices_);
  }
  /**
   * @param {import("../../webgl/TileTexture").TileType} tile Tile.
   * @return {boolean} Tile is drawable.
   * @private
   */
  isDrawableTile_(tile) {
    const tileLayer = this.getLayer();
    const tileState = tile.getState();
    const useInterimTilesOnError = tileLayer.getUseInterimTilesOnError();
    return tileState == TileState_default.LOADED || tileState == TileState_default.EMPTY || tileState == TileState_default.ERROR && !useInterimTilesOnError;
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrameInternal(frameState) {
    if (!this.projection_) {
      this.projection_ = frameState.viewState.projection;
    } else if (frameState.viewState.projection !== this.projection_) {
      this.clearCache();
      this.projection_ = frameState.viewState.projection;
    }
    const layer = this.getLayer();
    const source = layer.getRenderSource();
    if (!source) {
      return false;
    }
    if (isEmpty2(getRenderExtent(frameState, frameState.extent))) {
      return false;
    }
    return source.getState() === "ready";
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent The extent to be rendered.
   * @param {number} initialZ The zoom level.
   * @param {Object<number, Array<TileTexture>>} tileTexturesByZ The zoom level.
   * @param {number} preload Number of additional levels to load.
   */
  enqueueTiles(frameState, extent, initialZ, tileTexturesByZ, preload) {
    const viewState = frameState.viewState;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getRenderSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const gutter = tileSource.getGutterForProjection(viewState.projection);
    const tileSourceKey = getUid(tileSource);
    if (!(tileSourceKey in frameState.wantedTiles)) {
      frameState.wantedTiles[tileSourceKey] = {};
    }
    const wantedTiles = frameState.wantedTiles[tileSourceKey];
    const tileTextureCache = this.tileTextureCache_;
    const map = tileLayer.getMapInternal();
    const minZ = Math.max(
      initialZ - preload,
      tileGrid.getMinZoom(),
      tileGrid.getZForResolution(
        Math.min(
          tileLayer.getMaxResolution(),
          map ? map.getView().getResolutionForZoom(Math.max(tileLayer.getMinZoom(), 0)) : tileGrid.getResolution(0)
        ),
        tileSource.zDirection
      )
    );
    for (let z = initialZ; z >= minZ; --z) {
      const tileRange = tileGrid.getTileRangeForExtentAndZ(
        extent,
        z,
        this.tempTileRange_
      );
      const tileResolution = tileGrid.getResolution(z);
      for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
        for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
          const tileCoord = createOrUpdate2(z, x, y, this.tempTileCoord_);
          const cacheKey = getCacheKey(tileSource, tileCoord);
          let tileTexture;
          let tile;
          if (tileTextureCache.containsKey(cacheKey)) {
            tileTexture = tileTextureCache.get(cacheKey);
            tile = tileTexture.tile;
          }
          if (!tileTexture || tileTexture.tile.key !== tileSource.getKey()) {
            tile = tileSource.getTile(
              z,
              x,
              y,
              frameState.pixelRatio,
              viewState.projection
            );
            if (!tileTexture) {
              tileTexture = new TileTexture_default({
                tile,
                grid: tileGrid,
                helper: this.helper,
                gutter
              });
              tileTextureCache.set(cacheKey, tileTexture);
            } else {
              if (this.isDrawableTile_(tile)) {
                tileTexture.setTile(tile);
              } else {
                const interimTile = (
                  /** @type {import("../../webgl/TileTexture").TileType} */
                  tile.getInterimTile()
                );
                tileTexture.setTile(interimTile);
              }
            }
          }
          addTileTextureToLookup(tileTexturesByZ, tileTexture, z);
          const tileQueueKey = tile.getKey();
          wantedTiles[tileQueueKey] = true;
          if (tile.getState() === TileState_default.IDLE) {
            if (!frameState.tileQueue.isKeyQueued(tileQueueKey)) {
              frameState.tileQueue.enqueue([
                tile,
                tileSourceKey,
                tileGrid.getTileCoordCenter(tileCoord),
                tileResolution
              ]);
            }
          }
        }
      }
    }
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(frameState) {
    this.frameState_ = frameState;
    this.renderComplete = true;
    const gl = this.helper.getGL();
    this.preRender(gl, frameState);
    const viewState = frameState.viewState;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getRenderSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const gutter = tileSource.getGutterForProjection(viewState.projection);
    const extent = getRenderExtent(frameState, frameState.extent);
    const z = tileGrid.getZForResolution(
      viewState.resolution,
      tileSource.zDirection
    );
    const tileTexturesByZ = {};
    const preload = tileLayer.getPreload();
    if (frameState.nextExtent) {
      const targetZ = tileGrid.getZForResolution(
        viewState.nextResolution,
        tileSource.zDirection
      );
      const nextExtent = getRenderExtent(frameState, frameState.nextExtent);
      this.enqueueTiles(
        frameState,
        nextExtent,
        targetZ,
        tileTexturesByZ,
        preload
      );
    }
    this.enqueueTiles(frameState, extent, z, tileTexturesByZ, 0);
    if (preload > 0) {
      setTimeout(() => {
        this.enqueueTiles(
          frameState,
          extent,
          z - 1,
          tileTexturesByZ,
          preload - 1
        );
      }, 0);
    }
    const alphaLookup = {};
    const uid = getUid(this);
    const time = frameState.time;
    let blend = false;
    const tileTextures = tileTexturesByZ[z];
    for (let i = 0, ii = tileTextures.length; i < ii; ++i) {
      const tileTexture = tileTextures[i];
      const tile = tileTexture.tile;
      if ((tile instanceof Tile_default || tile instanceof DataTile_default2) && tile.getState() === TileState_default.EMPTY) {
        continue;
      }
      const tileCoord = tile.tileCoord;
      if (tileTexture.loaded) {
        const alpha = tile.getAlpha(uid, time);
        if (alpha === 1) {
          tile.endTransition(uid);
          continue;
        }
        blend = true;
        const tileCoordKey = getKey(tileCoord);
        alphaLookup[tileCoordKey] = alpha;
      }
      this.renderComplete = false;
      const coveredByChildren = this.findAltTiles_(
        tileGrid,
        tileCoord,
        z + 1,
        tileTexturesByZ
      );
      if (coveredByChildren) {
        continue;
      }
      const minZoom = tileGrid.getMinZoom();
      for (let parentZ = z - 1; parentZ >= minZoom; --parentZ) {
        const coveredByParent = this.findAltTiles_(
          tileGrid,
          tileCoord,
          parentZ,
          tileTexturesByZ
        );
        if (coveredByParent) {
          break;
        }
      }
    }
    this.helper.useProgram(this.program_, frameState);
    this.helper.prepareDraw(frameState, !blend);
    const zs = Object.keys(tileTexturesByZ).map(Number).sort(ascending);
    const centerX = viewState.center[0];
    const centerY = viewState.center[1];
    for (let j = 0, jj = zs.length; j < jj; ++j) {
      const tileZ = zs[j];
      const tileResolution = tileGrid.getResolution(tileZ);
      const tileSize = toSize(tileGrid.getTileSize(tileZ), this.tempSize_);
      const tileOrigin = tileGrid.getOrigin(tileZ);
      const tileWidthWithGutter = tileSize[0] + 2 * gutter;
      const tileHeightWithGutter = tileSize[1] + 2 * gutter;
      const aspectRatio = tileWidthWithGutter / tileHeightWithGutter;
      const centerI = (centerX - tileOrigin[0]) / (tileSize[0] * tileResolution);
      const centerJ = (tileOrigin[1] - centerY) / (tileSize[1] * tileResolution);
      const tileScale = viewState.resolution / tileResolution;
      const depth = depthForZ(tileZ);
      const tileTextures2 = tileTexturesByZ[tileZ];
      for (let i = 0, ii = tileTextures2.length; i < ii; ++i) {
        const tileTexture = tileTextures2[i];
        if (!tileTexture.loaded) {
          continue;
        }
        const tile = tileTexture.tile;
        const tileCoord = tile.tileCoord;
        const tileCoordKey = getKey(tileCoord);
        const tileCenterI = tileCoord[1];
        const tileCenterJ = tileCoord[2];
        reset(this.tileTransform_);
        scale(
          this.tileTransform_,
          2 / (frameState.size[0] * tileScale / tileWidthWithGutter),
          -2 / (frameState.size[1] * tileScale / tileWidthWithGutter)
        );
        rotate(this.tileTransform_, viewState.rotation);
        scale(this.tileTransform_, 1, 1 / aspectRatio);
        translate(
          this.tileTransform_,
          (tileSize[0] * (tileCenterI - centerI) - gutter) / tileWidthWithGutter,
          (tileSize[1] * (tileCenterJ - centerJ) - gutter) / tileHeightWithGutter
        );
        this.helper.setUniformMatrixValue(
          Uniforms.TILE_TRANSFORM,
          fromTransform(this.tempMat4_, this.tileTransform_)
        );
        this.helper.bindBuffer(tileTexture.coords);
        this.helper.bindBuffer(this.indices_);
        this.helper.enableAttributes(attributeDescriptions);
        let textureSlot = 0;
        while (textureSlot < tileTexture.textures.length) {
          const textureProperty = "TEXTURE" + textureSlot;
          const uniformName = `${Uniforms.TILE_TEXTURE_ARRAY}[${textureSlot}]`;
          gl.activeTexture(gl[textureProperty]);
          gl.bindTexture(gl.TEXTURE_2D, tileTexture.textures[textureSlot]);
          gl.uniform1i(
            this.helper.getUniformLocation(uniformName),
            textureSlot
          );
          ++textureSlot;
        }
        for (let paletteIndex = 0; paletteIndex < this.paletteTextures_.length; ++paletteIndex) {
          const paletteTexture = this.paletteTextures_[paletteIndex];
          gl.activeTexture(gl["TEXTURE" + textureSlot]);
          const texture = paletteTexture.getTexture(gl);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.uniform1i(
            this.helper.getUniformLocation(paletteTexture.name),
            textureSlot
          );
          ++textureSlot;
        }
        const alpha = tileCoordKey in alphaLookup ? alphaLookup[tileCoordKey] : 1;
        if (alpha < 1) {
          frameState.animate = true;
        }
        this.helper.setUniformFloatValue(Uniforms.TRANSITION_ALPHA, alpha);
        this.helper.setUniformFloatValue(Uniforms.DEPTH, depth);
        this.helper.setUniformFloatValue(
          Uniforms.TEXTURE_PIXEL_WIDTH,
          tileWidthWithGutter
        );
        this.helper.setUniformFloatValue(
          Uniforms.TEXTURE_PIXEL_HEIGHT,
          tileHeightWithGutter
        );
        this.helper.setUniformFloatValue(
          Uniforms.TEXTURE_RESOLUTION,
          tileResolution
        );
        this.helper.setUniformFloatValue(
          Uniforms.TEXTURE_ORIGIN_X,
          tileOrigin[0] + tileCenterI * tileSize[0] * tileResolution - gutter * tileResolution
        );
        this.helper.setUniformFloatValue(
          Uniforms.TEXTURE_ORIGIN_Y,
          tileOrigin[1] - tileCenterJ * tileSize[1] * tileResolution + gutter * tileResolution
        );
        let gutterExtent = extent;
        if (gutter > 0) {
          gutterExtent = tileGrid.getTileCoordExtent(tileCoord);
          getIntersection(gutterExtent, extent, gutterExtent);
        }
        this.helper.setUniformFloatVec4(Uniforms.RENDER_EXTENT, gutterExtent);
        this.helper.setUniformFloatValue(
          Uniforms.RESOLUTION,
          viewState.resolution
        );
        this.helper.setUniformFloatValue(Uniforms.ZOOM, viewState.zoom);
        this.helper.drawElements(0, this.indices_.getSize());
      }
    }
    this.helper.finalizeDraw(
      frameState,
      this.dispatchPreComposeEvent,
      this.dispatchPostComposeEvent
    );
    const canvas = this.helper.getCanvas();
    const tileTextureCache = this.tileTextureCache_;
    while (tileTextureCache.canExpireCache()) {
      const tileTexture = tileTextureCache.pop();
      tileTexture.dispose();
    }
    const postRenderFunction = function(map, frameState2) {
      tileSource.updateCacheSize(0.1, frameState2.viewState.projection);
      tileSource.expireCache(frameState2.viewState.projection, empty);
    };
    frameState.postRenderFunctions.push(postRenderFunction);
    this.postRender(gl, frameState);
    return canvas;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView} Data at the pixel location.
   */
  getData(pixel) {
    const gl = this.helper.getGL();
    if (!gl) {
      return null;
    }
    const frameState = this.frameState_;
    if (!frameState) {
      return null;
    }
    const layer = this.getLayer();
    const coordinate = apply(
      frameState.pixelToCoordinateTransform,
      pixel.slice()
    );
    const viewState = frameState.viewState;
    const layerExtent = layer.getExtent();
    if (layerExtent) {
      if (!containsCoordinate(
        fromUserExtent(layerExtent, viewState.projection),
        coordinate
      )) {
        return null;
      }
    }
    const sources = layer.getSources(
      boundingExtent([coordinate]),
      viewState.resolution
    );
    let i, source, tileGrid;
    for (i = sources.length - 1; i >= 0; --i) {
      source = sources[i];
      if (source.getState() === "ready") {
        tileGrid = source.getTileGridForProjection(viewState.projection);
        if (source.getWrapX()) {
          break;
        }
        const gridExtent = tileGrid.getExtent();
        if (!gridExtent || containsCoordinate(gridExtent, coordinate)) {
          break;
        }
      }
    }
    if (i < 0) {
      return null;
    }
    const tileTextureCache = this.tileTextureCache_;
    for (let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
      const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
      const cacheKey = getCacheKey(source, tileCoord);
      if (!tileTextureCache.containsKey(cacheKey)) {
        continue;
      }
      const tileTexture = tileTextureCache.get(cacheKey);
      const tile = tileTexture.tile;
      if ((tile instanceof Tile_default || tile instanceof DataTile_default2) && tile.getState() === TileState_default.EMPTY) {
        return null;
      }
      if (!tileTexture.loaded) {
        continue;
      }
      const tileOrigin = tileGrid.getOrigin(z);
      const tileSize = toSize(tileGrid.getTileSize(z));
      const tileResolution = tileGrid.getResolution(z);
      const col = (coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0];
      const row = (tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1];
      return tileTexture.getPixelData(col, row);
    }
    return null;
  }
  /**
   * Look for tiles covering the provided tile coordinate at an alternate
   * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
   * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
   * @param {number} altZ The alternate zoom level.
   * @param {Object<number, Array<import("../../webgl/TileTexture.js").default>>} tileTexturesByZ Lookup of
   * tile textures by zoom level.
   * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
   * @private
   */
  findAltTiles_(tileGrid, tileCoord, altZ, tileTexturesByZ) {
    const tileRange = tileGrid.getTileRangeForTileCoordAndZ(
      tileCoord,
      altZ,
      this.tempTileRange_
    );
    if (!tileRange) {
      return false;
    }
    let covered = true;
    const tileTextureCache = this.tileTextureCache_;
    const source = this.getLayer().getRenderSource();
    for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
      for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
        const cacheKey = getCacheKey(source, [altZ, x, y]);
        let loaded = false;
        if (tileTextureCache.containsKey(cacheKey)) {
          const tileTexture = tileTextureCache.get(cacheKey);
          if (tileTexture.loaded) {
            addTileTextureToLookup(tileTexturesByZ, tileTexture, altZ);
            loaded = true;
          }
        }
        if (!loaded) {
          covered = false;
        }
      }
    }
    return covered;
  }
  clearCache() {
    const tileTextureCache = this.tileTextureCache_;
    tileTextureCache.forEach((tileTexture) => tileTexture.dispose());
    tileTextureCache.clear();
  }
  removeHelper() {
    if (this.helper) {
      this.clearCache();
    }
    super.removeHelper();
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    const helper = this.helper;
    if (helper) {
      const gl = helper.getGL();
      gl.deleteProgram(this.program_);
      delete this.program_;
      helper.deleteBuffer(this.indices_);
    }
    super.disposeInternal();
    delete this.indices_;
    delete this.tileTextureCache_;
    delete this.frameState_;
  }
};
var TileLayer_default2 = WebGLTileLayerRenderer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/style/expressions.js
var ValueTypes = {
  NUMBER: 1,
  STRING: 2,
  COLOR: 4,
  BOOLEAN: 8,
  NUMBER_ARRAY: 16,
  ANY: 31,
  NONE: 0
};
var Operators = {};
function getValueType(value) {
  if (typeof value === "number") {
    return ValueTypes.NUMBER;
  }
  if (typeof value === "boolean") {
    return ValueTypes.BOOLEAN;
  }
  if (typeof value === "string") {
    if (isStringColor(value)) {
      return ValueTypes.COLOR | ValueTypes.STRING;
    }
    return ValueTypes.STRING;
  }
  if (!Array.isArray(value)) {
    throw new Error(`Unhandled value type: ${JSON.stringify(value)}`);
  }
  const valueArr = (
    /** @type {Array<*>} */
    value
  );
  const onlyNumbers = valueArr.every(function(v) {
    return typeof v === "number";
  });
  if (onlyNumbers) {
    if (valueArr.length === 3 || valueArr.length === 4) {
      return ValueTypes.COLOR | ValueTypes.NUMBER_ARRAY;
    }
    return ValueTypes.NUMBER_ARRAY;
  }
  if (typeof valueArr[0] !== "string") {
    throw new Error(
      `Expected an expression operator but received: ${JSON.stringify(
        valueArr
      )}`
    );
  }
  const operator = Operators[valueArr[0]];
  if (operator === void 0) {
    throw new Error(
      `Unrecognized expression operator: ${JSON.stringify(valueArr)}`
    );
  }
  return operator.getReturnType(valueArr.slice(1));
}
function isTypeUnique(valueType) {
  return Math.log2(valueType) % 1 === 0;
}
function numberToGlsl(v) {
  const s = v.toString();
  return s.includes(".") ? s : s + ".0";
}
function arrayToGlsl(array2) {
  if (array2.length < 2 || array2.length > 4) {
    throw new Error(
      "`formatArray` can only output `vec2`, `vec3` or `vec4` arrays."
    );
  }
  return `vec${array2.length}(${array2.map(numberToGlsl).join(", ")})`;
}
function colorToGlsl(color2) {
  const array2 = asArray(color2).slice();
  if (array2.length < 4) {
    array2.push(1);
  }
  return arrayToGlsl(
    array2.map(function(c, i) {
      return i < 3 ? c / 255 : c;
    })
  );
}
function getStringNumberEquivalent(context, string) {
  if (context.stringLiteralsMap[string] === void 0) {
    context.stringLiteralsMap[string] = Object.keys(
      context.stringLiteralsMap
    ).length;
  }
  return context.stringLiteralsMap[string];
}
function stringToGlsl(context, string) {
  return numberToGlsl(getStringNumberEquivalent(context, string));
}
function expressionToGlsl(context, value, typeHint) {
  if (Array.isArray(value) && typeof value[0] === "string") {
    const operator = Operators[value[0]];
    if (operator === void 0) {
      throw new Error(
        `Unrecognized expression operator: ${JSON.stringify(value)}`
      );
    }
    return operator.toGlsl(context, value.slice(1), typeHint);
  }
  const valueType = getValueType(value);
  if ((valueType & ValueTypes.NUMBER) > 0) {
    return numberToGlsl(
      /** @type {number} */
      value
    );
  }
  if ((valueType & ValueTypes.BOOLEAN) > 0) {
    return value.toString();
  }
  if ((valueType & ValueTypes.STRING) > 0 && (typeHint === void 0 || typeHint == ValueTypes.STRING)) {
    return stringToGlsl(context, value.toString());
  }
  if ((valueType & ValueTypes.COLOR) > 0 && (typeHint === void 0 || typeHint == ValueTypes.COLOR)) {
    return colorToGlsl(
      /** @type {Array<number> | string} */
      value
    );
  }
  if ((valueType & ValueTypes.NUMBER_ARRAY) > 0) {
    return arrayToGlsl(
      /** @type {Array<number>} */
      value
    );
  }
  throw new Error(`Unexpected expression ${value} (expected type ${typeHint})`);
}
function assertNumber(value) {
  if (!(getValueType(value) & ValueTypes.NUMBER)) {
    throw new Error(
      `A numeric value was expected, got ${JSON.stringify(value)} instead`
    );
  }
}
function assertNumbers(values) {
  for (let i = 0; i < values.length; i++) {
    assertNumber(values[i]);
  }
}
function assertString(value) {
  if (!(getValueType(value) & ValueTypes.STRING)) {
    throw new Error(
      `A string value was expected, got ${JSON.stringify(value)} instead`
    );
  }
}
function assertBoolean(value) {
  if (!(getValueType(value) & ValueTypes.BOOLEAN)) {
    throw new Error(
      `A boolean value was expected, got ${JSON.stringify(value)} instead`
    );
  }
}
function assertArgsCount(args, count) {
  if (args.length !== count) {
    throw new Error(
      `Exactly ${count} arguments were expected, got ${args.length} instead`
    );
  }
}
function assertArgsMinCount(args, count) {
  if (args.length < count) {
    throw new Error(
      `At least ${count} arguments were expected, got ${args.length} instead`
    );
  }
}
function assertArgsMaxCount(args, count) {
  if (args.length > count) {
    throw new Error(
      `At most ${count} arguments were expected, got ${args.length} instead`
    );
  }
}
function assertArgsEven(args) {
  if (args.length % 2 !== 0) {
    throw new Error(
      `An even amount of arguments was expected, got ${args} instead`
    );
  }
}
function assertArgsOdd(args) {
  if (args.length % 2 === 0) {
    throw new Error(
      `An odd amount of arguments was expected, got ${args} instead`
    );
  }
}
function assertUniqueInferredType(args, types2) {
  if (!isTypeUnique(types2)) {
    throw new Error(
      `Could not infer only one type from the following expression: ${JSON.stringify(
        args
      )}`
    );
  }
}
Operators["get"] = {
  getReturnType: function(args) {
    return ValueTypes.ANY;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertString(args[0]);
    const value = args[0].toString();
    if (!context.attributes.includes(value)) {
      context.attributes.push(value);
    }
    const prefix = context.inFragmentShader ? "v_" : "a_";
    return prefix + value;
  }
};
function uniformNameForVariable(variableName) {
  return "u_var_" + variableName;
}
Operators["var"] = {
  getReturnType: function(args) {
    return ValueTypes.ANY;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertString(args[0]);
    const value = args[0].toString();
    if (!context.variables.includes(value)) {
      context.variables.push(value);
    }
    return uniformNameForVariable(value);
  }
};
var PALETTE_TEXTURE_ARRAY = "u_paletteTextures";
Operators["palette"] = {
  getReturnType: function(args) {
    return ValueTypes.COLOR;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumber(args[0]);
    const index = expressionToGlsl(context, args[0]);
    const colors = args[1];
    if (!Array.isArray(colors)) {
      throw new Error("The second argument of palette must be an array");
    }
    const numColors = colors.length;
    const palette = new Uint8Array(numColors * 4);
    for (let i = 0; i < numColors; i++) {
      const candidate = colors[i];
      let color2;
      if (typeof candidate === "string") {
        color2 = fromString(candidate);
      } else {
        if (!Array.isArray(candidate)) {
          throw new Error(
            "The second argument of palette must be an array of strings or colors"
          );
        }
        const length = candidate.length;
        if (length === 4) {
          color2 = candidate;
        } else {
          if (length !== 3) {
            throw new Error(
              `Expected palette color to have 3 or 4 values, got ${length}`
            );
          }
          color2 = [candidate[0], candidate[1], candidate[2], 1];
        }
      }
      const offset = i * 4;
      palette[offset] = color2[0];
      palette[offset + 1] = color2[1];
      palette[offset + 2] = color2[2];
      palette[offset + 3] = color2[3] * 255;
    }
    if (!context.paletteTextures) {
      context.paletteTextures = [];
    }
    const paletteName = `${PALETTE_TEXTURE_ARRAY}[${context.paletteTextures.length}]`;
    const paletteTexture = new PaletteTexture_default(paletteName, palette);
    context.paletteTextures.push(paletteTexture);
    return `texture2D(${paletteName}, vec2((${index} + 0.5) / ${numColors}.0, 0.5))`;
  }
};
var GET_BAND_VALUE_FUNC = "getBandValue";
Operators["band"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 1);
    assertArgsMaxCount(args, 3);
    const band = args[0];
    if (!(GET_BAND_VALUE_FUNC in context.functions)) {
      let ifBlocks = "";
      const bandCount = context.bandCount || 1;
      for (let i = 0; i < bandCount; i++) {
        const colorIndex = Math.floor(i / 4);
        let bandIndex = i % 4;
        if (i === bandCount - 1 && bandIndex === 1) {
          bandIndex = 3;
        }
        const textureName = `${Uniforms.TILE_TEXTURE_ARRAY}[${colorIndex}]`;
        ifBlocks += `
          if (band == ${i + 1}.0) {
            return texture2D(${textureName}, v_textureCoord + vec2(dx, dy))[${bandIndex}];
          }
        `;
      }
      context.functions[GET_BAND_VALUE_FUNC] = `
        float getBandValue(float band, float xOffset, float yOffset) {
          float dx = xOffset / ${Uniforms.TEXTURE_PIXEL_WIDTH};
          float dy = yOffset / ${Uniforms.TEXTURE_PIXEL_HEIGHT};
          ${ifBlocks}
        }
      `;
    }
    const bandExpression = expressionToGlsl(context, band);
    const xOffsetExpression = expressionToGlsl(context, args[1] || 0);
    const yOffsetExpression = expressionToGlsl(context, args[2] || 0);
    return `${GET_BAND_VALUE_FUNC}(${bandExpression}, ${xOffsetExpression}, ${yOffsetExpression})`;
  }
};
Operators["time"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 0);
    return "u_time";
  }
};
Operators["zoom"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 0);
    return "u_zoom";
  }
};
Operators["resolution"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 0);
    return "u_resolution";
  }
};
Operators["*"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 2);
    assertNumbers(args);
    return `(${args.map((arg) => expressionToGlsl(context, arg)).join(" * ")})`;
  }
};
Operators["/"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} / ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["+"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 2);
    assertNumbers(args);
    return `(${args.map((arg) => expressionToGlsl(context, arg)).join(" + ")})`;
  }
};
Operators["-"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} - ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["clamp"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 3);
    assertNumbers(args);
    const min = expressionToGlsl(context, args[1]);
    const max = expressionToGlsl(context, args[2]);
    return `clamp(${expressionToGlsl(context, args[0])}, ${min}, ${max})`;
  }
};
Operators["%"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `mod(${expressionToGlsl(context, args[0])}, ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["^"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `pow(${expressionToGlsl(context, args[0])}, ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["abs"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `abs(${expressionToGlsl(context, args[0])})`;
  }
};
Operators["floor"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `floor(${expressionToGlsl(context, args[0])})`;
  }
};
Operators["round"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `floor(${expressionToGlsl(context, args[0])} + 0.5)`;
  }
};
Operators["ceil"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `ceil(${expressionToGlsl(context, args[0])})`;
  }
};
Operators["sin"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `sin(${expressionToGlsl(context, args[0])})`;
  }
};
Operators["cos"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertNumbers(args);
    return `cos(${expressionToGlsl(context, args[0])})`;
  }
};
Operators["atan"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 1);
    assertArgsMaxCount(args, 2);
    assertNumbers(args);
    return args.length === 2 ? `atan(${expressionToGlsl(context, args[0])}, ${expressionToGlsl(
      context,
      args[1]
    )})` : `atan(${expressionToGlsl(context, args[0])})`;
  }
};
Operators[">"] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} > ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators[">="] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} >= ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["<"] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} < ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
Operators["<="] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 2);
    assertNumbers(args);
    return `(${expressionToGlsl(context, args[0])} <= ${expressionToGlsl(
      context,
      args[1]
    )})`;
  }
};
function getEqualOperator(operator) {
  return {
    getReturnType: function(args) {
      return ValueTypes.BOOLEAN;
    },
    toGlsl: function(context, args) {
      assertArgsCount(args, 2);
      let type = ValueTypes.ANY;
      for (let i = 0; i < args.length; i++) {
        type &= getValueType(args[i]);
      }
      if (type === ValueTypes.NONE) {
        throw new Error(
          `All arguments should be of compatible type, got ${JSON.stringify(
            args
          )} instead`
        );
      }
      type &= ~ValueTypes.COLOR;
      return `(${expressionToGlsl(
        context,
        args[0],
        type
      )} ${operator} ${expressionToGlsl(context, args[1], type)})`;
    }
  };
}
Operators["=="] = getEqualOperator("==");
Operators["!="] = getEqualOperator("!=");
Operators["!"] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 1);
    assertBoolean(args[0]);
    return `(!${expressionToGlsl(context, args[0])})`;
  }
};
function getDecisionOperator(operator) {
  return {
    getReturnType: function(args) {
      return ValueTypes.BOOLEAN;
    },
    toGlsl: function(context, args) {
      assertArgsMinCount(args, 2);
      for (let i = 0; i < args.length; i++) {
        assertBoolean(args[i]);
      }
      let result = "";
      result = args.map((arg) => expressionToGlsl(context, arg)).join(` ${operator} `);
      result = `(${result})`;
      return result;
    }
  };
}
Operators["all"] = getDecisionOperator("&&");
Operators["any"] = getDecisionOperator("||");
Operators["between"] = {
  getReturnType: function(args) {
    return ValueTypes.BOOLEAN;
  },
  toGlsl: function(context, args) {
    assertArgsCount(args, 3);
    assertNumbers(args);
    const min = expressionToGlsl(context, args[1]);
    const max = expressionToGlsl(context, args[2]);
    const value = expressionToGlsl(context, args[0]);
    return `(${value} >= ${min} && ${value} <= ${max})`;
  }
};
Operators["array"] = {
  getReturnType: function(args) {
    return ValueTypes.NUMBER_ARRAY;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 2);
    assertArgsMaxCount(args, 4);
    assertNumbers(args);
    const parsedArgs = args.map(function(val) {
      return expressionToGlsl(context, val, ValueTypes.NUMBER);
    });
    return `vec${args.length}(${parsedArgs.join(", ")})`;
  }
};
Operators["color"] = {
  getReturnType: function(args) {
    return ValueTypes.COLOR;
  },
  toGlsl: function(context, args) {
    assertArgsMinCount(args, 3);
    assertArgsMaxCount(args, 4);
    assertNumbers(args);
    const array2 = (
      /** @type {Array<number>} */
      args
    );
    if (args.length === 3) {
      array2.push(1);
    }
    const parsedArgs = args.map(function(val, i) {
      return expressionToGlsl(context, val, ValueTypes.NUMBER) + (i < 3 ? " / 255.0" : "");
    });
    return `vec${args.length}(${parsedArgs.join(", ")})`;
  }
};
Operators["interpolate"] = {
  getReturnType: function(args) {
    let type = ValueTypes.COLOR | ValueTypes.NUMBER;
    for (let i = 3; i < args.length; i += 2) {
      type = type & getValueType(args[i]);
    }
    return type;
  },
  toGlsl: function(context, args, typeHint) {
    assertArgsEven(args);
    assertArgsMinCount(args, 6);
    const type = args[0];
    let interpolation;
    switch (type[0]) {
      case "linear":
        interpolation = 1;
        break;
      case "exponential":
        interpolation = type[1];
        break;
      default:
        interpolation = null;
    }
    if (!interpolation) {
      throw new Error(
        `Invalid interpolation type for "interpolate" operator, received: ${JSON.stringify(
          type
        )}`
      );
    }
    typeHint = typeHint !== void 0 ? typeHint : ValueTypes.ANY;
    const outputType = Operators["interpolate"].getReturnType(args) & typeHint;
    assertUniqueInferredType(args, outputType);
    const input = expressionToGlsl(context, args[1]);
    const exponent = numberToGlsl(interpolation);
    let result = "";
    for (let i = 2; i < args.length - 2; i += 2) {
      const stop1 = expressionToGlsl(context, args[i]);
      const output1 = result || expressionToGlsl(context, args[i + 1], outputType);
      const stop2 = expressionToGlsl(context, args[i + 2]);
      const output2 = expressionToGlsl(context, args[i + 3], outputType);
      result = `mix(${output1}, ${output2}, pow(clamp((${input} - ${stop1}) / (${stop2} - ${stop1}), 0.0, 1.0), ${exponent}))`;
    }
    return result;
  }
};
Operators["match"] = {
  getReturnType: function(args) {
    let type = ValueTypes.ANY;
    for (let i = 2; i < args.length; i += 2) {
      type = type & getValueType(args[i]);
    }
    type = type & getValueType(args[args.length - 1]);
    return type;
  },
  toGlsl: function(context, args, typeHint) {
    assertArgsEven(args);
    assertArgsMinCount(args, 4);
    typeHint = typeHint !== void 0 ? typeHint : ValueTypes.ANY;
    const outputType = Operators["match"].getReturnType(args) & typeHint;
    assertUniqueInferredType(args, outputType);
    const input = expressionToGlsl(context, args[0]);
    const fallback = expressionToGlsl(
      context,
      args[args.length - 1],
      outputType
    );
    let result = null;
    for (let i = args.length - 3; i >= 1; i -= 2) {
      const match = expressionToGlsl(context, args[i]);
      const output = expressionToGlsl(context, args[i + 1], outputType);
      result = `(${input} == ${match} ? ${output} : ${result || fallback})`;
    }
    return result;
  }
};
Operators["case"] = {
  getReturnType: function(args) {
    let type = ValueTypes.ANY;
    for (let i = 1; i < args.length; i += 2) {
      type = type & getValueType(args[i]);
    }
    type = type & getValueType(args[args.length - 1]);
    return type;
  },
  toGlsl: function(context, args, typeHint) {
    assertArgsOdd(args);
    assertArgsMinCount(args, 3);
    typeHint = typeHint !== void 0 ? typeHint : ValueTypes.ANY;
    const outputType = Operators["case"].getReturnType(args) & typeHint;
    assertUniqueInferredType(args, outputType);
    for (let i = 0; i < args.length - 1; i += 2) {
      assertBoolean(args[i]);
    }
    const fallback = expressionToGlsl(
      context,
      args[args.length - 1],
      outputType
    );
    let result = null;
    for (let i = args.length - 3; i >= 0; i -= 2) {
      const condition = expressionToGlsl(context, args[i]);
      const output = expressionToGlsl(context, args[i + 1], outputType);
      result = `(${condition} ? ${output} : ${result || fallback})`;
    }
    return result;
  }
};

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/webgl/ShaderBuilder.js
var ShaderBuilder = class {
  constructor() {
    this.uniforms = [];
    this.attributes = [];
    this.varyings = [];
    this.sizeExpression = "vec2(1.0)";
    this.rotationExpression = "0.0";
    this.offsetExpression = "vec2(0.0)";
    this.colorExpression = "vec4(1.0)";
    this.texCoordExpression = "vec4(0.0, 0.0, 1.0, 1.0)";
    this.discardExpression = "false";
    this.rotateWithView = false;
  }
  /**
   * Adds a uniform accessible in both fragment and vertex shaders.
   * The given name should include a type, such as `sampler2D u_texture`.
   * @param {string} name Uniform name
   * @return {ShaderBuilder} the builder object
   */
  addUniform(name) {
    this.uniforms.push(name);
    return this;
  }
  /**
   * Adds an attribute accessible in the vertex shader, read from the geometry buffer.
   * The given name should include a type, such as `vec2 a_position`.
   * @param {string} name Attribute name
   * @return {ShaderBuilder} the builder object
   */
  addAttribute(name) {
    this.attributes.push(name);
    return this;
  }
  /**
   * Adds a varying defined in the vertex shader and accessible from the fragment shader.
   * The type and expression of the varying have to be specified separately.
   * @param {string} name Varying name
   * @param {'float'|'vec2'|'vec3'|'vec4'} type Type
   * @param {string} expression Expression used to assign a value to the varying.
   * @return {ShaderBuilder} the builder object
   */
  addVarying(name, type, expression) {
    this.varyings.push({
      name,
      type,
      expression
    });
    return this;
  }
  /**
   * Sets an expression to compute the size of the shape.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec2` value.
   * @param {string} expression Size expression
   * @return {ShaderBuilder} the builder object
   */
  setSizeExpression(expression) {
    this.sizeExpression = expression;
    return this;
  }
  /**
   * Sets an expression to compute the rotation of the shape.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `float` value in radians.
   * @param {string} expression Size expression
   * @return {ShaderBuilder} the builder object
   */
  setRotationExpression(expression) {
    this.rotationExpression = expression;
    return this;
  }
  /**
   * Sets an expression to compute the offset of the symbol from the point center.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec2` value.
   * Note: will only be used for point geometry shaders.
   * @param {string} expression Offset expression
   * @return {ShaderBuilder} the builder object
   */
  setSymbolOffsetExpression(expression) {
    this.offsetExpression = expression;
    return this;
  }
  /**
   * Sets an expression to compute the color of the shape.
   * This expression can use all the uniforms, varyings and attributes available
   * in the fragment shader, and should evaluate to a `vec4` value.
   * @param {string} expression Color expression
   * @return {ShaderBuilder} the builder object
   */
  setColorExpression(expression) {
    this.colorExpression = expression;
    return this;
  }
  /**
   * Sets an expression to compute the texture coordinates of the vertices.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec4` value.
   * @param {string} expression Texture coordinate expression
   * @return {ShaderBuilder} the builder object
   */
  setTextureCoordinateExpression(expression) {
    this.texCoordExpression = expression;
    return this;
  }
  /**
   * Sets an expression to determine whether a fragment (pixel) should be discarded,
   * i.e. not drawn at all.
   * This expression can use all the uniforms, varyings and attributes available
   * in the fragment shader, and should evaluate to a `bool` value (it will be
   * used in an `if` statement)
   * @param {string} expression Fragment discard expression
   * @return {ShaderBuilder} the builder object
   */
  setFragmentDiscardExpression(expression) {
    this.discardExpression = expression;
    return this;
  }
  /**
   * Sets whether the symbols should rotate with the view or stay aligned with the map.
   * Note: will only be used for point geometry shaders.
   * @param {boolean} rotateWithView Rotate with view
   * @return {ShaderBuilder} the builder object
   */
  setSymbolRotateWithView(rotateWithView) {
    this.rotateWithView = rotateWithView;
    return this;
  }
  /**
   * @return {string} Previously set size expression
   */
  getSizeExpression() {
    return this.sizeExpression;
  }
  /**
   * @return {string} Previously set symbol offset expression
   */
  getOffsetExpression() {
    return this.offsetExpression;
  }
  /**
   * @return {string} Previously set color expression
   */
  getColorExpression() {
    return this.colorExpression;
  }
  /**
   * @return {string} Previously set texture coordinate expression
   */
  getTextureCoordinateExpression() {
    return this.texCoordExpression;
  }
  /**
   * @return {string} Previously set fragment discard expression
   */
  getFragmentDiscardExpression() {
    return this.discardExpression;
  }
  /**
   * Generates a symbol vertex shader from the builder parameters,
   * intended to be used on point geometries.
   *
   * Four uniforms are hardcoded in all shaders: `u_projectionMatrix`, `u_offsetScaleMatrix`,
   * `u_offsetRotateMatrix`, `u_time`.
   *
   * The following attributes are hardcoded and expected to be present in the vertex buffers:
   * `vec2 a_position`, `float a_index` (being the index of the vertex in the quad, 0 to 3).
   *
   * The following varyings are hardcoded and gives the coordinate of the pixel both in the quad and on the texture:
   * `vec2 v_quadCoord`, `vec2 v_texCoord`
   *
   * @param {boolean} [forHitDetection] If true, the shader will be modified to include hit detection variables
   * (namely, hit color with encoded feature id).
   * @return {string} The full shader as a string.
   */
  getSymbolVertexShader(forHitDetection) {
    const offsetMatrix = this.rotateWithView ? "u_offsetScaleMatrix * u_offsetRotateMatrix" : "u_offsetScaleMatrix";
    let attributes = this.attributes;
    let varyings = this.varyings;
    if (forHitDetection) {
      attributes = attributes.concat("vec4 a_hitColor");
      varyings = varyings.concat({
        name: "v_hitColor",
        type: "vec4",
        expression: "a_hitColor"
      });
    }
    return `precision mediump float;
uniform mat4 u_projectionMatrix;
uniform mat4 u_offsetScaleMatrix;
uniform mat4 u_offsetRotateMatrix;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
${this.uniforms.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
attribute vec2 a_position;
attribute float a_index;
${attributes.map(function(attribute) {
      return "attribute " + attribute + ";";
    }).join("\n")}
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
${varyings.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
void main(void) {
  mat4 offsetMatrix = ${offsetMatrix};
  vec2 halfSize = ${this.sizeExpression} * 0.5;
  vec2 offset = ${this.offsetExpression};
  float angle = ${this.rotationExpression};
  float offsetX;
  float offsetY;
  if (a_index == 0.0) {
    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);
    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);
  } else if (a_index == 1.0) {
    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y - halfSize.y) * sin(angle);
    offsetY = (offset.y - halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);
  } else if (a_index == 2.0) {
    offsetX = (offset.x + halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);
    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x + halfSize.x) * sin(angle);
  } else {
    offsetX = (offset.x - halfSize.x) * cos(angle) + (offset.y + halfSize.y) * sin(angle);
    offsetY = (offset.y + halfSize.y) * cos(angle) - (offset.x - halfSize.x) * sin(angle);
  }
  vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);
  gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;
  vec4 texCoord = ${this.texCoordExpression};
  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;
  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;
  v_texCoord = vec2(u, v);
  u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;
  v = a_index == 2.0 || a_index == 3.0 ? 0.0 : 1.0;
  v_quadCoord = vec2(u, v);
${varyings.map(function(varying) {
      return "  " + varying.name + " = " + varying.expression + ";";
    }).join("\n")}
}`;
  }
  /**
   * Generates a symbol fragment shader from the builder parameters,
   * intended to be used on point geometries.
   *
   * Expects the following varyings to be transmitted by the vertex shader:
   * `vec2 v_quadCoord`, `vec2 v_texCoord`
   *
   * @param {boolean} [forHitDetection] If true, the shader will be modified to include hit detection variables
   * (namely, hit color with encoded feature id).
   * @return {string} The full shader as a string.
   */
  getSymbolFragmentShader(forHitDetection) {
    const hitDetectionBypass = forHitDetection ? "  if (gl_FragColor.a < 0.1) { discard; } gl_FragColor = v_hitColor;" : "";
    let varyings = this.varyings;
    if (forHitDetection) {
      varyings = varyings.concat({
        name: "v_hitColor",
        type: "vec4",
        expression: "a_hitColor"
      });
    }
    return `precision mediump float;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
${this.uniforms.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
${varyings.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
void main(void) {
  if (${this.discardExpression}) { discard; }
  gl_FragColor = ${this.colorExpression};
  gl_FragColor.rgb *= gl_FragColor.a;
${hitDetectionBypass}
}`;
  }
};
function parseLiteralStyle(style) {
  const symbStyle = style.symbol;
  const size = symbStyle.size !== void 0 ? symbStyle.size : 1;
  const color2 = symbStyle.color || "white";
  const texCoord = symbStyle.textureCoord || [0, 0, 1, 1];
  const offset = symbStyle.offset || [0, 0];
  const opacity = symbStyle.opacity !== void 0 ? symbStyle.opacity : 1;
  const rotation = symbStyle.rotation !== void 0 ? symbStyle.rotation : 0;
  const vertContext = {
    inFragmentShader: false,
    variables: [],
    attributes: [],
    stringLiteralsMap: {},
    functions: {}
  };
  const parsedSize = expressionToGlsl(
    vertContext,
    size,
    ValueTypes.NUMBER_ARRAY | ValueTypes.NUMBER
  );
  const parsedOffset = expressionToGlsl(
    vertContext,
    offset,
    ValueTypes.NUMBER_ARRAY
  );
  const parsedTexCoord = expressionToGlsl(
    vertContext,
    texCoord,
    ValueTypes.NUMBER_ARRAY
  );
  const parsedRotation = expressionToGlsl(
    vertContext,
    rotation,
    ValueTypes.NUMBER
  );
  const fragContext = {
    inFragmentShader: true,
    variables: vertContext.variables,
    attributes: [],
    stringLiteralsMap: vertContext.stringLiteralsMap,
    functions: {}
  };
  const parsedColor = expressionToGlsl(fragContext, color2, ValueTypes.COLOR);
  const parsedOpacity = expressionToGlsl(
    fragContext,
    opacity,
    ValueTypes.NUMBER
  );
  let opacityFilter = "1.0";
  const visibleSize = `vec2(${expressionToGlsl(
    fragContext,
    size,
    ValueTypes.NUMBER_ARRAY | ValueTypes.NUMBER
  )}).x`;
  switch (symbStyle.symbolType) {
    case "square":
      break;
    case "image":
      break;
    case "circle":
      opacityFilter = `(1.0-smoothstep(1.-4./${visibleSize},1.,dot(v_quadCoord-.5,v_quadCoord-.5)*4.))`;
      break;
    case "triangle":
      const st = "(v_quadCoord*2.-1.)";
      const a = `(atan(${st}.x,${st}.y))`;
      opacityFilter = `(1.0-smoothstep(.5-3./${visibleSize},.5,cos(floor(.5+${a}/2.094395102)*2.094395102-${a})*length(${st})))`;
      break;
    default:
      throw new Error("Unexpected symbol type: " + symbStyle.symbolType);
  }
  const builder = new ShaderBuilder().setSizeExpression(`vec2(${parsedSize})`).setRotationExpression(parsedRotation).setSymbolOffsetExpression(parsedOffset).setTextureCoordinateExpression(parsedTexCoord).setSymbolRotateWithView(!!symbStyle.rotateWithView).setColorExpression(
    `vec4(${parsedColor}.rgb, ${parsedColor}.a * ${parsedOpacity} * ${opacityFilter})`
  );
  if (style.filter) {
    const parsedFilter = expressionToGlsl(
      fragContext,
      style.filter,
      ValueTypes.BOOLEAN
    );
    builder.setFragmentDiscardExpression(`!${parsedFilter}`);
  }
  const uniforms = {};
  fragContext.variables.forEach(function(varName) {
    const uniformName = uniformNameForVariable(varName);
    builder.addUniform(`float ${uniformName}`);
    uniforms[uniformName] = function() {
      if (!style.variables || style.variables[varName] === void 0) {
        throw new Error(
          `The following variable is missing from the style: ${varName}`
        );
      }
      let value = style.variables[varName];
      if (typeof value === "string") {
        value = getStringNumberEquivalent(vertContext, value);
      }
      return value !== void 0 ? value : -9999999;
    };
  });
  if (symbStyle.symbolType === "image" && symbStyle.src) {
    const texture = new Image();
    texture.crossOrigin = symbStyle.crossOrigin === void 0 ? "anonymous" : symbStyle.crossOrigin;
    texture.src = symbStyle.src;
    builder.addUniform("sampler2D u_texture").setColorExpression(
      builder.getColorExpression() + " * texture2D(u_texture, v_texCoord)"
    );
    uniforms["u_texture"] = texture;
  }
  fragContext.attributes.forEach(function(attrName) {
    if (!vertContext.attributes.includes(attrName)) {
      vertContext.attributes.push(attrName);
    }
    builder.addVarying(`v_${attrName}`, "float", `a_${attrName}`);
  });
  vertContext.attributes.forEach(function(attrName) {
    builder.addAttribute(`float a_${attrName}`);
  });
  return {
    builder,
    attributes: vertContext.attributes.map(function(attributeName) {
      return {
        name: attributeName,
        callback: function(feature, props) {
          let value = props[attributeName];
          if (typeof value === "string") {
            value = getStringNumberEquivalent(vertContext, value);
          }
          return value !== void 0 ? value : -9999999;
        }
      };
    }),
    uniforms
  };
}

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/WebGLPoints.js
var WebGLPointsLayer = class extends Layer_default {
  /**
   * @param {Options<VectorSourceType>} options Options.
   */
  constructor(options) {
    const baseOptions = Object.assign({}, options);
    super(baseOptions);
    this.parseResult_ = parseLiteralStyle(options.style);
    this.styleVariables_ = options.style.variables || {};
    this.hitDetectionDisabled_ = !!options.disableHitDetection;
  }
  createRenderer() {
    return new PointsLayer_default(this, {
      vertexShader: this.parseResult_.builder.getSymbolVertexShader(),
      fragmentShader: this.parseResult_.builder.getSymbolFragmentShader(),
      hitVertexShader: !this.hitDetectionDisabled_ && this.parseResult_.builder.getSymbolVertexShader(true),
      hitFragmentShader: !this.hitDetectionDisabled_ && this.parseResult_.builder.getSymbolFragmentShader(true),
      uniforms: this.parseResult_.uniforms,
      attributes: this.parseResult_.attributes
    });
  }
  /**
   * Update any variables used by the layer style and trigger a re-render.
   * @param {Object<string, number>} variables Variables to update.
   */
  updateStyleVariables(variables) {
    Object.assign(this.styleVariables_, variables);
    this.changed();
  }
};
var WebGLPoints_default = WebGLPointsLayer;

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/layer/WebGLTile.js
function parseStyle(style, bandCount) {
  const vertexShader = `
    attribute vec2 ${Attributes.TEXTURE_COORD};
    uniform mat4 ${Uniforms.TILE_TRANSFORM};
    uniform float ${Uniforms.TEXTURE_PIXEL_WIDTH};
    uniform float ${Uniforms.TEXTURE_PIXEL_HEIGHT};
    uniform float ${Uniforms.TEXTURE_RESOLUTION};
    uniform float ${Uniforms.TEXTURE_ORIGIN_X};
    uniform float ${Uniforms.TEXTURE_ORIGIN_Y};
    uniform float ${Uniforms.DEPTH};

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;

    void main() {
      v_textureCoord = ${Attributes.TEXTURE_COORD};
      v_mapCoord = vec2(
        ${Uniforms.TEXTURE_ORIGIN_X} + ${Uniforms.TEXTURE_RESOLUTION} * ${Uniforms.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
        ${Uniforms.TEXTURE_ORIGIN_Y} - ${Uniforms.TEXTURE_RESOLUTION} * ${Uniforms.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
      );
      gl_Position = ${Uniforms.TILE_TRANSFORM} * vec4(${Attributes.TEXTURE_COORD}, ${Uniforms.DEPTH}, 1.0);
    }
  `;
  const context = {
    inFragmentShader: true,
    variables: [],
    attributes: [],
    stringLiteralsMap: {},
    functions: {},
    bandCount
  };
  const pipeline = [];
  if (style.color !== void 0) {
    const color2 = expressionToGlsl(context, style.color, ValueTypes.COLOR);
    pipeline.push(`color = ${color2};`);
  }
  if (style.contrast !== void 0) {
    const contrast = expressionToGlsl(
      context,
      style.contrast,
      ValueTypes.NUMBER
    );
    pipeline.push(
      `color.rgb = clamp((${contrast} + 1.0) * color.rgb - (${contrast} / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  if (style.exposure !== void 0) {
    const exposure = expressionToGlsl(
      context,
      style.exposure,
      ValueTypes.NUMBER
    );
    pipeline.push(
      `color.rgb = clamp((${exposure} + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  if (style.saturation !== void 0) {
    const saturation = expressionToGlsl(
      context,
      style.saturation,
      ValueTypes.NUMBER
    );
    pipeline.push(`
      float saturation = ${saturation} + 1.0;
      float sr = (1.0 - saturation) * 0.2126;
      float sg = (1.0 - saturation) * 0.7152;
      float sb = (1.0 - saturation) * 0.0722;
      mat3 saturationMatrix = mat3(
        sr + saturation, sr, sr,
        sg, sg + saturation, sg,
        sb, sb, sb + saturation
      );
      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));
    `);
  }
  if (style.gamma !== void 0) {
    const gamma = expressionToGlsl(context, style.gamma, ValueTypes.NUMBER);
    pipeline.push(`color.rgb = pow(color.rgb, vec3(1.0 / ${gamma}));`);
  }
  if (style.brightness !== void 0) {
    const brightness = expressionToGlsl(
      context,
      style.brightness,
      ValueTypes.NUMBER
    );
    pipeline.push(
      `color.rgb = clamp(color.rgb + ${brightness}, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`
    );
  }
  const uniforms = {};
  const numVariables = context.variables.length;
  if (numVariables > 1 && !style.variables) {
    throw new Error(
      `Missing variables in style (expected ${context.variables})`
    );
  }
  for (let i = 0; i < numVariables; ++i) {
    const variableName = context.variables[i];
    if (!(variableName in style.variables)) {
      throw new Error(`Missing '${variableName}' in style variables`);
    }
    const uniformName = uniformNameForVariable(variableName);
    uniforms[uniformName] = function() {
      let value = style.variables[variableName];
      if (typeof value === "string") {
        value = getStringNumberEquivalent(context, value);
      }
      return value !== void 0 ? value : -9999999;
    };
  }
  const uniformDeclarations = Object.keys(uniforms).map(function(name) {
    return `uniform float ${name};`;
  });
  const textureCount = Math.ceil(bandCount / 4);
  uniformDeclarations.push(
    `uniform sampler2D ${Uniforms.TILE_TEXTURE_ARRAY}[${textureCount}];`
  );
  if (context.paletteTextures) {
    uniformDeclarations.push(
      `uniform sampler2D ${PALETTE_TEXTURE_ARRAY}[${context.paletteTextures.length}];`
    );
  }
  const functionDefintions = Object.keys(context.functions).map(function(name) {
    return context.functions[name];
  });
  const fragmentShader = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;
    uniform vec4 ${Uniforms.RENDER_EXTENT};
    uniform float ${Uniforms.TRANSITION_ALPHA};
    uniform float ${Uniforms.TEXTURE_PIXEL_WIDTH};
    uniform float ${Uniforms.TEXTURE_PIXEL_HEIGHT};
    uniform float ${Uniforms.RESOLUTION};
    uniform float ${Uniforms.ZOOM};

    ${uniformDeclarations.join("\n")}

    ${functionDefintions.join("\n")}

    void main() {
      if (
        v_mapCoord[0] < ${Uniforms.RENDER_EXTENT}[0] ||
        v_mapCoord[1] < ${Uniforms.RENDER_EXTENT}[1] ||
        v_mapCoord[0] > ${Uniforms.RENDER_EXTENT}[2] ||
        v_mapCoord[1] > ${Uniforms.RENDER_EXTENT}[3]
      ) {
        discard;
      }

      vec4 color = texture2D(${Uniforms.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);

      ${pipeline.join("\n")}

      if (color.a == 0.0) {
        discard;
      }

      gl_FragColor = color;
      gl_FragColor.rgb *= gl_FragColor.a;
      gl_FragColor *= ${Uniforms.TRANSITION_ALPHA};
    }`;
  return {
    vertexShader,
    fragmentShader,
    uniforms,
    paletteTextures: context.paletteTextures
  };
}
var WebGLTileLayer = class extends BaseTile_default {
  /**
   * @param {Options} options Tile layer options.
   */
  constructor(options) {
    options = options ? Object.assign({}, options) : {};
    const style = options.style || {};
    delete options.style;
    const cacheSize = options.cacheSize;
    delete options.cacheSize;
    super(options);
    this.sources_ = options.sources;
    this.renderedSource_ = null;
    this.renderedResolution_ = NaN;
    this.style_ = style;
    this.cacheSize_ = cacheSize;
    this.styleVariables_ = this.style_.variables || {};
    this.addChangeListener(Property_default.SOURCE, this.handleSourceUpdate_);
  }
  /**
   * Gets the sources for this layer, for a given extent and resolution.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @return {Array<SourceType>} Sources.
   */
  getSources(extent, resolution) {
    const source = this.getSource();
    return this.sources_ ? typeof this.sources_ === "function" ? this.sources_(extent, resolution) : this.sources_ : source ? [source] : [];
  }
  /**
   * @return {SourceType} The source being rendered.
   */
  getRenderSource() {
    return this.renderedSource_ || this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    const source = this.getRenderSource();
    return source ? source.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceUpdate_() {
    if (this.hasRenderer()) {
      this.getRenderer().clearCache();
    }
    if (this.getSource()) {
      this.setStyle(this.style_);
    }
  }
  /**
   * @private
   * @return {number} The number of source bands.
   */
  getSourceBandCount_() {
    const max = Number.MAX_SAFE_INTEGER;
    const sources = this.getSources([-max, -max, max, max], max);
    return sources && sources.length && "bandCount" in sources[0] ? sources[0].bandCount : 4;
  }
  createRenderer() {
    const parsedStyle = parseStyle(this.style_, this.getSourceBandCount_());
    return new TileLayer_default2(this, {
      vertexShader: parsedStyle.vertexShader,
      fragmentShader: parsedStyle.fragmentShader,
      uniforms: parsedStyle.uniforms,
      cacheSize: this.cacheSize_,
      paletteTextures: parsedStyle.paletteTextures
    });
  }
  /**
   * @param {import("../Map").FrameState} frameState Frame state.
   * @param {Array<SourceType>} sources Sources.
   * @return {HTMLElement} Canvas.
   */
  renderSources(frameState, sources) {
    const layerRenderer = this.getRenderer();
    let canvas;
    for (let i = 0, ii = sources.length; i < ii; ++i) {
      this.renderedSource_ = sources[i];
      if (layerRenderer.prepareFrame(frameState)) {
        canvas = layerRenderer.renderFrame(frameState);
      }
    }
    return canvas;
  }
  /**
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   */
  render(frameState, target) {
    this.rendered = true;
    const viewState = frameState.viewState;
    const sources = this.getSources(frameState.extent, viewState.resolution);
    let ready = true;
    for (let i = 0, ii = sources.length; i < ii; ++i) {
      const source = sources[i];
      const sourceState = source.getState();
      if (sourceState == "loading") {
        const onChange = () => {
          if (source.getState() == "ready") {
            source.removeEventListener("change", onChange);
            this.changed();
          }
        };
        source.addEventListener("change", onChange);
      }
      ready = ready && sourceState == "ready";
    }
    const canvas = this.renderSources(frameState, sources);
    if (this.getRenderer().renderComplete && ready) {
      this.renderedResolution_ = viewState.resolution;
      return canvas;
    }
    if (this.renderedResolution_ > 0.5 * viewState.resolution) {
      const altSources = this.getSources(
        frameState.extent,
        this.renderedResolution_
      ).filter((source) => !sources.includes(source));
      if (altSources.length > 0) {
        return this.renderSources(frameState, altSources);
      }
    }
    return canvas;
  }
  /**
   * Update the layer style.  The `updateStyleVariables` function is a more efficient
   * way to update layer rendering.  In cases where the whole style needs to be updated,
   * this method may be called instead.  Note that calling this method will also replace
   * any previously set variables, so the new style also needs to include new variables,
   * if needed.
   * @param {Style} style The new style.
   */
  setStyle(style) {
    this.styleVariables_ = style.variables || {};
    this.style_ = style;
    const parsedStyle = parseStyle(this.style_, this.getSourceBandCount_());
    const renderer = this.getRenderer();
    renderer.reset({
      vertexShader: parsedStyle.vertexShader,
      fragmentShader: parsedStyle.fragmentShader,
      uniforms: parsedStyle.uniforms,
      paletteTextures: parsedStyle.paletteTextures
    });
    this.changed();
  }
  /**
   * Update any variables used by the layer style and trigger a re-render.
   * @param {Object<string, number>} variables Variables to update.
   * @api
   */
  updateStyleVariables(variables) {
    Object.assign(this.styleVariables_, variables);
    this.changed();
  }
};
WebGLTileLayer.prototype.dispose;
var WebGLTile_default = WebGLTileLayer;
export {
  Graticule_default as Graticule,
  Group_default as Group,
  Heatmap_default as Heatmap,
  Image_default as Image,
  Layer_default as Layer,
  MapboxVector_default as MapboxVector,
  Tile_default2 as Tile,
  Vector_default2 as Vector,
  VectorImage_default as VectorImage,
  VectorTile_default2 as VectorTile,
  WebGLPoints_default as WebGLPoints,
  WebGLTile_default as WebGLTile
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=ol_layer__js.js.map
