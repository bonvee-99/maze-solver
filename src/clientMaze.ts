import OrderingStructure from "./orderingStructure";

// TYPES //
class Stack implements OrderingStructure {
	items: Array<position>;

	constructor() {
		this.items = [];
	}

	push(el: position): void {
		this.items.push(el);
	}

	pop(): position | undefined {
		if (!this.isEmpty()) {
			return this.items.pop();
		}
	}
	
	isEmpty(): boolean {
		return this.items.length == 0;
	}

	add(el: position): void {
		this.push(el);
	}

	remove(): position | undefined {
		return this.pop();
	}
}

class Queue {
	items: Array<position>;

	constructor() {
		this.items = [];
	}

	enqueue(el: position): void {
		this.items.push(el);
	}

	dequeue(): position | undefined {
		if (!this.isEmpty()) {
			return this.items.shift();
		}
	}

	isEmpty(): boolean {
		return this.items.length == 0;
	}

	add(el: position): void {
		this.enqueue(el);
	}

	remove(): position | undefined {
		return this.dequeue();
	}
}
// represents x,y position in maze
type position = {x: number, y: number}
// 2d array representing a maze- true = open path. false = wall
type maze = Array<Array<boolean>>;

// takes in a maze and determines if it is solvable. Does either dfs or bfs
// REQUIRES: position 0,0 to be a valid path
const solveMaze = async (maze: maze, os: OrderingStructure, drawPos: any, finishMaze: any) => {
	// initialize ordering strucutre
	// create 2d array of size maze. t/f values representing visited nodes
	if (maze.length === 0 || maze.length === 1) return true;
	const width: number = maze.length;
	const height: number = maze[0].length;

	let processed: Array<Array<boolean>> = [];
	for (let i: number = 0; i < width; i++) {
		let col: Array<boolean> = [];
		for (let j: number = 0; j < height; j++) {
			col.push(false);
		}
		processed.push(col);
	}

	// start maze at position: 0,0
	os.add({x: 0, y: 0});

	const solved = (pos: position): boolean => {
		return (pos.x === width - 1 && pos.y === height - 1)? true: false;
	}

	const isWall = (pos: position): boolean => {
		return maze[pos.x][pos.y];
	}
	
	const checkNextPos = (pos: position): boolean => {
		// check if inbounds and not a wall!
		if (0 <= pos.x && pos.x < width && 0 <= pos.y && pos.y < height && isWall(pos)) {
			// check if processed
			if (!(processed[pos.x][pos.y])) {
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
	}

	while(!os.isEmpty()) {
		await timer(500);
		// @ts-ignore
		let curr: position = os.remove();
		let x: number = curr.x;
		let y: number = curr.y;
		// draw position when you take it off of the structure
		drawPos(x, y);
		
		
		// check right bottom left top!
		checkNextPos({x, y: y - 1}) 
		checkNextPos({x: x - 1, y}) 
		if (checkNextPos({x, y: y + 1}) === true) {
			await timer(500);
			drawPos(x, y + 1);
			finishMaze(true);
			return true;
		}	
		if (checkNextPos({x: x + 1, y}) === true) {
			await timer(500);
			drawPos(x + 1, y);
			finishMaze(true);
			return true;
		}
	}
	finishMaze(false);
	return false;
}
const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

