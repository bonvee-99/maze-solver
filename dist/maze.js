// takes in a maze and determines if it is solvable. Does either dfs or bfs
// REQUIRES: position 0,0 to be a valid path
var solveMaze = function (maze, os) {
    // initialize ordering strucutre
    // create 2d array of size maze. t/f values representing visited nodes
    if (maze.length === 0 || maze.length === 1)
        return true;
    var width = maze.length;
    var height = maze[0].length;
    var processed = [];
    for (var i = 0; i < width; i++) {
        var col = [];
        for (var j = 0; j < height; j++) {
            col.push(false);
        }
        processed.push(col);
    }
    // start maze at position: 0,0
    os.add({ x: 0, y: 0 });
    var solved = function (pos) {
        return (pos.x === width - 1 && pos.y === height - 1) ? true : false;
    };
    var isWall = function (pos) {
        return maze[pos.x][pos.y];
    };
    var checkNextPos = function (pos) {
        // check if inbounds and not a wall!
        if (0 <= pos.x && pos.x < width && 0 <= pos.y && pos.y < height && isWall(pos)) {
            // check if processed
            if (!(processed[pos.x][pos.y])) {
                // check if solved
                if (solved(pos)) {
                    processed[pos.x][pos.y] = true;
                    return true;
                }
                else {
                    processed[pos.x][pos.y] = true;
                    os.add(pos);
                }
            }
        }
        return false;
    };
    while (!os.isEmpty()) {
        // @ts-ignore
        var curr = os.remove();
        var x = curr.x;
        var y = curr.y;
        // check right bottom left top!
        checkNextPos({ x: x, y: y - 1 });
        checkNextPos({ x: x - 1, y: y });
        if (checkNextPos({ x: x + 1, y: y }) === true) {
            return true;
        }
        if (checkNextPos({ x: x, y: y + 1 }) === true) {
            return true;
        }
    }
    return false;
};
export { solveMaze };
