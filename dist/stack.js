var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (el) {
        this.items.push(el);
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Stack.prototype.add = function (el) {
        this.push(el);
    };
    Stack.prototype.remove = function () {
        return this.pop();
    };
    return Stack;
}());
export default Stack;
