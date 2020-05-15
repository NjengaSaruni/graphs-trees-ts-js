import { from } from "rxjs";
import { GraphEdge } from "./modules/graph-edge";
import { GraphNode } from "./modules/graph-node";

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

(() => {
    const content = document.getElementById('content');

    from([1, 2, 3, 4, 5]).subscribe(
        value => {
            const node1 = new GraphNode(`Node ${value + 1}`);
            const node2 = new GraphNode(`Node ${value + 2}`);
            const edge = new GraphEdge(node1, node2);
            const edgeDiv: HTMLDivElement = document.createElement('div');
            edgeDiv.innerText = edge.toString();
            edgeDiv.style.backgroundColor = random_rgba();
            edgeDiv.style.height = '50px';
            content.appendChild(edgeDiv);
        }
    );
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
