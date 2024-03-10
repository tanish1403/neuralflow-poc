export function topologicalSort(graph: Record<string, string[]>) {
  console.log(graph);
  // Initialize inDegree for each node to 0 and parents list
  let inDegree: Record<string, number> = {};
  // Object to keep track of parents for each node
  let parents: Record<string, string[]> = {}; // Initialize parents object
  // Array to keep track of nodes with no incoming edges
  let queue: string[] = [];

  // Calculate the inDegree for each node and populate parents
  for (let node in graph) {
    if (inDegree[node] === undefined) {
      inDegree[node] = 0;
    }
    if (!parents[node]) {
      parents[node] = [];
    }
    for (let neighbor of graph[node]) {
      if (inDegree[neighbor] === undefined) {
        inDegree[neighbor] = 0;
      }

      // Increment the in-degree for the neighbor
      inDegree[neighbor]++;

      // Initialize the parents array for the neighbor if not already initialized
      if (!parents[neighbor]) {
        parents[neighbor] = [];
      }

      // Add the current node as a parent of the neighbor
      if (!parents[neighbor].includes(node)) {
        parents[neighbor].push(node);
      }
    }
  }

  // Find all nodes with no incoming edges and their parents
  for (let node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }
  // The array to store the topological order
  let topologicalOrder = [];

  // Process nodes with no incoming edges
  while (queue.length) {
    let node = queue.shift(); // Remove a node from the start of the queue
    topologicalOrder.push(node); // Add it to the topological order
    if (node === undefined) {
      // This should never happen in this context, but TypeScript needs us to check
      continue;
    }

    // Decrease inDegree for all neighbors
    for (let neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return topologicalOrder as string[];
}
