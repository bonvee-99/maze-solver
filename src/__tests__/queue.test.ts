import Queue from "../queue";

let queue: Queue;

beforeEach(() => {
	queue = new Queue();
})

test("initializes empty queue", () => {
	expect(queue.isEmpty()).toBe(true);
})

test("successfully adds the queue and removes from the queue", () => {
	queue.add({x: 0, y: 1});
	expect(queue.remove()).toMatchObject({x: 0, y: 1});
})

test("successfully tries to remove from empty queue", () => {
	expect(queue.remove()).toBeUndefined;
})

test("successfully removes from the back of the queue", () => {
	queue.add({x: 0, y: 0});
	queue.add({x: 1, y: 1});
	expect(queue.remove()).toMatchObject({x: 0, y: 0})
})