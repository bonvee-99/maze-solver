import { solveMaze } from "../maze";
import Stack from "../stack";
import Queue from "../queue";
test("successfully solves empty maze", function () {
    var emptyMaze = [];
    var os = new Stack();
    expect(solveMaze(emptyMaze, os)).toBe(true);
});
test("successfully solves 1 by 1 maze", function () {
    var tinyMaze = [[true]];
    var os = new Stack();
    expect(solveMaze(tinyMaze, os)).toBe(true);
});
test("successfully solves 3 wide by 1 tall maze with dfs", function () {
    var row = [[true, true, true]];
    var os = new Stack();
    expect(solveMaze(row, os)).toBe(true);
});
test("successfully solves 3 wide by 1 tall maze with bfs", function () {
    var row = [[true, true, true]];
    var os = new Queue();
    expect(solveMaze(row, os)).toBe(true);
});
test("successfully solves 1 wide by 3 tall maze with dfs", function () {
    var row = [[true], [true], [true]];
    var os = new Stack();
    expect(solveMaze(row, os)).toBe(true);
});
test("successfully solves 1 wide by 3 tall maze with bfs", function () {
    var row = [[true], [true], [true]];
    var os = new Queue();
    expect(solveMaze(row, os)).toBe(true);
});
test("successfully solves small reachable maze with dfs - m1", function () {
    var m1 = [[true, true, true], [false, false, true], [true, true, true]];
    var os = new Stack();
    expect(solveMaze(m1, os)).toBe(true);
});
test("successfully solves small reachable maze with bfs - m1", function () {
    var m1 = [[true, true, true], [false, false, true], [true, true, true]];
    var os = new Queue();
    expect(solveMaze(m1, os)).toBe(true);
});
test("successfully solves small reachable maze with dfs - m2", function () {
    var m2 = [[true, true, true], [false, false, true], [true, true, true]];
    var os = new Stack();
    expect(solveMaze(m2, os)).toBe(true);
});
test("successfully solves small reachable maze with bfs - m2", function () {
    var m2 = [[true, true, true], [false, false, true], [true, true, true]];
    var os = new Queue();
    expect(solveMaze(m2, os)).toBe(true);
});
test("succesfully does not solve unreachable mae with dfs - m3", function () {
    var m3 = [[true, true, false], [false, false, false], [true, true, true]];
    var os = new Stack();
    expect(solveMaze(m3, os)).toBe(false);
});
test("succesfully does not solve unreachable maze with bfs - m3", function () {
    var m3 = [[true, true, false], [false, false, false], [true, true, true]];
    var os = new Queue();
    expect(solveMaze(m3, os)).toBe(false);
});
test("successfully solves large maze with bfs - all directions", function () {
    var largeMaze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, true], [true, true, true, true, false, true]];
    var os = new Stack();
    expect(solveMaze(largeMaze, os)).toBe(true);
});
test("successfully solves large maze with dfs - all directions", function () {
    var largeMaze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, true], [true, true, true, true, false, true]];
    var os = new Queue();
    expect(solveMaze(largeMaze, os)).toBe(true);
});
test("successfully does not solve large maze with bfs - all directions", function () {
    var largeMaze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, false], [true, true, true, true, false, true]];
    var os = new Stack();
    expect(solveMaze(largeMaze, os)).toBe(false);
});
test("successfully does not solve large maze with dfs - all directions", function () {
    var largeMaze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, false], [true, true, true, true, false, true]];
    var os = new Queue();
    expect(solveMaze(largeMaze, os)).toBe(false);
});
test("successfully solves very large maze", function () {
    var largeMaze = [[true, true, true, true, true, true, true, true, true, false], [false, false, false, false, false, false, false, false, true, false], [true, true, true, true, true, true, true, true, true, true], [false, true, true, true, false, false, false, false, false, false], [true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true], [true, true, true, true, true, true, true, true, true, true]];
    var os = new Stack();
    expect(solveMaze(largeMaze, os)).toBe(true);
});
