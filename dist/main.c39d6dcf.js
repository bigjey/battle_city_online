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
})({"constants.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEYS = exports.BlockType = exports.DIR = exports.SHOOT_COLDOWN = exports.TANK_HEIGHT = exports.TANK_WIDTH = exports.BULLET_SPEED = exports.BULLET_SIZE = exports.CLUSTER_SIZE = exports.BLOCK_SIZE = exports.CANVAS_HEIGHT = exports.CANVAS_WIDTH = exports.MOVE_STEP = exports.GLOBAL_MODE = void 0;
var GLOBAL_MODE;

(function (GLOBAL_MODE) {
  GLOBAL_MODE[GLOBAL_MODE["NORMAL_GAME"] = 0] = "NORMAL_GAME";
  GLOBAL_MODE[GLOBAL_MODE["DEBUG_TEST_LEVEL"] = 1] = "DEBUG_TEST_LEVEL";
  GLOBAL_MODE[GLOBAL_MODE["EDIT_TEST_LEVEL"] = 2] = "EDIT_TEST_LEVEL";
})(GLOBAL_MODE = exports.GLOBAL_MODE || (exports.GLOBAL_MODE = {}));

exports.MOVE_STEP = 2;
exports.CANVAS_WIDTH = 416;
exports.CANVAS_HEIGHT = 416;
exports.BLOCK_SIZE = 8;
exports.CLUSTER_SIZE = 2;
exports.BULLET_SIZE = 8;
exports.BULLET_SPEED = 4;
exports.TANK_WIDTH = 32;
exports.TANK_HEIGHT = 32;
exports.SHOOT_COLDOWN = 200;
var DIR;

(function (DIR) {
  DIR[DIR["NONE"] = -1] = "NONE";
  DIR[DIR["UP"] = 0] = "UP";
  DIR[DIR["RIGHT"] = 1] = "RIGHT";
  DIR[DIR["DOWN"] = 2] = "DOWN";
  DIR[DIR["LEFT"] = 3] = "LEFT";
})(DIR = exports.DIR || (exports.DIR = {}));

var BlockType;

(function (BlockType) {
  BlockType[BlockType["Brick"] = 0] = "Brick";
  BlockType[BlockType["Steel"] = 1] = "Steel";
  BlockType[BlockType["Tree"] = 2] = "Tree";
  BlockType[BlockType["Water"] = 3] = "Water";
})(BlockType = exports.BlockType || (exports.BlockType = {}));

exports.KEYS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  SHOOT: "Space"
};
},{}],"../assets/player_1.png":[function(require,module,exports) {
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
exports.preloadAssets = exports.SPRITES = void 0;

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

var tree_4_png_1 = __importDefault(require("../assets/tree_4.png")); // import BaseImage from "../assets/base.png";


var water_1_png_1 = __importDefault(require("../assets/water_1.png"));

var water_2_png_1 = __importDefault(require("../assets/water_2.png"));

var water_3_png_1 = __importDefault(require("../assets/water_3.png"));

var water_4_png_1 = __importDefault(require("../assets/water_4.png"));

exports.SPRITES = {
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
  var promises = Object.keys(exports.SPRITES).map(function (key) {
    return new Promise(function (res) {
      var img = new Image();

      img.onload = function () {
        exports.SPRITES[key].img = img;
        res();
      };

      img.src = exports.SPRITES[key].file;
    });
  });
  return Promise.all(promises);
}

exports.preloadAssets = preloadAssets;
},{"../assets/player_1.png":"../assets/player_1.png","../assets/brick_1.png":"../assets/brick_1.png","../assets/brick_2.png":"../assets/brick_2.png","../assets/brick_3.png":"../assets/brick_3.png","../assets/brick_4.png":"../assets/brick_4.png","../assets/stone_1.png":"../assets/stone_1.png","../assets/stone_2.png":"../assets/stone_2.png","../assets/stone_3.png":"../assets/stone_3.png","../assets/stone_4.png":"../assets/stone_4.png","../assets/tree_1.png":"../assets/tree_1.png","../assets/tree_2.png":"../assets/tree_2.png","../assets/tree_3.png":"../assets/tree_3.png","../assets/tree_4.png":"../assets/tree_4.png","../assets/water_1.png":"../assets/water_1.png","../assets/water_2.png":"../assets/water_2.png","../assets/water_3.png":"../assets/water_3.png","../assets/water_4.png":"../assets/water_4.png"}],"gameplay/Body.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

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

