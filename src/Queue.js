let items = [];

class Queue {
    enqueue(element) {
        items.push(element);
    }

    dequeue() {
        return items.shift();
    }

    front() {
        return items[0];
    }

    isEmpty() {
        return items.length == 0;
    }

    size() {
        return items.length;
    }

    clear() {
        items = [];
    }
}

export default Queue
