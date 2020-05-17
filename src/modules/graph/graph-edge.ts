import { GraphNode } from "./graph-node";

export class GraphEdge {
    private _source: GraphNode;
    get source(): GraphNode {
        return this._source;
    }

    set source(value: GraphNode) {
        this._source = value;
    }

    private _destination: GraphNode;
    get destination(): GraphNode {
        return this._destination;
    }

    set destination(value: GraphNode) {
        this._destination = value;
    }

    constructor(source: GraphNode, destination: GraphNode) {
        this._source = source;
        this._destination = destination;
    }

    toString() {
        return `${ this._source.toString() } => ${ this._destination.toString() }`
    }
}