exports.Body = Body;
},{}],"gameplay/Block.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

var constants_1 = require("../constants");

var utils_1 = require("../utils");

var Body_1 = require("./Body");

var Block = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Block, _Body_1$Body);

  var _super = _createSuper(Block);

  function Block(blockX, blockY, type) {
    var _this;

    _classCallCheck(this, Block);

    _this = _super.call(this, blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE, constants_1.BLOCK_SIZE, constants_1.BLOCK_SIZE);
    _this.x = blockX;
    _this.y = blockY;
    _this.type = type;
    return _this;
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      utils_1.renderBlock(this.type, this.x, this.y);
    }
  }, {
    key: "isWalkable",
    get: function get() {
      switch (this.type) {
        case constants_1.BlockType.Tree:
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isDamagable",
    get: function get() {
      switch (this.type) {
        case constants_1.BlockType.Brick:
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isSolid",
    get: function get() {
      switch (this.type) {
        case constants_1.BlockType.Brick:
        case constants_1.BlockType.Steel:
          return true;

        default:
          return false;
      }
    }
  }]);

  return Block;
}(Body_1.Body);

exports.Block = Block;
},{"../constants":"constants.ts","../utils":"utils.ts","./Body":"gameplay/Body.ts"}],"utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blocksinCluster = exports.buildCluster = exports.renderCluster = exports.renderBlock = exports.bodyIsVisible = exports.bodyInBounds = exports.blockIndexInBounds = exports.snapValue = exports.AABBIntersects = void 0;

var constants_1 = require("./constants");

var Block_1 = require("./gameplay/Block");

var GameManager_1 = require("./gameplay/GameManager");

var preload_1 = require("./preload");

var MOVEMENT_SNAP_VALUE = constants_1.BLOCK_SIZE * 2;

function AABBIntersects(A, B) {
  return !(A.l >= B.r || B.l >= A.r || A.t >= B.b || B.t >= A.b);
}

exports.AABBIntersects = AABBIntersects;

function snapValue(value) {
  var snapped = Math.round(value / MOVEMENT_SNAP_VALUE);
  return snapped * MOVEMENT_SNAP_VALUE;
}

exports.snapValue = snapValue;

function blockIndexInBounds(x, y) {
  return x >= 0 && x < 52 && y >= 0 && y < 52;
}

exports.blockIndexInBounds = blockIndexInBounds;

function bodyInBounds(body) {
  return body.l >= 0 && body.t >= 0 && body.b <= constants_1.CANVAS_HEIGHT && body.r <= constants_1.CANVAS_WIDTH;
}

exports.bodyInBounds = bodyInBounds;

function bodyIsVisible(body) {
  return body.l < constants_1.CANVAS_WIDTH && body.r > 0 && body.t < constants_1.CANVAS_HEIGHT && body.b > 0;
}

exports.bodyIsVisible = bodyIsVisible;

function renderBlock(type, blockX, blockY) {
  var spriteIndex = blockY % 2 * 2 + blockX % 2;

  switch (type) {
    case constants_1.BlockType.Brick:
      GameManager_1.gameManager.ctx.drawImage(preload_1.SPRITES["brick_".concat(spriteIndex + 1)].img, blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE);
      break;

    case constants_1.BlockType.Steel:
      GameManager_1.gameManager.ctx.drawImage(preload_1.SPRITES["stone_".concat(spriteIndex + 1)].img, blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE);
      break;

    case constants_1.BlockType.Tree:
      GameManager_1.gameManager.ctx.drawImage(preload_1.SPRITES["tree_".concat(spriteIndex + 1)].img, blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE);
      break;

    case constants_1.BlockType.Water:
      GameManager_1.gameManager.ctx.drawImage(preload_1.SPRITES["water_".concat(spriteIndex + 1)].img, blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE);
      break;

    default:
      GameManager_1.gameManager.ctx.fillStyle = "pink";
      GameManager_1.gameManager.ctx.fillRect(blockX * constants_1.BLOCK_SIZE, blockY * constants_1.BLOCK_SIZE, constants_1.BLOCK_SIZE, constants_1.BLOCK_SIZE);
  }
}

