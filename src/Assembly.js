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

    union(otherSet) {
        let unionSet = new Assembly();
        let values = this.values();
        for (var i = 0; i < values.length; i += 1) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i += 1) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }
}

export default Assembly
