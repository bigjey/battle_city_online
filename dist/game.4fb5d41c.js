// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../assets/player_1.png":[function(require,module,exports) {
module.exports = "/player_1.aeb8fb45.png";
},{}],"../assets/brick_1.png":[function(require,module,exports) {
module.exports = "/brick_1.89383570.png";
},{}],"../assets/brick_2.png":[function(require,module,exports) {
module.exports = "/brick_2.96a53a8a.png";
},{}],"../assets/brick_3.png":[function(require,module,exports) {
module.exports = "/brick_3.737cd030.png";
},{}],"../assets/brick_4.png":[function(require,module,exports) {
module.exports = "/brick_4.be7de5ac.png";
},{}],"../assets/stone_1.png":[function(require,module,exports) {
module.exports = "/stone_1.bacdde32.png";
},{}],"../assets/stone_2.png":[function(require,module,exports) {
module.exports = "/stone_2.3be39d66.png";
},{}],"../assets/stone_3.png":[function(require,module,exports) {
module.exports = "/stone_3.a3e07400.png";
},{}],"../assets/stone_4.png":[function(require,module,exports) {
module.exports = "/stone_4.e304cf14.png";
},{}],"../assets/tree_1.png":[function(require,module,exports) {
module.exports = "/tree_1.f3798b0d.png";
},{}],"../assets/tree_2.png":[function(require,module,exports) {
module.exports = "/tree_2.7a696bcc.png";
},{}],"../assets/tree_3.png":[function(require,module,exports) {
module.exports = "/tree_3.126f9c2a.png";
},{}],"../assets/tree_4.png":[function(require,module,exports) {
module.exports = "/tree_4.4d685705.png";
},{}],"../assets/water_1.png":[function(require,module,exports) {
module.exports = "/water_1.de305b67.png";
},{}],"../assets/water_2.png":[function(require,module,exports) {
module.exports = "/water_2.235c5358.png";
},{}],"../assets/water_3.png":[function(require,module,exports) {
module.exports = "/water_3.ba0dd19c.png";
},{}],"../assets/water_4.png":[function(require,module,exports) {
module.exports = "/water_4.4ca4ffaf.png";
},{}],"preload.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadAssets = void 0;

var player_1_png_1 = __importDefault(require("../assets/player_1.png"));

var brick_1_png_1 = __importDefault(require("../assets/brick_1.png"));

var brick_2_png_1 = __importDefault(require("../assets/brick_2.png"));

var brick_3_png_1 = __importDefault(require("../assets/brick_3.png"));

var brick_4_png_1 = __importDefault(require("../assets/brick_4.png"));

var stone_1_png_1 = __importDefault(require("../assets/stone_1.png"));

var stone_2_png_1 = __importDefault(require("../assets/stone_2.png"));

var stone_3_png_1 = __importDefault(require("../assets/stone_3.png"));

var stone_4_png_1 = __importDefault(require("../assets/stone_4.png"));

var tree_1_png_1 = __importDefault(require("../assets/tree_1.png"));

var tree_2_png_1 = __importDefault(require("../assets/tree_2.png"));

var tree_3_png_1 = __importDefault(require("../assets/tree_3.png"));

var tree_4_png_1 = __importDefault(require("../assets/tree_4.png"));

var water_1_png_1 = __importDefault(require("../assets/water_1.png"));

var water_2_png_1 = __importDefault(require("../assets/water_2.png"));

var water_3_png_1 = __importDefault(require("../assets/water_3.png"));

var water_4_png_1 = __importDefault(require("../assets/water_4.png"));

var sprites = {
  player_1: {
    file: player_1_png_1.default
  },
  brick_1: {
    file: brick_1_png_1.default
  },
  brick_2: {
    file: brick_2_png_1.default
  },
  brick_3: {
    file: brick_3_png_1.default
  },
  brick_4: {
    file: brick_4_png_1.default
  },
  stone_1: {
    file: stone_1_png_1.default
  },
  stone_2: {
    file: stone_2_png_1.default
  },
  stone_3: {
    file: stone_3_png_1.default
  },
  stone_4: {
    file: stone_4_png_1.default
  },
  tree_1: {
    file: tree_1_png_1.default
  },
  tree_2: {
    file: tree_2_png_1.default
  },
  tree_3: {
    file: tree_3_png_1.default
  },
  tree_4: {
    file: tree_4_png_1.default
  },
  water_1: {
    file: water_1_png_1.default
  },
  water_2: {
    file: water_2_png_1.default
  },
  water_3: {
    file: water_3_png_1.default
  },
  water_4: {
    file: water_4_png_1.default
  }
};