exports.renderBlock = renderBlock;

function renderCluster(type, clusterX, clusterY) {
  var blockX = clusterX * constants_1.CLUSTER_SIZE;
  var blockY = clusterY * constants_1.CLUSTER_SIZE;

  for (var dy = 0; dy < constants_1.CLUSTER_SIZE; dy++) {
    for (var dx = 0; dx < constants_1.CLUSTER_SIZE; dx++) {
      renderBlock(type, blockX + dx, blockY + dy);
    }
  }
}

exports.renderCluster = renderCluster;

function buildCluster(blockType, clusterX, clusterY) {
  for (var yOffset = 0; yOffset < constants_1.CLUSTER_SIZE; yOffset++) {
    for (var xOffset = 0; xOffset < constants_1.CLUSTER_SIZE; xOffset++) {
      var blockX = clusterX * constants_1.CLUSTER_SIZE + xOffset;
      var blockY = clusterY * constants_1.CLUSTER_SIZE + yOffset;
      GameManager_1.gameManager.blocks[blockY][blockX] = new Block_1.Block(blockX, blockY, blockType);
    }
  }
}

exports.buildCluster = buildCluster;

function blocksinCluster(clusterX, clusterY) {
  var items = [];

  for (var yOffset = 0; yOffset < constants_1.CLUSTER_SIZE; yOffset++) {
    for (var xOffset = 0; xOffset < constants_1.CLUSTER_SIZE; xOffset++) {
      var blockX = clusterX * constants_1.CLUSTER_SIZE + xOffset;
      var blockY = clusterY * constants_1.CLUSTER_SIZE + yOffset;
      var block = GameManager_1.gameManager.blocks[blockY][blockX];

      if (block) {
        items.push(block);
      }
    }
  }

  return items;
}

exports.blocksinCluster = blocksinCluster;
},{"./constants":"constants.ts","./gameplay/Block":"gameplay/Block.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./preload":"preload.ts"}],"gameplay/GameManager.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameManager = exports.GameManager = void 0;

var constants_1 = require("../constants");

var utils_1 = require("../utils");

var Tank_1 = require("./Tank");

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = constants_1.CANVAS_WIDTH;
canvas.height = constants_1.CANVAS_HEIGHT;

