class Queue {
    constructor() {
        this._items = [];
    }

    enqueue(element) {
        this._items.push(element);
    }

    dequeue() {
        return this._items.shift();
    }

    front() {
        return this._items[0];
    }

    isEmpty() {
        return this._items.length == 0;
    }

    size() {
        return this._items.length;
    }

    clear() {
        this._items = [];
    }
}

export default Queue
