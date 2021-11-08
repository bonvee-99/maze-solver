import Stack from "../stack";

let stack: Stack;

beforeEach(() => {
	stack = new Stack();
})

test("initializes empty stack", () => {
	expect(stack.isEmpty()).toBe(true);
})

test("successfully adds the stack and removes from the stack", () => {
	stack.add({x: 0, y: 1});
	expect(stack.remove()).toMatchObject({x: 0, y: 1});
})

test("successfully tries to remove from empty stack", () => {
	expect(stack.remove()).toBeUndefined;
})

test("successfully removes from the top ofk the stac", () => {
	stack.add({x: 0, y: 0});
	stack.add({x: 1, y: 1})
	expect(stack.remove()).toMatchObject({x: 1, y: 1})
})


