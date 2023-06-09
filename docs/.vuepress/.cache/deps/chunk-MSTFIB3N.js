// node_modules/.pnpm/ol@7.3.0/node_modules/ol/geom/flat/deflate.js
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
  for (let i = 0, ii = coordinate.length; i < ii; ++i) {
    flatCoordinates[offset++] = coordinate[i];
  }
  return offset;
}
function deflateCoordinates(flatCoordinates, offset, coordinates, stride) {
  for (let i = 0, ii = coordinates.length; i < ii; ++i) {
    const coordinate = coordinates[i];
    for (let j = 0; j < stride; ++j) {
      flatCoordinates[offset++] = coordinate[j];
    }
  }
  return offset;
}
function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
  ends = ends ? ends : [];
  let i = 0;
  for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
    const end = deflateCoordinates(
      flatCoordinates,
      offset,
      coordinatess[j],
      stride
    );
    ends[i++] = end;
    offset = end;
  }
  ends.length = i;
  return ends;
}
function deflateMultiCoordinatesArray(flatCoordinates, offset, coordinatesss, stride, endss) {
  endss = endss ? endss : [];
  let i = 0;
  for (let j = 0, jj = coordinatesss.length; j < jj; ++j) {
    const ends = deflateCoordinatesArray(
      flatCoordinates,
      offset,
      coordinatesss[j],
      stride,
      endss[i]
    );
    if (ends.length === 0) {
      ends[0] = offset;
    }
    endss[i++] = ends;
    offset = ends[ends.length - 1];
  }
  endss.length = i;
  return endss;
}

export {
  deflateCoordinate,
  deflateCoordinates,
  deflateCoordinatesArray,
  deflateMultiCoordinatesArray
};
//# sourceMappingURL=chunk-MSTFIB3N.js.map
