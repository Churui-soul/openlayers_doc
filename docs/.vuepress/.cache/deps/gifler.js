import {
  __require
} from "./chunk-OZI5HTJH.js";

// node_modules/.pnpm/gifler@0.1.0/node_modules/gifler/gifler.js
(function e(t, n, r) {
  function s(o2, u) {
    if (!n[o2]) {
      if (!t[o2]) {
        var a = typeof __require == "function" && __require;
        if (!u && a)
          return a(o2, true);
        if (i)
          return i(o2, true);
        var f = new Error("Cannot find module '" + o2 + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o2] = { exports: {} };
      t[o2][0].call(l.exports, function(e2) {
        var n2 = t[o2][1][e2];
        return s(n2 ? n2 : e2);
      }, l, l.exports, e, t, n, r);
    }
    return n[o2].exports;
  }
  var i = typeof __require == "function" && __require;
  for (var o = 0; o < r.length; o++)
    s(r[o]);
  return s;
})({ 1: [function(require2, module, exports) {
  function GifWriter(buf, width, height, gopts) {
    var p = 0;
    var gopts = gopts === void 0 ? {} : gopts;
    var loop_count = gopts.loop === void 0 ? null : gopts.loop;
    var global_palette = gopts.palette === void 0 ? null : gopts.palette;
    if (width <= 0 || height <= 0 || width > 65535 || height > 65535)
      throw "Width/Height invalid.";
    function check_palette_and_num_colors(palette) {
      var num_colors = palette.length;
      if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1)
        throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
      return num_colors;
    }
    buf[p++] = 71;
    buf[p++] = 73;
    buf[p++] = 70;
    buf[p++] = 56;
    buf[p++] = 57;
    buf[p++] = 97;
    var gp_num_colors_pow2 = 0;
    var background = 0;
    if (global_palette !== null) {
      var gp_num_colors = check_palette_and_num_colors(global_palette);
      while (gp_num_colors >>= 1)
        ++gp_num_colors_pow2;
      gp_num_colors = 1 << gp_num_colors_pow2;
      --gp_num_colors_pow2;
      if (gopts.background !== void 0) {
        background = gopts.background;
        if (background >= gp_num_colors)
          throw "Background index out of range.";
        if (background === 0)
          throw "Background index explicitly passed as 0.";
      }
    }
    buf[p++] = width & 255;
    buf[p++] = width >> 8 & 255;
    buf[p++] = height & 255;
    buf[p++] = height >> 8 & 255;
    buf[p++] = (global_palette !== null ? 128 : 0) | // Global Color Table Flag.
    gp_num_colors_pow2;
    buf[p++] = background;
    buf[p++] = 0;
    if (global_palette !== null) {
      for (var i = 0, il = global_palette.length; i < il; ++i) {
        var rgb = global_palette[i];
        buf[p++] = rgb >> 16 & 255;
        buf[p++] = rgb >> 8 & 255;
        buf[p++] = rgb & 255;
      }
    }
    if (loop_count !== null) {
      if (loop_count < 0 || loop_count > 65535)
        throw "Loop count invalid.";
      buf[p++] = 33;
      buf[p++] = 255;
      buf[p++] = 11;
      buf[p++] = 78;
      buf[p++] = 69;
      buf[p++] = 84;
      buf[p++] = 83;
      buf[p++] = 67;
      buf[p++] = 65;
      buf[p++] = 80;
      buf[p++] = 69;
      buf[p++] = 50;
      buf[p++] = 46;
      buf[p++] = 48;
      buf[p++] = 3;
      buf[p++] = 1;
      buf[p++] = loop_count & 255;
      buf[p++] = loop_count >> 8 & 255;
      buf[p++] = 0;
    }
    var ended = false;
    this.addFrame = function(x, y, w, h, indexed_pixels, opts) {
      if (ended === true) {
        --p;
        ended = false;
      }
      opts = opts === void 0 ? {} : opts;
      if (x < 0 || y < 0 || x > 65535 || y > 65535)
        throw "x/y invalid.";
      if (w <= 0 || h <= 0 || w > 65535 || h > 65535)
        throw "Width/Height invalid.";
      if (indexed_pixels.length < w * h)
        throw "Not enough pixels for the frame size.";
      var using_local_palette = true;
      var palette = opts.palette;
      if (palette === void 0 || palette === null) {
        using_local_palette = false;
        palette = global_palette;
      }
      if (palette === void 0 || palette === null)
        throw "Must supply either a local or global palette.";
      var num_colors = check_palette_and_num_colors(palette);
      var min_code_size = 0;
      while (num_colors >>= 1)
        ++min_code_size;
      num_colors = 1 << min_code_size;
      var delay = opts.delay === void 0 ? 0 : opts.delay;
      var disposal = opts.disposal === void 0 ? 0 : opts.disposal;
      if (disposal < 0 || disposal > 3)
        throw "Disposal out of range.";
      var use_transparency = false;
      var transparent_index = 0;
      if (opts.transparent !== void 0 && opts.transparent !== null) {
        use_transparency = true;
        transparent_index = opts.transparent;
        if (transparent_index < 0 || transparent_index >= num_colors)
          throw "Transparent color index.";
      }
      if (disposal !== 0 || use_transparency || delay !== 0) {
        buf[p++] = 33;
        buf[p++] = 249;
        buf[p++] = 4;
        buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
        buf[p++] = delay & 255;
        buf[p++] = delay >> 8 & 255;
        buf[p++] = transparent_index;
        buf[p++] = 0;
      }
      buf[p++] = 44;
      buf[p++] = x & 255;
      buf[p++] = x >> 8 & 255;
      buf[p++] = y & 255;
      buf[p++] = y >> 8 & 255;
      buf[p++] = w & 255;
      buf[p++] = w >> 8 & 255;
      buf[p++] = h & 255;
      buf[p++] = h >> 8 & 255;
      buf[p++] = using_local_palette === true ? 128 | min_code_size - 1 : 0;
      if (using_local_palette === true) {
        for (var i2 = 0, il2 = palette.length; i2 < il2; ++i2) {
          var rgb2 = palette[i2];
          buf[p++] = rgb2 >> 16 & 255;
          buf[p++] = rgb2 >> 8 & 255;
          buf[p++] = rgb2 & 255;
        }
      }
      p = GifWriterOutputLZWCodeStream(
        buf,
        p,
        min_code_size < 2 ? 2 : min_code_size,
        indexed_pixels
      );
    };
    this.end = function() {
      if (ended === false) {
        buf[p++] = 59;
        ended = true;
      }
      return p;
    };
  }
  function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
    buf[p++] = min_code_size;
    var cur_subblock = p++;
    var clear_code = 1 << min_code_size;
    var code_mask = clear_code - 1;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var cur_shift = 0;
    var cur = 0;
    function emit_bytes_to_buffer(bit_block_size) {
      while (cur_shift >= bit_block_size) {
        buf[p++] = cur & 255;
        cur >>= 8;
        cur_shift -= 8;
        if (p === cur_subblock + 256) {
          buf[cur_subblock] = 255;
          cur_subblock = p++;
        }
      }
    }
    function emit_code(c) {
      cur |= c << cur_shift;
      cur_shift += cur_code_size;
      emit_bytes_to_buffer(8);
    }
    var ib_code = index_stream[0] & code_mask;
    var code_table = {};
    emit_code(clear_code);
    for (var i = 1, il = index_stream.length; i < il; ++i) {
      var k = index_stream[i] & code_mask;
      var cur_key = ib_code << 8 | k;
      var cur_code = code_table[cur_key];
      if (cur_code === void 0) {
        cur |= ib_code << cur_shift;
        cur_shift += cur_code_size;
        while (cur_shift >= 8) {
          buf[p++] = cur & 255;
          cur >>= 8;
          cur_shift -= 8;
          if (p === cur_subblock + 256) {
            buf[cur_subblock] = 255;
            cur_subblock = p++;
          }
        }
        if (next_code === 4096) {
          emit_code(clear_code);
          next_code = eoi_code + 1;
          cur_code_size = min_code_size + 1;
          code_table = {};
        } else {
          if (next_code >= 1 << cur_code_size)
            ++cur_code_size;
          code_table[cur_key] = next_code++;
        }
        ib_code = k;
      } else {
        ib_code = cur_code;
      }
    }
    emit_code(ib_code);
    emit_code(eoi_code);
    emit_bytes_to_buffer(1);
    if (cur_subblock + 1 === p) {
      buf[cur_subblock] = 0;
    } else {
      buf[cur_subblock] = p - cur_subblock - 1;
      buf[p++] = 0;
    }
    return p;
  }
  function GifReader(buf) {
    var p = 0;
    if (buf[p++] !== 71 || buf[p++] !== 73 || buf[p++] !== 70 || buf[p++] !== 56 || (buf[p++] + 1 & 253) !== 56 || buf[p++] !== 97) {
      throw "Invalid GIF 87a/89a header.";
    }
    var width = buf[p++] | buf[p++] << 8;
    var height = buf[p++] | buf[p++] << 8;
    var pf0 = buf[p++];
    var global_palette_flag = pf0 >> 7;
    var num_global_colors_pow2 = pf0 & 7;
    var num_global_colors = 1 << num_global_colors_pow2 + 1;
    var background = buf[p++];
    buf[p++];
    var global_palette_offset = null;
    if (global_palette_flag) {
      global_palette_offset = p;
      p += num_global_colors * 3;
    }
    var no_eof = true;
    var frames = [];
    var delay = 0;
    var transparent_index = null;
    var disposal = 0;
    var loop_count = null;
    this.width = width;
    this.height = height;
    while (no_eof && p < buf.length) {
      switch (buf[p++]) {
        case 33:
          switch (buf[p++]) {
            case 255:
              if (buf[p] !== 11 || // 21 FF already read, check block size.
              // NETSCAPE2.0
              buf[p + 1] == 78 && buf[p + 2] == 69 && buf[p + 3] == 84 && buf[p + 4] == 83 && buf[p + 5] == 67 && buf[p + 6] == 65 && buf[p + 7] == 80 && buf[p + 8] == 69 && buf[p + 9] == 50 && buf[p + 10] == 46 && buf[p + 11] == 48 && // Sub-block
              buf[p + 12] == 3 && buf[p + 13] == 1 && buf[p + 16] == 0) {
                p += 14;
                loop_count = buf[p++] | buf[p++] << 8;
                p++;
              } else {
                p += 12;
                while (true) {
                  var block_size = buf[p++];
                  if (block_size === 0)
                    break;
                  p += block_size;
                }
              }
              break;
            case 249:
              if (buf[p++] !== 4 || buf[p + 4] !== 0)
                throw "Invalid graphics extension block.";
              var pf1 = buf[p++];
              delay = buf[p++] | buf[p++] << 8;
              transparent_index = buf[p++];
              if ((pf1 & 1) === 0)
                transparent_index = null;
              disposal = pf1 >> 2 & 7;
              p++;
              break;
            case 254:
              while (true) {
                var block_size = buf[p++];
                if (block_size === 0)
                  break;
                p += block_size;
              }
              break;
            default:
              throw "Unknown graphic control label: 0x" + buf[p - 1].toString(16);
          }
          break;
        case 44:
          var x = buf[p++] | buf[p++] << 8;
          var y = buf[p++] | buf[p++] << 8;
          var w = buf[p++] | buf[p++] << 8;
          var h = buf[p++] | buf[p++] << 8;
          var pf2 = buf[p++];
          var local_palette_flag = pf2 >> 7;
          var interlace_flag = pf2 >> 6 & 1;
          var num_local_colors_pow2 = pf2 & 7;
          var num_local_colors = 1 << num_local_colors_pow2 + 1;
          var palette_offset = global_palette_offset;
          var has_local_palette = false;
          if (local_palette_flag) {
            var has_local_palette = true;
            palette_offset = p;
            p += num_local_colors * 3;
          }
          var data_offset = p;
          p++;
          while (true) {
            var block_size = buf[p++];
            if (block_size === 0)
              break;
            p += block_size;
          }
          frames.push({
            x,
            y,
            width: w,
            height: h,
            has_local_palette,
            palette_offset,
            data_offset,
            data_length: p - data_offset,
            transparent_index,
            interlaced: !!interlace_flag,
            delay,
            disposal
          });
          break;
        case 59:
          no_eof = false;
          break;
        default:
          throw "Unknown gif block: 0x" + buf[p - 1].toString(16);
          break;
      }
    }
    this.numFrames = function() {
      return frames.length;
    };
    this.loopCount = function() {
      return loop_count;
    };
    this.frameInfo = function(frame_num) {
      if (frame_num < 0 || frame_num >= frames.length)
        throw "Frame index out of range.";
      return frames[frame_num];
    };
    this.decodeAndBlitFrameBGRA = function(frame_num, pixels) {
      var frame = this.frameInfo(frame_num);
      var num_pixels = frame.width * frame.height;
      var index_stream = new Uint8Array(num_pixels);
      GifReaderLZWOutputIndexStream(
        buf,
        frame.data_offset,
        index_stream,
        num_pixels
      );
      var palette_offset2 = frame.palette_offset;
      var trans = frame.transparent_index;
      if (trans === null)
        trans = 256;
      var framewidth = frame.width;
      var framestride = width - framewidth;
      var xleft = framewidth;
      var opbeg = (frame.y * width + frame.x) * 4;
      var opend = ((frame.y + frame.height) * width + frame.x) * 4;
      var op = opbeg;
      var scanstride = framestride * 4;
      if (frame.interlaced === true) {
        scanstride += width * 4 * 7;
      }
      var interlaceskip = 8;
      for (var i = 0, il = index_stream.length; i < il; ++i) {
        var index = index_stream[i];
        if (xleft === 0) {
          op += scanstride;
          xleft = framewidth;
          if (op >= opend) {
            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
            interlaceskip >>= 1;
          }
        }
        if (index === trans) {
          op += 4;
        } else {
          var r = buf[palette_offset2 + index * 3];
          var g = buf[palette_offset2 + index * 3 + 1];
          var b = buf[palette_offset2 + index * 3 + 2];
          pixels[op++] = b;
          pixels[op++] = g;
          pixels[op++] = r;
          pixels[op++] = 255;
        }
        --xleft;
      }
    };
    this.decodeAndBlitFrameRGBA = function(frame_num, pixels) {
      var frame = this.frameInfo(frame_num);
      var num_pixels = frame.width * frame.height;
      var index_stream = new Uint8Array(num_pixels);
      GifReaderLZWOutputIndexStream(
        buf,
        frame.data_offset,
        index_stream,
        num_pixels
      );
      var palette_offset2 = frame.palette_offset;
      var trans = frame.transparent_index;
      if (trans === null)
        trans = 256;
      var framewidth = frame.width;
      var framestride = width - framewidth;
      var xleft = framewidth;
      var opbeg = (frame.y * width + frame.x) * 4;
      var opend = ((frame.y + frame.height) * width + frame.x) * 4;
      var op = opbeg;
      var scanstride = framestride * 4;
      if (frame.interlaced === true) {
        scanstride += width * 4 * 7;
      }
      var interlaceskip = 8;
      for (var i = 0, il = index_stream.length; i < il; ++i) {
        var index = index_stream[i];
        if (xleft === 0) {
          op += scanstride;
          xleft = framewidth;
          if (op >= opend) {
            scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
            op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
            interlaceskip >>= 1;
          }
        }
        if (index === trans) {
          op += 4;
        } else {
          var r = buf[palette_offset2 + index * 3];
          var g = buf[palette_offset2 + index * 3 + 1];
          var b = buf[palette_offset2 + index * 3 + 2];
          pixels[op++] = r;
          pixels[op++] = g;
          pixels[op++] = b;
          pixels[op++] = 255;
        }
        --xleft;
      }
    };
  }
  function GifReaderLZWOutputIndexStream(code_stream, p, output, output_length) {
    var min_code_size = code_stream[p++];
    var clear_code = 1 << min_code_size;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var code_mask = (1 << cur_code_size) - 1;
    var cur_shift = 0;
    var cur = 0;
    var op = 0;
    var subblock_size = code_stream[p++];
    var code_table = new Int32Array(4096);
    var prev_code = null;
    while (true) {
      while (cur_shift < 16) {
        if (subblock_size === 0)
          break;
        cur |= code_stream[p++] << cur_shift;
        cur_shift += 8;
        if (subblock_size === 1) {
          subblock_size = code_stream[p++];
        } else {
          --subblock_size;
        }
      }
      if (cur_shift < cur_code_size)
        break;
      var code = cur & code_mask;
      cur >>= cur_code_size;
      cur_shift -= cur_code_size;
      if (code === clear_code) {
        next_code = eoi_code + 1;
        cur_code_size = min_code_size + 1;
        code_mask = (1 << cur_code_size) - 1;
        prev_code = null;
        continue;
      } else if (code === eoi_code) {
        break;
      }
      var chase_code = code < next_code ? code : prev_code;
      var chase_length = 0;
      var chase = chase_code;
      while (chase > clear_code) {
        chase = code_table[chase] >> 8;
        ++chase_length;
      }
      var k = chase;
      var op_end = op + chase_length + (chase_code !== code ? 1 : 0);
      if (op_end > output_length) {
        console.log("Warning, gif stream longer than expected.");
        return;
      }
      output[op++] = k;
      op += chase_length;
      var b = op;
      if (chase_code !== code)
        output[op++] = k;
      chase = chase_code;
      while (chase_length--) {
        chase = code_table[chase];
        output[--b] = chase & 255;
        chase >>= 8;
      }
      if (prev_code !== null && next_code < 4096) {
        code_table[next_code++] = prev_code << 8 | k;
        if (next_code >= code_mask + 1 && cur_code_size < 12) {
          ++cur_code_size;
          code_mask = code_mask << 1 | 1;
        }
      }
      prev_code = code;
    }
    if (op !== output_length) {
      console.log("Warning, gif stream shorter than expected.");
    }
    return output;
  }
  try {
    exports.GifWriter = GifWriter;
    exports.GifReader = GifReader;
  } catch (e2) {
  }
}, {}], 2: [function(require2, module, exports) {
  var Animator, GifReader, createBufferCanvas, decodeFrames, getCanvasElement, gifler, wrapXhrCallback, bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };
  GifReader = require2("omggif").GifReader;
  gifler = function(url) {
    var aync, xhr;
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, aync = true);
    xhr.responseType = "arraybuffer";
    return {
      xhr,
      get: function(callback) {
        xhr.onload = wrapXhrCallback(callback);
        xhr.send();
        return this;
      },
      animate: function(selector) {
        var canvas;
        canvas = getCanvasElement(selector);
        xhr.onload = wrapXhrCallback(function(animator) {
          return animator.animateInCanvas(canvas);
        });
        xhr.send();
        return this;
      },
      frames: function(selector, onDrawFrame, setCanvasDimesions) {
        var canvas;
        if (setCanvasDimesions == null) {
          setCanvasDimesions = false;
        }
        canvas = getCanvasElement(selector);
        xhr.onload = wrapXhrCallback(function(animator) {
          animator.onDrawFrame = onDrawFrame;
          return animator.animateInCanvas(canvas, setCanvasDimesions);
        });
        xhr.send();
        return this;
      }
    };
  };
  wrapXhrCallback = function(callback) {
    return function(e2) {
      return callback(new Animator(new GifReader(new Uint8Array(this.response))));
    };
  };
  getCanvasElement = function(selector) {
    var element, ref;
    if (typeof selector === "string" && ((ref = element = document.querySelector(selector)) != null ? ref.tagName : void 0) === "CANVAS") {
      return element;
    } else if ((selector != null ? selector.tagName : void 0) === "CANVAS") {
      return selector;
    } else {
      throw new Error("Unexpected selector type. Valid types are query-selector-string/canvas-element");
    }
  };
  createBufferCanvas = function(frame, width, height) {
    var bufferCanvas, bufferContext, imageData;
    bufferCanvas = document.createElement("canvas");
    bufferContext = bufferCanvas.getContext("2d");
    bufferCanvas.width = frame.width;
    bufferCanvas.height = frame.height;
    imageData = bufferContext.createImageData(width, height);
    imageData.data.set(frame.pixels);
    bufferContext.putImageData(imageData, -frame.x, -frame.y);
    return bufferCanvas;
  };
  decodeFrames = function(reader, frameIndex) {
    var j, ref, results;
    return function() {
      results = [];
      for (var j2 = 0, ref2 = reader.numFrames(); 0 <= ref2 ? j2 < ref2 : j2 > ref2; 0 <= ref2 ? j2++ : j2--) {
        results.push(j2);
      }
      return results;
    }.apply(this).map(function(_this) {
      return function(frameIndex2) {
        var frameInfo;
        frameInfo = reader.frameInfo(frameIndex2);
        frameInfo.pixels = new Uint8ClampedArray(reader.width * reader.height * 4);
        reader.decodeAndBlitFrameRGBA(frameIndex2, frameInfo.pixels);
        return frameInfo;
      };
    }(this));
  };
  Animator = function() {
    function Animator2(_reader) {
      var ref;
      this._reader = _reader;
      this._advanceFrame = bind(this._advanceFrame, this);
      this._nextFrameRender = bind(this._nextFrameRender, this);
      this._nextFrame = bind(this._nextFrame, this);
      ref = this._reader, this.width = ref.width, this.height = ref.height;
      this._frames = decodeFrames(this._reader);
      this._loopCount = this._reader.loopCount();
      this._loops = 0;
      this._frameIndex = 0;
      this._running = false;
    }
    Animator2.prototype.start = function() {
      this._lastTime = new Date().valueOf();
      this._delayCompensation = 0;
      this._running = true;
      setTimeout(this._nextFrame, 0);
      return this;
    };
    Animator2.prototype.stop = function() {
      this._running = false;
      return this;
    };
    Animator2.prototype.reset = function() {
      this._frameIndex = 0;
      this._loops = 0;
      return this;
    };
    Animator2.prototype._nextFrame = function() {
      requestAnimationFrame(this._nextFrameRender);
    };
    Animator2.prototype._nextFrameRender = function() {
      var frame, ref;
      if (!this._running) {
        return;
      }
      frame = this._frames[this._frameIndex];
      if ((ref = this.onFrame) != null) {
        ref.apply(this, [frame, this._frameIndex]);
      }
      return this._enqueueNextFrame();
    };
    Animator2.prototype._advanceFrame = function() {
      this._frameIndex += 1;
      if (this._frameIndex >= this._frames.length) {
        if (this._loopCount !== 0 && this._loopCount === this._loops) {
          this.stop();
        } else {
          this._frameIndex = 0;
          this._loops += 1;
        }
      }
    };
    Animator2.prototype._enqueueNextFrame = function() {
      var actualDelay, delta, frame, frameDelay;
      this._advanceFrame();
      while (this._running) {
        frame = this._frames[this._frameIndex];
        delta = new Date().valueOf() - this._lastTime;
        this._lastTime += delta;
        this._delayCompensation += delta;
        frameDelay = frame.delay * 10;
        actualDelay = frameDelay - this._delayCompensation;
        this._delayCompensation -= frameDelay;
        if (actualDelay < 0) {
          this._advanceFrame();
          continue;
        } else {
          setTimeout(this._nextFrame, actualDelay);
          break;
        }
      }
    };
    Animator2.prototype.animateInCanvas = function(canvas, setDimension) {
      var ctx;
      if (setDimension == null) {
        setDimension = true;
      }
      if (setDimension) {
        canvas.width = this.width;
        canvas.height = this.height;
      }
      ctx = canvas.getContext("2d");
      if (this.onDrawFrame == null) {
        this.onDrawFrame = function(ctx2, frame, i) {
          return ctx2.drawImage(frame.buffer, frame.x, frame.y);
        };
      }
      if (this.onFrame == null) {
        this.onFrame = function(_this) {
          return function(frame, i) {
            var ref, saved;
            if (frame.buffer == null) {
              frame.buffer = createBufferCanvas(frame, _this.width, _this.height);
            }
            if (typeof _this.disposeFrame === "function") {
              _this.disposeFrame();
            }
            switch (frame.disposal) {
              case 2:
                _this.disposeFrame = function() {
                  return ctx.clearRect(0, 0, canvas.width, canvas.height);
                };
                break;
              case 3:
                saved = ctx.getImageData(0, 0, canvas.width, canvas.height);
                _this.disposeFrame = function() {
                  return ctx.putImageData(saved, 0, 0);
                };
                break;
              default:
                _this.disposeFrame = null;
            }
            return (ref = _this.onDrawFrame) != null ? ref.apply(_this, [ctx, frame, i]) : void 0;
          };
        }(this);
      }
      this.start();
      return this;
    };
    return Animator2;
  }();
  gifler.Animator = Animator;
  gifler.decodeFrames = decodeFrames;
  gifler.createBufferCanvas = createBufferCanvas;
  if (typeof window !== "undefined" && window !== null) {
    window.gifler = gifler;
  }
  if (typeof module !== "undefined" && module !== null) {
    module.exports = gifler;
  }
}, { "omggif": 1 }] }, {}, [2]);
//# sourceMappingURL=gifler.js.map
