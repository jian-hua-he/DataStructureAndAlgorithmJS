class Assembly {
    constructor() {
        this._items = {};
    }

    add(value) {
        if ( ! this.has(value)) {
            this._items[value] = value;
            return true;
        }

        return false;
    }

    remove(value) {
        if (this.has(value)) {
            delete this._items[value];
            return true;
        }

        return false;
    }

    has(value) {
        return this._items.hasOwnProperty(value);
    }

    clear() {
        this._items = {};
    }

    size() {
        return Object.keys(this._items).length;
    }

    values() {
        return Object.keys(this._items);
    }

    union(otherSet) {
        let result = new Assembly();
        let values = this.values();
        for (let i = 0; i < values.length; i += 1) {
            result.add(values[i]);
        }

        values = otherSet.values();
        for (let i = 0; i < values.length; i += 1) {
            result.add(values[i]);
        }

        return result;
    }

    intersection(otherSet) {
        let result = new Assembly();
        let values = this.values();

        for (let i = 0; i < values.length; i += 1) {
            if (otherSet.has(values[i])) {
                result.add(values[i]);
            }
        }

        return result;
    }

    difference(otherSet) {
        let result = new Assembly();
        let values = this.values();

        for (let i = 0; i < values.length; i += 1) {
            if (!otherSet.has(values[i])) {
                result.add(values[i]);
            }
        }

        return result;
    }
}

export default Assembly
