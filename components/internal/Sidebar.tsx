import { Layers3, Play } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { input, layers, Layer as L } from "@/packages/tf";
import { useCallback } from "react";

let id = 1;
const getId = () => `${id++}`;

export function Sidebar({
  reactFlowInstance,
  setNodes,
}: {
  reactFlowInstance: any;
  setNodes: any;
}) {
  const onClick = useCallback(
    (layer: L) => {
      if (!reactFlowInstance) return <></>;
      const position = reactFlowInstance.screenToFlowPosition({
        x: 1200,
        y: 144, //this keeps new nodes leveled at the same y axis
      });

      const newNode = {
        id: getId(),
        type: "custom",
        position,
        data: layer,
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes],
  );

  return (
    <div className="absolute flex flex-col top-5 left-5 z-30 gap-2">
      <Button
        className="flex flex-col justify-around h-[5rem] w-[5rem]"
        variant={"outline"}
        onClick={() => {
          onClick(input);
        }}
      >
        <Play fill="black" />
        <h2>Input</h2>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-white flex flex-col hover:bg-accent hover:text-accent-foreground items-center border rounded-md p-2 justify-around h-[5rem] w-[5rem]">
          <Layers3 />
          <h2>Layer</h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col pl-2 ml-5">
          <DropdownMenuLabel>Layers</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {layers.map((layer) => {
            return (
              <DropdownMenuItem
                key={layer.name}
                onClick={() => {
                  onClick(layer);
                }}
              >
                {layer.name}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
