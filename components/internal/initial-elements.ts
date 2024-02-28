import { dense } from "@/packages/tf/layers/dense";
import { MarkerType, Position } from "reactflow";

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 200 },
    data: dense,
  },
];

export const initialEdges = [
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
