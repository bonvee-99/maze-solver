import { maze, position, solveMaze } from "../maze"
import Stack from "../stack"
import Queue from "../queue"

test("successfully solves empty maze", () => {
	let emptyMaze: maze = [];
	let os = new Stack();
	expect(solveMaze(emptyMaze, os)).toBe(true);
})

test("successfully solves 1 by 1 maze", () => {
	let tinyMaze: maze = [[true]];
	let os = new Stack();
	expect(solveMaze(tinyMaze, os)).toBe(true);
})

test("successfully solves 3 tall by 1 wide maze with dfs", () => {
	let row: maze = [[true, true, true]]
	let os = new Stack();
	expect(solveMaze(row, os)).toBe(true);
})

test("successfully solves 3 tall by 1 wide maze with bfs", () => {
	let row: maze = [[true, true, true]]
	let os = new Queue();
	expect(solveMaze(row, os)).toBe(true);
})

test("successfully solves 3 wide by 1 tall maze with dfs", () => {
	let row: maze = [[true], [true], [true]]
	let os = new Stack();
	expect(solveMaze(row, os)).toBe(true);
})

test("successfully solves 3 wide by 1 tall maze with bfs", () => {
	let row: maze = [[true], [true], [true]];
	let os = new Queue();
	expect(solveMaze(row, os)).toBe(true);
})

test("successfully solves small reachable maze with dfs - m1", () => {
	const m1: maze = [[true, true, true], [false, false, true], [true, true, true]]
	let os = new Stack();
	expect(solveMaze(m1, os)).toBe(true);
})

test("successfully solves small reachable maze with bfs - m1", () => {
	const m1: maze = [[true, true, true], [false, false, true], [true, true, true]]
	let os = new Queue();
	expect(solveMaze(m1, os)).toBe(true);
})

test("successfully solves small reachable maze with dfs - m2", () => {
	const m2: maze = [[true, true, true], [false, false, true], [true, true, true]]
	let os = new Stack();
	expect(solveMaze(m2, os)).toBe(true);
})

test("successfully solves small reachable maze with bfs - m2", () => {
	const m2: maze = [[true, true, true], [false, false, true], [true, true, true]]
	let os = new Queue();
	expect(solveMaze(m2, os)).toBe(true);
})

test("succesfully does not solve unreachable mae with dfs - m3", () => {
	const m3: maze = [[true, true, false], [false, false, false], [true, true, true]];
	let os = new Stack();
	expect(solveMaze(m3, os)).toBe(false)
})

test("succesfully does not solve unreachable maze with bfs - m3", () => {
	const m3: maze = [[true, true, false], [false, false, false], [true, true, true]];
	let os = new Queue();
	expect(solveMaze(m3, os)).toBe(false)
})

test("successfully solves large maze with bfs - all directions", () => {
	const largeMaze: maze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, true], [true, true, true, true, false, true]]
	let os = new Stack();
	expect(solveMaze(largeMaze, os)).toBe(true);
})

test("successfully solves large maze with dfs - all directions", () => {
	const largeMaze: maze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, true], [true, true, true, true, false, true]]
	let os = new Queue();
	expect(solveMaze(largeMaze, os)).toBe(true);
})

test("successfully does not solve large maze with bfs - all directions", () => {
	const largeMaze: maze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, false], [true, true, true, true, false, true]]
	let os = new Stack();
	expect(solveMaze(largeMaze, os)).toBe(false);
})

test("successfully does not solve large maze with dfs - all directions", () => {
	const largeMaze: maze = [[true, false, true, true, true, true], [true, false, true, false, false, true], [true, false, true, true, false, true], [true, false, true, true, false, true], [true, false, false, true, false, false], [true, true, true, true, false, true]]
	let os = new Queue();
	expect(solveMaze(largeMaze, os)).toBe(false);
})

test("successfully solves very large maze with dfs", () => {
	const largeMaze: maze = [[true,true,true,true,true,true,true,true,true,false],[false,false,false,false,false,false,false,false,true,false],[true,true,true,true,true,true,true,true,true,true],[false,true,true,true,false,false,false,false,false,false],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true]]
	let os = new Stack();
	expect(solveMaze(largeMaze, os)).toBe(true);
})

test("successfully solves very large maze with bfs", () => {
	const largeMaze: maze = [[true,true,true,true,true,true,true,true,true,false],[false,false,false,false,false,false,false,false,true,false],[true,true,true,true,true,true,true,true,true,true],[false,true,true,true,false,false,false,false,false,false],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true],[true,true,true,true,true,true,true,true,true,true]]
	let os = new Queue();
	expect(solveMaze(largeMaze, os)).toBe(true);
})