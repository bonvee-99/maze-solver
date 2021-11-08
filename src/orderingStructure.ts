type position = {x: number, y: number}

interface OrderingStructure {
	items: Array<position>;
	add: (el: position) => void;
	remove: () => position | undefined;
	isEmpty: () => boolean;
}

export default OrderingStructure