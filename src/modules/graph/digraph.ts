import { GraphEdge } from "./graph-edge";
import { GraphNode } from "./graph-node";
import { from, interval, of } from "rxjs";
import { concatMap, delay, map, mergeMap, take, tap } from "rxjs/operators";

export class DiGraph {
    private _aList: Map<GraphNode, GraphNode[]> = new Map();

    public addNode(node: GraphNode): Boolean {
        if (this._aList.has(node)) {
            return false;
        }
        this._aList.set(node, []);
        return true;
    }

    public addNodes(nodes: GraphNode[]) {
        nodes.forEach(node => this.addNode(node));
    }

    public addEdge(edge: GraphEdge): Boolean {
        if (!this._aList.has(edge.source) || !this._aList.has(edge.destination)) {
            throw Error('Node not in graph');
        }
        const destinations = this._aList.get(edge.source);
        if (!destinations.find(node => node === edge.destination)) {
            this._aList.get(edge.source).push(edge.destination);
            return true;
        }
        return false;

    }

    public addEdges(edges: GraphEdge[]) {
        edges.forEach(edge => this.addEdge(edge));
    }

    public childrenOf(node: GraphNode) {
        return this._aList.get(node);
    }

    public isLeaf(node: GraphNode) {
        return this.childrenOf(node).length == 0;
    }

    public hasNode(node: GraphNode) {
        return this._aList.has(node);
    }

    public getNode(name: string) {
        this._aList.forEach((adjacentNodes, keyNode) => {
            if (keyNode.name === name) {
                return keyNode;
            }
        });
    }

    public draw(container: HTMLDivElement) {
        const rows: HTMLDivElement[] = [];
        this._aList.forEach((adjacentNodes, keyNode) => {
            const row: HTMLDivElement = document.createElement('div');
            row.className = 'row';

            const key: HTMLDivElement = document.createElement('div');
            key.innerText = keyNode.name;
            key.className = 'key';

            row.appendChild(key);

            adjacentNodes.forEach(node => {
                const adjacentNodeDiv = document.createElement('div');
                adjacentNodeDiv.innerText = node.name;
                adjacentNodeDiv.className = 'element';
                row.appendChild(adjacentNodeDiv);
            });

            rows.push(row);
        });

        interval(300)
            .pipe(
                take(rows.length),
                map(index => rows[index]))
            .subscribe(row => {
                container.appendChild(row);});
    }
}
