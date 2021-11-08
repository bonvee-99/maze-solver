import Stack from "../stack";
var stack;
beforeEach(function () {
    stack = new Stack();
});
test("initializes empty stack", function () {
    expect(stack.isEmpty()).toBe(true);
});
test("successfully adds the stack and removes from the stack", function () {
    stack.add({ x: 0, y: 1 });
    expect(stack.remove()).toMatchObject({ x: 0, y: 1 });
});
test("successfully tries to remove from empty stack", function () {
    expect(stack.remove()).toBeUndefined;
});
test("successfully removes from the top ofk the stac", function () {
    stack.add({ x: 0, y: 0 });
    stack.add({ x: 1, y: 1 });
    expect(stack.remove()).toMatchObject({ x: 1, y: 1 });
});
