function _getLastNode(head) {
    let last = head;

    while (last.next) {
        last = last.next;
    }

    return last;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }

    getHead() {
        return this._head;
    }

    append(element) {
        let node = new Node(element);

        if (this._head === null) {
            this._head = node;
        } else {
            let last = _getLastNode(this._head);
            last.next = node;
        }

        this._length += 1;
    }

    insert(position, element) {
        let node = new Node(element);
        let index = 0;
        let current = this._head;
        let previous;

        if (position < 0 && position >= this._length) {
            return false;
        }

        if (position === 0) {
            node.next = this._head;
            this._head = node;
            this._length += 1;

            return true;
        }

        while (index < position) {
            previous = current;
            current = current.next;
            index += 1;
        }

        node.next = current;
        previous.next = node;

        this._length += 1;

        return true;
    }

    removeAt(position) {
        let index = 0;
        let current = this._head;
        let previous;

        if (position < 0 && position >= this._length) {
            return null;
        }

        if (position === 0) {
            let removed = this._head;
            this._head = this._head.next;
            this._length -= 1;
            return removed.element;
        }

        while (index < position) {
            previous = current;
            current = current.next;
            index += 1;
        }

        previous.next = current.next;
        this._length -= 1;

        return current.element;
    }

    remove(element) {
        let index = this.indexOf(element);
        if (index === -1) {
            return index;
        }

        this.removeAt(index);
        return index;
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
        let current = this._head;
        let result = '';

        while (current) {
            result += current.element;
            current = current.next;
        }

        return result;
    }
}

export default LinkedList