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

    removeAt(position) {

    }

    remove(element) {

    }

    indexOf(element) {

    }

    isEmpty() {

    }

    size() {

    }

    toString() {

    }

    print() {

    }
}

export default LinkedList