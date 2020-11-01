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
},{}],"../assets/base.png":[function(require,module,exports) {
module.exports = "/base.7dec1a26.png";
},{}],"../assets/base_destroyed.png":[function(require,module,exports) {
module.exports = "/base_destroyed.f892f6c3.png";
},{}],"../assets/water_1.png":[function(require,module,exports) {
module.exports = "/water_1.de305b67.png";
},{}],"../assets/water_2.png":[function(require,module,exports) {
module.exports = "/water_2.235c5358.png";
},{}],"../assets/water_3.png":[function(require,module,exports) {
module.exports = "/water_3.ba0dd19c.png";
},{}],"../assets/water_4.png":[function(require,module,exports) {
module.exports = "/water_4.4ca4ffaf.png";
},{}],"../assets/ai_tank_1.png":[function(require,module,exports) {
module.exports = "/ai_tank_1.95446adb.png";
},{}],"../assets/ai_tank_2.png":[function(require,module,exports) {
module.exports = "/ai_tank_2.1a6d9e9a.png";
},{}],"../assets/ai_tank_3.png":[function(require,module,exports) {
module.exports = "/ai_tank_3.a13b99d5.png";
},{}],"../assets/ai_tank_4.png":[function(require,module,exports) {
module.exports = "/ai_tank_4.6bfbbdaf.png";
},{}],"../assets/ai_tank_5.png":[function(require,module,exports) {
module.exports = "/ai_tank_5.6f165c4a.png";
},{}],"../assets/ai_tank_6.png":[function(require,module,exports) {
module.exports = "/ai_tank_6.416a51cb.png";
},{}],"../assets/ai_tank_7.png":[function(require,module,exports) {
module.exports = "/ai_tank_7.473153a0.png";
},{}],"../assets/explosion_small_1.png":[function(require,module,exports) {
module.exports = "/explosion_small_1.34da010a.png";
},{}],"../assets/explosion_small_2.png":[function(require,module,exports) {
module.exports = "/explosion_small_2.d2817b1d.png";
},{}],"../assets/explosion_small_3.png":[function(require,module,exports) {
module.exports = "/explosion_small_3.1010f521.png";
},{}],"../assets/explosion_big_1.png":[function(require,module,exports) {
module.exports = "/explosion_big_1.2318ce8a.png";
},{}],"../assets/explosion_big_2.png":[function(require,module,exports) {
module.exports = "/explosion_big_2.12f64935.png";
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

var tree_4_png_1 = __importDefault(require("../assets/tree_4.png"));

var base_png_1 = __importDefault(require("../assets/base.png"));

var base_destroyed_png_1 = __importDefault(require("../assets/base_destroyed.png"));

var water_1_png_1 = __importDefault(require("../assets/water_1.png"));

var water_2_png_1 = __importDefault(require("../assets/water_2.png"));

var water_3_png_1 = __importDefault(require("../assets/water_3.png"));

var water_4_png_1 = __importDefault(require("../assets/water_4.png"));

var ai_tank_1_png_1 = __importDefault(require("../assets/ai_tank_1.png"));

var ai_tank_2_png_1 = __importDefault(require("../assets/ai_tank_2.png"));

var ai_tank_3_png_1 = __importDefault(require("../assets/ai_tank_3.png"));

var ai_tank_4_png_1 = __importDefault(require("../assets/ai_tank_4.png"));

var ai_tank_5_png_1 = __importDefault(require("../assets/ai_tank_5.png"));

var ai_tank_6_png_1 = __importDefault(require("../assets/ai_tank_6.png"));

var ai_tank_7_png_1 = __importDefault(require("../assets/ai_tank_7.png"));

var explosion_small_1_png_1 = __importDefault(require("../assets/explosion_small_1.png"));

var explosion_small_2_png_1 = __importDefault(require("../assets/explosion_small_2.png"));

var explosion_small_3_png_1 = __importDefault(require("../assets/explosion_small_3.png"));

var explosion_big_1_png_1 = __importDefault(require("../assets/explosion_big_1.png"));

var explosion_big_2_png_1 = __importDefault(require("../assets/explosion_big_2.png"));

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
  },
  ai_tank_1: {
    file: ai_tank_1_png_1.default
  },
  ai_tank_2: {
    file: ai_tank_2_png_1.default
  },
  ai_tank_3: {
    file: ai_tank_3_png_1.default
  },
  ai_tank_4: {
    file: ai_tank_4_png_1.default
  },
  ai_tank_5: {
    file: ai_tank_5_png_1.default
  },
  ai_tank_6: {
    file: ai_tank_6_png_1.default
  },
  ai_tank_7: {
    file: ai_tank_7_png_1.default
  },
  base: {
    file: base_png_1.default
  },
  base_destroyed: {
    file: base_destroyed_png_1.default
  },
  explosion_small_1: {
    file: explosion_small_1_png_1.default
  },
  explosion_small_2: {
    file: explosion_small_2_png_1.default
  },
  explosion_small_3: {
    file: explosion_small_3_png_1.default
  },
  explosion_big_1: {
    file: explosion_big_1_png_1.default
  },
  explosion_big_2: {
    file: explosion_big_2_png_1.default
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
},{"../assets/player_1.png":"../assets/player_1.png","../assets/brick_1.png":"../assets/brick_1.png","../assets/brick_2.png":"../assets/brick_2.png","../assets/brick_3.png":"../assets/brick_3.png","../assets/brick_4.png":"../assets/brick_4.png","../assets/stone_1.png":"../assets/stone_1.png","../assets/stone_2.png":"../assets/stone_2.png","../assets/stone_3.png":"../assets/stone_3.png","../assets/stone_4.png":"../assets/stone_4.png","../assets/tree_1.png":"../assets/tree_1.png","../assets/tree_2.png":"../assets/tree_2.png","../assets/tree_3.png":"../assets/tree_3.png","../assets/tree_4.png":"../assets/tree_4.png","../assets/base.png":"../assets/base.png","../assets/base_destroyed.png":"../assets/base_destroyed.png","../assets/water_1.png":"../assets/water_1.png","../assets/water_2.png":"../assets/water_2.png","../assets/water_3.png":"../assets/water_3.png","../assets/water_4.png":"../assets/water_4.png","../assets/ai_tank_1.png":"../assets/ai_tank_1.png","../assets/ai_tank_2.png":"../assets/ai_tank_2.png","../assets/ai_tank_3.png":"../assets/ai_tank_3.png","../assets/ai_tank_4.png":"../assets/ai_tank_4.png","../assets/ai_tank_5.png":"../assets/ai_tank_5.png","../assets/ai_tank_6.png":"../assets/ai_tank_6.png","../assets/ai_tank_7.png":"../assets/ai_tank_7.png","../assets/explosion_small_1.png":"../assets/explosion_small_1.png","../assets/explosion_small_2.png":"../assets/explosion_small_2.png","../assets/explosion_small_3.png":"../assets/explosion_small_3.png","../assets/explosion_big_1.png":"../assets/explosion_big_1.png","../assets/explosion_big_2.png":"../assets/explosion_big_2.png"}],"gameplay/Body.ts":[function(require,module,exports) {
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
exports.randomInt = exports.blocksinCluster = exports.buildCluster = exports.renderCluster = exports.renderBlock = exports.bodyIsVisible = exports.bodyInBounds = exports.blockIndexInBounds = exports.snapValue = exports.AABBIntersects = void 0;

var constants_1 = require("./constants");

var Block_1 = require("./gameplay/Block");

var GameManager_1 = require("./gameplay/GameManager");

var preload_1 = require("./preload");

var MOVEMENT_SNAP_VALUE = constants_1.BLOCK_SIZE * 2;

function AABBIntersects(A, B) {
  // const dx = A.pos.x - B.pos.x;
  // const px = A.size.x / 2 + B.size.x / 2 - Math.abs(dx);
  // if (px <= 0) {
  //   return false;
  // }
  // const dy = A.pos.y - B.pos.y;
  // const py = A.size.y / 2 + B.size.y / 2 - Math.abs(dy);
  // if (py <= 0) {
  //   return false;
  // }
  // return true;
  return !(A.r <= B.l || A.l >= B.r || A.t >= B.b || A.b <= B.t);
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

function buildCluster(gameManager, blockType, clusterX, clusterY) {
  for (var yOffset = 0; yOffset < constants_1.CLUSTER_SIZE; yOffset++) {
    for (var xOffset = 0; xOffset < constants_1.CLUSTER_SIZE; xOffset++) {
      var blockX = clusterX * constants_1.CLUSTER_SIZE + xOffset;
      var blockY = clusterY * constants_1.CLUSTER_SIZE + yOffset;
      gameManager.blocks[blockY][blockX] = new Block_1.Block(blockX, blockY, blockType);
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

function randomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

exports.randomInt = randomInt;
},{"./constants":"constants.ts","./gameplay/Block":"gameplay/Block.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./preload":"preload.ts"}],"gameplay/Base.ts":[function(require,module,exports) {
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
exports.Base = void 0;

var constants_1 = require("../constants");

var preload_1 = require("../preload");

var Body_1 = require("./Body");

var GameManager_1 = require("./GameManager");

var baseSprite = preload_1.SPRITES["base"];
var baseDestroyedSprite = preload_1.SPRITES["base_destroyed"];

var Base = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Base, _Body_1$Body);

  var _super = _createSuper(Base);

  function Base(x, y) {
    var _this;

    _classCallCheck(this, Base);

    _this = _super.call(this, x, y, constants_1.TANK_WIDTH, constants_1.TANK_HEIGHT);
    _this.isDestroyed = false;
    return _this;
  }

  _createClass(Base, [{
    key: "render",
    value: function render() {
      var sprite = this.isDestroyed ? baseDestroyedSprite : baseSprite;
      GameManager_1.gameManager.ctx.drawImage(sprite.img, this.pos.x, this.pos.y);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.isDestroyed = true;
    }
  }]);

  return Base;
}(Body_1.Body);

exports.Base = Base;
},{"../constants":"constants.ts","../preload":"preload.ts","./Body":"gameplay/Body.ts","./GameManager":"gameplay/GameManager.ts"}],"gameplay/Explosion.ts":[function(require,module,exports) {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplosionBig = exports.ExplosionSmall = exports.Explosion = void 0;

var preload_1 = require("../preload");

var GameManager_1 = require("./GameManager");

var EXPLOSION_INTERVAL = 100;
var EXPLOSION_BIG_INTERVAL = 200;

var Explosion = /*#__PURE__*/function () {
  function Explosion(x, y) {
    _classCallCheck(this, Explosion);

    this.startTime = 0;
    this.x = x;
    this.y = y;
  }

  _createClass(Explosion, [{
    key: "render",
    value: function render() {//
    }
  }, {
    key: "update",
    value: function update() {//
    }
  }]);

  return Explosion;
}();

exports.Explosion = Explosion;

var ExplosionSmall = /*#__PURE__*/function (_Explosion) {
  _inherits(ExplosionSmall, _Explosion);

  var _super = _createSuper(ExplosionSmall);

  function ExplosionSmall(x, y) {
    var _this;

    _classCallCheck(this, ExplosionSmall);

    _this = _super.call(this, x, y);
    _this.sprites = [preload_1.SPRITES["explosion_small_1"], preload_1.SPRITES["explosion_small_2"], preload_1.SPRITES["explosion_small_3"]];
    _this.startTime = Date.now();
    return _this;
  }

  _createClass(ExplosionSmall, [{
    key: "update",
    value: function update() {
      var now = Date.now();

      if (now - this.startTime > EXPLOSION_INTERVAL * 5) {
        GameManager_1.gameManager.removeExplosion(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      GameManager_1.gameManager.ctx.drawImage(this.sprites[this.spriteIndex].img, this.x - 16, this.y - 16);
    }
  }, {
    key: "spriteIndex",
    get: function get() {
      var now = Date.now();

      if (now - this.startTime < EXPLOSION_INTERVAL) {
        return 0;
      } else if (now - this.startTime < EXPLOSION_INTERVAL * 2) {
        return 1;
      } else if (now - this.startTime < EXPLOSION_INTERVAL * 3) {
        return 2;
      } else if (now - this.startTime < EXPLOSION_INTERVAL * 4) {
        return 1;
      } else {
        return 0;
      }
    }
  }]);

  return ExplosionSmall;
}(Explosion);

exports.ExplosionSmall = ExplosionSmall;

var ExplosionBig = /*#__PURE__*/function (_Explosion2) {
  _inherits(ExplosionBig, _Explosion2);

  var _super2 = _createSuper(ExplosionBig);

  function ExplosionBig(x, y) {
    var _this2;

    _classCallCheck(this, ExplosionBig);

    _this2 = _super2.call(this, x, y);
    _this2.sprites = [preload_1.SPRITES["explosion_big_1"], preload_1.SPRITES["explosion_big_2"]];
    _this2.startTime = Date.now();
    return _this2;
  }

  _createClass(ExplosionBig, [{
    key: "update",
    value: function update() {
      var now = Date.now();

      if (now - this.startTime > EXPLOSION_BIG_INTERVAL * 3) {
        GameManager_1.gameManager.removeExplosion(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      GameManager_1.gameManager.ctx.drawImage(this.sprites[this.spriteIndex].img, this.x - 32, this.y - 32);
    }
  }, {
    key: "spriteIndex",
    get: function get() {
      var now = Date.now();

      if (now - this.startTime < EXPLOSION_BIG_INTERVAL) {
        return 0;
      } else if (now - this.startTime < EXPLOSION_BIG_INTERVAL * 2) {
        return 1;
      } else {
        return 0;
      }
    }
  }]);

  return ExplosionBig;
}(Explosion);

exports.ExplosionBig = ExplosionBig;
},{"../preload":"preload.ts","./GameManager":"gameplay/GameManager.ts"}],"keyboard.ts":[function(require,module,exports) {
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

var Explosion_1 = require("./Explosion");

var Bullet = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Bullet, _Body_1$Body);

  var _super = _createSuper(Bullet);

  function Bullet(tank, x, y, dir) {
    var _this;

    _classCallCheck(this, Bullet);

    _this = _super.call(this, x, y, constants_1.BULLET_SIZE, constants_1.BULLET_SIZE);
    _this.dir = constants_1.DIR.NONE;
    _this.destroy = false;
    _this.dir = dir;
    _this.tank = tank;
    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      var destroyBullet = false;

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
          destroyBullet = true;
        }
      } else if (utils_1.AABBIntersects(this, GameManager_1.gameManager.base)) {
        if (!GameManager_1.gameManager.base.isDestroyed) {
          GameManager_1.gameManager.base.destroy();
          GameManager_1.gameManager.explosions.push(new Explosion_1.ExplosionBig(GameManager_1.gameManager.base.center.x, GameManager_1.gameManager.base.center.y));
          destroyBullet = true;
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var tank = _step2.value;

            if (tank === this.tank) {
              continue;
            }

            if (this.tank.ai === tank.ai) {
              continue;
            }

            if (utils_1.AABBIntersects(tank, this)) {
              destroyBullet = true;
              tank.destroy = true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var _iterator3 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var bullet = _step3.value;

            if (bullet.tank === this.tank) {
              continue;
            }

            if (bullet.tank.ai === this.tank.ai) {
              continue;
            }

            if (utils_1.AABBIntersects(bullet, this)) {
              destroyBullet = true;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      if (!utils_1.bodyIsVisible(this)) {
        destroyBullet = true;
      }

      if (destroyBullet) {
        this.destroy = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      GameManager_1.gameManager.ctx.fillStyle = "#ff7e1f";
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
      }

      return items;
    }
  }]);

  return Bullet;
}(Body_1.Body);

exports.Bullet = Bullet;
},{"../constants":"constants.ts","../utils":"utils.ts","./Body":"gameplay/Body.ts","./GameManager":"gameplay/GameManager.ts","./Explosion":"gameplay/Explosion.ts"}],"gameplay/Tank.ts":[function(require,module,exports) {
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

var utils_1 = require("../utils");

var Body_1 = require("./Body");

var Bullet_1 = require("./Bullet");

var GameManager_1 = require("./GameManager");

var Tank = /*#__PURE__*/function (_Body_1$Body) {
  _inherits(Tank, _Body_1$Body);

  var _super = _createSuper(Tank);

  function Tank(x, y) {
    var _this;

    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constants_1.DIR.RIGHT;
    var sprite = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Tank);

    _this = _super.call(this, x, y, constants_1.TANK_WIDTH, constants_1.TANK_HEIGHT);
    _this.lastShot = 0;
    _this.bullet = null;
    _this.destroy = false;
    _this.ai = false;
    _this.dir = dir;
    _this.sprite = sprite;
    return _this;
  }

  _createClass(Tank, [{
    key: "setDir",
    value: function setDir(dir) {
      this.dir = dir;
    }
  }, {
    key: "update",
    value: function update() {//
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.sprite || !this.sprite.img) {
        return;
      }

      var x = this.pos.x + this.size.x / 2;
      var y = this.pos.y + this.size.y / 2;
      GameManager_1.gameManager.ctx.save();
      GameManager_1.gameManager.ctx.translate(x, y);
      GameManager_1.gameManager.ctx.rotate(Math.PI / 2 * this.dir);
      GameManager_1.gameManager.ctx.translate(-x, -y);
      GameManager_1.gameManager.ctx.drawImage(this.sprite.img, this.pos.x, this.pos.y);
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
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tank = _step2.value;

          if (tank !== this && utils_1.AABBIntersects(tank, newBody)) {
            return false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return true;
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var bullet = new Bullet_1.Bullet(this, this.center.x - constants_1.BULLET_SIZE / 2, this.center.y - constants_1.BULLET_SIZE / 2, this.dir);
      this.bullet = bullet;
      GameManager_1.gameManager.bullets.push(bullet);
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
          var _iterator3 = _createForOfIteratorHelper(utils_1.blocksinCluster(clusterX, clusterY)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var block = _step3.value;
              items.push(block);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }

      return items;
    }
  }]);

  return Tank;
}(Body_1.Body);

exports.Tank = Tank;
},{"../constants":"constants.ts","../utils":"utils.ts","./Body":"gameplay/Body.ts","./Bullet":"gameplay/Bullet.ts","./GameManager":"gameplay/GameManager.ts"}],"gameplay/PlayerTank.ts":[function(require,module,exports) {
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
exports.PlayerTank = void 0;

var constants_1 = require("../constants");

var keyboard_1 = require("../keyboard");

var preload_1 = require("../preload");

var utils_1 = require("../utils");

var Tank_1 = require("./Tank");

var PlayerTank = /*#__PURE__*/function (_Tank_1$Tank) {
  _inherits(PlayerTank, _Tank_1$Tank);

  var _super = _createSuper(PlayerTank);

  function PlayerTank(x, y, dir) {
    _classCallCheck(this, PlayerTank);

    return _super.call(this, x, y, dir, preload_1.SPRITES.player_1);
  }

  _createClass(PlayerTank, [{
    key: "update",
    value: function update() {
      // movement
      var prevPos = {
        x: this.pos.x,
        y: this.pos.y
      };
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
        this.setDir(newDir);

        if (this.move(newPos)) {
          this.pos = newPos;
        } else {// this.pos = prevPos;
        }
      } // shooting


      if (!this.bullet && (!this.lastShot || Date.now() - this.lastShot >= constants_1.SHOOT_COLDOWN) && keyboard_1.keysPressed[constants_1.KEYS.SHOOT]) {
        this.shoot();
      }
    }
  }]);

  return PlayerTank;
}(Tank_1.Tank);

exports.PlayerTank = PlayerTank;
},{"../constants":"constants.ts","../keyboard":"keyboard.ts","../preload":"preload.ts","../utils":"utils.ts","./Tank":"gameplay/Tank.ts"}],"gameplay/GameManager.ts":[function(require,module,exports) {
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

var Base_1 = require("./Base");

var Explosion_1 = require("./Explosion");

var PlayerTank_1 = require("./PlayerTank");

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = constants_1.CANVAS_WIDTH;
canvas.height = constants_1.CANVAS_HEIGHT;

var GameManager = /*#__PURE__*/function () {
  function GameManager(canvas) {
    _classCallCheck(this, GameManager);

    this.mode = constants_1.GLOBAL_MODE.DEBUG_TEST_LEVEL;
    this.player1 = null;
    this.tanks = [];
    this.blocks = new Array(52).fill(null).map(function () {
      return new Array(52).fill(null);
    });
    this.bullets = [];
    this.explosions = [];
    this.debugLevel = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.base = new Base_1.Base(192, 386);
    this.restoreDebugLevelData();
    this.buildDebugLevel();
  }

  _createClass(GameManager, [{
    key: "setMode",
    value: function setMode(mode) {
      this.mode = mode;

      switch (this.mode) {
        case constants_1.GLOBAL_MODE.DEBUG_TEST_LEVEL:
          this.buildDebugLevel();
          this.tanks = [];
          this.tanks.push(new PlayerTank_1.PlayerTank(128, 386, constants_1.DIR.UP));
          break;
      }
    }
  }, {
    key: "removeBullet",
    value: function removeBullet(bullet) {
      this.bullets.splice(this.bullets.indexOf(bullet), 1);
      bullet.tank.bullet = null;
      this.explosions.push(new Explosion_1.ExplosionSmall(bullet.center.x, bullet.center.y));
    }
  }, {
    key: "removeExplosion",
    value: function removeExplosion(explosion) {
      this.explosions.splice(this.explosions.indexOf(explosion), 1);
    }
  }, {
    key: "removeTank",
    value: function removeTank(tank) {
      this.tanks.splice(this.tanks.indexOf(tank), 1);
      this.explosions.push(new Explosion_1.ExplosionBig(tank.center.x, tank.center.y));

      if (tank instanceof PlayerTank_1.PlayerTank) {
        this.tanks.push(new PlayerTank_1.PlayerTank(128, 386, constants_1.DIR.UP));
      }
    }
  }, {
    key: "resetDebugLevel",
    value: function resetDebugLevel() {
      this.debugLevel = new Array(52 / constants_1.CLUSTER_SIZE).fill(null).map(function () {
        return new Array(52 / constants_1.CLUSTER_SIZE).fill(null);
      });
      this.saveDebugLevel();
    }
  }, {
    key: "saveDebugLevel",
    value: function saveDebugLevel() {
      localStorage.setItem("debugLevel", JSON.stringify(this.debugLevel));
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
                utils_1.buildCluster(this, type, clusterX, clusterY);
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
},{"../constants":"constants.ts","../utils":"utils.ts","./Base":"gameplay/Base.ts","./Explosion":"gameplay/Explosion.ts","./PlayerTank":"gameplay/PlayerTank.ts"}],"level-editor.ts":[function(require,module,exports) {
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

var $level_editor = document.getElementById("level-editor");
var $pallete_colors = document.querySelectorAll(".pallete__color");
var $level_editor_clear = document.getElementById("level-editor__clear-level");
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
    $level_editor_clear === null || $level_editor_clear === void 0 ? void 0 : $level_editor_clear.addEventListener("click", function (e) {
      e.preventDefault();
      GameManager_1.gameManager.resetDebugLevel();
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
      GameManager_1.gameManager.saveDebugLevel();
    }
  }]);

  return LevelEditor;
}();

exports.LevelEditor = LevelEditor;
var instance = new LevelEditor();
exports.levelEditor = instance;
window.levelEditor = instance;
},{"./constants":"constants.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./utils":"utils.ts"}],"gameplay/AITank.ts":[function(require,module,exports) {
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
exports.AITank = void 0;

var constants_1 = require("../constants");

var preload_1 = require("../preload");

var utils_1 = require("../utils");

var Tank_1 = require("./Tank");

var changeDirectionIntervalMin = 2000;
var changeDirectionIntervalMax = 4000;
var AI_MOVE_STEP = 1.5;

function randomTankSprite() {
  var tankVariant = utils_1.randomInt(1, 8);
  var sprite = preload_1.SPRITES["ai_tank_".concat(tankVariant)];
  return sprite;
}

var AITank = /*#__PURE__*/function (_Tank_1$Tank) {
  _inherits(AITank, _Tank_1$Tank);

  var _super = _createSuper(AITank);

  function AITank(x, y, dir) {
    var _this;

    _classCallCheck(this, AITank);

    _this = _super.call(this, x, y, dir, randomTankSprite());
    _this.nextDirChange = 0;
    _this.ai = true;

    _this.scheduleNextDirChange();

    return _this;
  }

  _createClass(AITank, [{
    key: "update",
    value: function update() {
      var now = Date.now();
      var prevPos = {
        x: this.pos.x,
        y: this.pos.y
      };
      var newPos = {
        x: this.pos.x,
        y: this.pos.y
      };

      switch (this.dir) {
        case constants_1.DIR.LEFT:
          newPos.x -= AI_MOVE_STEP;
          this.pos.y = newPos.y = utils_1.snapValue(this.pos.y);
          break;

        case constants_1.DIR.RIGHT:
          newPos.x += AI_MOVE_STEP;
          this.pos.y = newPos.y = utils_1.snapValue(this.pos.y);
          break;

        case constants_1.DIR.UP:
          newPos.y -= AI_MOVE_STEP;
          this.pos.x = newPos.x = utils_1.snapValue(this.pos.x);
          break;

        case constants_1.DIR.DOWN:
          newPos.y += AI_MOVE_STEP;
          this.pos.x = newPos.x = utils_1.snapValue(this.pos.x);
          break;
      }

      if (this.move(newPos)) {
        this.pos = newPos;

        if (now >= this.nextDirChange) {
          this.setRandomDir();
        }
      } else {
        // this.pos = prevPos;
        this.setRandomDir();
      }

      if (Math.random() < 0.015) {
        this.shoot();
      }
    }
  }, {
    key: "setRandomDir",
    value: function setRandomDir() {
      var dir = Math.floor(Math.random() * 4);
      this.setDir(dir);
      this.scheduleNextDirChange();
    }
  }, {
    key: "scheduleNextDirChange",
    value: function scheduleNextDirChange() {
      var nextChange = utils_1.randomInt(changeDirectionIntervalMin, changeDirectionIntervalMax);
      this.nextDirChange = Date.now() + nextChange;
    }
  }]);

  return AITank;
}(Tank_1.Tank);

exports.AITank = AITank;
},{"../constants":"constants.ts","../preload":"preload.ts","../utils":"utils.ts","./Tank":"gameplay/Tank.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("./constants");

var preload_1 = require("./preload");

var GameManager_1 = require("./gameplay/GameManager");

var level_editor_1 = require("./level-editor");

var PlayerTank_1 = require("./gameplay/PlayerTank");

var AITank_1 = require("./gameplay/AITank");

var utils_1 = require("./utils");

var Body_1 = require("./gameplay/Body");

var lastSpawnTime = 0;
var respawnSpots = [[0, 0], [190, 0], [386, 0]];

function update() {
  var _iterator = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _tank = _step.value;

      _tank.update();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _bullet = _step2.value;

      _bullet.update();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(GameManager_1.gameManager.explosions),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var explosion = _step3.value;
      explosion.update();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _tank2 = _step4.value;

      if (_tank2.destroy) {
        GameManager_1.gameManager.removeTank(_tank2);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  var _iterator5 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _bullet2 = _step5.value;

      if (_bullet2.destroy) {
        GameManager_1.gameManager.removeBullet(_bullet2);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var now = Date.now();

  if (GameManager_1.gameManager.tanks.length < 4 && now - lastSpawnTime > 5000) {
    var _respawnSpots$utils_ = _slicedToArray(respawnSpots[utils_1.randomInt(0, respawnSpots.length)], 2),
        x = _respawnSpots$utils_[0],
        y = _respawnSpots$utils_[1];

    var body = new Body_1.Body(x, y, constants_1.TANK_WIDTH, constants_1.TANK_HEIGHT);
    var canPlace = true;

    var _iterator6 = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var tank = _step6.value;

        if (utils_1.AABBIntersects(tank, body)) {
          canPlace = false;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var _iterator7 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var bullet = _step7.value;

        if (utils_1.AABBIntersects(bullet, body)) {
          canPlace = false;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (canPlace) {
      GameManager_1.gameManager.tanks.push(new AITank_1.AITank(x, y, constants_1.DIR.DOWN));
      lastSpawnTime = now;
    }
  }
}

function render() {
  GameManager_1.gameManager.ctx.fillStyle = "#000";
  GameManager_1.gameManager.ctx.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
  GameManager_1.gameManager.base.render();

  var _iterator8 = _createForOfIteratorHelper(GameManager_1.gameManager.bullets),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var bullet = _step8.value;
      bullet.render();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  var _iterator9 = _createForOfIteratorHelper(GameManager_1.gameManager.tanks),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var tank = _step9.value;
      tank.render();
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  var _iterator10 = _createForOfIteratorHelper(GameManager_1.gameManager.blocks),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var row = _step10.value;

      var _iterator12 = _createForOfIteratorHelper(row),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var block = _step12.value;

          if (block) {
            block.render();
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  var _iterator11 = _createForOfIteratorHelper(GameManager_1.gameManager.explosions),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var explosion = _step11.value;
      explosion.render();
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
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

GameManager_1.gameManager.tanks.push(new PlayerTank_1.PlayerTank(128, 386, constants_1.DIR.UP));
preload_1.preloadAssets().then(tick);
},{"./constants":"constants.ts","./preload":"preload.ts","./gameplay/GameManager":"gameplay/GameManager.ts","./level-editor":"level-editor.ts","./gameplay/PlayerTank":"gameplay/PlayerTank.ts","./gameplay/AITank":"gameplay/AITank.ts","./utils":"utils.ts","./gameplay/Body":"gameplay/Body.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50902" + '/');

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