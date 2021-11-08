import OrderingStructure from "./orderingStructure";

type position = {x: number, y: number}

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

export default Queue;


