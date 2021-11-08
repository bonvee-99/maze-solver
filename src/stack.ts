import OrderingStructure from "./orderingStructure";

type position = {x: number, y: number}

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

export default Stack;