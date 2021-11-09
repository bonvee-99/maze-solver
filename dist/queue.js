var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (el) {
        this.items.push(el);
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            return this.items.shift();
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Queue.prototype.add = function (el) {
        this.enqueue(el);
    };
    Queue.prototype.remove = function () {
        return this.dequeue();
    };
    return Queue;
}());
export default Queue;
