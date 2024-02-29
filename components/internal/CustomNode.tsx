import React, { memo } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Layer as L } from "@/packages/tf/types";
import { Handle, NodeProps, Position } from "reactflow";

function CustomNode(props: NodeProps<L>) {
  const { data, isConnectable } = props;
  return (
    <div className="flex flex-col text-xs bg-gray-100">
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="font-bold border-b-white border-b-2 p-2">
        <h2>{data.name}</h2>
      </div>
      <div className="px-2 pb-2">
        {data.args.map((arg) => {
          return (
            <>
              <Label key={arg.GetName()} className="text-[0.5rem] m-0">
                {arg.GetName()}
              </Label>
              <Input className="text-[0.5rem] h-[20px]" />
            </>
          );
        })}
      </div>
      <Handle
        type="target"
        position={Position.Right}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(CustomNode);
