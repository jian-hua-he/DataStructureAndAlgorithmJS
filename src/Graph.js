import Dictionary from './Dictionary';
import Queue from './Queue';

let _initializeColor = (vertices) => {
    let color = [];
    vertices.forEach((v) => {
        color[v] = 'white';
    });

    return color;
}

let _dfsVisit = (adjList, u, color, callback) => {
    color[u] = 'grey';
    if (callback) {
        callback(u);
    }

    let neighbors = adjList.get(u);
    neighbors.forEach((n) => {
        if (color[n] === 'white') {
            _dfsVisit(adjList, n, color, callback);
        }
    });

    color[u] = 'black';
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

            neighbors.forEach((n) => {
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

    dfs(callback) {
        let that = this;
        let color = _initializeColor(that._vertices);

        that._vertices.forEach((n) => {
            if (color[n] === 'white') {
                _dfsVisit(that._adjList, n, color, callback);
            }
        });
    }

    toString() {
        let that = this;
        let result = '';
        that._vertices.forEach((v) => {
            let neighbors = that._adjList.get(v);
            
            result += v + '->';
            neighbors.forEach((n) => {
                result += n + ' ';
            });

            result += '\n';
        });

        return result;
    }
}

export default Graph
