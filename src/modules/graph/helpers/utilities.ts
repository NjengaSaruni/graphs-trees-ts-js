import { DiGraph } from "../digraph";
import { GraphNode } from "../graph-node";

export enum GraphSearchType {
    BFS,
    DFS
}
// export function shortestPath(graph: DiGraph, source: GraphNode, destination: GraphNode, searchType = GraphSearchType.DFS) {
//     const path: GraphNode[] = [];
//
//     if (searchType === GraphSearchType.DFS) {
//         const seen: Set<GraphNode> = new Set<GraphNode>();
//         depthFirstShortestPath(graph, source, destination, seen, path);
//         return path;
//     }
// }
//
// function depthFirstShortestPath(graph: DiGraph, source: GraphNode, destination: GraphNode, path: GraphNode[], seen: Set<GraphNode>) {
//     seen.add(source);
//
//     graph.childrenOf(source)
//         .filter(child => !seen.has(child))
//         .forEach(child => {
//             let newBest: GraphNode[] = [];
//
//             if (child === destination) {
//                 path.push(child);
//                 return;
//             } else if(graph.isLeaf(child)) {
//                 seen.add(child);
//             } else {
//                 newBest = []
//                 return depthFirstShortestPath(graph, child, destination, seen, path)
//             }
//
//             return newBest;
//         });
// }
