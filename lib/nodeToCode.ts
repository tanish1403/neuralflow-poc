import { Layer as L } from "@/packages/tf";
import { topologicalSort } from "./topologicalSort";
import { Node } from "reactflow";

function importLayersCode(layer: L, id: string) {
  let code = `from tensorflow.keras.layers import ${layer.nameTf}\n`;
  // code += `${layer.name.toLowerCase()}_${id} = ${layer.nameTf}(######)\n`;
  // code += `\n`;
  return code;
}

function isInputNode(nodes: Node[], id: string): boolean {
  const n = nodes.find((n) => n.id === id);
  if (n && n.data.name === "Input") {
    return true;
  }
  return false;
}

function initializeLayersCode(
  layer: L,
  id: string,
  order: string[],
  nodes: Node[],
) {
  let code = ``;
  code += `${layer.name.toLowerCase()}_${id} = ${layer.nameTf}(######) ${!isInputNode(nodes, id) ? `()` : ""}\n`;
  return code;
}

export function generateCodeCallback(
  nodes: Node[],
  graph: Record<string, string[]>,
) {
  const order = topologicalSort(graph);
  // console.log(order);
  let code =
    "import tensorflow as tf\nfrom tensorflow.keras.models import Model\n";
  order.forEach((node) => {
    const n = nodes.find((n) => n.id === node);
    if (n) {
      // console.log(n.data);
      code += importLayersCode(n.data, node);
    }
  });
  order.forEach((node) => {
    const n = nodes.find((n) => n.id === node);
    if (n) {
      code += initializeLayersCode(n.data, node, order, nodes);
    }
  });
  console.log(code);
}
