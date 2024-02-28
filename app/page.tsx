"use client";
import React from "react";
import ReactFlow, { MarkerType, useEdgesState, useNodesState } from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "@/components/internal/CustomNode";
import {
  initialEdges,
  initialNodes,
} from "@/components/internal/initial-elements";
import { LayoutMain } from "@/components/layout-main";
import { Button } from "@/components/ui/button";
import { Layers, Layers3, Play } from "lucide-react";

const nodeTypes = {
  custom: CustomNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <LayoutMain>
      <div className="absolute flex flex-col top-5 left-5 z-30 gap-2">
        <Button
          className="flex flex-col justify-around h-[5rem] w-[5rem]"
          variant={"outline"}
        >
          <Play fill="black" />
          <h2>Input</h2>
        </Button>
        <Button
          className="flex flex-col justify-around h-[5rem] w-[5rem]"
          variant={"outline"}
        >
          <Layers3 />
          <h2>Layer</h2>
        </Button>
      </div>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={nodeTypes}
      />
    </LayoutMain>
  );
}
