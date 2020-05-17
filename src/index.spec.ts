import { GraphNode } from "./modules/graph/graph-node";

describe('A Graph  Node', () => {
   it('should be created', () => {
       const node = new GraphNode('Sample Node');
       expect(node).toBeDefined();
   });
});
