let _items = {};

class Assembly {
    add(value) {
        if ( ! this.has(value)) {
            _items[value] = value;
            return true;
        }

        return false;
    }

    remove(value) {
        if (this.has(value)) {
            delete _items[value];
            return true;
        }

        return false;
    }

    has(value) {
        return _items.hasOwnProperty(value);
    }

    clear() {
        _items = {};
    }

    size() {
        return Object.keys(_items).length;
    }

    values() {
        return Object.keys(_items);
    }
}

export default Assembly
