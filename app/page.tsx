"use client";
import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "@/components/internal/CustomNode";
import {
  initialEdges,
  initialNodes,
} from "@/components/internal/initial-elements";
import { LayoutMain } from "@/components/layout-main";
import { Sidebar } from "@/components/internal/Sidebar";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topologicalSort } from "@/lib/topologicalSort";
import { generateCodeCallback } from "@/lib/nodeToCode";
import { Node } from "reactflow";
const nodeTypes = {
  custom: CustomNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const graph = useRef<Record<string, string[]>>({});
  // const [topologicalOrder, setTopologicalOrder] = useState<string[]>([]);
  const onConnect: OnConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge(connection, eds));
      console.log("onConnect", connection);
      if (connection.source && connection.target) {
        if (!graph.current[connection.source]) {
          graph.current[connection.source] = [];
        }
        graph.current[connection.source].push(connection.target);
        if (!graph.current[connection.target]) {
          graph.current[connection.target] = [];
        }
      }
    },
    [setEdges, graph],
  );

  const generateCode = useCallback(generateCodeCallback, []);

  return (
    <LayoutMain>
      <Sidebar reactFlowInstance={reactFlowInstance} setNodes={setNodes} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={setReactFlowInstance}
        fitView
        nodeTypes={nodeTypes}
      />
      <Button
        onClick={() => generateCode(nodes, graph.current)}
        className="h-[70px] w-[70px] absolute bottom-10 right-10 bg-orange-400 rounded-full text-black hover:text-white"
      >
        <Zap />
      </Button>
    </LayoutMain>
  );
}
