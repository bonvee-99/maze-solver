import Queue from "../queue";
var queue;
beforeEach(function () {
    queue = new Queue();
});
test("initializes empty queue", function () {
    expect(queue.isEmpty()).toBe(true);
});
test("successfully adds the queue and removes from the queue", function () {
    queue.add({ x: 0, y: 1 });
    expect(queue.remove()).toMatchObject({ x: 0, y: 1 });
});
test("successfully tries to remove from empty queue", function () {
    expect(queue.remove()).toBeUndefined;
});
test("successfully removes from the back of the queue", function () {
    queue.add({ x: 0, y: 0 });
    queue.add({ x: 1, y: 1 });
    expect(queue.remove()).toMatchObject({ x: 0, y: 0 });
});
