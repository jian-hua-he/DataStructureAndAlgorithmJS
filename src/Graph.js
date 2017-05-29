import Dictionary from './Dictionary';

class Graph {
    constructor() {
        this._vertices =[];
        this._adjList = new Dictionary();
    }

    addVertex(v) {
        this._vertices.push(v);
        this._adjList.set(v, []);
    }

    addEdge(v, w) {
        this._adjList.get(v).push(w);
        this._adjList.get(w).push(v);
    }

    toString() {
        let that = this;
        let result = '';
        that._vertices.forEach(function (v) {
            let neighbors = that._adjList.get(v);
            
            result += v + '->';
            neighbors.forEach(function (n) {
                result += n + ' ';
            });

            result += '\n';
        });

        return result;
    }
}