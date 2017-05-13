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
    getHead() {
        return _head;
    }

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
            node.next = _head;
            _head = node;
            _length += 1;

            return true;
        }

        while (index < position) {
            previous = current;
            current = current.next;
            index += 1;
        }

        node.next = current;
        previous.next = node;

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
        let current = _head;
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
}

export default LinkedList