function preloadAssets() {
  var promises = Object.keys(sprites).map(function (key) {
    return new Promise(function (res) {
      var img = new Image();

      img.onload = function () {
        sprites[key].img = img;
        res();
      };

      img.src = sprites[key].file;
    });
  });
  return Promise.all(promises);
}

exports.preloadAssets = preloadAssets;
},{"../assets/player_1.png":"../assets/player_1.png","../assets/brick_1.png":"../assets/brick_1.png","../assets/brick_2.png":"../assets/brick_2.png","../assets/brick_3.png":"../assets/brick_3.png","../assets/brick_4.png":"../assets/brick_4.png","../assets/stone_1.png":"../assets/stone_1.png","../assets/stone_2.png":"../assets/stone_2.png","../assets/stone_3.png":"../assets/stone_3.png","../assets/stone_4.png":"../assets/stone_4.png","../assets/tree_1.png":"../assets/tree_1.png","../assets/tree_2.png":"../assets/tree_2.png","../assets/tree_3.png":"../assets/tree_3.png","../assets/tree_4.png":"../assets/tree_4.png","../assets/water_1.png":"../assets/water_1.png","../assets/water_2.png":"../assets/water_2.png","../assets/water_3.png":"../assets/water_3.png","../assets/water_4.png":"../assets/water_4.png"}],"game.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var preload_1 = require("./preload");

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var MOVE_STEP = 2;
var CANVAS_WIDTH = 416;
var CANVAS_HEIGHT = 416;
var BLOCK_SIZE = 8;
var CLUSTER_SIZE = 2;
var BULLET_SIZE = 8;
var BULLET_SPEED = 4;
var TANK_WIDTH = 32;
var TANK_HEIGHT = 32;
var SHOOT_COLDOWN = 200;
var MOVEMENT_SNAP_VALUE = BLOCK_SIZE * 2;
var DIR;

(function (DIR) {
  DIR[DIR["NONE"] = -1] = "NONE";
  DIR[DIR["UP"] = 0] = "UP";
  DIR[DIR["RIGHT"] = 1] = "RIGHT";
  DIR[DIR["DOWN"] = 2] = "DOWN";
  DIR[DIR["LEFT"] = 3] = "LEFT";
})(DIR || (DIR = {}));

var BlockType;

(function (BlockType) {
  BlockType[BlockType["Brick"] = 0] = "Brick";
  BlockType[BlockType["Steel"] = 1] = "Steel";
  BlockType[BlockType["Tree"] = 2] = "Tree";
  BlockType[BlockType["Water"] = 3] = "Water";
})(BlockType || (BlockType = {}));

document.body.appendChild(canvas);
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

