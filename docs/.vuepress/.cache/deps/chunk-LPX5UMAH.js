// node_modules/.pnpm/ol@7.3.0/node_modules/ol/easing.js
function easeIn(t) {
  return Math.pow(t, 3);
}
function easeOut(t) {
  return 1 - easeIn(1 - t);
}
function inAndOut(t) {
  return 3 * t * t - 2 * t * t * t;
}
function linear(t) {
  return t;
}
function upAndDown(t) {
  if (t < 0.5) {
    return inAndOut(2 * t);
  }
  return 1 - inAndOut(2 * (t - 0.5));
}

export {
  easeIn,
  easeOut,
  inAndOut,
  linear,
  upAndDown
};
//# sourceMappingURL=chunk-LPX5UMAH.js.map
