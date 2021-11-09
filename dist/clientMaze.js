var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
// TYPES //
var Stack = /** @class */ (function () {
  function Stack() {
    this.items = [];
  }
  Stack.prototype.push = function (el) {
    this.items.push(el);
  };
  Stack.prototype.pop = function () {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  Stack.prototype.add = function (el) {
    this.push(el);
  };
  Stack.prototype.remove = function () {
    return this.pop();
  };
  return Stack;
})();
var Queue = /** @class */ (function () {
  function Queue() {
    this.items = [];
  }
  Queue.prototype.enqueue = function (el) {
    this.items.push(el);
  };
  Queue.prototype.dequeue = function () {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
  };
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  Queue.prototype.add = function (el) {
    this.enqueue(el);
  };
  Queue.prototype.remove = function () {
    return this.dequeue();
  };
  return Queue;
})();
// takes in a maze and determines if it is solvable. Does either dfs or bfs
// REQUIRES: position 0,0 to be a valid path
var solveMaze = function (maze, os, drawPos, finishMaze) {
  return __awaiter(void 0, void 0, void 0, function () {
    var width,
      height,
      processed,
      i,
      col,
      j,
      solved,
      isWall,
      checkNextPos,
      curr,
      x,
      y;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          // initialize ordering strucutre
          // create 2d array of size maze. t/f values representing visited nodes
          if (maze.length === 0 || maze.length === 1)
            return [2 /*return*/, true];
          width = maze.length;
          height = maze[0].length;
          processed = [];
          for (i = 0; i < width; i++) {
            col = [];
            for (j = 0; j < height; j++) {
              col.push(false);
            }
            processed.push(col);
          }
          // start maze at position: 0,0
          os.add({ x: 0, y: 0 });
          solved = function (pos) {
            return pos.x === width - 1 && pos.y === height - 1 ? true : false;
          };
          isWall = function (pos) {
            return maze[pos.x][pos.y];
          };
          checkNextPos = function (pos) {
            // check if inbounds and not a wall!
            if (
              0 <= pos.x &&
              pos.x < width &&
              0 <= pos.y &&
              pos.y < height &&
              isWall(pos)
            ) {
              // check if processed
              if (!processed[pos.x][pos.y]) {
                // check if solved
                if (solved(pos)) {
                  processed[pos.x][pos.y] = true;
                  return true;
                  // get it to flash green as in complete!
                } else {
                  processed[pos.x][pos.y] = true;
                  os.add(pos);
                }
              }
            }
            // get to flash red as unsolvable!
            return false;
          };
          _a.label = 1;
        case 1:
          if (!!os.isEmpty()) return [3 /*break*/, 7];
          return [4 /*yield*/, timer(500)];
        case 2:
          _a.sent();
          curr = os.remove();
          x = curr.x;
          y = curr.y;
          // draw position when you take it off of the structure
          drawPos(x, y);
          // check right bottom left top!
          checkNextPos({ x: x, y: y - 1 });
          checkNextPos({ x: x - 1, y: y });
          if (!(checkNextPos({ x: x, y: y + 1 }) === true))
            return [3 /*break*/, 4];
          return [4 /*yield*/, timer(500)];
        case 3:
          _a.sent();
          drawPos(x, y + 1);
          finishMaze(true);
          return [2 /*return*/, true];
        case 4:
          if (!(checkNextPos({ x: x + 1, y: y }) === true))
            return [3 /*break*/, 6];
          return [4 /*yield*/, timer(500)];
        case 5:
          _a.sent();
          drawPos(x + 1, y);
          finishMaze(true);
          return [2 /*return*/, true];
        case 6:
          return [3 /*break*/, 1];
        case 7:
          finishMaze(false);
          return [2 /*return*/, false];
      }
    });
  });
};
var timer = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};
// export {};