function update() {
  player1.update();

  var _iterator = _createForOfIteratorHelper(bullets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var bullet = _step.value;
      bullet.update();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function render() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player1.render();

  var _iterator2 = _createForOfIteratorHelper(bullets),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var bullet = _step2.value;
      bullet.render();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(blocks),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var row = _step3.value;

      var _iterator4 = _createForOfIteratorHelper(row),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var block = _step4.value;

          if (block) {
            block.render();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function tick() {
  update();
  render();
  window.setTimeout(tick, 1000 / 60);
}

var Body = /*#__PURE__*/function () {
  function Body() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Body);

    this.pos = {
      x: 0,
      y: 0
    };
    this.size = {
      x: 0,
      y: 0
    };
    this.pos.x = x;
    this.pos.y = y;
    this.size.x = w;
    this.size.y = h;
  }

  _createClass(Body, [{
    key: "t",
    get: function get() {
      return this.pos.y;
    }
  }, {
    key: "l",
    get: function get() {
      return this.pos.x;
    }
  }, {
    key: "b",
    get: function get() {
      return this.pos.y + this.size.y;
    }
  }, {
    key: "r",
    get: function get() {
      return this.pos.x + this.size.x;
    }
  }, {
    key: "center",
    get: function get() {
      return {
        x: this.pos.x + this.size.x / 2,
        y: this.pos.y + this.size.y / 2
      };
    }
  }]);

  return Body;
}();

var Tank = /*#__PURE__*/function (_Body) {
  _inherits(Tank, _Body);

  var _super = _createSuper(Tank);

  function Tank(x, y) {
    var _this;

    _classCallCheck(this, Tank);

    _this = _super.call(this, x, y, TANK_WIDTH, TANK_HEIGHT);
    _this.dir = DIR.RIGHT;
    _this.lastShot = 0;
    return _this;
  }

  _createClass(Tank, [{
    key: "update",
    value: function update() {
      // movement
      var newPos = {
        x: this.pos.x,
        y: this.pos.y
      };
      var newDir = DIR.NONE;

      if (keysPressed[KEYS.LEFT]) {
        newPos.x -= MOVE_STEP;
        this.pos.y = newPos.y = snapValue(this.pos.y);
        newDir = DIR.LEFT;
      } else if (keysPressed[KEYS.RIGHT]) {
        newPos.x += MOVE_STEP;
        this.pos.y = newPos.y = snapValue(this.pos.y);
        newDir = DIR.RIGHT;
      } else if (keysPressed[KEYS.UP]) {
        newPos.y -= MOVE_STEP;
        this.pos.x = newPos.x = snapValue(this.pos.x);
        newDir = DIR.UP;
      } else if (keysPressed[KEYS.DOWN]) {
        newPos.y += MOVE_STEP;
        this.pos.x = newPos.x = snapValue(this.pos.x);
        newDir = DIR.DOWN;
      }

      if (newDir !== DIR.NONE) {
        this.dir = newDir;

        if (this.move(newPos)) {
          this.pos = newPos;
        }
      } // shooting


      if ((!this.lastShot || Date.now() - this.lastShot >= SHOOT_COLDOWN) && keysPressed[KEYS.SHOOT]) {
        this.shoot();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var x = this.pos.x + this.size.x / 2;
      var y = this.pos.y + this.size.y / 2;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 2 * this.dir);
      ctx.translate(-x, -y);
      ctx.drawImage(sprites.player_1.img, this.pos.x, this.pos.y);
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move(newPos) {
      var newBody = new Body(newPos.x, newPos.y, TANK_WIDTH, TANK_WIDTH);

      if (!bodyInBounds(newBody)) {
        return false;
      }

      var blocks = overlappingBlocks(newBody, 5);

      var _iterator5 = _createForOfIteratorHelper(blocks),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var block = _step5.value;

          if (!block.isWalkable && AABBIntersects(newBody, block)) {
            return false;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return true;
    }
  }, {
    key: "shoot",
    value: function shoot() {
      bullets.push(new Bullet(this.center.x - BULLET_SIZE / 2, this.center.y - BULLET_SIZE / 2, this.dir));
      this.lastShot = Date.now();
    }
  }]);

  return Tank;
}(Body);

var Block = /*#__PURE__*/function (_Body2) {
  _inherits(Block, _Body2);

  var _super2 = _createSuper(Block);

  function Block(x, y, type) {
    var _this2;

    _classCallCheck(this, Block);

    _this2 = _super2.call(this, x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    _this2.x = x;
    _this2.y = y;
    _this2.type = type;
    return _this2;
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      var gridX = Math.floor(this.pos.x / BLOCK_SIZE);
      var gridY = Math.floor(this.pos.y / BLOCK_SIZE);
      var spriteIndex = gridY % 2 * 2 + gridX % 2;

      switch (this.type) {
        case BlockType.Brick:
          ctx.drawImage(sprites["brick_".concat(spriteIndex + 1)].img, this.pos.x, this.pos.y);
          break;

        case BlockType.Steel:
          ctx.drawImage(sprites["stone_".concat(spriteIndex + 1)].img, this.pos.x, this.pos.y);
          break;

        case BlockType.Tree:
          ctx.drawImage(sprites["tree_".concat(spriteIndex + 1)].img, this.pos.x, this.pos.y);
          break;

        case BlockType.Water:
          ctx.drawImage(sprites["water_".concat(spriteIndex + 1)].img, this.pos.x, this.pos.y);
          break;

        default:
          ctx.fillStyle = "pink";
          ctx.fillRect(this.pos.x, this.pos.y, BLOCK_SIZE, BLOCK_SIZE);
      }
    }
  }, {
    key: "isWalkable",
    get: function get() {
      switch (this.type) {
        case BlockType.Tree:
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isDamagable",
    get: function get() {
      switch (this.type) {
        case BlockType.Brick:
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isSolid",
    get: function get() {
      switch (this.type) {
        case BlockType.Brick:
        case BlockType.Steel:
          return true;

        default:
          return false;
      }
    }
  }]);

  return Block;
}(Body);

var Bullet = /*#__PURE__*/function (_Body3) {
  _inherits(Bullet, _Body3);

  var _super3 = _createSuper(Bullet);

  function Bullet(x, y, dir) {
    var _this3;

    _classCallCheck(this, Bullet);

    _this3 = _super3.call(this, x, y, BULLET_SIZE, BULLET_SIZE);
    _this3.dir = DIR.NONE;
    _this3.dir = dir;
    return _this3;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      switch (this.dir) {
        case DIR.LEFT:
          this.pos.x -= BULLET_SPEED;
          break;

        case DIR.UP:
          this.pos.y -= BULLET_SPEED;
          break;

        case DIR.RIGHT:
          this.pos.x += BULLET_SPEED;
          break;

        case DIR.DOWN:
          this.pos.y += BULLET_SPEED;
          break;
      }

      var b = overlappingBlocks(this, 2);

      if (b.length) {
        var hit = false;

        var _iterator6 = _createForOfIteratorHelper(b),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var block = _step6.value;

            if (block.isSolid) {
              hit = true;
            }

            if (block.isDamagable) {
              blocks[block.y][block.x] = null;
              hit = true;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        if (hit) {
          bullets.splice(bullets.indexOf(this), 1);
        }
      }

      if (!bodyIsVisible(this)) {
        bullets.splice(bullets.indexOf(this), 1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      ctx.fillStyle = "#fff";
      ctx.fillRect(this.pos.x, this.pos.y, BULLET_SIZE, BULLET_SIZE);
    }
  }]);

  return Bullet;
}(Body);

function AABBIntersects(A, B) {
  return !(A.l >= B.r || B.l >= A.r || A.t >= B.b || B.t >= A.b);
}

function snapValue(value) {
  var snapped = Math.round(value / MOVEMENT_SNAP_VALUE);
  return snapped * MOVEMENT_SNAP_VALUE;
}

function overlappingBlocks(body) {
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var lPos = Math.floor(body.l / BLOCK_SIZE);
  var tPos = Math.floor(body.t / BLOCK_SIZE);
  var items = [];

  for (var x = lPos; x < lPos + radius; x++) {
    for (var y = tPos; y < tPos + radius; y++) {
      if (!blockIndexInBounds(x, y)) {
        continue;
      }

      if (blocks[y][x]) {
        items.push(blocks[y][x]);
      }
    }
  }

  return items;
}

function blockIndexInBounds(x, y) {
  return x >= 0 && x < 52 && y >= 0 && y < 52;
}

function bodyInBounds(body) {
  return body.l >= 0 && body.t >= 0 && body.b <= CANVAS_HEIGHT && body.r <= CANVAS_WIDTH;
}

function bodyIsVisible(body) {
  return body.l < CANVAS_WIDTH && body.r > 0 && body.t < CANVAS_HEIGHT && body.b > 0;
}

var KEYS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  SHOOT: "Space"
};
var keysPressed = {};
window.addEventListener("keydown", function (e) {
  keysPressed[e.code] = true;
});
window.addEventListener("keyup", function (e) {
  keysPressed[e.code] = false;
});
var player1 = new Tank(0, 0);
var blocks = new Array(52).fill(null).map(function () {
  return new Array(52).fill(null);
});
var bullets = []; // for (let i = 0; i < 10; i++) {

buildCluster(2, 2, BlockType.Brick);
buildCluster(2, 3, BlockType.Brick);
buildCluster(3, 2, BlockType.Brick);
buildCluster(3, 3, BlockType.Brick); // }

buildCluster(4, 4, BlockType.Steel);
buildCluster(4, 5, BlockType.Steel);
buildCluster(5, 4, BlockType.Steel);
buildCluster(5, 5, BlockType.Steel);
buildCluster(6, 6, BlockType.Tree);
buildCluster(6, 7, BlockType.Tree);
buildCluster(7, 6, BlockType.Tree);
buildCluster(7, 7, BlockType.Tree);
buildCluster(8, 8, BlockType.Water);
buildCluster(8, 9, BlockType.Water);
buildCluster(9, 8, BlockType.Water);
buildCluster(9, 9, BlockType.Water);

function buildCluster(gridX, gridY, blockType) {
  for (var yOffset = 0; yOffset < CLUSTER_SIZE; yOffset++) {
    for (var xOffset = 0; xOffset < CLUSTER_SIZE; xOffset++) {
      var yIndex = gridY * CLUSTER_SIZE + yOffset;
      var xIndex = gridX * CLUSTER_SIZE + xOffset;
      blocks[yIndex][xIndex] = new Block(xIndex, yIndex, blockType);
    }
  }
}

preload_1.preloadAssets().then(tick);
},{"./preload":"preload.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57880" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","game.ts"], null)
//# sourceMappingURL=/game.4fb5d41c.js.map