class Dictionary {
    constructor() {
        this._items = {};
    }

    set(key, value) {
        this._items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this._items[key];
            return true;
        }

        return false;
    }

    has(key) {
        return key in this._items;
    }

    get(key) {
        return this.has(key) ? this._items[key] : undefined;
    }

    clear() {
        this._items = {};
    }

    size() {
        return Object.keys(this._items).length;
    }

    keys() {
        return Object.keys(this._items);
    }

    values() {
        let values = [];
        for (let index in this._items) {
            if (this.has(index)) {
                values.push(this._items[index]);
            }
        }

        return values;
    }
}

export default Dictionary