var GameManager = /*#__PURE__*/function () {
  function GameManager(canvas) {
    _classCallCheck(this, GameManager);

    this.mode = constants_1.GLOBAL_MODE.EDIT_TEST_LEVEL;
    this.player1 = null;
    this.blocks = [];
    this.bullets = [];
    this.debugLevel = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.restoreDebugLevelData();
  }

  _createClass(GameManager, [{
    key: "setMode",
    value: function setMode(mode) {
      this.mode = mode;

      switch (this.mode) {
        case constants_1.GLOBAL_MODE.DEBUG_TEST_LEVEL:
          this.buildDebugLevel();
          this.player1 = new Tank_1.Tank(0, 0);
          break;
      }
    }
  }, {
    key: "restoreDebugLevelData",
    value: function restoreDebugLevelData() {
      var data = localStorage.getItem("debugLevel");

      if (data) {
        try {
          this.debugLevel = JSON.parse(data);
        } catch (e) {//
        }
      }

      if (!this.debugLevel.length) {
        this.debugLevel = new Array(52 / constants_1.CLUSTER_SIZE).fill(null).map(function () {
          return new Array(52 / constants_1.CLUSTER_SIZE).fill(null);
        });
      }
    }
  }, {
    key: "buildDebugLevel",
    value: function buildDebugLevel() {
      var _iterator = _createForOfIteratorHelper(this.debugLevel.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              clusterY = _step$value[0],
              row = _step$value[1];

          var _iterator2 = _createForOfIteratorHelper(row.entries()),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  clusterX = _step2$value[0],
                  type = _step2$value[1];

              if (type !== null) {
                utils_1.buildCluster(type, clusterX, clusterY);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return GameManager;
}();

exports.GameManager = GameManager;
var instance = new GameManager(canvas);
exports.gameManager = instance;
window.gameManager = instance;
},{"../constants":"constants.ts","../utils":"utils.ts","./Tank":"gameplay/Tank.ts"}],"keyboard.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keysPressed = void 0;

var constants_1 = require("./constants");

var GameManager_1 = require("./gameplay/GameManager");

exports.keysPressed = {};
window.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "1":
      GameManager_1.gameManager.setMode(constants_1.GLOBAL_MODE.NORMAL_GAME);
      break;

    case "2":
      GameManager_1.gameManager.setMode(constants_1.GLOBAL_MODE.DEBUG_TEST_LEVEL);
      break;

    case "3":
      GameManager_1.gameManager.setMode(constants_1.GLOBAL_MODE.EDIT_TEST_LEVEL);
      break;

    default:
      break;
  }
});
window.addEventListener("keydown", function (e) {
  exports.keysPressed[e.code] = true;
});
window.addEventListener("keyup", function (e) {
  exports.keysPressed[e.code] = false;
});
},{"./constants":"constants.ts","./gameplay/GameManager":"gameplay/GameManager.ts"}],"gameplay/Bullet.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bullet = void 0;

var constants_1 = require("../constants");

var utils_1 = require("../utils");

var Body_1 = require("./Body");

var GameManager_1 = require("./GameManager");

