let _length = 0;
let _head = null;

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
    append(element) {
        let node = new Node(element);

        if (_head === null) {
            _head = node;
        } else {
            let last = _getLastNode(_head);
            last.next = node;
        }

        _length += 1;
    }

    insert(position, element) {
        let node = new Node(element);
        let index = 0;
        let current = _head;
        let previous;

        if (position < 0 && position >= _length) {
            return false;
        }

        if (position === 0) {
            node.next = current;
            _head = node;
        } else {
            while (index < position) {
                previous = current;
                current = current.next;
                index += 1;
            }

            node.next = current;
            previous.next = node;
        }

        _length += 1;

        return true;
    }

    removeAt(position) {
        let index = 0;
        let current = _head;
        let previous;

        if (position < 0 && position >= _length) {
            return null;
        }

        if (position === 0) {
            let removed = _head;
            _head = _head.next;
            _length -= 1;
            return removed.element;
        }

        while (index < position) {
            previous = current;
            current = current.next;
            index += 1;
        }

        previous.next = current.next;
        _length -= 1;

        return current.element;
    }

    remove(element) {

    }

    indexOf(element) {

    }

    isEmpty() {
        return _length === 0;
    }

    size() {
        return _length;
    }

    toString() {
        let current = _head;
        let result = '';

        while (current) {
            result += current.element;
            current = current.next;
        }

        return result;
    }

    print() {

    }
}

export default LinkedList