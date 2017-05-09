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

    }

    // TODO: need fix
    removeAt(position) {
        let index = 0;
        let current = _head;

        if (position < 0 && position >= _length) {
            return null;
        }

        if (position === 0) {
            _head = _head.next;
            _length -= 1;
            return _head.element;
        }

        while (index < position) {
            let previous;

            previous = current;
            current = current.next;
            index += 1;
        }

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