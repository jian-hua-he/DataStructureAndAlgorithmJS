let Stack = (function () {

    let items = [];

    class Stack {
        push(element) {
            items.push(element);
        }

        pop() {
            return items.pop();
        }

        peek() {
            return items[items.length - 1];
        }

        isEmpty() {
            return items.length == 0;
        }

        size() {
            return items.length;
        }
    }

    return Stack;
})();