var Bullet = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Bullet, _Body_1$Body);

  var _super = _createSuper(Bullet);

  function Bullet(x, y, dir) {
    var _this;

    _classCallCheck(this, Bullet);

    _this = _super.call(this, x, y, constants_1.BULLET_SIZE, constants_1.BULLET_SIZE);
    _this.dir = constants_1.DIR.NONE;
    _this.dir = dir;
    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      switch (this.dir) {
        case constants_1.DIR.LEFT:
          this.pos.x -= constants_1.BULLET_SPEED;
          break;

        case constants_1.DIR.UP:
          this.pos.y -= constants_1.BULLET_SPEED;
          break;

        case constants_1.DIR.RIGHT:
          this.pos.x += constants_1.BULLET_SPEED;
          break;

        case constants_1.DIR.DOWN:
          this.pos.y += constants_1.BULLET_SPEED;
          break;
      }

      var b = this.hitBlocks();

      if (b.length) {
        var hit = false;

        var _iterator = _createForOfIteratorHelper(b),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var block = _step.value;

            if (block.isSolid) {
              hit = true;
            }

            if (block.isDamagable) {
              GameManager_1.gameManager.blocks[block.y][block.x] = null;
              hit = true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (hit) {
          GameManager_1.gameManager.bullets.splice(GameManager_1.gameManager.bullets.indexOf(this), 1);
        }
      }

      if (!utils_1.bodyIsVisible(this)) {
        GameManager_1.gameManager.bullets.splice(GameManager_1.gameManager.bullets.indexOf(this), 1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      GameManager_1.gameManager.ctx.fillStyle = "#fff";
      GameManager_1.gameManager.ctx.fillRect(this.pos.x, this.pos.y, constants_1.BULLET_SIZE, constants_1.BULLET_SIZE);
    }
  }, {
    key: "hitBlocks",
    value: function hitBlocks() {
      var items = [];

      if (this.dir === constants_1.DIR.NONE) {
        return items;
      }

      var pos1, pos2, pos3, pos4;

      if (this.dir === constants_1.DIR.LEFT || this.dir === constants_1.DIR.RIGHT) {
        pos1 = {
          x: Math.floor(this.center.x / constants_1.BLOCK_SIZE),
          y: Math.floor((this.center.y + constants_1.BLOCK_SIZE * 0.5) / constants_1.BLOCK_SIZE)
        };
        pos2 = {
          x: Math.floor(this.center.x / constants_1.BLOCK_SIZE),
          y: Math.floor((this.center.y - constants_1.BLOCK_SIZE * 0.5) / constants_1.BLOCK_SIZE)
        };
        pos3 = {
          x: Math.floor(this.center.x / constants_1.BLOCK_SIZE),
          y: Math.floor((this.center.y + constants_1.BLOCK_SIZE * 1.5) / constants_1.BLOCK_SIZE)
        };
        pos4 = {
          x: Math.floor(this.center.x / constants_1.BLOCK_SIZE),
          y: Math.floor((this.center.y - constants_1.BLOCK_SIZE * 1.5) / constants_1.BLOCK_SIZE)
        };
      } else {
        pos1 = {
          x: Math.floor((this.center.x + constants_1.BLOCK_SIZE * 0.5) / constants_1.BLOCK_SIZE),
          y: Math.floor(this.center.y / constants_1.BLOCK_SIZE)
        };
        pos2 = {
          x: Math.floor((this.center.x - constants_1.BLOCK_SIZE * 0.5) / constants_1.BLOCK_SIZE),
          y: Math.floor(this.center.y / constants_1.BLOCK_SIZE)
        };
        pos3 = {
          x: Math.floor((this.center.x + constants_1.BLOCK_SIZE * 1.5) / constants_1.BLOCK_SIZE),
          y: Math.floor(this.center.y / constants_1.BLOCK_SIZE)
        };
        pos4 = {
          x: Math.floor((this.center.x - constants_1.BLOCK_SIZE * 1.5) / constants_1.BLOCK_SIZE),
          y: Math.floor(this.center.y / constants_1.BLOCK_SIZE)
        };
      } // first side of hit


      if (utils_1.blockIndexInBounds(pos1.x, pos1.y) && GameManager_1.gameManager.blocks[pos1.y][pos1.x]) {
        items.push(GameManager_1.gameManager.blocks[pos1.y][pos1.x]); // second block of first side

        if (utils_1.blockIndexInBounds(pos3.x, pos3.y) && GameManager_1.gameManager.blocks[pos3.y][pos3.x]) {
          items.push(GameManager_1.gameManager.blocks[pos3.y][pos3.x]);
        }
      } // second side of hit


      if (utils_1.blockIndexInBounds(pos2.x, pos2.y) && GameManager_1.gameManager.blocks[pos2.y][pos2.x]) {
        items.push(GameManager_1.gameManager.blocks[pos2.y][pos2.x]); // second block of second side

        if (utils_1.blockIndexInBounds(pos4.x, pos4.y) && GameManager_1.gameManager.blocks[pos4.y][pos4.x]) {
          items.push(GameManager_1.gameManager.blocks[pos4.y][pos4.x]);
        }
      } // for (let x = lPos; x < lPos + radius; x++) {
      //   for (let y = tPos; y < tPos + radius; y++) {
      //     if (!blockIndexInBounds(x, y)) {
      //       continue;
      //     }
      //     if (gameManager.blocks[y][x]) {
      //       items.push(gameManager.blocks[y][x] as Block);
      //     }
      //   }
      // }


      return items;
    }
  }]);

  return Bullet;
}(Body_1.Body);

exports.Bullet = Bullet;
},{"../constants":"constants.ts","../utils":"utils.ts","./Body":"gameplay/Body.ts","./GameManager":"gameplay/GameManager.ts"}],"gameplay/Tank.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tank = void 0;

var constants_1 = require("../constants");

var keyboard_1 = require("../keyboard");

var preload_1 = require("../preload");

var utils_1 = require("../utils");

var Body_1 = require("./Body");

