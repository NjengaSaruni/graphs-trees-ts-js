import { DiGraph } from "./modules/digraph";
import { GraphNode } from "./modules/graph-node";
import { GraphEdge } from "./modules/graph-edge";

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

(() => {
    const content = document.getElementById('content');

    const diGraph = new DiGraph();
    const nodeA = new GraphNode('A');
    const nodeB = new GraphNode('B');
    const nodeC = new GraphNode('C');
    const nodeD = new GraphNode('D');
    const nodeE = new GraphNode('E');

    diGraph.addNodes([nodeA, nodeB, nodeC, nodeD, nodeE]);
    diGraph.addEdges([
        new GraphEdge(nodeE, nodeD),
        new GraphEdge(nodeA, nodeD),
        new GraphEdge(nodeE, nodeA),
    ]);
    content.appendChild(diGraph.draw());
    // for (const index of Array(10000).keys()) {
    //     const div: HTMLDivElement = document.createElement('div');
    //     // div.innerText = new GraphNode(`Node - ${index + 1}`).toString();
    //     // div.style.backgroundColor = random_rgba();
    //     // div.style.width = `${(index * 10) + 1}px`;
    //     // content.appendChild(div);
    //
    //     const node1 = new GraphNode('Node 1');
    // };
})();
