import {
  Immediate_default,
  getSquaredTolerance
} from "./chunk-W2437R7T.js";
import {
  apply,
  create,
  multiply,
  scale
} from "./chunk-LUOILEKQ.js";
import {
  DEVICE_PIXEL_RATIO
} from "./chunk-WZHGFLG3.js";
import {
  getTransformFromProjections,
  getUserProjection
} from "./chunk-5HKLM7RS.js";

// node_modules/.pnpm/ol@7.3.0/node_modules/ol/render.js
function toContext(context, options) {
  const canvas = context.canvas;
  options = options ? options : {};
  const pixelRatio = options.pixelRatio || DEVICE_PIXEL_RATIO;
  const size = options.size;
  if (size) {
    canvas.width = size[0] * pixelRatio;
    canvas.height = size[1] * pixelRatio;
    canvas.style.width = size[0] + "px";
    canvas.style.height = size[1] + "px";
  }
  const extent = [0, 0, canvas.width, canvas.height];
  const transform = scale(create(), pixelRatio, pixelRatio);
  return new Immediate_default(context, pixelRatio, extent, transform, 0);
}
function getVectorContext(event) {
  if (!(event.context instanceof CanvasRenderingContext2D)) {
    throw new Error("Only works for render events from Canvas 2D layers");
  }
  const a = event.inversePixelTransform[0];
  const b = event.inversePixelTransform[1];
  const canvasPixelRatio = Math.sqrt(a * a + b * b);
  const frameState = event.frameState;
  const transform = multiply(
    event.inversePixelTransform.slice(),
    frameState.coordinateToPixelTransform
  );
  const squaredTolerance = getSquaredTolerance(
    frameState.viewState.resolution,
    canvasPixelRatio
  );
  let userTransform;
  const userProjection = getUserProjection();
  if (userProjection) {
    userTransform = getTransformFromProjections(
      userProjection,
      frameState.viewState.projection
    );
  }
  return new Immediate_default(
    event.context,
    canvasPixelRatio,
    frameState.extent,
    transform,
    frameState.viewState.rotation,
    squaredTolerance,
    userTransform
  );
}
function getRenderPixel(event, pixel) {
  return apply(event.inversePixelTransform, pixel.slice(0));
}

export {
  toContext,
  getVectorContext,
  getRenderPixel
};
//# sourceMappingURL=chunk-WCMIUO4X.js.map
