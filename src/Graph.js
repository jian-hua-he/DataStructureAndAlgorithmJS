import Dictionary from './Dictionary';
import Queue from './Queue';

let _initializeColor = (vertices) => {
    let color = [];
    vertices.forEach(function (v) {
        color[v] = 'white';
    });

    return color;
}

class Graph {
    constructor() {
        this._vertices = [];
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

    bfs(v, callback) {
        let that = this;
        let color = _initializeColor(that._vertices);
        let queue = new Queue();

        queue.enqueue(v);
        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = that._adjList.get(u);
            color[u] = 'grey';

            neighbors.forEach(function (n) {
                if (color[n] === 'white') {
                    color[n] = 'grey';
                    queue.enqueue(n);
                }
            });

            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
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

export default Graph
