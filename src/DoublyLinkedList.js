class DoublyLinkedList {

    constructor() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }

    getHead() {
        return this._head;
    }

    getTail() {
        return this._tail;
    }

    insert(position, element) {
        let node = new Node(element);
        let current = this._head;

        if (position < 0 && position >= this._length) {
            return false;
        }

        if (position === 0) {
            if (!_head) {
                this._head = node;
                this._tail = node;
            } else {
                node.next = current;
                current.prev = node;
                this._head = node;
            }
        } else if (position === this._length) {
            current = this._tail;
            current.next = node;
            node.prev = current;
            this._tail = node;
        } else {
            let index = 0;
            let previous;

            while (index < position) {
                previous = current;
                current = current.next;
                index += 1;
            }
            node.next = current;
            previous.next = node;

            current.prev = node;
            node.prev = previous;
        }

        this._length += 1;

        return true;
    }

    removeAt(position) {
        let current = this._head;

        if (position < 0 && position >= this._length) {
            return null;
        }

        if (position === 0) {
            this._head = current.next;

            if (this._length === 1) {
                this._tail = null;
            } else {
                this._head.prev = null;
            }
        } else if (position === this._length - 1) {
            current = this._tail;
            this._tail = current.prev;
            this._tail.next = null;
        } else {
            let index = 0;
            let previous;

            while (index < position) {
                previous = current;
                current = current.next;
                index += 1;
            }

            previous.next = current.next;
            current.next.prev = previous;
        }

        this._length -= 1;

        return current.element;
    }

    indexOf(element) {
        let current = this._head;
        let index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index += 1;
            current = current.next;
        }

        return -1;
    }

    isEmpty() {
        return this._length === 0;
    }

    size() {
        return this._length;
    }

    toString() {
        let result = '';
        let current = this._head;

        while (current) {
            result += current.element;
            current = current.next;
        }

        return result;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

export default DoublyLinkedList