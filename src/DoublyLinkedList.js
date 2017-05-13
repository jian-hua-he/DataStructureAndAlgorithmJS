let _length = 0;
let _head = null;
let _tail = null;

class DoublyLinkedList {
    insert(position, element) {
        let node = new Node(element);
        let current = _head;

        if (position < 0 && position >= _length) {
            return false;
        }

        if (position === 0) {
            if (!_head) {
                _head = node;
                _tail = node;
            } else {
                node.next = current;
                current.prev = node;
                _head = node;
            }
        } else if (position === _length) {
            current = _tail;
            current.next = node;
            node.prev = current;
            _tail = node;
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

        _length += 1;

        return true;
    }

    toString() {
        let result = '';
        let current = _head;

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