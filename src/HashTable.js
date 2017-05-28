import './LinkedList';

function _loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
        hash += key.charCodeAt(i);
    }

    return hash % 37;
}

class HashTable {
    constructor() {
        this._table = [];
    }

    put(key, value) {
        let position = _loseloseHashCode(key);
        if (this._table[position] == undefined) {
            this._table[position] = new LinkedList();
        }

        this._table[position].append(new ValuePair(key, value));
    }

    remove(key) {
        let position = _loseloseHashCode(key);
        if (this._table[position] !== undefined) {
            let current = this._table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    this._table[position].remove(current.element);
                    if (this._table[position].isEmpty()) {
                        this._table[position] = undefined;
                    }

                    return true;
                }

                current = current.next;
            }

            if (current.element.key === key) {
                this._table[position].remove(current.element);
                if (this._table[position].isEmpty()) {
                    this._table[position] = undefined;
                }

                return true;
            }
        }

        return false;
    }

    get(key) {
        let position = _loseloseHashCode(key);
        if (this._table[position] == undefined) {
            return undefined;
        }

        let current = table[position].getHead();
        while(current.next) {
            if (current.element.key === key) {
                return current.element.value;
            }

            current = current.next;
        }

        if (current.element.key === key) {
            return current.element.value;
        }

        return undefined;
    }
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[${this.key} - ${this.value}]`;
    }
}

export default HashTable