var Bullet_1 = require("./Bullet");

var GameManager_1 = require("./GameManager");

var Tank = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Tank, _Body_1$Body);

  var _super = _createSuper(Tank);

  function Tank(x, y) {
    var _this;

    _classCallCheck(this, Tank);

    _this = _super.call(this, x, y, constants_1.TANK_WIDTH, constants_1.TANK_HEIGHT);
    _this.dir = constants_1.DIR.RIGHT;
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
      var newDir = constants_1.DIR.NONE;

      if (keyboard_1.keysPressed[constants_1.KEYS.LEFT]) {
        newPos.x -= constants_1.MOVE_STEP;
        this.pos.y = newPos.y = utils_1.snapValue(this.pos.y);
        newDir = constants_1.DIR.LEFT;
      } else if (keyboard_1.keysPressed[constants_1.KEYS.RIGHT]) {
        newPos.x += constants_1.MOVE_STEP;
        this.pos.y = newPos.y = utils_1.snapValue(this.pos.y);
        newDir = constants_1.DIR.RIGHT;
      } else if (keyboard_1.keysPressed[constants_1.KEYS.UP]) {
        newPos.y -= constants_1.MOVE_STEP;
        this.pos.x = newPos.x = utils_1.snapValue(this.pos.x);
        newDir = constants_1.DIR.UP;
      } else if (keyboard_1.keysPressed[constants_1.KEYS.DOWN]) {
        newPos.y += constants_1.MOVE_STEP;
        this.pos.x = newPos.x = utils_1.snapValue(this.pos.x);
        newDir = constants_1.DIR.DOWN;
      }

      if (newDir !== constants_1.DIR.NONE) {
        this.dir = newDir;

        if (this.move(newPos)) {
          this.pos = newPos;
        }
      } // shooting


      if ((!this.lastShot || Date.now() - this.lastShot >= constants_1.SHOOT_COLDOWN) && keyboard_1.keysPressed[constants_1.KEYS.SHOOT]) {
        this.shoot();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var x = this.pos.x + this.size.x / 2;
      var y = this.pos.y + this.size.y / 2;
      GameManager_1.gameManager.ctx.save();
      GameManager_1.gameManager.ctx.translate(x, y);
      GameManager_1.gameManager.ctx.rotate(Math.PI / 2 * this.dir);
      GameManager_1.gameManager.ctx.translate(-x, -y);
      GameManager_1.gameManager.ctx.drawImage(preload_1.SPRITES.player_1.img, this.pos.x, this.pos.y);
      GameManager_1.gameManager.ctx.restore();
    }
  }, {
    key: "move",
    value: function move(newPos) {
      var newBody = new Body_1.Body(newPos.x, newPos.y, constants_1.TANK_WIDTH, constants_1.TANK_WIDTH);

      if (!utils_1.bodyInBounds(newBody)) {
        return false;
      }

      var blocks = this.overlappingBlocks(newBody);

      var _iterator = _createForOfIteratorHelper(blocks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var block = _step.value;

          if (!block.isWalkable) {
            console.log("cant walk");
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "shoot",
    value: function shoot() {
      GameManager_1.gameManager.bullets.push(new Bullet_1.Bullet(this.center.x - constants_1.BULLET_SIZE / 2, this.center.y - constants_1.BULLET_SIZE / 2, this.dir));
      this.lastShot = Date.now();
    }
  }, {
    key: "overlappingBlocks",
    value: function overlappingBlocks(body) {
      var items = [];
      var res = constants_1.BLOCK_SIZE * constants_1.CLUSTER_SIZE;
      var lCluster = Math.floor(body.l / res);
      var rCluster = Math.ceil(body.r / res);
      var tCluster = Math.floor(body.t / res);
      var bCluster = Math.ceil(body.b / res);

      for (var clusterY = tCluster; clusterY < bCluster; clusterY++) {
        for (var clusterX = lCluster; clusterX < rCluster; clusterX++) {
          var _iterator2 = _createForOfIteratorHelper(utils_1.blocksinCluster(clusterX, clusterY)),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var block = _step2.value;
              items.push(block);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }

      console.log(lCluster, rCluster);
      console.log(tCluster, bCluster);
      return items;
    }
  }]);

  return Tank;
}(Body_1.Body);

exports.Tank = Tank;
},{"../constants":"constants.ts","../keyboard":"keyboard.ts","../preload":"preload.ts","../utils":"utils.ts","./Body":"gameplay/Body.ts","./Bullet":"gameplay/Bullet.ts","./GameManager":"gameplay/GameManager.ts"}],"level-editor.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levelEditor = exports.LevelEditor = void 0;

