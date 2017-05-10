let _items = [];

class Stack {
    push(element) {
        _items.push(element);
    }

    pop() {
        return _items.pop();
    }

    peek() {
        return _items[_items.length - 1];
    }

    isEmpty() {
        return _items.length == 0;
    }

    size() {
        return _items.length;
    }
}

export default Stack