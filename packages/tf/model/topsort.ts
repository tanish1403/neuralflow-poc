import { Layer } from "../layers/base";

export function revTopSort(layers: Layer[]): Layer[] {
  if (layers.length === 0) return [];
  const visited = new Set();
  const stack: Layer[] = [];
  const result: Layer[] = [];

  function dfs(layer: Layer) {
    if (visited.has(layer)) return;

    visited.add(layer);

    layer.input_nodes.forEach(dfs);

    stack.push(layer);
  }

  for (const layer of layers) {
    dfs(layer);
  }

  while (stack.length) {
    // TODO: Refactor this // some ts error using this way just for now
    // was thinking of doing this result.push(stack.pop());
    const l = stack.pop();
    l && result.push(l);
  }

  return result;
}
