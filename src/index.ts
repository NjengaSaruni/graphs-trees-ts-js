import { DiGraph } from "./modules/graph/digraph";
import { GraphNode } from "./modules/graph/graph-node";
import { GraphEdge } from "./modules/graph/graph-edge";
import { fromEvent, interval } from "rxjs";

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function drawCssLearningZone(content: HTMLDivElement, name: string) {
    let stylesheet = document.getElementById(`${name}`);
    if(stylesheet) {
        stylesheet.id = `${name}.1`;
    }

    const promise = fetch(`src/modules/css-tips/${name}.html`)
        .then(data => data.text())
        .then(html => {
            const zone = document.createElement('div');
            zone.innerHTML = html;
            content.innerHTML = zone.innerHTML;
        });

    var head = document.getElementsByTagName('HEAD')[0];
    //
    // // Create new link Element
    var link = document.createElement('link');
    //
    // // set the attributes for link element
    link.rel = 'stylesheet';
    //
    link.type = 'text/css';
    //
    link.href = `src/modules/css-tips/${name}.css`;

    link.id = `${name}`;
    //
    // // Append link element to HTML head
    head.appendChild(link);

    setTimeout(() => {
        stylesheet = document.getElementById(`${name}.1`);
        if (stylesheet) {
            stylesheet.parentNode.removeChild(stylesheet);
        }
    }, 600);

    return promise;
}
function drawDiGraph(content: HTMLDivElement) {
    const diGraph = new DiGraph();
    const nodeA = new GraphNode('A');
    const nodeB = new GraphNode('B');
    const nodeC = new GraphNode('C');
    const nodeD = new GraphNode('D');
    const nodeE = new GraphNode('E');

    diGraph.addNodes([ nodeA, nodeB, nodeC, nodeD, nodeE ]);
    diGraph.addEdges([
        new GraphEdge(nodeE, nodeD),
        new GraphEdge(nodeA, nodeD),
        new GraphEdge(nodeE, nodeC),
        new GraphEdge(nodeC, nodeA),
        new GraphEdge(nodeE, nodeB),
        new GraphEdge(nodeD, nodeE),
    ]);
    diGraph.draw(content);
}

(() => {
    const content: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
    interval(0).subscribe(_ => {
        drawCssLearningZone(content, '4');
    });

    // }
    // );
    // drawDiGraph(content);
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