var constants_1 = require("./constants");

var GameManager_1 = require("./gameplay/GameManager");

var utils_1 = require("./utils");

var $level_editor = document.querySelectorAll("#level-editor");
var $pallete_colors = document.querySelectorAll(".pallete__color");
var classnames = {
  activePaletteColor: "pallete__color--active"
};
var stringToBrush = {
  empty: null,
  brick: constants_1.BlockType.Brick,
  stone: constants_1.BlockType.Steel,
  tree: constants_1.BlockType.Tree,
  water: constants_1.BlockType.Water
};
var RESOLUTION = constants_1.BLOCK_SIZE * constants_1.CLUSTER_SIZE;

var LevelEditor = /*#__PURE__*/function () {
  function LevelEditor() {
    var _this = this;

    _classCallCheck(this, LevelEditor);

    this.brush = null;
    this.hl = null;
    this.mousePressed = false;
    $pallete_colors.forEach(function ($color) {
      $color.addEventListener("click", function (e) {
        var brushValue = $color.dataset.colorValue;

        if (brushValue) {
          var brushType = stringToBrush[brushValue];

          _this.setBrush(brushType);

          $pallete_colors.forEach(function ($color) {
            $color.classList.remove(classnames.activePaletteColor);
          });
          $color.classList.add(classnames.activePaletteColor);
        }
      });
    });
    GameManager_1.gameManager.canvas.addEventListener("mousemove", function (e) {
      var x = Math.floor(e.offsetX / RESOLUTION);
      var y = Math.floor(e.offsetY / RESOLUTION);

      if (x >= 0 && x < 52 / constants_1.CLUSTER_SIZE && y >= 0 && y < 52 / constants_1.CLUSTER_SIZE) {
        _this.setHL({
          x: x,
          y: y
        });

        if (_this.mousePressed) {
          _this.paintCell({
            x: x,
            y: y
          });
        }
      } else {
        _this.setHL(null);
      }
    });
    GameManager_1.gameManager.canvas.addEventListener("mouseleave", function () {
      _this.setHL(null);
    });
    GameManager_1.gameManager.canvas.addEventListener("mousedown", function (e) {
      _this.mousePressed = true;
      var x = Math.floor(e.offsetX / RESOLUTION);
      var y = Math.floor(e.offsetY / RESOLUTION);

      if (x >= 0 && x < 52 / constants_1.CLUSTER_SIZE && y >= 0 && y < 52 / constants_1.CLUSTER_SIZE) {
        _this.paintCell({
          x: x,
          y: y
        });
      }
    });
    GameManager_1.gameManager.canvas.addEventListener("mouseup", function () {
      _this.mousePressed = false;
    });
  }

  _createClass(LevelEditor, [{
    key: "render",
    value: function render() {
      GameManager_1.gameManager.ctx.fillStyle = "#000";
      GameManager_1.gameManager.ctx.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
      var res = constants_1.BLOCK_SIZE * constants_1.CLUSTER_SIZE;

      for (var i = 0; i < Math.floor(constants_1.CANVAS_WIDTH / res); i++) {
        GameManager_1.gameManager.ctx.strokeStyle = "#222";
        GameManager_1.gameManager.ctx.lineWidth = 1;
        GameManager_1.gameManager.ctx.beginPath();
        GameManager_1.gameManager.ctx.moveTo(i * res, 0);
        GameManager_1.gameManager.ctx.lineTo(i * res, constants_1.CANVAS_HEIGHT);
        GameManager_1.gameManager.ctx.closePath();
        GameManager_1.gameManager.ctx.stroke();
        GameManager_1.gameManager.ctx.beginPath();
        GameManager_1.gameManager.ctx.moveTo(0, i * res);
        GameManager_1.gameManager.ctx.lineTo(constants_1.CANVAS_WIDTH, i * res);
        GameManager_1.gameManager.ctx.closePath();
        GameManager_1.gameManager.ctx.stroke();
      }

      var _iterator = _createForOfIteratorHelper(GameManager_1.gameManager.debugLevel.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              clusterY = _step$value[0],
              row = _step$value[1];

          var _iterator2 = _createForOfIteratorHelper(row.entries()),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  clusterX = _step2$value[0],
                  type = _step2$value[1];

              if (type !== null) {
                utils_1.renderCluster(type, clusterX, clusterY);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.hl) {
        GameManager_1.gameManager.ctx.strokeStyle = "rgba(255,255,255,1)";
        GameManager_1.gameManager.ctx.lineWidth = 2;
        GameManager_1.gameManager.ctx.strokeRect(this.hl.x * RESOLUTION, this.hl.y * RESOLUTION, RESOLUTION, RESOLUTION);
      }
    }
  }, {
    key: "setBrush",
    value: function setBrush(brush) {
      this.brush = brush;
    }
  }, {
    key: "setHL",
    value: function setHL(hl) {
      this.hl = hl;
    }
  }, {
    key: "paintCell",
    value: function paintCell(xy) {
      GameManager_1.gameManager.debugLevel[xy.y][xy.x] = this.brush;
      this.save();
    }
  }, {
    key: "save",
    value: function save() {
      localStorage.setItem("debugLevel", JSON.stringify(GameManager_1.gameManager.debugLevel));
    }
  }]);

  return LevelEditor;
}();

exports.LevelEditor = LevelEditor;
var instance = new LevelEditor();
exports.levelEditor = instance;
window.levelEditor = instance;
},{"./constants":"constants.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./utils":"utils.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("./constants");

var preload_1 = require("./preload");

var Tank_1 = require("./gameplay/Tank");

var GameManager_1 = require("./gameplay/GameManager");

var level_editor_1 = require("./level-editor");

function update() {
  var _a;

  (_a = GameManager_1.gameManager.player1) === null || _a === void 0 ? void 0 : _a.update();

  var _iterator = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
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
  var _a;

  GameManager_1.gameManager.ctx.fillStyle = "#000";
  GameManager_1.gameManager.ctx.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
  (_a = GameManager_1.gameManager.player1) === null || _a === void 0 ? void 0 : _a.render();

  var _iterator2 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
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

  var _iterator3 = _createForOfIteratorHelper(GameManager_1.gameManager.blocks),
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
  switch (GameManager_1.gameManager.mode) {
    case constants_1.GLOBAL_MODE.NORMAL_GAME:
      {
        GameManager_1.gameManager.ctx.fillStyle = "pink";
        GameManager_1.gameManager.ctx.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
        break;
      }

    case constants_1.GLOBAL_MODE.DEBUG_TEST_LEVEL:
      {
        update();
        render();
        break;
      }

    case constants_1.GLOBAL_MODE.EDIT_TEST_LEVEL:
      {
        level_editor_1.levelEditor.render();
        break;
      }

    default:
  }

  window.setTimeout(tick, 1000 / 60);
}

{
  GameManager_1.gameManager.player1 = new Tank_1.Tank(0, 0);
  GameManager_1.gameManager.blocks = new Array(52).fill(null).map(function () {
    return new Array(52).fill(null);
  });
  GameManager_1.gameManager.bullets = [];
}
preload_1.preloadAssets().then(tick);
},{"./constants":"constants.ts","./preload":"preload.ts","./gameplay/Tank":"gameplay/Tank.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./level-editor":"level-editor.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59199" + '/');

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
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map