let _insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            _insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            _insertNode(node.right, newNode);
        }
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    insert(key) {
        let that = this;
        let newNode = new Node(key);

        if (that._root === null) {
            that._root = newNode;
        } else {
            _insertNode(that._root, newNode);
        }
    }

    search(key) {

    }

    inOrderTraverse() {

    }

    preOrderTraverse() {

    }

    postOrderTraverse() {

    }

    min() {

    }

    max() {

    }

    remove(key) {

    }
}

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export default BinarySearchTree
