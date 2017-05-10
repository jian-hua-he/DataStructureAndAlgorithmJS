let _items = [];

class Queue {
    enqueue(element) {
        _items.push(element);
    }

    dequeue() {
        return _items.shift();
    }

    front() {
        return _items[0];
    }

    isEmpty() {
        return _items.length == 0;
    }

    size() {
        return _items.length;
    }

    clear() {
        _items = [];
    }
}

export default Queue
