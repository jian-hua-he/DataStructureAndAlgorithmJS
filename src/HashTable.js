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
        this._table[position] = value;
    }

    remove(key) {
        let position = _loseloseHashCode(key);
        this._table[position] = undefined;
    }

    get(key) {
        let position = _loseloseHashCode(key);
        return this._table[position];
    }
}